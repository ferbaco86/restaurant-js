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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nconst renderContact = () => {\n  const content = document.getElementById('content');\n  const sectionContact = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'section', parentElement: content, arrayClassNames: ['contact', 'd-flex'] });\n  const contactInfoContainer = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: sectionContact, arrayClassNames: ['contact-info-container', 'd-flex'] });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'h2', parentElement: contactInfoContainer, arrayClassNames: ['title-contact'], text: 'You can find us in Barrio Italia, Ñuñoa, Santiago',\n  });\n  const contactInfo = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: contactInfoContainer, arrayClassNames: ['contact-info'] });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'h3', parentElement: contactInfo, arrayClassNames: ['contact-info-item'], text: '<strong>Phone:</strong> +5699555555',\n  });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'h3', parentElement: contactInfo, arrayClassNames: ['contact-info-item'], text: '<strong>Address:</strong> Barrio Italia, Ñuñoa, Santiago',\n  });\n  const cardContact = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: sectionContact, arrayClassNames: ['card-contact'] });\n  const map = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'iframe', parentElement: cardContact });\n  map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6658.138982264216!2d-70.63017712355362!3d-33.447496021034944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57e771fd0c3%3A0xd53d947cb0d1ec6e!2sBarrio%20Italia%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1600181279058!5m2!1ses-419!2scl');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderContact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst domManipulation = (() => {\n  const addClasses = (element, arrayClassNames) => {\n    arrayClassNames.forEach(className => {\n      element.classList.add(className);\n    });\n  };\n\n  const addId = (element, newId) => {\n    element.id = newId;\n  };\n\n  const createImage = (source, alt, arrayClassNames = []) => {\n    const img = new Image();\n    img.src = source;\n    img.alt = alt;\n\n    if (arrayClassNames !== []) {\n      addClasses(img, arrayClassNames);\n    }\n\n    return img;\n  };\n\n  const createHtmlElement = ({\n    tag, parentElement, arrayClassNames = [], newId = '', text = '',\n  }) => {\n    const newElement = document.createElement(tag);\n\n    if (arrayClassNames !== []) {\n      addClasses(newElement, arrayClassNames);\n    }\n    if (newId !== '') {\n      addId(newElement, newId);\n    }\n    if (text !== '') {\n      newElement.innerHTML = text;\n    }\n    parentElement.appendChild(newElement);\n    return newElement;\n  };\n\n  return {\n    createHtmlElement, createImage,\n  };\n})();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domManipulation);\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _images_main_salad_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/main-salad_2.png */ \"./src/images/main-salad_2.png\");\n\n\n\nconst renderHome = () => {\n  const content = document.getElementById('content');\n  const sectionHero = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'section', parentElement: content, arrayClassNames: ['hero', 'd-flex'] });\n  const titleContainer = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: sectionHero, arrayClassNames: ['title-container'] });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'h1', parentElement: titleContainer, arrayClassNames: ['headline'], text: 'The <strong>TASTIEST</strong> and <strong>HEALTHIEST</strong> <br> dishes you can find!',\n  });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'p', parentElement: titleContainer, arrayClassNames: ['slogan'], text: 'We dare you to find fresher food!',\n  });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'button', parentElement: titleContainer, newId: 'btn-menu', text: 'Menu',\n  });\n  const mainImgContainer = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: sectionHero, arrayClassNames: ['main-img-container'] });\n  const heroImg = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createImage(_images_main_salad_2_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'main salad dish', ['main-img']);\n  mainImgContainer.appendChild(heroImg);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderHome);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e7e2dcec6df38350735dad139678c888.png\");\n\n//# sourceURL=webpack:///./src/images/logo.png?");

/***/ }),

/***/ "./src/images/main-salad_2.png":
/*!*************************************!*\
  !*** ./src/images/main-salad_2.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4063c029620c3a6a1d42fe2d67a36ba7.png\");\n\n//# sourceURL=webpack:///./src/images/main-salad_2.png?");

/***/ }),

/***/ "./src/images/pattern.png":
/*!********************************!*\
  !*** ./src/images/pattern.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b602b92de7a948bd22b5f7ee8b4379df.png\");\n\n//# sourceURL=webpack:///./src/images/pattern.png?");

/***/ }),

/***/ "./src/images/veg-pattern.png":
/*!************************************!*\
  !*** ./src/images/veg-pattern.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6996258c5e8866c9da0eca84f1fe3c84.png\");\n\n//# sourceURL=webpack:///./src/images/veg-pattern.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./src/layout.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nObject(_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\ndocument.addEventListener('click', (e) => {\n  if (e.target.getAttribute('id') === 'home') {\n    document.getElementsByTagName('section')[0].remove();\n    Object(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n  if (e.target.getAttribute('id') === 'menu' || e.target.getAttribute('id') === 'btn-menu') {\n    document.getElementsByTagName('section')[0].remove();\n    Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n  if (e.target.getAttribute('id') === 'contact') {\n    document.getElementsByTagName('section')[0].remove();\n    Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _images_pattern_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pattern.png */ \"./src/images/pattern.png\");\n/* harmony import */ var _images_veg_pattern_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/veg-pattern.png */ \"./src/images/veg-pattern.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n\n\n\n\n\n\nconst renderLayout = () => {\n  const content = document.getElementById('content');\n  const topPatternImg = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createImage(_images_pattern_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'leaves pattern', ['leaves-pattern']);\n  const bottomPatternImg = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createImage(_images_veg_pattern_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 'vegetables mix inline', ['veg-pattern']);\n  const logoImg = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createImage(_images_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'mr. fresco logo', ['logo']);\n\n  const topPattern = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: content, arrayClassNames: ['top-pattern'] });\n  const bottomPattern = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: content, arrayClassNames: ['bottom-pattern'] });\n  const header = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'header', parentElement: content, arrayClassNames: ['d-flex'] });\n  const navLeft = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'nav', parentElement: header, arrayClassNames: ['nav-left'] });\n  const navRight = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'nav', parentElement: header, arrayClassNames: ['nav-right', 'd-flex'] });\n  const uList = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'ul', parentElement: navRight, arrayClassNames: ['d-flex'] });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'li', parentElement: uList, newId: 'home', text: 'home',\n  });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'li', parentElement: uList, newId: 'menu', text: 'menu',\n  });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'li', parentElement: uList, newId: 'contact', text: 'contact',\n  });\n\n  topPattern.appendChild(topPatternImg);\n  bottomPattern.appendChild(bottomPatternImg);\n  navLeft.appendChild(logoImg);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderLayout);\n\n//# sourceURL=webpack:///./src/layout.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst renderMenu = () => {\n  const content = document.getElementById('content');\n  const sectionMenu = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'section', parentElement: content, arrayClassNames: ['menu', 'd-flex'] });\n  const cardMenuBreakfast = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: sectionMenu, arrayClassNames: ['card', 'd-flex'] });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: cardMenuBreakfast, arrayClassNames: ['card-pic', 'breakfast-pic'] });\n  const infoContainerBreakfast = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: cardMenuBreakfast });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'h3', parentElement: infoContainerBreakfast, arrayClassNames: ['card-title'], text: 'Açai Bowl',\n  });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'p', parentElement: infoContainerBreakfast, arrayClassNames: ['card-text'], text: 'Delicious bowl with a mix of strawberrys, blueberrys, muesli all covered in a fresh açai smoothie',\n  });\n\n  const cardMenuSalmon = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: sectionMenu, arrayClassNames: ['card', 'd-flex'] });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: cardMenuSalmon, arrayClassNames: ['card-pic', 'salmon-pic'] });\n  const infoContainerSalmon = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: cardMenuSalmon });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'h3', parentElement: infoContainerSalmon, arrayClassNames: ['card-title'], text: 'Quinoa Salmon',\n  });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'p', parentElement: infoContainerSalmon, arrayClassNames: ['card-text'], text: 'Grilled Salmon with quinoa and a mix of veggies',\n  });\n\n  const cardMenuPasta = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: sectionMenu, arrayClassNames: ['card', 'd-flex'] });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: cardMenuPasta, arrayClassNames: ['card-pic', 'pasta-pic'] });\n  const infoContainerPasta = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({ tag: 'div', parentElement: cardMenuPasta });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'h3', parentElement: infoContainerPasta, arrayClassNames: ['card-title'], text: 'Tuna Pasta Salad',\n  });\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHtmlElement({\n    tag: 'p', parentElement: infoContainerPasta, arrayClassNames: ['card-text'], text: 'Pasta with tuna, tomato cut in cubes in a bed of fresh arugula and some dressing',\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderMenu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ })

/******/ });