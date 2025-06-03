import express from "express";
import calcBmi from "./bmiCalculator";
import calculator, { Operation } from "./calculator";
import exerciseCalculator from "./exerciseCalculator";

const app = express();

// Add these lines here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/exercise", (req, res) => {
  const { daily_exercises, target } = req.body;

  const result = exerciseCalculator(
    daily_exercises.map(Number),
    Number(target)
  );
  if (!req.body) {
    res.send("req.body is empty or undefined");
  } else {
    res.send(result);
  }
});

app.post("/calculate", (req, res) => {
  const { value1, value2, op } = req.body;
  const operation = op as Operation;

  const result = calculator(Number(value1), Number(value2), operation);
  res.send(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
