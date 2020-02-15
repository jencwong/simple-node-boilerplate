const express = require("express");
const router = express.Router();
const { Reservation } = require("../../models");
const { checkAvailability } = require("./timeslot");
const { Reservations } = require("pg");
const reservations = new Reservation({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

router.get("/", async (req, res) => {
  res.json(await Reservation.all());
});

router.get("/db", async (req, res) => {
  try {
    const client = await reservations.connect();
    const result = await client.query("SELECT * FROM test_table");
    const results = { results: result ? result.rows : null };
    res.render("pages/db", results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
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
  console.log(reservation);
});

module.exports = router;
