// const express = require("express");

import express from "express";
import { connectDB } from "./config/db.js";
import { Person } from "./models/person.js";

const app = express();
const PORT = 3000;
app.use(express.json());

await connectDB();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// Saving data in mongodb
app.post("/person", async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const newPerson = new Person({
      name,
      age,
      email,
    });
    await newPerson.save();
    console.log(newPerson);
    res.send("Person added");
  } catch (error) {
    res.send(error.message);
  }
});

// Updating data in mongodb
// app.put("/person", async (req, res) => {
//   const { id } = req.body;
//   const personData = await Person.findByIdAndUpdate(id, { age: 99 });

//   console.log(personData);
//   res.send("Person Updated");
// });

// Deletion Task
app.delete("/person:id", async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.send("User Deleted");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
