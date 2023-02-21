const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");

const port = 3000;

//TODO
app.get("/musicians/:id", async (request, response) => {
  const respond = await Musician.findByPk(request.params.id);
  response.json(respond);
});
app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});
