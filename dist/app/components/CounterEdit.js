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
var counterparty_1 = require("../actions/counterparty");
var editing_1 = require("../actions/editing");
var ContactEdit_1 = require("./ContactEdit");
var InputEdit_1 = require("./InputEdit");
var AddContact_1 = require("./AddContact");
var LegalEdit_1 = require("./LegalEdit");
var CounterEdit = (function (_super) {
    __extends(CounterEdit, _super);
    function CounterEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            contacts: null
        };
        return _this;
    }
    CounterEdit.prototype.componentDidMount = function () {
        this.props.fetchData(this.props.id);
    };
    CounterEdit.prototype.setAgent = function (e) {
        this.props.changePerson(e, this.refs.name.state.editState, this.refs.phone.state.editState, this.refs.email.state.editState);
    };
    CounterEdit.prototype.setResponsible = function (e) {
        this.props.changePerson(e, this.refs.name_responsible.state.editState, this.refs.phone_responsible.state.editState, this.refs.email_responsible.state.editState);
    };
    CounterEdit.prototype.onShowContact = function (e) {
        alert(e.email);
    };
    CounterEdit.prototype.render = function () {
        var _this = this;
        var counterparty = this.props.items.counterparty;
        console.log(counterparty);
        if (counterparty.hasErrored) {
            return React.createElement("p", null,
                "Error: ",
                counterparty.hasErrored);
        }
        if (counterparty.isLoading) {
            return React.createElement("p", null, "Loading\u2026");
        }
        return (React.createElement("div", { className: "view" },
            React.createElement("h1", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"),
            React.createElement("label", { className: "italic" },
                "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: ",
                React.createElement(LegalEdit_1.default, { id: this.props.id, idEntity: counterparty && counterparty.legalEntity && counterparty.legalEntity.id })),
            React.createElement("br", null),
            React.createElement("label", { className: "italic" },
                "\u0424.\u0418.\u041E.:",
                React.createElement(InputEdit_1.default, { ref: "name", editValue: counterparty && counterparty.bailee && counterparty.bailee.name })),
            " ",
            React.createElement("br", null),
            React.createElement("label", { className: "italic" },
                "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:",
                React.createElement(InputEdit_1.default, { ref: "phone", editValue: counterparty && counterparty.bailee && counterparty.bailee.phone }),
                " "),
            " ",
            React.createElement("br", null),
            React.createElement("label", { className: "italic" },
                "E-mail:",
                React.createElement(InputEdit_1.default, { ref: "email", editValue: counterparty && counterparty.bailee && counterparty.bailee.email }),
                " "),
            " ",
            React.createElement("br", null),
            React.createElement("div", { className: "but new", onClick: function () { return _this.setAgent(counterparty && counterparty.bailee && counterparty.bailee.id); } }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
            React.createElement("hr", null),
            React.createElement("h3", null, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E"),
            React.createElement("label", { className: "italic" },
                "\u0424.\u0418.\u041E.:",
                React.createElement(InputEdit_1.default, { ref: "name_responsible", editValue: counterparty && counterparty.person && counterparty.person.name })),
            " ",
            React.createElement("br", null),
            React.createElement("label", { className: "italic" },
                "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:",
                React.createElement(InputEdit_1.default, { ref: "phone_responsible", editValue: counterparty && counterparty.person && counterparty.person.phone }),
                " "),
            " ",
            React.createElement("br", null),
            React.createElement("label", { className: "italic" },
                "E-mail:",
                React.createElement(InputEdit_1.default, { ref: "email_responsible", editValue: counterparty && counterparty.person && counterparty.person.email }),
                " "),
            " ",
            React.createElement("br", null),
            React.createElement("div", { className: "but new", onClick: function () { return _this.setResponsible(counterparty && counterparty.person && counterparty.person.id); } }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
            React.createElement("hr", null),
            React.createElement("h3", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u043B\u0438\u0446\u0430"),
            React.createElement(AddContact_1.default, { id: this.props.id }),
            React.createElement("br", null),
            counterparty && counterparty.legalEntity && counterparty.contactPersons.map(function (contact) {
                return (React.createElement(ContactEdit_1.default, { key: contact.id, id: _this.props.id, contact: contact }));
            })));
    };
    ;
    return CounterEdit;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        items: state.counterparty,
        hasErrored: state.counterpartyHasErrored,
        isLoading: state.counterpartyIsLoading,
        id: ownProps.params.id
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function (id) { return dispatch(counterparty_1.counterpartyFetchData(id)); },
        changePerson: function (id, name, phone, email) { return dispatch(editing_1.changePerson(id, name, phone, email)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CounterEdit);
//# sourceMappingURL=CounterEdit.js.map