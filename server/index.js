const express = require('express')
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.static('public'))


// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'c2074224c6114a5aa89f8ef6bf67699e',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});




const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`listening on port ${port}.`)
})