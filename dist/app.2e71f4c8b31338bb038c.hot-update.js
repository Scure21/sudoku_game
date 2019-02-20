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
var Square_1 = __webpack_require__(/*! ./Square */ "./src/components/Square.tsx");
var Board = (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Board.prototype.render = function () {
        var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (React.createElement("div", { className: "board-container" }, rows.map(function (row) { return columns.map(function (col) { return React.createElement(Square_1.default, { value: row, key: col }); }); })));
    };
    return Board;
}(React.Component));
exports.default = Board;


/***/ })

})
//# sourceMappingURL=app.2e71f4c8b31338bb038c.hot-update.js.map