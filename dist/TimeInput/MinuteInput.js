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

var MinuteInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MinuteInput, _PureComponent);

  function MinuteInput() {
    _classCallCheck(this, MinuteInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(MinuteInput).apply(this, arguments));
  }

  _createClass(MinuteInput, [{
    key: "render",
    value: function render() {
      var maxMinute = this.maxMinute,
          minMinute = this.minMinute;

      var _this$props = this.props,
          hour = _this$props.hour,
          maxTime = _this$props.maxTime,
          minuteAriaLabel = _this$props.minuteAriaLabel,
          minTime = _this$props.minTime,
          otherProps = _objectWithoutProperties(_this$props, ["hour", "maxTime", "minuteAriaLabel", "minTime"]);

      return _react.default.createElement(_Input.default, _extends({
        name: "minute",
        ariaLabel: minuteAriaLabel,
        max: maxMinute,
        min: minMinute
      }, otherProps));
    }
  }, {
    key: "maxMinute",
    get: function get() {
      var _this$props2 = this.props,
          hour = _this$props2.hour,
          maxTime = _this$props2.maxTime;
      return (0, _utils.min)(59, maxTime && hour === (0, _dates.getHours)(maxTime) && (0, _dates.getMinutes)(maxTime));
    }
  }, {
    key: "minMinute",
    get: function get() {
      var _this$props3 = this.props,
          hour = _this$props3.hour,
          minTime = _this$props3.minTime;
      return (0, _utils.max)(0, minTime && hour === (0, _dates.getHours)(minTime) && (0, _dates.getMinutes)(minTime));
    }
  }]);

  return MinuteInput;
}(_react.PureComponent);

exports.default = MinuteInput;
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