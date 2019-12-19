import React, { ReactElement } from 'react';
import { Item, TileTypes } from '../../types';
import './tile.css';
interface Props {
    data: Item;
    type: TileTypes;
    hideSummary?: boolean;
    hideName?: boolean;
}

export default function Tile({
    data: { pic, title, description },
    hideSummary,
}: Props): ReactElement {
    return (
        <div className="tile">
            <div className="image">
                <img src={pic} />
            </div>

            <h4>{title}</h4>
            {!hideSummary && (
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            )}
        </div>
    );
}
