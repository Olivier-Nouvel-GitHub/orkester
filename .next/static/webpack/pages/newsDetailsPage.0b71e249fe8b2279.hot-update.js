"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/newsDetailsPage",{

/***/ "./src/components/NewsDetails.tsx":
/*!****************************************!*\
  !*** ./src/components/NewsDetails.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NewsDetails: function() { return /* binding */ NewsDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst NewsDetails = ()=>{\n    _s();\n    const newsDetails = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_1__.selectDetailedNews);\n    if (!newsDetails) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Aucun article \\xe0 afficher\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                sx: {\n                    maxWidth: 345\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMedia, {\n                        sx: {\n                            height: 140\n                        },\n                        image: \"/static/images/cards/contemplative-reptile.jpg\",\n                        title: \"green iguana\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                gutterBottom: true,\n                                variant: \"h5\",\n                                component: \"div\",\n                                children: \"Lizard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                variant: \"body2\",\n                                color: \"text.secondary\",\n                                children: \"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardActions, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                size: \"small\",\n                                children: \"Share\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                size: \"small\",\n                                children: \"Learn More\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                container: true,\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    item: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        dense: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        alt: newsDetails.title,\n                                        src: newsDetails.urlToImage\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    primary: newsDetails.title,\n                                    secondary: newsDetails.source.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, newsDetails.title, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\NewsDetails.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewsDetails, \"Ytz8HEyM7RgATLEqi2FqAsvFo0M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = NewsDetails;\nvar _c;\n$RefreshReg$(_c, \"NewsDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzRGV0YWlscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDWTtBQUNoQjtBQUNZO0FBQ2hCO0FBQzBCO0FBQ3RCO0FBRW5DLE1BQU1RLGNBQWM7O0lBQ3pCLE1BQU1DLGNBQWNGLHdEQUFXQSxDQUFDRCx3RUFBa0JBO0lBRWxELElBQUksQ0FBQ0csYUFBYTtRQUNoQixxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNkO0lBQ0EscUJBQ0UsOERBQUNBOzswQkFDQyw4REFBQ0M7Z0JBQUtDLElBQUk7b0JBQUVDLFVBQVU7Z0JBQUk7O2tDQUN4Qiw4REFBQ0M7d0JBQ0NGLElBQUk7NEJBQUVHLFFBQVE7d0JBQUk7d0JBQ2xCQyxPQUFNO3dCQUNOQyxPQUFNOzs7Ozs7a0NBRVIsOERBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQVdDLFlBQVk7Z0NBQUNDLFNBQVE7Z0NBQUtDLFdBQVU7MENBQU07Ozs7OzswQ0FHdEQsOERBQUNIO2dDQUFXRSxTQUFRO2dDQUFRRSxPQUFNOzBDQUFpQjs7Ozs7Ozs7Ozs7O2tDQUtyRCw4REFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBT0MsTUFBSzswQ0FBUTs7Ozs7OzBDQUNyQiw4REFBQ0Q7Z0NBQU9DLE1BQUs7MENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekIsOERBQUNyQiwwREFBSUE7Z0JBQUNzQixTQUFTO2dCQUFDQyxnQkFBZTtnQkFBU0MsWUFBVzswQkFDakQsNEVBQUN4QiwwREFBSUE7b0JBQUN5QixJQUFJOzhCQUNSLDRFQUFDOUIsMERBQUlBO3dCQUFDK0IsS0FBSztrQ0FDVCw0RUFBQzlCLDhEQUFRQTs7OENBQ1AsOERBQUNDLG9FQUFjQTs4Q0FDYiw0RUFBQ0MsNERBQU1BO3dDQUFDNkIsS0FBS3ZCLFlBQVlRLEtBQUs7d0NBQUVnQixLQUFLeEIsWUFBWXlCLFVBQVU7Ozs7Ozs7Ozs7OzhDQUU3RCw4REFBQzlCLGtFQUFZQTtvQ0FDWCtCLFNBQVMxQixZQUFZUSxLQUFLO29DQUMxQm1CLFdBQVczQixZQUFZNEIsTUFBTSxDQUFDQyxJQUFJOzs7Ozs7OzJCQU52QjdCLFlBQVlRLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzVDLEVBQUU7R0E5Q1dUOztRQUNTRCxvREFBV0E7OztLQURwQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3c0RldGFpbHMudHN4PzNjYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3QgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtQXZhdGFyXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcclxuaW1wb3J0IHsgc2VsZWN0RGV0YWlsZWROZXdzIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9uZXdzU2xpY2VzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3c0RldGFpbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3c0RldGFpbHMgPSB1c2VTZWxlY3RvcihzZWxlY3REZXRhaWxlZE5ld3MpO1xyXG5cclxuICBpZiAoIW5ld3NEZXRhaWxzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5BdWN1biBhcnRpY2xlIMOgIGFmZmljaGVyPC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDM0NSB9fT5cclxuICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICBzeD17eyBoZWlnaHQ6IDE0MCB9fVxyXG4gICAgICAgICAgaW1hZ2U9XCIvc3RhdGljL2ltYWdlcy9jYXJkcy9jb250ZW1wbGF0aXZlLXJlcHRpbGUuanBnXCJcclxuICAgICAgICAgIHRpdGxlPVwiZ3JlZW4gaWd1YW5hXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgTGl6YXJkXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIExpemFyZHMgYXJlIGEgd2lkZXNwcmVhZCBncm91cCBvZiBzcXVhbWF0ZSByZXB0aWxlcywgd2l0aCBvdmVyIDYsMDAwXHJcbiAgICAgICAgICAgIHNwZWNpZXMsIHJhbmdpbmcgYWNyb3NzIGFsbCBjb250aW5lbnRzIGV4Y2VwdCBBbnRhcmN0aWNhXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPlNoYXJlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPkxlYXJuIE1vcmU8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxMaXN0IGRlbnNlPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtuZXdzRGV0YWlscy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e25ld3NEZXRhaWxzLnRpdGxlfSBzcmM9e25ld3NEZXRhaWxzLnVybFRvSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtuZXdzRGV0YWlscy50aXRsZX1cclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17bmV3c0RldGFpbHMuc291cmNlLm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUF2YXRhciIsIkF2YXRhciIsIkxpc3RJdGVtVGV4dCIsIkdyaWQiLCJzZWxlY3REZXRhaWxlZE5ld3MiLCJ1c2VTZWxlY3RvciIsIk5ld3NEZXRhaWxzIiwibmV3c0RldGFpbHMiLCJkaXYiLCJDYXJkIiwic3giLCJtYXhXaWR0aCIsIkNhcmRNZWRpYSIsImhlaWdodCIsImltYWdlIiwidGl0bGUiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiY29sb3IiLCJDYXJkQWN0aW9ucyIsIkJ1dHRvbiIsInNpemUiLCJjb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpdGVtIiwiZGVuc2UiLCJhbHQiLCJzcmMiLCJ1cmxUb0ltYWdlIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInNvdXJjZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NewsDetails.tsx\n"));

/***/ })

});