# Simple Node Boilerplate

## Introduction

This boilerplate contains the following:

- express
- sequelize
- sequelize-cli
- nodemon
- eslint
- jest

## Running in Development

1. `npm install`
2. `npx sequelize-cli db:migrate`
3. `npx sequelize-cli db:seed:all`
4. `npx nodemon`

## Database Setup

This project uses Sequelize as an ORM. It was set up using the directions here: <https://sequelize.org/master/manual/migrations.html>. The easiest way to work with this set up is to use the generator that comes with `sequelize-cli`: <https://github.com/sequelize/cli#usage>.

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE
  }, {});

  class Reservation extends SequelizeReservation {
    static async all(){
      return await this.findAll();
    }
  }

  return Reservation;
};
```

The Reservation class in this example allows you to define instance methods and static methods. You can call this all method like this: `Reservation.all()`.

## Running Tests

`npm test` should be all you need to run tests. This will read in and eval `utils.js` with all the functions inside of it. Try to keep DOM dependent code out of that file since jest has no DOM. `npm test` will also delete and seed the test database, and allow you to test your models. Your controllers probably wouldn't need testing in an app like this since they use the model methods for CRUD operations.

For an application of this complexity ensuring that database operations through models work well is important. Models are mostly your own code.

![Node.js CI](https://github.com/jencwong/simple-node-boilerplate/workflows/Node.js%20CI/badge.svg)

