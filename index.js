const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "where the mind is without fear and the head is held high where knowledge is free"
  );
});

const users = [
  { id: 1, name: "khirul", job: "web developer", village: "Biharmondal" },
  { id: 2, name: "Riyad", job: "web developer", village: "Taltala" },
  { id: 3, name: "Hasan", job: "web developer", village: "Taltala" },
  { id: 4, name: "Sakib", job: "web developer", village: "Biharmondal" },
  { id: 5, name: "Tania", job: "web developer", village: "Biharmondal" },
  { id: 6, name: "Nayeen", job: "web developer", village: "Biharmondal" },
  { id: 7, name: "Rushda", job: "web developer", village: "Biharmondal" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user=>user.name.toLowerCase().includes(search));
    res.send(matched);
  }else{
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  console.log(user);
  res.send(user);
});

app.post("/user", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
