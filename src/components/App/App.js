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
exports.__esModule = true;
var React = require("react");
require("./App.css");
var Race_1 = require("../Race/Race");
// console.log(getJockeyJSON);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.randomClick = function () {
            _this.setState({ startRandom: true });
        };
        _this.resetClick = function () {
            _this.setState({ start: false, startRandom: false });
        };
        _this.state = {
            start: false,
            startRandom: false,
            reset: false
        };
        _this.startClick = _this.startClick.bind(_this);
        return _this;
    }
    App.prototype.startClick = function () {
        this.setState({ start: true });
    };
    App.prototype.render = function () {
        var _this = this;
        var Buttons = function () { return (React.createElement("div", { className: "App-buttons" },
            React.createElement("button", { className: "ui teal basic button", onClick: _this.randomClick }, "Choose Random Jockeys"),
            React.createElement("button", { className: "ui primary basic button", onClick: _this.startClick }, "Start"),
            React.createElement("button", { className: "ui button", onClick: _this.resetClick }, "Reset"))); };
        return (React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header" },
                React.createElement("img", { src: require('../../images/logo.svg'), className: "App-logo", alt: "logo" }),
                React.createElement("h1", { className: "App-title" }, " React / Typescript ")),
            React.createElement(Buttons, null),
            React.createElement(Race_1.Race, { start: this.state.start, reset: this.state.reset, startRandom: this.state.startRandom })));
    };
    return App;
}(React.Component));
exports.App = App;
