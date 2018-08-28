"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function citiesHasErrored(err) {
    return {
        type: "CITIES_HAS_ERRORED",
        error: err
    };
}
exports.citiesHasErrored = citiesHasErrored;
function citiesitemsIsLoading(bool) {
    return {
        type: "CITIES_IS_LOADING",
        isLoading: bool
    };
}
exports.citiesitemsIsLoading = citiesitemsIsLoading;
function citiesFetchDataSuccess(cities) {
    return {
        type: "CITIES_FETCH_DATA_SUCCESS",
        cities: cities
    };
}
exports.citiesFetchDataSuccess = citiesFetchDataSuccess;
function citiesFetchData() {
    return function (dispatch) {
        fetch(config_1.getCities)
            .then(function (response) { return response.json(); })
            .then(function (cities) { return dispatch(citiesFetchDataSuccess(cities.cities)); });
    };
}
exports.citiesFetchData = citiesFetchData;
//# sourceMappingURL=selectCity.js.map