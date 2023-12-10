const express = require("express");

// const connectDB = require("./config/db");

const api = require("./api");
const globalMiddleware = require("./middlewares/globalMiddleware");

// connectDB();
const app = express();

globalMiddleware(app);

app.use("/api", api);

module.exports = app;
    