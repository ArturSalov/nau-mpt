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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/app.js":
/*!***************************!*\
  !*** ./javascript/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./javascript/controller.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./javascript/view.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ \"./javascript/model.js\");\n\r\n\r\n\r\nwindow.onload = function() {\r\n    \r\n\r\n\r\nlet view = new _view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nlet model = new _model_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nlet controller=new _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](view, model);\r\n };\r\n\n\n//# sourceURL=webpack:///./javascript/app.js?");

/***/ }),

/***/ "./javascript/controller.js":
/*!**********************************!*\
  !*** ./javascript/controller.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nclass Controller {\r\n\tconstructor(view, model)\r\n\t{\r\n\t\tthis.view = view;\r\n\t\tthis.model = model;\r\n\t\tthis.view.setSubmit =() => this.handleClick();\r\n\t\tthis.view.setQuestion = this.model.getNextQuestion();\r\n\t}\r\n\r\n\thandleClick()\r\n\t{\r\n        let result = this.model.check(this.view.getAnswer);\r\n        this.view.setError = result;\r\n        if (result == \"\") \r\n\t\t{\r\n            this.view.setQuestion = this.model.getNextQuestion();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./javascript/controller.js?");

/***/ }),

/***/ "./javascript/model.js":
/*!*****************************!*\
  !*** ./javascript/model.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\nclass Model\r\n{\r\n\tconstructor()\r\n\t{\r\n\t\tthis.count = -1;\r\n\t\tthis.question = [\"Привіт\", \"Як тебе звати?\", \"Скільки тобі років?\", \"Ну ми починаємо!\"];\r\n\t\tthis.options = [\"Привіт\", \"Hi\", \"Хай\", \"Добрий день\"];\r\n        this.numbers = /^[0-9]+$/i;    \r\n        this.symbol = /^[a-zа-яёії]+$/i;\r\n\t}\r\n\r\n\tgetNextQuestion()\r\n\t{\r\n        this.count++;\r\n        return this.question[this.count];\r\n\t}\r\n\r\n\tcheckGreeting(greeting) \r\n    {\r\n        return this.options.includes(greeting)? \"\" : \"Привітайся нормально!\";\r\n    }\r\n\tcheckname(name) \r\n    {\r\n        return this.checkSymbol(name, this.symbol) ? \"\" : \"Ти ж не робот, напиши нормально!\";\r\n    }\r\n\r\n    checkSymbol(str, myRe) \r\n    {\r\n        return myRe.test(str);\r\n    }\r\n\r\n\tcheck_age(age) \r\n    {\r\n        return !this.checkSymbol(age, this.numbers) ?  \"Дані введені не коректно!\":\r\n                        age < 10 ? \"Йди звідси, щеня!\":\r\n                        age > 100 ? \"Що ти тут забув, старий?\":\"\";\r\n    }\r\n\r\n\tcheck (str) {\r\n\t\tswitch(this.count)\t\r\n\t\t{\r\n\t\t\tcase 0: return this.checkGreeting(str);\r\n\t\t\tcase 1: return this.checkname(str);\r\n\t\t\tcase 2: return this.check_age(str);\r\n\t\t\tdefault: return \"Не поспішай!\";\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./javascript/model.js?");

/***/ }),

/***/ "./javascript/view.js":
/*!****************************!*\
  !*** ./javascript/view.js ***!
  \****************************/
/*! exports provided: viewBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewBase\", function() { return viewBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass viewBase\r\n{\r\n\tconstructor()\r\n\t{\r\n\t\tlet id = 0;\r\n\t}\r\n\tinit(nodeName, elementId, elementType)\r\n\t{\r\n\t\tlet element = document.createElement(nodeName);\r\n\t\tif(elementId!=undefined)\r\n     \t\telement.setAttribute(\"id\",  elementId);\r\n     \telse \r\n     \t{\r\n     \t\telement.setAttribute(\"id\",  id);\r\n     \t\tid++;\r\n     \t}\r\n\t\tif(elementType!=undefined)\r\n     \t\telement.setAttribute(\"type\", elementType);\r\n     \tdocument.body.appendChild(element);\r\n     \treturn element;\r\n\t}\r\n}\r\n\r\nclass View extends viewBase\r\n{\r\n    constructor()\r\n    {\r\n\t\tsuper()\r\n\t\tlet question = super.init(\"label\",  \"question\");\r\n\t\tlet answer = super.init(\"input\",  \"answer\", \"text\");\r\n\t\tlet submit = super.init(\"input\",\"submit\",  \"submit\");\r\n\t\tlet error = super.init(\"label\",\"error\");\r\n    }\r\n\r\n\tset setQuestion(text)\r\n\t{\r\n\t\tquestion.innerHTML = text;\r\n\t}\r\n\r\n\tget getAnswer()\r\n\t{\r\n\t\treturn answer.value;\r\n\t}\r\n\r\n\tset setError(text){\r\n\t\terror.innerHTML = text || \"\";\r\n\t}\r\n\r\n\tset setSubmit(func)\r\n\t{\r\n\t\tsubmit.onclick = func;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./javascript/view.js?");

/***/ })

/******/ });