const express = require('express');
const router = express.Router();

// Get our connection to the database
const pool = require('../modules/pools');

router.get('/', (req, res) => {
    console.log('In song-router GET to read');
    res.sendStatus(200);
});

router.post('/', (req, res) => {
    console.log('In song-router POST to create');
    res.sendStatus(200);

});

router.put('/', (req, res) => {
    console.log('In song-router PUT to update');
    res.sendStatus(200);
});

router.delete('/', (req, res) => {
    console.log('In song-router DELETE to delete');
    res.sendStatus(200);
});

module.exports = router;