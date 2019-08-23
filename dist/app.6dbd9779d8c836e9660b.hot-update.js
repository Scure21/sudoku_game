webpackHotUpdate("app",{

/***/ "./src/components/Board.tsx":
/*!**********************************!*\
  !*** ./src/components/Board.tsx ***!
  \**********************************/
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
var Subgrid_1 = __webpack_require__(/*! ./Subgrid */ "./src/components/Subgrid.tsx");
var Board = (function (_super) {
    __extends(Board, _super);
    function Board(props) {
        return _super.call(this, props) || this;
    }
    Board.prototype.render = function () {
        var subgridRows = [1, 2, 3];
        var subgridCols = [1, 2, 3];
        var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (React.createElement("div", { className: "board-container" },
            React.createElement("div", { className: "board" }, subgridRows.forEach(function (row) {
                return React.createElement(Subgrid_1.default, { value: row, className: "square", id: row + "-" + col, key: col });
            }))));
    };
    return Board;
}(React.Component));
exports.default = Board;


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
var Subgrid = (function (_super) {
    __extends(Subgrid, _super);
    function Subgrid(props) {
        return _super.call(this, props) || this;
    }
    Subgrid.prototype.render = function () {
        var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (React.createElement("div", { className: "board-container" },
            React.createElement("div", { className: "board" }, subgridRows.forEach(function (row) {
                return React.createElement(Subgrid, { value: row, className: "square", id: row + "-" + col, key: col });
            }))));
    };
    return Subgrid;
}(React.Component));
exports.default = Subgrid;


/***/ })

})
//# sourceMappingURL=app.6dbd9779d8c836e9660b.hot-update.js.map