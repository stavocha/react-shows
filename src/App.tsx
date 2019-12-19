import React from 'react';
import Header from './components/header/Header';
import List from './components/list/List';
import { TileTypes } from './types';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <List items={[]} itemType={TileTypes.ShowTile} />
        </div>
    );
};

export default App;
