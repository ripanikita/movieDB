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
require("./App.less");
var semantic_ui_react_1 = require("semantic-ui-react");
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { activeItem: 'main' };
        _this.handleItemClick = function (e, _a) {
            var name = _a.name;
            return _this.setState({ activeItem: name });
        };
        return _this;
    }
    MainMenu.prototype.render = function () {
        var activeItem = this.state.activeItem;
        return (React.createElement("div", { className: "wrap" },
            React.createElement(semantic_ui_react_1.Menu, { secondary: true },
                React.createElement(semantic_ui_react_1.Menu.Item, { name: 'main', active: activeItem === 'main', onClick: this.handleItemClick }),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: 'favorite', active: activeItem === 'favorite', onClick: this.handleItemClick }),
                React.createElement(semantic_ui_react_1.Menu.Menu, { position: 'right' },
                    React.createElement(semantic_ui_react_1.Menu.Item, null,
                        React.createElement(semantic_ui_react_1.Input, { icon: 'search', placeholder: 'Search...' }))))));
    };
    return MainMenu;
}(React.Component));
exports.default = MainMenu;
//# sourceMappingURL=Menu.js.map