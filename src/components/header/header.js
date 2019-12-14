import React, { useEffect, useState } from 'react';
import Styled from './styled-components';
import { useObserver } from 'mobx-react-lite';
import useDebounce from '../../hooks/useDebounce';

import { useStore } from '../../hooks/useStore';

const Header = () => {

    const [count, setCount] = useState(0);
    const [query, setQuery] = useState('');
    const bedouncedQuery = useDebounce(query, 500);

    const {
        actorStore,
        showsStore,
    } = useStore();

    useEffect(() => {
        fetch(`http://api.tvmaze.com/people/${count}`)
            .then(res => res.json())
            .then(actor => actorStore.setActor(actor));

    }, [count, actorStore]);

    useEffect(() => {
        fetch(`http://api.tvmaze.com/search/shows?q=${bedouncedQuery}`)
            .then(res => res.json())
            .then((shows) => {
                console.log(shows);
                showsStore.setShows(shows);
            });

    }, [bedouncedQuery, showsStore]);

    return useObserver(() => (
        <Styled.Header onClick={() => setCount(count + 1)}>
            Search show, {actorStore.name}:
            <Styled.StyledInput value={query} onChange={e => setQuery(e.target.value)} />
        </Styled.Header>
    ));
};

export default Header;
