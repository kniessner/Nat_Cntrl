webpackHotUpdate(0,{

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

	/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
	'use strict';

	exports.__esModule = true;
	exports.Label = undefined;

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

	__webpack_require__(615);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Label = exports.Label = function (_React$PureComponent) {
	  (0, _inherits3.default)(Label, _React$PureComponent);

	  function Label() {
	    (0, _classCallCheck3.default)(this, Label);
	    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
	  }

	  Label.prototype.render = function render() {
	    var _props = this.props,
	        children = _props.children,
	        props = (0, _objectWithoutProperties3.default)(_props, ['children']);

	    return _react2.default.createElement(
	      'span',
	      props,
	      children
	    );
	  };

	  return Label;
	}(_react2.default.PureComponent);

	Label.defaultProps = {
	  className: 'label label-primary'
	};

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

	try {
	  __webpack_require__(378);
	  __webpack_require__(616);
	} catch(e) {
	}


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(617);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(231)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(617, function() {
				var newContent = __webpack_require__(617);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(228)();
	// imports


	// module
	exports.push([module.id, ".label {\n  padding: 0.2em 0.6em;\n  border-radius: 3px;\n  text-transform: uppercase; }\n\n.label-removable {\n  padding: 4px 7px;\n  border-radius: 3px;\n  background-color: #00A79D;\n  color: #fff;\n  font-weight: 600; }\n\n.label-removable .close-btn {\n  margin-left: 15px;\n  color: rgba(255, 255, 255, 0.6); }\n\n.label-removable .close-btn:hover {\n  color: #fff;\n  text-decoration: none; }\n", ""]);

	// exports


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _puiReactLabels = __webpack_require__(614);

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
	            'Port: ',
	            _react2.default.createElement(
	              _puiReactLabels.Label,
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
	              _puiReactLabels.Label,
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
	              _puiReactLabels.Label,
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