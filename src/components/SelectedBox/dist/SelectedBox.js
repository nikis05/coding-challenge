"use strict";
exports.__esModule = true;
var Option_1 = require("./../Option/Option");
var selectedBoxStyles_1 = require("./selectedBoxStyles");
var SelectedBox = function (_a) {
    var options = _a.options, showSelectedBox = _a.showSelectedBox, setShowSelectedBox = _a.setShowSelectedBox, handleSelectedOption = _a.handleSelectedOption;
    return (React.createElement(selectedBoxStyles_1.Wrapper, { showSelectedBox: showSelectedBox }, options.map(function (option) { return (React.createElement(Option_1["default"], { key: option.id, option: option, handleSelectedOption: handleSelectedOption })); })));
};
exports["default"] = SelectedBox;
