import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';

import { useStore } from '../../hooks';
import { Tile, TileTypes } from '../../components';
import "./actor.css";

function ActorDetails() {

    const [credits, setCredits] = useState(null);
    const { actorId } = useParams();
    const { actorStore } = useStore();

    useEffect(() => {
        // fetch actor credits (which shows he/she played in)
        fetch(`http://api.tvmaze.com/people/${actorId}/castcredits?embed=show`)
            .then(res => res.json())
            .then(credits => credits.map(credit => credit._embedded.show))
            .then(credits => setCredits(credits));
    }, [actorId])

    return useObserver(() => (
        <div>
            {actorStore.actor && (
                <Tile type={TileTypes.actor} data={actorStore.actor} />
            )}
            <div className="credits">
                {credits && credits.map((show,index) => (
                    <Tile type={TileTypes.show} data={show} key={`tile-${index}`} hideSummary hideName />
                ))}
            </div>
        </div>
    ));
}

export default ActorDetails;
