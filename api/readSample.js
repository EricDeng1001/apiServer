var mongoose = require( 'mongoose' );
var User = mongoose.model( 'User' );
module.exports = ({ query , onError , onSuccess }) => {
  User.find( query , ( err , res ) => {
    if( err ){
      return onError( err );
    }
    onSuccess( res );
  })
}
