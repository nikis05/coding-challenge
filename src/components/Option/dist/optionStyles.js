"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.OptionEl = void 0;
var styled_components_1 = require("styled-components");
exports.OptionEl = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 7px 10px;\n  font-size:14px;\n  background-color: ", ";\n  transition: 0.5s ease;\n  &:hover {\n    background-color: #ddd;\n  }\n\n  ", "\n"], ["\n  cursor: pointer;\n  padding: 7px 10px;\n  font-size:14px;\n  background-color: ", ";\n  transition: 0.5s ease;\n  &:hover {\n    background-color: #ddd;\n  }\n\n  ", "\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return (isSelected ? "lightblue !important" : "#fff");
}, function (_a) {
    var isHover = _a.isHover;
    return isHover ? "background-color: #ddd" : null;
});
var templateObject_1;
