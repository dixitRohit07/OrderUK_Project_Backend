const mongoose = require("mongoose");

const url = process.env.URL;

async function connection() {
  await mongoose.connect(url)
    .then((res) => {
      console.log("DB is connected..");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connection;