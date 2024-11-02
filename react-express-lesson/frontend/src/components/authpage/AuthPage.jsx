import React, { useState } from "react";
import { TextField, Button, Container, Typography, Tabs, Tab, Box } from "@mui/material";
import Login from "../login/Login";
import Signup from "../signup/Signup";

function AuthPage() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom color="black">
        Authentication
      </Typography>
      <Tabs value={tab} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Signup" />
      </Tabs>
      {tab === 0 && <Login />}
      {tab === 1 && <Signup />}
    </Container>
  );
}

export default AuthPage;
