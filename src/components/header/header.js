import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';

import { useStore, useDebounce } from '../../hooks';
import Styled from './styled-components';

const Header = () => {

    const history = useHistory();
    const [query, setQuery] = useState('');
    const bedouncedQuery = useDebounce(query, 500);

    const { showsStore } = useStore();

    useEffect(() => {
        fetch(`http://api.tvmaze.com/search/shows?q=${bedouncedQuery}`)
            .then(res => res.json())
            .then(shows => showsStore.setShows(shows))
            .then(() => history.push('/'));

    }, [bedouncedQuery, showsStore, history]);

    return useObserver(() => (
        <Styled.Header>
            Search show:
            <Styled.StyledInput value={query} onChange={e => setQuery(e.target.value)} />
            { showsStore.show &&
                <div>Current Show: {showsStore.show.name}</div>
            }
        </Styled.Header>
    ));
};

export default Header;
