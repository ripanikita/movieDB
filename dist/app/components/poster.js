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
var Poster = (function (_super) {
    __extends(Poster, _super);
    function Poster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            favorite: false
        };
        return _this;
    }
    Poster.prototype.render = function () {
        return (React.createElement("div", { className: "posterWrap" },
            React.createElement("img", { className: "posterImg", src: "https://image.tmdb.org/t/p/w300/" + this.props.poster_path }),
            React.createElement("div", { className: "posterTitle" }, this.props.title),
            React.createElement(semantic_ui_react_1.Icon, { className: "posterFav", color: 'grey', name: 'favorite' })));
    };
    return Poster;
}(React.Component));
exports.default = Poster;
//# sourceMappingURL=poster.js.map