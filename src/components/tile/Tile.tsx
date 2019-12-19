import React, { ReactElement } from 'react';
import { Item, TileTypes } from '../../types';

interface Props {
    data: Item;
    type: TileTypes;
    hideSummary?: boolean;
    hideName?: boolean;
}

export default function Tile({
    data: { pic, title, description },
}: Props): ReactElement {
    return (
        <div>
            <div>title</div>
            <img src={pic} />
            <p>{description}</p>
        </div>
    );
}
