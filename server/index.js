const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

const piecesPath = path.resolve(__dirname, '../react-ui/public/pieces');

// Answer API requests.
app.get('/api/pieces/:pieceType', function (req, res) {  
  const message = {
    pieces:fs.readdirSync(piecesPath).filter(name=>RegExp(req.params.pieceType,"g").test(name))
  };
  respond(res,message);
});

app.get('/api/pieces', function (req, res) {
  const message = {
    pieces:fs.readdirSync(piecesPath)
  };
  respond(res,message);
});

function respond(res, message){
  res.set('Content-Type', 'application/json');
  res.json(message);
}

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
