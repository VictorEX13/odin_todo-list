/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Item {
  #title;
  #description;
  #dueDate;
  #priority;
  #complete;

  constructor(title, description, dueDate, priority, complete = false) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#complete = complete;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(value) {
    this.#dueDate = value;
  }

  get priority() {
    return this.#priority;
  }

  set priority(value) {
    this.#priority = value;
  }

  get complete() {
    return this.#complete;
  }

  set complete(value) {
    this.#complete = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Note {
  #title;
  #description;

  constructor(title, description) {
    this.#title = title;
    this.#description = description;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  #title;
  #itemList;

  constructor(title, itemList = []) {
    this.#title = title;
    this.#itemList = itemList;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get itemList() {
    return this.#itemList;
  }

  addItem = (item) => {
    this.#itemList.push(item);
  };

  removeItem = (index) => {
    this.#itemList.splice(index, 1);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.js */ "./src/item.js");
/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.js */ "./src/note.js");




const inbox = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox");

const project1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("1");
const project2 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("2");

const item1 = new _item_js__WEBPACK_IMPORTED_MODULE_1__["default"]("1", "a", "12", 1, false);
const item2 = new _item_js__WEBPACK_IMPORTED_MODULE_1__["default"]("2", "b", "23", 1, true);
const item3 = new _item_js__WEBPACK_IMPORTED_MODULE_1__["default"]("3", "c", "34", 2, true);
const item4 = new _item_js__WEBPACK_IMPORTED_MODULE_1__["default"]("4", "d", "45", 1, true);
const item5 = new _item_js__WEBPACK_IMPORTED_MODULE_1__["default"]("5", "e", "56", 3, false);
const item6 = new _item_js__WEBPACK_IMPORTED_MODULE_1__["default"]("6", "f", "67", 2, true);

project1.addItem(item1);
project1.addItem(item2);
project1.addItem(item3);
project1.addItem(item4);

project2.addItem(item5);
project2.addItem(item6);

console.log(inbox);
console.log(project1);
console.log(project2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeERwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7OztVQzlCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ047QUFDQTtBQUM3QjtBQUNBLGtCQUFrQixtREFBTztBQUN6QjtBQUNBLHFCQUFxQixtREFBTztBQUM1QixxQkFBcUIsbURBQU87QUFDNUI7QUFDQSxrQkFBa0IsZ0RBQUk7QUFDdEIsa0JBQWtCLGdEQUFJO0FBQ3RCLGtCQUFrQixnREFBSTtBQUN0QixrQkFBa0IsZ0RBQUk7QUFDdEIsa0JBQWtCLGdEQUFJO0FBQ3RCLGtCQUFrQixnREFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0Ly4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEl0ZW0ge1xyXG4gICN0aXRsZTtcclxuICAjZGVzY3JpcHRpb247XHJcbiAgI2R1ZURhdGU7XHJcbiAgI3ByaW9yaXR5O1xyXG4gICNjb21wbGV0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLiNjb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRpdGxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLiN0aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGR1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBkdWVEYXRlKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNkdWVEYXRlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcclxuICAgIHRoaXMuI3ByaW9yaXR5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29tcGxldGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY29tcGxldGU7XHJcbiAgfVxyXG5cclxuICBzZXQgY29tcGxldGUodmFsdWUpIHtcclxuICAgIHRoaXMuI2NvbXBsZXRlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xyXG4iLCJjbGFzcyBOb3RlIHtcclxuICAjdGl0bGU7XHJcbiAgI2Rlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRpdGxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLiN0aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcclxuIiwiY2xhc3MgUHJvamVjdCB7XHJcbiAgI3RpdGxlO1xyXG4gICNpdGVtTGlzdDtcclxuXHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGl0ZW1MaXN0ID0gW10pIHtcclxuICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLiNpdGVtTGlzdCA9IGl0ZW1MaXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRpdGxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLiN0aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGl0ZW1MaXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2l0ZW1MaXN0O1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICB0aGlzLiNpdGVtTGlzdC5wdXNoKGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIHJlbW92ZUl0ZW0gPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuI2l0ZW1MaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW0uanNcIjtcclxuaW1wb3J0IE5vdGUgZnJvbSBcIi4vbm90ZS5qc1wiO1xyXG5cclxuY29uc3QgaW5ib3ggPSBuZXcgUHJvamVjdChcIkluYm94XCIpO1xyXG5cclxuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIjFcIik7XHJcbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoXCIyXCIpO1xyXG5cclxuY29uc3QgaXRlbTEgPSBuZXcgSXRlbShcIjFcIiwgXCJhXCIsIFwiMTJcIiwgMSwgZmFsc2UpO1xyXG5jb25zdCBpdGVtMiA9IG5ldyBJdGVtKFwiMlwiLCBcImJcIiwgXCIyM1wiLCAxLCB0cnVlKTtcclxuY29uc3QgaXRlbTMgPSBuZXcgSXRlbShcIjNcIiwgXCJjXCIsIFwiMzRcIiwgMiwgdHJ1ZSk7XHJcbmNvbnN0IGl0ZW00ID0gbmV3IEl0ZW0oXCI0XCIsIFwiZFwiLCBcIjQ1XCIsIDEsIHRydWUpO1xyXG5jb25zdCBpdGVtNSA9IG5ldyBJdGVtKFwiNVwiLCBcImVcIiwgXCI1NlwiLCAzLCBmYWxzZSk7XHJcbmNvbnN0IGl0ZW02ID0gbmV3IEl0ZW0oXCI2XCIsIFwiZlwiLCBcIjY3XCIsIDIsIHRydWUpO1xyXG5cclxucHJvamVjdDEuYWRkSXRlbShpdGVtMSk7XHJcbnByb2plY3QxLmFkZEl0ZW0oaXRlbTIpO1xyXG5wcm9qZWN0MS5hZGRJdGVtKGl0ZW0zKTtcclxucHJvamVjdDEuYWRkSXRlbShpdGVtNCk7XHJcblxyXG5wcm9qZWN0Mi5hZGRJdGVtKGl0ZW01KTtcclxucHJvamVjdDIuYWRkSXRlbShpdGVtNik7XHJcblxyXG5jb25zb2xlLmxvZyhpbmJveCk7XHJcbmNvbnNvbGUubG9nKHByb2plY3QxKTtcclxuY29uc29sZS5sb2cocHJvamVjdDIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=