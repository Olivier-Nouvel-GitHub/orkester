"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/actions/newsAction.tsx":
/*!******************************************!*\
  !*** ./src/store/actions/newsAction.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchMoreData: function() { return /* binding */ fetchMoreData; },\n/* harmony export */   fetchMoreDataFailure: function() { return /* binding */ fetchMoreDataFailure; },\n/* harmony export */   fetchMoreDataSuccess: function() { return /* binding */ fetchMoreDataSuccess; },\n/* harmony export */   fetchNewsFailure: function() { return /* binding */ fetchNewsFailure; },\n/* harmony export */   fetchNewsRequest: function() { return /* binding */ fetchNewsRequest; },\n/* harmony export */   fetchNewsSuccess: function() { return /* binding */ fetchNewsSuccess; },\n/* harmony export */   storeNewsDetails: function() { return /* binding */ storeNewsDetails; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst fetchNewsRequest = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"FETCH_NEWS_REQUEST\");\nconst fetchNewsSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"FETCH_NEWS_SUCCESS\");\nconst fetchNewsFailure = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"FETCH_NEWS_FAILURE\");\nconst fetchMoreData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"FETCH_MORE_DATA\");\nconst fetchMoreDataSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"FETCH_MORE_DATA_SUCCESS\");\nconst fetchMoreDataFailure = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"FETCH_MORE_DATA_FAILURE\");\nconst storeNewsDetails = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"STORE_NEWS_DETAILS\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYWN0aW9ucy9uZXdzQWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRDtBQUd6QyxNQUFNQyxtQkFBbUJELDhEQUFZQSxDQUMxQyxzQkFDQTtBQUNLLE1BQU1FLG1CQUFtQkYsOERBQVlBLENBR3pDLHNCQUFzQjtBQUNsQixNQUFNRyxtQkFBbUJILDhEQUFZQSxDQUMxQyxzQkFDQTtBQUNLLE1BQU1JLGdCQUFnQkosOERBQVlBLENBQW1CLG1CQUFtQjtBQUV4RSxNQUFNSyx1QkFBdUJMLDhEQUFZQSxDQUc3QywyQkFBMkI7QUFFdkIsTUFBTU0sdUJBQXVCTiw4REFBWUEsQ0FDOUMsMkJBQ0E7QUFFSyxNQUFNTyxtQkFBbUJQLDhEQUFZQSxDQUMxQyxzQkFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYWN0aW9ucy9uZXdzQWN0aW9uLnRzeD83M2FiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IE5ld3NJdGVtVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy9kYXRhVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaE5ld3NSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uPHsgcXVlcnk6IHN0cmluZzsgcGFnZTogbnVtYmVyIH0+KFxyXG4gIFwiRkVUQ0hfTkVXU19SRVFVRVNUXCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IGZldGNoTmV3c1N1Y2Nlc3MgPSBjcmVhdGVBY3Rpb248e1xyXG4gIGFydGljbGVzOiBOZXdzSXRlbVR5cGVbXTtcclxuICBwYWdlOiBudW1iZXI7XHJcbn0+KFwiRkVUQ0hfTkVXU19TVUNDRVNTXCIpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hOZXdzRmFpbHVyZSA9IGNyZWF0ZUFjdGlvbjx7IGVycm9yOiBzdHJpbmcgfT4oXHJcbiAgXCJGRVRDSF9ORVdTX0ZBSUxVUkVcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hNb3JlRGF0YSA9IGNyZWF0ZUFjdGlvbjx7IHBhZ2U6IG51bWJlciB9PihcIkZFVENIX01PUkVfREFUQVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaE1vcmVEYXRhU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbjx7XHJcbiAgYXJ0aWNsZXM6IE5ld3NJdGVtVHlwZVtdO1xyXG4gIHBhZ2U6IG51bWJlcjtcclxufT4oXCJGRVRDSF9NT1JFX0RBVEFfU1VDQ0VTU1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaE1vcmVEYXRhRmFpbHVyZSA9IGNyZWF0ZUFjdGlvbjx7IGVycm9yOiBzdHJpbmcgfT4oXHJcbiAgXCJGRVRDSF9NT1JFX0RBVEFfRkFJTFVSRVwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmVOZXdzRGV0YWlscyA9IGNyZWF0ZUFjdGlvbjx7IG5ld3M6IE5ld3NJdGVtVHlwZSB9PihcclxuICBcIlNUT1JFX05FV1NfREVUQUlMU1wiXHJcbik7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVBY3Rpb24iLCJmZXRjaE5ld3NSZXF1ZXN0IiwiZmV0Y2hOZXdzU3VjY2VzcyIsImZldGNoTmV3c0ZhaWx1cmUiLCJmZXRjaE1vcmVEYXRhIiwiZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MiLCJmZXRjaE1vcmVEYXRhRmFpbHVyZSIsInN0b3JlTmV3c0RldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/actions/newsAction.tsx\n"));

/***/ })

});