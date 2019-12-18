import React from 'react';
import { observer, inject } from 'mobx-react';

import './list.css';
import { Tile, TileTypes } from '../../components'

@inject('stores')
@observer
class List extends React.Component {

    render() {
        const { showsStore } = this.props.stores;

        return (
            <div className="list">
                { showsStore.showsPlain.map((show) => {
                    return (
                        <Tile type={TileTypes.show} data={show} key={show.id} hideSummary hideName />
                    );
                })}
            </div>
        );
    }

};

export default List;
