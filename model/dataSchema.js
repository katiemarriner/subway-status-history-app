// model/dataSchema.js
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ids = new Schema({
  route_id: String,
  route_long_name: String,
  route_short_name: String
});

module.exports = mongoose.model('Ids', Ids);
