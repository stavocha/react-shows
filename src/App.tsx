import React, { ChangeEvent } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';
import { setSearchResults, setSearchQuery, fetchShows } from './redux/features/search/searchSlice'
import Actor from './routes/Actor';
import Show from './routes/Show';
import Home from './routes/Home';
import Header from './components/header';

import './App.css';

export default () => {

    const { results, searchTerm } =
        useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();
    
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery({ q: event.target.value }));
        dispatch(fetchShows(event.target.value));
    };

    return (
        <div className="App">
            <Header handleSearchChange={handleSearchChange} />
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home shows={results} />
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
