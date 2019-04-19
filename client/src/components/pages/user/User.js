import React, { Component, Fragment } from 'react';
import Appbar from '../../shared/appbar/Appbar';

class User extends Component {
    state = {
        user: this.props.match.params.user,
    }

    render() { 
        return (
            <Fragment>
                <Appbar />
                {this.state.user}
            </Fragment>
        );
    }
}
 
export default User;