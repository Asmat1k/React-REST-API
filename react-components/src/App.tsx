import './styles/nullstyles.scss';
import styles from './app.module.scss';

import { Outlet } from 'react-router-dom';

import Search from './components/search';
import List from './components/list';
import ErrorButton from './components/errorButton';
import ContextProvider from './utils/context/contextProvider';

function App() {
  return (
    <ContextProvider>
      <Search />
      <div className={styles.results}>
        <List />
        <Outlet />
      </div>
      <ErrorButton />
    </ContextProvider>
  );
}

export default App;
