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
var items_1 = require("../actions/items");
var semantic_ui_react_1 = require("semantic-ui-react");
var Poster_1 = require("./Poster");
var MainMenu_1 = require("./MainMenu");
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activePage: 1
        };
        _this.handlePaginationChange = function (e, _a) {
            var activePage = _a.activePage;
            _this.props.fetchData(activePage, _this.props.searchStr.searchStr);
            _this.setState({ activePage: activePage });
        };
        return _this;
    }
    List.prototype.componentDidMount = function () {
        this.props.fetchData(this.state.activePage, this.props.searchStr.searchStr);
    };
    ;
    List.prototype.render = function () {
        var items = this.props.items.items;
        var activePage = this.state.activePage;
        if (this.props.isLoading) {
            return React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026");
        }
        return (React.createElement("div", null,
            React.createElement(MainMenu_1.default, null),
            React.createElement("div", { className: "itemList" }, items && items.results && items.results.map(function (item) { return (React.createElement("div", { key: item.id, className: "movieItem" },
                React.createElement(Poster_1.default, { id: item.id, poster_path: item.poster_path, title: item.title }))); })),
            React.createElement("div", { className: "footer" },
                React.createElement(semantic_ui_react_1.Pagination, { totalPages: items.total_pages, activePage: activePage, ellipsisItem: { content: React.createElement(semantic_ui_react_1.Icon, { name: 'ellipsis horizontal' }), icon: true }, firstItem: { content: React.createElement(semantic_ui_react_1.Icon, { name: 'angle double left' }), icon: true }, lastItem: { content: React.createElement(semantic_ui_react_1.Icon, { name: 'angle double right' }), icon: true }, prevItem: { content: React.createElement(semantic_ui_react_1.Icon, { name: 'angle left' }), icon: true }, nextItem: { content: React.createElement(semantic_ui_react_1.Icon, { name: 'angle right' }), icon: true }, onPageChange: this.handlePaginationChange }))));
    };
    return List;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        items: state.items,
        isLoading: state.isLoading,
        searchStr: state.searchStr,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function (page, string) { return dispatch(items_1.itemsFetchData(page, string)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(List);
//# sourceMappingURL=List.js.map