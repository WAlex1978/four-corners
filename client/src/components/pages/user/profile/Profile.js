import React, { useState } from 'react';
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import { Text, Card, Image } from '../../../shared/styled-components';
import Divider from '@material-ui/core/Divider';
import Bio from './Bio';
import Options from './Options';

import FileUpload from './FileUpload';

import Dialog from '@material-ui/core/Dialog';

const Profile = (props) => {
    const [avatar, setAvatar] = useState(props.user.avatar);
    const [upload, setUpload] = useState(false);

    const uploadAvatar = () => {
        setUpload(!upload);
    }
    
    const changeAvatar = (avatar) => {
        setAvatar(avatar.url);
    }

    return (
        <Card width="250px">
            <Text margin="5px" align="center">{props.user.username}</Text>
            <Image image={avatar} height="220px" width="220px" />
            <Divider style={{marginTop: "10px", marginBottom: "10px"}} />
            <Bio bio={props.user.bio} />

            {props.token && props.user.username === decode(props.token).username ? 
                <Options upload={() => uploadAvatar()} /> 
            : null}

            {/* Upload Avatar */}
            <Dialog open={upload} onClose={() => uploadAvatar()}>
                <FileUpload close={() => uploadAvatar()} upload={changeAvatar}/>
            </Dialog>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect (mapStateToProps) (Profile);