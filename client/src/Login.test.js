import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('should allow entering a username and password', () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('password');
  });

  it('should handle login submission', () => {
    render(<Login />);
    const loginButton = screen.getByRole('button', { name: /log in/i });
    fireEvent.click(loginButton);
    // You would need a mock function or simulate the context to verify if login is successful
  });
});
