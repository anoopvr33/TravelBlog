import mongoose from "./db/db.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res) => {
  res.json("route not found");
});

app.listen(7000, (req, res) => {
  console.log("server is running on port 7000");
});
