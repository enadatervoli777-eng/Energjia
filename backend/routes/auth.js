import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const usersFile = path.resolve("data/users.json");

// helper për të lexuar userat
function readUsers() {
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);
}

// helper për të ruajtur userat
function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// REGISTER
router.post("/register", (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ email, password });
  saveUsers(users);

  res.json({ message: "User registered successfully" });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});

export default router;
