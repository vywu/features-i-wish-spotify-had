const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');


//Import other folders into the app so they can be used
const config = require("./config/database");
const paths = require('./routes/path');
// const userRoutes=require('./routes/user');

const mongoose = require('mongoose');




//Connect to database
mongoose.connect(config.database);

//Let us know when the connection is on
mongoose.connection.on('connected', function(){
    console.log("Connected to database: " + config.database);
});

//Check for database connection error
mongoose.connection.on('error', function(err){
    console.log("Database connection error: " + err);
});

//---------------------------------------------------------------
//Creating the express app
const app = express();


//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cookieParser middleware
app.use(cookieParser());

//Set static folder: now the browser will automatically search here for static files such as html pages, image files and
// css scripts.
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.use('/',paths);
app.use(cors());


const port = 3000;
app.listen(port, function() {
    console.log('Server started on port ' + port);
});

module.exports=app;
