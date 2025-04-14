const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Intentionally add a minor security flaw for CodeQL to detect (e.g., no rate limiting)
app.get('/api/data', (req, res) => {
  res.json({ message: 'This endpoint is open!' });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
