const express = require("express");
const router = express.Router();
const { Musician } = require("../Musician");

router.get("/musicians/:id", async (request, response) => {
  const respond = await Musician.findByPk(request.params.id);
  response.json(respond);
});

router.post("/musicians", async (request, response) => {
  const respond = await Musician.create(request.body);
  response.send(respond);
});
router.put("/musicians/:id", async (request, response) => {
  const respond = await Musician.update(request.body.update, {
    where: request.body.where,
  });
  response.send(respond);
});
router.delete("/musicians/:id", async (request, response) => {
  const respond = await Musician.destroy({
    where: { id: request.params.id },
  });
  response.send(respond);
});

module.exports = router;
