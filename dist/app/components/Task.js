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
require("react-select/dist/react-select.css");
var react_select_1 = require("react-select");
var semantic_ui_react_1 = require("semantic-ui-react");
var items_1 = require("../actions/items");
var config_1 = require("../config");
var config_2 = require("../config");
var config_3 = require("../config");
var config_4 = require("../config");
var timeoutLength = 1500;
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: +_this.props.id,
            num: +_this.props.num,
            city: +_this.props.city,
            manager: +_this.props.manager,
            product: +_this.props.product,
            category: +_this.props.category,
            status: +_this.props.status,
            description: _this.props.description,
            pay: _this.props.pay,
            nowDate: _this.props.nowDate,
            saleDate: _this.props.saleDate,
            startDate: _this.props.startDate,
            endDate: _this.props.endDate,
            customer: _this.props.customer,
            isOpenPopup: false,
            isOpenConfirm: false
        };
        //-----ПОПАП
        _this.handleOpenPopup = function () {
            _this.setState({ isOpenPopup: true });
            _this.timeout = setTimeout(function () {
                _this.setState({ isOpenPopup: false });
            }, timeoutLength);
        };
        _this.handleClosePopup = function () {
            _this.setState({ isOpenPopup: false });
            clearTimeout(_this.timeout);
        };
        //---------------------------
        //-----МОДАЛЬНОЕ ОКНО
        _this.showConfirm = function () { return _this.setState({ isOpenConfirm: true }); };
        _this.handleCancelConfirm = function () { return _this.setState({ isOpenConfirm: false }); };
        //---------------------------
        _this.onStateChange = function (e) {
            var id = e.target.id;
            _this.setState((_a = {}, _a[id] = e.target.value, _a));
            var _a;
        };
        //-----РАБОТА СЕЛЕКТОВ
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
        _this.handleChangeStatus = function (selectedOption) {
            _this.setState({
                status: selectedOption.value
            });
            switch (selectedOption.value) {
                case '0':
                    _this.setState({
                        startDate: "",
                        endDate: ""
                    });
                    break;
                case '1':
                    _this.setState({
                        startDate: moment_1.default().format("DD.MM.YYYY"),
                    });
                    break;
                case '2':
                    _this.setState({
                        endDate: moment_1.default().format("DD.MM.YYYY"),
                    });
                    break;
            }
        };
        //---------------------------
        //-----ПОЛУЧЕНИЕ ДАННЫХ
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
        _this.getManager = function (input) {
            return fetch(config_4.getManagers)
                .then(function (response) {
                return response.json();
            }).then(function (json) {
                return { options: json };
            });
        };
        return _this;
    }
    //---------------------------
    Task.prototype.patchTask = function () {
        this.props.patchData(this.state.id.toString(), this.state.product.toString(), this.state.category.toString(), this.state.city.toString(), this.state.manager.toString(), this.state.status.toString(), this.state.description.toString(), this.state.pay.toString(), this.state.nowDate.toString(), this.state.saleDate.toString(), this.state.startDate.toString(), this.state.endDate.toString(), this.state.customer.toString());
    };
    ;
    Task.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "task" },
            React.createElement("input", { disabled: true, className: "num", type: "text", value: this.state.num, id: "num" }),
            React.createElement("div", null,
                React.createElement(react_select_1.Async, { id: "product", className: "product", name: "form-field-name", value: this.state.product, onChange: this.handleChangeProduct, loadOptions: this.getProduct, clearable: false, disabled: true }),
                React.createElement("input", { className: "customer", type: "text", value: this.state.customer, id: "customer", onChange: this.onStateChange })),
            React.createElement("div", { className: "centerBox" },
                React.createElement(react_select_1.Async, { id: "city", className: "city", name: "form-field-name", value: this.state.city, onChange: this.handleChangeCity, loadOptions: this.getCity, clearable: false }),
                React.createElement(react_select_1.Async, { id: "manager", className: "manager", name: "form-field-name", value: this.state.manager, onChange: this.handleChangeManager, loadOptions: this.getManager, clearable: false })),
            React.createElement("input", { onChange: this.onStateChange, className: "pay", type: "text", value: this.state.pay, id: "pay" }),
            React.createElement("input", { onChange: this.onStateChange, className: "date", type: "text", value: this.state.nowDate, id: "nowDate" }),
            React.createElement("input", { onChange: this.onStateChange, className: "date", type: "text", value: this.state.startDate, id: "startDate" }),
            React.createElement("input", { onChange: this.onStateChange, className: "date", type: "text", value: this.state.endDate, id: "endDate" }),
            React.createElement("input", { onChange: this.onStateChange, className: "date", type: "text", value: this.state.saleDate, id: "saleDate" }),
            React.createElement("textarea", { className: "description", value: this.state.description, id: "description", onChange: this.onStateChange }),
            React.createElement(react_select_1.Async, { id: "status", className: "status", name: "form-field-name", value: this.state.status, onChange: this.handleChangeStatus, loadOptions: this.getStatus, clearable: false }),
            React.createElement("div", { className: "rightBox" },
                React.createElement(semantic_ui_react_1.Popup, { trigger: React.createElement("a", { href: "#", title: "Сохранить" },
                        React.createElement("div", { className: "btn save", onClick: function () { return _this.patchTask(); } }, "\u2611")), content: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E", on: 'click', open: this.state.isOpenPopup, onClose: this.handleClosePopup, onOpen: this.handleOpenPopup, position: 'top right' }),
                React.createElement("a", { href: "#", title: "Удалить" },
                    React.createElement("div", { className: "btn delete", onClick: this.showConfirm }, "\u2612")),
                React.createElement(semantic_ui_react_1.Confirm, { open: this.state.isOpenConfirm, content: "Удалить?", cancelButton: "Отмена", confirmButton: "Удалить", onCancel: this.handleCancelConfirm, onConfirm: function () { return _this.props.deleteData(_this.state.id); } }))));
    };
    return Task;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        items: state.task,
        error: state.error
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        patchData: function (id, product, category, city, manager, status, description, pay, nowDate, saleDate, startDate, endDate, customer) { return dispatch(items_1.patchData(id, product, category, city, manager, status, description, pay, nowDate, saleDate, startDate, endDate, customer)); },
        deleteData: function (id) { return dispatch(items_1.deleteData(id)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Task);
//# sourceMappingURL=Task.js.map