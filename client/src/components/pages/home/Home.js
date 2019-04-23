import React, { Component, Fragment } from 'react';
import { search } from '../../../services/search';
import { Flex } from '../../shared/styled-components';
import Appbar from '../../shared/appbar/Appbar';
import Spinner from '../../shared/Spinner';
import LocationsGrid from './LocationsGrid';

class Home extends Component {
    state = {
        locations: null,
    }

    componentWillMount = async () => {
        const data = await search();
        this.setState({locations: data});
    }

    render() { 
        return (
            <Fragment>
                <Appbar />
                {this.state.locations ? <LocationsGrid locations={this.state.locations} /> : <Flex><Spinner /></Flex> }
            </Fragment>
        );
    }
}
 
export default Home;