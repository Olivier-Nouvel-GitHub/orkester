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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/MainLayout */ \"./src/components/layout/MainLayout.tsx\");\n/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/News */ \"./src/components/News.tsx\");\n\n\n\nfunction App() {\n    const newsItems = [\n        {\n            img: \"https://placeholder.com/600x400\",\n            source: \"Le Monde\",\n            title: \"L'innovation dans l'\\xe9nergie renouvelable atteint des sommets in\\xe9gal\\xe9s en 2024\"\n        },\n        {\n            img: \"https://placeholder.com/600x400\",\n            source: \"Le Figaro\",\n            title: \"Les \\xe9lections municipales marqu\\xe9es par une participation historique\"\n        },\n        {\n            img: \"https://placeholder.com/600x400\",\n            source: \"Lib\\xe9ration\",\n            title: \"R\\xe9forme de l'\\xe9ducation: quelles perspectives pour les nouveaux bacheliers?\"\n        },\n        {\n            img: \"https://placeholder.com/600x400\",\n            source: \"L'\\xc9quipe\",\n            title: \"Coupe du monde de football 2024: les nouveaux h\\xe9ros\"\n        },\n        {\n            img: \"https://placeholder.com/600x400\",\n            source: \"La Tribune\",\n            title: \"La r\\xe9volution des crypto-monnaies: impact sur l'\\xe9conomie mondiale\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_News__WEBPACK_IMPORTED_MODULE_2__.News, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFEO0FBRVg7QUFDbkMsU0FBU0U7SUFPZCxNQUFNQyxZQUE0QjtRQUNoQztZQUNFQyxLQUFLO1lBQ0xDLFFBQVE7WUFDUkMsT0FDRTtRQUNKO1FBQ0E7WUFDRUYsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLE9BQ0U7UUFDSjtRQUNBO1lBQ0VGLEtBQUs7WUFDTEMsUUFBUTtZQUNSQyxPQUNFO1FBQ0o7UUFDQTtZQUNFRixLQUFLO1lBQ0xDLFFBQVE7WUFDUkMsT0FBTztRQUNUO1FBQ0E7WUFDRUYsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLE9BQ0U7UUFDSjtLQUNEO0lBRUQscUJBQ0UsOERBQUNOLHFFQUFNQTtrQkFDTCw0RUFBQ0Msa0RBQUlBOzs7Ozs7Ozs7O0FBR1g7S0E1Q2dCQztBQThDaEIsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L01haW5MYXlvdXRcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBOZXdzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3c1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHR5cGUgTmV3c0l0ZW1UeXBlID0ge1xyXG4gICAgaW1nOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV3c0l0ZW1zOiBOZXdzSXRlbVR5cGVbXSA9IFtcclxuICAgIHtcclxuICAgICAgaW1nOiBcImh0dHBzOi8vcGxhY2Vob2xkZXIuY29tLzYwMHg0MDBcIixcclxuICAgICAgc291cmNlOiBcIkxlIE1vbmRlXCIsXHJcbiAgICAgIHRpdGxlOlxyXG4gICAgICAgIFwiTCdpbm5vdmF0aW9uIGRhbnMgbCfDqW5lcmdpZSByZW5vdXZlbGFibGUgYXR0ZWludCBkZXMgc29tbWV0cyBpbsOpZ2Fsw6lzIGVuIDIwMjRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltZzogXCJodHRwczovL3BsYWNlaG9sZGVyLmNvbS82MDB4NDAwXCIsXHJcbiAgICAgIHNvdXJjZTogXCJMZSBGaWdhcm9cIixcclxuICAgICAgdGl0bGU6XHJcbiAgICAgICAgXCJMZXMgw6lsZWN0aW9ucyBtdW5pY2lwYWxlcyBtYXJxdcOpZXMgcGFyIHVuZSBwYXJ0aWNpcGF0aW9uIGhpc3RvcmlxdWVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltZzogXCJodHRwczovL3BsYWNlaG9sZGVyLmNvbS82MDB4NDAwXCIsXHJcbiAgICAgIHNvdXJjZTogXCJMaWLDqXJhdGlvblwiLFxyXG4gICAgICB0aXRsZTpcclxuICAgICAgICBcIlLDqWZvcm1lIGRlIGwnw6lkdWNhdGlvbjogcXVlbGxlcyBwZXJzcGVjdGl2ZXMgcG91ciBsZXMgbm91dmVhdXggYmFjaGVsaWVycz9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltZzogXCJodHRwczovL3BsYWNlaG9sZGVyLmNvbS82MDB4NDAwXCIsXHJcbiAgICAgIHNvdXJjZTogXCJMJ8OJcXVpcGVcIixcclxuICAgICAgdGl0bGU6IFwiQ291cGUgZHUgbW9uZGUgZGUgZm9vdGJhbGwgMjAyNDogbGVzIG5vdXZlYXV4IGjDqXJvc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1nOiBcImh0dHBzOi8vcGxhY2Vob2xkZXIuY29tLzYwMHg0MDBcIixcclxuICAgICAgc291cmNlOiBcIkxhIFRyaWJ1bmVcIixcclxuICAgICAgdGl0bGU6XHJcbiAgICAgICAgXCJMYSByw6l2b2x1dGlvbiBkZXMgY3J5cHRvLW1vbm5haWVzOiBpbXBhY3Qgc3VyIGwnw6ljb25vbWllIG1vbmRpYWxlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8TmV3cz48L05ld3M+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJOZXdzIiwiQXBwIiwibmV3c0l0ZW1zIiwiaW1nIiwic291cmNlIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});