const express = require('express');

const { Pool } = require('pg');

const router = require('./routes/router');

app.use('/api', router);

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pcbuilder',
    password: 'dbpass',
    port: 5432,
  });

pool.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

const app = express();
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

