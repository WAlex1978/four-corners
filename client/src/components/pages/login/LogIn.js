import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginBackground } from './LoginBackground';
import { LoginCard } from './LoginCard';
import LoginForm from './LoginForm';

class Login extends Component {
    render() { 
        return (
            <LoginBackground>
                <LoginCard>
                    {!this.props.token ? <LoginForm /> : <Redirect to='/' />}
                </LoginCard>
            </LoginBackground>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}
 
export default connect (mapStateToProps) (Login);