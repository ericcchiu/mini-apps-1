const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');


// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));

app.unsubscribe(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/items', function (req, res) {
//   items.selectAll(function (err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.post('/convert', function (req, res) {
  console.log(req.body.jsonData);
  res.status(201).send(req.body)
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

