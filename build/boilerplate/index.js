/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/boilerplate/edit.js":
/*!*********************************!*\
  !*** ./src/boilerplate/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './editor.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Boilerplate – hello from the editor!', 'boilerplate')
  });
}

/***/ }),

/***/ "./src/boilerplate/save.js":
/*!*********************************!*\
  !*** ./src/boilerplate/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: 'Boilerplate – hello from the saved content!'
  });
}

/***/ }),

/***/ "./src/boilerplate/style.scss":
/*!************************************!*\
  !*** ./src/boilerplate/style.scss ***!
  \************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: No PostCSS config found in: /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/src/boilerplate\n    at loadConfig (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/postcss-loader/dist/utils.js:58:11)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async Object.loader (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/postcss-loader/dist/index.js:54:22)\n    at tryRunOrWebpackError (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/HookWebpackError.js:86:9)\n    at __webpack_require_module__ (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5299:12)\n    at __webpack_require__ (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5256:18)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5328:20\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5234:43\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3463:5)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5196:16\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3463:5)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5164:15\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3527:9)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5110:8\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:3531:6\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Cache.js:111:20)\n    at ItemCacheFacade.store (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:3530:11\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Cache.js:97:5\n    at Hook.eval [as callAsync] (eval at create (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Cache.js:79:18)\n    at ItemCacheFacade.get (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:3498:9)\n    at codeGen (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5098:11)\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3463:5)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5128:14\n    at processQueue (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: No PostCSS config found in: /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/src/boilerplate\n    at loadConfig (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/postcss-loader/dist/utils.js:58:11)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async Object.loader (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/postcss-loader/dist/index.js:54:22)\n    at Object.<anonymous> (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/src/boilerplate/style.scss:1:7)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:494:10\n    at Hook.eval [as call] (eval at create (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/Hook.js:14:14)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5301:39\n    at tryRunOrWebpackError (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/HookWebpackError.js:81:7)\n    at __webpack_require_module__ (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5299:12)\n    at __webpack_require__ (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5256:18)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5328:20\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5234:43\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3463:5)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5196:16\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3463:5)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5164:15\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3527:9)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5110:8\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:3531:6\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Cache.js:111:20)\n    at ItemCacheFacade.store (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:3530:11\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Cache.js:97:5\n    at Hook.eval [as callAsync] (eval at create (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Cache.js:79:18)\n    at ItemCacheFacade.get (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:3498:9)\n    at codeGen (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5098:11)\n    at symbolIterator (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/neo-async/async.js:3463:5)\n    at /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/Compilation.js:5128:14\n    at processQueue (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/src/boilerplate/style.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\\nError: No PostCSS config found in: /Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/src/boilerplate\\n    at loadConfig (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/postcss-loader/dist/utils.js:58:11)\\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\\n    at async Object.loader (/Users/wilbertcaba/Local Sites/gutenberg-playground/app/public/wp-content/plugins/text-box/node_modules/postcss-loader/dist/index.js:54:22)\");");

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/boilerplate/block.json":
/*!************************************!*\
  !*** ./src/boilerplate/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/boilerplate","version":"0.1.0","title":"Boilerplate","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"boilerplate","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/boilerplate/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/boilerplate/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/boilerplate/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/boilerplate/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/boilerplate/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map