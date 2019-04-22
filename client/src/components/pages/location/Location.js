import React, { Component, Fragment } from 'react';
import Appbar from '../../shared/appbar/Appbar';
import Spinner from '../../shared/Spinner';
import Image from './Image';
import Toolbar from './Visited';
import Body from './Body';
import Comments from './comments/Comments';
import Divider from '@material-ui/core/Divider';
import ErrorPage from '../../shared/ErrorPage';
import { getLocation } from '../../../services/search';
import { Background, Flex, Wrapper, Card} from '../../shared/styled-components';

class Location extends Component {
    state = {
        id: null,
        location: null,
    }

    getLocation = async () => {
        const data = await getLocation(this.state.id);

        if (data && data.data) {
            this.setState({location: data});
        }
        else {
            this.setState({error: "location not found."});
        }
    }

    componentWillMount = async () => {

        await this.setState({id: this.props.match.params.location});
        this.getLocation();
    }

    componentWillReceiveProps = async () => {

        // Update location id and wipe previous location data
        // Fetch location data
        await this.setState({id: this.props.history.location.pathname.slice(10), location: null, error: null});
        this.getLocation();
    }

    render() { 
        return (
            <Fragment>
                <Background />
                <Appbar />

                {/* If location data exists */}
                {/* Else, show loading spinner */}
                {this.state.error ? <ErrorPage error={this.state.error} /> : 
                <Fragment>
                    {this.state.location && this.state.location.data ? 
                        <Wrapper>
                            <Card>
                                <Image image={this.state.location.data.image} />
                                <Toolbar id={this.state.id} visited={this.state.location.data.visited} />
                                <Body location={this.state.location.data} />
                                <Divider />
                                <Comments id={this.state.id} comments={this.state.location.data.comments} /> 
                            </Card>
                        </Wrapper> 
                    : <Flex><Spinner /></Flex> } 
                </Fragment> }
            </Fragment>
        );
    }
}
 
export default Location;