"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function statusesHasErrored(err) {
    return {
        type: "STATUSES_HAS_ERRORED",
        error: err
    };
}
exports.statusesHasErrored = statusesHasErrored;
function statusesitemsIsLoading(bool) {
    return {
        type: "STATUSES_IS_LOADING",
        isLoading: bool
    };
}
exports.statusesitemsIsLoading = statusesitemsIsLoading;
function statusesFetchDataSuccess(statuses) {
    return {
        type: "STATUSES_FETCH_DATA_SUCCESS",
        statuses: statuses
    };
}
exports.statusesFetchDataSuccess = statusesFetchDataSuccess;
function statusesFetchData() {
    return function (dispatch) {
        fetch(config_1.getStatuses)
            .then(function (response) { return response.json(); })
            .then(function (statuses) { return dispatch(statusesFetchDataSuccess(statuses.statuses)); });
    };
}
exports.statusesFetchData = statusesFetchData;
//# sourceMappingURL=select.js.map