import React, { useEffect, useState } from 'react';
import { Tile, TileTypes } from '../../components';

function ActorDetails() {

    const [credits, setCredits] = useState(null);

    useEffect(() => {
        // fetch actor credits (which shows he/she played in)
        fetch(`http://api.tvmaze.com/people/${actorId}/castcredits?embed=show`)
            .then(res => res.json())
            .then(credits => credits.map(credit => credit._embedded.show))
            .then(credits => setCredits(credits));
    }, [actorId])

    return () => (
        <div>
            {actorStore.actor && (
                <Tile type={TileTypes.actor} data={actorStore.actor} />
            )}
            <div className="credits">
                {credits && credits.map(show => (
                    <Tile type={TileTypes.show} data={show} hideSummary hideName />
                ))}
            </div>
        </div>
    );
}

export default ActorDetails;
