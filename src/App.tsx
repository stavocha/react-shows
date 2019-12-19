import React from 'react';
import Header from './components/header/Header';
import List from './components/list/List';
import { TileTypes, Item } from './types';
import './App.css';
import { shows as rawShows } from './mocks';

const shows: Item[] = rawShows
    .filter(show => show.show.image)
    .map(({ show }) => {
        console.log(show);

        return {
            id: show.id,
            pic: show.image.medium,
            title: show.name,
            description: show.summary,
        } as Item;
    });
const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <List items={shows} itemType={TileTypes.ShowTile} />
        </div>
    );
};

export default App;
