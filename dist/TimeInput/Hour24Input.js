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

var Hour24Input =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Hour24Input, _PureComponent);

  function Hour24Input() {
    _classCallCheck(this, Hour24Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hour24Input).apply(this, arguments));
  }

  _createClass(Hour24Input, [{
    key: "render",
    value: function render() {
      var maxHour = this.maxHour,
          minHour = this.minHour;

      var _this$props = this.props,
          hour = _this$props.hour,
          hourAriaLabel = _this$props.hourAriaLabel,
          maxTime = _this$props.maxTime,
          minTime = _this$props.minTime,
          otherProps = _objectWithoutProperties(_this$props, ["hour", "hourAriaLabel", "maxTime", "minTime"]);

      return _react.default.createElement(_Input.default, _extends({
        name: "hour24",
        nameForClass: "hour",
        ariaLabel: hourAriaLabel,
        max: maxHour,
        min: minHour
      }, otherProps));
    }
  }, {
    key: "maxHour",
    get: function get() {
      var maxTime = this.props.maxTime;
      return (0, _utils.min)(23, maxTime && (0, _dates.getHours)(maxTime));
    }
  }, {
    key: "minHour",
    get: function get() {
      var minTime = this.props.minTime;
      return (0, _utils.max)(0, minTime && (0, _dates.getHours)(minTime));
    }
  }]);

  return Hour24Input;
}(_react.PureComponent);

exports.default = Hour24Input;
Hour24Input.propTypes = {
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