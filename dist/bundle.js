/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/DOM-Elements/dom-element.js":
/*!*************************************************!*\
  !*** ./src/scripts/DOM-Elements/dom-element.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dom_elements: () => (/* binding */ dom_elements)\n/* harmony export */ });\nlet dom_elements = {\r\n  search_form: document.getElementById(\"search-form\"),\r\n};\r\n\r\nconsole.log(dom_elements);\r\n\n\n//# sourceURL=webpack://word2meaning/./src/scripts/DOM-Elements/dom-element.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_Elements_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-Elements/dom-element */ \"./src/scripts/DOM-Elements/dom-element.js\");\n/* harmony import */ var _utils_getFormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getFormInput */ \"./src/scripts/utils/getFormInput.js\");\n/* harmony import */ var _utils_getDefinition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getDefinition */ \"./src/scripts/utils/getDefinition.js\");\n\r\n\r\n\r\n\r\n_DOM_Elements_dom_element__WEBPACK_IMPORTED_MODULE_0__.dom_elements.search_form.addEventListener(\"submit\", async (e) => {\r\n  e.preventDefault();\r\n  let input_field = _DOM_Elements_dom_element__WEBPACK_IMPORTED_MODULE_0__.dom_elements.search_form[0];\r\n  let form_input_text = (0,_utils_getFormInput__WEBPACK_IMPORTED_MODULE_1__.getFormInput)(input_field);\r\n  let definition = await (0,_utils_getDefinition__WEBPACK_IMPORTED_MODULE_2__.getDefinition)(form_input_text);\r\n  console.log(\"Definition\", definition);\r\n});\r\n\n\n//# sourceURL=webpack://word2meaning/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/utils/fectchData.js":
/*!*****************************************!*\
  !*** ./src/scripts/utils/fectchData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\nconst fetchData = async (url) => {\r\n  try {\r\n    let response = await fetch(url);\r\n    let data = await response.json();\r\n    console.log(data);\r\n    return data;\r\n  } catch (err) {\r\n    if (err) {\r\n      console.log(err);\r\n    }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://word2meaning/./src/scripts/utils/fectchData.js?");

/***/ }),

/***/ "./src/scripts/utils/getDefinition.js":
/*!********************************************!*\
  !*** ./src/scripts/utils/getDefinition.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefinition: () => (/* binding */ getDefinition)\n/* harmony export */ });\n/* harmony import */ var _fectchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fectchData */ \"./src/scripts/utils/fectchData.js\");\n\r\nlet baseURL = \"https://api.dictionaryapi.dev/api/v2/entries/en/\";\r\n\r\n/**\r\n *\r\n * @param {text} prop\r\n */\r\nconst getDefinition = (prop) => {\r\n  let definition = (0,_fectchData__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`${baseURL}${prop}`);\r\n  return definition;\r\n};\r\n\n\n//# sourceURL=webpack://word2meaning/./src/scripts/utils/getDefinition.js?");

/***/ }),

/***/ "./src/scripts/utils/getFormInput.js":
/*!*******************************************!*\
  !*** ./src/scripts/utils/getFormInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFormInput: () => (/* binding */ getFormInput)\n/* harmony export */ });\n// accepts a form DOM node and  extracts user input\r\nconst getFormInput = (prop) => {\r\n  let form_input = prop.value;\r\n  return form_input;\r\n};\r\n\n\n//# sourceURL=webpack://word2meaning/./src/scripts/utils/getFormInput.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;