const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const port = 3000; 
const morgan = require('morgan'); 
const path = require('path'); 
const db = require('./database/index');

// console.log('THIS IS WHAT WE IMPORTED FROM DB', db)

// MIDDLEWARE
// app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(express.static('./client/dist/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev')); 

// ROUTES
app.get('/scores', function(req, res) { 
  console.log('Accessed to /scores route'); 

  console.log('Making a query to db'); 

  db.query('Select * from scores', function(error, results) { 
    if (error) { 
      console.log('Error making a request to get all users from db', error); 
    } else {
      console.log('Our database results', results);
      res.status(200).send(results);
    }
  }); 
}); 

app.post('/addScores', function(req, res) { 
  console.log('Inside posting new scores'); 
  const obj = { 
    score: 22, 
    winner: 'Black', 
    challenger: 'Red'
  }

  const arrValues = [obj.score, obj.winner, obj.challenger];
  const queryStr = `INSERT INTO scores (score, winner, challenger) values (?, ?, ?)`;
  db.query(queryStr, arrValues, function(error, results) { 
    if(error) { 
      console.log('Error posting/inserting new scores into database', error); 
    } else { 
      console.log('Our database response for posting', results); 
      res.status(201).send(results);
    }
  });
})


app.listen(port, () => console.log(`Server listening on port ${port}...`));