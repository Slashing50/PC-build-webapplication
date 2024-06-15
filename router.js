const express = require('express');
const router = express.Router();
const controller = require('../controllers/PartsController.js');
const controller = require('../controllers/ComputerController.js');

router.get('/components', controller.getComponents);
router.post('/save', controller.addComputer);
router.post('/signup', controller.addUser);
router.post('/login', controller.loginUser);
router.get('/calculate/:part1Id/:part2Id', controller.calculateBottleneck);

app.get('/hi', (req, res) => {
    res.send('hey!');
});

module.exports = router;