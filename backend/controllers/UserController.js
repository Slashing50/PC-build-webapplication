const model = require('../models/User.js');
const { body, validationResult } = require('express-validator');

exports.validate = [
    body('username')
        .isLength({ min: 1 })
        .withMessage('Username is required.')
        .custom(async (value) => { 
            const user = await model.findUserByUsername(value); 
            if (user) {
                return Promise.reject('Username already in use.');
            }
        }),
    body('email')
        .trim()
        .isEmail()
        .withMessage('Email is not valid.'),
    body('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long.')
];

exports.addUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        model.addUser(req.body, (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(201).json(result);
            }
        });
    };
};

exports.login = (req, res) => {
    model.login(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json(result);
        }
    });
};
