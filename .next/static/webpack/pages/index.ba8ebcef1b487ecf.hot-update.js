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

/***/ "./src/components/News.tsx":
/*!*********************************!*\
  !*** ./src/components/News.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchNews */ \"./src/hooks/useFetchNews.tsx\");\n/* harmony import */ var _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetchMoreData */ \"./src/hooks/useFetchMoreData.tsx\");\n/* harmony import */ var _hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useStoreNewsDetails */ \"./src/hooks/useStoreNewsDetails.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst News = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const news = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectNews);\n    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isComponentMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State to control initialization and observation\n    const [initializeObserver, setInitializeObserver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews)();\n    (0,_hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData)(loadMore);\n    const handleArticleClick = ()=>{\n        _s1();\n        (0,_hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__.useStoreNewsDetails)(article);\n        navigateToNewsDetails(setSelectedArticleId(article.id));\n    // To do : navigation to new page\n    };\n    _s1(handleArticleClick, \"0y1JNqmXOV0hPe8JHUX23omHcKU=\", false, function() {\n        return [\n            _hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__.useStoreNewsDetails\n        ];\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // After a delay, authorize the observation if component mounted to prevent prematurated observation\n        const timeoutId = setTimeout(()=>{\n            if (isComponentMounted.current) {\n                setInitializeObserver(true);\n            }\n        }, 1000);\n        return ()=>clearTimeout(timeoutId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadMore) {\n            setLoadMore(false);\n        }\n    }, [\n        news.length\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isComponentMounted.current = true;\n        return ()=>{\n            isComponentMounted.current = false;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initializeObserver && loader.current) {\n            const observer = new IntersectionObserver((entries)=>{\n                const first = entries[0];\n                if (first.isIntersecting) {\n                    setLoadMore(true);\n                }\n            }, {\n                threshold: 1\n            });\n            observer.observe(loader.current);\n            return ()=>observer.disconnect();\n        }\n    }, [\n        initializeObserver\n    ]);\n    if (!news) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 75,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        container: true,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            item: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                dense: true,\n                children: [\n                    news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            sx: {\n                                \"&:hover\": {\n                                    \"& .MuiAvatar-root\": {\n                                        borderColor: \"black\",\n                                        borderWidth: 2,\n                                        borderStyle: \"solid\"\n                                    }\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        alt: item.title,\n                                        src: item.urlToImage\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    primary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: \"/newsDetails\",\n                                        passHref: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: ()=>handleArticleClick(article),\n                                            style: {\n                                                textDecoration: \"none\",\n                                                color: \"inherit\"\n                                            },\n                                            children: article.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 21\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 19\n                                    }, void 0),\n                                    secondary: item.source.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, item.title, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: loader,\n                        style: {\n                            height: \"1px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(News, \"MmiQkMrVhXLyril02Nhy0FZAMJE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews,\n        _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FJcEJXLFdBQVduQixLQUFLb0IsTUFBTSxDQUFDQyxJQUFJOzs7Ozs7OzJCQXpCeEJyQixLQUFLUSxLQUFLOzs7OztrQ0E2Qm5CLDhEQUFDWjt3QkFBSTBCLEtBQUtsRDt3QkFBUTRDLE9BQU87NEJBQUVPLFFBQVE7d0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkQsRUFBRTtHQXZHV3JEOztRQUNFTixvREFBV0E7UUFPeEJFLDZEQUFZQTtRQUNaQyxxRUFBZ0JBOzs7S0FUTEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3cy50c3g/MDlkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUF2YXRhclwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdE5ld3MgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL25ld3NTbGljZXNcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hOZXdzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUZldGNoTmV3c1wiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaE1vcmVEYXRhIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUZldGNoTW9yZURhdGFcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmVOZXdzRGV0YWlscyB9IGZyb20gXCIuLi9ob29rcy91c2VTdG9yZU5ld3NEZXRhaWxzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld3MgPSB1c2VTZWxlY3RvcihzZWxlY3ROZXdzKTtcclxuICBjb25zdCBsb2FkZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaXNDb21wb25lbnRNb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZE1vcmUsIHNldExvYWRNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBTdGF0ZSB0byBjb250cm9sIGluaXRpYWxpemF0aW9uIGFuZCBvYnNlcnZhdGlvblxyXG4gIGNvbnN0IFtpbml0aWFsaXplT2JzZXJ2ZXIsIHNldEluaXRpYWxpemVPYnNlcnZlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUZldGNoTmV3cygpO1xyXG4gIHVzZUZldGNoTW9yZURhdGEobG9hZE1vcmUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBcnRpY2xlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB1c2VTdG9yZU5ld3NEZXRhaWxzKGFydGljbGUpO1xyXG4gICAgbmF2aWdhdGVUb05ld3NEZXRhaWxzKHNldFNlbGVjdGVkQXJ0aWNsZUlkKGFydGljbGUuaWQpKTtcclxuICAgIC8vIFRvIGRvIDogbmF2aWdhdGlvbiB0byBuZXcgcGFnZVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBBZnRlciBhIGRlbGF5LCBhdXRob3JpemUgdGhlIG9ic2VydmF0aW9uIGlmIGNvbXBvbmVudCBtb3VudGVkIHRvIHByZXZlbnQgcHJlbWF0dXJhdGVkIG9ic2VydmF0aW9uXHJcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzQ29tcG9uZW50TW91bnRlZC5jdXJyZW50KSB7XHJcbiAgICAgICAgc2V0SW5pdGlhbGl6ZU9ic2VydmVyKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRNb3JlKSB7XHJcbiAgICAgIHNldExvYWRNb3JlKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbbmV3cy5sZW5ndGhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzQ29tcG9uZW50TW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzQ29tcG9uZW50TW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbml0aWFsaXplT2JzZXJ2ZXIgJiYgbG9hZGVyLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0ID0gZW50cmllc1swXTtcclxuICAgICAgICAgIGlmIChmaXJzdC5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBzZXRMb2FkTW9yZSh0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGhyZXNob2xkOiAxIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobG9hZGVyLmN1cnJlbnQpO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9LCBbaW5pdGlhbGl6ZU9ic2VydmVyXSk7XHJcblxyXG4gIGlmICghbmV3cykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPExpc3QgZGVuc2U+XHJcbiAgICAgICAgICB7bmV3cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIiYgLk11aUF2YXRhci1yb290XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17aXRlbS50aXRsZX0gc3JjPXtpdGVtLnVybFRvSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzRGV0YWlsc2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBcnRpY2xlQ2xpY2soYXJ0aWNsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcImluaGVyaXRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtpdGVtLnNvdXJjZS5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxkaXYgcmVmPXtsb2FkZXJ9IHN0eWxlPXt7IGhlaWdodDogXCIxcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQXZhdGFyIiwiQXZhdGFyIiwiTGlzdEl0ZW1UZXh0IiwiR3JpZCIsInVzZVNlbGVjdG9yIiwic2VsZWN0TmV3cyIsInVzZUZldGNoTmV3cyIsInVzZUZldGNoTW9yZURhdGEiLCJ1c2VTdG9yZU5ld3NEZXRhaWxzIiwiTGluayIsIk5ld3MiLCJuZXdzIiwibG9hZGVyIiwiaXNDb21wb25lbnRNb3VudGVkIiwibG9hZE1vcmUiLCJzZXRMb2FkTW9yZSIsImluaXRpYWxpemVPYnNlcnZlciIsInNldEluaXRpYWxpemVPYnNlcnZlciIsImhhbmRsZUFydGljbGVDbGljayIsImFydGljbGUiLCJuYXZpZ2F0ZVRvTmV3c0RldGFpbHMiLCJzZXRTZWxlY3RlZEFydGljbGVJZCIsImlkIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJsZW5ndGgiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZpcnN0IiwiaXNJbnRlcnNlY3RpbmciLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImRpdiIsImNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIml0ZW0iLCJkZW5zZSIsIm1hcCIsInN4IiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYWx0IiwidGl0bGUiLCJzcmMiLCJ1cmxUb0ltYWdlIiwicHJpbWFyeSIsImhyZWYiLCJwYXNzSHJlZiIsImEiLCJvbkNsaWNrIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwic2Vjb25kYXJ5Iiwic291cmNlIiwibmFtZSIsInJlZiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News.tsx\n"));

/***/ })

});