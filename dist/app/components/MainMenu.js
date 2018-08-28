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
var semantic_ui_react_1 = require("semantic-ui-react");
var items_1 = require("../actions/items");
var react_redux_1 = require("react-redux");
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeItem: 'main'
        };
        _this.handleItemClick = function (e, _a) {
            var name = _a.name;
            return _this.setState({ activeItem: name });
        };
        return _this;
    }
    MainMenu.prototype.render = function () {
        var _this = this;
        var activeItem = this.state.activeItem;
        return (React.createElement("div", { className: "wrap" },
            React.createElement(semantic_ui_react_1.Menu, { secondary: true },
                React.createElement(semantic_ui_react_1.Menu.Item, { link: true, href: "/", name: 'main', active: activeItem === 'main', onClick: this.handleItemClick }),
                React.createElement(semantic_ui_react_1.Menu.Item, { link: true, href: "/favorite", name: 'favorite', active: activeItem === 'favorite', onClick: this.handleItemClick }),
                React.createElement(semantic_ui_react_1.Menu.Menu, { position: 'right' },
                    React.createElement(semantic_ui_react_1.Menu.Item, null,
                        React.createElement(semantic_ui_react_1.Input, { icon: 'search', placeholder: 'Search...', onChange: function (e) { return _this.props.search(e.currentTarget.value); } }))))));
    };
    return MainMenu;
}(React.Component));
function mapDispatchToProps(dispatch) {
    return {
        search: function (string) { return dispatch(items_1.itemsFetchData(1, string)); }
    };
}
exports.default = react_redux_1.connect(null, mapDispatchToProps)(MainMenu);
//# sourceMappingURL=MainMenu.js.map