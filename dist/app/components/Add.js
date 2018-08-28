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
var moment_1 = require("moment/src/moment");
var Datetime = require("react-datetime");
require("react-datetime/css/react-datetime.css");
var react_select_1 = require("react-select");
require("react-select/dist/react-select.css");
var items_1 = require("../actions/items");
var config_1 = require("../config");
var config_2 = require("../config");
var config_3 = require("../config");
var semantic_ui_react_1 = require("semantic-ui-react");
var Add = (function (_super) {
    __extends(Add, _super);
    function Add() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            city: 1,
            manager: 1,
            product: 0,
            status: 0,
            description: "",
            pay: "",
            nowDate: moment_1.default().format("DD.MM.YYYY"),
            saleDate: "",
            startDate: "",
            endDate: "",
            customer: ""
        };
        _this.handleOnChangeProduct = function (value) {
            _this.setState({
                product: value
            });
        };
        _this.handleOnChangeCity = function (value) {
            _this.setState({
                city: value
            });
        };
        _this.onStateChange = function (e) {
            var id = e.target.id;
            _this.setState((_a = {}, _a[id] = e.target.value, _a));
            var _a;
        };
        _this.handleChangeSale = function (date) {
            _this.setState({
                saleDate: date.format("DD.MM.YYYY")
            });
        };
        _this.handleChangeProduct = function (selectedOption) {
            _this.setState({
                product: selectedOption.value
            });
        };
        _this.handleChangeCity = function (selectedOption) {
            _this.setState({
                city: selectedOption.value
            });
        };
        _this.handleChangeManager = function (selectedOption) {
            _this.setState({
                manager: selectedOption.value
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
            return fetch(config_2.getCities)
                .then(function (response) {
                return response.json();
            }).then(function (json) {
                return { options: json };
            });
        };
        _this.getManager = function (input) {
            return fetch(config_3.getManagers)
                .then(function (response) {
                return response.json();
            }).then(function (json) {
                return { options: json };
            });
        };
        return _this;
    }
    Add.prototype.addTask = function () {
        this.props.addData(this.state.product, this.state.city, this.state.manager, this.state.status, this.state.description, this.state.pay + "%", this.state.nowDate.toString(), this.state.saleDate.toString(), this.state.startDate.toString(), this.state.endDate.toString(), this.state.customer.toString());
        this.setState({
            city: 1,
            manager: 1,
            product: 0,
            status: 0,
            description: "",
            pay: "",
            saleDate: "",
            startDate: "",
            endDate: "",
            customer: ""
        });
    };
    ;
    Add.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "add" },
            React.createElement("div", { className: "column" },
                React.createElement("p", null, "\u0418\u0437\u0434\u0435\u043B\u0438\u0435"),
                React.createElement(react_select_1.Async, { className: "product", id: "product", name: "form-field-name", value: this.state.product, onChange: this.handleChangeProduct, loadOptions: this.getProduct, clearable: false })),
            React.createElement("div", { className: "column" },
                React.createElement("p", null, "\u041E\u0444\u0438\u0441"),
                React.createElement(react_select_1.Async, { id: "city", name: "form-field-name", value: this.state.city, onChange: this.handleChangeCity, loadOptions: this.getCity, clearable: false })),
            React.createElement("div", { className: "column" },
                React.createElement("p", null, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"),
                React.createElement(react_select_1.Async, { id: "manager", name: "form-field-name", value: this.state.manager, onChange: this.handleChangeManager, loadOptions: this.getManager, clearable: false })),
            React.createElement("div", { className: "column" },
                React.createElement("p", null, "\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438"),
                React.createElement(Datetime, { locale: "ru", closeOnSelect: true, timeFormat: false, dateFormat: 'DD.MM.YYYY', onChange: this.handleChangeSale })),
            React.createElement("div", { className: "column" },
                React.createElement("p", null, "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A"),
                React.createElement("input", { className: "customer", type: "text", value: this.state.customer, id: "customer", onChange: this.onStateChange })),
            React.createElement("div", { className: "column" },
                React.createElement("p", null, "\u041E\u043F\u043B\u0430\u0442\u0430"),
                React.createElement("input", { className: "pay", type: "text", value: this.state.pay, id: "pay", onChange: this.onStateChange })),
            React.createElement("div", { className: "column" },
                React.createElement("p", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                React.createElement("textarea", { className: "description", value: this.state.description, id: "description", onChange: this.onStateChange })),
            React.createElement(semantic_ui_react_1.Button, { circular: true, icon: 'add', className: "btnAdd", color: 'blue', onClick: function () { return _this.addTask(); } })));
    };
    return Add;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        items: state.task,
        error: state.error
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addData: function (product, city, manager, status, description, pay, nowDate, saleDate, startDate, endDate, customer) { return dispatch(items_1.addData(product, city, manager, status, description, pay, nowDate, saleDate, startDate, endDate, customer)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Add);
//# sourceMappingURL=Add.js.map