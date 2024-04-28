import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Paper, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();  // Hook for programmatically navigating

  function authenticateUser(username, password) {
    // Simulated API response
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'password') {
          resolve({ isAuthenticated: true, token: '123456' });
        } else {
          resolve({ isAuthenticated: false });
        }
      }, 1000);
    });
  }

  function handleLogin() {
    authenticateUser(username, password).then(response => {
      if (response.isAuthenticated) {
        sessionStorage.setItem('userToken', response.token); // Store token or session identifier
        setIsAuthenticated(true);
        navigate('/projects'); // Redirect to Projects page after successful login
      } else {
        setSnackbarMessage('Invalid username or password');
        setOpenSnackbar(true);
      }
    });
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="xs">
      <Paper style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login Page
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: 20 }}
        >
          Log In
        </Button>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Login;
