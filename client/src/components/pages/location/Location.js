import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Appbar from '../../shared/appbar/Appbar';
import Spinner from '../../shared/Spinner';
import Image from './Image';
import Toolbar from './Visited';
import Comments from './comments/Comments';
import { getLocation } from '../../../services/search';
import { Background, Flex, Wrapper, Card} from '../../shared/styled-components';

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
                <Background />
                <Appbar />
                {this.state.location && this.state.location.data ? (
                    <Wrapper>
                        <Card>
                            <Image image={this.state.location.data.image} />
                            <Toolbar id={this.state.id} visited={this.state.location.data.visited} />
                            <Comments id={this.state.id} comments={this.state.location.data.comments} /> 
                        </Card>
                    </Wrapper>
                ) : <Flex><Spinner /></Flex> }
            </Fragment>
        );
    }
}
 
export default Location;