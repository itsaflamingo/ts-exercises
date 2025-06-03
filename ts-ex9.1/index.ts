import express from "express";
import calcBmi from "./bmiCalculator";

const app = express();

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  const bmi = calcBmi(height, weight);
  res.send({ weight, height, bmi });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
