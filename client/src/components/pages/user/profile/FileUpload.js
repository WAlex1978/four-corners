import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { uploadAvatar } from '../../../../services/user';

const FileUpload = (props) => {
    const [file, setFile] = useState('');

    const onChange = (e) => {
        setFile(e.target.files[0]);
    }
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file);
        formData.append('token', props.token);

        await uploadAvatar(formData);
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input type='file' id='file' onChange={onChange} />
                <input type='submit' />
            </form>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect (mapStateToProps) (FileUpload);