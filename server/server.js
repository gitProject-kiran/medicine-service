// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();   
var mongoose   = require('mongoose');              // define our app using express
var bodyParser = require('body-parser');
var path = require("path");
const pincodeController = require("./controllers/pincodeController");

//db instance connections
require('./config/db')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

app.use(express.static(path.join(__dirname, 'public/')));


var Bear = require('./models/bears');
var Pincode = require('./models/pincodes');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route("/pincodes")
    .get(pincodeController.listAllPincodes)    
    .post(pincodeController.createNewPincode);
    
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use('/api', router);

app.get('/*',function(req,res){
    res.sendFile(__dirname + '/public/index.html'); 
});
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);