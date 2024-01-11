const express = require("express");
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = jwt.sign({ email }, "secret-boy");

  res.json({
    token,
  });
});

app.post("/sign-up", async (req, res) => {
  const { name, email, password } = req.body;
  const filePath = "src/data/users.json";
  const usersRaw = await fs.readFile(filePath, "utf-8");
  const users = JSON.parse(usersRaw);
  const user = users.find((user) => user.email === email);
  if (user) {
    return res.status(401).json({
      message: "user already exists",
    });
  }
  const id = uuidv4();
  users.push({
    id,
    name,
    email,
    password,
  });
  await fs.writeFile(filePath, JSON.stringify(users));
  const token = jwt.sign({ email }, "secret-boy");
  res.json({
    token,
    message: "user already exists",
  });
});
app.post("/category", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "error",
    });
  }
  try {
    const verify = jwt.verify(authorization, "secret-boy");
    const { email } = verify;
    const { categoryName } = req.body;
    const filePath = "src/data/category.json";
    const rawFile = await fs.readFile(filePath, "utf8");

    const file = JSON.parse(rawFile);

    file.push({
      categoryName,
      userEmail: email,
    });

    await fs.writeFile(filePath, JSON.stringify(file));
    res.json({
      message: "fine",
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});
app.get("/category", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "error",
    });
  }
  try {
    const verify = jwt.verify(authorization, "secret-boy");

    const { email } = verify;

    const filePath = "src/data/category.json";

    const rawFile = await fs.readFile(filePath, "utf-8");

    const file = JSON.parse(rawFile);

    const userCategory = file.filter((user) => user.userEmail === email);

    res.json({
      userCategory,
    });
  } catch (err) {
    res.status(401).json({
      message: "error1",
    });
  }
});
app.post("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-boy");

    const { email } = payload;

    const { amount, date, isExpense, selectedCategory, time } = req.body;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(recordsRaw);

    records.push({
      amount,
      date,
      isExpense,
      selectedCategory,
      time,
      userEmail: email,
    });

    await fs.writeFile(filePath, JSON.stringify(records));

    res.json({
      message: "Record created",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});

app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-boy");

    const { email } = payload;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(recordsRaw);

    const usersRecords = records.filter((record) => record.userEmail === email);

    res.json({
      records: usersRecords,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});
const port = 3002;

app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
