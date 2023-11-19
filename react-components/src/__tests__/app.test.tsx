import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

const MOCK_DATA = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'Princess Leia',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Han Solo',
    height: '180',
    mass: '80',
    hair_color: 'brown',
    skin_color: 'fair',
    birth_year: '29BBY',
    gender: 'male',
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
) as jest.Mock;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => jest.fn(),
}));

describe('App', () => {
  test('Renders search element', async () => {
    render(<App />);
    await waitFor(() => {
      const mainPageElement = screen.getByText('Search');
      const mainPlaceHolder = screen.getByPlaceholderText(
        'Type StarWars character...'
      );

      expect(mainPageElement).toBeInTheDocument();
      expect(mainPlaceHolder).toBeInTheDocument();
    });
  });

  test('Renders error button element', async () => {
    await waitFor(() => {
      render(<App />);
      const mainErrorButton = screen.getByText('error');

      expect(mainErrorButton).toBeInTheDocument();
    });
  });
});
