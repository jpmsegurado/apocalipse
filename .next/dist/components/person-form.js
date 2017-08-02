'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _values = require('../values');

var _values2 = _interopRequireDefault(_values);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

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