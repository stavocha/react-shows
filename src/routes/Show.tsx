import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { TileTypes, Item } from '../types';
import Tile from '../components/tile'
import { RootState } from '../redux/rootReducer';
import { fetchShowDetails } from '../redux/features/showDetails/showDetailsSlice';
interface Props extends RouteComponentProps { 
    id: string,
};

const Show:React.FC<Props> = ({ id, history}) => {
    // const [showDetails, setShowDetails] = useState()
    const { selected:showDetails } = useSelector((state:RootState) => state.show);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!showDetails.id || !showDetails.relatedItems) {
            dispatch(fetchShowDetails(id));
        }
    } ,[ showDetails, id ]);

    console.log('showDetails: ', showDetails);

    const onActorClick = (item: Item) => {
        history.push(`/actor/${item.id}`)
    }

    if (!showDetails) {
        return null;
    }

    return showDetails && (
        <div>
            <Tile type={TileTypes.Show} data={showDetails} hideName />
            <div className="characters">
                {!showDetails.relatedItems ? null : showDetails.relatedItems.map((cast: any, index:number) => (
                    <Tile type={TileTypes.Character} onTileClick={onActorClick} data={cast} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default withRouter(Show);
