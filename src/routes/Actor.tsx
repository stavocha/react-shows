import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Tile from '../components/tile';
import { TileTypes, Item } from '../types';
import { formatRawCast, formatRawSingleShow } from '../utils';


interface Props extends RouteComponentProps { 
    id: string,
};
const ActorDetails:React.FC<Props> = ({ id, history }) => {
    const [currentActor,setCurrentActor] = useState();

    useEffect(() => {        
        // fetch actor details
        fetch(`http://api.tvmaze.com/people/${id}?embed=castcredits`)
            .then(res => res.json())
            .then(data => formatRawCast(data))
            .then(data => setCurrentActor(data));
    }, [id])

    useEffect(() => {        
        // fetch actor credits (which shows he/she played in)
        if (!currentActor || !currentActor.relatedItems) return;
        if (!currentActor.relatedItems.length) {
            fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`)
                .then(res => res.json())
                .then(data => data.map((item:any) => item._embedded.show))
                .then(shows => shows.map(formatRawSingleShow))
                .then(relatedItems => setCurrentActor({
                    ...currentActor,
                    relatedItems,
                }));
        }
    }, [currentActor])

    const onShowClick = (item: Item) => {
        history.push(`/show/${item.id}`)
    }
    if (!currentActor) {
        return null;
    }

    return currentActor && (<div>
                <Tile type={TileTypes.Actor} data={currentActor} />
            <div className="credits">
                {currentActor.relatedItems.map((show:any) => (
                    <Tile type={TileTypes.Show} onTileClick={onShowClick} data={show} hideSummary hideName />
                ))}
            </div>
    </div>);
}

export default withRouter(ActorDetails);
