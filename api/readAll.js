var mongoose = require( 'mongoose' );
var UserLocation = mongoose.model( 'UserLocation' );

module.exports = ({ onSuccess , onError }) => {
  UserLocation.find( {} , ( err , res ) => {
    if( err ){
        return onError( err );
    }
    return onSuccess( res );
  });
};
