const express = require('express');
const path = require('path');

const app = express();

// Angular'ın build çıktısını servise aç
app.use(express.static(path.join(__dirname, 'dist/angular-tour-of-heroes')));

// Tüm istekleri Angular uygulamasına yönlendir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-tour-of-heroes/index.html'));
});

// Uygulamanızı Heroku'nun sağladığı porta bağlayın
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
