import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { uploadAvatar } from '../../../../services/user';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FileUpload = (props) => {
    const [file, setFile] = useState(null);

    const onChange = (e) => {
        setFile(e.target.files[0]);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file);
        formData.append('token', props.token);

        const data = await uploadAvatar(formData);
        if (data && data.data) {
            props.upload(data.data);
            props.close();
        }
    }

    return (
        <Fragment>
            <DialogTitle>Upload Avatar</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Select new avatar image. Maximum 500 KB filesize.
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <form onSubmit={onSubmit}>
                    <input accept="image/*" id="text-button-file" type="file" style={{display: "none"}} onChange={onChange} />
                    <label htmlFor="text-button-file">
                        <Button theme="primary" component="span" size="small">
                            Upload
                        </Button>
                    </label>

                    <Button type="submit" size="small" disabled={file ? false : true}>Submit</Button>
                </form>
            </DialogActions>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect (mapStateToProps) (FileUpload);