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
var selectCity_1 = require("../actions/selectCity");
var SelectCity = (function (_super) {
    __extends(SelectCity, _super);
    function SelectCity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleFilterChange = function (e) {
            _this.props.onChange && _this.props.onChange(e.target.value);
        };
        return _this;
    }
    SelectCity.prototype.componentDidMount = function () {
        this.props.fetchData1();
    };
    SelectCity.prototype.render = function () {
        var cities = this.props.cities;
        if (cities.error.length != 0) {
            return (React.createElement("p", null, cities && cities.errors && cities.items.map(function (item) { return (React.createElement("p", null,
                "\u041E\u0448\u0438\u0431\u043A\u0430: ",
                React.createElement("b", null, item.field),
                " - ",
                item.message)); })));
        }
        if (cities.error == undefined) {
            return React.createElement("div", null, "\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442");
        }
        if (cities.legalEntitiesisLoading) {
            return React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026");
        }
        return (React.createElement("div", null,
            React.createElement("select", { onChange: this.handleFilterChange }, cities && cities.cities && cities.cities.map(function (item) { return (React.createElement("option", { key: item.id, value: item.id }, item.name)); }))));
    };
    return SelectCity;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        cities: state.cities,
        error: state.error,
        citiesisLoading: state.isLoading
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData1: function () { return dispatch(selectCity_1.citiesFetchData()); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SelectCity);
//# sourceMappingURL=SelectCity.js.map