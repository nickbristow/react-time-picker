"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Hour12Input = _interopRequireDefault(require("../Hour12Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable comma-dangle */
describe('Hour12Input', function () {
  var defaultProps = {
    amPm: 'am',
    className: '',
    onChange: function onChange() {}
  };
  it('renders an input', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, defaultProps));
    var input = component.find('input');
    expect(input).toHaveLength(1);
  });
  it('applies given aria-label properly', function () {
    var hourAriaLabel = 'Hour';
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      hourAriaLabel: hourAriaLabel
    })));
    var select = component.find('input');
    expect(select.prop('aria-label')).toBe(hourAriaLabel);
  });
  it('has proper name defined', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('name')).toBe('hour12');
  });
  it('displays given value properly (am)', function () {
    var value = 11;
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      value: value
    })));
    var input = component.find('input');
    expect(input.prop('value')).toBe(value);
  });
  it('displays given value properly (pm)', function () {
    var value = 22;
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      value: value
    })));
    var input = component.find('input');
    expect(input.prop('value')).toBe(value - 12);
  });
  it('does not disable input by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeFalsy();
  });
  it('disables input given disabled flag', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      disabled: true
    })));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeTruthy();
  });
  it('is not required input by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('required')).toBeFalsy();
  });
  it('required input given required flag', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      required: true
    })));
    var input = component.find('input');
    expect(input.prop('required')).toBeTruthy();
  });
  it('calls itemRef properly', function () {
    var itemRef = jest.fn();
    (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      itemRef: itemRef
    })));
    expect(itemRef).toHaveBeenCalled();
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLInputElement), 'hour12');
  });
  it('has min = 1 by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('min')).toBe(1);
  });
  it('has min = (hour in minTime) given am minTime when amPm is am', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      minTime: "5:35",
      amPm: "am"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(5);
  });
  it('has min = (hour in minTime) given pm minTime when amPm is pm', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      minTime: "17:35",
      amPm: "pm"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(5);
  });
  it('has min = 1 given am minTime when amPm is pm', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      minTime: "5:35",
      amPm: "pm"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(1);
  });
  it('has min = 1 given pm minTime when amPm is am', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      minTime: "17:35",
      amPm: "am"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(1);
  });
  it('has min = 1 given 12 am minTime when amPm is am', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      minTime: "00:35",
      amPm: "am"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(1);
  });
  it('has min = 1 given 12 pm minTime when amPm is pm', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      minTime: "12:35",
      amPm: "pm"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(1);
  });
  it('has max = 12 by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('max')).toBe(12);
  });
  it('has max = (hour in maxTime) given am maxTime when amPm is am', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      maxTime: "5:35",
      amPm: "am"
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(5);
  });
  it('has max = (hour in maxTime) given pm maxTime when amPm is pm', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      maxTime: "17:35",
      amPm: "pm"
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(5);
  });
  it('has max = 12 given am maxTime when amPm is pm', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      maxTime: "5:35",
      amPm: "pm"
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(12);
  });
  it('has max = 12 given pm maxTime when amPm is am', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      maxTime: "17:35",
      amPm: "am"
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(12);
  });
  it('has max = 12 given 12 pm minTime when amPm is pm', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour12Input.default, _extends({}, defaultProps, {
      maxTime: "12:35",
      amPm: "pm"
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(12);
  });
});