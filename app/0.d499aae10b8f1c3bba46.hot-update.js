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

	var _puiReactLabels = __webpack_require__(614);

	var _Navigation = __webpack_require__(322);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _Nav_Elements = __webpack_require__(498);

	var _Nav_Elements2 = _interopRequireDefault(_Nav_Elements);

	var _Messenger = __webpack_require__(604);

	var _Messenger2 = _interopRequireDefault(_Messenger);

	var _Chat = __webpack_require__(500);

	var _Chat2 = _interopRequireDefault(_Chat);

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
	//import '../../../node_modules/pui-css-all';
	//import '../node_modules/pui-css-all';

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
	      mounted: false
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ mounted: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log('App');
	      return _react2.default.createElement(
	        'div',
	        { id: 'content' },
	        _react2.default.createElement(
	          _Navigation2.default,
	          null,
	          _Nav_Elements2.default
	        ),
	        _react2.default.createElement(
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
	                _puiReactLabels.Label,
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
	              'Ip: ',
	              _react2.default.createElement(
	                _puiReactLabels.Label,
	                null,
	                '192.168.178.0'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'data_wrap' },
	            _react2.default.createElement(
	              'h5',
	              null,
	              'ID:  ',
	              _react2.default.createElement(
	                _puiReactLabels.Label,
	                null,
	                '#',
	                _sockets.socket.on('connect', function () {
	                  return _react2.default.createElement(
	                    'div',
	                    null,
	                    ' ',
	                    _sockets.socket.id,
	                    ' '
	                  );
	                })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container', id: 'modules' },
	          _react2.default.createElement(_Messenger2.default, { socket: _sockets.socket }),
	          _react2.default.createElement(_Chat2.default, { socket: _sockets.socket })
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	;
	exports.default = App;

/***/ })

})