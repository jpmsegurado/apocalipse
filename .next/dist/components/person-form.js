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