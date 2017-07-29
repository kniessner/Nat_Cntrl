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

	var _Carousel = __webpack_require__(620);

	var _Carousel2 = _interopRequireDefault(_Carousel);

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
	      this.setState({ mounted: true });
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
	          'div',
	          { className: 'container', id: 'modules' },
	          _react2.default.createElement(_Messenger2.default, { socket: _sockets.socket }),
	          _react2.default.createElement(_Chat2.default, { socket: _sockets.socket }),
	          _react2.default.createElement(_Finder2.default, { socket: _sockets.socket })
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	;
	exports.default = App;

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(621);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(38);
	var Carousel = __webpack_require__(623).Carousel;
	//https://github.com/leandrowd/react-responsive-carousel
	//http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=PropTypes&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel

	var CustSlider = function (_React$Component) {
	    _inherits(CustSlider, _React$Component);

	    function CustSlider() {
	        _classCallCheck(this, CustSlider);

	        return _possibleConstructorReturn(this, (CustSlider.__proto__ || Object.getPrototypeOf(CustSlider)).apply(this, arguments));
	    }

	    _createClass(CustSlider, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                Carousel,
	                { axis: 'horizontal|vertical', dynamicHeight: true, emulateTouch: true },
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement('img', { src: './images/1.jpeg' }),
	                    React.createElement(
	                        'p',
	                        { className: 'legend' },
	                        'Legend 1'
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement('img', { src: './images/2.jpeg' }),
	                    React.createElement(
	                        'p',
	                        { className: 'legend' },
	                        'Legend 2'
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement('img', { src: './images/3.jpeg' }),
	                    React.createElement(
	                        'p',
	                        { className: 'legend' },
	                        'Legend 3'
	                    )
	                )
	            );
	        }
	    }]);

	    return CustSlider;
	}(React.Component);

	;
	exports.default = CustSlider;

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(622);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(231)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(622, function() {
				var newContent = __webpack_require__(622);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(228)();
	// imports


	// module
	exports.push([module.id, "/********************************************\n\tBREAKPOINT WIDTHS\n********************************************/\n/********************************************\n\tFONTS\n********************************************/\n/********************************************\n\tCOLOURS\n********************************************/\n.carousel .control-arrow, .carousel.carousel-slider .control-arrow {\n  -webkit-transition: all 0.25s ease-in;\n  -moz-transition: all 0.25s ease-in;\n  -ms-transition: all 0.25s ease-in;\n  -o-transition: all 0.25s ease-in;\n  transition: all 0.25s ease-in;\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n  position: absolute;\n  z-index: 2;\n  top: 20px;\n  background: none;\n  border: 0;\n  font-size: 32px;\n  cursor: pointer; }\n\n.carousel .control-arrow:hover {\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {\n  margin: 0 5px;\n  display: inline-block;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  content: ''; }\n\n.carousel .control-disabled.control-arrow {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  cursor: inherit;\n  display: none; }\n\n.carousel .control-prev.control-arrow {\n  left: 0; }\n\n.carousel .control-prev.control-arrow:before {\n  border-right: 8px solid #fff; }\n\n.carousel .control-next.control-arrow {\n  right: 0; }\n\n.carousel .control-next.control-arrow:before {\n  border-left: 8px solid #fff; }\n\n.carousel {\n  position: relative;\n  width: 100%; }\n\n.carousel * {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.carousel button {\n  outline: 0;\n  border: 0;\n  background: none; }\n\n.carousel img {\n  width: 100%;\n  display: inline-block;\n  pointer-events: none; }\n\n.carousel .carousel {\n  position: relative; }\n\n.carousel .control-arrow {\n  top: 50%;\n  margin-top: -13px;\n  font-size: 18px; }\n\n.carousel .thumbs-wrapper {\n  margin: 20px;\n  overflow: hidden; }\n\n.carousel .thumbs {\n  -webkit-transition: all 0.15s ease-in;\n  -moz-transition: all 0.15s ease-in;\n  -ms-transition: all 0.15s ease-in;\n  -o-transition: all 0.15s ease-in;\n  transition: all 0.15s ease-in;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  position: relative;\n  list-style: none;\n  white-space: nowrap; }\n\n.carousel .thumb {\n  -webkit-transition: border 0.15s ease-in;\n  -moz-transition: border 0.15s ease-in;\n  -ms-transition: border 0.15s ease-in;\n  -o-transition: border 0.15s ease-in;\n  transition: border 0.15s ease-in;\n  display: inline-block;\n  width: 80px;\n  margin-right: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  border: 3px solid #fff;\n  padding: 2px; }\n\n.carousel .thumb.selected, .carousel .thumb:hover {\n  border: 3px solid #333;\n  padding: 2px; }\n\n.carousel .thumb img {\n  vertical-align: top; }\n\n.carousel.carousel-slider {\n  position: relative;\n  margin: 0;\n  overflow: hidden; }\n\n.carousel.carousel-slider .control-arrow {\n  top: 0;\n  color: #fff;\n  font-size: 26px;\n  bottom: 0;\n  margin-top: 0;\n  padding: 5px; }\n\n.carousel.carousel-slider .control-arrow:hover {\n  background: rgba(0, 0, 0, 0.2); }\n\n.carousel .slider-wrapper {\n  overflow: hidden;\n  margin: auto;\n  width: 100%;\n  -webkit-transition: height 0.15s ease-in;\n  -moz-transition: height 0.15s ease-in;\n  -ms-transition: height 0.15s ease-in;\n  -o-transition: height 0.15s ease-in;\n  transition: height 0.15s ease-in; }\n\n.carousel .slider-wrapper.axis-horizontal .slider {\n  -ms-box-orient: horizontal;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: flex; }\n\n.carousel .slider-wrapper.axis-horizontal .slider .slide {\n  flex-direction: column;\n  flex-flow: column; }\n\n.carousel .slider-wrapper.axis-vertical {\n  -ms-box-orient: horizontal;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: flex; }\n\n.carousel .slider-wrapper.axis-vertical .slider {\n  -webkit-flex-direction: column;\n  flex-direction: column; }\n\n.carousel .slider {\n  position: relative;\n  list-style: none;\n  width: 100%; }\n\n.carousel .slider.animated {\n  -webkit-transition: all 0.35s ease-in-out;\n  -moz-transition: all 0.35s ease-in-out;\n  -ms-transition: all 0.35s ease-in-out;\n  -o-transition: all 0.35s ease-in-out;\n  transition: all 0.35s ease-in-out; }\n\n.carousel .slide {\n  min-width: 100%;\n  margin: 0;\n  position: relative;\n  text-align: center;\n  background: #000; }\n\n.carousel .slide img {\n  width: 100%;\n  vertical-align: top;\n  border: 0; }\n\n.carousel .slide iframe {\n  display: inline-block;\n  width: calc(100% - 80px);\n  margin: 0 40px 40px;\n  border: 0; }\n\n.carousel .slide .legend {\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  margin-left: -45%;\n  width: 90%;\n  border-radius: 10px;\n  background: #000;\n  color: #fff;\n  padding: 10px;\n  font-size: 12px;\n  text-align: center;\n  opacity: 0.25;\n  -webkit-transition: opacity 0.35s ease-in-out;\n  -moz-transition: opacity 0.35s ease-in-out;\n  -ms-transition: opacity 0.35s ease-in-out;\n  -o-transition: opacity 0.35s ease-in-out;\n  transition: opacity 0.35s ease-in-out; }\n\n.carousel .control-dots {\n  position: absolute;\n  bottom: 0;\n  margin: 10px 0;\n  text-align: center;\n  width: 100%; }\n\n@media (min-width: 960px) {\n  .carousel .control-dots {\n    bottom: 0; } }\n\n.carousel .control-dots .dot {\n  -webkit-transition: opacity 0.25s ease-in;\n  -moz-transition: opacity 0.25s ease-in;\n  -ms-transition: opacity 0.25s ease-in;\n  -o-transition: opacity 0.25s ease-in;\n  transition: opacity 0.25s ease-in;\n  opacity: 0.3;\n  filter: alpha(opacity=30);\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);\n  background: #fff;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 8px; }\n\n.carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.carousel .carousel-status {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  font-size: 10px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);\n  color: #fff; }\n\n.carousel:hover .slide .legend {\n  opacity: 1; }\n", ""]);

	// exports


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Thumbs = exports.Carousel = undefined;

	var _Carousel = __webpack_require__(624);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	var _Thumbs = __webpack_require__(629);

	var _Thumbs2 = _interopRequireDefault(_Thumbs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Carousel = _Carousel2.default;
	exports.Thumbs = _Thumbs2.default;

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(188);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _cssClasses = __webpack_require__(625);

	var _cssClasses2 = _interopRequireDefault(_cssClasses);

	var _CSSTranslate = __webpack_require__(626);

	var _CSSTranslate2 = _interopRequireDefault(_CSSTranslate);

	var _reactEasySwipe = __webpack_require__(627);

	var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

	var _Thumbs = __webpack_require__(629);

	var _Thumbs2 = _interopRequireDefault(_Thumbs);

	var _customPropTypes = __webpack_require__(631);

	var customPropTypes = _interopRequireWildcard(_customPropTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
	    return current + ' of ' + total;
	};

	var Carousel = function (_Component) {
	    _inherits(Carousel, _Component);

	    function Carousel(props) {
	        _classCallCheck(this, Carousel);

	        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

	        _this.autoPlay = function () {
	            if (!_this.props.autoPlay) {
	                return;
	            }

	            _this.timer = setTimeout(function () {
	                _this.increment();
	            }, _this.props.interval);
	        };

	        _this.clearAutoPlay = function () {
	            if (!_this.props.autoPlay) {
	                return;
	            }

	            clearTimeout(_this.timer);
	        };

	        _this.resetAutoPlay = function () {
	            _this.clearAutoPlay();
	            _this.autoPlay();
	        };

	        _this.stopOnHover = function () {
	            _this.setState({ isMouseEntered: true });
	            _this.clearAutoPlay();
	        };

	        _this.startOnLeave = function () {
	            _this.setState({ isMouseEntered: false });
	            _this.autoPlay();
	        };

	        _this.navigateWithKeyboard = function (e) {
	            var axis = _this.props.axis;

	            var isHorizontal = axis === 'horizontal';

	            var nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';
	            var prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';

	            if (nextKey === e.key) {
	                _this.increment();
	            } else if (prevKey === e.key) {
	                _this.decrement();
	            }
	        };

	        _this.updateSizes = function () {
	            if (!_this.state.initialized) {
	                return;
	            }

	            var isHorizontal = _this.props.axis === 'horizontal';
	            var firstItem = _this.refs.item0;
	            var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

	            _this.setState({
	                itemSize: itemSize,
	                wrapperSize: isHorizontal ? itemSize * _this.props.children.length : itemSize
	            });
	        };

	        _this.setMountState = function () {
	            _this.setState({ hasMount: true });
	            _this.updateSizes();
	        };

	        _this.handleClickItem = function (index, item) {
	            if (_this.state.cancelClick) {
	                _this.setState({
	                    cancelClick: false
	                });

	                return;
	            }

	            _this.props.onClickItem(index, item);

	            if (index !== _this.state.selectedItem) {
	                _this.setState({
	                    selectedItem: index
	                });
	            }
	        };

	        _this.handleOnChange = function (index, item) {
	            _this.props.onChange(index, item);
	        };

	        _this.handleClickThumb = function (index, item) {
	            _this.props.onClickThumb(index, item);

	            _this.selectItem({
	                selectedItem: index
	            });
	        };

	        _this.onSwipeStart = function () {
	            _this.setState({
	                swiping: true
	            });
	            _this.clearAutoPlay();
	        };

	        _this.onSwipeEnd = function () {
	            _this.resetPosition();
	            _this.setState({
	                swiping: false
	            });
	            _this.autoPlay();
	        };

	        _this.onSwipeMove = function (delta) {
	            var isHorizontal = _this.props.axis === 'horizontal';

	            var initialBoundry = 0;

	            var currentPosition = -_this.state.selectedItem * 100;
	            var finalBoundry = -(_this.props.children.length - 1) * 100;

	            var axisDelta = isHorizontal ? delta.x : delta.y;
	            var handledDelta = axisDelta;

	            // prevent user from swiping left out of boundaries
	            if (currentPosition === initialBoundry && axisDelta > 0) {
	                handledDelta = 0;
	            }

	            // prevent user from swiping right out of boundaries
	            if (currentPosition === finalBoundry && axisDelta < 0) {
	                handledDelta = 0;
	            }

	            var position = currentPosition + 100 / (_this.state.itemSize / handledDelta) + '%';

	            _this.setPosition(position);

	            // allows scroll if the swipe was within the tolerance
	            var hasMoved = Math.abs(axisDelta) > _this.props.swipeScrollTolerance;

	            if (hasMoved && !_this.state.cancelClick) {
	                _this.setState({
	                    cancelClick: true
	                });
	            }

	            return hasMoved;
	        };

	        _this.resetPosition = function () {
	            var currentPosition = -_this.state.selectedItem * 100 + '%';
	            _this.setPosition(currentPosition);
	        };

	        _this.setPosition = function (position) {
	            var list = _reactDom2.default.findDOMNode(_this.refs.itemList);
	            ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
	                list.style[prop] = (0, _CSSTranslate2.default)(position, _this.props.axis);
	            });
	        };

	        _this.decrement = function (positions) {
	            _this.moveTo(_this.state.selectedItem - (typeof positions === 'Number' ? positions : 1));
	        };

	        _this.increment = function (positions) {
	            _this.moveTo(_this.state.selectedItem + (typeof positions === 'Number' ? positions : 1));
	        };

	        _this.moveTo = function (position) {
	            var lastPosition = _this.props.children.length - 1;

	            if (position < 0) {
	                position = _this.props.infiniteLoop ? lastPosition : 0;
	            }

	            if (position > lastPosition) {
	                position = _this.props.infiniteLoop ? 0 : lastPosition;
	            }

	            _this.selectItem({
	                // if it's not a slider, we don't need to set position here
	                selectedItem: position
	            });

	            // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
	            // and will result in the interval function not being cleared correctly.
	            if (_this.props.autoPlay && _this.state.isMouseEntered === false) {
	                _this.resetAutoPlay();
	            }
	        };

	        _this.changeItem = function (e) {
	            var newIndex = e.target.value;

	            _this.selectItem({
	                selectedItem: newIndex
	            });
	        };

	        _this.selectItem = function (state) {
	            _this.setState(state);
	            _this.handleOnChange(state.selectedItem, _this.props.children[state.selectedItem]);
	        };

	        _this.getInitialImage = function () {
	            var selectedItem = _this.props.selectedItem;
	            var item = _this.refs['item' + selectedItem];
	            var images = item && item.getElementsByTagName('img');
	            return images && images[selectedItem];
	        };

	        _this.getVariableImageHeight = function (position) {
	            var item = _this.refs['item' + position];
	            var images = item && item.getElementsByTagName('img');
	            if (_this.state.hasMount && images.length > 0) {
	                var image = images[0];

	                if (!image.complete) {
	                    // if the image is still loading, the size won't be available so we trigger a new render after it's done
	                    var onImageLoad = function onImageLoad() {
	                        _this.forceUpdate();
	                        image.removeEventListener('load', onImageLoad);
	                    };

	                    image.addEventListener('load', onImageLoad);
	                }

	                var height = image.clientHeight;
	                return height > 0 ? height : null;
	            }

	            return null;
	        };

	        _this.state = {
	            initialized: false,
	            selectedItem: props.selectedItem,
	            hasMount: false,
	            isMouseEntered: false
	        };
	        return _this;
	    }

	    _createClass(Carousel, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (!this.props.children) {
	                return;
	            }

	            this.setupCarousel();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.selectedItem !== this.state.selectedItem) {
	                this.updateSizes();
	                this.moveTo(nextProps.selectedItem);
	            }

	            if (nextProps.autoPlay !== this.props.autoPlay) {
	                if (nextProps.autoPlay) {
	                    this.setupAutoPlay();
	                } else {
	                    this.destroyAutoPlay();
	                }
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (!prevProps.children && this.props.children && !this.state.initialized) {
	                this.setupCarousel();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.destroyCarousel();
	        }
	    }, {
	        key: 'setupCarousel',
	        value: function setupCarousel() {
	            this.bindEvents();

	            if (this.props.autoPlay) {
	                this.setupAutoPlay();
	            }

	            this.setState({
	                initialized: true
	            });

	            var initialImage = this.getInitialImage();
	            if (initialImage) {
	                // if it's a carousel of images, we set the mount state after the first image is loaded
	                initialImage.addEventListener('load', this.setMountState);
	            } else {
	                this.setMountState();
	            }
	        }
	    }, {
	        key: 'destroyCarousel',
	        value: function destroyCarousel() {
	            if (this.state.initialized) {
	                this.unbindEvents();
	                this.destroyAutoPlay();
	            }
	        }
	    }, {
	        key: 'setupAutoPlay',
	        value: function setupAutoPlay() {
	            this.autoPlay();
	            var carouselWrapper = this.refs['carouselWrapper'];

	            if (this.props.stopOnHover && carouselWrapper) {
	                carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
	                carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
	            }
	        }
	    }, {
	        key: 'destroyAutoPlay',
	        value: function destroyAutoPlay() {
	            this.clearAutoPlay();
	            var carouselWrapper = this.refs['carouselWrapper'];

	            if (this.props.stopOnHover && carouselWrapper) {
	                carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
	                carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
	            }
	        }
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents() {
	            // as the widths are calculated, we need to resize
	            // the carousel when the window is resized
	            window.addEventListener("resize", this.updateSizes);
	            // issue #2 - image loading smaller
	            window.addEventListener("DOMContentLoaded", this.updateSizes);

	            if (this.props.useKeyboardArrows) {
	                document.addEventListener("keydown", this.navigateWithKeyboard);
	            }
	        }
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            // removing listeners
	            window.removeEventListener("resize", this.updateSizes);
	            window.removeEventListener("DOMContentLoaded", this.updateSizes);

	            var initialImage = this.getInitialImage();
	            if (initialImage) {
	                initialImage.removeEventListener("load", this.setMountState);
	            }

	            if (this.props.useKeyboardArrows) {
	                document.removeEventListener("keydown", this.navigateWithKeyboard);
	            }
	        }
	    }, {
	        key: 'renderItems',
	        value: function renderItems() {
	            var _this2 = this;

	            return _react2.default.Children.map(this.props.children, function (item, index) {
	                var hasMount = _this2.state.hasMount;
	                var itemClass = _cssClasses2.default.ITEM(true, index === _this2.state.selectedItem);

	                return _react2.default.createElement(
	                    'li',
	                    { ref: "item" + index, key: "itemKey" + index, className: itemClass,
	                        onClick: _this2.handleClickItem.bind(_this2, index, item) },
	                    item
	                );
	            });
	        }
	    }, {
	        key: 'renderControls',
	        value: function renderControls() {
	            var _this3 = this;

	            if (!this.props.showIndicators) {
	                return null;
	            }

	            return _react2.default.createElement(
	                'ul',
	                { className: 'control-dots' },
	                _react2.default.Children.map(this.props.children, function (item, index) {
	                    return _react2.default.createElement('li', { className: _cssClasses2.default.DOT(index === _this3.state.selectedItem), onClick: _this3.changeItem, value: index, key: index });
	                })
	            );
	        }
	    }, {
	        key: 'renderStatus',
	        value: function renderStatus() {
	            if (!this.props.showStatus) {
	                return null;
	            }

	            return _react2.default.createElement(
	                'p',
	                { className: 'carousel-status' },
	                this.props.statusFormatter(this.state.selectedItem + 1, this.props.children.length)
	            );
	        }
	    }, {
	        key: 'renderThumbs',
	        value: function renderThumbs() {
	            if (!this.props.showThumbs || this.props.children.length === 0) {
	                return null;
	            }

	            return _react2.default.createElement(
	                _Thumbs2.default,
	                { onSelectItem: this.handleClickThumb, selectedItem: this.state.selectedItem, transitionTime: this.props.transitionTime },
	                this.props.children
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (!this.props.children || this.props.children.length === 0) {
	                return null;
	            }

	            var itemsLength = this.props.children.length;

	            var isHorizontal = this.props.axis === 'horizontal';

	            var canShowArrows = this.props.showArrows && itemsLength > 1;

	            // show left arrow?
	            var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop);
	            // show right arrow
	            var hasNext = canShowArrows && (this.state.selectedItem < itemsLength - 1 || this.props.infiniteLoop);
	            // obj to hold the transformations and styles
	            var itemListStyles = {};

	            var currentPosition = -this.state.selectedItem * 100 + '%';
	            // if 3d is available, let's take advantage of the performance of transform
	            var transformProp = (0, _CSSTranslate2.default)(currentPosition, this.props.axis);

	            var transitionTime = this.props.transitionTime + 'ms';

	            itemListStyles = {
	                'WebkitTransform': transformProp,
	                'MozTransform': transformProp,
	                'MsTransform': transformProp,
	                'OTransform': transformProp,
	                'transform': transformProp,
	                'msTransform': transformProp
	            };

	            if (!this.state.swiping) {
	                itemListStyles = _extends({}, itemListStyles, {
	                    'WebkitTransitionDuration': transitionTime,
	                    'MozTransitionDuration': transitionTime,
	                    'MsTransitionDuration': transitionTime,
	                    'OTransitionDuration': transitionTime,
	                    'transitionDuration': transitionTime,
	                    'msTransitionDuration': transitionTime
	                });
	            }

	            var swiperProps = {
	                selectedItem: this.state.selectedItem,
	                className: _cssClasses2.default.SLIDER(true, this.state.swiping),
	                onSwipeMove: this.onSwipeMove,
	                onSwipeStart: this.onSwipeStart,
	                onSwipeEnd: this.onSwipeEnd,
	                style: itemListStyles,
	                tolerance: this.props.swipeScrollTolerance,
	                ref: 'itemList'
	            };

	            var containerStyles = {};

	            if (isHorizontal) {
	                swiperProps.onSwipeLeft = this.increment;
	                swiperProps.onSwipeRight = this.decrement;

	                if (this.props.dynamicHeight) {
	                    var itemHeight = this.getVariableImageHeight(this.state.selectedItem);
	                    swiperProps.style.height = itemHeight || 'auto';
	                    containerStyles.height = itemHeight || 'auto';
	                }
	            } else {
	                swiperProps.onSwipeUp = this.decrement;
	                swiperProps.onSwipeDown = this.increment;
	                swiperProps.style.height = this.state.itemSize;
	                containerStyles.height = this.state.itemSize;
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: this.props.className, ref: 'carouselWrapper' },
	                _react2.default.createElement(
	                    'div',
	                    { className: _cssClasses2.default.CAROUSEL(true), style: { width: this.props.width } },
	                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_PREV(!hasPrev), onClick: this.decrement }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _cssClasses2.default.WRAPPER(true, this.props.axis), style: containerStyles, ref: 'itemsWrapper' },
	                        _react2.default.createElement(
	                            _reactEasySwipe2.default,
	                            _extends({ tagName: 'ul' }, swiperProps, { allowMouseEvents: this.props.emulateTouch }),
	                            this.renderItems()
	                        )
	                    ),
	                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_NEXT(!hasNext), onClick: this.increment }),
	                    this.renderControls(),
	                    this.renderStatus()
	                ),
	                this.renderThumbs()
	            );
	        }
	    }]);

	    return Carousel;
	}(_react.Component);

	Carousel.displayName = 'Carousel';
	Carousel.propTypes = {
	    className: _propTypes2.default.string,
	    children: _propTypes2.default.node,
	    showArrows: _propTypes2.default.bool,
	    showStatus: _propTypes2.default.bool,
	    showIndicators: _propTypes2.default.bool,
	    infiniteLoop: _propTypes2.default.bool,
	    showThumbs: _propTypes2.default.bool,
	    selectedItem: _propTypes2.default.number,
	    onClickItem: _propTypes2.default.func.isRequired,
	    onClickThumb: _propTypes2.default.func.isRequired,
	    onChange: _propTypes2.default.func.isRequired,
	    axis: _propTypes2.default.oneOf(['horizontal', 'vertical']),
	    width: customPropTypes.unit,
	    useKeyboardArrows: _propTypes2.default.bool,
	    autoPlay: _propTypes2.default.bool,
	    stopOnHover: _propTypes2.default.bool,
	    interval: _propTypes2.default.number,
	    transitionTime: _propTypes2.default.number,
	    swipeScrollTolerance: _propTypes2.default.number,
	    dynamicHeight: _propTypes2.default.bool,
	    emulateTouch: _propTypes2.default.bool,
	    statusFormatter: _propTypes2.default.func.isRequired
	};
	Carousel.defaultProps = {
	    showIndicators: true,
	    showArrows: true,
	    showStatus: true,
	    showThumbs: true,
	    infiniteLoop: false,
	    selectedItem: 0,
	    axis: 'horizontal',
	    width: '100%',
	    useKeyboardArrows: false,
	    autoPlay: false,
	    stopOnHover: true,
	    interval: 3000,
	    transitionTime: 350,
	    swipeScrollTolerance: 5,
	    dynamicHeight: false,
	    emulateTouch: false,
	    onClickItem: noop,
	    onClickThumb: noop,
	    onChange: noop,
	    statusFormatter: defaultStatusFormatter
	};
	exports.default = Carousel;

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classnames = __webpack_require__(318);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    CAROUSEL: function CAROUSEL(isSlider) {
	        return (0, _classnames2.default)({
	            "carousel": true,
	            "carousel-slider": isSlider
	        });
	    },

	    WRAPPER: function WRAPPER(isSlider, axis) {
	        return (0, _classnames2.default)({
	            "thumbs-wrapper": !isSlider,
	            "slider-wrapper": isSlider,
	            "axis-horizontal": axis === "horizontal",
	            "axis-vertical": axis !== "horizontal"
	        });
	    },

	    SLIDER: function SLIDER(isSlider, isSwiping) {
	        return (0, _classnames2.default)({
	            "thumbs": !isSlider,
	            "slider": isSlider,
	            "animated": !isSwiping
	        });
	    },

	    ITEM: function ITEM(isSlider, selected) {
	        return (0, _classnames2.default)({
	            "thumb": !isSlider,
	            "slide": isSlider,
	            "selected": selected
	        });
	    },

	    ARROW_PREV: function ARROW_PREV(disabled) {
	        return (0, _classnames2.default)({
	            "control-arrow control-prev": true,
	            "control-disabled": disabled
	        });
	    },

	    ARROW_NEXT: function ARROW_NEXT(disabled) {
	        return (0, _classnames2.default)({
	            "control-arrow control-next": true,
	            "control-disabled": disabled
	        });
	    },

	    DOT: function DOT(selected) {
	        return (0, _classnames2.default)({
	            "dot": true,
	            'selected': selected
	        });
	    }
	};

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (position, axis) {
	    var positionCss = axis === 'horizontal' ? [position, 0, 0] : [0, position, 0];
	    var transitionProp = 'translate3d';

	    var translatedPosition = '(' + positionCss.join(',') + ')';

	    return transitionProp + translatedPosition;
	};

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(628)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('./react-swipe'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.reactSwipe);
	    global.index = mod.exports;
	  }
	})(this, function (exports, _reactSwipe) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  exports.default = _reactSwipe2.default;
	});

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(188)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('react'), require('prop-types'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react, global.propTypes);
	    global.reactSwipe = mod.exports;
	  }
	})(this, function (exports, _react, _propTypes) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

	  var _react2 = _interopRequireDefault(_react);

	  var _propTypes2 = _interopRequireDefault(_propTypes);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var supportsCaptureOption = false;
	  function setHasSupportToCaptureOption(hasSupport) {
	    supportsCaptureOption = hasSupport;
	  }

	  try {
	    addEventListener("test", null, Object.defineProperty({}, 'capture', { get: function get() {
	        setHasSupportToCaptureOption(true);
	      } }));
	  } catch (e) {}

	  function getSafeEventHandlerOpts() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

	    return supportsCaptureOption ? options : options.capture;
	  }

	  /**
	   * [getPosition returns a position element that works for mouse or touch events]
	   * @param  {[Event]} event [the received event]
	   * @return {[Object]}      [x and y coords]
	   */
	  function getPosition(event) {
	    if ('touches' in event) {
	      var _event$touches$ = event.touches[0],
	          pageX = _event$touches$.pageX,
	          pageY = _event$touches$.pageY;

	      return { x: pageX, y: pageY };
	    }

	    var screenX = event.screenX,
	        screenY = event.screenY;

	    return { x: screenX, y: screenY };
	  }

	  var ReactSwipe = function (_Component) {
	    _inherits(ReactSwipe, _Component);

	    function ReactSwipe() {
	      var _ref;

	      _classCallCheck(this, ReactSwipe);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

	      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
	      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
	      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

	      _this._onMouseDown = _this._onMouseDown.bind(_this);
	      _this._onMouseMove = _this._onMouseMove.bind(_this);
	      _this._onMouseUp = _this._onMouseUp.bind(_this);
	      return _this;
	    }

	    _createClass(ReactSwipe, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if (this.swiper) {
	          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
	            capture: true,
	            passive: false
	          }));
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if (this.swiper) {
	          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
	            capture: true,
	            passive: false
	          }));
	        }
	      }
	    }, {
	      key: '_onMouseDown',
	      value: function _onMouseDown(event) {
	        if (!this.props.allowMouseEvents) {
	          return;
	        }

	        this.mouseDown = true;

	        document.addEventListener('mouseup', this._onMouseUp);
	        document.addEventListener('mousemove', this._onMouseMove);

	        this._handleSwipeStart(event);
	      }
	    }, {
	      key: '_onMouseMove',
	      value: function _onMouseMove(event) {
	        if (!this.mouseDown) {
	          return;
	        }

	        this._handleSwipeMove(event);
	      }
	    }, {
	      key: '_onMouseUp',
	      value: function _onMouseUp(event) {
	        this.mouseDown = false;

	        document.removeEventListener('mouseup', this._onMouseUp);
	        document.removeEventListener('mousemove', this._onMouseMove);

	        this._handleSwipeEnd(event);
	      }
	    }, {
	      key: '_handleSwipeStart',
	      value: function _handleSwipeStart(event) {
	        var _getPosition = getPosition(event),
	            x = _getPosition.x,
	            y = _getPosition.y;

	        this.moveStart = { x: x, y: y };
	        this.props.onSwipeStart(event);
	      }
	    }, {
	      key: '_handleSwipeMove',
	      value: function _handleSwipeMove(event) {
	        var _getPosition2 = getPosition(event),
	            x = _getPosition2.x,
	            y = _getPosition2.y;

	        var deltaX = x - this.moveStart.x;
	        var deltaY = y - this.moveStart.y;
	        this.moving = true;

	        // handling the responsability of cancelling the scroll to
	        // the component handling the event
	        var shouldPreventDefault = this.props.onSwipeMove({
	          x: deltaX,
	          y: deltaY
	        }, event);

	        if (shouldPreventDefault) {
	          event.preventDefault();
	        }

	        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
	      }
	    }, {
	      key: '_handleSwipeEnd',
	      value: function _handleSwipeEnd(event) {
	        this.props.onSwipeEnd(event);

	        var tolerance = this.props.tolerance;


	        if (this.moving) {
	          if (this.movePosition.deltaX < -tolerance) {
	            this.props.onSwipeLeft(1, event);
	          } else if (this.movePosition.deltaX > tolerance) {
	            this.props.onSwipeRight(1, event);
	          }
	          if (this.movePosition.deltaY < -tolerance) {
	            this.props.onSwipeUp(1, event);
	          } else if (this.movePosition.deltaY > tolerance) {
	            this.props.onSwipeDown(1, event);
	          }
	        }

	        this.moveStart = null;
	        this.moving = false;
	        this.movePosition = null;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this2 = this;

	        return _react2.default.createElement(
	          this.props.tagName,
	          {
	            ref: function ref(node) {
	              return _this2.swiper = node;
	            },
	            onMouseDown: this._onMouseDown,
	            onTouchStart: this._handleSwipeStart,
	            onTouchEnd: this._handleSwipeEnd,
	            className: this.props.className,
	            style: this.props.style
	          },
	          this.props.children
	        );
	      }
	    }]);

	    return ReactSwipe;
	  }(_react.Component);

	  ReactSwipe.displayName = 'ReactSwipe';
	  ReactSwipe.propTypes = {
	    tagName: _propTypes2.default.string,
	    className: _propTypes2.default.string,
	    style: _propTypes2.default.object,
	    children: _propTypes2.default.node,
	    allowMouseEvents: _propTypes2.default.bool,
	    onSwipeUp: _propTypes2.default.func,
	    onSwipeDown: _propTypes2.default.func,
	    onSwipeLeft: _propTypes2.default.func,
	    onSwipeRight: _propTypes2.default.func,
	    onSwipeStart: _propTypes2.default.func,
	    onSwipeMove: _propTypes2.default.func,
	    onSwipeEnd: _propTypes2.default.func,
	    tolerance: _propTypes2.default.number.isRequired
	  };
	  ReactSwipe.defaultProps = {
	    tagName: 'div',
	    allowMouseEvents: false,
	    onSwipeUp: function onSwipeUp() {},
	    onSwipeDown: function onSwipeDown() {},
	    onSwipeLeft: function onSwipeLeft() {},
	    onSwipeRight: function onSwipeRight() {},
	    onSwipeStart: function onSwipeStart() {},
	    onSwipeMove: function onSwipeMove() {},
	    onSwipeEnd: function onSwipeEnd() {},

	    tolerance: 0
	  };
	  exports.default = ReactSwipe;
	});

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(188);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _cssClasses = __webpack_require__(625);

	var _cssClasses2 = _interopRequireDefault(_cssClasses);

	var _dimensions = __webpack_require__(630);

	var _CSSTranslate = __webpack_require__(626);

	var _CSSTranslate2 = _interopRequireDefault(_CSSTranslate);

	var _reactEasySwipe = __webpack_require__(627);

	var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Thumbs = function (_Component) {
	    _inherits(Thumbs, _Component);

	    function Thumbs(props) {
	        _classCallCheck(this, Thumbs);

	        var _this = _possibleConstructorReturn(this, (Thumbs.__proto__ || Object.getPrototypeOf(Thumbs)).call(this, props));

	        _this.updateSizes = function () {
	            if (!_this.state.initialized) {
	                return;
	            }

	            var total = _this.props.children.length;
	            _this.wrapperSize = _this.itemsWrapper.clientWidth;
	            _this.itemSize = (0, _dimensions.outerWidth)(_this.refs.thumb0);
	            _this.visibleItems = Math.floor(_this.wrapperSize / _this.itemSize);
	            _this.lastPosition = total - _this.visibleItems;
	            _this.showArrows = _this.visibleItems < total;
	        };

	        _this.setMountState = function () {
	            _this.setState({ hasMount: true });
	            _this.updateSizes();
	        };

	        _this.handleClickItem = function (index, item) {
	            var handler = _this.props.onSelectItem;

	            if (typeof handler === 'function') {
	                handler(index, item);
	            }
	        };

	        _this.onSwipeStart = function () {
	            _this.setState({
	                swiping: true
	            });
	        };

	        _this.onSwipeEnd = function () {
	            _this.setState({
	                swiping: false
	            });
	        };

	        _this.onSwipeMove = function (deltaX) {
	            var leftBoundry = 0;
	            var list = _reactDom2.default.findDOMNode(_this.itemList);
	            var wrapperSize = list.clientWidth;
	            var visibleItems = Math.floor(wrapperSize / _this.itemSize);

	            var currentPosition = -_this.state.firstItem * _this.itemSize;
	            var lastLeftBoundry = -_this.visibleItems * _this.itemSize;

	            // prevent user from swiping left out of boundaries
	            if (currentPosition === leftBoundry && deltaX > 0) {
	                deltaX = 0;
	            }

	            // prevent user from swiping right out of boundaries
	            if (currentPosition === lastLeftBoundry && deltaX < 0) {
	                deltaX = 0;
	            }

	            var position = currentPosition + 100 / (wrapperSize / deltaX) + '%';

	            // if 3d isn't available we will use left to move
	            ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
	                list.style[prop] = (0, _CSSTranslate2.default)(position, _this.props.axis);
	            });
	        };

	        _this.slideRight = function (positions) {
	            _this.moveTo(_this.state.firstItem - (typeof positions === 'Number' ? positions : 1));
	        };

	        _this.slideLeft = function (positions) {
	            _this.moveTo(_this.state.firstItem + (typeof positions === 'Number' ? positions : 1));
	        };

	        _this.moveTo = function (position) {
	            // position can't be lower than 0
	            position = position < 0 ? 0 : position;
	            // position can't be higher than last postion
	            position = position >= _this.lastPosition ? _this.lastPosition : position;

	            _this.setState({
	                firstItem: position,
	                // if it's not a slider, we don't need to set position here
	                selectedItem: _this.state.selectedItem
	            });
	        };

	        _this.state = {
	            initialized: false,
	            selectedItem: props.selectedItem,
	            hasMount: false,
	            firstItem: _this.getFirstItem(props.selectedItem),
	            images: []
	        };
	        return _this;
	    }

	    _createClass(Thumbs, [{
	        key: 'componentDidMount',
	        value: function componentDidMount(nextProps) {
	            if (!this.props.children) {
	                return;
	            }

	            this.setupThumbs();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props, state) {
	            if (props.selectedItem !== this.state.selectedItem) {
	                this.setState({
	                    selectedItem: props.selectedItem,
	                    firstItem: this.getFirstItem(props.selectedItem)
	                });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (!prevProps.children && this.props.children && !this.state.initialized) {
	                this.setupThumbs();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.destroyThumbs();
	        }
	    }, {
	        key: 'setupThumbs',
	        value: function setupThumbs() {
	            // as the widths are calculated, we need to resize
	            // the carousel when the window is resized
	            window.addEventListener("resize", this.updateSizes);
	            // issue #2 - image loading smaller
	            window.addEventListener("DOMContentLoaded", this.updateSizes);

	            var images = this.getImages();

	            if (!images) {
	                return;
	            }

	            this.setState({
	                initialized: true,
	                images: images
	            });

	            // when the component is rendered we need to calculate
	            // the container size to adjust the responsive behaviour
	            this.updateSizes();
	        }
	    }, {
	        key: 'destroyThumbs',
	        value: function destroyThumbs() {
	            // removing listeners
	            window.removeEventListener("resize", this.updateSizes);
	            window.removeEventListener("DOMContentLoaded", this.updateSizes);
	        }
	    }, {
	        key: 'getImages',
	        value: function getImages() {
	            var images = _react2.default.Children.map(this.props.children, function (item, index) {
	                var img = item;

	                // if the item is not an image, try to find the first image in the item's children.
	                if (item.type !== "img") {
	                    img = _react2.default.Children.toArray(item.props.children).filter(function (children) {
	                        return children.type === "img";
	                    })[0];
	                }

	                if (!img || img.length === 0) {
	                    return null;
	                }

	                return img;
	            });

	            if (images.filter(function (image) {
	                return image !== null;
	            }).length === 0) {
	                console.warn('No images found! Can\'t build the thumb list without images. If you don\'t need thumbs, set showThumbs={false} in the Carousel. Note that it\'s not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md');

	                return null;
	            }

	            return images;
	        }
	    }, {
	        key: 'getFirstItem',
	        value: function getFirstItem(selectedItem) {
	            if (!this.showArrows) {
	                return 0;
	            }

	            var firstItem = selectedItem;

	            if (selectedItem >= this.lastPosition) {
	                firstItem = this.lastPosition;
	            }

	            if (selectedItem < this.state.firstItem + this.visibleItems) {
	                firstItem = this.state.firstItem;
	            }

	            if (selectedItem < this.state.firstItem) {
	                firstItem = selectedItem;
	            }

	            return firstItem;
	        }
	    }, {
	        key: 'renderItems',
	        value: function renderItems() {
	            var _this2 = this;

	            return this.state.images.map(function (img, index) {
	                var itemClass = _cssClasses2.default.ITEM(false, index === _this2.state.selectedItem && _this2.state.hasMount);

	                var thumbProps = {
	                    key: index,
	                    ref: 'thumb' + index,
	                    className: itemClass,
	                    onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index])
	                };

	                if (index === 0) {
	                    img = _react2.default.cloneElement(img, {
	                        onLoad: _this2.setMountState
	                    });
	                }

	                return _react2.default.createElement(
	                    'li',
	                    thumbProps,
	                    img
	                );
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            if (!this.props.children || this.state.images.length === 0) {
	                return null;
	            }

	            // show left arrow?
	            var hasPrev = this.showArrows && this.state.firstItem > 0;
	            // show right arrow
	            var hasNext = this.showArrows && this.state.firstItem < this.lastPosition;
	            // obj to hold the transformations and styles
	            var itemListStyles = {};

	            var currentPosition = -this.state.firstItem * this.itemSize + 'px';

	            var transformProp = (0, _CSSTranslate2.default)(currentPosition, this.props.axis);

	            var transitionTime = this.props.transitionTime + 'ms';

	            itemListStyles = {
	                'WebkitTransform': transformProp,
	                'MozTransform': transformProp,
	                'MsTransform': transformProp,
	                'OTransform': transformProp,
	                'transform': transformProp,
	                'msTransform': transformProp,
	                'WebkitTransitionDuration': transitionTime,
	                'MozTransitionDuration': transitionTime,
	                'MsTransitionDuration': transitionTime,
	                'OTransitionDuration': transitionTime,
	                'transitionDuration': transitionTime,
	                'msTransitionDuration': transitionTime
	            };

	            return _react2.default.createElement(
	                'div',
	                { className: _cssClasses2.default.CAROUSEL(false) },
	                _react2.default.createElement(
	                    'div',
	                    { className: _cssClasses2.default.WRAPPER(false), ref: function ref(node) {
	                            return _this3.itemsWrapper = node;
	                        } },
	                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_PREV(!hasPrev), onClick: this.slideRight }),
	                    _react2.default.createElement(
	                        _reactEasySwipe2.default,
	                        { tagName: 'ul',
	                            selectedItem: this.state.selectedItem,
	                            className: _cssClasses2.default.SLIDER(false, this.state.swiping),
	                            onSwipeLeft: this.slideLeft,
	                            onSwipeRight: this.slideRight,
	                            onSwipeMove: this.onSwipeMove,
	                            onSwipeStart: this.onSwipeStart,
	                            onSwipeEnd: this.onSwipeEnd,
	                            style: itemListStyles,
	                            ref: function ref(node) {
	                                return _this3.itemList = node;
	                            } },
	                        this.renderItems()
	                    ),
	                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_NEXT(!hasNext), onClick: this.slideLeft })
	                )
	            );
	        }
	    }]);

	    return Thumbs;
	}(_react.Component);

	Thumbs.displayName = 'Thumbs';
	Thumbs.propsTypes = {
	    children: _propTypes2.default.element.isRequired,
	    transitionTime: _propTypes2.default.number,
	    selectedItem: _propTypes2.default.number
	};
	Thumbs.defaultProps = {
	    selectedItem: 0,
	    transitionTime: 350,
	    axis: 'horizontal'
	};
	exports.default = Thumbs;

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var outerWidth = exports.outerWidth = function outerWidth(el) {
		var width = el.offsetWidth;
		var style = getComputedStyle(el);

		width += parseInt(style.marginLeft) + parseInt(style.marginRight);
		return width;
	};

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var unit = exports.unit = function unit(props, propName, componentName) {
	    if (!/(pt|px|em|rem|vw|vh|%)$/.test(props[propName])) {
	        return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %');
	    }
	};

/***/ })

})