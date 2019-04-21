import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormInput, Button} from "shards-react";
import { logIn } from '../../../services/auth';
import { saveState } from '../../../localStorage';

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (props.token) {
        props.history.goBack();
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();

        // Call login service
        const token = await logIn(username, password);

        // Save token to local storage and global state
        if (token && token.data) {
            saveState(token.data);
            props.logIn(token.data);
        }
    }

    const changeUsername = (e) => {
        setUsername(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} style={{width: "100%"}}>
            <FormInput placeholder="Username" value={username} onChange={changeUsername}/>
            <FormInput placeholder="Password" type="password" value={password} onChange={changePassword} />
            <Button block theme="primary" type="submit" style={{marginTop: "15px"}}>Log In</Button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (token) => {dispatch({
            type: "LOG_IN", 
            token,
        })}
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}
 
export default withRouter (connect (mapStateToProps, mapDispatchToProps) (LoginForm));