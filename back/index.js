require('dotenv').config();

//Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Instantiate server
const app = express();

const router = express.Router()



//bodyParser config
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

// Configure routes
const monrouter=require('./app/router/router');
const { Server } = require('http');
app.use(monrouter);
const PORT =  process.env.PORT || 3500 ;
app.use(express.static('public'));


app.listen(PORT, _ => {console.log(`LISTENING ON http://localhost:${PORT}`)});
