import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  // Use a more flexible matcher since the text is split by a span element
  const welcomeElement = screen.getByText((content, element) => {
    return element?.tagName.toLowerCase() === 'h1' && content.includes('Welcome to');
  });
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
