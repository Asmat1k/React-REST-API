import './styles/nullstyles.scss';

import { useState } from 'react';

import { ApiProps } from './types/types';

import Search from './components/search';
import List from './components/list';
import ErrorButton from './components/errorButton';
import Context from './context';

interface AppState {
  response: ApiProps;
  number: number;
  isLoading: boolean;
}

function App() {
  const [data, setData] = useState<AppState>({
    response: {
      count: 0,
      next: '',
      previous: '',
      results: [],
    },
    number: 10,
    isLoading: false,
  });

  function updateLoadingState() {
    setData((prevState) => ({ ...prevState, isLoading: !prevState.isLoading }));
  }

  function updateDataState(json?: ApiProps | void) {
    if (json)
      setData((prevState) => {
        return {
          ...prevState,
          response: json,
        };
      });
  }

  function updateNumberState(newNum: number) {
    setData((prevState) => {
      return {
        ...prevState,
        number: newNum,
      };
    });
  }

  return (
    <Context.Provider
      value={{ data, updateLoadingState, updateDataState, updateNumberState }}
    >
      <Search />
      <List />
      <ErrorButton />
    </Context.Provider>
  );
}

export default App;
