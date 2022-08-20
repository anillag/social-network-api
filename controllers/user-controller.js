const { User } = require("../models");

const userController = {
  getAllUsers: (req, res) => {
    User.find()
      .select("-__v")
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  getSingleUser: (req, res) => {
    const userId = req.params.id;
    User.findOne({ _id: userId })
      .populate("friends")
      .select("-__v")
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  createUser: (req, res) => {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({
        message: "Missing username and/or email",
      });
    }
    User.create({ username, email })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  updateUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  deleteUser: (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }).then((data) => {
      if (!data) {
        return res.status(404).json({ message: "User not found" });
      }
      // TODO: Remove the user's `thoughts` records
      return res.sendStatus(204);
    });
  },
};

module.exports = userController;
