import express from "express";
import cors from "cors";

import calculateRoutes from "./routes/calculate.js";
import authRoutes from "./routes/auth.js";
import deviceRoutes from "./routes/devices.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/calculate", calculateRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);

// test
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

