helmet.hidePoweredBy(X-Powered-By)

const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.disable('strict-transport-security');
const api = require('./server.js');
app.use('/_api', api);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
