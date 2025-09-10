import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders App component to the screen', () => {
  render(<App />);
  expect(screen.getByText(/49/i)).toBeInTheDocument();
});
