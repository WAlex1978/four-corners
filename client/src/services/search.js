import axios from 'axios';

export const search = async (params) => {
    try {
        const data = await axios.get('/api/search', {
            params: {
                name: params,
            }
        })

        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

export const getLocation = async (id) => {
    try {
        const data = await axios.get('/api/search/location', {
            params: {
                id: id,
            }
        })

        return data;
    }
    catch (err) {
        console.log(err);
    }
}