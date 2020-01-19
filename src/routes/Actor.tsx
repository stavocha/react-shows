import React, { useEffect, useState } from 'react';
import Tile from '../components/tile'
import { TileTypes } from '../types'

interface Props { id: string };

const ActorDetails:React.FC<Props> = ({ id }) => {
    
    const [currentActor] = useState({ pic: '', title: 'myTitle', description: 'myDes', id:'myId' });
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        
        // fetch actor credits (which shows he/she played in)
        fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`)
            .then(res => res.json())
            .then(credits => credits.map((credit:any) => credit._embedded.show))
            .then(credits => setCredits(credits));
    }, [id])

    return <div>
            {currentActor && (
                <Tile type={TileTypes.Actor} data={currentActor} />
            )}
            <div className="credits">
                {credits.length && credits.map((show:any) => (
                    <Tile type={TileTypes.Show} data={show} hideSummary hideName />
                ))}
            </div>
        </div>;
}

export default ActorDetails;
