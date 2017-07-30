webpackHotUpdate(0,{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(226);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(188);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _puiReactFlexGrids = __webpack_require__(232);

	var _Navigation = __webpack_require__(322);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _Nav_Elements = __webpack_require__(498);

	var _Nav_Elements2 = _interopRequireDefault(_Nav_Elements);

	var _Info_Bar = __webpack_require__(618);

	var _Info_Bar2 = _interopRequireDefault(_Info_Bar);

	var _Messenger = __webpack_require__(604);

	var _Messenger2 = _interopRequireDefault(_Messenger);

	var _Chat = __webpack_require__(500);

	var _Chat2 = _interopRequireDefault(_Chat);

	var _Finder = __webpack_require__(619);

	var _Finder2 = _interopRequireDefault(_Finder);

	var _Carousel_Content = __webpack_require__(632);

	var _Carousel_Content2 = _interopRequireDefault(_Carousel_Content);

	var _sockets = __webpack_require__(501);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The Entry Point
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The extra line between the end of the @file docblock
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and the file-closure is important.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	/******** COMPONENTS
	*
	*
	*
	*************/

	//import Search from './components/Search';


	/********
	* UTILITIES
	*
	* loading socke streams
	************/


	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      mounted: false,
	      id: '',
	      connected: false,
	      port: ''
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      _sockets.socket.on('connect', function () {
	        _this2.setState({
	          id: _sockets.socket.id,
	          connected: _sockets.socket.connected,
	          port: _sockets.socket.io.engine.port
	        });
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ mounted: true });x;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'content' },
	        _react2.default.createElement(
	          _Navigation2.default,
	          null,
	          _Nav_Elements2.default
	        ),
	        _react2.default.createElement(_Info_Bar2.default, { socket: _sockets.socket }),
	        _react2.default.createElement(
	          _Carousel_Content2.default,
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_Messenger2.default, { socket: _sockets.socket }),
	            _react2.default.createElement(_Chat2.default, { socket: _sockets.socket }),
	            _react2.default.createElement(_Finder2.default, { socket: _sockets.socket })
	          ),
	          this.props.children
	        ),
	        _react2.default.createElement('div', { className: 'container', id: 'modules' })
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	;
	exports.default = App;

/***/ })

})