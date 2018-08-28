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
var items_1 = require("../actions/items");
var SelectStatus_1 = require("./SelectStatus");
var SelectProduct_1 = require("./SelectProduct");
var SelectCity_1 = require("./SelectCity");
var Add = (function (_super) {
    __extends(Add, _super);
    function Add() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            city: 1,
            product: 1,
            status: 0,
            description: "",
            pay: "",
            nowDate: moment_1.default().format("DD.MM.YYYY"),
            saleDate: "",
            startDate: "",
            endDate: ""
        };
        _this.handleOnChangeProduct = function (value) {
            _this.setState({
                product: value
            });
        };
        _this.handleOnChangeStatus = function (value) {
            _this.setState({
                status: value
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
        _this.handleChangeStart = function (date) {
            console.log(date.toDate());
            _this.setState({
                startDate: date.toDate()
            });
        };
        _this.handleChangeEnd = function (date) {
            _this.setState({
                endDate: date
            });
        };
        _this.handleChangeSale = function (date) {
            _this.setState({
                saleDate: date
            });
        };
        _this.handleChangeNow = function (date) {
            _this.setState({
                nowDate: date
            });
        };
        return _this;
    }
    Add.prototype.addTask = function () {
        this.props.addData(this.state.product, this.state.city, this.state.status, this.state.description, this.state.pay, this.state.nowDate.toString(), this.state.saleDate.toString(), this.state.startDate.toString(), this.state.endDate.toString());
    };
    ;
    Add.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "add" },
            React.createElement("span", { className: "inp" }, "\u0421\u0442\u0430\u0442\u0443\u0441: "),
            React.createElement(SelectStatus_1.default, { onChange: this.handleOnChangeStatus }),
            React.createElement("br", null),
            React.createElement("span", { className: "inp" }, "\u0418\u0437\u0434\u0435\u043B\u0438\u0435: "),
            React.createElement(SelectProduct_1.default, { onChange: this.handleOnChangeProduct }),
            React.createElement("br", null),
            React.createElement("span", { className: "inp" }, "\u041E\u0444\u0438\u0441: "),
            React.createElement(SelectCity_1.default, { onChange: this.handleOnChangeCity }),
            React.createElement("br", null),
            "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
            React.createElement(Datetime, { locale: "ru", closeOnSelect: true, timeFormat: false, dateFormat: 'DD.MM.YYYY', onChange: this.handleChangeNow, defaultValue: this.state.nowDate }),
            React.createElement("br", null),
            "\u041D\u0430\u0447\u0430\u043B\u043E",
            React.createElement(Datetime, { locale: "ru", closeOnSelect: true, timeFormat: false, dateFormat: 'DD.MM.YYYY', onChange: this.handleChangeStart }),
            React.createElement("br", null),
            "\u041A\u043E\u043D\u0435\u0446",
            React.createElement(Datetime, { locale: "ru", closeOnSelect: true, timeFormat: false, dateFormat: 'DD.MM.YYYY', onChange: this.handleChangeEnd }),
            React.createElement("br", null),
            "\u041E\u0442\u0433\u0440\u0443\u0437\u043A\u0430",
            React.createElement(Datetime, { locale: "ru", closeOnSelect: true, timeFormat: false, dateFormat: 'DD.MM.YYYY', onChange: this.handleChangeSale }),
            React.createElement("br", null),
            React.createElement("span", { className: "inp" }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: "),
            React.createElement("textarea", { className: "inp", value: this.state.description, id: "description", onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("span", { className: "inp" }, "\u041E\u043F\u043B\u0430\u0442\u0430: "),
            React.createElement("input", { className: "inp", type: "text", value: this.state.pay, id: "pay", onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("div", { className: "btn btnAdd", onClick: function () { return _this.addTask(); } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
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
        addData: function (product, city, status, description, pay, nowDate, saleDate, startDate, endDate) { return dispatch(items_1.addData(product, city, status, description, pay, nowDate, saleDate, startDate, endDate)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Add);
//# sourceMappingURL=_Add.js.map