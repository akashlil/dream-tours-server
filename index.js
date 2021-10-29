const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const { json } = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hr7oi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const addservices = client.db("dreamtours").collection("addservices");

    app.get("/", (req, res) => {
      res.send("server is running");
    });
  } finally {
  }
}

run().catch(() => console.log("error"));

app.listen(port, () => {
  console.log("server runing 5000");
});
