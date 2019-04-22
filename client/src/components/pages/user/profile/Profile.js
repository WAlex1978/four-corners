import React from 'react';
import { Text, Card, Image } from '../../../shared/styled-components';
import Divider from '@material-ui/core/Divider';
import Bio from './Bio';

const Profile = (props) => {
    return (
        <Card width="250px">
            <Text margin="5px" align="center">{props.user.username}</Text>
            <Image image={props.user.avatar} />
            <Divider style={{marginTop: "10px", marginBottom: "10px"}} />
            <Bio bio={props.user.bio} />
        </Card>
    )
}

export default Profile;