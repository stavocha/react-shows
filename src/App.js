    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
    import { Provider } from 'mobx-react';
    import { Header } from './components';
    import {
        Home,
        ActorDetails,
        ShowDetails,
    } from './routes';
    import Stores from './stores/StoreContext';

    function App() {
        return (
            <div>
                <Provider stores={Stores}>
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
                </Provider>
            </div>
        );
    }

    export default App;
