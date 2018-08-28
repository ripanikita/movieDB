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
var Poster_1 = require("./Poster");
var FavoriteList = (function (_super) {
    __extends(FavoriteList, _super);
    function FavoriteList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FavoriteList.prototype.componentDidMount = function () {
        this.props.fetchData();
    };
    FavoriteList.prototype.render = function () {
        var items = this.props.items;
        if (items.error == undefined) {
            return React.createElement("div", null, "\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442");
        }
        if (items.items.length == 0) {
            return React.createElement("div", null, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442");
        }
        if (items.isLoading) {
            return React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026");
        }
        return (React.createElement("div", null,
            React.createElement("ul", { className: "itemList" }, items && items.items && items.items.map(function (item) { return (React.createElement("div", { key: item.id, className: 'item' },
                React.createElement(Poster_1.default, { id: item.id, poster_path: item.poster_path, title: item.title }))); }))));
    };
    return FavoriteList;
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
        fetchData: function () { return dispatch(items_1.itemsFetchData()); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
//# sourceMappingURL=FavoriteList.js.map