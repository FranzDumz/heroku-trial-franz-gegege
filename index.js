const pg = require('pg')
const config = {
    database: 'dejn8c6mlm6ov2'
}
const pool = new pg.Pool(config);
pool.connect((err, client, done) => {
    if (err) throw err;
    client.query('SELECT  * FROM  info', (err, res) => {
        if (err)
            console.log(err.stack);
        else {
            console.log(res.rows);
        }
        pool.end()
    })
})