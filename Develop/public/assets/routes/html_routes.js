

const path = require('path');

module.exports = function (app) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'assets', 'index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
  });
};
