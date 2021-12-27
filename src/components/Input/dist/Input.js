"use strict";
exports.__esModule = true;
var inputStyles_1 = require("./inputStyles");
var Input = function (_a) {
    var placeholder = _a.placeholder, showPlaceholder = _a.showPlaceholder, handleSearchInOption = _a.handleSearchInOption;
    return (React.createElement(inputStyles_1.InputEl, { type: "text", placeholder: "" + (showPlaceholder ? placeholder : ""), onChange: handleSearchInOption }));
};
exports["default"] = Input;
