'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _values = require('../values');

var _values2 = _interopRequireDefault(_values);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('../components/page');

var _page2 = _interopRequireDefault(_page);

var _personForm = require('../components/person-form');

var _personForm2 = _interopRequireDefault(_personForm);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/joaopedro/Documentos/ProjetosReact/apocalipse/pages/person.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n            height: 20px;\n            display: flex;\n            align-items: center;\n            width: 100%;\n        '], ['\n            height: 20px;\n            display: flex;\n            align-items: center;\n            width: 100%;\n        ']);

var Person = function (_Component) {
    (0, _inherits3.default)(Person, _Component);

    function Person(props) {
        (0, _classCallCheck3.default)(this, Person);

        return (0, _possibleConstructorReturn3.default)(this, (Person.__proto__ || (0, _getPrototypeOf2.default)(Person)).call(this, props));
    }

    (0, _createClass3.default)(Person, [{
        key: 'render',
        value: function render() {

            var Span = _styledComponents2.default.span(_templateObject);

            return _react2.default.createElement(_page2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('div', { className: 'page-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Informa\xE7\xF5es do sobrevivente')), _react2.default.createElement(_personForm2.default, { person: this.props.person, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(args) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', _axios2.default.get(_values2.default.baseUrl + 'api/people/' + args.query.id + '.json').then(function (resp) {
                                    var person = resp.data;
                                    return {
                                        person: person
                                    };
                                }, function () {
                                    return;
                                }));

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Person;
}(_react.Component);

exports.default = Person;