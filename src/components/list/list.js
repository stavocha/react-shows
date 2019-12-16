import React from 'react';
import { useObserver } from 'mobx-react-lite';

import './list.css';
import { useStore } from '../../hooks';
import { Tile, TileTypes } from '../../components'

const List = () => {

    const { showsStore } = useStore();

    return useObserver(() => (
        <div className="list">
            { showsStore.showsPlain.map((show) => {
                return (
                    <Tile type={TileTypes.show} data={show} key={show.id} hideSummary hideName />
                );
            })}
        </div>
    ));
};

export default List;
