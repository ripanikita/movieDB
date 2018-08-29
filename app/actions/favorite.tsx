import {key,url } from "../config";

export function favoritesFetchDataSuccess(favorites) {
    return {
        type: "FAVORITES_FETCH_DATA_SUCCESS",
        favorites: favorites
    };
}
export function favoritesFetchData(arr) {
    return (dispatch) => {
        let chain = Promise.resolve<void>();
        let results = [];
        arr.forEach(function(id) {
            chain = chain
                .then(() => fetch(url+"/movie/"+id+"?api_key="+key+"&language=ru", {
                    method: "get"
                }))
                .then((response) => response.json())
                .then((result) => {
                    results.push(result);
                });
        });
        chain.then(() => dispatch(favoritesFetchDataSuccess(results)))
    };
}