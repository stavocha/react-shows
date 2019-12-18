import React from 'react';
import { withRouter } from 'react-router';

import './showDetails.css';
import { Tile, TileTypes } from '../../components';

class ShowDetails extends React.Component {

    state = {
        show: null,
    };

    componentDidMount() {
        const { showId } = this.props.match.params;

        // fetch show with embedded cast
        fetch(`http://api.tvmaze.com/shows/${showId}?embed[]=cast`)
            .then(res => res.json())
            .then(show => this.setState({show}));
    }

    render() {
        const { show } = this.state;

        return (
            <div>
                {show && (
                    <div>
                        <Tile type={TileTypes.show} data={show} hideName />
                        <div className="characters">
                            {show._embedded.cast.map(cast => (
                                <Tile type={TileTypes.character} data={cast} key={cast.character.id}/>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(ShowDetails);
