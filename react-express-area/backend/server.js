const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.post("/area", (req, res) => {
  try {
    const { length, width } = req.body;
    const area = length * width;
    res.status(200).send({ area });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.post("/volume", (req, res) => {
  try {
    const { length, width, height } = req.body;
    const volume = length * width * height;
    res.status(200).send({ volume });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});