import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDb from "./db/db.js";

dotenv.config();

const app = express();

app.get("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
  connectDb()
});
