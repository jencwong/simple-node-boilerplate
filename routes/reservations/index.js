const express = require("express");
const router = express.Router();
const { Reservation } = require("../../models");
const { checkAvailability } = require("./timeslot");

router.get("/", async (req, res) => {
  res.json(await Reservation.all());
});

// GET all reservations
router.get("/", async (req, res) => {
  // const reservations = await Reservation.all();
  const reservations = await Reservation.allRaw();
  // console.log('reservations:', reservations);

  const available = checkAvailability(reservations);

  res.json({
    booked: reservations,
    available
  });
});

// Post / registration
router.post("/new", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your Reservation request. The reservation is under: ${req.body.post}`
  );
});

// POST a reservation for a time
router.post("/create", async (req, res) => {
  const { name, slot } = req.body;
  const reservation = await Reservation.add({
    name,
    slot
  });
  res.json(reservation);
});

module.exports = router;
