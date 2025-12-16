// const express = require("express");
import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

process.on("uncaughtexception", (err) => {
  console.log(err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(reason);
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/sync-error", (req, res, next) => {
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    next(error);
  }
});

app.get("/async-error", async (req, res, next) => {
  try {
    await Promise.reject(new Error("Async Error occured"));
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.message);
  console.log(err.stack);
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
