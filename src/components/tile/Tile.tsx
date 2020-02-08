import React, { ReactElement } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Item, TileTypes } from '../../types';
import './tile.css';
interface Props extends RouteComponentProps {
    data: Item;
    type: TileTypes;
    hideSummary?: boolean;
    hideName?: boolean;
}

function Tile({
    data: { pic, title, description, id },
    hideSummary,
    history,
}: Props): ReactElement {
    return (
        <div className="tile">
            <div className="image" onClick={() => history.push(`/show/${id}`)}>
                <img src={pic} alt={title}/>
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

export default withRouter(Tile);
