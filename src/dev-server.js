const express = require('express');
const {vueDevServer} = require('./middlewares/app');

const app = express();
app.use(vueDevServer());
app.get('*', function (req, res) {
  req.vue.renderToString({url: req.url})
    .then((page) => {
      res.send(`<!DOCTYPE>
      <html>
      <head>
      </head>
      <body>
      <div id="app">
      ${page}
      </div>
      <script src="bundle.js"></script>
      </body>
      `);
    }).catch(e => {
      console.log(e);
      res.status(500).send(`error, ${e}`);
    })
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});