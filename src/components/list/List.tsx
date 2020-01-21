import React, { ReactElement } from 'react';
import './list.css';

import { Item, TileTypes } from '../../types';
import Tile from '../tile/Tile';

interface Props {
    items: Item[];
    itemType: TileTypes;
    onItemClick: (item:Item) => void;
}

export default function List({ items, itemType, onItemClick }: Props): ReactElement {
    return (
        <div className="list" role="list" data-testid="list">
            {items
                .filter(show => show.pic)
                .map(show => {
                    return (
                        <Tile
                            type={itemType}
                            data={show}
                            key={show.id}
                            onTileClick={onItemClick}
                            hideSummary
                            hideName
                        />
                    );
                })}
        </div>
    );
}
