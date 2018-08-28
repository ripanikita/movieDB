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
var Exam = (function (_super) {
    __extends(Exam, _super);
    function Exam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            defaultSelect: _this.props.defaultSelect
        };
        return _this;
    }
    Exam.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, this.state.defaultSelect)));
    };
    return Exam;
}(React.Component));
exports.default = Exam;
//# sourceMappingURL=Exam.js.map