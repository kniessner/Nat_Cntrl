webpackHotUpdate(0,{

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _axios = __webpack_require__(632);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WpApi = function () {
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
	                console.log(response);
	                _this.getPosts(response, cb);
	            });
	            return true;
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