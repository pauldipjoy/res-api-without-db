const { getAllUsers , postAllUsers, updateUser, deleteUser} = require('../controllers/users_controller');


// const express = require('express');
// const router = express.Router();
const router= require('express').Router();

// get users route
router.get("/", getAllUsers );
 // post users store
router.post("/", postAllUsers );
// update or put users
router.put("/:id", updateUser );
// delete user
router.delete("/:id", deleteUser );





module.exports = router;