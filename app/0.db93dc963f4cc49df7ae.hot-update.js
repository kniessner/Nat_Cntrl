webpackHotUpdate(0,{

/***/ 500:
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

	var _puiReactPanels = __webpack_require__(609);

	var _puiReactDividers = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function Item(props) {
	  return _react2.default.createElement(
	    'li',
	    { className: 'list_content' },
	    props.data.from,
	    ' : ',
	    _react2.default.createElement(
	      'b',
	      null,
	      props.data.title
	    ),
	    ' -> ',
	    props.data.msg
	  );
	}

	function Chat_Messages(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    props.data.map(function (object, i) {
	      return _react2.default.createElement(Item, { data: object, key: i });
	    })
	  );
	}

	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);

	  function Chat(props) {
	    _classCallCheck(this, Chat);

	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

	    _this.handleOnChange = function (e) {
	      e.preventDefault();
	      _this.setState({ input: e.target.value });
	    };

	    _this.handleOnSubmit = function (e) {
	      e.preventDefault();
	      var form = e.target;
	      var content = form.elements['content'].value;
	      _this.props.socket.emit('message', {
	        'from': _this.props.socket.id,
	        'title': '-Y> ' + window.location.hostname,
	        'msg': content
	      });
	      _this.setState({ input: '' });
	    };

	    _this.state = {
	      input: '',
	      output: '',
	      messages: []

	    };

	    _this.handleOnChange = _this.handleOnChange.bind(_this);
	    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
	    _this._handleMessageEvent = _this._handleMessageEvent.bind(_this);

	    return _this;
	  }

	  _createClass(Chat, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var example = { 'from': 'you:' + window.location.hostname,
	        'title': 'testing',
	        'msg': 'you are online'
	      };
	      var allMessages = this.state.messages;
	      allMessages.push(example);
	      this.setState({
	        messages: allMessages
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._handleMessageEvent();
	    }
	  }, {
	    key: '_handleMessageEvent',
	    value: function _handleMessageEvent() {
	      var _this2 = this;

	      this.props.socket.on('message', function (inboundMessage) {
	        var allMessages = _this2.state.messages;
	        allMessages.push(inboundMessage);
	        _this2.setState({
	          messages: allMessages
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'messenger' },
	        _react2.default.createElement(
	          _puiReactPanels.Panel,
	          { className: 'bg-neutral-11 box-shadow-1',
	            header: 'Messanger',
	            subtitle: 'Write with someone',
	            actions: _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'button',
	                { className: 'btn btn-default mrl' },
	                'Go'
	              ),
	              _react2.default.createElement(
	                'button',
	                { className: 'btn btn-default-alt' },
	                'Stop'
	              )
	            ) },
	          'Open Channel'
	        ),
	        _react2.default.createElement(_puiReactDividers.Divider, { inverse: true, size: 'large' }),
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.handleOnSubmit },
	          _react2.default.createElement(_puiReactInputs.Input, { search: true,
	            name: 'content',
	            value: this.state.input,
	            onChange: this.handleOnChange,
	            label: 'Send a message',
	            placeholder: 'Say something' }),
	          _react2.default.createElement('input', { className: 'btn btn-default-alt', type: 'submit', value: 'Submit' })
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'stream' },
	          this.state.messages.map(function (object, i) {
	            return _react2.default.createElement(Item, { data: object, key: i });
	          })
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.state.input
	        )
	      );
	    }
	  }]);

	  return Chat;
	}(_react2.default.Component);

	;
	exports.default = Chat;

/***/ })

})