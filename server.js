// server.js
'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// schema
var Ids = require('./model/dataSchema');
// instances
var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

// db config
// pw can't have a %
mongoose.Promise = global.Promise;
// connection uri here
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// looks for json data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  // remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// initialize api

// use the router config when /api is called

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});
 

//adding the /comments route to our /api router
router.route('/ids')
 //retrieve all comments from the database
   .get(function(req, res) {
     Ids.find(function(err, id) {
        if (err) {
          res.send(err);
        }
        res.json(id);
       });
    })
   .post(function(req, res) {
    var id = new Ids();
    //  //body parser lets us use the req.body
    id['route_id'] = req.body.route_id;
    id['route_long_name'] = req.body.route_long_name;
    id['route_short_name'] = req.body.route_short_name;
    id.save(function(err) {
     if (err) {
      res.send(err);
     }
     res.json({ message: 'Comment successfully added!' });
     });
  });

app.use('/api', router);

// start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
