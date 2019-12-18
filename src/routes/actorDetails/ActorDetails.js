import React from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import { Tile, TileTypes } from '../../components';
import "./actor.css";

@inject('stores')
@observer
class ActorDetails extends React.Component {

    state = {
        credits: null,
    };

    componentDidMount() {
        const { actorId } = this.props.match.params;

        fetch(`http://api.tvmaze.com/people/${actorId}/castcredits?embed=show`)
            .then(res => res.json())
            .then(credits => credits.map(credit => credit._embedded.show))
            .then(credits => this.setState({credits}));
    }

    render() {
        const { actorStore } = this.props.stores;
        const { credits } = this.state;

        return (
            <div>
                {actorStore.actor && (
                    <Tile type={TileTypes.actor} data={actorStore.actor} />
                )}
                <div className="credits">
                    {credits && credits.map(show => (
                        <Tile type={TileTypes.show} data={show} key={show.id} hideSummary hideName />
                    ))}
                </div>
            </div>
        );
    }
};

export default withRouter(ActorDetails);
