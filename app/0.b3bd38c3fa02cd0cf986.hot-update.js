webpackHotUpdate(0,{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _puiReactPanes = __webpack_require__(610);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'Home' },
	        _react2.default.createElement(
	          _puiReactPanes.Pane,
	          { className: 'bg-neutral-10' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Welcome'
	          )
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	;

	exports.default = Home;

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

	/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
	'use strict';

	exports.__esModule = true;
	exports.Pane = exports.BasePane = undefined;

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

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(188);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _puiReactHelpers = __webpack_require__(312);

	__webpack_require__(611);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BasePane = exports.BasePane = function (_React$PureComponent) {
	  (0, _inherits3.default)(BasePane, _React$PureComponent);

	  function BasePane() {
	    (0, _classCallCheck3.default)(this, BasePane);
	    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
	  }

	  BasePane.prototype.render = function render() {
	    var _props = this.props,
	        innerClassName = _props.innerClassName,
	        children = _props.children,
	        other = (0, _objectWithoutProperties3.default)(_props, ['innerClassName', 'children']);

	    var outerProps = (0, _puiReactHelpers.mergeProps)(other, { className: 'pane' });
	    var innerProps = (0, _puiReactHelpers.mergeProps)({ className: innerClassName }, { className: 'container' });

	    return _react2.default.createElement(
	      'div',
	      outerProps,
	      _react2.default.createElement(
	        'div',
	        innerProps,
	        children
	      )
	    );
	  };

	  return BasePane;
	}(_react2.default.PureComponent);

	BasePane.propTypes = {
	  className: _propTypes2.default.string,
	  innerClassName: _propTypes2.default.string
	};

	var Pane = exports.Pane = function (_React$PureComponent2) {
	  (0, _inherits3.default)(Pane, _React$PureComponent2);

	  function Pane() {
	    (0, _classCallCheck3.default)(this, Pane);
	    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent2.apply(this, arguments));
	  }

	  Pane.prototype.render = function render() {
	    var _props2 = this.props,
	        className = _props2.className,
	        other = (0, _objectWithoutProperties3.default)(_props2, ['className']);

	    return _react2.default.createElement(BasePane, (0, _extends3.default)({}, other, { className: className }));
	  };

	  return Pane;
	}(_react2.default.PureComponent);

	Pane.propTypes = {
	  className: _propTypes2.default.string
	};

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

	try {
	  __webpack_require__(378);
	  __webpack_require__(612);
	} catch(e) {
	}


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(613);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(231)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(613, function() {
				var newContent = __webpack_require__(613);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(228)();
	// imports


	// module
	exports.push([module.id, ".pane > .container {\n  padding-top: 35px;\n  padding-bottom: 35px; }\n\n.pane-offset .pane-image {\n  text-align: center;\n  margin-bottom: -70px; }\n\n.pane-offset .pane-image > img {\n  display: inline-block; }\n\n.pane-offset + .pane .container {\n  padding-top: 70px; }\n\n@media (min-width: 768px) {\n  .pane > .container {\n    padding-top: 45px;\n    padding-bottom: 45px; }\n  .pane-offset .pane-image {\n    margin-bottom: -90px; }\n  .pane-offset + .pane .container {\n    padding-top: 90px; } }\n\n@media (min-width: 992px) {\n  .pane > .container {\n    padding-top: 60px;\n    padding-bottom: 60px; }\n  .pane-offset .pane-image {\n    margin-bottom: -120px; }\n  .pane-offset + .pane .container {\n    padding-top: 120px; } }\n", ""]);

	// exports


/***/ })

})