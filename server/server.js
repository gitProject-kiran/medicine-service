//mongoose.connect('mongodb://localhost/medicinedatabase');

// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();   
var mongoose   = require('mongoose');              // define our app using express
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/medicinedatabase', { useNewUrlParser: true } );

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
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

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
// on routes that end in /bears
// ----------------------------------------------------
router.route('/pincode')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var pincode = new Pincode();      // create a new instance of the Bear model
        pincode.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        pincode.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Pincode created!' });
        });

    })

    .get(function(req, res) {
        Pincode.find(function(err, pincode) {
            if (err)
                res.send(err);

            res.json(pincode);
        });
    });

router.route('/pincode/:pincode_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, pincode) {
            if (err)
                res.send(err);
            res.json(pincode);
        });
    })
    
    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Pincode.findById(req.params.pincode_id, function(err, pincode) {

            if (err)
                res.send(err);

            pincode.name = req.body.name;  // update the bears info

            // save the bear
            pincode.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Pincode updated!' });
            });

        });
    })
    
    .delete(function(req, res) {
        Pincode.remove({
            _id: req.params.pincode_id
        }, function(err, pincode) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);