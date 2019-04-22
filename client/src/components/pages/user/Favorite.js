import React from 'react';
import styled from 'styled-components';
import { Card, Text } from '../../shared/styled-components';

const Image = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    background-position: center;
    height: 400px;
    margin: 0 10px 10px 10px;
`

const Favorite = (props) => {
    const getFavorite = () => {
        for (let i = 0; i < props.locations.length; i++) {
            if (props.locations[i].id === props.user.favorite) {
                return props.locations[i];
            }
        }
    }

    const favorite = getFavorite();

    return (
        <Card>
            <Text align="center" margin="5px">Favorite Location</Text>
            {props.user.favorite ? 
            <Image image={favorite.image} /> : 
            <Text align="center" margin="20px" size=".95rem">User has not set a favorite location</Text>}
        </Card>
    )
}

export default Favorite