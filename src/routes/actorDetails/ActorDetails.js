import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';

import { useStore } from '../../hooks';
import { Tile, TileTypes } from '../../components';
import Styled from './styled-components';

function ActorDetails() {

    const [credits, setCredits] = useState(null);
    const { actorId } = useParams();
    const { actorStore } = useStore();

    useEffect(() => {
        fetch(`http://api.tvmaze.com/people/${actorId}/castcredits?embed=show`)
            .then(res => res.json())
            .then(credits => credits.map(credit => credit._embedded.show))
            .then(credits => setCredits(credits));
    }, [actorId])

    return useObserver(() => (
        <Styled.ActorDetails>
            {actorStore.actor && (
                <React.Fragment>
                    <Tile type={TileTypes.actor} data={actorStore.actor} />
                </React.Fragment>
            )}
            {credits && credits.map(show => (
                <React.Fragment key={show.id}>
                    <Tile type={TileTypes.show} data={show} hideSummary />
                </React.Fragment>
            ))}
        </Styled.ActorDetails>
    ));
}

export default ActorDetails;
