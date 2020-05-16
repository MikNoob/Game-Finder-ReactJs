let initialState = {
    searchQuery: ''
}

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SEARCH_QUERY':
            return {...state, searchQuery: action.searchQuery}

        case 'CLEAR_SEARCH_QUERY':
            return {...state, searchQuery: ''}

        default:
            return state
    }
}

export default reducer