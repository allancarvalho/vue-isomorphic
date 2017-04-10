const {devServer} = require('..');
const webpack = require('../../webpack');

exports.vueDevServer = function (ctx) {
  return devServer({
    server: webpack({mode: 'server'}),
    client: webpack({mode: 'client'})
  });
};