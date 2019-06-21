"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AmPm =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AmPm, _PureComponent);

  function AmPm() {
    _classCallCheck(this, AmPm);

    return _possibleConstructorReturn(this, _getPrototypeOf(AmPm).apply(this, arguments));
  }

  _createClass(AmPm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          amPmAriaLabel = _this$props.amPmAriaLabel,
          className = _this$props.className,
          disabled = _this$props.disabled,
          itemRef = _this$props.itemRef,
          locale = _this$props.locale,
          onChange = _this$props.onChange,
          required = _this$props.required,
          value = _this$props.value;
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
        ref: function ref(_ref) {
          if (itemRef) {
            itemRef(_ref, name);
          }
        },
        required: required,
        value: value !== null ? value : ''
      }, !value && _react.default.createElement("option", {
        value: ""
      }, "--"), _react.default.createElement("option", {
        disabled: this.amDisabled,
        value: "am"
      }, amLabel), _react.default.createElement("option", {
        disabled: this.pmDisabled,
        value: "pm"
      }, pmLabel));
    }
  }, {
    key: "amDisabled",
    get: function get() {
      var minTime = this.props.minTime;
      return minTime && (0, _dates.convert24to12)((0, _dates.getHours)(minTime))[1] === 'pm';
    }
  }, {
    key: "pmDisabled",
    get: function get() {
      var maxTime = this.props.maxTime;
      return maxTime && (0, _dates.convert24to12)((0, _dates.getHours)(maxTime))[1] === 'am';
    }
  }]);

  return AmPm;
}(_react.PureComponent);

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
var _default = AmPm;
exports.default = _default;