import axios from 'axios';
import { saveState } from '../localStorage';

export const logIn = async (username, password) => {
    try {
        const data = await axios.post('/api/auth/login', {
            username: username,
            password: password,
        })

        saveState(data.data);
    }  
    catch (err) {
        console.log(err)
    }
}