require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
const connection = require("./config/db");
const router = require("./routes/Userroute");
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

app.listen(port, () => {
  console.log("listning on port..");
});

app.use("/api/auth", router);

app.use(express.urlencoded({ extended: true }));

connection();
