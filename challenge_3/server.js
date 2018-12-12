const express = require('express'); 
const app = express(); 
const port = 3000; 
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 

/*Serving static files*/
app.use(express.static(path.join(__dirname, '/public'))); 

/*Middleware */
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 


/*Routes*/
app.get('/', function(req, res) { 
  res.status(200).send('Welcome to the homepage')
});

app.listen(port, () => console.log(`App listening on port ${port}...`)); 