import React from 'react';
import { Text, Card, Image } from '../../../shared/styled-components';
import Divider from '@material-ui/core/Divider';

const Profile = (props) => {
    return (
        <Card style={{width: "280px"}}>
            <Text margin="10px" align="center">{props.user.username}</Text>
            <Image image="https://res.cloudinary.com/dmuuoo1bl/image/upload/v1555841951/avatars/default.png" />
            <Divider />
            <Text margin="10px" size=".95rem">
                Learn to work with anything that happens. Let's get crazy here. 
                We're just looking for a nice, basic, outside shape. We could care less what's going on inside here. 
                Don't just throw it up there and think that a cloud will appear. You have to make all these 
                big decisions when you have power. Blend color right here on the canvas. Take right off 
                today! Let's go on up here and let's get started. You just sort of have to make almighty 
                decisions. Pull from the outside in.
            </Text>
        </Card>
    )
}

export default Profile;