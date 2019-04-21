import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { getVisited } from '../../../services/visited';
import Appbar from '../../shared/appbar/Appbar';
import Visited from './Visited';
import ErrorPage from '../../shared/ErrorPage';
import { Background } from '../../shared/styled-components';

class User extends Component {
    state = {
        user: this.props.match.params.user,
        locations: [],
    }

    getVisited = async () => {
        const locations = await getVisited(this.state.user);
        
        if (!locations) {
            this.setState({error: "user not found."})
        }

        this.setState({locations: locations});
    }

    componentWillMount = () => {
        this.getVisited();
    }

    componentWillReceiveProps = async () => {

        // Update username and wipe past location data
        await this.setState({user: this.props.history.location.username, location: [], error: null});
        this.getVisited();
    }

    render() { 
        return (
            <Fragment>
                <Appbar />
                <Background />
                {this.state.error ? <ErrorPage error={this.state.error} /> :
                    <Visited locations={this.state.locations} />}
            </Fragment>
        );
    }
}
 
export default withRouter (User);