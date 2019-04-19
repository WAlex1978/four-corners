import axios from 'axios';

export const addVisited = async (id, token) => {
    try {
        const data = await axios.post('/api/visited', {
            id: id,
            token: token,
        })

        console.log(data);
    }  
    catch (err) {
        console.log(err)
    }
}