var mongoose = require( 'mongoose' );
var UserLocation = mongoose.model( 'UserLocation' );

module.exports = ({ query , onSuccess , onError }) => {
  UserLocation.find( query , ( err , res ) => {
    if( err ){
        return onError( err );
    }
    return onSuccess( res );
  });
};
