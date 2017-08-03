
          window.__NEXT_REGISTER_PAGE('/person', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var values = {
    baseUrl: 'http://zssn-backend-example.herokuapp.com/'
};

exports.default = values;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joaopedro/Documentos/ProjetosReact/apocalipse/values.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joaopedro/Documentos/ProjetosReact/apocalipse/values.js"); } } })();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(556);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(563);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/page.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    margin: 0;\n    padding: 0;\n"], ["\n    margin: 0;\n    padding: 0;\n"]);

var Body = _styledComponents2.default.div(_templateObject);

var Page = function Page(props) {
  return _react2.default.createElement(Body, { className: "container", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), props.children);
};

exports.default = Page;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/page.js"); } } })();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(601);


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _taggedTemplateLiteral2 = __webpack_require__(556);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _values = __webpack_require__(554);

var _values2 = _interopRequireDefault(_values);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__(555);

var _page2 = _interopRequireDefault(_page);

var _personForm = __webpack_require__(602);

var _personForm2 = _interopRequireDefault(_personForm);

var _axios = __webpack_require__(569);

var _axios2 = _interopRequireDefault(_axios);

var _link = __webpack_require__(588);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(563);

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
                    lineNumber: 45
                }
            }, _react2.default.createElement('div', { className: 'page-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Informa\xE7\xF5es do sobrevivente')), _react2.default.createElement(_personForm2.default, { person: this.props.person, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
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
                                if (args.query.id) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return', {
                                    person: {}
                                });

                            case 2:
                                return _context.abrupt('return', _axios2.default.get(_values2.default.baseUrl + 'api/people/' + args.query.id + '.json').then(function (resp) {
                                    var person = resp.data;
                                    return {
                                        person: person
                                    };
                                }, function () {
                                    return;
                                }));

                            case 3:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joaopedro/Documentos/ProjetosReact/apocalipse/pages/person.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joaopedro/Documentos/ProjetosReact/apocalipse/pages/person.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/person")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(556);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = __webpack_require__(603);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(113);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(604);

var _style2 = _interopRequireDefault(_style);

var _values = __webpack_require__(554);

var _values2 = _interopRequireDefault(_values);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(569);

var _axios2 = _interopRequireDefault(_axios);

var _link = __webpack_require__(588);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(563);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/person-form.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n            height: 20px;\n            display: flex;\n            align-items: center;\n            width: 100%;\n        '], ['\n            height: 20px;\n            display: flex;\n            align-items: center;\n            width: 100%;\n        ']);

var PersonForm = function (_Component) {
    (0, _inherits3.default)(PersonForm, _Component);

    function PersonForm(props) {
        (0, _classCallCheck3.default)(this, PersonForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PersonForm.__proto__ || (0, _getPrototypeOf2.default)(PersonForm)).call(this, props));

        _this.state = {
            person: props.person
        };

        console.log(props.person);

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PersonForm, [{
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;

            if (name === 'infected') value = value == 'true';
            if (name === 'age') value = parseInt(value);

            var person = (0, _assign2.default)({}, this.state.person, (0, _defineProperty3.default)({}, name, value));

            this.setState({
                person: person
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            event.preventDefault();
            this.setState({ loading: true });

            if (this.state.person.id) {
                return _axios2.default.patch(_values2.default.baseUrl + 'api/people/' + this.props.person.id + '.json', this.state.person).then(function () {
                    _this2.setState({ loading: false, success: true });
                    window.location.href = '/';
                }, function (err) {
                    _this2.setState({ loading: false, error: true });
                });
            } else {
                return _axios2.default.post(_values2.default.baseUrl + 'api/people.json', (0, _assign2.default)({}, this.state.person, {
                    items: ''
                })).then(function () {
                    _this2.setState({ loading: false, success: true });
                    window.location.href = '/';
                }, function (err) {
                    _this2.setState({ loading: false, error: true });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var Span = _styledComponents2.default.span(_templateObject);

            return _react2.default.createElement('form', { className: 'row', onSubmit: this.handleSubmit, 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_style2.default, {
                styleId: 1514693554,
                css: 'input[type="radio"][data-jsx="1514693554"]{margin:0 5px 0 0}.fa[data-jsx="1514693554"]{margin-left:5px}.alert[data-jsx="1514693554"]{margin-top:10px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGVyc29uLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkU0QixBQUcwQyxBQUlELEFBSUEsZ0JBSHBCLEFBSUEsQ0FSQSIsImZpbGUiOiJjb21wb25lbnRzL3BlcnNvbi1mb3JtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pvYW9wZWRyby9Eb2N1bWVudG9zL1Byb2pldG9zUmVhY3QvYXBvY2FsaXBzZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YWx1ZXMgZnJvbSAnLi4vdmFsdWVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGVyc29uOiBwcm9wcy5wZXJzb25cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5wZXJzb24pO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmKG5hbWUgPT09ICdpbmZlY3RlZCcpIHZhbHVlID0gKHZhbHVlID09ICd0cnVlJyk7XG4gICAgICAgIGlmKG5hbWUgPT09ICdhZ2UnKSB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblxuICAgICAgICBjb25zdCBwZXJzb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnBlcnNvbiwgeyBbbmFtZV06IHZhbHVlIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGVyc29uXG4gICAgICAgIH0pOyBcblxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGVyc29uLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucGF0Y2goYCR7dmFsdWVzLmJhc2VVcmx9YXBpL3Blb3BsZS8ke3RoaXMucHJvcHMucGVyc29uLmlkfS5qc29uYCwgdGhpcy5zdGF0ZS5wZXJzb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdChgJHt2YWx1ZXMuYmFzZVVybH1hcGkvcGVvcGxlLmpzb25gLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnBlcnNvbiwge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAnJ1xuICAgICAgICAgICAgfSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGA7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicm93XCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYWxlcnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyc29uLm5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPklkYWRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcnNvbi5hZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkluZmVjdGFkbz88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImluZmVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5wZXJzb24uaW5mZWN0ZWR9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImluZmVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLnBlcnNvbi5pbmZlY3RlZH0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE7Do29cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkfDqm5lcm88L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIk1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5wZXJzb24uZ2VuZGVyID09PSAnTSd9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXNjdWxpbm9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5wZXJzb24uZ2VuZGVyID09PSAnRid9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZW1pbmlub1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2FsdmFyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmICF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE7Do28gZm9pIHBvc3PDrXZlbCBzYWx2YXIgZXN0ZSBzb2JyZXZpdmVudGUgbm8gbW9tZW50bywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWNjZXNzICYmICF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29icmV2aXZlbnRlIHNhbHZvIGNvbSBzdWNlc3NvLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/person-form.js */'
            }), _react2.default.createElement('div', { className: 'col-xs-3', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('div', { className: 'form-group', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement('label', {
                'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, 'Nome'), _react2.default.createElement('input', {
                type: 'text', className: 'form-control',
                onChange: this.handleInputChange,
                name: 'name',
                value: this.state.person.name, 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }))), _react2.default.createElement('div', { className: 'col-xs-3', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement('div', { className: 'form-group', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement('label', {
                'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, 'Idade'), _react2.default.createElement('input', {
                type: 'number', className: 'form-control',
                onChange: this.handleInputChange,
                name: 'age',
                value: this.state.person.age, 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }))), _react2.default.createElement('div', { className: 'col-xs-3', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('div', { className: 'form-group', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('label', {
                'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, 'Infectado?'), _react2.default.createElement(Span, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleInputChange,
                name: 'infected',
                value: true,
                checked: this.state.person.infected, 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }), 'Sim'), _react2.default.createElement(Span, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleInputChange,
                name: 'infected',
                value: false,
                checked: !this.state.person.infected, 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }), 'N\xE3o'))), _react2.default.createElement('div', { className: 'col-xs-3', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement('div', { className: 'form-group', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement('label', {
                'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, 'G\xEAnero'), _react2.default.createElement('br', {
                'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }), _react2.default.createElement(Span, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleInputChange,
                name: 'gender',
                value: 'M',
                checked: this.state.person.gender === 'M', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }), 'Masculino'), _react2.default.createElement(Span, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleInputChange,
                name: 'gender',
                value: 'F',
                checked: this.state.person.gender === 'F', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }), 'Feminino'))), _react2.default.createElement('div', { className: 'col-xs-12', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, _react2.default.createElement('button', { className: 'btn btn-primary btn-block', disabled: this.state.loading, 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, 'Salvar', this.state.loading && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                }
            })), this.state.error && !this.state.loading && _react2.default.createElement('div', { className: 'alert alert-danger', role: 'alert', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, 'N\xE3o foi poss\xEDvel salvar este sobrevivente no momento, tente novamente mais tarde.'), this.state.success && !this.state.loading && _react2.default.createElement('div', { className: 'alert alert-success', role: 'alert', 'data-jsx': 1514693554,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, 'Sobrevivente salvo com sucesso.')));
        }
    }]);

    return PersonForm;
}(_react.Component);

exports.default = PersonForm;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/person-form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/person-form.js"); } } })();

/***/ })

},[600]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9wZXJzb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92YWx1ZXMuanM/MzhiYWQ2NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UuanM/MzhiYWQ2NCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXJzb24uanM/MzhiYWQ2NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BlcnNvbi1mb3JtLmpzPzM4YmFkNjQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsdWVzID0ge1xuICAgIGJhc2VVcmw6ICdodHRwOi8venNzbi1iYWNrZW5kLWV4YW1wbGUuaGVyb2t1YXBwLmNvbS8nXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbHVlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92YWx1ZXMuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuYDtcblxuY29uc3QgUGFnZSA9IChwcm9wcykgPT4gKFxuICA8Qm9keSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1wiLz5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQm9keT5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BhZ2UuanMiLCJpbXBvcnQgdmFsdWVzIGZyb20gJy4uL3ZhbHVlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcbmltcG9ydCBQZXJzb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcGVyc29uLWZvcm0nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFyZ3MpIHtcblxuICAgICAgICBpZighYXJncy5xdWVyeS5pZCkgcmV0dXJuIHtcbiAgICAgICAgICAgIHBlcnNvbjoge31cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAke3ZhbHVlcy5iYXNlVXJsfWFwaS9wZW9wbGUvJHthcmdzLnF1ZXJ5LmlkfS5qc29uYCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGVyc29uID0gcmVzcC5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwZXJzb246IHBlcnNvblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hw6fDtWVzIGRvIHNvYnJldml2ZW50ZVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgIDxQZXJzb25Gb3JtIHBlcnNvbj17dGhpcy5wcm9wcy5wZXJzb259PjwvUGVyc29uRm9ybT4gXG5cbiAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcGVyc29uLmpzP2VudHJ5IiwiaW1wb3J0IHZhbHVlcyBmcm9tICcuLi92YWx1ZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwZXJzb246IHByb3BzLnBlcnNvblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnBlcnNvbik7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYobmFtZSA9PT0gJ2luZmVjdGVkJykgdmFsdWUgPSAodmFsdWUgPT0gJ3RydWUnKTtcbiAgICAgICAgaWYobmFtZSA9PT0gJ2FnZScpIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IHBlcnNvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUucGVyc29uLCB7IFtuYW1lXTogdmFsdWUgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwZXJzb25cbiAgICAgICAgfSk7IFxuXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5wZXJzb24uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wYXRjaChgJHt2YWx1ZXMuYmFzZVVybH1hcGkvcGVvcGxlLyR7dGhpcy5wcm9wcy5wZXJzb24uaWR9Lmpzb25gLCB0aGlzLnN0YXRlLnBlcnNvbikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wb3N0KGAke3ZhbHVlcy5iYXNlVXJsfWFwaS9wZW9wbGUuanNvbmAsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUucGVyc29uLCB7XG4gICAgICAgICAgICAgICAgaXRlbXM6ICcnXG4gICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyb3dcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZmEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJzb24ubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SWRhZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyc29uLmFnZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW5mZWN0YWRvPzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5mZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnBlcnNvbi5pbmZlY3RlZH0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5mZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IXRoaXMuc3RhdGUucGVyc29uLmluZmVjdGVkfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTsOjb1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+R8OqbmVybzwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnBlcnNvbi5nZW5kZXIgPT09ICdNJ30vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hc2N1bGlub1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiRlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnBlcnNvbi5nZW5kZXIgPT09ICdGJ30vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlbWluaW5vXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWx2YXJcblxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgIXRoaXMuc3RhdGUubG9hZGluZyAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTsOjbyBmb2kgcG9zc8OtdmVsIHNhbHZhciBlc3RlIHNvYnJldml2ZW50ZSBubyBtb21lbnRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Y2Nlc3MgJiYgIXRoaXMuc3RhdGUubG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb2JyZXZpdmVudGUgc2Fsdm8gY29tIHN1Y2Vzc28uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wZXJzb24tZm9ybS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFIQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBdUJBO0FBQ0E7QUFEQTtBQUNBO0FBT0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBSUE7QUFKQTs7Ozs7O0FBbENBOzs7OztBQUVBOzs7Ozs7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJQTtBQUZBO0FBSEE7QUFPQTtBQVBBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWZBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUhBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFQQTtBQVFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFFQTs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBUUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQWpCQTs7QUFpQkE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBOztBQUpBO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTs7QUFKQTtBQVFBO0FBUkE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFMQTtBQUFBO0FBQUE7QUFDQTs7QUFTQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQUE7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFMQTtBQUFBO0FBQUE7QUFDQTs7QUFTQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQUE7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQ0E7QUFPQTtBQVBBO0FBQUE7O0FBU0E7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBbkxBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        