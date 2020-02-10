"use strict";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const today = new Date();

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
  }

  return Reservation;
};
