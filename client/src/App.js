import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Login from './components/Login';
import { CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#f0f4f8'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/projects" element={<Projects />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
