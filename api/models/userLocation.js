var mongoose = require( 'mongoose' );
var UserLocation = new mongoose.Schema({
  uid: String,
  nickName: String,
  avatarUrl: String,
  gender: String,
  lat: Number,
  lng: Number,
  createTime: Date,
});

mongoose.model( 'UserLocation' , UserLocation );
