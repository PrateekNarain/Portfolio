export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Forward the request to Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Vercel reads environment variables from process.env
        'Authorization': `Bearer ${process.env.VITE_RESEND_API_KEY}`
      },
      // Pass the body we received directly to Resend
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json(data);
    } else {
      return res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Vercel Function Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
