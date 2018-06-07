const pg = require('pg');
const Pool = pg.pool;

const DATABASE_NAME = 'music_library';
const config = {
    database: DATABASE_NAME, // name of the db to connect to 
    host: 'localhost',      // where the db is located
    port: 5432,             // the port the db is listening on
    max: 10,                // max number of connections to our pool
    idleTimeoutMillis: 30000 // limit of 30 second to connect -> timeout
}

// Make the db connection pool
const pool = new pg.Pool(config);


//log that we have connected successfully
pool.on('connect', (client) => {
    console.log(`Connected to database ${DATABASE_NAME} from ${client}`);
})

//Handle errors for client that have been idle (waiting) too long
pool.on('error', (err, client) => {
    console.log(`Error with database connection from ${client}.  Error: `, err);
    process.exit(-1);  //exit process, open spot in pool
})

module.exports = pool;