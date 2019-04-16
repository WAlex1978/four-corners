import axios from 'axios';

export const search = async (params) => {
    try {
        if (params === '') {
            params = null;
        }

        const data = await axios.get('/api/search', {
            params: {
                name: params
            }
        })

        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}