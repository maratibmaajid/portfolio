import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { profile } from "./data/profile.js";
import { ContactMessage } from "./models/ContactMessage.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
    });
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, mongoConnected: mongoose.connection.readyState === 1 });
});

app.get("/api/profile", (_req, res) => {
  res.json(profile);
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      error: "Database is not connected. Set MONGODB_URI to enable contact storage."
    });
  }

  const saved = await ContactMessage.create({ name, email, message });
  return res.status(201).json(saved);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
