const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/db", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

const Metric = mongoose.model(
  "Metric",
  new mongoose.Schema({
    timestamp: String,
    name: String,
    value: String,
  })
);

app.post("/api/metrics", (req, res) => {
  new Metric(req.body).save((error) => {
    if (error) return res.status(500).send(error);
    res.send(req.body);
  });
});

app.get("/api/metrics", (req, res) => {
  const startDate = req.query.start;
  const endDate = req.query.end;
  Metric.find(
    {
      timestamp: { $gt: startDate, $lt: endDate },
    },
    (error, documents) => {
      if (error) return res.status(500).send(error);
      res.send(documents);
    }
  );
});

app.listen(3000, () => console.log("Server is running on port 3000"));
