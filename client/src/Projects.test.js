import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Projects from './Projects';

describe('Projects Component', () => {
  it('should display project list', () => {
    render(<Projects />);
    expect(screen.getByText(/project alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/project beta/i)).toBeInTheDocument();
  });

  it('should open dialog to add a new project', () => {
    render(<Projects />);
    const addButton = screen.getByText(/add project/i);
    fireEvent.click(addButton);
    expect(screen.getByText(/add project/i)).toBeInTheDocument();
  });

  it('should delete a project', () => {
    render(<Projects />);
    const deleteButtons = screen.getAllByLabelText('delete');
    fireEvent.click(deleteButtons[0]);
    // Expect some change in your state or UI
  });
});
