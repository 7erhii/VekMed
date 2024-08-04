// server.js
const express = require('express');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post('/submit-form', (req, res) => {
  const apiKey = crypto.randomBytes(16).toString('hex');
  const cipher = crypto.createCipher('aes-256-cbc', 'secretKey');
  let encrypted = cipher.update(apiKey, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  res.cookie('apiKey', encrypted, { httpOnly: true, secure: true });
  
  res.send('API Key generated and stored in cookies');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
