"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var react_router_redux_1 = require("react-router-redux");
var items_1 = require("./items");
var movie_1 = require("./movie");
var search_1 = require("./search");
var favorite_1 = require("./favorite");
exports.default = redux_1.combineReducers({
    routing: react_router_redux_1.routerReducer,
    items: items_1.items, movieInfo: movie_1.movieInfo, searchStr: search_1.searchStr, favorites: favorite_1.favorites
});
//# sourceMappingURL=index.js.map