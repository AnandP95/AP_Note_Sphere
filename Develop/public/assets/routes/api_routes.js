const fs = require('fs');
const path = require('path');

module.exports = function (app) {
  app.get('/api/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
  });

  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = readNotes();

    newNote.id = generateUniqueId();
    notes.push(newNote);

    saveNotes(notes);
    res.json(newNote);
  });
};

function readNotes() {
  const data = fs.readFileSync('db.json', 'utf8');
  return JSON.parse(data) || [];
}

function saveNotes(notes) {
  fs.writeFileSync('db.json', JSON.stringify(notes), 'utf8');
}

function generateUniqueId() {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}
