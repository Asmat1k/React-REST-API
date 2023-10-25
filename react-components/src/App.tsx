import React from 'react';

import './styles/nullstyles.scss';

import Search from './components/search';
import { ApiProps } from './types/types';
import List from './components/list';

interface AppState {
  data: ApiProps;
  isLoading: boolean;
}

class App extends React.Component<null, AppState> {
  constructor(props: null) {
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
      </>
    );
  }
}

export default App;
