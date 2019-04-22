import React from 'react';
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import { Text, Card, Image } from '../../../shared/styled-components';
import Divider from '@material-ui/core/Divider';
import Bio from './Bio';
import Options from './Options';

const Profile = (props) => {
    return (
        <Card width="250px">
            <Text margin="5px" align="center">{props.user.username}</Text>
            <Image image={props.user.avatar} height="220px" width="220px" />
            <Divider style={{marginTop: "10px", marginBottom: "10px"}} />
            <Bio bio={props.user.bio} />

            {props.token && props.user.username === decode(props.token).username ? <Options /> : null}
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect (mapStateToProps) (Profile);