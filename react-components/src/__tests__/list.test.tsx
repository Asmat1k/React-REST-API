import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '../components/list';

jest.mock('../utils/context/context');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => jest.fn(),
}));

describe('List', () => {
  test('Renders loading spinner', async () => {
    const mockContextValue = {
      data: {
        response: {},
        number: 0,
        isLoading: true,
      },
    };

    jest.spyOn(React, 'useContext').mockReturnValue(mockContextValue);

    const { getByTestId } = render(<List />);

    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('Renders "Nothing was found..."', async () => {
    const mockContextValue = {
      data: {
        response: {
          results: [],
        },
        number: 0,
        isLoading: false,
      },
    };

    jest.spyOn(React, 'useContext').mockReturnValue(mockContextValue);

    render(<List />);

    const tesxtElement = screen.getByText('Nothing was found...');
    expect(tesxtElement).toBeInTheDocument();
  });
});
