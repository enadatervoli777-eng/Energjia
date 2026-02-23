import express from "express";

const router = express.Router();

// Pajisje demo (për momentin pa DB)
let devices = [];

// GET /api/devices
router.get("/", (req, res) => {
  res.json(devices);
});

// POST /api/devices
router.post("/", (req, res) => {
  const { name, watt, hours } = req.body;

  if (!name || !watt || !hours) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const device = { name, watt, hours };
  devices.push(device);

  res.json({
    message: "Device added ✅",
    device
  });
});

export default router;


