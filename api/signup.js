const twilio = require('twilio')
const { Resend } = require('resend')

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)
const resend = new Resend(process.env.RESEND_API_KEY)

const TWILIO_FROM = process.env.TWILIO_FROM_NUMBER
const JABRIUM_LINK = 'https://app.jabrium.com?source=bcwa&group='

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, group } = req.body || {}

  // Validate
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' })
  }
  if (!phone || phone.replace(/\D/g, '').length < 10) {
    return res.status(400).json({ error: 'Valid phone number is required' })
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' })
  }
  if (!group || !group.trim()) {
    return res.status(400).json({ error: 'Facebook group name is required' })
  }

  const firstName = name.trim().split(/\s+/)[0]
  const groupSlug = group.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const link = JABRIUM_LINK + encodeURIComponent(groupSlug)

  const smsBody = `Hey ${firstName}, we're ready when you are. Tap here to get started: ${link}`

  console.log(`[BCWA Signup] name="${name}" phone="${phone}" email="${email}" group="${group}"`)

  // Send SMS (primary channel)
  let smsSent = false
  try {
    // Normalize phone: strip non-digits, prepend +1 if no country code
    let digits = phone.replace(/\D/g, '')
    if (digits.length === 10) digits = '1' + digits
    const toNumber = '+' + digits

    await twilioClient.messages.create({
      body: smsBody,
      from: TWILIO_FROM,
      to: toNumber
    })
    smsSent = true
    console.log(`[BCWA Signup] SMS sent to ${toNumber}`)
  } catch (err) {
    console.error('[BCWA Signup] SMS failed:', err.message)
  }

  // Send welcome email (backup channel)
  let emailSent = false
  try {
    await resend.emails.send({
      from: 'Bot Chee Wa Wa <hello@botcheewawa.com>',
      to: email,
      subject: `Welcome to BCWA, ${firstName}`,
      html: buildWelcomeEmail(firstName, group.trim(), link)
    })
    emailSent = true
    console.log(`[BCWA Signup] Email sent to ${email}`)
  } catch (err) {
    console.error('[BCWA Signup] Email failed:', err.message)
  }

  if (!smsSent && !emailSent) {
    return res.status(500).json({ error: 'We couldn\'t reach you. Please check your phone number and email and try again.' })
  }

  return res.status(200).json({
    success: true,
    smsSent,
    emailSent
  })
}

function buildWelcomeEmail(firstName, groupName, link) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #FDF6EC; color: #1A1A2E; }
    .wrap { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
    .header { text-align: center; margin-bottom: 40px; }
    .header h1 { font-size: 24px; font-weight: 700; color: #1B6B6D; letter-spacing: 2px; margin: 0; }
    .body p { font-size: 16px; line-height: 1.7; color: #333; margin: 0 0 16px; }
    .body strong { color: #1B6B6D; }
    .cta { display: block; text-align: center; margin: 32px 0; }
    .cta a { display: inline-block; background: #E8634A; color: white; text-decoration: none; padding: 16px 36px; border-radius: 100px; font-size: 15px; font-weight: 600; letter-spacing: 1px; }
    .section { background: #F5E6D3; border-radius: 12px; padding: 24px; margin: 32px 0; }
    .section h3 { font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #8B7355; margin: 0 0 16px; }
    .section ul { margin: 0; padding: 0 0 0 20px; }
    .section li { font-size: 15px; line-height: 1.6; color: #555; margin-bottom: 8px; }
    .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(0,0,0,0.08); text-align: center; font-size: 13px; color: #8B7355; }
    .footer a { color: #1B6B6D; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>BOT CHEE WA WA</h1>
    </div>
    <div class="body">
      <p>Hey ${firstName},</p>
      <p>Thanks for signing up. You're one of the first Facebook group admins to try BCWA, and we're glad <strong>${groupName}</strong> is coming along for the ride.</p>
      <p>Here's the deal: BCWA runs on <strong>Jabrium</strong>, a voice-first platform that lets you have real, ongoing conversations with your community members — off Facebook, off the algorithm, on your terms.</p>

      <div class="section">
        <h3>What happens next</h3>
        <ul>
          <li><strong>Tap the link below</strong> to open Jabrium and meet your BCWA agent</li>
          <li>Your agent will <strong>learn about your group</strong> and help you plan how to bring members off-platform</li>
          <li>When you're ready, you'll <strong>invite your members</strong> with a link you share in your Facebook group</li>
        </ul>
      </div>

      <div class="section">
        <h3>How Jabrium works</h3>
        <ul>
          <li><strong>Voice-first</strong> — tap and talk, like leaving a voice note. Your words get transcribed automatically.</li>
          <li><strong>Async by design</strong> — nobody has to be online at the same time. Conversations continue at everyone's own pace.</li>
          <li><strong>AI in the background</strong> — intelligent agents listen and help when needed, but never interrupt. You stay in control.</li>
        </ul>
      </div>

      <div class="cta">
        <a href="${link}">Get Started on Jabrium</a>
      </div>

      <p>If you have any questions, just reply to this email. A real person reads every one.</p>
      <p>— James McGinn, Founder</p>
    </div>
    <div class="footer">
      <p>Bot Chee Wa Wa &middot; Powered by <a href="https://jabrium.com">Jabrium</a></p>
    </div>
  </div>
</body>
</html>`
}
