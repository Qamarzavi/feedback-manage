const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // to serve index.html if it's in a 'public' folder

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // For demo purposes: log credentials (don't do this in production!)
  console.log(Email: ${email}, Password: ${password});

  // Dummy check (replace with real authentication logic)
  if (email === 'test@example.com' && password === '1234') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT});
});
