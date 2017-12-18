var mongoose = require( 'mongoose' );
var UserLocation = mongoose.model( 'UserLocation' );

module.exports = ({ gender , nickName , avatarUrl , lat , lng , uid , onSuccess , onError }) => {
  var newPosition = new UserLocation({
    uid: uid,
    nickName: nickName,
    gender: gender,
    avatarUrl: avatarUrl,
    lat: lat,
    lng: lng,
    createTime: new Date()
  });
  newPosition.save( ( err , result ) => {
    if( err ){
      return onError( err );
    }
    return onSuccess( result );
  });
}
