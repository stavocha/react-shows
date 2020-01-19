import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { TileTypes } from '../types';
import { formatRawSingleShow } from '../utils';
import Tile from '../components/tile'

interface Props extends RouteComponentProps { 
    id: string,
};

const Show:React.FC<Props> = ({ id, history}) => {
    const [showDetails, setShowDetails] = useState()
    useEffect(() => {

        // fetch from API
        fetch(`http://api.tvmaze.com/shows/${id}?embed[]=cast`)
            .then(res => res.json())
            .then(data => formatRawSingleShow(data))
            .then(data => setShowDetails(data));
    } ,[ id ]);

    console.log('showDetails: ', showDetails);

    const onActorClick = (id:string) => {
        history.push(`/actor/${id}`)
    }

    if (!showDetails) {
        return null;
    }

    return showDetails && (
        <div>
            <Tile type={TileTypes.Show} data={showDetails} hideName />
            <div className="characters">
                {showDetails.relatedItems.map((cast: any, index:number) => (
                    <Tile type={TileTypes.Character} onTileClick={onActorClick} data={cast} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default withRouter(Show);
