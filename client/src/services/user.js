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
        const data = await axios.post('/api/user/avatar', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })

        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const updateBio = async (bio, token) => {
    try {
        const data = await axios.post('/api/user/bio', {bio: bio, token: token});

        return data;
    }
    catch (err) {
        console.log(err);
    }
}