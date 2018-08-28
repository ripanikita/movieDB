"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function itemsHasErrored(err) {
    return {
        type: "ITEMS_HAS_ERRORED",
        error: err
    };
}
exports.itemsHasErrored = itemsHasErrored;
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
function itemsFetchData() {
    return function (dispatch) {
        dispatch(itemsIsLoading(true));
        fetch(config_1.url + "/movie/popular?api_key=" + config_1.key + "&language=ru&page=1", {
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
            .then(function (items) { return dispatch(itemsFetchDataSuccess(items.results)); })
            .catch(function (items) { return dispatch(itemsHasErrored(items.error)); });
    };
}
exports.itemsFetchData = itemsFetchData;
//# sourceMappingURL=items.js.map