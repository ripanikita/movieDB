import {key,url } from "../config";
import {setSearchStr} from "./search";

export function itemsIsLoading(bool) {
    return {
        type: "ITEMS_IS_LOADING",
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: "ITEMS_FETCH_DATA_SUCCESS",
        items: items
    };
}

export function itemsFetchData(page, string) {
    return (dispatch) => {
        if(string) {
            dispatch(itemsIsLoading(true));
            dispatch(setSearchStr(string));
            fetch(url+"/search/movie?api_key="+key+"&language=ru&query="+string+"&page="+page, {
                method: "get"
            })
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }

                    dispatch(itemsIsLoading(false));

                    return response;
                })
                .then((response) => response.json())
                .then((items) => dispatch(itemsFetchDataSuccess(items)))
        }
        else {
            dispatch(itemsIsLoading(true));
            dispatch(setSearchStr(string));
            fetch(url+"/movie/popular?api_key="+key+"&language=ru&page="+page, {
                method: "get"
            })
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }

                    dispatch(itemsIsLoading(false));

                    return response;
                })
                .then((response) => response.json())
                .then((items) => dispatch(itemsFetchDataSuccess(items)))
        }
    };
}