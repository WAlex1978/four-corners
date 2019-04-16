import axios from 'axios';

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