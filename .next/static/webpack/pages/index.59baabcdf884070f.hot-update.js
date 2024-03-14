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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchNews */ \"./src/hooks/useFetchNews.tsx\");\n/* harmony import */ var _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetchMoreData */ \"./src/hooks/useFetchMoreData.tsx\");\n/* harmony import */ var _hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useStoreNewsDetails */ \"./src/hooks/useStoreNewsDetails.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst News = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const news = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectNews);\n    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isComponentMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State to control initialization and observation\n    const [initializeObserver, setInitializeObserver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews)();\n    (0,_hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData)(loadMore);\n    const handleArticleClick = ()=>{\n        _s1();\n        (0,_hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__.useStoreNewsDetails)(article);\n        navigateToNewsDetails(setSelectedArticleId(article.id));\n    // To do : navigation to new page\n    };\n    _s1(handleArticleClick, \"0y1JNqmXOV0hPe8JHUX23omHcKU=\", false, function() {\n        return [\n            _hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__.useStoreNewsDetails\n        ];\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // After a delay, authorize the observation if component mounted to prevent prematurated observation\n        const timeoutId = setTimeout(()=>{\n            if (isComponentMounted.current) {\n                setInitializeObserver(true);\n            }\n        }, 1000);\n        return ()=>clearTimeout(timeoutId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadMore) {\n            setLoadMore(false);\n        }\n    }, [\n        news.length\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isComponentMounted.current = true;\n        return ()=>{\n            isComponentMounted.current = false;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initializeObserver && loader.current) {\n            const observer = new IntersectionObserver((entries)=>{\n                const first = entries[0];\n                if (first.isIntersecting) {\n                    setLoadMore(true);\n                }\n            }, {\n                threshold: 1\n            });\n            observer.observe(loader.current);\n            return ()=>observer.disconnect();\n        }\n    }, [\n        initializeObserver\n    ]);\n    if (!news) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 74,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        container: true,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            item: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                dense: true,\n                children: [\n                    news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            sx: {\n                                \"&:hover\": {\n                                    \"& .MuiAvatar-root\": {\n                                        borderColor: \"black\",\n                                        borderWidth: 2,\n                                        borderStyle: \"solid\"\n                                    }\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        alt: item.title,\n                                        src: item.urlToImage\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    primary: item.title,\n                                    secondary: item.source.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, item.title, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: loader,\n                        style: {\n                            height: \"1px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(News, \"MmiQkMrVhXLyril02Nhy0FZAMJE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews,\n        _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTNGVy9DOztRQUNFTCxvREFBV0E7UUFPeEJFLDZEQUFZQTtRQUNaQyxxRUFBZ0JBOzs7S0FUTEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3cy50c3g/MDlkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUF2YXRhclwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdE5ld3MgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL25ld3NTbGljZXNcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hOZXdzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUZldGNoTmV3c1wiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaE1vcmVEYXRhIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUZldGNoTW9yZURhdGFcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmVOZXdzRGV0YWlscyB9IGZyb20gXCIuLi9ob29rcy91c2VTdG9yZU5ld3NEZXRhaWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3cyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdzID0gdXNlU2VsZWN0b3Ioc2VsZWN0TmV3cyk7XHJcbiAgY29uc3QgbG9hZGVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlzQ29tcG9uZW50TW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRNb3JlLCBzZXRMb2FkTW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gU3RhdGUgdG8gY29udHJvbCBpbml0aWFsaXphdGlvbiBhbmQgb2JzZXJ2YXRpb25cclxuICBjb25zdCBbaW5pdGlhbGl6ZU9ic2VydmVyLCBzZXRJbml0aWFsaXplT2JzZXJ2ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VGZXRjaE5ld3MoKTtcclxuICB1c2VGZXRjaE1vcmVEYXRhKGxvYWRNb3JlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXJ0aWNsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgdXNlU3RvcmVOZXdzRGV0YWlscyhhcnRpY2xlKTtcclxuICAgIG5hdmlnYXRlVG9OZXdzRGV0YWlscyhzZXRTZWxlY3RlZEFydGljbGVJZChhcnRpY2xlLmlkKSk7XHJcbiAgICAvLyBUbyBkbyA6IG5hdmlnYXRpb24gdG8gbmV3IHBhZ2VcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQWZ0ZXIgYSBkZWxheSwgYXV0aG9yaXplIHRoZSBvYnNlcnZhdGlvbiBpZiBjb21wb25lbnQgbW91bnRlZCB0byBwcmV2ZW50IHByZW1hdHVyYXRlZCBvYnNlcnZhdGlvblxyXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChpc0NvbXBvbmVudE1vdW50ZWQuY3VycmVudCkge1xyXG4gICAgICAgIHNldEluaXRpYWxpemVPYnNlcnZlcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2FkTW9yZSkge1xyXG4gICAgICBzZXRMb2FkTW9yZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW25ld3MubGVuZ3RoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc0NvbXBvbmVudE1vdW50ZWQuY3VycmVudCA9IHRydWU7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc0NvbXBvbmVudE1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5pdGlhbGl6ZU9ic2VydmVyICYmIGxvYWRlci5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgICAgIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdCA9IGVudHJpZXNbMF07XHJcbiAgICAgICAgICBpZiAoZmlyc3QuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgc2V0TG9hZE1vcmUodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHRocmVzaG9sZDogMSB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGxvYWRlci5jdXJyZW50KTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgfSwgW2luaXRpYWxpemVPYnNlcnZlcl0pO1xyXG5cclxuICBpZiAoIW5ld3MpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxMaXN0IGRlbnNlPlxyXG4gICAgICAgICAge25ld3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCImIC5NdWlBdmF0YXItcm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e2l0ZW0udGl0bGV9IHNyYz17aXRlbS51cmxUb0ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpdGVtLnRpdGxlfSBzZWNvbmRhcnk9e2l0ZW0uc291cmNlLm5hbWV9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxkaXYgcmVmPXtsb2FkZXJ9IHN0eWxlPXt7IGhlaWdodDogXCIxcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQXZhdGFyIiwiQXZhdGFyIiwiTGlzdEl0ZW1UZXh0IiwiR3JpZCIsInVzZVNlbGVjdG9yIiwic2VsZWN0TmV3cyIsInVzZUZldGNoTmV3cyIsInVzZUZldGNoTW9yZURhdGEiLCJ1c2VTdG9yZU5ld3NEZXRhaWxzIiwiTmV3cyIsIm5ld3MiLCJsb2FkZXIiLCJpc0NvbXBvbmVudE1vdW50ZWQiLCJsb2FkTW9yZSIsInNldExvYWRNb3JlIiwiaW5pdGlhbGl6ZU9ic2VydmVyIiwic2V0SW5pdGlhbGl6ZU9ic2VydmVyIiwiaGFuZGxlQXJ0aWNsZUNsaWNrIiwiYXJ0aWNsZSIsIm5hdmlnYXRlVG9OZXdzRGV0YWlscyIsInNldFNlbGVjdGVkQXJ0aWNsZUlkIiwiaWQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsImxlbmd0aCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZmlyc3QiLCJpc0ludGVyc2VjdGluZyIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGl2IiwiY29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaXRlbSIsImRlbnNlIiwibWFwIiwic3giLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJhbHQiLCJ0aXRsZSIsInNyYyIsInVybFRvSW1hZ2UiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwic291cmNlIiwibmFtZSIsInJlZiIsInN0eWxlIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/News.tsx\n"));

/***/ }),

/***/ "./src/hooks/useStoreNewsDetails.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useStoreNewsDetails.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStoreNewsDetails: function() { return /* binding */ useStoreNewsDetails; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\nvar _s = $RefreshSig$();\n\n\n\nconst useStoreNewsDetails = (newsDetails)=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        dispatch((0,_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_1__.setSelectedArticle)(newsDetails));\n    }, [\n        dispatch,\n        newsDetails\n    ]);\n};\n_s(useStoreNewsDetails, \"rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU3RvcmVOZXdzRGV0YWlscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ1E7QUFDc0I7QUFHekQsTUFBTUcsc0JBQXNCLENBQUNDOztJQUNsQyxNQUFNQyxXQUFXSix3REFBV0E7SUFDNUJELGdEQUFTQSxDQUFDO1FBQ1JLLFNBQVNILDRFQUFrQkEsQ0FBQ0U7SUFDOUIsR0FBRztRQUFDQztRQUFVRDtLQUFZO0FBQzVCLEVBQUU7R0FMV0Q7O1FBQ01GLG9EQUFXQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlU3RvcmVOZXdzRGV0YWlscy50c3g/MjllOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2V0U2VsZWN0ZWRBcnRpY2xlIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9uZXdzU2xpY2VzXCI7XHJcbmltcG9ydCB7IE5ld3NJdGVtVHlwZSB9IGZyb20gXCIuLi90eXBlcy9kYXRhVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdG9yZU5ld3NEZXRhaWxzID0gKG5ld3NEZXRhaWxzOiBOZXdzSXRlbVR5cGUpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkQXJ0aWNsZShuZXdzRGV0YWlscykpO1xyXG4gIH0sIFtkaXNwYXRjaCwgbmV3c0RldGFpbHNdKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwic2V0U2VsZWN0ZWRBcnRpY2xlIiwidXNlU3RvcmVOZXdzRGV0YWlscyIsIm5ld3NEZXRhaWxzIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useStoreNewsDetails.tsx\n"));

/***/ })

});