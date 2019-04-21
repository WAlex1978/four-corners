import React, { Component } from 'react';
import { LoginBackground } from './LoginBackground';
import { LoginCard } from './LoginCard';
import LoginForm from './LoginForm';

class Login extends Component {
    render() { 
        return (
            <LoginBackground>
                <LoginCard>
                    <LoginForm />
                </LoginCard>
            </LoginBackground>
        );
    }
}
 
export default Login;