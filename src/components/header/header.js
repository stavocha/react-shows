import React from 'react';
import Input from '@material-ui/core/Input';
import { withRouter } from 'react-router';

import './header.css';

class Header extends React.Component {

    state = {
        query: '',
    };

    componentWillUnmount() {
    }

    render() {
        const { query } = this.state;

        return (
            <div className="header">
                <div>
                    Search show:
                    <Input value={query} onChange={e => this.setState({query: e.target.value})} />
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
