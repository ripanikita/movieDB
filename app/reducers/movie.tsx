let initialState = {movieInfo:{}, isLoading:false};

export function movieInfo(state = initialState, action) {
    switch (action.type) {

        case "MOVIE_IS_LOADING":
            return {...state, ...{isLoading:action.isLoading}};

        case "MOVIE_FETCH_DATA_SUCCESS":
            return {...state, ...{movieInfo:action.movieInfo}};

        default:
            return state;
    }
}