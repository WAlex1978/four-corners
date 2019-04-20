import React from 'react';
import { Text, Wrapper } from '../../shared/styled-components';

const Body = (props) => {
    return (
        <Wrapper width="93%" style={{marginTop: "30px", marginBottom: "20px"}}>
            <Text bottom="20px">{props.location.name}</Text>
            <Text bottom="20px" size="1.rem">{props.location.desc}</Text>
            <Text bottom="50px" size="1.rem">Location: {props.location.location}</Text>
        </Wrapper>
    )
}

export default Body;