import React, { ChangeEvent } from 'react';
import Header from './components/header/Header';
import List from './components/list/List';
import { TileTypes, Item } from './types';
import './App.css';
// import { shows as rawShows } from './mocks';

// Mock data
// TODO - replace with real
// const shows: Item[] = rawShows
//     .filter(show => show.show.image)
//     .map(formatRawShows);

function formatRawShows(item: any): Item {
    const { score, show } = item;
    return {
        id: show.id,
        pic: show.image ? show.image.medium : '', // unsafe...
        title: show.name,
        score,
        description: show.summary,
    };
}

interface Props {}

interface State {
    q: string;
    shows: Item[];
}

class App extends React.Component<Props, State> {
    state = {
        q: '',
        shows: [],
    };

    handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        this.setState({ q: query });

        // fetch from API
        fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
            .then(res => res.json())
            .then(data => this.setState({ shows: data.map(formatRawShows) }));
    };

    render() {
        const { q, shows } = this.state;
        return (
            <div className="App">
                <Header handleSearchChange={this.handleSearchChange} q={q} />
                <List items={shows} itemType={TileTypes.ShowTile} />
            </div>
        );
    }
}

export default App;
