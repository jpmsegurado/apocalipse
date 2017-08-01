
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(548);


/***/ }),

/***/ 548:
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

var _values = __webpack_require__(549);

var _values2 = _interopRequireDefault(_values);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__(550);

var _page2 = _interopRequireDefault(_page);

var _person = __webpack_require__(583);

var _person2 = _interopRequireDefault(_person);

var _axios = __webpack_require__(564);

var _axios2 = _interopRequireDefault(_axios);

var _link = __webpack_require__(589);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/joaopedro/Documentos/ProjetosReact/apocalipse/pages/index.js?entry';


var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_page2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, this.props.itens.map(function (item) {
                return _react2.default.createElement(_person2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, item.name);
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', _axios2.default.get(_values2.default.baseUrl + 'api/people.json').then(function (resp) {
                                    var itens = resp.data.splice(0, 10);
                                    return {
                                        itens: itens
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

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Index;
}(_react.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joaopedro/Documentos/ProjetosReact/apocalipse/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joaopedro/Documentos/ProjetosReact/apocalipse/pages/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 549:
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

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(551);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(558);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/page.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0;\n    padding: 0;\n'], ['\n    margin: 0;\n    padding: 0;\n']);

var Body = _styledComponents2.default.div(_templateObject);

var Page = function Page(props) {
  return _react2.default.createElement(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.children);
};

exports.default = Page;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/page.js"); } } })();

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(551);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(558);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/person.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joaopedro/Documentos/ProjetosReact/apocalipse/components/person.js"); } } })();

/***/ })

},[547]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzkwOWEyNzciLCJ3ZWJwYWNrOi8vLy4vdmFsdWVzLmpzPzkwOWEyNzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmpzPzkwOWEyNzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wZXJzb24uanM/OTA5YTI3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsdWVzIGZyb20gJy4uL3ZhbHVlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vY29tcG9uZW50cy9wZXJzb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAke3ZhbHVlcy5iYXNlVXJsfWFwaS9wZW9wbGUuanNvbmApLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW5zID0gcmVzcC5kYXRhLnNwbGljZSgwLCAxMCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGl0ZW5zOiBpdGVuc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbnMubWFwKChpdGVtKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPFBlcnNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvUGVyc29uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiY29uc3QgdmFsdWVzID0ge1xuICAgIGJhc2VVcmw6ICdodHRwOi8venNzbi1iYWNrZW5kLWV4YW1wbGUuaGVyb2t1YXBwLmNvbS8nXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbHVlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92YWx1ZXMuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuYDtcblxuY29uc3QgUGFnZSA9IChwcm9wcykgPT4gKFxuICA8Qm9keT5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQm9keT5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BhZ2UuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmNvbnN0IFBlc3NvYSA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuYDtcblxuY29uc3QgUGVyc29uID0gKHByb3BzKSA9PiAoXG4gIDxQZXNzb2E+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L1Blc3NvYT5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcGVyc29uLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBZ0JBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BOzs7Ozs7Ozs7O0FBcEJBO0FBQ0E7O0FBSUE7QUFGQTtBQUhBO0FBT0E7QUFQQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        