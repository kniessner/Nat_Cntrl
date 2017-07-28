webpackHotUpdate(0,{

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(228)();
	// imports
	exports.i(__webpack_require__(229), "");
	exports.i(__webpack_require__(230), "");

	// module
	exports.push([module.id, "h1, h2, h3, h4, h5 {\n  font-family: helvetica;\n  text-transform: uppercase;\n  font-weight: 200; }\n\nhr {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: 0;\n  border-top: 1px solid #eee;\n  opacity: 0.1; }\n\np {\n  font-size: 13px; }\n\n.centerer {\n  width: 10px;\n  height: 10px;\n  margin: 0 auto;\n  position: relative; }\n\n.react-grid-layout {\n  width: 100%;\n  margin: 0 auto; }\n\n.react-grid-item {\n  border: 0px solid RGBA(142, 210, 234, 1);\n  background-color: RGBA(23, 136, 169, 0.5);\n  color: #fff;\n  text-transform: uppercase; }\n\n.grid .col {\n  min-width: 0;\n  box-sizing: border-box;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -ms-flex-positive: 1;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n  padding: 0 8px 0 8px; }\n\n.grid::before,\n.grid::after {\n  clear: both;\n  content: '';\n  display: block; }\n\n.grid__item {\n  box-sizing: border-box;\n  float: left;\n  height: 50vw;\n  padding: 2em;\n  width: 50vw; }\n\n.react-grid-item:nth-child(1),\n.grid__item:nth-child(1) {\n  background-color: #521714; }\n\n.react-grid-item:nth-child(2),\n.grid__item:nth-child(2) {\n  background-color: #521914; }\n\n.react-grid-item:nth-child(3),\n.grid__item:nth-child(3) {\n  background-color: #521c14; }\n\n.react-grid-item:nth-child(4),\n.grid__item:nth-child(4) {\n  background-color: #521e14; }\n\n.react-grid-item:nth-child(5),\n.grid__item:nth-child(5) {\n  background-color: #522014; }\n\n.react-grid-item:nth-child(6),\n.grid__item:nth-child(6) {\n  background-color: #522314; }\n\n.react-grid-item:nth-child(7),\n.grid__item:nth-child(7) {\n  background-color: #522514; }\n\n.react-grid-item:nth-child(8),\n.grid__item:nth-child(8) {\n  background-color: #522814; }\n\n#nav_bar_top {\n  position: relative;\n  float: left;\n  width: 100%; }\n  #nav_bar_top .icon_btn {\n    right: 0; }\n  #nav_bar_top .collapse.in {\n    width: 100%;\n    left: 0;\n    margin: 0 auto;\n    padding: 0 100px;\n    border-bottom: 1px solid; }\n    #nav_bar_top .collapse.in .collapse-shield {\n      margin-left: -20px;\n      margin-right: -20px; }\n    #nav_bar_top .collapse.in ul {\n      list-style: none;\n      padding: 0;\n      height: auto;\n      width: 100%;\n      display: inline-block;\n      position: relative;\n      margin: 10px auto; }\n      #nav_bar_top .collapse.in ul .w_50 {\n        height: 150px;\n        float: left;\n        width: 50%;\n        padding: 10px;\n        text-align: center; }\n      #nav_bar_top .collapse.in ul .w_50 a {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        display: inline-block;\n        background: RGBA(35, 40, 45, 1);\n        color: white;\n        padding: 50px; }\n      #nav_bar_top .collapse.in ul .sub_menu_element {\n        float: right;\n        margin: 0 10px; }\n        #nav_bar_top .collapse.in ul .sub_menu_element a {\n          width: 100%;\n          height: 100%;\n          position: relative;\n          display: inline-block;\n          background: RGBA(35, 40, 45, 1);\n          color: white;\n          padding: 10px 50px; }\n\nnav {\n  right: 0;\n  padding-top: 10px; }\n\nnav.sub_nav {\n  text-align: center;\n  padding: 0;\n  background: #23282d;\n  height: 60px;\n  margin: 0 auto; }\n  nav.sub_nav button.turk {\n    border: 0;\n    border-radius: 0;\n    color: rgba(120, 190, 200, 0.8);\n    padding: 20px 10px;\n    margin: 0;\n    background: none;\n    float: right;\n    font-size: 13px;\n    color: white; }\n  nav.sub_nav button.turk.active {\n    background: rgba(20, 160, 200, 0.8);\n    color: rgba(250, 250, 250, 0.8);\n    float: left;\n    font-size: 14px; }\n\nnav.sub_nav.default {\n  float: left;\n  position: relative;\n  width: 100%;\n  text-align: center;\n  padding: 10px 0;\n  background: none;\n  margin-top: -20px; }\n  nav.sub_nav.default button {\n    color: rgba(120, 190, 200, 0.8);\n    background: none;\n    border: 0;\n    border-radius: 0;\n    font-size: 13px;\n    padding: 20px;\n    margin: 0;\n    width: 100px; }\n  nav.sub_nav.default button.active {\n    /* background: rgba(20,160,200,.8); */\n    color: rgba(250, 250, 250, 0.8);\n    font-size: 16px;\n    color: #fff;\n    text-transform: uppercase;\n    letter-spacing: 6px;\n    margin-left: 20px;\n    opacity: 0.7; }\n\n#chapters {\n  max-width: 800px;\n  margin: 0 auto; }\n  #chapters .chapter {\n    padding: 5px 20px;\n    /* margin: 5px 0; */\n    background: RGBA(35, 40, 45, 1);\n    padding-left: 100px;\n    border-bottom: 1px solid; }\n    #chapters .chapter h4 {\n      padding: 0;\n      margin: 5px;\n      color: rgba(250, 250, 250, 0.6);\n      font-size: 13px;\n      letter-spacing: 2px; }\n  #chapters .chapter_content {\n    display: none; }\n\nbutton {\n  background: rgba(200, 200, 200, 0.1);\n  border: 1px solid rgba(200, 200, 200, 0.1); }\n\nbutton.btn {\n  background: none;\n  border: none; }\n\n.icon_btn {\n  font-size: 30px;\n  position: absolute;\n  padding: 0 20px;\n  height: 100%;\n  background: RGBA(35, 40, 45, 1);\n  border: 0; }\n  .icon_btn .icon-menu {\n    fill: #fff; }\n\nhtml {\n  overflow: scroll;\n  overflow-x: hidden; }\n\n::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */ }\n\n/* optional: show position indicator in red */\n::-webkit-scrollbar-thumb {\n  background: #FF0000; }\n\nbody {\n  background: #23282d;\n  font-family: helvetica;\n  font-weight: 200;\n  color: RGBA(241, 241, 241, 1); }\n\n#content {\n  max-height: 100%;\n  background: rgba(250, 250, 250, 0.6);\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 0px;\n  width: 100%;\n  background: #485563;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-linear-gradient(left, #485563, #29323c);\n  background: -o-linear-gradient(left, #485563, #29323c);\n  background: linear-gradient(to right, #485563, #29323c);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.head {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 800px;\n  margin: 0 auto; }\n\n.sub_head h4 {\n  margin: 0; }\n\nsection {\n  padding: 20px;\n  margin: 0  0 10px; }\n\n.main_section {\n  display: inline-block;\n  position: relative;\n  float: left;\n  height: 100%;\n  width: calc(100% + 200px);\n  padding: 0;\n  margin: 0;\n  border-top-right-radius: 1000px;\n  border-right: 200px solid rgba(0, 140, 140, 0.2);\n  background: none; }\n\n.low_pres {\n  background: rgba(250, 250, 250, 0.3);\n  color: RGBA(33, 37, 43, 1); }\n\n.high_pres {\n  color: rgba(250, 250, 250, 0.8);\n  background: RGBA(33, 37, 43, 1); }\n\n.title {\n  padding: 0 20px; }\n\n.snooz {\n  height: 0px;\n  padding: 0; }\n  .snooz h1 {\n    float: right;\n    margin-top: -40px;\n    color: white;\n    font-size: 13px;\n    padding: 0 30px;\n    opacity: 0.6; }\n  .snooz h3 {\n    display: none; }\n\n#stats {\n  width: 80px;\n  opacity: 0.9;\n  cursor: pointer;\n  position: absolute;\n  left: inherit !important;\n  top: inherit !important;\n  right: 10px !important;\n  bottom: 10px !important;\n  z-index: 100; }\n\n.inner_wrap {\n  padding: 0;\n  border-top-right-radius: 600px;\n  overflow: hidden;\n  width: 85%;\n  margin: 0 auto;\n  /* float: left; */\n  clear: both;\n  width: 100%;\n  padding: 0px 20px 20px;\n  padding-right: 20;\n  background: rgba(250, 250, 250, 0.2); }\n\n.test_area {\n  background: RGBA(35, 40, 45, 0.6);\n  min-height: 100px;\n  width: 100%;\n  float: left;\n  margin: 0 auto;\n  display: inline; }\n\n.media_screen {\n  max-width: 100%;\n  height: initial;\n  margin: 0 auto;\n  display: block; }\n", ""]);

	// exports


/***/ })

})