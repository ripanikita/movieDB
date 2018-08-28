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
var movie_1 = require("../actions/movie");
var semantic_ui_react_1 = require("semantic-ui-react");
var MainMenu_1 = require("./MainMenu");
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
        this.props.fetchData(this.props.id);
    };
    Poster.prototype.render = function () {
        var _this = this;
        var movieInfo = this.props.movieInfo.movieInfo;
        var checked = this.state.favorite;
        if (this.props.isLoading) {
            return React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026");
        }
        return (React.createElement("div", null,
            React.createElement(MainMenu_1.default, null),
            React.createElement("div", { className: "movieWrap" },
                React.createElement("div", { className: "bigPoster" },
                    React.createElement("img", { src: "https://image.tmdb.org/t/p/w500" + movieInfo.poster_path })),
                React.createElement("div", { className: "movieInfo" },
                    React.createElement("h1", null, movieInfo.title),
                    " ",
                    React.createElement(semantic_ui_react_1.Button, { icon: 'favorite', color: (checked ? 'green' : 'grey'), circular: true, onClick: function () { return _this.handleFavorite(); } }),
                    React.createElement("p", null,
                        React.createElement("i", { className: "slogan" }, movieInfo.tagline)),
                    React.createElement("p", { className: "original" },
                        "\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ",
                        movieInfo.original_title),
                    React.createElement("p", { className: "date" },
                        "\u0414\u0430\u0442\u0430 \u0432\u044B\u0445\u043E\u0434\u0430: ",
                        movieInfo.release_date),
                    React.createElement("p", { className: "runtime" },
                        "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C: ",
                        movieInfo.runtime,
                        " \u043C\u0438\u043D."),
                    React.createElement("p", { className: "rating" },
                        "\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ",
                        movieInfo.vote_average * 10,
                        "%"),
                    React.createElement("p", { className: "budget" },
                        "\u0411\u044E\u0434\u0436\u0435\u0442: ",
                        movieInfo.budget,
                        "$"),
                    React.createElement("h2", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                    React.createElement("p", { className: "description" }, movieInfo.overview)))));
    };
    return Poster;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        movieInfo: state.movieInfo,
        isLoading: state.isLoading,
        id: ownProps.params.id
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function (id) { return dispatch(movie_1.movieFetchData(id)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Poster);
//# sourceMappingURL=PageMovie.js.map