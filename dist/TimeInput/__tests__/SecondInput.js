"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SecondInput = _interopRequireDefault(require("../SecondInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable comma-dangle */
describe('SecondInput', function () {
  var defaultProps = {
    className: 'className',
    onChange: function onChange() {}
  };
  it('renders an input', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, defaultProps));
    var input = component.find('input');
    expect(input).toHaveLength(1);
  });
  it('applies given aria-label properly', function () {
    var secondAriaLabel = 'Hour';
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      secondAriaLabel: secondAriaLabel
    })));
    var select = component.find('input');
    expect(select.prop('aria-label')).toBe(secondAriaLabel);
  });
  it('renders "0" if second is <10', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      value: 9
    })));
    var input = component.find('input');
    expect(component.text()).toContain('0');
    expect(input.prop('className')).toContain("".concat(defaultProps.className, "__input--hasLeadingZero"));
  });
  it('does not render "0" if second is >=10', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      value: 10
    })));
    var input = component.find('input');
    expect(component.text()).not.toContain('0');
    expect(input.prop('className')).not.toContain("".concat(defaultProps.className, "__input--hasLeadingZero"));
  });
  it('has proper name defined', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('name')).toBe('second');
  });
  it('displays given value properly', function () {
    var value = 11;
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      value: value
    })));
    var input = component.find('input');
    expect(input.prop('value')).toBe(value);
  });
  it('does not disable input by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeFalsy();
  });
  it('disables input given disabled flag', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      disabled: true
    })));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeTruthy();
  });
  it('is not required input by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('required')).toBeFalsy();
  });
  it('required input given required flag', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      required: true
    })));
    var input = component.find('input');
    expect(input.prop('required')).toBeTruthy();
  });
  it('calls itemRef properly', function () {
    var itemRef = jest.fn();
    (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      itemRef: itemRef
    })));
    expect(itemRef).toHaveBeenCalled();
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLInputElement), 'second');
  });
  it('has min = 0 by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('min')).toBe(0);
  });
  it('has min = 0 given minDate in a past minute', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      hour: 22,
      minute: 40,
      minTime: "21:40:15"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(0);
  });
  it('has min = (second in minTime) given minTime in a current minute', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      hour: 22,
      minute: 40,
      minTime: "22:40:15"
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(15);
  });
  it('has max = 59 by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('max')).toBe(59);
  });
  it('has max = 59 given maxTime in a future minute', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      hour: 22,
      minute: 40,
      maxTime: "23:40:15"
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(59);
  });
  it('has max = (second in maxHour) given maxTime in a current minute', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_SecondInput.default, _extends({}, defaultProps, {
      hour: 22,
      minute: 40,
      maxTime: "22:40:15"
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(15);
  });
});