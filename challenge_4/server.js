const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const port = 3000; 
const morgan = require('morgan'); 
const path = require('path'); 

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev')); 

// ROUTES

app.listen(port, () => console.log(`Server listening on port ${port}...`));