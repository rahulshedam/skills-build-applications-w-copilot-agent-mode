import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  // Use getByRole with level and text content check
  const welcomeElement = screen.getByRole('heading', { level: 1 });
  expect(welcomeElement).toBeInTheDocument();
  expect(welcomeElement).toHaveTextContent('Welcome to OctoFit Tracker!');
});

test('renders navigation links', () => {
  render(<App />);
  // Use getByRole to target specific navigation links
  const nav = screen.getByRole('navigation');
  expect(nav).toHaveTextContent('Activities');
  expect(nav).toHaveTextContent('Leaderboard');
  expect(nav).toHaveTextContent('Teams');
  expect(nav).toHaveTextContent('Users');
  expect(nav).toHaveTextContent('Workouts');
});
