var mongoose = require('mongoose');
var db = mongoose.connect( 'mongodb://localhost/mongo' );
require( './models/user' );
require( './models/userLocation' );
module.exports = db;
