import React, { Component, Fragment } from 'react';
import Appbar from '../../shared/appbar/Appbar';
import Spinner from '../../shared/Spinner';
import Comments from '../../shared/comments/Comments';
import { getLocation } from '../../../services/search';
import { Flex, Wrapper } from '../../shared/styled-components';

class Location extends Component {
    state = {
        id: this.props.match.params.location,
        location: null,
    }

    componentWillMount = async () => {

        // Fetch location data
        const data = await getLocation(this.state.id);
        this.setState({location: data});
    }

    render() { 
        return (
            <Fragment>
                <Appbar />
                {this.state.location && this.state.location.data ? (
                    <Wrapper>
                        <Comments id={this.state.id} comments={this.state.location.data.comments} /> 
                    </Wrapper>
                ) : <Flex><Spinner /></Flex> }
            </Fragment>
        );
    }
}
 
export default Location;