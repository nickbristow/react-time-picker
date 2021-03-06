"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hour24Input;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("./Input"));

var _dates = require("../shared/dates");

var _propTypes2 = require("../shared/propTypes");

var _utils = require("../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Hour24Input(_ref) {
  var hour = _ref.hour,
      hourAriaLabel = _ref.hourAriaLabel,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      otherProps = _objectWithoutProperties(_ref, ["hour", "hourAriaLabel", "maxTime", "minTime"]);

  var maxHour = (0, _utils.min)(23, maxTime && (0, _dates.getHours)(maxTime));
  var minHour = (0, _utils.max)(0, minTime && (0, _dates.getHours)(minTime));
  return _react.default.createElement(_Input.default, _extends({
    name: "hour24",
    nameForClass: "hour",
    ariaLabel: hourAriaLabel,
    max: maxHour,
    min: minHour
  }, otherProps));
}

Hour24Input.propTypes = {
  className: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  hour: _propTypes.default.number,
  hourAriaLabel: _propTypes.default.string,
  itemRef: _propTypes.default.func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onKeyUp: _propTypes.default.func,
  required: _propTypes.default.bool,
  showLeadingZeros: _propTypes.default.bool,
  value: _propTypes.default.number
};