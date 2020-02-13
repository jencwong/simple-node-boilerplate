const timeSlots = [
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00"
];

function checkAvailability(reservations) {
  // for now, just using 2 tables for reservations.
  const numTables = 10;
  let available = {};
  timeSlots.forEach(slot => {
    available[slot] = numTables;
  });

  for (let reservation in reservations) {
    const day = new Date(reservations[reservation].slot);
    const hours = day.getHours().toString();
    const minutes = day.getMinutes().toString();
    const slot = `${hours}:${minutes === "0" ? "00" : minutes}`;
    if (available[slot] > 0) {
      available[slot] -= 1;
      const indexOfSlot = timeSlots.indexOf(slot);
      const nextTimeSlot = timeSlots[indexOfSlot + 1];
      if (available[nextTimeSlot] > 0) {
        available[nextTimeSlot] -= 1;
      }
    }
  }
  // console.log('available:', available);

  return available;
}

module.exports = {
  checkAvailability
};
