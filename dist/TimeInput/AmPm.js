"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AmPm;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

var _dates = require("../shared/dates");

var _propTypes2 = require("../shared/propTypes");

var _utils = require("../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AmPm(_ref) {
  var amPmAriaLabel = _ref.amPmAriaLabel,
      className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      locale = _ref.locale,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value;
  var amDisabled = minTime && (0, _dates.convert24to12)((0, _dates.getHours)(minTime))[1] === 'pm';
  var pmDisabled = maxTime && (0, _dates.convert24to12)((0, _dates.getHours)(maxTime))[1] === 'am';
  var name = 'amPm';

  var _getAmPmLabels = (0, _utils.getAmPmLabels)(locale),
      _getAmPmLabels2 = _slicedToArray(_getAmPmLabels, 2),
      amLabel = _getAmPmLabels2[0],
      pmLabel = _getAmPmLabels2[1];

  return _react.default.createElement("select", {
    "aria-label": amPmAriaLabel,
    className: (0, _mergeClassNames.default)("".concat(className, "__input"), "".concat(className, "__amPm")),
    disabled: disabled,
    name: name,
    onChange: onChange,
    ref: function ref(_ref2) {
      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    value: value !== null ? value : ''
  }, !value && _react.default.createElement("option", {
    value: ""
  }, "--"), _react.default.createElement("option", {
    disabled: amDisabled,
    value: "am"
  }, amLabel), _react.default.createElement("option", {
    disabled: pmDisabled,
    value: "pm"
  }, pmLabel));
}

AmPm.propTypes = {
  amPmAriaLabel: _propTypes.default.string,
  className: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  itemRef: _propTypes.default.func,
  locale: _propTypes.default.string,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  value: _propTypes.default.oneOf(['am', 'pm'])
};