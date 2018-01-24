var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const session = require("express-session");
app.use(session({
  secret: "1232213"
}));
var id = 1;

app.get( "/" , ( req , res ) => {
  console.log( req.session );
  console.log( req.session.id );
  if( req.session.token ){
    //res.send( req.session.id );
    res.send( `${req.session.token}` );
  } else {
    req.session.token = id++;
    res.send( `${req.session.token}` );
  }
});

app.get( "/id" , ( req , res ) => {
  res.send( `${req.session.token}` );
});

app.listen( 18080 );
console.log('server is running at 18080');
