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
var editing_1 = require("../actions/editing");
var InputEdit_1 = require("./InputEdit");
var AddContact = (function (_super) {
    __extends(AddContact, _super);
    function AddContact() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editing: false
        };
        _this.onClickEdit = function () {
            _this.setState({ editing: true });
        };
        _this.onClickAdd = function () {
            if (_this.refs.name.state.editState === "" || _this.refs.phone.state.editState === "" || _this.refs.name.state.editState === "") {
                alert("Заполните все поля!");
            }
            else {
                _this.props.addPerson(_this.props.id, _this.refs.name.state.editState, _this.refs.phone.state.editState, _this.refs.email.state.editState);
                _this.setState({ editing: false });
            }
        };
        _this.onClickBack = function () {
            _this.setState({ editing: false });
        };
        return _this;
    }
    AddContact.prototype.componentDidMount = function () {
        this.props.id;
    };
    AddContact.prototype.renderNormal = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: "but new", onClick: this.onClickEdit }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0435 \u043B\u0438\u0446\u043E"),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    AddContact.prototype.renderForm = function () {
        return (React.createElement("div", null,
            React.createElement("label", { className: "italic" },
                "\u0424.\u0418.\u041E.: ",
                React.createElement(InputEdit_1.default, { ref: "name", editValue: "" })),
            React.createElement("label", { className: "italic" },
                "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ",
                React.createElement(InputEdit_1.default, { ref: "phone", editValue: "" })),
            React.createElement("label", { className: "italic" },
                "E-mail: ",
                React.createElement(InputEdit_1.default, { ref: "email", editValue: "" })),
            React.createElement("div", { className: "but new", onClick: this.onClickAdd }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
            React.createElement("div", { className: "but new", onClick: this.onClickBack }, "\u041D\u0430\u0437\u0430\u0434"),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    AddContact.prototype.render = function () {
        if (this.state.editing) {
            return (this.renderForm());
        }
        else {
            return (this.renderNormal());
        }
    };
    return AddContact;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        id: ownProps.id
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addPerson: function (id, name, phone, email) { return dispatch(editing_1.addPerson(id, name, phone, email)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AddContact);
//# sourceMappingURL=AddContact.js.map