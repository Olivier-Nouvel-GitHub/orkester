"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useFetchNews.tsx":
/*!************************************!*\
  !*** ./src/hooks/useFetchNews.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useFetchNews: function() { return /* binding */ useFetchNews; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_actions_newsAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/newsAction */ \"./src/store/actions/newsAction.tsx\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst useFetchNews = ()=>{\n    _s();\n    const filter = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectFilter);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        dispatch((0,_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.setResetStore)([]));\n        dispatch((0,_store_actions_newsAction__WEBPACK_IMPORTED_MODULE_1__.fetchNewsRequest)({\n            query: \"\".concat(filter),\n            page: 1\n        }));\n    }, [\n        filter,\n        dispatch\n    ]);\n};\n_s(useFetchNews, \"gG3iFWyGEzcYemSP8tyjvJ2rAvM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRmV0Y2hOZXdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ3FCO0FBQ1E7QUFDVTtBQUVsRSxNQUFNTSxlQUFlOztJQUMxQixNQUFNQyxTQUFTTCx3REFBV0EsQ0FBQ0Usa0VBQVlBO0lBQ3ZDLE1BQU1JLFdBQVdQLHdEQUFXQTtJQUM1QkQsZ0RBQVNBLENBQUM7UUFDUlEsU0FBU0gsdUVBQWFBLENBQUMsRUFBRTtRQUN6QkcsU0FBU0wsMkVBQWdCQSxDQUFDO1lBQUVNLE9BQU8sR0FBVSxPQUFQRjtZQUFVRyxNQUFNO1FBQUU7SUFDMUQsR0FBRztRQUFDSDtRQUFRQztLQUFTO0FBQ3ZCLEVBQUU7R0FQV0Y7O1FBQ0lKLG9EQUFXQTtRQUNURCxvREFBV0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUZldGNoTmV3cy50c3g/NTFjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGZldGNoTmV3c1JlcXVlc3QgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9uZXdzQWN0aW9uXCI7XHJcbmltcG9ydCB7IHNlbGVjdEZpbHRlciwgc2V0UmVzZXRTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvbmV3c1NsaWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZldGNoTmV3cyA9ICgpID0+IHtcclxuICBjb25zdCBmaWx0ZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RGaWx0ZXIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0UmVzZXRTdG9yZShbXSkpO1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hOZXdzUmVxdWVzdCh7IHF1ZXJ5OiBgJHtmaWx0ZXJ9YCwgcGFnZTogMSB9KSk7XHJcbiAgfSwgW2ZpbHRlciwgZGlzcGF0Y2hdKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaE5ld3NSZXF1ZXN0Iiwic2VsZWN0RmlsdGVyIiwic2V0UmVzZXRTdG9yZSIsInVzZUZldGNoTmV3cyIsImZpbHRlciIsImRpc3BhdGNoIiwicXVlcnkiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useFetchNews.tsx\n"));

/***/ })

});