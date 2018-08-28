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
var okta_signin_widget_1 = require("@okta/okta-signin-widget");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.state = { user: null };
        _this.widget = new okta_signin_widget_1.OktaSignIn({
            baseUrl: 'https://dev-363731.oktapreview.com',
            clientId: '0oad9x0doskvdP0dp0h7',
            redirectUri: 'http://production.lenkomtech.ru/'
        });
        _this.showLogin = _this.showLogin.bind(_this);
        _this.logout = _this.logout.bind(_this);
        return _this;
    }
    Login.prototype.componentDidMount = function () {
        var _this = this;
        this.widget.session.get(function (response) {
            if (response.status !== 'INACTIVE') {
                _this.setState({ user: response.login });
            }
            else {
                _this.showLogin();
            }
        });
    };
    Login.prototype.showLogin = function () {
        var _this = this;
        this.widget.renderEl({ el: this.loginContainer }, function (response) {
            _this.setState({ user: response.claims.email });
            _this.widget.remove();
        }, function (err) {
            console.log(err);
        });
    };
    Login.prototype.logout = function () {
        var _this = this;
        this.widget.signOut(function () {
            _this.setState({ user: null });
            _this.showLogin();
        });
    };
    Login.prototype.render = function () {
        var _this = this;
        console.log('rendering...');
        return (React.createElement("div", null,
            this.state.user ? (React.createElement("div", { className: "container" },
                React.createElement("div", null,
                    "Welcome, ",
                    this.state.user,
                    "!"),
                React.createElement("button", { onClick: this.logout }, "Logout"))) : null,
            this.state.user ? null : (React.createElement("div", { ref: function (div) { _this.loginContainer = div; } }))));
    };
    return Login;
}(React.Component));
exports.default = Login;
//# sourceMappingURL=Login.js.map