const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup router
const songRouter = require('./routes/song-router');
app.use('/song', songRouter);

const PORT = process.env.PORT || 5000;
app.listen( PORT, function() {
    console.log('Server is listening on port', PORT );
})