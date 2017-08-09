'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joaopedro/apps/apocalipse/components/page.js';


var Page = function Page(props) {
  return _react2.default.createElement('div', { style: { margin: 0, padding: 0 }, className: props.withoutContainer ? '' : 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAD3yTq68bvCM8xkUSaByG3LETyCQaRzmU', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), props.children);
};

Page.propTypes = {
  withoutContainer: _react.PropTypes.boolean
};

exports.default = Page;