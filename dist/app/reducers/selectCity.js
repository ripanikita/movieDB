"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = { error: [], cities: [], isLoading: false };
function cities(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "CITIES_HAS_ERRORED":
            return __assign({}, state, { error: action.err });
        case "CITIES_IS_LOADING":
            return __assign({}, state, { isLoading: action.isLoading });
        case "CITIES_FETCH_DATA_SUCCESS":
            return __assign({}, state, { cities: action.cities });
        default:
            return state;
    }
}
exports.cities = cities;
//# sourceMappingURL=selectCity.js.map