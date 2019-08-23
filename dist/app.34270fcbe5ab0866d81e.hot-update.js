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
    function Board(props) {
        return _super.call(this, props) || this;
    }
    Board.prototype.render = function () {
        var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (React.createElement("section", { className: "board-container border" }, rows.map(function (row) { return columns.map(function (col) { return React.createElement(Square_1.default, { value: row, className: "square", id: row + "-" + col, key: col }); }); })));
    };
    return Board;
}(React.Component));
exports.default = Board;


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
                React.createElement(Board_1.default, null),
                React.createElement(StartButton_1.default, null)),
            React.createElement("footer", null, "Footer")));
    };
    return Layout;
}(React.Component));
exports.default = Layout;


/***/ }),

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
//# sourceMappingURL=app.34270fcbe5ab0866d81e.hot-update.js.map