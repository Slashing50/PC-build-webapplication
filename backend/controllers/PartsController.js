const model = require('../models/Parts.js');

exports.getComponents = (req, res) => {
  model.getComponents((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

exports.calculateBottleneck = (req, res) => {
    const cpu = getPart(parseInt(req.params.part1Id));
    const gpu = getPart(parseInt(req.params.part2Id));


};