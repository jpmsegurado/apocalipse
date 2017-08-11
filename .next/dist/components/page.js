'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joaopedro/apps/apocalipse/components/page.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #ececec;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  padding-bottom: 15px;\n  overflow: auto;\n'], ['\n  background-color: #ececec;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  padding-bottom: 15px;\n  overflow: auto;\n']);

var Body = _styledComponents2.default.div(_templateObject);

var Page = function Page(props) {
  return _react2.default.createElement(Body, { className: 'body', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('div', { className: props.withoutContainer ? '' : 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAD3yTq68bvCM8xkUSaByG3LETyCQaRzmU', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), !props.withoutCard && _react2.default.createElement(_card2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.children), props.withoutCard && _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, props.children)));
};

Page.propTypes = {
  withoutContainer: _propTypes.PropTypes.bool,
  withoutCard: _propTypes.PropTypes.bool
};
exports.default = Page;