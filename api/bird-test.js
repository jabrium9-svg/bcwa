const BIRD_BASE = 'https://api.bird.com'
const WORKSPACE_ID = 'bd26d07a-a3de-445b-8120-d8a738a95130'

async function birdFetch(path, apiKey) {
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

  try {
    // List all channels for the workspace
    const channelsResult = await birdFetch(`/workspaces/${WORKSPACE_ID}/channels`, BIRD_API_KEY)

    let channels = []
    if (channelsResult.status === 200) {
      const body = channelsResult.body
      const raw = body.results || body.data || body.items || (Array.isArray(body) ? body : [])
      channels = raw.map(ch => ({
        id: ch.id,
        name: ch.name || ch.title,
        type: ch.type || ch.platform || ch.connectorType || ch.connector,
        status: ch.status,
        // include all top-level keys so we can see the full shape
        _raw: ch
      }))
    }

    // Try sending test SMS if ?to= provided and we found a channel
    let smsTest = null
    const testTo = (req.query.to || '').replace(/\D/g, '')
    const channelId = req.query.channel || null

    if (testTo.length >= 10 && channelId) {
      const digits = testTo.length === 10 ? '1' + testTo : testTo
      const toNumber = '+' + digits
      const url = `${BIRD_BASE}/workspaces/${WORKSPACE_ID}/channels/${channelId}/messages`
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
      smsTest = {
        url,
        to: toNumber,
        channelId,
        status: smsResp.status,
        body: await smsResp.json().catch(() => smsResp.statusText)
      }
    } else {
      smsTest = 'After finding the SMS channel ID below, test with ?channel=CHANNEL_ID&to=5551234567'
    }

    return res.status(200).json({
      keyPreview,
      workspaceId: WORKSPACE_ID,
      channelsEndpoint: { status: channelsResult.status, raw: channelsResult.body },
      channels,
      smsTest
    })
  } catch (err) {
    return res.status(500).json({ keyPreview, workspaceId: WORKSPACE_ID, error: err.message })
  }
}
