"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NativeInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dates = require("../shared/dates");

var _propTypes2 = require("../shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NativeInput(_ref) {
  var disabled = _ref.disabled,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      name = _ref.name,
      nativeInputAriaLabel = _ref.nativeInputAriaLabel,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value,
      valueType = _ref.valueType;

  var nativeValueParser = function () {
    switch (valueType) {
      case 'hour':
        return function (receivedValue) {
          return "".concat((0, _dates.getHours)(receivedValue), ":00");
        };

      case 'minute':
        return _dates.getHoursMinutes;

      case 'second':
        return _dates.getHoursMinutesSeconds;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  var step = function () {
    switch (valueType) {
      case 'hour':
        return 3600;

      case 'minute':
        return 60;

      case 'second':
        return 1;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return _react.default.createElement("input", {
    type: "time",
    "aria-label": nativeInputAriaLabel,
    disabled: disabled,
    max: maxTime ? nativeValueParser(maxTime) : null,
    min: minTime ? nativeValueParser(minTime) : null,
    name: name,
    onChange: onChange,
    onFocus: stopPropagation,
    required: required,
    step: step,
    style: {
      visibility: 'hidden',
      position: 'absolute',
      top: '-9999px',
      left: '-9999px'
    },
    value: value ? nativeValueParser(value) : ''
  });
}

NativeInput.propTypes = {
  disabled: _propTypes.default.bool,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  name: _propTypes.default.string,
  nativeInputAriaLabel: _propTypes.default.string,
  onChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(Date)]),
  valueType: _propTypes2.isValueType
};