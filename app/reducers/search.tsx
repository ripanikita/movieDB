let initialState = {searchStr:''};

export function searchStr(state = initialState, action) {
    switch (action.type) {

        case "SET_SEARCH_STR":
            return {...state, ...{searchStr: action.searchStr}};

        default:
            return state;
    }
}