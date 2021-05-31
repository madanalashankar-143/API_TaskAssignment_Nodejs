const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');


const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3000;

// log request
app.use(morgan('tiny'));

//mongoDB Connection

connectDB();

//parse request to the body-parser
app.use(bodyParser.urlencoded({extended: true}));

//set view engine
// app.set("view engine", "ejs");


// app.set("views", path.resolve(__dirname, "views/ejs"));

//load assets

// app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
// app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
// app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

///css/style.css specific folder need to access then do as early of the sentences mention path.


//Load Routes

app.use('/', require('./server/routes/routers'));

app.listen(PORT, ()=>{
    console.log(`Service is running on http://localhost:${PORT}`);
})