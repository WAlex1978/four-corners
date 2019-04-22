import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Flex, Background } from '../../shared/styled-components';
import Spinner from '../../shared/Spinner';

class Logout extends Component {
    componentWillMount = () => {
        localStorage.removeItem('user');
        this.props.logOut();

        this.props.history.goBack();
    }

    render() { 
        return (
            <Background>
                <Flex><Spinner /></Flex>
            </Background>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {logOut: () => { dispatch({ type: "LOG_OUT" }) }}
}
 
export default withRouter (connect (null, mapDispatchToProps) (Logout) );