"use strict";
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;
// const today = new Date();

module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define(
    "Reservation",
    {
      name: DataTypes.STRING,
      slot: DataTypes.DATE
    },
    {}
  );

  class Reservation extends SequelizeReservation {
    static async all() {
      return await this.findAll();
    }

    static async allRaw() {
      return this.findAll({ raw: true });
    }

    static async add(reservation) {
      return this.create({
        name: reservation.name,
        slot: reservation.slot
      });
    }
  }

  return Reservation;
};
