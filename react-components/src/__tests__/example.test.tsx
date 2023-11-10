import { render, screen } from '@testing-library/react';
import ErrorButton from '../components/errorButton';

test('Render Error Button element', () => {
  render(<ErrorButton />);
  const searchText = screen.getByText(/error/i);
  expect(searchText).toBeInTheDocument;
});
