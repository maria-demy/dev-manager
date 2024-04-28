import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Login from './components/Login';
import { CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f4f8'
    }
  }
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authentication status, perhaps by verifying token or session
    const token = sessionStorage.getItem('userToken');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/projects" element={isAuthenticated ? <Projects /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
