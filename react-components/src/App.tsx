import React from 'react';
import './styles/nullstyles.scss';

import { ApiProps } from './types/types';

import Search from './components/search';
import List from './components/list';
import ErrorButton from './components/errorButton';

interface AppState {
  data: ApiProps;
  isLoading: boolean;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: {
        count: 0,
        next: '',
        previous: '',
        results: [],
      },
      isLoading: false,
    };
    this.updateDataState = this.updateDataState.bind(this);
    this.updateLoadingState = this.updateLoadingState.bind(this);
  }

  updateLoadingState() {
    this.setState((oldState) => ({ isLoading: !oldState.isLoading }));
  }

  updateDataState(json: ApiProps) {
    this.setState({ data: json });
  }

  render() {
    return (
      <>
        <Search
          onClick={this.updateDataState}
          onLoading={this.updateLoadingState}
        />
        <List isLoading={this.state.isLoading} data={this.state.data} />
        <ErrorButton />
      </>
    );
  }
}

export default App;
