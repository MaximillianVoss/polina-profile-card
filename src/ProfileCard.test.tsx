import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

test('always shows the name and shows age when showDetails is true', () => {
  render(<ProfileCard name="Mia" age={21} showDetails={true} />);

  expect(screen.getByRole('heading', { name: 'Mia' })).toBeInTheDocument();
  expect(screen.getByText('Age: 21')).toBeInTheDocument();
  expect(screen.getByRole('article', { name: 'Profile for Mia' })).toBeInTheDocument();
});

test('does not display an age when showDetails is false', () => {
  render(<ProfileCard name="Noah" age={34} showDetails={false} />);

  expect(screen.getByRole('heading', { name: 'Noah' })).toBeInTheDocument();
  expect(screen.getByRole('article', { name: 'Profile for Noah' })).not.toHaveTextContent(/Age:/);
});

test('does not display an age for a truthy non-boolean showDetails prop', () => {
  // @ts-expect-error Проверяем защиту от некорректного JavaScript-вызова во время выполнения.
  render(<ProfileCard name="Iris" age={29} showDetails="true" />);

  expect(screen.getByRole('article', { name: 'Profile for Iris' })).not.toHaveTextContent(/Age:/);
});
