const pool = require('../server');

exports.getComponents = (callback) => {
  pool.query('SELECT * FROM components', (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};