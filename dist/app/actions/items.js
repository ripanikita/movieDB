"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var search_1 = require("./search");
function itemsIsLoading(bool) {
    return {
        type: "ITEMS_IS_LOADING",
        isLoading: bool
    };
}
exports.itemsIsLoading = itemsIsLoading;
function itemsFetchDataSuccess(items) {
    return {
        type: "ITEMS_FETCH_DATA_SUCCESS",
        items: items
    };
}
exports.itemsFetchDataSuccess = itemsFetchDataSuccess;
function itemsFetchData(page, string) {
    return function (dispatch) {
        if (string) {
            dispatch(itemsIsLoading(true));
            dispatch(search_1.setSearchStr(string));
            fetch(config_1.url + "/search/movie?api_key=" + config_1.key + "&language=ru&query=" + string + "&page=" + page, {
                method: "get"
            })
                .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
                .then(function (response) { return response.json(); })
                .then(function (items) { return dispatch(itemsFetchDataSuccess(items)); });
        }
        else {
            dispatch(itemsIsLoading(true));
            dispatch(search_1.setSearchStr(string));
            fetch(config_1.url + "/movie/popular?api_key=" + config_1.key + "&language=ru&page=" + page, {
                method: "get"
            })
                .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
                .then(function (response) { return response.json(); })
                .then(function (items) { return dispatch(itemsFetchDataSuccess(items)); });
        }
    };
}
exports.itemsFetchData = itemsFetchData;
//# sourceMappingURL=items.js.map