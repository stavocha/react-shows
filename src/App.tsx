import React, { ChangeEvent } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Item } from './types';
import './App.css';
import Show from './routes/Show';
import { Home } from './routes/Home';
import 'papercss/dist/paper.min.css'
import Person from './routes/Person';

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
                <Router>
                    <Switch>
                        <Route path="/home">
                            <Home
                                q={q}
                                shows={shows}
                                handleSearchChange={this.handleSearchChange}
                            />
                        </Route>
                        <Route path="/show/:id" component={Show} />
                        <Route path="/person/:id" component={Person} />

                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
