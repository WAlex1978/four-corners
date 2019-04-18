import React, { Component, Fragment } from 'react';
import Appbar from '../../shared/appbar/Appbar';
import Comments from '../../shared/comments/Comments';

class Location extends Component {
    state = {
        location: this.props.match.params.location,
    }

    render() { 
        return (
            <Fragment>
                <Appbar />
                <Comments location={this.state.location} />
            </Fragment>
        );
    }
}
 
export default Location;