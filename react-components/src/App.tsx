import Search from './components/search';
import List from './components/list';
import './styles/nullstyles.scss';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Search />
        <List />
      </>
    );
  }
}

export default App;
