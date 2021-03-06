"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _NativeInput = _interopRequireDefault(require("../NativeInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    valueType   | parsedMax\n    ", " | ", "\n    ", " | ", "\n    ", "   | ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    valueType   | parsedMax\n    ", " | ", "\n    ", " | ", "\n    ", "   | ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    valueType   | parsedMin\n    ", " | ", "\n    ", " | ", "\n    ", "   | ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    valueType   | parsedMin\n    ", " | ", "\n    ", " | ", "\n    ", "   | ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    valueType   | parsedValue\n    ", " | ", "\n    ", " | ", "\n    ", "   | ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable comma-dangle */
describe('NativeInput', function () {
  var defaultProps = {
    onChange: function onChange() {},
    valueType: 'second'
  };
  it('renders an input', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, defaultProps));
    var input = component.find('input');
    expect(input).toHaveLength(1);
  });
  it('applies given aria-label properly', function () {
    var nativeInputAriaLabel = 'Time';
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      nativeInputAriaLabel: nativeInputAriaLabel
    })));
    var select = component.find('input');
    expect(select.prop('aria-label')).toBe(nativeInputAriaLabel);
  });
  it('has proper name defined', function () {
    var name = 'testName';
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      name: name
    })));
    var input = component.find('input');
    expect(input.prop('name')).toBe(name);
  });
  /* eslint-disable indent */

  it.each(_templateObject(), 'second', '22:17:41', 'minute', '22:17', 'hour', '22:00')('displays given value properly if valueType is $valueType', function (_ref) {
    var valueType = _ref.valueType,
        parsedValue = _ref.parsedValue;
    var value = '22:17:41';
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      valueType: valueType,
      value: value
    })));
    var input = component.find('input');
    expect(input.prop('value').toString()).toBe(parsedValue);
  });
  /* eslint-enable indent */

  it('does not disable input by default', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeFalsy();
  });
  it('disables input given disabled flag', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      disabled: true
    })));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeTruthy();
  });
  it('is not required input by default', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('required')).toBeFalsy();
  });
  it('required input given required flag', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      required: true
    })));
    var input = component.find('input');
    expect(input.prop('required')).toBeTruthy();
  });
  it('has no min by default', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('min')).toBeFalsy();
  });
  it.each(_templateObject2(), 'second', '22:00:00', 'minute', '22:00', 'hour', '22:00')('has proper min for minTime which is a full hour if valueType is $valueType', function (_ref2) {
    var valueType = _ref2.valueType,
        parsedMin = _ref2.parsedMin;
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      minTime: "22:00:00",
      valueType: valueType
    })));
    var input = component.find('input');
    expect(input.prop('min').toString()).toBe(parsedMin);
  });
  it.each(_templateObject3(), 'second', '22:17:41', 'minute', '22:17', 'hour', '22:00')('has proper min for minTime which is not a full hour if valueType is $valueType', function (_ref3) {
    var valueType = _ref3.valueType,
        parsedMin = _ref3.parsedMin;
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      minTime: "22:17:41",
      valueType: valueType
    })));
    var input = component.find('input');
    expect(input.prop('min').toString()).toBe(parsedMin);
  });
  it('has no max by default', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('max')).toBeFalsy();
  });
  it.each(_templateObject4(), 'second', '22:00:00', 'minute', '22:00', 'hour', '22:00')('has proper max for maxTime which is a full hour if valueType is $valueType', function (_ref4) {
    var valueType = _ref4.valueType,
        parsedMax = _ref4.parsedMax;
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      maxTime: "22:00:00",
      valueType: valueType
    })));
    var input = component.find('input');
    expect(input.prop('max').toString()).toBe(parsedMax);
  });
  it.each(_templateObject5(), 'second', '22:17:41', 'minute', '22:17', 'hour', '22:00')('has proper max for maxTime which is not a full hour if valueType is $valueType', function (_ref5) {
    var valueType = _ref5.valueType,
        parsedMax = _ref5.parsedMax;
    var component = (0, _enzyme.shallow)(_react.default.createElement(_NativeInput.default, _extends({}, defaultProps, {
      maxTime: "22:17:41",
      valueType: valueType
    })));
    var input = component.find('input');
    expect(input.prop('max').toString()).toBe(parsedMax);
  });
});