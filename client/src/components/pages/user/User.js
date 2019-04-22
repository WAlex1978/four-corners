import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../../services/user';
import Appbar from '../../shared/appbar/Appbar';
import Profile from './profile/Profile';
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

    getUser = async () => {
        const user = await getUser(this.state.username);

        if (user && user.data) {
            this.setState({user: user.data.user, locations: user.data.locations});
        }
        else {
            this.setState({error: "user not found."});
        }
    }

    componentWillMount = () => {
        this.getUser();
    }

    componentWillReceiveProps = async () => {

        // Update username and wipe past location data
        await this.setState({
            username: this.props.history.location.pathname.slice(6),
            user: null, 
            location: [], 
            error: null
        });

        this.getUser();
    }

    render() { 
        return (
            <Fragment>
                <Background />
                <Appbar />
                {this.state.error ? <ErrorPage error={this.state.error} /> :
                <Fragment>
                    {this.state.locations && this.state.user ?
                    <Wrapper width="80%">
                        <Flex align="flex-start">
                            <Profile user={this.state.user} />
                            <div style={{flex: 1}}>
                                <Visited locations={this.state.locations} />
                            </div>
                        </Flex>
                    </Wrapper>
                : <Flex><Spinner /></Flex> }
                </Fragment> }
            </Fragment>
        );
    }
}
 
export default withRouter (User);