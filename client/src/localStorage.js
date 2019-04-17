export const loadState = () => {
    try {
        const token = localStorage.getItem('user');
        if (!token) {
            return undefined;
        }

        return ({
            token: token,
            locationId: 0,
        })
    }
    catch (err) {
        console.log(err);
        return undefined;
    }
}

export const saveState = (token) => {
    try {
        localStorage.setItem('user', token);
    }
    catch (err) {
        console.log(err);
    }
}