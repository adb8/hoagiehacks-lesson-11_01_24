import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => { // signup function
    if (password !== confirmPassword) { // check if passwords match
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/register", { username, password });
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <Box>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
        Signup
      </Button>
    </Box>
  );
}

export default Signup;