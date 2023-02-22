const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");

const port = 3000;
app.use(express.json());
//TODO
app.get("/musicians/:id", async (request, response) => {
  const respond = await Musician.findByPk(request.params.id);
  response.json(respond);
});

app.post("/musicians", async (request, response) => {
  const respond = await Musician.create(request.body);
  response.send(respond);
});
app.put("/musicians/:id", async (request, response) => {
  const respond = await Musician.update(request.body.update, {
    where: request.body.where,
  });
  response.send(respond);
});
app.delete("/musicians/:id", async (request, response) => {
  const respond = await Musician.destroy({
    where: { id: request.params.id },
  });
  response.send(respond);
});
app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});
