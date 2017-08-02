
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

var _personForm = __webpack_require__(604);

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

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(556);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = __webpack_require__(602);

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

var _style = __webpack_require__(603);

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
            var person = (0, _assign2.default)({}, this.state.person, (0, _defineProperty3.default)({}, name, value));

            this.setState({
                person: person
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            console.log(this.state.person);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {

            var Span = _styledComponents2.default.span(_templateObject);

            return _react2.default.createElement('form', { className: 'row', onSubmit: this.handleSubmit, 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_style2.default, {
                styleId: 2509026133,
                css: 'input[type="radio"][data-jsx="2509026133"]{margin:0 5px 0 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGVyc29uLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Q0QixBQUcwQyxpQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9wZXJzb24tZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qb2FvcGVkcm8vRG9jdW1lbnRvcy9Qcm9qZXRvc1JlYWN0L2Fwb2NhbGlwc2UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsdWVzIGZyb20gJy4uL3ZhbHVlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBlcnNvbjogcHJvcHMucGVyc29uXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHBlcnNvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUucGVyc29uLCB7IFtuYW1lXTogdmFsdWUgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwZXJzb25cbiAgICAgICAgfSk7IFxuXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGVyc29uKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBgO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJvd1wiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcnNvbi5uYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JZGFkZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJzb24uYWdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbmZlY3RhZG8/PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbmZlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5wZXJzb24uaW5mZWN0ZWR9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImluZmVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IXRoaXMuc3RhdGUucGVyc29uLmluZmVjdGVkfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTsOjb1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+R8OqbmVybzwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnBlcnNvbi5nZW5kZXIgPT09ICdNJ30vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hc2N1bGlub1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiRlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnBlcnNvbi5nZW5kZXIgPT09ICdGJ30vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlbWluaW5vXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+U2FsdmFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG59Il19 */\n/*@ sourceURL=components/person-form.js */'
            }), _react2.default.createElement('div', { className: 'col-xs-3', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('div', { className: 'form-group', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('label', {
                'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Nome'), _react2.default.createElement('input', {
                type: 'text', className: 'form-control',
                onChange: this.handleInputChange,
                name: 'name',
                value: this.state.person.name, 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }))), _react2.default.createElement('div', { className: 'col-xs-3', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('div', { className: 'form-group', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('label', {
                'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Idade'), _react2.default.createElement('input', {
                type: 'number', className: 'form-control',
                onChange: this.handleInputChange,
                name: 'age',
                value: this.state.person.age, 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }))), _react2.default.createElement('div', { className: 'col-xs-3', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('div', { className: 'form-group', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('label', {
                'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'Infectado?'), _react2.default.createElement(Span, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleInputChange,
                name: 'infected',
                value: 'true',
                checked: this.state.person.infected, 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }), 'Sim'), _react2.default.createElement(Span, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleInputChange,
                name: 'infected',
                value: 'false',
                checked: !this.state.person.infected, 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }), 'N\xE3o'))), _react2.default.createElement('div', { className: 'col-xs-3', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement('div', { className: 'form-group', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, _react2.default.createElement('label', {
                'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, 'G\xEAnero'), _react2.default.createElement('br', {
                'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }), _react2.default.createElement(Span, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleInputChange,
                name: 'gender',
                value: 'M',
                checked: this.state.person.gender === 'M', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }), 'Masculino'), _react2.default.createElement(Span, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleInputChange,
                name: 'gender',
                value: 'F',
                checked: this.state.person.gender === 'F', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }), 'Feminino'))), _react2.default.createElement('div', { className: 'col-xs-12', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement('button', { className: 'btn btn-primary btn-block', 'data-jsx': 2509026133,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, 'Salvar')));
        }
    }]);

    return PersonForm;
}(_react.Component);

exports.default = PersonForm;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/person-form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/person-form.js"); } } })();

/***/ })

},[600]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9wZXJzb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92YWx1ZXMuanM/M2I3NmYzYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UuanM/M2I3NmYzYSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXJzb24uanM/M2I3NmYzYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BlcnNvbi1mb3JtLmpzPzNiNzZmM2EiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsdWVzID0ge1xuICAgIGJhc2VVcmw6ICdodHRwOi8venNzbi1iYWNrZW5kLWV4YW1wbGUuaGVyb2t1YXBwLmNvbS8nXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbHVlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92YWx1ZXMuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuYDtcblxuY29uc3QgUGFnZSA9IChwcm9wcykgPT4gKFxuICA8Qm9keSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1wiLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQm9keT5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BhZ2UuanMiLCJpbXBvcnQgdmFsdWVzIGZyb20gJy4uL3ZhbHVlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcbmltcG9ydCBQZXJzb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcGVyc29uLWZvcm0nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFyZ3MpIHtcblxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAke3ZhbHVlcy5iYXNlVXJsfWFwaS9wZW9wbGUvJHthcmdzLnF1ZXJ5LmlkfS5qc29uYCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGVyc29uID0gcmVzcC5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwZXJzb246IHBlcnNvblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+SW5mb3JtYcOnw7VlcyBkbyBzb2JyZXZpdmVudGU8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgIDxQZXJzb25Gb3JtIHBlcnNvbj17dGhpcy5wcm9wcy5wZXJzb259PjwvUGVyc29uRm9ybT4gXG5cbiAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcGVyc29uLmpzP2VudHJ5IiwiaW1wb3J0IHZhbHVlcyBmcm9tICcuLi92YWx1ZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwZXJzb246IHByb3BzLnBlcnNvblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgICAgICBjb25zdCBwZXJzb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnBlcnNvbiwgeyBbbmFtZV06IHZhbHVlIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGVyc29uXG4gICAgICAgIH0pOyBcblxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBlcnNvbik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyb3dcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJzb24ubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SWRhZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyc29uLmFnZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW5mZWN0YWRvPzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5mZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucGVyc29uLmluZmVjdGVkfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2ltXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbmZlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLnBlcnNvbi5pbmZlY3RlZH0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE7Do29cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkfDqm5lcm88L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIk1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5wZXJzb24uZ2VuZGVyID09PSAnTSd9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXNjdWxpbm9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5wZXJzb24uZ2VuZGVyID09PSAnRid9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZW1pbmlub1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPlNhbHZhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcGVyc29uLWZvcm0uanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFtQkE7QUFDQTtBQURBO0FBQ0E7QUFPQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFJQTtBQUpBOzs7Ozs7QUE1QkE7Ozs7O0FBRUE7QUFDQTs7QUFJQTtBQUZBO0FBSEE7QUFPQTtBQVBBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUhBOzs7O0FBS0E7QUFDQTtBQUVBOzs7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFRQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFSQTs7QUFRQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7O0FBSkE7QUFRQTtBQVJBO0FBQ0E7O0FBT0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBOztBQUpBO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUNBOztBQVNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFMQTtBQUFBO0FBQUE7QUFDQTs7QUFXQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUNBOztBQVNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFMQTtBQUFBO0FBQUE7QUFDQTs7QUFXQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7QUFuSUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        