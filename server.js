var express = require("express");
var usersRouter = require("./routes/users");

var app = express();
app.use("/users", usersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
