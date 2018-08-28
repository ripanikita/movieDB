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
var InputEdit = (function (_super) {
    __extends(InputEdit, _super);
    function InputEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editState: _this.props.editValue
        };
        _this.setEditValue = function () {
            var editState = _this.state.editState;
            _this.setState({ editState: editState });
        };
        _this.onClickInput = function (event) {
            var editState = _this.state.editState;
            editState = event.target.value;
            _this.setState({ editState: editState });
        };
        return _this;
    }
    InputEdit.prototype.componentDidMount = function () {
        this.props.editValue;
        this.setEditValue();
    };
    InputEdit.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", onChange: this.onClickInput, defaultValue: this.state.editState })));
    };
    return InputEdit;
}(React.Component));
exports.default = InputEdit;
//# sourceMappingURL=InputEdit.js.map