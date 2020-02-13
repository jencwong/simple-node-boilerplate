const { Reservation } = require("../models");

test("Reservation.all() should return an array", async () => {
  const result = (await Reservation.all()) || [];
  expect(result.length).not.toBe(0);
  // expect(result.length).toBeGreaterThanOrEqual(0);
});

test("Reservation.create() should add a reservation to the db", async () => {
  const allReservations = await Reservation.all();
  const before = allReservations.length;

  await Reservation.add({
    name: "New Reservation",
    slot: new Date("20 Feb 2020 20:00:00 GMT-0500")
  });

  const reservations = await Reservation.all();

  expect(reservations.length).toBe(before + 1);
  expect(reservations[reservations.length - 1].name).toBe("New Reservation");
});
