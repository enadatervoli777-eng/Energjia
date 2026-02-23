import express from "express";
import { calculateEnergy } from "../utils/calculator.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { power, hours, price } = req.body;

  if (!power || !hours || !price) {
    return res.status(400).json({ message: "Plotëso të gjitha fushat" });
  }

  const result = calculateEnergy(power, hours, price);
  res.json(result);
});

export default router;






