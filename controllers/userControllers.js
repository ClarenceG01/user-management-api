let users = require("../data");
module.exports = {
  displayUsers: (req, res) => {
    const userWithNoPassword = users.map((user) => {
      const { password, ...userWithNoPassword } = user;
      return userWithNoPassword;
    });
    res.status(200).json({
      statusCode: "Ok",
      message: "Users retrieved successfully",
      results: userWithNoPassword,
    });
  },
  signUp: (req, res) => {
    console.log(req.body);
    users.push(req.body);
    console.log(req.body);
    res.status(200).json({
      statusCode: "Ok",
      message: "Users added successfully",
      results: users,
    });
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      res.status(404).json({
        statusCode: "Not Found",
        message: "User not found",
      });
    }
    users = users.filter((user) => user.id !== id);
    res.status(200).json({
      statusCode: "OK",
      message: `user with id :${id} has been deleted`,
      results: users,
    });
  },
  singleUser: (req, res) => {
    const userWithNoPassword = users.map((user) => {
      const { password, ...userWithNoPassword } = user;
      return userWithNoPassword;
    });
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      res.status(404).json({
        statusCode: "Not found",
        message: "User not found",
      });
    }
    res.status(200).json({
      statusCode: "OK",
      message: "User retrieved successfully",
      results: userWithNoPassword[userIndex],
    });
  },
  loginUser: (req, res) => {
    const { email, password } = req.body;
    const index = users.findIndex((user) => user.email === email);
    if (index === -1) {
      res.status(404).json({
        statusCode: "NOT FOUND",
        message: "email doesn't exist",
      });
    } else {
      if (users[index].password === password) {
        res.send(`Welcome ${users[index].firstName}`);
      } else {
        res.send(`incorrect password`);
      }
    }
  },
};
