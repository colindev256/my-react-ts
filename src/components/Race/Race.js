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
var semantic_ui_react_1 = require("semantic-ui-react");
require("semantic-ui-css/semantic.min.css");
require("react-promise");
var Jockey_1 = require("../Jockey");
var data = require('../../team.json');
var uniqueUtil_1 = require("../../utils/uniqueUtil");
// const u =  getUniqueJockeys();
// con
// prom = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//       reject(Error);
//     }, 100);
// });
// const jockeys = data;
// Race Component
var Race = /** @class */ (function (_super) {
    __extends(Race, _super);
    function Race(props) {
        var _this = _super.call(this, props) || this;
        // handleChange = (e, { key, value }) => {
        _this.handleChange = function () {
            // const x = data.map(({login, id})=>({key:id, value: login}))
            // const index = x.findIndex(m => m.value === value); 
            // y.push(index);
            // this.setState({ key, value });
            // this.state.nextRacers.push({value});
            // console.log(key);
        };
        _this.state = {
            jockeys: data,
            nextRacers: []
        };
        return _this;
        // this.prom.then((value) => {
        //     this.setState({jockeys: value.map(({ id, login }) => ({ key: id, value: login, text: login }))})
        // });
        // this.transfrm = () => {
        // this.setState({jockeys: data.map(({ id, login }) => ({ key: id, value: login, text: login }))});
        // };
    }
    Race.prototype.render = function () {
        if (this.props.startRandom) {
            var unique = uniqueUtil_1.getUniqueJockeys(data);
            console.log(unique['0'].login);
            var colors_1 = ['#FFD700', '#B413EC', '#FE9A76', '#008080', '#0E6EB8'];
            // var m = unique.map((login, id) => (
            //     // console.log(racer[racer.].login)
            //     {key: id, value: login}
            //     // <Jockey avatar={data[index].avatar_url} color={colors[index]}/>
            // ));
            // console.log(m);
            return (React.createElement("div", { className: "App-field" },
                unique.map(function (racer, index) { return (
                // console.log(racer)
                React.createElement(Jockey_1.Jockey, { avatar: racer.avatar_url, color: colors_1[index] })); }),
                React.createElement("p", null, "The last one forfeits Kurtosys drinks for 2 weeks! ")));
        }
        else if (this.props.start) {
            return (React.createElement("div", { className: "App-field" },
                React.createElement("p", null, "The last one forfeits Kurtosys drinks for 2 weeks! "),
                React.createElement(Jockey_1.Jockey, { avatar: data['0'].avatar_url, color: "#FFD700" }),
                React.createElement(Jockey_1.Jockey, { avatar: data['1'].avatar_url, color: "#B413EC" }),
                React.createElement(Jockey_1.Jockey, { avatar: data['2'].avatar_url, color: "#FE9A76" }),
                React.createElement(Jockey_1.Jockey, { avatar: data['3'].avatar_url, color: "#008080" }),
                React.createElement(Jockey_1.Jockey, { avatar: data['4'].avatar_url, color: "#0E6EB8" })));
        }
        else {
            var r = this.state.jockeys;
            var x = r.map(function (value, i) {
                // console.log(value.id);
                return value.id;
            });
            console.log(x);
            // const r = 
            // const key = 0;
            // const lineup = r.map((list, i) => 
            //         <li key={i} className="Race-racers"> list[i].login </li>
            // );
            return (React.createElement("div", null,
                React.createElement(semantic_ui_react_1.Divider, null),
                React.createElement("div", { className: "App-container" },
                    React.createElement("div", { className: "App-dropdown" },
                        React.createElement(semantic_ui_react_1.Container, null,
                            React.createElement("p", null, "Add jockeys to the race in the dropdown below (and click Start)"),
                            React.createElement(semantic_ui_react_1.Dropdown, { placeholder: "Select Jockey...", 
                                // selection
                                // search
                                // value={this.state.value}
                                // key={key}
                                options: this.state.jockeys, onChange: this.handleChange }))),
                    React.createElement("div", { className: "App-jockeys" },
                        React.createElement("p", null,
                            React.createElement("strong", null, "Jockeys selected to race (No more/less than 5)"))))));
        }
    };
    return Race;
}(React.Component));
exports.Race = Race;
