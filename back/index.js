const express = require('express');
const app = express();
const router = express.Router();
const monrouter = require('./app/router/router');
app.use(monrouter);
require('dotenv').config();
const PORT =  process.env.PORT || 3500 ;
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.listen(PORT, _ => {console.log(`LISTENING ON http://localhost:${PORT}`)});
