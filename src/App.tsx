import React, { ChangeEvent, useState, useCallback } from 'react';
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
import 'papercss/dist/paper.min.css';
import Person from './routes/Person';
import { useAuth0 } from './react-auth0-spa';
import PrivateRoute from './components/PrivateRoute';

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

const App: React.FC = () => {
    const [q, setQ] = useState<string>('');
    const [shows, setShows] = useState<Array<any>>([]);

    const { loading } = useAuth0();

    const handleSearchChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const query = event.target.value;
            setQ(query);

            // fetch from API
            fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
                .then(res => res.json())
                .then(data => setShows(data.map(formatRawShows)));
        },
        []
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home
                            q={q}
                            shows={shows}
                            handleSearchChange={handleSearchChange}
                        />
                    </Route>
                    <PrivateRoute path="/show/:id" component={Show} />
                    <PrivateRoute path="/person/:id" component={Person} />

                    <Redirect to="/home" />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
