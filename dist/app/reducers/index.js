"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var react_router_redux_1 = require("react-router-redux");
var items_1 = require("./items");
var task_1 = require("./task");
exports.default = redux_1.combineReducers({
    routing: react_router_redux_1.routerReducer,
    items: items_1.items,
    task: task_1.task
});
//# sourceMappingURL=index.js.map