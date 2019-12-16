import React from 'react';
import { useObserver } from 'mobx-react-lite';

import Styled from './styled-components';
import { useStore } from '../../hooks';
import { Tile, TileTypes } from '../../components'

const List = () => {

    const { showsStore } = useStore();

    return useObserver(() => (
        <Styled.List>
            { showsStore.showsPlain.map((show) => {
                return (
                    <Tile type={TileTypes.show} data={show} key={show.id} hideSummary hideName />
                );
            })}
        </Styled.List>
    ));
};

export default List;
