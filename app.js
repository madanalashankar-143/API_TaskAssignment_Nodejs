const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');


const app = express();

//  I created a file config.env, In this file i declared PORT no and i called that file path using below syntax. 

dotenv.config({path:'config.env'});

//  In below syntax we declared port number but its not view on the url because i already gave a default port
//  number in config.env file. URL path is http://localhhost:4000. If we need to change port no just change on config.env file.

const PORT = process.env.PORT || 3000;

// log request
// app.use(morgan('tiny'));

//mongoDB Connection
connectDB();

//parse request to the body-parser
app.use(bodyParser.urlencoded({extended: true}));


//Load Routes

app.use('/', require('./server/routes/routers'));

app.listen(PORT, ()=>{
    console.log(`Service is running on http://localhost:${PORT}`);
})