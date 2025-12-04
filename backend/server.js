import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
