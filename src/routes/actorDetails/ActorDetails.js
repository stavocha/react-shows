import React from 'react';
import { withRouter } from 'react-router';

import { Tile, TileTypes } from '../../components';
import "./actor.css";

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
        const { credits } = this.state;

        return (
            <div>
            </div>
        );
    }
};

export default withRouter(ActorDetails);
