import {key,url } from "../config";

export function movieIsLoading(bool) {
    return {
        type: "MOVIE_IS_LOADING",
        isLoading: bool
    };
}

export function movieFetchDataSuccess(movieInfo) {
    return {
        type: "MOVIE_FETCH_DATA_SUCCESS",
        movieInfo: movieInfo
    };
}

export function movieFetchData(id) {
    return (dispatch) => {
        dispatch(movieIsLoading(true));
        fetch(url+"/movie/"+id+"?api_key="+key+"&language=ru", {
            method: "get"
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(movieIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((movieInfo) => dispatch(movieFetchDataSuccess(movieInfo)))
    };
}