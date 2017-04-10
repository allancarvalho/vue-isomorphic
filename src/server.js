require("babel-register");
const express = require('express');
const app = express();
const renderer = require('vue-server-renderer').createRenderer()
const {app: vueApp, router} = require('./app');

app.get('*', function (req, res) {
  router.push(req.url);
  renderer.renderToString(vueApp, function (error, html) {
    if (error) throw error
    res.send(html);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
