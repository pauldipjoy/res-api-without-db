let users = require("../models/users_model");
const { v4: uuidv4 } = require("uuid");

// get users
const getAllUsers = (req, res) => {
  res.status(201).json({ users });
};

// post new users
const postAllUsers = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(users);
};

// update user
const updateUser = (req, res) => {  
  const userId = req.params.id;
  const { username, email } = req.body;

  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });

  res.status(200).json(users);
};

// delete user
const deleteUser = (req, res) => {
const userId = req.params.id;
 users = users.filter((user) => user.id !== userId);
  res.status(200).json(users);
};

module.exports = { getAllUsers, postAllUsers, updateUser, deleteUser };
