'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/person.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0;\n    padding: 0;\n    display: flex;\n    width: 100%;\n    height: 200px;\n'], ['\n    margin: 0;\n    padding: 0;\n    display: flex;\n    width: 100%;\n    height: 200px;\n']);

var Pessoa = _styledComponents2.default.div(_templateObject);

var Person = function Person(props) {
  return _react2.default.createElement(Pessoa, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.children);
};

exports.default = Person;