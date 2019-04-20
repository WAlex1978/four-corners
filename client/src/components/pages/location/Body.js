import React from 'react';
import { Text, Wrapper } from '../../shared/styled-components';

const Body = (props) => {
    return (
        <Wrapper width="93%" style={{marginTop: "20px", marginBottom: "20px"}}>
            <Text bottom="2px">{props.location.name}</Text>
            <Text bottom="20px" size=".95rem">Location: {props.location.location}</Text>
            {props.location.desc.map((desc, i) => (
                <Text key={i} bottom="20px" size=".95rem">{desc}</Text>
            ))}
            <Text bottom="35px" size=".95rem">
                <a href={props.location.ref} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                    {props.location.ref}
                </a>
            </Text>
        </Wrapper>
    )
}

export default Body;