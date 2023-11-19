import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import ContextProvider from '../utils/context/contextProvider';
import Search from '../components/search';

describe('Search:', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Saves on blur', async () => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    render(
      <ContextProvider>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </ContextProvider>
    );

    const input = screen.getByPlaceholderText(/Type StarWars character.../i);
    const inputValue = 'Luke Skywalker';

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.blur(input);

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'lastSearch',
      inputValue
    );
  });
});
