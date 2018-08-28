"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var react_router_redux_1 = require("react-router-redux");
var App_1 = require("./components/App");
var PageMovie_1 = require("./components/PageMovie");
var FavoriteList_1 = require("./components/FavoriteList");
var configureStore_1 = require("./store/configureStore");
var store = configureStore_1.default();
var history = react_router_redux_1.syncHistoryWithStore(react_router_1.browserHistory, store);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_1.Router, { history: history },
        React.createElement(react_router_1.Route, { path: "/", component: App_1.default }),
        React.createElement(react_router_1.Route, { path: "/movie/:id", component: PageMovie_1.default }),
        React.createElement(react_router_1.Route, { path: "/favorite", component: FavoriteList_1.default }))), document.getElementById("app"));
//# sourceMappingURL=index.js.map