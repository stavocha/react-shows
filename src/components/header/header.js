import React from 'react';
import { computed, autorun } from 'mobx';
import { observer, inject } from 'mobx-react';
import Input from '@material-ui/core/Input';
import { withRouter } from 'react-router';

import './header.css';

@inject('stores')
@observer
class Header extends React.Component {

    state = {
        query: '',
    };

    disposer = autorun(() => {
        const { stores } = this.props;
        const { showsStore } = stores;

        fetch(`http://api.tvmaze.com/search/shows?q=${this.query}`)
            .then(res => res.json())
            .then(shows => showsStore.setShows(shows));
    });

    componentWillUnmount() {
        this.disposer();
    }

    @computed
    get query() {
        return this.state.query;
    }

    render() {
        const {
            showsStore,
            actorStore,
        } = this.props.stores;

        const { query } = this.state;

        return (
            <div className="header">
                <div>
                    Search show:
                    <Input value={query} onChange={e => this.setState({query: e.target.value})} />
                </div>
                { showsStore.show &&
                    <div>Current Show: {showsStore.show.name}</div>
                }
                { actorStore.actor &&
                    <div>Current Actor: {actorStore.actor.person.name} </div>
                }
            </div>
        );
    }
}

export default withRouter(Header);
