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
var select_1 = require("../actions/select");
var editing_1 = require("../actions/editing");
var LegalEdit = (function (_super) {
    __extends(LegalEdit, _super);
    function LegalEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleFilterChange = function (e) {
            _this.props.changeEntity(_this.props.id, e.target.value);
        };
        return _this;
    }
    LegalEdit.prototype.componentDidMount = function () {
        this.props.fetchData();
        this.props.id;
    };
    LegalEdit.prototype.render = function () {
        var legalEntities = this.props.legalEntities;
        if (legalEntities.legalEntitieshasErrored) {
            return React.createElement("p", null,
                "Error: ",
                legalEntities.legalEntitieshasErrored);
        }
        if (legalEntities.legalEntitiesisLoading) {
            return React.createElement("p", null, "Loading\u2026");
        }
        return (React.createElement("div", null,
            React.createElement("select", { defaultValue: this.props.idEntity, onChange: this.handleFilterChange }, legalEntities && legalEntities.legalEntities && legalEntities.legalEntities.map(function (item) { return (React.createElement("option", { key: item.id, value: item.id }, item.name)); })),
            React.createElement("br", null)));
    };
    return LegalEdit;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        legalEntities: state.legalEntities,
        legalEntitieshasErrored: state.error,
        legalEntitiesisLoading: state.isLoading,
        id: ownProps.id
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function () { return dispatch(select_1.legalEntitiesFetchData()); },
        changeEntity: function (id_counter, id_entity) { return dispatch(editing_1.changeEntity(id_counter, id_entity)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LegalEdit);
//# sourceMappingURL=LegalEdit.js.map