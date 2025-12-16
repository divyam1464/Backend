// const express = require("express");
import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";

const app = express();
const PORT = 3000;
app.use(cookieParser());
app.use(
  session({
    secret: "sample-secret",
    resave: false,
    saveUninitialized: false,
  })
);

const users = [];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  users.push({
    username,
    password,
  });
  res.send("User Registered");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || password !== user.password) {
    return res.send("Not Authorized");
  }
  req.session.user = user;
  res.send("User Login");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.send("Unauthorized");
  }
  res.send(`Welcome, ${req.session.user.username}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
