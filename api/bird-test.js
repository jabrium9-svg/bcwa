module.exports = async function handler(req, res) {
  const BIRD_API_KEY = process.env.BIRD_API_KEY
  const BIRD_WORKSPACE_ID = process.env.BIRD_WORKSPACE_ID
  const BIRD_CHANNEL_ID = process.env.BIRD_CHANNEL_ID

  const missing = []
  if (!BIRD_API_KEY) missing.push('BIRD_API_KEY')
  if (!BIRD_WORKSPACE_ID) missing.push('BIRD_WORKSPACE_ID')
  if (!BIRD_CHANNEL_ID) missing.push('BIRD_CHANNEL_ID')

  if (missing.length) {
    return res.status(500).json({
      error: `Missing env vars: ${missing.join(', ')}`,
      hint: 'Add these in Vercel project settings → Environment Variables. Get workspace ID and channel ID from app.bird.com.'
    })
  }

  const keyPreview = BIRD_API_KEY.substring(0, 8) + '...'

  try {
    // Test 1: Check auth by listing channels
    const authResp = await fetch(
      `https://api.bird.com/workspaces/${BIRD_WORKSPACE_ID}/channels/${BIRD_CHANNEL_ID}`,
      { headers: { 'Authorization': `Bearer ${BIRD_API_KEY}` } }
    )
    const channelBody = await authResp.text()

    // Test 2: Send a test SMS if ?to= is provided
    let smsResult = null
    const testTo = (req.query.to || '').replace(/\D/g, '')
    if (testTo.length >= 10) {
      const digits = testTo.length === 10 ? '1' + testTo : testTo
      const toNumber = '+' + digits
      const url = `https://api.bird.com/workspaces/${BIRD_WORKSPACE_ID}/channels/${BIRD_CHANNEL_ID}/messages`
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
      smsResult = {
        status: smsResp.status,
        body: await smsResp.text()
      }
    }

    return res.status(200).json({
      keyPreview,
      workspaceId: BIRD_WORKSPACE_ID,
      channelId: BIRD_CHANNEL_ID,
      channel: { status: authResp.status, body: channelBody },
      sms: smsResult || 'Add ?to=5551234567 to send a test SMS'
    })
  } catch (err) {
    return res.status(500).json({
      keyPreview,
      workspaceId: BIRD_WORKSPACE_ID,
      channelId: BIRD_CHANNEL_ID,
      error: err.message
    })
  }
}
