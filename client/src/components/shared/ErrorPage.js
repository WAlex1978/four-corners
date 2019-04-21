import React from 'react';
import { Flex, Text } from './styled-components';

const ErrorPage = (props) => {
    return (
        <Flex direction="column">
            <Text>Error: {props.error}</Text>
        </Flex>
    )
}

export default ErrorPage;