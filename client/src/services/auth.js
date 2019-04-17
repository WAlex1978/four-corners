import axios from 'axios';

export const logIn = async (username, password) => {
    try {
        const data = await axios.post('/api/auth/login', {
            username: username,
            password: password,
        })

        return data;
    }  
    catch (err) {
        console.log(err)
    }
}