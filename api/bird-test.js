const BIRD_BASE = 'https://api.bird.com'

module.exports = async function handler(req, res) {
  const BIRD_API_KEY = process.env.BIRD_API_KEY
  const BIRD_WORKSPACE_ID = process.env.BIRD_WORKSPACE_ID
  const BIRD_CHANNEL_ID = process.env.BIRD_CHANNEL_ID

  const missing = []
  if (!BIRD_API_KEY) missing.push('BIRD_API_KEY')
  if (!BIRD_WORKSPACE_ID) missing.push('BIRD_WORKSPACE_ID')
  if (!BIRD_CHANNEL_ID) missing.push('BIRD_CHANNEL_ID')
  if (missing.length) {
    return res.status(500).json({ error: `Missing env vars: ${missing.join(', ')}` })
  }

  const keyPreview = BIRD_API_KEY.substring(0, 8) + '...'
  const testTo = (req.query.to || '').replace(/\D/g, '')

  try {
    // Always verify channel exists
    const chResp = await fetch(`${BIRD_BASE}/workspaces/${BIRD_WORKSPACE_ID}/channels/${BIRD_CHANNEL_ID}`, {
      headers: { 'Authorization': `Bearer ${BIRD_API_KEY}` }
    })
    const chBody = await chResp.json().catch(() => chResp.statusText)
    const channelCheck = { status: chResp.status, body: chBody }

    // Send test SMS if ?to= provided
    let smsTest = null
    if (testTo.length >= 10) {
      const digits = testTo.length === 10 ? '1' + testTo : testTo
      const toNumber = '+' + digits
      const url = `${BIRD_BASE}/workspaces/${BIRD_WORKSPACE_ID}/channels/${BIRD_CHANNEL_ID}/messages`
      const payload = {
        receiver: {
          contacts: [{ identifierKey: 'phone', identifierValue: toNumber }]
        },
        body: {
          type: 'text',
          text: { text: 'BCWA Bird test — if you got this, SMS is working!' }
        }
      }
      const smsResp = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${BIRD_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      smsTest = {
        url,
        to: toNumber,
        payload,
        status: smsResp.status,
        response: await smsResp.json().catch(() => smsResp.statusText)
      }
    }

    return res.status(200).json({
      keyPreview,
      workspaceId: BIRD_WORKSPACE_ID,
      channelId: BIRD_CHANNEL_ID,
      channelCheck,
      smsTest: smsTest || 'Add ?to=5551234567 to send a test SMS'
    })
  } catch (err) {
    return res.status(500).json({ keyPreview, workspaceId: BIRD_WORKSPACE_ID, channelId: BIRD_CHANNEL_ID, error: err.message })
  }
}
