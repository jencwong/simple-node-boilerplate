const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const reservationsRouter = require("./routes/reservations");
const bodyParser = require("body-parser");

// // middlewares
// app.use(express.urlencoded({ extended: true }));
// // app.use(methodOverride("_method"));
// app.use(express.json());

// below will parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve the homepage from here
app.use(express.static("public"));

// handle api calls from here
app.use("/reservations", reservationsRouter);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
