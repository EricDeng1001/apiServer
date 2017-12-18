var fetch = require('node-fetch');
module.exports = ( code , onSuccess ) => {
  fetch('https://api.weixin.qq.com/sns/jscode2session?appid=wx92805860249c8430&secret=ff228da1d38e143c87b4ec5cb7d36a64&js_code=' + code + '&grant_type=authorization_code').then( response => response.json().then( json => onSuccess( json ) ) );
}
