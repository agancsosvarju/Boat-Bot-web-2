
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'https://mybotsite.com/callback';

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send("No code provided");

  try {
    const response = await axios.post(
      'https://discord.com/api/oauth2/token',
      new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        scope: 'identify guilds',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token } = response.data;
    console.log("Access token:", access_token);

    res.send("Sikeresen bejelentkeztél Discorddal! 🎉");
  } catch (err) {
    console.error(err.response?.data || err);
    res.status(500).send("Hiba történt.");
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
