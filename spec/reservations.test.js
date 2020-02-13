const { checkAvailability } = require("../routes/reservations/timeslot");

test("should return correct # of timeslots for availability", () => {
  const available = checkAvailability([]);
  const timeslots = Object.keys(available);

  expect(timeslots.length).toBe(19);
});

test("should return correct type of timeslot data", () => {
  const available = checkAvailability([]);
  const timeslots = Object.keys(available);

  timeslots.forEach(slot => {
    expect(typeof slot).toBe("string");
    expect(typeof available[slot]).toBe("number");
  });
});

const testBookedReservations = [
  {
    name: "Test 1",
    slot: new Date("21 Feb 2020 13:00:00 GMT-0500")
  },
  {
    name: "Test 2",
    slot: new Date("21 Feb 2020 13:30:00 GMT-0500")
  }
];

test("should return correct number of available tables given current booked reservations", () => {
  const available = checkAvailability(testBookedReservations);

  expect(available["13:00"]).toBe(9);
});

test("should return correct number of tables in subsequent timeslots given current booked reservations", () => {
  const available = checkAvailability(testBookedReservations);

  expect(available["13:00"]).toBe(9);
  expect(available["13:30"]).toBe(8);
  expect(available["14:00"]).toBe(9);
});
