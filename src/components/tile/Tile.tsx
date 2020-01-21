import React, { ReactElement } from 'react';
import { Item, TileTypes } from '../../types';
import './tile.css';
export interface Props {
    data: Item;
    onTileClick?: (item: Item) => void;
    type: TileTypes;
    hideSummary?: boolean;
    hideName?: boolean;
}

function Tile({
    data: { pic, title, description, id },
    hideSummary,
    onTileClick,
}: Props): ReactElement {
    return (
        <div className="tile" data-testid="tile">
            <div className="image" role="button" onClick={() => onTileClick && onTileClick({ pic, title, description, id }) }>
                <img src={pic} alt={title} />
            </div>
            <h4>
                {title} {id}
            </h4>
            {!hideSummary && (
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            )}
        </div>
    );
}

export default Tile;
