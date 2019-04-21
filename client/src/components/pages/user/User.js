import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../../services/user';
import Appbar from '../../shared/appbar/Appbar';
import Visited from './Visited';
import ErrorPage from '../../shared/ErrorPage';
import { Flex, Background, Wrapper } from '../../shared/styled-components';
import Spinner from '../../shared/Spinner';

class User extends Component {
    state = {
        username: this.props.match.params.user,
        user: null,
        locations: [],
    }

    getVisited = async () => {
        const user = await getUser(this.state.username);

        if (user && user.data) {
            this.setState({user: user.data.user, locations: user.data.locations});
        }
        else {
            this.setState({error: "user not found."});
        }
    }

    componentWillMount = () => {
        this.getVisited();
    }

    componentWillReceiveProps = async () => {

        // Update username and wipe past location data
        await this.setState({
            username: this.props.history.location.username, 
            user: null, 
            location: [], 
            error: null
        });

        this.getVisited();
    }

    render() { 
        return (
            <Fragment>
                <Appbar />
                <Background />
                {this.state.error ? <ErrorPage error={this.state.error} /> :
                <Fragment>
                    {this.state.locations && this.state.user ?
                    <Wrapper>
                        <Visited locations={this.state.locations} />
                    </Wrapper>
                : <Flex><Spinner /></Flex> }
                </Fragment> }
            </Fragment>
        );
    }
}
 
export default withRouter (User);