const BIRD_BASE = 'https://api.bird.com'

async function birdGet(path, apiKey) {
  const resp = await fetch(`${BIRD_BASE}${path}`, {
    headers: { 'Authorization': `Bearer ${apiKey}` }
  })
  return { status: resp.status, body: await resp.json().catch(() => resp.statusText) }
}

module.exports = async function handler(req, res) {
  const BIRD_API_KEY = process.env.BIRD_API_KEY

  if (!BIRD_API_KEY) {
    return res.status(500).json({ error: 'BIRD_API_KEY is not set' })
  }

  const keyPreview = BIRD_API_KEY.substring(0, 8) + '...'
  const results = { keyPreview, discovery: {} }

  try {
    // Probe various discovery endpoints to find org, workspace, and channels
    const endpoints = [
      '/workspaces',
      '/organizations',
      '/api/v1/workspaces',
      '/v2/workspaces',
      '/channels',
    ]

    for (const ep of endpoints) {
      results.discovery[ep] = await birdGet(ep, BIRD_API_KEY)
    }

    // If /workspaces returned data, try to list channels for each workspace
    const wsResult = results.discovery['/workspaces']
    let workspaces = []
    if (wsResult.status === 200) {
      const body = wsResult.body
      workspaces = body.results || body.data || body.items || (Array.isArray(body) ? body : [])
    }

    results.workspaces = workspaces.map(ws => ({
      id: ws.id,
      name: ws.name || ws.title,
      organizationId: ws.organizationId || ws.organization_id
    }))

    // For each workspace found, list its channels
    results.channels = {}
    for (const ws of workspaces.slice(0, 3)) {
      const wsId = ws.id
      if (!wsId) continue
      const chResult = await birdGet(`/workspaces/${wsId}/channels`, BIRD_API_KEY)
      results.channels[wsId] = chResult

      // If channels found, extract SMS ones
      if (chResult.status === 200) {
        const chBody = chResult.body
        const channels = chBody.results || chBody.data || chBody.items || (Array.isArray(chBody) ? chBody : [])
        results.channels[wsId] = channels.map(ch => ({
          id: ch.id,
          name: ch.name || ch.title,
          type: ch.type || ch.platform || ch.connectorType,
          status: ch.status
        }))
      }
    }

    // If workspace/channel found, try sending a test SMS
    const testTo = (req.query.to || '').replace(/\D/g, '')
    if (testTo.length >= 10 && workspaces[0]) {
      const wsId = workspaces[0].id
      const channelList = results.channels[wsId]
      const smsChannel = Array.isArray(channelList)
        ? channelList.find(c => /sms/i.test(c.type) || /sms/i.test(c.name)) || channelList[0]
        : null

      if (smsChannel) {
        const digits = testTo.length === 10 ? '1' + testTo : testTo
        const toNumber = '+' + digits
        const url = `${BIRD_BASE}/workspaces/${wsId}/channels/${smsChannel.id}/messages`
        const smsResp = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${BIRD_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            receiver: {
              contacts: [{ identifierKey: 'phone', identifierValue: toNumber }]
            },
            body: {
              type: 'text',
              text: { text: 'BCWA Bird test — if you got this, SMS is working!' }
            }
          })
        })
        results.smsTest = {
          workspaceId: wsId,
          channelId: smsChannel.id,
          to: toNumber,
          status: smsResp.status,
          body: await smsResp.json().catch(() => smsResp.statusText)
        }
      } else {
        results.smsTest = 'No channels found to send through'
      }
    } else if (testTo.length < 10 && testTo.length > 0) {
      results.smsTest = 'Phone number too short — use full number e.g. ?to=5551234567'
    } else {
      results.smsTest = 'Add ?to=5551234567 to send a test SMS (after channels are discovered)'
    }

    // Summary: what env vars to set
    if (workspaces[0]) {
      const wsId = workspaces[0].id
      const channelList = results.channels[wsId]
      const smsChannel = Array.isArray(channelList)
        ? channelList.find(c => /sms/i.test(c.type) || /sms/i.test(c.name)) || channelList[0]
        : null
      results.envVarsToSet = {
        BIRD_WORKSPACE_ID: wsId,
        BIRD_CHANNEL_ID: smsChannel ? smsChannel.id : 'NO_SMS_CHANNEL_FOUND'
      }
    }

    return res.status(200).json(results)
  } catch (err) {
    results.error = err.message
    return res.status(500).json(results)
  }
}
