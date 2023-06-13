const express = require("express");
const { router } = require("./router/userRoutes");

// create app
let app = express();
app.use(express.json());
app.use("/users", router);
// handle any other route
router.use("*", (req, res) => {
  res.status(404).json({
    statusCode: "NOT FOUND",
    message: "Path does not exist",
  });
});
// create port
const port = 3900;
// start server
app.listen(port, () => console.log(`server started at port ${port}`));
