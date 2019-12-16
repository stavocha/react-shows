import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Tile, TileTypes } from '../../components';
import Styled from './styled-components';

function ShowDetails() {

    const [show, setShow] = useState(null);
    const { showId } = useParams();

    useEffect(() => {
        fetch(`http://api.tvmaze.com/shows/${showId}?embed[]=cast`)
            .then(res => res.json())
            .then(show => setShow(show));
    }, [showId])

    return (
        <Styled.ShowDetails>
            {show && (
                <React.Fragment>
                    <Tile type={TileTypes.show} data={show} />
                    {show._embedded.cast.map(cast => (
                        <React.Fragment key={cast.character.id}>
                            <Tile type={TileTypes.character} data={cast} />
                        </React.Fragment>
                    ))}
                </React.Fragment>
            )}
        </Styled.ShowDetails>
    );
}

export default ShowDetails;
