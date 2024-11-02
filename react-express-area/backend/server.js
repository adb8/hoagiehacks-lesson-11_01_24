const express = require("express") // import packages
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express() // create app
const port = 3000 // define port

app.use(cors()) // allows for cross-origin requests
app.use(bodyParser.json()) // parse JSON requests

app.post("/area", (req, res) => { // area route
  try {
    const { length, width } = req.body;
    const area = length * width;
    res.status(200).send({ area });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal server error" }); // send error response
  }
});

app.post("/volume", (req, res) => { // volume route
  try {
    const { length, width, height } = req.body;
    const volume = length * width * height;
    res.status(200).send({ volume });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal server error" }); // send error response
  }
});

app.listen(port, () => { // start server
  console.log(`Server running at http://localhost:${port}`);
});