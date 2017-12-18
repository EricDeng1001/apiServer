var mongoose = require( 'mongoose' );
var User = mongoose.model( 'User' );

module.exports = ({ uid , username , password , onError , onSuccess }) => {
  var user = new User({
    uid: uid,
    username: username,
    password: password,
    createTime: new Date(),
  });

  user.save( err => {
    if( err ){
      return onError( err );
    }
    onSuccess();
  });

};
