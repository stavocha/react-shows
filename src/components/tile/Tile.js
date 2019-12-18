import React from 'react';
import get from 'lodash/get';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './tile.css';
import { TileTypes } from '../';

@inject('stores')
@observer
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
            stores,
        } = this.props;

        const {
            showsStore,
            actorStore,
        } = stores;

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
