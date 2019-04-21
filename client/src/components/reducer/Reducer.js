const initState = {
    token: null,
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                token: action.token,
            }

        case 'LOG_OUT':
            return {
                token: null,
            }

        default:
            return state;
    }
}

export default Reducer;