const db = require("../models");

module.exports = {
  findOne: function(req, res) {
    //find Giver by email, used for seeing if user exists with current email
    db.Giver
      .findOne({email:req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //find user by id
  findById: function(req, res) {
    db.Giver
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //creates new user, with the user object already created in req.body
  create: function(req, res) {
    db.Giver
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //we will need this update function to update user's wishlist if they add anything in the future
  update: function(req, res) {
    db.Giver
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
