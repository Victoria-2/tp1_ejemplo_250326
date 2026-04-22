const express = require("express");
const app = express();
const cors = require("cors");
const serviciosRoutes = require("./routes/servicios");

app.use(express.json());
app.use(cors());

app.use("/servicios", serviciosRoutes);

module.exports = app;
