const express = require('express');
const {appRender} = require('./middlewares/vue');
const {vueDevServer} = require('./middlewares/app');

let app = express();
app.use(vueDevServer());
app.use(appRender());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});