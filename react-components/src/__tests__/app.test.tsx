import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => jest.fn(),
}));

describe('App', () => {
  test('Renders search element', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const mainPageElement = screen.getByText('Search');
    const mainPlaceHolder = screen.getByPlaceholderText(
      'Type StarWars character...'
    );

    expect(mainPageElement).toBeInTheDocument();
    expect(mainPlaceHolder).toBeInTheDocument();
  });

  test('Renders error button element', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const mainErrorButton = screen.getByText('error');

    expect(mainErrorButton).toBeInTheDocument();
  });
});
