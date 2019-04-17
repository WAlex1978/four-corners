const initState = {
    token: null,
    locationId: 0,
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                ...state,
                token: action.token,
            }

        default:
            return state;
    }
}

export default Reducer;