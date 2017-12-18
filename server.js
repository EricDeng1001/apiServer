var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require( './api/connection.js' );
var createUser = require( './api/writeSample.js' );
var readUser = require( './api/readSample.js' );
var writeLocation = require( './api/writeLocation.js' );
var readAll = require( './api/readAll.js' );
var getUid = require( './api/getUid.js' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended: true
}));
app.all('*', ( req , res ,next ) => {
  res.header("Access-Control-Allow-Origin","*");
  next();
});

app.post( '/getUid' , ( req , res ) => {
  getUid( req.body.code , ({ openid }) => {
    res.send({ uid: openid });
  });
});

app.post( '/writeLocation' , ( req , res ) => {
  if( req.get( 'apiKey' ) !== '5a35222951974b2a4d5f60a9' ){
    res.send({ warning: "Permission denied" });
    return;
  }
  writeLocation({
    uid: req.body.uid,
    lat: req.body.lat,
    lng: req.body.lng,
    avatarUrl: req.body.avatarUrl,
    gender: req.body.gender,
    nickName: req.body.nickName,
    onSuccess() {
      res.send({ status: 'succeed' });
    },
    onError( err ) {
      res.send({ status: 'failed' , reason: err });
    }
  });
});

app.post( '/readAll' , ( req , res ) => {
  if( req.get( 'apiKey' ) !== '5a35222951974b2a4d5f60a9' ){
    res.send({ warning: "Permission denied" });
    return;
  }
  readAll({
    onSuccess( results ) {
      res.send({ status: 'succeed' , results: results });
    },
    onError( err ) {
      res.send({ status: 'failed' , reason: err });
    }
  });
})

app.post( '/createUser' , ( req , res ) => {
  if( req.get( 'apiKey' ) !== '5a35222951974b2a4d5f60a9' ){
    res.send({ warning: "Permission denied" });
    return;
  }
  createUser({
    uid: 1,
    username: req.body.username,
    password: req.body.password,
    onSuccess: () => res.send({ status : 0 }),
    onError: ( err ) => res.send( err )
  });
});

app.post( '/readUser' , ( req , res ) => {
    if( req.get( 'apiKey' ) !== '5a35222951974b2a4d5f60a9' ){
      res.send({ warning: "Permission denied" });
      return;
    }
    readUser({
      query: {},
      onSuccess: results => res.send( results )
    });
});

app.listen( 18080 );
console.log('server is running at 18080');
