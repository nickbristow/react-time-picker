"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AmPm = _interopRequireDefault(require("../AmPm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable comma-dangle */
describe('AmPm', function () {
  var defaultProps = {
    className: '',
    onChange: function onChange() {}
  };
  it('renders a select', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_AmPm.default, defaultProps));
    var select = component.find('select');
    var options = select.find('option');
    expect(select).toHaveLength(1);
    expect(options).toHaveLength(3);
  });
  it('displays given value properly', function () {
    var value = 'pm';
    var component = (0, _enzyme.shallow)(_react.default.createElement(_AmPm.default, _extends({}, defaultProps, {
      value: value
    })));
    var select = component.find('select');
    expect(select.prop('value')).toBe(value);
  });
  it('applies given aria-label properly', function () {
    var amPmAriaLabel = 'Select AM/PM';
    var component = (0, _enzyme.shallow)(_react.default.createElement(_AmPm.default, _extends({}, defaultProps, {
      amPmAriaLabel: amPmAriaLabel
    })));
    var select = component.find('select');
    expect(select.prop('aria-label')).toBe(amPmAriaLabel);
  });
  it('should not disable anything by default', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_AmPm.default, defaultProps));
    var select = component.find('select');
    var optionAm = select.find('option[value="am"]');
    var optionPm = select.find('option[value="pm"]');
    expect(optionAm.prop('disabled')).toBeFalsy();
    expect(optionPm.prop('disabled')).toBeFalsy();
  });
  it('should disable "pm" given maxTime before 12:00 pm', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_AmPm.default, _extends({}, defaultProps, {
      maxTime: "11:59"
    })));
    var select = component.find('select');
    var optionPm = select.find('option[value="pm"]');
    expect(optionPm.prop('disabled')).toBeTruthy();
  });
  it('should not disable "pm" given maxTime after or equal to 12:00 pm', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_AmPm.default, _extends({}, defaultProps, {
      maxTime: "12:00"
    })));
    var select = component.find('select');
    var optionPm = select.find('option[value="pm"]');
    expect(optionPm.prop('disabled')).toBeFalsy();
  });
  it('should disable "am" given minTime after or equal to 12:00 pm', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_AmPm.default, _extends({}, defaultProps, {
      minTime: "12:00"
    })));
    var select = component.find('select');
    var optionAm = select.find('option[value="am"]');
    expect(optionAm.prop('disabled')).toBeTruthy();
  });
  it('should not disable "am" given minTime before 12:00 pm', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_AmPm.default, _extends({}, defaultProps, {
      minTime: "11:59"
    })));
    var select = component.find('select');
    var optionAm = select.find('option[value="pm"]');
    expect(optionAm.prop('disabled')).toBeFalsy();
  });
});