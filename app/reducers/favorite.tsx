let initialState = {favorites:[]};

export function favorites(state = initialState, action) {
    switch (action.type) {

        case "FAVORITES_FETCH_DATA_SUCCESS":
            return {...state, ...{favorites:action.favorites}};

        default:
            return state;
    }
}