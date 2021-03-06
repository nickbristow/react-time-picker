"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hour12Input;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("./Input"));

var _dates = require("../shared/dates");

var _propTypes2 = require("../shared/propTypes");

var _utils = require("../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Hour12Input(_ref) {
  var amPm = _ref.amPm,
      hour = _ref.hour,
      hourAriaLabel = _ref.hourAriaLabel,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["amPm", "hour", "hourAriaLabel", "maxTime", "minTime", "value"]);

  var maxHour = function () {
    if (!maxTime) {
      return 12;
    }

    var _convert24to = (0, _dates.convert24to12)((0, _dates.getHours)(maxTime)),
        _convert24to2 = _slicedToArray(_convert24to, 2),
        maxHourResult = _convert24to2[0],
        maxAmPm = _convert24to2[1];

    if (maxAmPm !== amPm) {
      // pm is always after am, so we should ignore validation
      return 12;
    }

    return (0, _utils.min)(12, maxHourResult);
  }();

  var minHour = function () {
    if (!minTime) {
      return 1;
    }

    var _convert24to3 = (0, _dates.convert24to12)((0, _dates.getHours)(minTime)),
        _convert24to4 = _slicedToArray(_convert24to3, 2),
        minHourResult = _convert24to4[0],
        minAmPm = _convert24to4[1];

    if (minAmPm !== amPm) {
      // pm is always after am, so we should ignore validation
      return 1;
    }

    if (minHourResult === 12) {
      // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
      return 1;
    }

    return (0, _utils.max)(1, minHourResult);
  }();

  var value12 = value !== null ? (0, _dates.convert24to12)(value)[0] : null;
  return _react.default.createElement(_Input.default, _extends({
    name: "hour12",
    nameForClass: "hour",
    ariaLabel: hourAriaLabel,
    max: maxHour,
    min: minHour,
    value: value12
  }, otherProps));
}

Hour12Input.propTypes = {
  amPm: _propTypes.default.string,
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