import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('App Component', () => {
  it('should render the home page by default', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/welcome to devmanager/i)).toBeInTheDocument();
  });

  it('should navigate to the login page', () => {
    renderWithRouter(<App />, { route: '/login' });
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('should navigate to the projects page when logged in', () => {
    // Assuming there's a context or a way to simulate being logged in
    renderWithRouter(<App />, { route: '/projects' });
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/add project/i)).toBeInTheDocument();
  });
});
