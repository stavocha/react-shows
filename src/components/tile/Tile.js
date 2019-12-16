import React from 'react';
import { useHistory } from 'react-router-dom';
import get from 'lodash/get';

import './tile.css';
import { TileTypes } from '../';
import { useStore } from '../../hooks';

const Tile = ({ type, data, hideSummary, hideName }) => {

    const history = useHistory();
    const {
        showsStore,
        actorStore,
    } = useStore();

    const handleClick = () => {
        let url = '';
        switch(type) {
            case TileTypes.show:
                showsStore.setCurrentShow(data);
                url = `/show/${data.id}`;
                break;
            case TileTypes.character:
                actorStore.setActor(data);
                url = `/actor/${data.person.id}`;
                break;
            case TileTypes.season:
            case TileTypes.actor:
            default:
                return;
        }
        history.push(url);
    }

    const processData = () => {
        if (type === TileTypes.character) {
            return [
                get(data, 'character.image.medium', ''),
                get(data, 'character.name'),
            ];
        }

        if (type === TileTypes.actor) {
            return [
                get(data, 'person.image.medium', ''),
                get(data, 'person.name'),
            ];
        }

        return [
            get(data, 'image.medium', ''),
            get(data, 'name'),
        ];
    }

    const [imgSource, name] = processData();

    return (
        <div className="tile" onClick={handleClick}>
            <div className="image">
                <img
                    alt={name}
                    src={imgSource}
                />
                {!hideName && name}
            </div>
            {!hideSummary && data.summary &&
                <div dangerouslySetInnerHTML={{ __html: data.summary}}></div>
            }
        </div>
    );
};

export default Tile;
