const express = require('express'); 
const app = express(); 
const port = 3000; 
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database') 

/*Serving static files*/
app.use(express.static(path.join(__dirname, '../public'))); 

/*Middleware */
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 


/*Routes*/
app.get('/', function(req, res) { 
  res.status(200).send('Welcome to the homepage')
});

app.post('/signup', function(req, res) { 
  // console.log('THIS IS OUR BODY REQUEST from client', req.body)
  // console.log('DID DB CONNECT?: ', db) 
  let queryValues = [req.body.name, req.body.email, req.body.password]; 
  console.log('THIS IS AN ARRAY OF OUR QUERY VALUES PARSED!!!', queryValues); 
  let queryString = `INSERT INTO Account (username, email, pass) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;

  // db.query(queryString, function(error, results) { 
  //   if (error) { 
  //     console.log(error)
  //   }
  // });

  db.query(queryString, queryValues, function(error, results) {
    console.log('hellow');
    if(error) { 
      console.log('Signup route: Error making an insert into the database', error); 
    } else { 
      console.log(results); 
      res.status(201).send(results);
    }
  });
})

app.listen(port, () => console.log(`App listening on port ${port}...`)); 