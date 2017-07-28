webpackHotUpdate(0,{

/***/ 322:
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

	var _reactRouterDom = __webpack_require__(186);

	var _puiReactCollapse = __webpack_require__(323);

	var _puiReactIconography = __webpack_require__(392);

	var _puiReactExpander = __webpack_require__(497);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Navigation = function (_React$Component) {
	  _inherits(Navigation, _React$Component);

	  function Navigation(props) {
	    _classCallCheck(this, Navigation);

	    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

	    _this.state = { expanded: false };
	    return _this;
	  }

	  _createClass(Navigation, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { id: 'nav_bar_top' },
	        _react2.default.createElement(
	          'button',
	          { className: 'icon_btn ghost', onClick: function onClick() {
	              return _this2.setState({ expanded: !_this2.state.expanded });
	            } },
	          _react2.default.createElement(_puiReactIconography.Icon, { src: 'menu', style: { color: "white" } })
	        ),
	        _react2.default.createElement(
	          'nav',
	          { className: 'sub_nav' },
	          _react2.default.createElement(
	            'button',
	            { className: 'turk' },
	            '\xDCbersicht'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'turk active' },
	            'Kapitel'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'turk' },
	            'Hintergr\xFCnde'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'turk' },
	            'Statisken'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'turk' },
	            'Quellen'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'turk' },
	            'Referenzen'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'turk' },
	            'Medien'
	          ),
	          this.props.children
	        ),
	        _react2.default.createElement(
	          _puiReactExpander.ExpanderContent,
	          { className: 'nav_bar_expand', expanded: this.state.expanded,
	            onEntered: function onEntered() {
	              return console.log('onEntered');
	            },
	            onExited: function onExited() {
	              return console.log('onExited');
	            } },
	          _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	              'li',
	              { className: 'sub_menu_element' },
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                { to: '/' },
	                'Home'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: 'sub_menu_element' },
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                { to: '/dashboard' },
	                'Try'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: 'sub_menu_element' },
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                { to: '/modules' },
	                'Modules'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Navigation;
	}(_react2.default.Component);

	exports.default = Navigation;

/***/ })

})