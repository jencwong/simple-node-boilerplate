const express = require("express");
const router = express.Router();
const { Reservation } = require("../../models");
const { Index, Reservation } = require("./sequelize");

router.get("/", async (req, res) => {
  res.json(await Reservation.all());
});

router.post("/new", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your Reservation request. This is what you sent me: ${req.body.post}`
  );
});

// POST /create
router.post("/create", (req, res) => {
  const sql = "INSERT INTO Reservations (Name, Spot) VALUES (?, ?)";
  const reservation = [req.body.Name, req.body.Spot];
  db.run(sql, reservation, err => {
    // if (err) ...
    res.redirect("/");
  });
});

module.exports = router;
