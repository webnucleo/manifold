process.env.ENTRY_IS_CLIENT = false;
require('./common-entry');
var config = require('../webpack.config.react-server');
module.exports = config;
