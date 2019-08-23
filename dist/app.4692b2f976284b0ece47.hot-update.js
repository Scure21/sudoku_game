webpackHotUpdate("app",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var Layout_1 = __webpack_require__(/*! ./components/Layout */ "./src/components/Layout.tsx");
ReactDOM.render(React.createElement(Layout_1.default, null), document.getElementById('root'));


/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
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
__webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
var Board_1 = __webpack_require__(/*! ./Board */ "./src/components/Board.tsx");
var StartButton_1 = __webpack_require__(/*! ./StartButton */ "./src/components/StartButton.tsx");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("div", { className: "layout" },
            React.createElement("header", null,
                React.createElement("div", { className: "title" },
                    React.createElement("h1", null, " Sudoku Board "))),
            React.createElement("nav", null, " Nav"),
            React.createElement("main", null,
                React.createElement("div", { className: "game-container" },
                    React.createElement(Board_1.default, null),
                    React.createElement(StartButton_1.default, null))),
            React.createElement("footer", null, "Footer")));
    };
    return Layout;
}(React.Component));
exports.default = Layout;


/***/ })

})
//# sourceMappingURL=app.4692b2f976284b0ece47.hot-update.js.map