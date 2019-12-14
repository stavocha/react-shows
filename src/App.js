import React from 'react';
import './App.css';
import Header from './components/header/header';
import List from './components/list/list';
import { StoreProvider } from './stores/StoresContext';

function App() {
  return (
    <div className="App">
        <StoreProvider>
            <header className="App-header">
                <Header></Header>
                <List></List>
            </header>
      </StoreProvider>
    </div>
  );
}

export default App;
