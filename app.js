const https = require ('https');

console.log('I did it!');

var options = {
  host: 'www.google.com',
  path: '/'
}

//called by https when the request is made
var callback = (response) => {
  console.log('In response handler callback!');
  console.log('response', response)
};

console.log('I\'m about to make the request');

https.request(options, callback).end();

console.log('I\'ve made the request!');


 