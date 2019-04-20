import React, { Component } from 'react';
import { search } from '../../../services/search';
import Appbar from '../../shared/appbar/Appbar';
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
            <div>
                <Appbar />
                {this.state.locations ? <LocationsGrid locations={this.state.locations} /> : null }
            </div>
        );
    }
}
 
export default Home;