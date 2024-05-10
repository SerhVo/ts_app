import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
// import App from './App';


test('renders learn react link', () => {
  render(<App user={{
    id: 0,
    name: '',
    email: ''
  }} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
