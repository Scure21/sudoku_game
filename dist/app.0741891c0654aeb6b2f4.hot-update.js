webpackHotUpdate("app",{

/***/ "./src/components/Square.tsx":
/*!***********************************!*\
  !*** ./src/components/Square.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            class: "off"
        };
        _this.toggleClass = _this.toggleClass.bind(_this);
        return _this;
    }
    Square.prototype.toggleClass = function () {
        var css = this.state.class === "on" ? "off" : "on";
        this.setState({ class: css });
    };
    Square.prototype.render = function () {
        var props = this.props;
        return (React.createElement("div", { className: props.className + " " + this.state.class, onClick: this.toggleClass, id: props.id }, props.value));
    };
    return Square;
}(React.Component));
exports.default = Square;


/***/ }),

/***/ "./src/components/Subgrid.tsx":
/*!************************************!*\
  !*** ./src/components/Subgrid.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Square_1 = __webpack_require__(/*! ./Square */ "./src/components/Square.tsx");
var Subgrid = (function (_super) {
    __extends(Subgrid, _super);
    function Subgrid(props) {
        return _super.call(this, props) || this;
    }
    Subgrid.prototype.render = function () {
        var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (React.createElement("div", { className: "board-container" }, rows.map(function (row) { return columns.map(function (col) { return React.createElement(Square_1.default, { value: row, className: "square", id: row + "-" + col, key: col }); }); })));
    };
    return Subgrid;
}(React.Component));
exports.default = Subgrid;


/***/ })

})
//# sourceMappingURL=app.0741891c0654aeb6b2f4.hot-update.js.map