const express = require("express");
const app = express();
const Router = require("./routes/router");
const { sequelize } = require("./db");

const port = 3000;
app.use(express.json());
//TODO
app.use("/api", Router);
app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});
