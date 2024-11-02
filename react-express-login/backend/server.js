const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const read_users = async () => {
  let users = [];
  const usersFilePath = path.join(__dirname, "users.txt");
  try {
    const data = await fs.promises.readFile(usersFilePath, "utf8");
    users = data.split("\n").map((line) => {
      console.log(line);
      const [username, password] = line.split(",");
      return { username, password };
    });
  } catch (err) {
    console.error("Error reading users file:", err);
  }
  return users;
};

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = null;
    const users = await read_users();

    user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      const token = jwt.sign({ username: user.username }, "your_secret_key", { expiresIn: "1h" });
      res.status(200).send({ message: "User exists", token });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ message: "Username and password are required" });
    }

    const users = await read_users();

    const userExists = users.some((u) => u.username === username);
    if (userExists) {
      return res.status(409).send({ message: "User already exists" });
    }

    const newUser = { username, password };
    users.push(newUser);

    fs.appendFile(usersFilePath, `\n${username},${password}`, (err) => {
      if (err) {
        console.error("Error writing to users file:", err);
        return res.status(500).send({ message: "Internal server error" });
      }
      res.status(201).send({ message: "User created successfully" });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});