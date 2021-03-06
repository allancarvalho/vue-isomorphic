const {devServer} = require('../dev-server-setup');
const webpack = require('../../webpack');

exports.vueDevServer = function () {
  return devServer({
    server: webpack({mode: 'server'}),
    client: webpack({mode: 'client'}),
  });
};