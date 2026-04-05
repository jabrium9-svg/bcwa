module.exports = async function handler(req, res) {
  const BIRD_API_KEY = process.env.BIRD_API_KEY
  const BIRD_FROM = (process.env.BIRD_FROM_NUMBER || '+18662091012').replace(/^\+/, '')

  if (!BIRD_API_KEY) {
    return res.status(500).json({
      error: 'BIRD_API_KEY is not set in environment variables',
      hint: 'Add BIRD_API_KEY in Vercel project settings → Environment Variables'
    })
  }

  // Show key prefix for debugging (never expose full key)
  const keyPreview = BIRD_API_KEY.substring(0, 8) + '...'

  try {
    const resp = await fetch('https://rest.messagebird.com/balance', {
      headers: { 'Authorization': `AccessKey ${BIRD_API_KEY}` }
    })
    const balanceBody = await resp.text()

    // Also try sending a test SMS if ?to= is provided
    let smsResult = null
    const testTo = (req.query.to || '').replace(/\D/g, '')
    if (testTo.length >= 10) {
      const digits = testTo.length === 10 ? '1' + testTo : testTo
      const smsResp = await fetch('https://rest.messagebird.com/messages', {
        method: 'POST',
        headers: {
          'Authorization': `AccessKey ${BIRD_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          originator: BIRD_FROM,
          recipients: [digits],
          body: 'BCWA Bird test — if you got this, SMS is working!'
        })
      })
      smsResult = {
        status: smsResp.status,
        body: await smsResp.text()
      }
    }

    return res.status(200).json({
      keyPreview,
      originator: BIRD_FROM,
      balance: { status: resp.status, body: balanceBody },
      sms: smsResult || 'Add ?to=5551234567 to send a test SMS'
    })
  } catch (err) {
    return res.status(500).json({
      keyPreview,
      originator: BIRD_FROM,
      error: err.message
    })
  }
}
