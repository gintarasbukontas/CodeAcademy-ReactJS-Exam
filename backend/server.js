import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import router from "./routes/index.js";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "Recap" })
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to connect to DB"));

const app = express();

app.use(cors());
app.use(express.json());
// app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
