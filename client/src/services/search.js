import axios from 'axios';

export const search = async (params) => {
    try {
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