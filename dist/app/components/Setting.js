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
var react_redux_1 = require("react-redux");
var items_1 = require("../actions/items");
var Setting = (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Setting.prototype.componentDidMount = function () {
        this.props.fetchData();
    };
    Setting.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")));
    };
    return Setting;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        items: state.items,
        error: state.error,
        isLoading: state.isLoading
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function () { return dispatch(items_1.itemsFetchData()); },
        deleteData: function (id) { return dispatch(items_1.deleteData(id)); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Setting);
//# sourceMappingURL=Setting.js.map