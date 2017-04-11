const express = require('express');
const {vueDevServer} = require('./middlewares/app');

const app = express();
app.use(vueDevServer());
app.use((req, res) => {
  let ctx = {url: req.url};
  req.vue.renderToString(ctx)
    .then((page) => {
      console.log(ctx);
      res.send(`<!DOCTYPE>
      <html>
      <head>
      <script>
        __INITIAL_STATE__ = ${JSON.stringify(ctx.initialState)} 
      </script>
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