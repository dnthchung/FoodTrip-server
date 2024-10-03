// const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const httpError = require("http-errors");
// const db = require("./models");
// ////=============================1. Phải import routes===================
// // const { cakeRouter, toppingRouter, optionRouter } = require("./routes");

// //============================================================================

// require("dotenv").config();

// const app = express();
// app.use(morgan("dev"));
// app.use(bodyParser.json());
// // error handle
// app.use(async (req, res, next) => {
//   next(httpError.NotFound());
// });
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.send({
//     error: {
//       status: error.status || 500,
//       message: error.message,
//     },
//   });
// });

// //====================2. để ý là mẫu họ đòi URL trông ntn ==================
// // app.use("/cake", cakeRouter);
// // app.use("/topping", toppingRouter);
// // app.use("/option", optionRouter);

// // app.use("/api/movie", movieRouter);
// //============================================================================

// // ======================= local connection =======================
// // app.listen(process.env.PORT, process.env.HOST_NAME, () => {
// //   console.log(
// //     `Server is running on port ${process.env.PORT} and at : https://${process.env.HOST_NAME}:${process.env.PORT}`,
// //   );
// //   db.connectDB();
// // });

// // ======================= Mongo atlas connection =======================
// app.listen(process.env.MONGO_URI, () => {
//   // db.connectDB();
//   console.log("Server is running on port " + process.env.MONGO_URI);
// });

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const httpError = require("http-errors");
const db = require("./models"); // Import models

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

// Error handler
app.use(async (req, res, next) => {
  next(httpError.NotFound());
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

// MongoDB Connection
db.connectDB(); // Connect to MongoDB

// Listen on a valid port, not the MongoDB URI
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
