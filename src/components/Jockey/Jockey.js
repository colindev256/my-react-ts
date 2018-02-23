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
var Jockey = /** @class */ (function (_super) {
    __extends(Jockey, _super);
    function Jockey(props) {
        var _this = _super.call(this, props) || this;
        _this.timer = function () {
            _this.setState({ progress: _this.state.progress + 1 });
            // console.log('winner');
            if (_this.state.progress === 100) {
                clearInterval(_this.intervalId);
                // console.log(this.intervalId);
                // alert('yay!!');
            }
            // (this.state.progress >= 100) ? this.setState({ progress: 100 }) : '' ;
        };
        _this.state = {
            interval: Math.floor(Math.random() * 500),
            progress: 0
        };
        return _this;
    }
    Jockey.prototype.componentDidMount = function () {
        this.intervalId = window.setInterval(this.timer, this.state.interval);
        // console.log(this.intervalId);
    };
    Jockey.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: "App-lane" },
                React.createElement("img", { src: this.props.avatar, alt: "" }),
                React.createElement("progress", { value: this.state.progress, color: "red", max: "100" }))));
    };
    return Jockey;
}(React.Component));
exports.Jockey = Jockey;
