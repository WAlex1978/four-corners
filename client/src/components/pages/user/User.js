import React, { Component, Fragment } from 'react';
import Appbar from '../../shared/appbar/Appbar';
import Visited from './Visited';
import { Background } from '../../shared/styled-components';

class User extends Component {
    state = {
        user: this.props.match.params.user,
    }

    render() { 
        return (
            <Fragment>
                <Appbar />
                <Background />
                <Visited username={this.state.user} />
            </Fragment>
        );
    }
}
 
export default User;