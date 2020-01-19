import React, { useState, ChangeEvent } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { formatRawShowInList } from './utils';
import Actor from './routes/Actor';
import Show from './routes/Show';
import Home from './routes/Home';
import Header from './components/header';

import './App.css';

export default () => {

    const [query, setQuery] = useState('');
    const [shows, setShows] = useState([]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        // fetch from API
        fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
            .then(res => res.json())
            .then(data => data.map(formatRawShowInList))
            .then(data => setShows(data));
    };

    return (
        <div className="App">
            <Header q={query} handleSearchChange={handleSearchChange} />
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home shows={shows} />
                    </Route>
                    <Route path="/show/:id"
                        render={ (props) => <Show id={ props.match.params.id } /> }
                    />
                    <Route path="/actor/:id"
                        render={ (props) => <Actor id={ props.match.params.id } /> }
                    />
                    <Redirect to="/home" />
                </Switch>
            </Router>
        </div>
    );
}
