const pincodes = require("../models/pincodes");

exports.listAllPincodes = (req, res) => {
  console.log("======")
    pincodes.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

exports.createNewPincode = (req, res) => {
    let newTask = new pincodes(req.body);
    newTask.save((err, task) => {
      if (err) {
       
       res.status(500).send(err);
      }
      res.status(201).json(task);
    });  
};