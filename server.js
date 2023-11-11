const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static('Develop/public'));

// Require and use the HTML and API routes
require('./Develop/public/assets/routes/html_routes')(app);


require('./Develop/public/assets/routes/api_routes')(app);



// Catch-all route to serve the notes page for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Develop','public','assets', 'notes.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
