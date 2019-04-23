import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { search } from '../../../services/search';
import { Flex } from '../../shared/styled-components';
import Appbar from '../../shared/appbar/Appbar';
import Spinner from '../../shared/Spinner';
import LocationsGrid from './LocationsGrid';

class Home extends Component {
    state = {
        locations: null,
    }

    getLocations = async () => {
        const data = await search();
        this.setState({locations: data});
    }

    componentWillMount = async () => {
        if (!this.props.history.location.locations) {
            this.getLocations();
        }
        else {
            await this.setState({locations: {data: this.props.history.location.locations}});
        }
    }

    componentWillReceiveProps = async () => {
        if (this.props.history.location.locations) {
            await this.setState({locations: {data: this.props.history.location.locations}});
        }
        else {
            this.getLocations();
        }
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
 
export default withRouter (Home);