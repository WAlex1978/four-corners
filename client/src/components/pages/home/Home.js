import React, { Component } from 'react';
import { search } from '../../../services/search';
import { Flex, Background, Card, Wrapper } from '../../shared/styled-components';
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
            <Background>
                <Appbar />
                {this.state.locations ? 
                    <Wrapper>
                        <Card>
                            <LocationsGrid locations={this.state.locations} />
                        </Card>
                    </Wrapper> : <Flex><Spinner /></Flex> }
            </Background>
        );
    }
}
 
export default Home;