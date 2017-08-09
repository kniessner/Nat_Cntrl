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

	var _Info_Bar = __webpack_require__(499);

	var _Info_Bar2 = _interopRequireDefault(_Info_Bar);

	var _Messenger = __webpack_require__(504);

	var _Messenger2 = _interopRequireDefault(_Messenger);

	var _Chat = __webpack_require__(513);

	var _Chat2 = _interopRequireDefault(_Chat);

	var _Finder = __webpack_require__(514);

	var _Finder2 = _interopRequireDefault(_Finder);

	var _Carousel_Content = __webpack_require__(515);

	var _Carousel_Content2 = _interopRequireDefault(_Carousel_Content);

	var _sockets = __webpack_require__(527);

	var _WpApi = __webpack_require__(631);

	var _WpApi2 = _interopRequireDefault(_WpApi);

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


	var Sub_Elements = function Sub_Elements() {
	  return _react2.default.createElement(
	    'ul',
	    null,
	    _react2.default.createElement(
	      'li',
	      { className: 'sub_menu_element' },
	      _react2.default.createElement(
	        Link,
	        { to: '/' },
	        'Home'
	      )
	    ),
	    _react2.default.createElement(
	      'li',
	      { className: 'sub_menu_element' },
	      _react2.default.createElement(
	        Link,
	        { to: '/dashboard' },
	        'Try'
	      )
	    ),
	    _react2.default.createElement(
	      'li',
	      { className: 'sub_menu_element' },
	      _react2.default.createElement(
	        Link,
	        { to: '/modules' },
	        'Modules'
	      )
	    )
	  );
	};

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
	      this.setState({ mounted: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      _WpApi2.default.getPages1();
	      return _react2.default.createElement(
	        'div',
	        { id: 'content' },
	        _react2.default.createElement(_Navigation2.default, { main_elements: _Nav_Elements2.default, sub_elements: Sub_Elements }),
	        _react2.default.createElement(_Info_Bar2.default, { socket: _sockets.socket }),
	        _react2.default.createElement(
	          _Carousel_Content2.default,
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('img', { src: 'http://localhost:3030/images/1.jpeg' })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('img', { src: './images/2.jpeg' })
	          ),
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

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WpApi = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _axios = __webpack_require__(632);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WpApi = exports.WpApi = function () {
	    function WpApi() {
	        _classCallCheck(this, WpApi);

	        var appUrl = 'http://kniessner.com/complex/'; // Wordpress installation url
	        this.pagesEndPoint = appUrl + '/wp-json/wp/v2/pages'; // Endpoint for getting Wordpress Pages
	        this.postsEndPoint = appUrl + '/wp-json/wp/v2/posts'; // Endpoint for getting Wordpress Posts
	        this.mediaEndPoint = appUrl + '/wp-json/wp/v2/media'; // Endpoint for getting Wordpress Posts
	    }

	    // Method for getting data from the provided end point url


	    _createClass(WpApi, [{
	        key: 'api',
	        value: function api(endPoint) {
	            return new Promise(function (resolve, reject) {
	                _axios2.default.get(endPoint, {
	                    params: {
	                        per_page: 100
	                    }
	                }).then(function (response) {
	                    resolve(response.data);
	                }).catch(function (error) {
	                    reject(error);
	                });
	            });
	        }

	        // Method for getting Pages data

	    }, {
	        key: 'getPages',
	        value: function getPages(cb) {
	            var _this = this;

	            this.api(this.pagesEndPoint).then(function (response) {
	                _this.getPosts(response, cb);
	            });
	            return true;
	        }
	    }, {
	        key: 'getPages1',
	        value: function getPages1() {
	            this.api(this.pagesEndPoint).then(function (response) {
	                return response;
	            });
	        }
	        // Method for getting Posts data

	    }, {
	        key: 'getPosts',
	        value: function getPosts(pages, cb) {
	            var _this2 = this;

	            this.api(this.postsEndPoint).then(function (response) {
	                var posts = response;
	                var payload = { pages: pages, posts: posts };

	                _this2.getSuccess(payload); // Pass returned data to the store
	                cb(payload); // This callback will be used for dynamic rout building
	            });
	            return true;
	        }
	    }, {
	        key: 'getMedia',
	        value: function getMedia(cb) {
	            var _this3 = this;

	            this.api(this.mediaEndPoint).then(function (response) {

	                _this3.getSuccess(payload); // Pass returned data to the store
	                cb(payload); // This callback will be used for dynamic rout building
	            });
	            return true;
	        }

	        // This returnes an object with Pages and Posts data together
	        // The Alt Store will listen for this method to fire and will store the returned data

	    }, {
	        key: 'getSuccess',
	        value: function getSuccess(payload) {
	            return payload;
	        }
	    }]);

	    return WpApi;
	}();

/***/ })

})