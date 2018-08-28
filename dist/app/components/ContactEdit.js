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
var InputEdit_1 = require("./InputEdit");
var react_redux_1 = require("react-redux");
var editing_1 = require("../actions/editing");
var ContactEdit = (function (_super) {
    __extends(ContactEdit, _super);
    function ContactEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editing: false,
            contactName: _this.props.contact.name,
            contactPhone: _this.props.contact.phone,
            contactEmail: _this.props.contact.email
        };
        _this.onClickEdit = function () {
            _this.setState({ editing: true });
        };
        _this.onClickSave = function (e) {
            _this.props.changePerson(e, _this.refs.name.state.editState, _this.refs.phone.state.editState, _this.refs.email.state.editState);
            _this.setState({ editing: false,
                contactName: _this.refs.name.state.editState,
                contactPhone: _this.refs.phone.state.editState,
                contactEmail: _this.refs.email.state.editState
            });
        };
        _this.onClickDelete = function (e) {
            _this.props.deletePerson(_this.props.id, e);
        };
        return _this;
    }
    ContactEdit.prototype.componentDidMount = function () {
        this.props.contact;
    };
    ContactEdit.prototype.renderNormal = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("label", { className: "italic" }, this.state.contactName),
            React.createElement("br", null),
            React.createElement("div", { className: "but new", onClick: this.onClickEdit }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
            React.createElement("div", { className: "but delete", onClick: function () { _this.onClickDelete(_this.props.contact.id); } }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    ContactEdit.prototype.renderForm = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(InputEdit_1.default, { ref: "name", editValue: this.state.contactName }),
            React.createElement(InputEdit_1.default, { ref: "phone", editValue: this.state.contactPhone }),
            React.createElement(InputEdit_1.default, { ref: "email", editValue: this.state.contactEmail }),
            React.createElement("div", { className: "but new", onClick: function () { _this.onClickSave(_this.props.contact.id); } }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    ContactEdit.prototype.render = function () {
        if (this.state.editing) {
            return (this.renderForm());
        }
        else {
            return (this.renderNormal());
        }
    };
    return ContactEdit;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        id: ownProps.id,
        contact: ownProps.contact
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        changePerson: function (id, name, phone, email) { return dispatch(editing_1.changePerson(id, name, phone, email)); },
        deletePerson: function (id_counter, id_contact) { return dispatch(editing_1.deletePerson(id_counter, id_contact)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ContactEdit);
//# sourceMappingURL=ContactEdit.js.map