import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => { // login function
    try {
      const response = await axios.post("http://localhost:3000/login", { username, password });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error);
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
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}

export default Login;