import React, { Fragment } from 'react';
import { Text } from '../../../shared/styled-components';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from '@material-ui/core/Divider';

const Options = (props) => {
    return (
        <Fragment>
            <Divider />
            <Text margin="10px" size=".9rem">
                <FontAwesomeIcon icon={faCog} style={{marginRight: "10px"}} />
                Update Biography
            </Text>
            <Text margin="10px" size=".9rem" onClick={() => props.upload()}>
                <FontAwesomeIcon icon={faCog} style={{marginRight: "10px"}} />
                Update Avatar
            </Text>
        </Fragment>
    )
}

export default Options;