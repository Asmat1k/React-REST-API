import './styles/nullstyles.scss';

import { useState } from 'react';

import { ApiProps } from './types/types';

import Search from './components/search';
import List from './components/list';
import ErrorButton from './components/errorButton';

interface AppState {
  data: ApiProps;
  isLoading: boolean;
}

function App() {
  const [data, setData] = useState<AppState>({
    data: {
      count: 0,
      next: '',
      previous: '',
      results: [],
    },
    isLoading: false,
  });

  function updateLoadingState() {
    setData((prevState) => ({ ...prevState, isLoading: !prevState.isLoading }));
  }

  function updateDataState(json: ApiProps) {
    setData((prevState) => ({ ...prevState, data: json }));
  }

  return (
    <>
      <Search onClick={updateDataState} onLoading={updateLoadingState} />
      <List isLoading={data.isLoading} data={data.data} />
      <ErrorButton />
    </>
  );
}

export default App;
