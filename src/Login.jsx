
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { LOGIN } from "./utils";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    setError("");
    try {
      const response = await fetch(LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Login failed");
        return;
      }
      // success? token, redirect
      const data = await response.json();
      alert(`Login successful! Welcome, ${data.username || username}`);
  navigate("/dashboard");
    } catch (err) {
      setError("Network error. Please try again later.", err);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          bgcolor: '#fff',
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          minWidth: 340,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h5" align="center" fontWeight={600} color="#222">
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoComplete="username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          fullWidth
          required
        />
        {error && (
          <Alert severity="error">{error}</Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: '#1f4792',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1rem',
            py: 1.2,
            borderRadius: 2,
            '&:hover': { bgcolor: '#357ae8' },
          }}
          fullWidth
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
}

export default Login;