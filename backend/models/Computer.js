const pool = require('../server');

exports.addComputer = (computer, callback) => {
    pool.query('INSERT INTO computers (username, cpu, gpu, ram, motherboard, storage, psu, case, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [computer.username, computer.cpu, computer.gpu, computer.ram, computer.motherboard, computer.storage, computer.psu, computer.case, computer.price], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};