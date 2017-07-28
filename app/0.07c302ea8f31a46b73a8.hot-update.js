webpackHotUpdate(0,{

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(602);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _puiReactFlexGrids = __webpack_require__(232);

	var _puiReactInputs = __webpack_require__(605);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function Item_Collection(props) {
	  //console.log(props);
	  return _react2.default.createElement(
	    'li',
	    { className: 'list_content collection' },
	    Object.keys(props.data).map(function (item, i) {
	      console.log('list:', item + " " + props.data[item] + " " + i);
	      return _react2.default.createElement(
	        'p',
	        { key: i },
	        _react2.default.createElement(
	          'b',
	          null,
	          item,
	          ': '
	        ),
	        props.data[item]
	      );
	    })
	  );
	}
	function Item_Error(props) {
	  return _react2.default.createElement(
	    'li',
	    { className: 'list_content error' },
	    props.data,
	    ' '
	  );
	}

	function Item_List(props) {
	  return _react2.default.createElement(
	    'li',
	    { className: 'list_content collection' },
	    Object.keys(props.data).map(function (item) {
	      if (props.data[item]) {
	        return _react2.default.createElement(
	          'p',
	          { key: item },
	          props.data[item]
	        );
	      }
	    })
	  );
	}
	function Item_Message(props) {
	  return _react2.default.createElement(
	    'li',
	    { className: 'list_content message' },
	    props.data,
	    ' '
	  );
	}
	function Action_Buttons(props) {
	  return _react2.default.createElement(
	    'li',
	    { className: 'list_content message' },
	    props.data,
	    ' '
	  );
	}

	var Form = function (_React$Component) {
	  _inherits(Form, _React$Component);

	  function Form(props) {
	    _classCallCheck(this, Form);

	    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
	  }

	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'Home' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Form'
	        )
	      );
	    }
	  }]);

	  return Form;
	}(_react2.default.Component);

	;

	var Control_Board = function (_React$Component2) {
	  _inherits(Control_Board, _React$Component2);

	  function Control_Board(props) {
	    _classCallCheck(this, Control_Board);

	    var _this2 = _possibleConstructorReturn(this, (Control_Board.__proto__ || Object.getPrototypeOf(Control_Board)).call(this, props));

	    _this2.getClientHeader = function (e) {
	      e.preventDefault();
	      console.log('clicked');
	      _this2.props.socket.emit('sys', 'client');
	    };

	    _this2.handleOnChange = function (e) {
	      e.preventDefault();
	      _this2.setState({ input: e.target.value });
	    };

	    _this2.handleOnSubmit = function (e) {
	      e.preventDefault();
	      var form = e.target;
	      var content = form.elements['content'].value;
	      var allMessages = _this2.state.messages;
	      allMessages.push({ type: 'string', name: 'self', data: content });
	      _this2.setState({
	        messages: allMessages
	      });

	      _this2.props.socket.emit('exec', content);
	      _this2.setState({ input: '' });
	    };

	    _this2.state = {
	      input: '',
	      connection: false,
	      output: '',
	      messages: []

	    };
	    _this2.getClientHeader = _this2.getClientHeader.bind(_this2);

	    _this2.handleOnChange = _this2.handleOnChange.bind(_this2);
	    _this2.handleOnSubmit = _this2.handleOnSubmit.bind(_this2);
	    _this2._handleMessageEvent = _this2._handleMessageEvent.bind(_this2);
	    return _this2;
	  }

	  _createClass(Control_Board, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;

	      console.log(this.props.socket);
	      this.props.socket.on('connect', function () {
	        _this3.setState({
	          connection: true
	        });
	        //this.props.socket.emit('sys', 'client');
	      });
	      this._handleMessageEvent();
	    }
	  }, {
	    key: '_handleMessageEvent',
	    value: function _handleMessageEvent() {
	      var _this4 = this;

	      this.props.socket.on('display', function (inboundMessage) {
	        var allMessages = _this4.state.messages;
	        allMessages.push(inboundMessage);
	        _this4.setState({
	          messages: allMessages
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.state.messages);
	      return _react2.default.createElement(
	        'div',
	        { id: 'messenger' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Messenger'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.getClientHeader, className: 'btn btn-sm btn-default', type: 'button', 'aria-label': 'button' },
	          ' Client Header'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.getFolder, className: 'btn btn-sm btn-default', type: 'button', 'aria-label': 'button' },
	          'Folder'
	        ),
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.handleOnSubmit },
	          _react2.default.createElement(_puiReactInputs.Input, { search: true,
	            name: 'content',
	            value: this.state.input,
	            onChange: this.handleOnChange,
	            label: 'Search For Answers'
	          }),
	          _react2.default.createElement('input', { className: 'btn btn-default-alt', type: 'submit', value: 'Submit' })
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'stream' },
	          this.state.messages.reverse().map(function (object, i) {
	            console.log(object.name, object);
	            switch (object.name) {
	              case 'client_header':
	                return _react2.default.createElement(Item_Collection, { data: object.data, key: i });
	                break;
	              case 'error':
	                return _react2.default.createElement(Item_Error, { data: object.data, key: i });
	                break;
	              case 'message':
	                return _react2.default.createElement(Item_Message, { data: object.data, key: i });
	                break;
	              case 'self':
	                return _react2.default.createElement(Item_Message, { data: object.data, key: i });
	                break;
	              default:
	                return _react2.default.createElement(Item_List, { data: object.data, key: i });
	                break;
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return Control_Board;
	}(_react2.default.Component);

	;

	exports.default = Control_Board;

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

	/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
	'use strict';

	exports.__esModule = true;
	exports.Input = undefined;

	var _extends2 = __webpack_require__(313);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(233);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _classCallCheck2 = __webpack_require__(234);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(235);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(304);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _classnames = __webpack_require__(318);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _puiReactIconography = __webpack_require__(392);

	var _puiReactHelpers = __webpack_require__(312);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(188);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	__webpack_require__(606);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Input = exports.Input = function (_React$Component) {
	  (0, _inherits3.default)(Input, _React$Component);

	  function Input() {
	    (0, _classCallCheck3.default)(this, Input);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }

	  Input.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.autoFocus) this.input.focus();
	  };

	  Input.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props,
	        className = _props.className,
	        autoFocus = _props.autoFocus,
	        displayError = _props.displayError,
	        errorMessage = _props.errorMessage,
	        inputClassName = _props.inputClassName,
	        label = _props.label,
	        labelClassName = _props.labelClassName,
	        search = _props.search,
	        size = _props.size,
	        success = _props.success,
	        leftIcon = _props.leftIcon,
	        props = (0, _objectWithoutProperties3.default)(_props, ['className', 'autoFocus', 'displayError', 'errorMessage', 'inputClassName', 'label', 'labelClassName', 'search', 'size', 'success', 'leftIcon']);
	    var id = props.id,
	        placeholder = props.placeholder;

	    var successClassName = success ? 'form-group-right-icon' : '';
	    var formClasses = (0, _classnames2.default)('form-group', { 'form-group-left-icon': search || leftIcon }, className, successClassName, { 'has-error': displayError });
	    var labelClasses = (0, _classnames2.default)('control-label', labelClassName, {
	      'label-lg': size === 'large',
	      'label-sm': size === 'small'
	    });
	    var inputClassNames = (0, _classnames2.default)(inputClassName, {
	      'input-lg': size === 'large',
	      'input-sm': size === 'small'
	    });
	    var inputProps = (0, _puiReactHelpers.mergeProps)(props, { className: inputClassNames, 'aria-label': placeholder });
	    var leftIconSrc = leftIcon || search && 'search';
	    var customLeftIcon = typeof leftIconSrc === 'string' ? _react2.default.createElement(_puiReactIconography.Icon, { className: 'input-icon', src: leftIconSrc }) : _react2.default.createElement(
	      'span',
	      { className: 'input-icon' },
	      leftIconSrc
	    );

	    return _react2.default.createElement(
	      'div',
	      { className: formClasses },
	      label && _react2.default.createElement(
	        'label',
	        { htmlFor: id, className: labelClasses },
	        label
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'input-wrapper' },
	        _react2.default.createElement('input', (0, _extends3.default)({}, inputProps, { ref: function ref(_ref) {
	            return _this2.input = _ref;
	          } })),
	        leftIconSrc && customLeftIcon,
	        success && _react2.default.createElement(_puiReactIconography.Icon, { className: 'success', src: 'check' })
	      ),
	      displayError && _react2.default.createElement(
	        'div',
	        { className: 'help-block' },
	        errorMessage ? errorMessage : 'Please enter your ' + label.toLowerCase() + '.'
	      )
	    );
	  };

	  return Input;
	}(_react2.default.Component);

	Input.propTypes = {
	  autoFocus: _propTypes2.default.bool,
	  displayError: _propTypes2.default.bool,
	  errorMessage: _propTypes2.default.node,
	  id: _propTypes2.default.string,
	  inputClassName: _propTypes2.default.string,
	  label: _propTypes2.default.node,
	  labelClassName: _propTypes2.default.string,
	  placeholder: _propTypes2.default.string,
	  search: _propTypes2.default.bool,
	  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
	  success: _propTypes2.default.bool,
	  leftIcon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object])
	};

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

	try {
	  __webpack_require__(378);
	  __webpack_require__(607);
	} catch(e) {
	}


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(608);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(231)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(608, function() {
				var newContent = __webpack_require__(608);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(228)();
	// imports


	// module
	exports.push([module.id, "input[type=\"email\"], input[type=\"number\"], input[type=\"search\"], input[type=\"text\"], input[type=\"tel\"], input[type=\"url\"], input[type=\"password\"], input[type=\"date\"], input:not([type]), textarea, select {\n  display: block;\n  width: 100%;\n  height: 32px;\n  padding: 4px 8px;\n  font-size: 14px;\n  background-color: #fff;\n  border: 1px solid #DFE5E8;\n  border-radius: 2px;\n  -webkit-appearance: none;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: #243641; }\n\nselect {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM2MDc1ODAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQsNSwxMiwxN2wyLjgzLDIuODNMMjQsMTAuNjZsOS4xNyw5LjE3TDM2LDE3WiIvPjxwYXRoIGQ9Ik0zMy4xNywyOC4xNywyNCwzNy4zNGwtOS4xNy05LjE3TDEyLDMxLDI0LDQzLDM2LDMxWiIvPjwvc3ZnPgo=);\n  background-size: 18px 18px;\n  background-position: right 6px bottom 6px;\n  background-repeat: no-repeat;\n  padding-right: 32px; }\n\ninput[type=\"email\"], input[type=\"number\"], input[type=\"search\"], input[type=\"text\"], input[type=\"tel\"], input[type=\"url\"], input[type=\"password\"], input[type=\"date\"], input:not([type]), textarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\ninput[type=\"email\"]:focus, input[type=\"number\"]:focus, input[type=\"search\"]:focus, input[type=\"text\"]:focus, input[type=\"tel\"]:focus, input[type=\"url\"]:focus, input[type=\"password\"]:focus, input[type=\"date\"]:focus, input:not([type]):focus, textarea:focus, select:focus {\n  border: 1px solid #607580;\n  outline: 0; }\n\nfieldset {\n  padding: 0;\n  border-width: 0; }\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  display: inline;\n  margin-right: 2px; }\n\n.form-group-checkbox label {\n  display: inline-block;\n  font-weight: 400; }\n\nlabel, legend {\n  color: #243641; }\n\nhtml body input.disabled, html body input:disabled, html body textarea.disabled, html body textarea:disabled, html body select.disabled, html body select:disabled {\n  background-color: #ecefef;\n  cursor: not-allowed;\n  color: #607580;\n  border-color: #DFE5E8; }\n\nselect :not(input[type=\"radio\"]):not(input[type=\"checkbox\"]), input :not(input[type=\"radio\"]):not(input[type=\"checkbox\"]) {\n  height: 32px; }\n\nselect.input-lg, input.input-lg {\n  height: 40px;\n  font-size: 18px; }\n\nselect.input-lg ~ .icon, input.input-lg ~ .icon {\n  font-size: 20px;\n  right: 10px;\n  bottom: 10px; }\n\nselect.input-sm, input.input-sm {\n  padding-top: 0;\n  padding-bottom: 0;\n  height: 24px;\n  font-size: 14px; }\n\nselect.input-sm ~ .icon, input.input-sm ~ .icon {\n  font-size: 12px;\n  right: 6px;\n  bottom: 6px; }\n\nselect.input-lg {\n  background-size: 20px 20px;\n  background-position: right 9px bottom 9px; }\n\nselect.input-sm {\n  background-size: 14px 14px;\n  background-position: right 4px bottom 4px; }\n\n.form-control-static {\n  line-height: 32px;\n  margin: 0; }\n\n.form-group {\n  margin-bottom: 16px;\n  position: relative; }\n\n.form-group label {\n  position: relative;\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 32px;\n  margin-bottom: 0;\n  margin-right: 8px; }\n\n.form-group label .icon {\n  pointer-events: initial;\n  position: relative;\n  font-size: 16px;\n  bottom: 0;\n  right: 0; }\n\n.form-group label.label-sm {\n  font-size: 12px;\n  line-height: 24px; }\n\n.form-group label.label-lg {\n  font-size: 16px;\n  line-height: 40px; }\n\n.form-group .dropdown .icon:not(.icon-toggle) {\n  pointer-events: initial;\n  position: relative;\n  font-size: 16px;\n  bottom: 0;\n  right: 0; }\n\n.form-group .icon {\n  pointer-events: none;\n  position: absolute;\n  right: 7px;\n  bottom: 7px;\n  font-size: 18px; }\n\n.form-group .icon svg {\n  fill: #607580; }\n\n.form-group .icon.valid, .form-group .icon.invalid {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  font-size: 16px; }\n\n.form-group .icon.valid svg {\n  fill: #5C9917; }\n\n.form-group .icon.invalid svg {\n  fill: #B31B22; }\n\n.form-group .btn-icon .icon {\n  pointer-events: initial;\n  position: relative;\n  right: inherit;\n  bottom: inherit; }\n\n.form-group .btn-icon .icon svg {\n  fill: inherit; }\n\n.form-group .btn-icon .icon.valid, .form-group .btn-icon .icon.invalid {\n  position: relative;\n  right: inherit;\n  top: inherit;\n  font-size: 18px; }\n\n.form-group .btn-icon .icon.valid svg {\n  fill: inherit; }\n\n.form-group .btn-icon .icon.invalid svg {\n  fill: inherit; }\n\n.form-group-search {\n  position: relative; }\n\n.form-group-search .icon {\n  position: absolute;\n  top: 50%;\n  left: 7px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  font-size: 18px; }\n\n.form-group-search input {\n  padding-left: 32px; }\n\n.form-lg label {\n  font-size: 16px;\n  line-height: 40; }\n\n.form-lg input {\n  height: 40px;\n  font-size: 16px; }\n\n.form-lg .icon {\n  font-size: 20px;\n  right: 10px;\n  bottom: 10px; }\n\n.radio input[type=\"radio\"], .radio-inline input[type=\"radio\"], .checkbox input[type=\"checkbox\"], .checkbox-inline input[type=\"checkbox\"] {\n  position: relative;\n  margin-left: 0;\n  margin-top: 0;\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  margin-right: 4px; }\n\n.radio-inline, .checkbox-inline {\n  padding-left: 0; }\n\n.radio-inline + .radio-inline, .checkbox-inline + .checkbox-inline {\n  margin-left: 8px; }\n\n.form-inline.form-lg label {\n  line-height: 40px; }\n\n.form-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: top; }\n\n.form-inline:not(.col) + .form-inline {\n  margin-left: 16px; }\n\n.form-inline:not(.col) + .btn {\n  margin-left: 16px; }\n\n.form-inline label {\n  margin-right: 8px;\n  line-height: 32px; }\n\n.form-inline .help-block {\n  right: 0; }\n\ninput[type=\"email\"].invalid, input[type=\"number\"].invalid, input[type=\"search\"].invalid, input[type=\"text\"].invalid, input[type=\"tel\"].invalid, input[type=\"url\"].invalid, input[type=\"password\"].invalid, input[type=\"date\"].invalid, input:not([type]).invalid, textarea.invalid {\n  border: 1px solid #B31B22; }\n\ninput[type=\"email\"].valid, input[type=\"number\"].valid, input[type=\"search\"].valid, input[type=\"text\"].valid, input[type=\"tel\"].valid, input[type=\"url\"].valid, input[type=\"password\"].valid, input[type=\"date\"].valid, input:not([type]).valid, textarea.valid {\n  border: 1px solid #5C9917; }\n\n.help-block {\n  position: absolute;\n  bottom: -16px;\n  font-size: 12px;\n  line-height: 16px; }\n\n.has-error .help-block {\n  color: #B31B22; }\n\n.has-error input, .has-error textarea, .has-error select {\n  border-color: #B31B22; }\n\n.toggle-switch {\n  position: absolute;\n  visibility: hidden; }\n\n.toggle-switch + label {\n  position: relative;\n  display: block;\n  background-color: #d4d9d9;\n  color: #282828;\n  -webkit-transition: background 0.4s;\n  transition: background 0.4s;\n  cursor: pointer;\n  outline: none;\n  text-indent: -99999px; }\n\n.toggle-switch + label.small {\n  height: 14px;\n  width: 26px;\n  border-radius: 14px; }\n\n.toggle-switch + label.small:after {\n  height: 12px;\n  width: 12px;\n  top: 1px;\n  left: 1px;\n  bottom: 1px; }\n\n.toggle-switch + label.medium {\n  height: 18px;\n  width: 33px;\n  border-radius: 18px; }\n\n.toggle-switch + label.medium:after {\n  height: 14px;\n  width: 14px;\n  top: 2px;\n  left: 2px;\n  bottom: 2px; }\n\n.toggle-switch + label.large {\n  height: 24px;\n  width: 43px;\n  border-radius: 24px; }\n\n.toggle-switch + label.large:after {\n  height: 19px;\n  width: 19px;\n  top: 3px;\n  left: 3px;\n  bottom: 3px; }\n\n.toggle-switch + label:after {\n  position: absolute;\n  display: block;\n  background-color: #fff;\n  -webkit-transition: margin 0.4s, background 0.4s;\n  transition: margin 0.4s, background 0.4s;\n  content: \"\";\n  border-radius: 50%; }\n\n.toggle-switch:checked + label {\n  background-color: #176799; }\n\n.toggle-switch:checked + label.small:after {\n  margin-left: 12px; }\n\n.toggle-switch:checked + label.medium:after {\n  margin-left: 14px; }\n\n.toggle-switch:checked + label.large:after {\n  margin-left: 19px; }\n\n.toggle-switch[disabled] + label {\n  opacity: .5;\n  filter: alpha(opacity=50); }\n\n.form-group-left-icon input {\n  padding-left: 32px; }\n\n.form-group-left-icon .input-icon {\n  position: absolute;\n  left: 7px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%); }\n\n.form-group-right-icon input {\n  padding-right: 32px; }\n\n.input-wrapper {\n  position: relative; }\n", ""]);

	// exports


/***/ })

})