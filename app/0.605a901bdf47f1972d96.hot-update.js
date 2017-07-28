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

	var _puiReactPanels = __webpack_require__(609);

	var _puiReactDividers = __webpack_require__(558);

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
	        { id: 'commander' },
	        _react2.default.createElement(
	          _puiReactPanels.Panel,
	          { className: 'bg-neutral-11 box-shadow-1',
	            header: 'Commander',
	            subtitle: 'Execute Shell Commands',
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
	          _react2.default.createElement(
	            'button',
	            { onClick: this.getClientHeader, className: 'btn btn-sm btn-default', type: 'button', 'aria-label': 'button' },
	            ' Client Header'
	          )
	        ),
	        _react2.default.createElement(_puiReactDividers.Divider, { size: 'large' }),
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.handleOnSubmit },
	          _react2.default.createElement(_puiReactInputs.Input, { search: true,
	            name: 'content',
	            value: this.state.input,
	            onChange: this.handleOnChange,
	            label: 'Run CMD',
	            placeholder: 'GET SERVERINFOS' }),
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

/***/ })

})