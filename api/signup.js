// Preview-request form handler.
// Emails each request to Jim through Postmark. The inbox is the record;
// nothing is stored here.

const POSTMARK_URL = 'https://api.postmarkapp.com/email'
const TO = 'james@jabrium.com'
const FROM = 'Bot Cheewawa <james@jabrium.com>'

// Basic per-IP limit. In-memory, so it is per function instance, not global:
// enough to stop a single script hammering the form, not a determined attacker.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map()

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for']
  if (fwd) return String(fwd).split(',')[0].trim()
  return req.headers['x-real-ip'] || (req.socket && req.socket.remoteAddress) || 'unknown'
}

function rateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter(t => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every(t => now - t >= WINDOW_MS)) hits.delete(key)
    }
  }
  return recent.length > MAX_PER_WINDOW
}

// Single line, bounded length: keeps the subject and body tidy and inert.
function clean(value, max) {
  return String(value || '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, max)
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body || {}

  // Honeypot: a hidden field people never see. Bots fill it in.
  // Answer as if it worked so they learn nothing.
  if (body.website_url) {
    return res.status(200).json({ success: true })
  }

  const ip = clientIp(req)
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a few minutes.' })
  }

  const name = clean(body.name, 200)
  const email = clean(body.email, 254)
  const link = clean(body.link, 500)

  if (!name) return res.status(400).json({ error: 'Name is required' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' })
  }
  if (!link) return res.status(400).json({ error: 'A link to your group, channel or website is required' })

  const token = process.env.POSTMARK_SERVER_TOKEN
  if (!token) {
    console.error('[preview-request] POSTMARK_SERVER_TOKEN is not set')
    return res.status(500).json({ error: 'Something went wrong. Please email james@jabrium.com directly.' })
  }

  const textBody = [
    'New Bot Cheewawa preview request',
    '',
    `Name:  ${name}`,
    `Email: ${email}`,
    `Link:  ${link}`,
    '',
    `Received: ${new Date().toISOString()}`,
    'Reply to this email to answer them directly.'
  ].join('\n')

  try {
    const resp = await fetch(POSTMARK_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': token
      },
      body: JSON.stringify({
        From: FROM,
        To: TO,
        ReplyTo: email,
        Subject: `BCWA preview request: ${name}`,
        TextBody: textBody,
        MessageStream: 'outbound',
        Tag: 'bcwa-preview-request'
      })
    })
    if (!resp.ok) {
      const detail = await resp.text().catch(() => '')
      console.error(`[preview-request] Postmark error ${resp.status}: ${detail.slice(0, 300)}`)
      throw new Error('send failed')
    }
  } catch (err) {
    return res.status(502).json({ error: 'We couldn\'t send your request. Please try again, or email james@jabrium.com.' })
  }

  return res.status(200).json({ success: true })
}
