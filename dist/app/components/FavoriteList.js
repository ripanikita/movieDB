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
var favorite_1 = require("../actions/favorite");
var Poster_1 = require("./Poster");
var MainMenu_1 = require("./MainMenu");
var FavoriteList = (function (_super) {
    __extends(FavoriteList, _super);
    function FavoriteList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FavoriteList.prototype.componentDidMount = function () {
        var favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites == null) {
            favorites = [];
        }
        this.props.fetchData(favorites);
    };
    ;
    FavoriteList.prototype.render = function () {
        var favorites = this.props.favorites.favorites;
        return (React.createElement("div", null,
            React.createElement(MainMenu_1.default, null),
            React.createElement("div", { className: "itemList" }, favorites && favorites.map(function (item) { return (React.createElement("div", { key: item.id, className: 'movieItem' },
                React.createElement(Poster_1.default, { id: item.id, poster_path: item.poster_path, title: item.title }))); }))));
    };
    return FavoriteList;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        favorites: state.favorites
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function (arr) { return dispatch(favorite_1.favoritesFetchData(arr)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
//# sourceMappingURL=FavoriteList.js.map