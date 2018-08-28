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
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_1 = require("react-router");
var Poster = (function (_super) {
    __extends(Poster, _super);
    function Poster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            favorite: false
        };
        _this.isFavorite = function () {
            var favorites = JSON.parse(localStorage.getItem("favorites"));
            if (favorites == null) {
                favorites = [];
            }
            if (favorites.indexOf(+_this.props.id) != -1) {
                return true;
            }
            else {
                return false;
            }
        };
        _this.handleFavorite = function () {
            _this.setState({ favorite: !(_this.state.favorite) });
            var favorites = JSON.parse(localStorage.getItem("favorites"));
            if (favorites == null) {
                favorites = [];
            }
            if (_this.isFavorite()) {
                favorites.splice(favorites.indexOf(+_this.props.id), 1);
            }
            else {
                favorites.push(+_this.props.id);
            }
            var serialObj = JSON.stringify(favorites);
            localStorage.setItem("favorites", serialObj);
        };
        return _this;
    }
    Poster.prototype.componentDidMount = function () {
        this.setState({ favorite: this.isFavorite() });
    };
    ;
    Poster.prototype.render = function () {
        var _this = this;
        var checked = this.state.favorite;
        return (React.createElement("div", { className: "posterWrap" },
            React.createElement(react_router_1.Link, { to: "/movie/" + this.props.id, className: "settingLink" },
                React.createElement("img", { className: "posterImg", src: "https://image.tmdb.org/t/p/w300/" + this.props.poster_path })),
            React.createElement("div", { className: "posterInfo" },
                React.createElement("div", { className: "posterTitle" }, this.props.title),
                React.createElement("div", { className: "posterFav" },
                    React.createElement(semantic_ui_react_1.Button, { icon: 'favorite', color: (checked ? 'green' : 'grey'), circular: true, onClick: function () { return _this.handleFavorite(); } })))));
    };
    return Poster;
}(React.Component));
exports.default = Poster;
//# sourceMappingURL=Poster.js.map