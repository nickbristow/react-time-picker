"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatter = void 0;

var _getUserLocale = _interopRequireDefault(require("get-user-locale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
var getFormatter = function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale.default)(), options);
  };
};

exports.getFormatter = getFormatter;