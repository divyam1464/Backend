// const express = require("express");
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "express-app");
  res.send("Hello Express");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
