webpackHotUpdate(0,{

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Info_Bar = function (_React$Component) {
	  _inherits(Info_Bar, _React$Component);

	  function Info_Bar(props) {
	    _classCallCheck(this, Info_Bar);

	    var _this = _possibleConstructorReturn(this, (Info_Bar.__proto__ || Object.getPrototypeOf(Info_Bar)).call(this, props));

	    _this.state = {
	      mounted: false,
	      id: '',
	      connected: false,
	      port: ''
	    };
	    return _this;
	  }

	  _createClass(Info_Bar, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      this.props.socket.on('connect', function () {
	        _this2.setState({
	          id: _this2.props.socket.id,
	          connected: _this2.props.socket.connected,
	          port: _this2.props.socket.io.engine.port
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'info_bar' },
	        _react2.default.createElement(
	          'span',
	          { className: 'data_wrap' },
	          _react2.default.createElement(
	            'h5',
	            null,
	            'Host: ',
	            _react2.default.createElement(
	              Label,
	              null,
	              window.location.hostname
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'data_wrap' },
	          _react2.default.createElement(
	            'h5',
	            null,
	            'Port: ',
	            _react2.default.createElement(
	              Label,
	              null,
	              this.state.port,
	              ' '
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'data_wrap' },
	          _react2.default.createElement(
	            'h5',
	            null,
	            'ID: ',
	            _react2.default.createElement(
	              Label,
	              null,
	              '#',
	              this.state.id
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'data_wrap' },
	          _react2.default.createElement(
	            'h5',
	            null,
	            _react2.default.createElement(
	              Label,
	              null,
	              this.state.connected ? 'connected' : 'disconnected'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Info_Bar;
	}(_react2.default.Component);

	;
	exports.default = Info_Bar;

/***/ })

})