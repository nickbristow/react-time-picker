"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Hour24Input = _interopRequireDefault(require("../Hour24Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable comma-dangle */
describe('Hour24Input', function () {
  var defaultProps = {
    className: '',
    onChange: function onChange() {}
  };
  it('renders an input', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, defaultProps));
    var input = component.find('input');
    expect(input).toHaveLength(1);
  });
  it('applies given aria-label properly', function () {
    var hourAriaLabel = 'Hour';
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, _extends({}, defaultProps, {
      hourAriaLabel: hourAriaLabel
    })));
    var select = component.find('input');
    expect(select.prop('aria-label')).toBe(hourAriaLabel);
  });
  it('has proper name defined', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('name')).toBe('hour24');
  });
  it('displays given value properly', function () {
    var value = 11;
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, _extends({}, defaultProps, {
      value: value
    })));
    var input = component.find('input');
    expect(input.prop('value')).toBe(value);
  });
  it('does not disable input by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeFalsy();
  });
  it('disables input given disabled flag', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, _extends({}, defaultProps, {
      disabled: true
    })));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeTruthy();
  });
  it('is not required input by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('required')).toBeFalsy();
  });
  it('required input given required flag', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, _extends({}, defaultProps, {
      required: true
    })));
    var input = component.find('input');
    expect(input.prop('required')).toBeTruthy();
  });
  it('calls itemRef properly', function () {
    var itemRef = jest.fn();
    (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, _extends({}, defaultProps, {
      itemRef: itemRef
    })));
    expect(itemRef).toHaveBeenCalled();
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLInputElement), 'hour24');
  });
  it('has min = 0 by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('min')).toBe(0);
  });
  it('has min = (hour in minTime) given minTime', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, _extends({}, defaultProps, {
      minTime: "17:35"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(17);
  });
  it('has max = 23 by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('max')).toBe(23);
  });
  it('has max = (hour in maxTime) given maxTime', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Hour24Input.default, _extends({}, defaultProps, {
      maxTime: "17:35"
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(17);
  });
});