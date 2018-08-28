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
require("react-select/dist/react-select.css");
var react_select_1 = require("react-select");
var config_1 = require("../config");
var config_2 = require("../config");
var config_3 = require("../config");
var SelectWrap = (function (_super) {
    __extends(SelectWrap, _super);
    function SelectWrap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            product: 0,
            city: 1,
            status: 0,
        };
        _this.handleChangeProduct = function (selectedOption) {
            console.log("product: " + selectedOption.value);
            _this.setState({
                product: selectedOption.value
            });
        };
        _this.handleChangeCity = function (selectedOption) {
            console.log("city: " + selectedOption.value);
            _this.setState({
                city: selectedOption.value
            });
        };
        _this.handleChangeStatus = function (selectedOption) {
            console.log("status: " + selectedOption.value);
            _this.setState({
                status: selectedOption.value
            });
        };
        _this.getProduct = function (input) {
            return fetch(config_1.getProducts)
                .then(function (response) {
                return response.json();
            }).then(function (json) {
                return { options: json };
            });
        };
        _this.getCity = function (input) {
            return fetch(config_3.getCities)
                .then(function (response) {
                return response.json();
            }).then(function (json) {
                return { options: json };
            });
        };
        _this.getStatus = function (input) {
            return fetch(config_2.getStatuses)
                .then(function (response) {
                return response.json();
            }).then(function (json) {
                return { options: json };
            });
        };
        return _this;
    }
    SelectWrap.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_select_1.Async, { id: "product", name: "form-field-name", value: this.state.product, onChange: this.handleChangeProduct, loadOptions: this.getProduct }),
            React.createElement("br", null),
            React.createElement(react_select_1.Async, { id: "city", name: "form-field-name", value: this.state.city, onChange: this.handleChangeCity, loadOptions: this.getCity }),
            React.createElement("br", null),
            React.createElement(react_select_1.Async, { id: "status", name: "form-field-name", value: this.state.status, onChange: this.handleChangeStatus, loadOptions: this.getStatus })));
    };
    return SelectWrap;
}(React.Component));
exports.default = SelectWrap;
//# sourceMappingURL=Select.js.map