import React from 'react';
import { Text } from '../../../shared/styled-components';

const Bio = (props) => {
    if (props.bio) {
        return (
            <Text margin="10px" size=".95rem">{props.bio}</Text>
        )
    }

    return (
        <Text margin="10px" size=".95rem" align="center">User has no biography set yet</Text>
    )
}

export default Bio;