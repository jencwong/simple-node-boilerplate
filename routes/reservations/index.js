const express = require("express");
const router = express.Router();
const { Reservation } = require("../../models");

router.get("/", async (req, res) => {
  res.json(await Reservation.all());
});

router.post("/new", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your Reservation request. This is what you sent me: ${req.body.post}`
  );
});

module.exports = router;
