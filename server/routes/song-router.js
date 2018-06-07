const express = require('express');
const router = express.Router();

// Get our connection to the database
const pool = require('../modules/pools');

router.get('/', (req, res) => {
    console.log('In song-router GET to read');
    // Build a string for the query
    const queryText = 'SELECT * FROM songs';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error getting all songs: ', err);
            res.sendStatus(500);
        })
});

router.post('/', (req, res) => {
    console.log('In song-router POST to create' , req.body);
 
    const album = req.body;
    const queryText = `INSERT INTO songs (artist, track, published, rank)
    VALUES ($1, $2, $3, $4)`;
 
    pool.query(queryText, [album.artist, album.track, album.published, album.rank])
        .then( (result) => {
            console.log('Back from DB', result);
            res.sendStatus(200);
        }).catch( (err) => {
            console.log('Error', err);
        });
 });

router.put('/:id', (req, res) => {
    console.log('In song-router PUT to update', req.body);
 
    const update = req.body;
    const id = req.params.id;
    let queryText = `UPDATE songs SET rank = $2 WHERE id=$1`;
 
    pool.query(queryText, [id, update.rank])
        .then( (result) => {
            console.log('back from DB with', result);
            res.sendStatus(200);
        }).catch( (err) => {
            console.log('Error', err);
            res.sendStatus(500);
        });
 });

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('In song-router DELETE to delete');
    const queryText = 'DELETE FROM songs WHERE id=$1';
    // Passing two things to the query
    // 1) the queryText
    // 2) the values to substitute into the query for the $1, $2 ect.
    // when subbing in multiple things, the order is important.
    pool.query(queryText, [id])
        .then((results) => {
            console.log('Successful delete of song', results);
            res.sendStatus(200);
        }).catch((err) => {
            console.log('Error deleting of song', error);
            res.sendStatus(500);
        })
});

module.exports = router;