const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/ExampleDB';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports.mongoose = mongoose;

const app = express();

nunjucks.configure(path.join(__dirname, '/src/view'), {
  autoescape: true,
  cache: false,
  express: app,
});

app.use(
  express.static(path.join(__dirname, '/src')),
  bodyParser(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
);

app.use('/', require('./router'));
// app.listen(require('./config.js').port);
// app.listen(process.env.PORT); // from heroku tutorial

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8888; // default is 8000
}
app.listen(port);


console.log('Server started!');
