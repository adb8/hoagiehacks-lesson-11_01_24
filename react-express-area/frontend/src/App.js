import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import "./App.css";
import axios from "axios"; // import axios - makes HTTP requests

function App() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [result, setResult] = useState(null);

  const findArea = async () => { // findArea function
    try {
      console.log("Length:", length);
      console.log("Width:", width);
      const response = await axios.post("http://localhost:3000/area", {
        length: length,
        width: width,
      }); // send POST request to /area route
      const data = response.data;
      setResult(data.area);
    } catch (error) {
      console.error("Error:", error);
      setResult("Internal server error");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Area Calculator
        </Typography>
        <TextField
          label="Width"
          variant="outlined"
          value={width}
          onChange={(e) => setWidth(e.target.value)} // update width state
          margin="normal"
          fullWidth
        />
        <TextField
          label="Length"
          variant="outlined"
          value={length}
          onChange={(e) => setLength(e.target.value)} // update length state
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={findArea} sx={{ mt: 2 }}>
          Calculate
        </Button>
        {result !== null && (
          <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
            Result: {result}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default App;
