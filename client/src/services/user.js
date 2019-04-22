import axios from 'axios';

export const getUser = async (username) => {
    try {
        const data = await axios.get('/api/user', {
            params: {
                username: username,
            }
        })

        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const uploadAvatar = async (formData) => {
    try {
        console.log(formData)
        const data = await axios.post('/api/user/avatar', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })

        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}