const express = require("express");
const router = express.Router();
const { Reservation } = require("../../models");

// const { Index, RSVP } = require("./sequelize");

router.get("/", async (req, res) => {
  res.json(await Reservation.all());
});

// Post / registration
router.post("/new", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your Reservation request. The reservation is under: ${req.body.post}`
  );
});

// POST /create
router.post("/create", (req, res) => {
  const sql = "INSERT INTO Reservations (name, slot) VALUES (?, ?)";
  const reservation = [req.body.name, req.body.slot];
  db.run(sql, reservation, err => {
    // if (err) ...
    res.redirect("/");
  });
});

module.exports = router;
