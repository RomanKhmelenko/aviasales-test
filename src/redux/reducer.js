const defaultState = {
    tickets: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ALL_TICKETS":
            return {...state, tickets: action.payload.tickets}
        default:
            return state
    }
}

export default reducer;