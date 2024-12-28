const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 5000;
const logger = require("morgan");
const cors = require("cors");
const app = express();
const mainRoute = require("./routes/index.js");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to mongodb");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send(`Sunucu ${port} portalında çalışıyor...`);
});
app.get("/api", (req, res) => {
  res.send(`Sunucu ${port} portalında çalışıyor...`);
});

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRoute);

app.listen(port, (req, res) => {
  connect();
  console.log(`Sunucu ${port} portalında çalışıyor...`);
});
