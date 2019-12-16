import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';
import Input from '@material-ui/core/Input';

import { useStore, useDebounce } from '../../hooks';
import './header.css';

const Header = () => {

    const history = useHistory();
    const [query, setQuery] = useState('');
    const bedouncedQuery = useDebounce(query, 500);

    const {
        showsStore,
        actorStore,
    } = useStore();

    useEffect(() => {
        // fetch shows based on debounced query
        fetch(`http://api.tvmaze.com/search/shows?q=${bedouncedQuery}`)
            .then(res => res.json())
            .then(shows => showsStore.setShows(shows))
            .then(() => history.push('/'));

    }, [bedouncedQuery, showsStore, history]);

    return useObserver(() => (
        <div className="header">
            <div>
                Search show:
                <Input value={query} onChange={e => setQuery(e.target.value)} />
            </div>
            { showsStore.show &&
                <div>Current Show: {showsStore.show.name}</div>
            }
            { actorStore.actor &&
                <div>Current Actor: {actorStore.actor.person.name} </div>
            }
        </div>
    ));
};

export default Header;
