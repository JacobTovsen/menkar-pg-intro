# PG Intro

## Songs API

### Setup

Download the code and do the following

1. Go into the project directory and run the command 'npm install'
2. Rn the SQL in the `databaseSetup.sql` file to setup the database.





pool is used to house connections to the DB


GET - need nothing if predetermined "GET all songs.  search criteria - query params
POST - uses body (req.body)
DELETE - uses request params for id
PUT - uses request params for id & req.body for data to update