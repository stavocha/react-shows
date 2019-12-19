import React, { ReactElement } from 'react';
import './list.css';

import { Item, TileTypes } from '../../types';
import Tile from '../tile/Tile';

interface Props {
    items: Item[];
    itemType: TileTypes;
}

export default function List({ items, itemType }: Props): ReactElement {
    return (
        <div className="list">
            {items.map(show => {
                return (
                    <Tile
                        type={itemType}
                        data={show}
                        key={show.id}
                        hideSummary
                        hideName
                    />
                );
            })}
        </div>
    );
}
