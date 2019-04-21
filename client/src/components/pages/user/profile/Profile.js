import React from 'react';
import { Text, Card, Image } from '../../../shared/styled-components';
import Divider from '@material-ui/core/Divider';
import Bio from './Bio';

const Profile = (props) => {
    return (
        <Card style={{width: "280px"}}>
            <Text margin="10px" align="center">{props.user.username}</Text>
            <Image image="https://res.cloudinary.com/dmuuoo1bl/image/upload/v1555841951/avatars/default.png" />
            <Divider />
            <Bio bio={props.user.bio} />
        </Card>
    )
}

export default Profile;