"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("./Input"));

var _dates = require("../shared/dates");

var _propTypes2 = require("../shared/propTypes");

var _utils = require("../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Hour12Input =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Hour12Input, _PureComponent);

  function Hour12Input() {
    _classCallCheck(this, Hour12Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hour12Input).apply(this, arguments));
  }

  _createClass(Hour12Input, [{
    key: "render",
    value: function render() {
      var maxHour = this.maxHour,
          minHour = this.minHour;

      var _this$props = this.props,
          hour = _this$props.hour,
          hourAriaLabel = _this$props.hourAriaLabel,
          maxTime = _this$props.maxTime,
          minTime = _this$props.minTime,
          value = _this$props.value,
          otherProps = _objectWithoutProperties(_this$props, ["hour", "hourAriaLabel", "maxTime", "minTime", "value"]);

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
  }, {
    key: "maxHour",
    get: function get() {
      var _this$props2 = this.props,
          amPm = _this$props2.amPm,
          maxTime = _this$props2.maxTime;

      if (!maxTime) {
        return 12;
      }

      var _convert24to = (0, _dates.convert24to12)((0, _dates.getHours)(maxTime)),
          _convert24to2 = _slicedToArray(_convert24to, 2),
          maxHour = _convert24to2[0],
          maxAmPm = _convert24to2[1];

      if (maxAmPm !== amPm) {
        // pm is always after am, so we should ignore validation
        return 12;
      }

      return (0, _utils.min)(12, maxHour);
    }
  }, {
    key: "minHour",
    get: function get() {
      var _this$props3 = this.props,
          amPm = _this$props3.amPm,
          minTime = _this$props3.minTime;

      if (!minTime) {
        return 1;
      }

      var _convert24to3 = (0, _dates.convert24to12)((0, _dates.getHours)(minTime)),
          _convert24to4 = _slicedToArray(_convert24to3, 2),
          minHour = _convert24to4[0],
          minAmPm = _convert24to4[1];

      if (minAmPm !== amPm) {
        // pm is always after am, so we should ignore validation
        return 1;
      }

      if (minHour === 12) {
        // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
        return 1;
      }

      return (0, _utils.max)(1, minHour);
    }
  }]);

  return Hour12Input;
}(_react.PureComponent);

exports.default = Hour12Input;
Hour12Input.propTypes = {
  amPm: _propTypes.default.string.isRequired,
  className: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
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