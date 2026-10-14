import { render, screen } from '@testing-library/react';
import App from './App';

test('renders exactly one detailed card and one name-only card', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Profile cards' })).toBeInTheDocument();
  expect(screen.getByRole('article', { name: 'Profile for Alice' })).toHaveTextContent('Age: 20');
  expect(screen.getByRole('article', { name: 'Profile for Ben' })).toHaveTextContent('Ben');
  expect(screen.getByRole('article', { name: 'Profile for Ben' })).not.toHaveTextContent(/Age:/);
  expect(screen.getAllByRole('article')).toHaveLength(2);
});
