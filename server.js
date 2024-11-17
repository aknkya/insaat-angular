const express = require('express');
const path = require('path');

// Express uygulaması oluştur
const app = express();

// Angular statik dosyaları (SSR olmayan kısım için)
app.use(express.static(path.join(__dirname, 'dist/angular-tour-of-heroes/browser')));

// SSR için server tarafındaki render motorunu dahil et
const ssrApp = require(path.join(__dirname, 'dist/angular-tour-of-heroes/server/main'));

// Angular SSR middleware'i
app.get('*', (req, res) => {
  ssrApp.handle(req, res);
});

// Sunucuyu başlat
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Angular app is running on port ${PORT}`);
});
