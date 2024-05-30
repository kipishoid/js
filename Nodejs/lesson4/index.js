const fs = require("fs");
const path = require("path");
const express = require("express");
const Joi = require("joi");
const app = express();
const dbPath = path.join(__dirname, "./users.json");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  age: Joi.number().min(0).max(150).required(),
  city: Joi.string().min(1).max(30),
});

let uniqueId = 1;
app.use(express.json());

app.get("/users", (req, res) => {
  res.send(fs.readFileSync(dbPath));
});

app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(dbPath));
  const user = users.find((user) => user.id === Number(req.params.id));
  if (user) {
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

app.post("/users", (req, res) => {
  uniqueId += 1;
  const users = JSON.parse(fs.readFileSync(dbPath));
  users.push({
    id: uniqueId,
    ...req.body,
  });
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
  res.send({
    id: uniqueId,
  });
});

app.put("/users/:id", (req, res) => {
  const result = schema.validate(req.body);

  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }
  const users = JSON.parse(fs.readFileSync(dbPath));
  let user = users.find((user) => user.id === Number(req.params.id));
  if (user) {
    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    user.city = req.body.city;
    fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

app.delete("/user/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(dbPath));
  let user = users.find((user) => user.id === Number(req.params.id));
  if (user) {
    const userIndex = users.indexOf(user);
    users.splice(userIndex, 1);
    fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

app.listen(3000);
