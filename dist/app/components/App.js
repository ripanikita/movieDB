"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
require("./App.less");
var MainMenu_1 = require("./MainMenu");
var List_1 = require("./List");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "wrap" },
            React.createElement(MainMenu_1.default, null),
            React.createElement(List_1.default, null),
            React.createElement(react_router_1.Link, { to: "/setting", className: "settingLink" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map