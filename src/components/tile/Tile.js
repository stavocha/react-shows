import React from 'react';
import get from 'lodash/get';
import { withRouter } from 'react-router';

import './tile.css';
import { TileTypes } from '../';

class Tile extends React.Component {

    processData = (type, data) => {
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

    handleClick = () => {
        const {
            history,
            type,
            data,
        } = this.props;


        let url = '';
        switch(type) {
            case TileTypes.show:
                break;
            case TileTypes.character:
                break;
            case TileTypes.season:
            case TileTypes.actor:
            default:
                return;
        }
        history.push(url);
    }

    render() {
        const { type, data, hideSummary, hideName } = this.props;
        const [imgSource, name] = this.processData(type, data);

        return (
            <div className="tile" onClick={this.handleClick}>
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
    }

};

export default withRouter(Tile);
