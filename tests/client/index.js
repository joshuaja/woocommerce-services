// this file includes all *spec.js files
var context = require.context('../../client', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;