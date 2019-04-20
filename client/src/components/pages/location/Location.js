import React, { Component, Fragment } from 'react';
import Appbar from '../../shared/appbar/Appbar';
import Spinner from '../../shared/Spinner';
import Image from './Image';
import Toolbar from './Visited';
import Body from './Body';
import Comments from './comments/Comments';
import Divider from '@material-ui/core/Divider';
import { getLocation } from '../../../services/search';
import { Background, Flex, Wrapper, Card} from '../../shared/styled-components';

class Location extends Component {
    state = {
        id: null,
        location: null,
    }

    componentWillMount = async () => {

        // Fetch location data
        await this.setState({id: this.props.match.params.location})
        this.getLocation();
    }

    componentWillReceiveProps = async () => {
        await this.setState({id: this.props.history.location.id});
        this.getLocation();
    }

    getLocation = async () => {
        const data = await getLocation(this.state.id);
        this.setState({location: data});
    }

    render() { 
        return (
            <Fragment>
                <Background />
                <Appbar />

                {/* If location data exists */}
                {/* Else, show loading spinner */}
                {this.state.location && this.state.location.data ? (
                    <Wrapper>
                        <Card>
                            <Image image={this.state.location.data.image} />
                            <Toolbar id={this.state.id} visited={this.state.location.data.visited} />
                            <Body location={this.state.location.data} />
                            <Divider />
                            <Comments id={this.state.id} comments={this.state.location.data.comments} /> 
                        </Card>
                    </Wrapper>
                ) : <Flex><Spinner /></Flex> }
            </Fragment>
        );
    }
}
 
export default Location;