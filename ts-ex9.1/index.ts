import express from "express";
import calcBmi from "./bmiCalculator";
import calculator, { Operation } from "./calculator";

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

app.post("/calculate", (req, res) => {
  const { value1, value2, op } = req.body;
  const operation = op as Operation;

  const result = calculator(Number(value1), Number(value2), operation);
  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
