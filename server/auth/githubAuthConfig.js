var app = require('./../app.js');

var CLIENT_ID;
var CLIENT_SECRET;

if ( app.get('env') === 'development' ) {
  CLIENT_ID = '476dca26b617b2c27a23';
  CLIENT_SECRET = 'd9a82187bf260d1f78211e403b5c1892d3283e41';
} else {
  CLIENT_ID = '36a55c118954dd4828a5';
  CLIENT_SECRET = 'ef4707f581722bd82055fb98019666a556947455';
}

module.exports.CLIENT_ID = CLIENT_ID;
module.exports.CLIENT_SECRET = CLIENT_SECRET;