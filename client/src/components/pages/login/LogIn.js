import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { Flex } from '../../shared/styled-components';

class Login extends Component {
    render() { 
        return (
            <Flex>
                {!this.props.token ? <LoginForm /> : <Redirect to='/' />}
            </Flex>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}
 
export default connect (mapStateToProps) (Login);