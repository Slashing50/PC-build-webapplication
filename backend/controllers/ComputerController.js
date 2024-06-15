const model = require('../models/Computer.js');

exports.addComputer = (req, res) => {
    model.addComputer(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(result);
        }
    });
};
