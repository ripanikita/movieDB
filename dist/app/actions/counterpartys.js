"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function counterpartyHasErrored(err) {
    return {
        type: "COUNTERPARTY_HAS_ERRORED",
        err: err
    };
}
exports.counterpartyHasErrored = counterpartyHasErrored;
function counterpartyIsLoading(bool) {
    return {
        type: "COUNTERPARTY_IS_LOADING",
        isLoading: bool
    };
}
exports.counterpartyIsLoading = counterpartyIsLoading;
function counterpartyFetchDataSuccess(counterpartys) {
    return {
        type: "COUNTERPARTY_FETCH_DATA_SUCCESS",
        counterpartys: counterpartys
    };
}
exports.counterpartyFetchDataSuccess = counterpartyFetchDataSuccess;
function counterpartyFetchData(id) {
    return function (dispatch) {
        dispatch(counterpartyIsLoading(true));
        fetch("http://localhost:8888/counterparties/getConterparty/" + id)
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(counterpartyIsLoading(false));
            return response;
        })
            .then(function (response) { return response.json(); })
            .then(function (counterpartys) { return dispatch(counterpartyFetchDataSuccess(counterpartys.value)); })
            .catch(function (counterpartys) { return dispatch(counterpartyHasErrored(counterpartys.error)); });
    };
}
exports.counterpartyFetchData = counterpartyFetchData;
//# sourceMappingURL=counterpartys.js.map