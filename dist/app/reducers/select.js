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
var initialState = { error: [], statuses: [], isLoading: false };
function statuses(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "STATUSES_HAS_ERRORED":
            return __assign({}, state, { error: action.err });
        case "STATUSES_IS_LOADING":
            return __assign({}, state, { isLoading: action.isLoading });
        case "STATUSES_FETCH_DATA_SUCCESS":
            return __assign({}, state, { statuses: action.statuses });
        default:
            return state;
    }
}
exports.statuses = statuses;
//# sourceMappingURL=select.js.map