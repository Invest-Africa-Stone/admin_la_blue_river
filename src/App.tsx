import { FC } from 'react';
import './App.css';
import { Navigations } from '@navigation';
import { AppContextProvider } from '@contexts';

const App:FC = ()=> {
  return (
    <AppContextProvider>
      <Navigations />
    </AppContextProvider>
  );
}

export default App;
