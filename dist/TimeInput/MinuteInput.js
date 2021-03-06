"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MinuteInput;

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

function MinuteInput(_ref) {
  var hour = _ref.hour,
      maxTime = _ref.maxTime,
      minuteAriaLabel = _ref.minuteAriaLabel,
      minTime = _ref.minTime,
      otherProps = _objectWithoutProperties(_ref, ["hour", "maxTime", "minuteAriaLabel", "minTime"]);

  var maxMinute = (0, _utils.min)(59, maxTime && hour === (0, _dates.getHours)(maxTime) && (0, _dates.getMinutes)(maxTime));
  var minMinute = (0, _utils.max)(0, minTime && hour === (0, _dates.getHours)(minTime) && (0, _dates.getMinutes)(minTime));
  return _react.default.createElement(_Input.default, _extends({
    name: "minute",
    ariaLabel: minuteAriaLabel,
    max: maxMinute,
    min: minMinute
  }, otherProps));
}

MinuteInput.propTypes = {
  className: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  hour: _propTypes.default.number,
  itemRef: _propTypes.default.func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  minuteAriaLabel: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onKeyUp: _propTypes.default.func,
  required: _propTypes.default.bool,
  showLeadingZeros: _propTypes.default.bool,
  value: _propTypes.default.number
};
MinuteInput.defaultProps = {
  showLeadingZeros: true
};