const express = require('express');
const path = require('path');
const app = express();

// Angular dosyalarını serve et
app.use(express.static(__dirname + '/dist/angular-tour-of-heroes'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-tour-of-heroes/index.html'));
});

// Dinleme
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
