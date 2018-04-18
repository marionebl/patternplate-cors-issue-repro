window["patternplate-components"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@patternplate/webpack-entry/lib/loader.js?entry=lib%2F**%2Fdemo.js&cwd=%2FUsers%2Fmarneb%2FDocuments%2Fpp%2Fpatternplate-cors-issue-repro!./");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/hello-world/demo.js":
/*!*********************************!*\
  !*** ./lib/hello-world/demo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// lib/hello-world/demo.js\nmodule.exports = {\n  html: () => `\n    <link data-import rel=\"import\" href=\"../static/component.html\">\n  `,\n  default: function() {\n    const el = document.querySelector(\"[data-import]\");\n    const content = el.import;\n    const defaultExport = content.querySelector(\"[data-export=\\\"default\\\"]\");\n\n    document.body.appendChild(defaultExport);\n  }\n};\n\n\n//# sourceURL=webpack://patternplate-%5Bname%5D/./lib/hello-world/demo.js?");

/***/ }),

/***/ "./node_modules/@patternplate/webpack-entry/lib/loader.js?entry=lib%2F**%2Fdemo.js&cwd=%2FUsers%2Fmarneb%2FDocuments%2Fpp%2Fpatternplate-cors-issue-repro!./":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@patternplate/webpack-entry/lib/loader.js?entry=lib%2F**%2Fdemo.js&cwd=%2FUsers%2Fmarneb%2FDocuments%2Fpp%2Fpatternplate-cors-issue-repro ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    module.exports['lib/hello-world/demo.js'] = __webpack_require__(/*! ./lib/hello-world/demo.js */ \"./lib/hello-world/demo.js\");\nmodule.exports['lib/hello-world/demo.js'].js = () => __webpack_require__(/*! ./node_modules/raw-loader!./lib/hello-world/demo.js */ \"./node_modules/raw-loader/index.js!./lib/hello-world/demo.js\")\n  \n\n//# sourceURL=webpack://patternplate-%5Bname%5D/./node_modules/@patternplate/webpack-entry/lib/loader.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./lib/hello-world/demo.js":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader!./lib/hello-world/demo.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\n// lib/hello-world/demo.js\\nmodule.exports = {\\n  html: () => `\\n    <link data-import rel=\\\"import\\\" href=\\\"../static/component.html\\\">\\n  `,\\n  default: function() {\\n    const el = document.querySelector(\\\"[data-import]\\\");\\n    const content = el.import;\\n    const defaultExport = content.querySelector(\\\"[data-export=\\\\\\\"default\\\\\\\"]\\\");\\n\\n    document.body.appendChild(defaultExport);\\n  }\\n};\\n\"\n\n//# sourceURL=webpack://patternplate-%5Bname%5D/./lib/hello-world/demo.js?./node_modules/raw-loader");

/***/ })

/******/ });