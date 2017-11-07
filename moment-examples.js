var moment = require('moment');
var now = moment();

//console.log(now.format());
//console.log(now.format('MMM D YYYY, h:mm a'));
//console.log(now.format('X'));
//console.log(now.valueOf('x'));

var timestamp = now.valueOf('x');
//14444247486704;
//console.log(timestamp);
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm a'));