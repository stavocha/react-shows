import React from 'react';
import Styled from './styled-components';
import { useObserver } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useStore } from '../../hooks/useStore';

const List = () => {

    const {
        showsStore,
    } = useStore();

    return useObserver(() => (
        <Styled.List>
            <ul>
                { showsStore.showsPlain.map((show) => {
                    return (<li key={show.id}>{show.name}</li>);
                })}
            </ul>
        </Styled.List>
    ));
};

export default List;
