let users = require("../data");
const express = require("express");
// import controllers
const {
  displayUsers,
  signUp,
  deleteUser,
  singleUser,
  loginUser,
} = require("../controllers/userControllers");
// create route
const router = express.Router();

// route to list all users
router.get("/", displayUsers);
// route to add new user
router.post("/signUp", signUp);
// route to delete
router.delete("/:id", deleteUser);
// route to display single user
router.get("/:id", singleUser);
// route to update
router.put("/login", loginUser);
// export router
module.exports = {
  router,
};
