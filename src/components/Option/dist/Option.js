"use strict";
exports.__esModule = true;
var react_1 = require("react");
var optionStyles_1 = require("./optionStyles");
var Option = function (_a) {
    var option = _a.option, handleSelectedOption = _a.handleSelectedOption;
    var isSelected = option.isSelected, text = option.text, isHover = option.isHover;
    return (react_1["default"].createElement(optionStyles_1.OptionEl, { onClick: function () { return handleSelectedOption(option); }, isSelected: isSelected, isHover: isHover }, text));
};
exports["default"] = Option;
