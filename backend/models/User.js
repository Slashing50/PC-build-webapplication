const pool = require('../server');

exports.addUser = (user, callback) => {
    pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2)', [user.username, user.email, user.password], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}

exports.login = (user, callback) => {
    pool.query('SELECT * FROM users WHERE username = $1', [user.username], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            if (result.rows.length > 0) {
                const storedPassword = result.rows[0].password;
                if (storedPassword === user.password) {
                    callback(null, result.rows[0]);
                } else {
                    callback(new Error('Invalid password'), null);
                }
            } else {
                callback(new Error('User not found'), null);
            }
        }
    });
}