import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CovidExplorer link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Covid Explorer/i);
  expect(linkElement).toBeInTheDocument();
});
