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