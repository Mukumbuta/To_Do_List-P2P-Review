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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background-color: rgb(237, 237, 237);\\r\\n}\\r\\n\\r\\nsection {\\r\\n  background-color: #fff;\\r\\n  width: 90%;\\r\\n  box-shadow: 1px 3px 8px 7px rgb(186, 185, 185);\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-family: cursive;\\r\\n  font-weight: 500;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.add-todo {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 2px solid rgb(199, 195, 195);\\r\\n  margin-bottom: 8px;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.refresh-icon {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-right: 1%;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 10px;\\r\\n  border-bottom: 2px solid rgb(199, 195, 195);\\r\\n}\\r\\n\\r\\n.inputt {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding-bottom: 8px;\\r\\n  margin-bottom: -10px;\\r\\n  border-bottom: 2px solid rgb(199, 195, 195);\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 16px;\\r\\n  height: 16px;\\r\\n  margin-right: 1%;\\r\\n  margin-top: 8px;\\r\\n}\\r\\n\\r\\n.inputt img {\\r\\n  margin-top: 15px;\\r\\n}\\r\\n\\r\\nimg:hover {\\r\\n  cursor: all-scroll;\\r\\n}\\r\\n\\r\\n#enter-todo {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  color: gray;\\r\\n  font-family: cursive;\\r\\n  font-size: large;\\r\\n  padding-top: 9px;\\r\\n  padding-bottom: 9px;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  font-family: cursive;\\r\\n  list-style: none;\\r\\n  margin-left: -40px;\\r\\n  padding: 5px 0 5px 0;\\r\\n  color: rgb(79, 76, 76);\\r\\n}\\r\\n\\r\\n#complete {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-family: cursive;\\r\\n  font-size: large;\\r\\n  background-color: rgb(218, 217, 217);\\r\\n  height: 60px;\\r\\n  margin-top: -22px;\\r\\n}\\r\\n\\r\\n#error {\\r\\n  color: red;\\r\\n  font-family: cursive;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\nul.active {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.remove {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.edit:hover + .remove {\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\nlabel.active {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ statusManager)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n/* harmony import */ var _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _modules_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/constructor.js */ \"./src/modules/constructor.js\");\n// import _ from 'lodash';\n\n\n\n\n\n(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_1__.handleUI)();\n(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_1__.add)();\n\n// Handle DOM events\n// Add task to list\nconst enterTodo = document.getElementById('enter-todo');\nenterTodo.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    // e.preventDefault();\n    const description = document.getElementById('enter-todo').value;\n    const complete = false;\n    const todoList = (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)();\n    const index = todoList.length + 1;\n    if (description === '') {\n      const error = document.getElementById('error');\n      error.textContent = 'Task description cannot be empty!';\n      setTimeout(() => {\n        error.textContent = '';\n      }, 2000);\n    } else {\n      const newTodo = new _modules_constructor_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](description, complete, index);\n      window.location.reload();\n      (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.addLocalStorage)(newTodo);\n    }\n  }\n});\n\n// Remove task from list\nconst removeBtn = document.querySelectorAll('.remove');\nremoveBtn.forEach((btn) => {\n  btn.addEventListener('click', (e) => {\n    const btnID = e.target.id;\n    (0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_1__.remove)(btnID);\n    btn.parentElement.parentElement.remove();\n    window.location.reload();\n  });\n});\n\n// Store checked status in localStorage\n/* eslint-disable no-plusplus */\nconst boxes = document.getElementsByClassName('entertodo').length;\nfunction statusManager(id) {\n  for (let i = 1; i <= boxes; i++) {\n    const checkbox = document.getElementById(String(i));\n    localStorage.setItem(`checkbox${String(i)}`, checkbox.checked);\n\n    const getTodos = (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)().localTodos;\n    const completedTasks = getTodos.filter((task) => task.index === parseInt(id, 10));\n    completedTasks[0].complete = true;\n    getTodos[id - 1].complete = completedTasks[0].complete;\n    localStorage.setItem('todolist', JSON.stringify(getTodos));\n  }\n}\n\n// Render checkbox status to UI\nfor (let i = 1; i <= boxes; i++) {\n  const getTodos = (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)().localTodos;\n  if (getTodos[i - 1].complete === true) {\n    const checked = JSON.parse(localStorage.getItem(`checkbox${String(i)}`));\n    document.getElementById(String(i)).checked = checked;\n  }\n}\n\n// Listens to changes on the Checkboxes\nwindow.addEventListener('change', (e) => {\n  const { id } = e.target;\n  const targetElement = e.target;\n  const labelElement = targetElement.nextElementSibling;\n  labelElement.classList.add('active');\n\n  statusManager(id);\n});\n\n// Clear everything from the  on refresh icon click\nconst ul = document.getElementById('to-do-container');\nconst refresh = document.getElementById('refreshIcon');\nrefresh.addEventListener('click', () => {\n  ul.classList.add('active');\n  localStorage.clear();\n  window.location.reload();\n});\n\n// Delete all completed tasks\nconst deleteAllChecked = document.getElementById('complete');\ndeleteAllChecked.addEventListener('click', () => {\n  const getTasks = (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)().localTodos;\n  let incompleteTodos = getTasks.filter((task) => task.complete !== true);\n  // reset the indices of the remaining tasks after deletion\n  incompleteTodos = incompleteTodos.map((task, index) => {\n    const result = {\n      ...task,\n      index: index + 1,\n    };\n    return result;\n  });\n  localStorage.setItem('todolist', JSON.stringify(incompleteTodos));\n  window.location.reload();\n});\n\n// Event: Edit To Do Item\nconst editBtn = document.querySelectorAll('.edit');\neditBtn.forEach((btn) => {\n  btn.addEventListener('click', (e) => {\n    const { id } = e.target;\n    (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.editLocalStorage)(id);\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"handleUI\": () => (/* binding */ handleUI),\n/* harmony export */   \"remove\": () => (/* binding */ remove)\n/* harmony export */ });\n/* harmony import */ var _assets_refresh_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/refresh.svg */ \"./src/assets/refresh.svg\");\n/* harmony import */ var _assets_enter_12_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/enter-12.svg */ \"./src/assets/enter-12.svg\");\n/* harmony import */ var _assets_delete_524_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/delete-524.svg */ \"./src/assets/delete-524.svg\");\n/* harmony import */ var _assets_three_dots_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/three-dots.svg */ \"./src/assets/three-dots.svg\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n\n\n\n\n\n\nconst handleUI = () => {\n// Add logic for rendering image here\n  const refreshImageCont = document.querySelector('.refresh-icon');\n  const enterImageCont = document.querySelector('.inputt');\n\n  const myIcon = new Image();\n  myIcon.src = _assets_refresh_svg__WEBPACK_IMPORTED_MODULE_0__;\n  myIcon.id = 'refreshIcon';\n\n  refreshImageCont.appendChild(myIcon);\n\n  const enterIcon = new Image();\n  enterIcon.src = _assets_enter_12_svg__WEBPACK_IMPORTED_MODULE_1__;\n  enterIcon.id = 'enter';\n  enterImageCont.appendChild(enterIcon);\n};\n\nconst add = () => {\n  const list = (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_4__.getLocalStorage)().localTodos;\n  const container = document.getElementById('to-do-container');\n  list.forEach((todoObj) => {\n    const todo = document.createElement('li');\n    todo.classList.add('list-item');\n\n    todo.innerHTML = `<div class=\"list\">\n                          <div class=\"task\">\n                            <input type=\"checkbox\" class=\"entertodo\" id=\"${todoObj.index}\">\n                            <label for=\"enter-todo\">\n                              ${todoObj.description}\n                            </label>\n                          </div>\n                          <div class=\"image\">\n                            <img src=\"${_assets_three_dots_svg__WEBPACK_IMPORTED_MODULE_3__}\" class=\"edit\" id=\"${todoObj.index}\" alt=\"three-dots icon\">\n                            <img src=\"${_assets_delete_524_svg__WEBPACK_IMPORTED_MODULE_2__}\" class=\"remove\" id=\"${todoObj.index}\" alt=\"dust-bin icon\">\n                          </div>\n                        </div>`;\n\n    container.appendChild(todo);\n    return container;\n  });\n};\n\nconst remove = (todoID) => {\n  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_4__.removeLocalStorage)(todoID);\n};\n\n//# sourceURL=webpack://to-do-list-webpack/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\nclass List {\n  constructor(description, complete, index) {\n    this.description = description;\n    this.complete = complete;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://to-do-list-webpack/./src/modules/constructor.js?");

/***/ }),

/***/ "./src/modules/localstorage.js":
/*!*************************************!*\
  !*** ./src/modules/localstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLocalStorage\": () => (/* binding */ addLocalStorage),\n/* harmony export */   \"editLocalStorage\": () => (/* binding */ editLocalStorage),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"removeLocalStorage\": () => (/* binding */ removeLocalStorage)\n/* harmony export */ });\nconst getLocalStorage = () => {\n  let localTodos;\n  if (!localStorage.getItem('todolist')) {\n    localTodos = [];\n  } else {\n    localTodos = JSON.parse(localStorage.getItem('todolist'));\n  }\n\n  const { length } = localTodos;\n  return { localTodos, length };\n};\n\nconst addLocalStorage = (addedTodo) => {\n  const alltodos = getLocalStorage().localTodos;\n  alltodos.push(addedTodo);\n  localStorage.setItem('todolist', JSON.stringify(alltodos));\n};\n\nconst removeLocalStorage = (todoIndex) => {\n  let alllocaltodos = getLocalStorage().localTodos;\n  alllocaltodos = alllocaltodos.filter((todo) => todo.index !== parseInt(todoIndex, 10));\n\n  // reset the indices of the remaining tasks after deletion\n  alllocaltodos = alllocaltodos.map((task, index) => {\n    const result = {\n      ...task,\n      index: index + 1,\n    };\n    return result;\n  });\n  localStorage.setItem('todolist', JSON.stringify(alllocaltodos));\n};\n\n// Edit To DO Item\nconst editLocalStorage = (id) => {\n  const inputBox = document.getElementById('enter-todo');\n  const localToDos = getLocalStorage().localTodos;\n  const edited = localToDos.filter((todo) => todo.index === parseInt(id, 10));\n  inputBox.value = edited[0].description;\n\n  // Save the changed to the edited to do item\n  inputBox.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      edited.description = inputBox.value;\n      inputBox.value = '';\n      localToDos[id - 1].description = edited.description;\n      localStorage.setItem('todolist', JSON.stringify(localToDos));\n    }\n  });\n};\n\n\n//# sourceURL=webpack://to-do-list-webpack/./src/modules/localstorage.js?");

/***/ }),

/***/ "./src/assets/delete-524.svg":
/*!***********************************!*\
  !*** ./src/assets/delete-524.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0da6f82342ac25bd9fd7.svg\";\n\n//# sourceURL=webpack://to-do-list-webpack/./src/assets/delete-524.svg?");

/***/ }),

/***/ "./src/assets/enter-12.svg":
/*!*********************************!*\
  !*** ./src/assets/enter-12.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a9a3570cbcc768c46694.svg\";\n\n//# sourceURL=webpack://to-do-list-webpack/./src/assets/enter-12.svg?");

/***/ }),

/***/ "./src/assets/refresh.svg":
/*!********************************!*\
  !*** ./src/assets/refresh.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28f8c2e89e5c9d6aa867.svg\";\n\n//# sourceURL=webpack://to-do-list-webpack/./src/assets/refresh.svg?");

/***/ }),

/***/ "./src/assets/three-dots.svg":
/*!***********************************!*\
  !*** ./src/assets/three-dots.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07ac13d60cac76b08318.svg\";\n\n//# sourceURL=webpack://to-do-list-webpack/./src/assets/three-dots.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;