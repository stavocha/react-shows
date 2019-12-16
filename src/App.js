    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
    import './App.css';
    import { Header } from './components';
    import {
        Home,
        ActorDetails,
        ShowDetails,
    } from './routes';
    import { StoreProvider } from './stores/StoreContext';

    function App() {
    return (
        <div className="App">
            <StoreProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/show/:showId">
                            <ShowDetails />
                        </Route>
                        <Route exact path="/actor/:actorId">
                            <ActorDetails />
                        </Route>
                    </Switch>
                </Router>
            </StoreProvider>
        </div>
    );
    }

    export default App;
