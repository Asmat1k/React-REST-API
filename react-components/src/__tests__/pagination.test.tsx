import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import ContextProvider from '../utils/context/contextProvider';
import Pagination from '../components/pagination';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Pagination:', () => {
  test('Renders buttons', () => {
    const { container } = render(
      <ContextProvider>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </ContextProvider>
    );

    const wrapper = container.querySelector('.wrapper');
    expect(wrapper).toBeInTheDocument();

    const buttons = container.querySelectorAll('.button');
    expect(buttons).toHaveLength(2);
  });
});
