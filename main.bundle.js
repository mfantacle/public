/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/style.scss":
/*!*******************************!*\
  !*** ./assets/css/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/css/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/css/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/css/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap);", ""]);

// Module
exports.push([module.i, ":root {\n  --white: #fff;\n  --color: #333;\n  --link: #2bc5b8;\n  --link-hover: #229b91;\n  --color-bg: #faf8f5;\n  --gradient-bg: linear-gradient(var(--color-bg), #d9d4cf);\n  --header-height: 48px;\n  --header-bg: transparent;\n  --footer-height: 48px;\n  --footer-bg: transparent;\n  --cardTranslateY: 10%; }\n\n@keyframes shadow {\n  from {\n    box-shadow: 0 0px 0px -20px rgba(0, 0, 0, 0);\n    transform: scale(1.2) translateY(var(--cardTranslateY));\n    opacity: 0; }\n  to {\n    box-shadow: 0 20px 30px -20px rgba(0, 0, 0, 0.4), 0 20px 40px -30px rgba(0, 0, 0, 0.4);\n    transform: scale(1) translateY(0%);\n    opacity: 1; } }\n\n@keyframes scalingBack {\n  from {\n    transform: scale(3);\n    opacity: 0; }\n  to {\n    transform: scale(1);\n    opacity: 1; } }\n\n@keyframes scalingFront {\n  from {\n    transform: scale(5);\n    opacity: 0; }\n  to {\n    transform: scale(1);\n    opacity: 1; } }\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0; }\n\nhtml {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  letter-spacing: 0.2px;\n  color: var(--color);\n  background-color: var(--color-bg);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  html body {\n    background: var(--gradient-bg); }\n    html body a {\n      color: var(--link);\n      text-decoration: none;\n      font-weight: bold; }\n      html body a:hover {\n        color: var(--link-hover); }\n    html body header {\n      height: var(--header-height);\n      background-color: var(header-bg);\n      position: fixed;\n      top: 0;\n      left: 0;\n      z-index: 2;\n      width: 100%;\n      display: block;\n      justify-content: center;\n      align-content: center; }\n    html body #app {\n      display: block;\n      min-height: 100vh;\n      padding-top: var(--header-height);\n      padding-bottom: var(--header-height);\n      box-sizing: border-box;\n      text-align: center;\n      padding: 5vw 0; }\n      html body #app .content {\n        max-width: 40em;\n        width: 100%;\n        margin: 0 auto 0; }\n        html body #app .content .card {\n          color: #1c3160;\n          text-align: left;\n          width: 40em;\n          min-height: 30em;\n          background-color: var(--white);\n          padding: 5em 5em 6em;\n          box-sizing: border-box;\n          transform: translateY(var(--cardTranslateY));\n          animation-name: shadow;\n          animation-duration: 1s;\n          animation-delay: .5s;\n          animation-fill-mode: forwards;\n          animation-timing-function: ease-out;\n          opacity: 0;\n          border-radius: .25em;\n          position: relative;\n          overflow: hidden; }\n          html body #app .content .card::after, html body #app .content .card::before {\n            content: \"\";\n            display: block;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0; }\n          html body #app .content .card::after {\n            z-index: -1;\n            background: url(\"data:image/svg+xml;charset=UTF-8, %3Csvg width='640px' height='480px' viewBox='0 0 640 480' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E' %3Cdefs%3E'  %3ClinearGradient x1='26.8122387%' y1='57.3942933%' x2='48.4739423%' y2='51.3242798%' id='linearGradient-1'%3E'   %3Cstop stop-color='%2345B2A7' offset='0%'%3E%3C/stop%3E'   %3Cstop stop-color='%235FC4BB' offset='100%'%3E%3C/stop%3E'  %3C/linearGradient%3E'  %3ClinearGradient x1='72.5708008%' y1='100%' x2='50%' y2='59.7574888%' id='linearGradient-2'%3E'   %3Cstop stop-color='%23F7D6C7' offset='0%'%3E%3C/stop%3E'   %3Cstop stop-color='%23FDE3D7' offset='100%'%3E%3C/stop%3E'  %3C/linearGradient%3E'  %3ClinearGradient x1='17.3780318%' y1='7.36111912%' x2='59.6350456%' y2='60.5561804%' id='linearGradient-3'%3E'   %3Cstop stop-color='%23F7D6C7' offset='0%'%3E%3C/stop%3E'   %3Cstop stop-color='%23FDE3D7' offset='100%'%3E%3C/stop%3E'  %3C/linearGradient%3E'  %3ClinearGradient x1='90.2720524%' y1='30.679328%' x2='13.2764601%' y2='56.7939208%' id='linearGradient-4'%3E'   %3Cstop stop-color='%2345B2A7' offset='0%'%3E%3C/stop%3E'   %3Cstop stop-color='%235FC4BB' offset='100%'%3E%3C/stop%3E'  %3C/linearGradient%3E' %3C/defs%3E' %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E'  %3Cg id='front' fill-rule='nonzero'%3E'   %3Cpath d='M0,375 C38.6677173,389.93007 8.6243181,425.378788 46.5632198,436.474359 C84.5021215,447.56993 129.364771,420.361305 171.879016,429.213287 C217.227543,438.636364 205.890411,467.395105 256.178688,467.925408 C306.466966,468.455711 334,480 334,480 L0,480 L0,375 Z' id='Path' fill='url(%23linearGradient-1)'%3E%3C/path%3E'   %3Cpath d='M640,352 C640,352 611.235995,355.580976 600.365185,375.99254 C589.494374,396.404103 597.468947,413.155113 590.208515,429.189929 C582.948084,445.224744 546.645925,447.015232 555.334639,480 L640,480 L640,352 Z' id='Path' fill='url(%23linearGradient-2)'%3E%3C/path%3E'   %3Cpath d='M0,64.9924023 C0,64.9924023 25.9248477,65.911729 40.6249154,47.5251945 C55.3249831,29.1386601 37.8686527,9.47306232 59,0 L0,0 L0,64.9924023 Z' id='Path' fill='url(%23linearGradient-3)'%3E%3C/path%3E'   %3Cpath d='M499.790786,0 C499.790786,0 508.20906,9.33096085 495.990303,28.6886121 C483.771546,48.0462633 500.935017,73.2562278 529.499937,73.2562278 C565.992747,74.1156584 580.213908,47.3914591 606.612962,55.044484 C633.012015,62.6975089 640,92 640,92 L640,0 L499.790786,0 Z' id='Path' fill='url(%23linearGradient-4)'%3E%3C/path%3E'  %3C/g%3E' %3C/g%3E'%3C/svg%3E\") no-repeat center;\n            background-size: contain;\n            animation-name: scalingFront;\n            animation-duration: 1s;\n            animation-delay: .5s;\n            animation-fill-mode: forwards;\n            animation-timing-function: ease-out; }\n          html body #app .content .card::before {\n            z-index: -2;\n            background: url(\"data:image/svg+xml;charset=UTF-8, %3Csvg width='640px' height='480px' viewBox='0 0 640 480' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E' %3Cdefs%3E'  %3ClinearGradient x1='32.354182%' y1='63.4794578%' x2='49.5642867%' y2='50.6460103%' id='linearGradient-1'%3E'   %3Cstop stop-color='%2314254C' offset='0%'%3E%3C/stop%3E'   %3Cstop stop-color='%231E3464' offset='100%'%3E%3C/stop%3E'  %3C/linearGradient%3E'  %3ClinearGradient x1='68.6055551%' y1='34.6662201%' x2='15.7900491%' y2='55.2543854%' id='linearGradient-2'%3E'   %3Cstop stop-color='%2314254C' offset='0%'%3E%3C/stop%3E'   %3Cstop stop-color='%231E3464' offset='100%'%3E%3C/stop%3E'  %3C/linearGradient%3E' %3C/defs%3E' %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E'  %3Cg id='back' fill-rule='nonzero'%3E'   %3Cpath d='M0,268 C45.815841,295.878672 10.2263879,362.2177 55.1900299,382.933385 C100.153672,403.649069 153.314657,352.81628 203.71614,369.380687 C257.445257,387.003264 242.186837,456.272605 301.800185,457.290075 C361.413534,458.307545 394,480 394,480 L0,479.959301 L0,268 Z' id='Path' fill='url(%23linearGradient-1)'%3E%3C/path%3E'   %3Cpath d='M640,331 C633.129475,332.112237 604.936629,337.95148 593.880611,358.766196 C581.205676,382.560117 590.484834,402.103706 582.074363,420.773394 C573.742864,439.204745 532.598683,443.057851 541.167097,480 L639.960514,480 L640,331 Z' id='Path' fill='%23FFF0EA'%3E%3C/path%3E'   %3Cpath d='M0,79 C6.61860999,78.921 34.0045951,77.3015 49.6990235,57.749 C66.8598507,36.3795 48.0740953,12.166 69,0 L0.118897186,0 L0,79 Z' id='Path' fill='%23FFF0EA'%3E%3C/path%3E'   %3Cpath d='M458.117079,0 C458.117079,0 469.042768,12.7981132 453.190587,39.3056604 C437.298676,65.8132075 459.626811,100.324528 496.654963,100.324528 C544.012858,101.513208 562.447475,64.9018868 596.694543,75.3622642 C630.941611,85.8226415 640,126 640,126 L640,0 L458.117079,0 Z' id='Path' fill='url(%23linearGradient-2)'%3E%3C/path%3E'  %3C/g%3E' %3C/g%3E'%3C/svg%3E\") no-repeat center;\n            background-size: contain;\n            animation-name: scalingBack;\n            animation-duration: 1s;\n            animation-delay: .5s;\n            animation-fill-mode: forwards;\n            animation-timing-function: ease-out; }\n          html body #app .content .card h1 {\n            font-size: 1.5em;\n            margin: 0; }\n          html body #app .content .card h2 {\n            font-size: 1.15em;\n            font-weight: 400;\n            margin: 0; }\n    html body footer {\n      width: 100%;\n      height: var(--footer-height);\n      background: var(--footer-bg);\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n      display: flex;\n      justify-content: center;\n      align-content: center; }\n\n@media only screen and (min-width: 1366px) {\n  html {\n    font-size: 20px; } }\n\n@media only screen and (min-width: 1800px) {\n  html {\n    font-size: 26px; } }\n\n@media only screen and (max-width: 779px) {\n  html body #app .content {\n    margin-top: 10vh; } }\n\n@media only screen and (max-width: 641px) {\n  html {\n    font-size: 18px; }\n    html body #app .content {\n      max-width: 90vw;\n      margin-top: 0; }\n      html body #app .content .card {\n        width: 90vw;\n        min-height: 90vh;\n        padding: 2em 2em 8em; }\n        html body #app .content .card::after, html body #app .content .card::before {\n          background-size: cover;\n          background-position: -75px center;\n          opacity: 1; } }\n\n/*\n@media (prefers-color-scheme: dark) {\n  :root {\n    --white: #333;\n    --color: #ccc;\n    --color-bg: #222;\n    --gradient-bg: linear-gradient(var(--color-bg), #111);\n  \n    --header-bg: transparent;\n  \n    --footer-bg: transparent;\n  }\n}\n*/\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/style.scss */ "./assets/css/style.scss");
/* harmony import */ var _assets_css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);

var app = document.getElementById('app');
var content = {
  title: 'María Florencia Antacle',
  subtitle: 'UI/UX Visual Designer',
  p1: 'I\'m a UI/UX Visual Designer who loves creating consistent, eye-catching and pixel perfect layouts.',
  p2: 'I also enjoy making ilustrations and taking photographs.',
  p3: 'Portfolio:<br>' + '<a href=\'https://www.behance.net/antacle\' target=\'_blank\'>Behance</a> & ' + '<a href=\'https://dribbble.com/antacle\' target=\'_blank\'>Dribbble</a>',
  p4: 'You can also find me here:<br>' + '<a href=\'https://www.linkedin.com/in/antacle\' target=\'_blank\'>LinkedIn</a>, ' + '<a href=\'https://www.instagram.com/florenciaantacle\' target=\'_blank\'>Instagram</a> & ' + '<a href=\'https://github.com/mfantacle\' target=\'_blank\'>GitHub</a>'
};
var appContent = '<div class="content">' + '<div class="card">' + '<h1>' + content.title + '</h1>' + '<h2>' + content.subtitle + '</h2>' + '<p>' + content.p1 + '</p>' + '<p>' + content.p2 + '</p>' + '<p>' + content.p3 + '</p>' + '<p>' + content.p4 + '</p>' + '</div>' + '</div>';
app.innerHTML = appContent;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map