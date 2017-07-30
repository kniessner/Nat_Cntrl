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
	      this.setState({ mounted: true });
	      var scene = new THREE.Scene();
	      var camera = new THREE.PerspectiveCamera(60, (window.innerWidth - 15) / window.innerHeight, 1, 1000);
	      var renderer = new THREE.WebGLRenderer();
	      var raycaster;
	      renderer.setSize(window.innerWidth - 15, window.innerHeight);
	      document.getElementById('Orbit').appendChild(renderer.domElement);
	      camera.position.z = 520;
	      camera.position.x = -0;
	      /*=================================================
	      	MAIN ELEMENTS
	      =================================================*/

	      var geometry = new THREE.TorusGeometry(202, 15, 10, 150);
	      var material = new THREE.MeshLambertMaterial({ color: "rgba(4, 4, 4,1)", morphTargets: true, wireframe: false });
	      var RingCore = new THREE.Mesh(geometry, material);
	      scene.add(RingCore);

	      var geometry = new THREE.TorusGeometry(202, 20, 10, 100);
	      var material = new THREE.MeshLambertMaterial({ color: "rgba(94, 236, 255,0.4)", morphTargets: true, wireframe: true });
	      var RingWire = new THREE.Mesh(geometry, material);
	      scene.add(RingWire);
	      RingCore.position.z = 150;
	      RingWire.position.z = 150;
	      RingCore.position.y = 150;
	      RingWire.position.y = 150;
	      RingCore.position.x = -150;
	      RingWire.position.x = -150;

	      /*=================================================
	      	LIGHTS
	      =================================================*/

	      scene.add(new THREE.AmbientLight(0x222222));
	      light = new THREE.DirectionalLight(0x222222);
	      light.position.set(1, 1, 1);
	      scene.add(light);
	      light = new THREE.DirectionalLight('tomato');
	      light.position.set(-200, -200, -200);
	      scene.add(light);
	      light = new THREE.AmbientLight(0x222222);
	      scene.add(light);
	      var hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
	      scene.add(hemisphereLight);

	      /*=================================================
	      	RANDOM ELEMENTS
	      =================================================*/

	      var geometry = new THREE.SphereGeometry(1, 32, 32);
	      var material = new THREE.MeshLambertMaterial({ color: 0xFDFDFDF, morphTargets: true, wireframe: false });
	      for (var i = 0; i < 200; i++) {
	        var cube = new THREE.Mesh(geometry, material);
	        cube.position.x = (Math.random() - 0.5) * 1200;
	        cube.position.y = (Math.random() - 0.5) * 1200;
	        cube.position.z = (Math.random() - 0.5) * 1200;
	        cube.updateMatrix();
	        cube.matrixAutoUpdate = false;
	        scene.add(cube);
	      }
	      this.light = new THREE.PointLight();
	      this.light.position.set(0, 0, 0);
	      this.scene.add(this.light);

	      /*=================================================
	      	Floor Example
	      =================================================*/

	      /*
	              		geometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
	      				geometry.rotateX( - Math.PI / 2 );
	      				for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {
	      					var vertex = geometry.vertices[ i ];
	      					vertex.x += Math.random() * 20 - 10;
	      					vertex.y += Math.random() * 2;
	      					vertex.z += Math.random() * 20 - 10;
	      				}
	        				for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {
	      					var face = geometry.faces[ i ];
	      					face.vertexColors[ 0 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
	      					face.vertexColors[ 1 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
	      					face.vertexColors[ 2 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
	      				}
	      				material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } );
	      				mesh = new THREE.Mesh( geometry, material );
	      				scene.add( mesh );*/
	      /*=================================================
	      	RENDER
	      =================================================*/

	      var render = function render() {
	        RingWire.rotation.x += 0.006;
	        RingCore.rotation.x += 0.006;
	        RingWire.rotation.y += 0.003;
	        RingCore.rotation.y += 0.003;
	        RingWire.rotation.z += 0.0006;
	        RingCore.rotation.z += 0.0006;
	        camera.rotation.z -= 0.0006;
	        requestAnimationFrame(render);
	        renderer.render(scene, camera);
	      };

	      render();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'content' },
	        _react2.default.createElement('div', { id: 'Orbit' }),
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