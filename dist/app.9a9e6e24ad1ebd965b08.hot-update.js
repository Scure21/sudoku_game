webpackHotUpdate("app",{

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
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "title" },
                React.createElement("h1", null, " Sudoku Board ")),
            React.createElement(Board_1.default, null),
            React.createElement(StartButton_1.default, null)));
    };
    return Layout;
}(React.Component));
exports.default = Layout;


/***/ }),

/***/ "./src/components/StartButton.tsx":
/*!****************************************!*\
  !*** ./src/components/StartButton.tsx ***!
  \****************************************/
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
var StartButton = (function (_super) {
    __extends(StartButton, _super);
    function StartButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartButton.prototype.render = function () {
        return (React.createElement("div", { className: "button-container" },
            React.createElement("button", { className: "start-button" }, "start")));
    };
    return StartButton;
}(React.Component));
exports.default = StartButton;


/***/ })

})
//# sourceMappingURL=app.9a9e6e24ad1ebd965b08.hot-update.js.map