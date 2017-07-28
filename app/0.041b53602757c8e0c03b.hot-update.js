webpackHotUpdate(0,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _puiReactFlexGrids = __webpack_require__(232);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function Item_Collection(props) {
	  console.log(props);
	  props.data.keys(groupItem).map(function (item) {
	    return console.log(groupItem + " " + item);
	  });
	  props.data.map(function (object, i) {
	    console.log(object);
	  });
	  return _react2.default.createElement(
	    'li',
	    null,
	    _react2.default.createElement(
	      'p',
	      null,
	      _react2.default.createElement(
	        'b',
	        null,
	        'Host: '
	      ),
	      props.data.host,
	      ' '
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      _react2.default.createElement(
	        'b',
	        null,
	        'Dnt: '
	      ),
	      props.data.disconnect,
	      ' '
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      _react2.default.createElement(
	        'b',
	        null,
	        'Referer: '
	      ),
	      props.data.referer,
	      ' '
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      _react2.default.createElement(
	        'b',
	        null,
	        'Accept: '
	      ),
	      props.data.accept,
	      ' '
	    )
	  );
	}
	function Item_Error(props) {
	  return _react2.default.createElement(
	    'li',
	    null,
	    props.data,
	    ' '
	  );
	}
	function Item_Message(props) {
	  return _react2.default.createElement(
	    'li',
	    null,
	    props.data,
	    ' '
	  );
	}

	var Control_Board = function (_React$Component) {
	  _inherits(Control_Board, _React$Component);

	  function Control_Board(props) {
	    _classCallCheck(this, Control_Board);

	    var _this = _possibleConstructorReturn(this, (Control_Board.__proto__ || Object.getPrototypeOf(Control_Board)).call(this, props));

	    _this.getClientHeader = function (e) {
	      e.preventDefault();
	      console.log('clicked');
	      _this.props.socket.emit('sys', 'client');
	      _this.props.socket.on('connect', function () {
	        _this.props.socket.emit('sys', 'client');
	      });
	    };

	    _this.state = {
	      input: '',
	      connection: false,
	      output: '',
	      messages: []

	    };
	    _this.getClientHeader = _this.getClientHeader.bind(_this);
	    _this._handleMessageEvent = _this._handleMessageEvent.bind(_this);
	    return _this;
	  }

	  _createClass(Control_Board, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      console.log(this.props.socket);
	      this.props.socket.on('connect', function () {
	        _this2.setState({
	          connection: true
	        });
	        //this.props.socket.emit('sys', 'client');
	      });
	      this._handleMessageEvent();
	    }
	  }, {
	    key: '_handleMessageEvent',
	    value: function _handleMessageEvent() {
	      var _this3 = this;

	      this.props.socket.on('display', function (inboundMessage) {
	        console.log(inboundMessage);
	        var allMessages = _this3.state.messages;
	        allMessages.push(inboundMessage);
	        _this3.setState({
	          messages: allMessages
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        { id: 'Control_Board' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Control Board'
	        ),
	        _react2.default.createElement(
	          _puiReactFlexGrids.Grid,
	          { className: 'grid-show', gutter: false },
	          _react2.default.createElement(
	            _puiReactFlexGrids.FlexCol,
	            { col: 8 },
	            _react2.default.createElement(
	              'button',
	              { onClick: this.getClientHeader },
	              'get Client Header'
	            )
	          ),
	          _react2.default.createElement(_puiReactFlexGrids.FlexCol, { col: 8 }),
	          _react2.default.createElement(
	            _puiReactFlexGrids.FlexCol,
	            { col: 8 },
	            _react2.default.createElement(
	              'ul',
	              null,
	              this.state.messages.map(function (object, i) {
	                console.log(object);

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
	                  default:
	                }
	              })
	            )
	          )
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