import axios from 'axios';

export const getComments = async (id) => {
    try {
        const data = await axios.get('/api/comments', {
            params: {
                id: id,
            }
        })

        return data;
    }
    catch (err) {
        console.log(err)
    }
}

export const postComment = async (id, name, body) => {
    try {
        const data = await axios.post('/api/comments', {
            id: id,
            name: name,
            body: body,
        })

        console.log(data);
    }  
    catch (err) {
        console.log(err)
    }
}