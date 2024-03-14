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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchNews */ \"./src/hooks/useFetchNews.tsx\");\n/* harmony import */ var _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetchMoreData */ \"./src/hooks/useFetchMoreData.tsx\");\n/* harmony import */ var _hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useStoreNewsDetails */ \"./src/hooks/useStoreNewsDetails.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst News = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const news = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectNews);\n    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isComponentMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State to control initialization and observation\n    const [initializeObserver, setInitializeObserver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews)();\n    (0,_hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData)(loadMore);\n    const handleArticleClick = ()=>{\n        _s1();\n        (0,_hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__.useStoreNewsDetails)(article);\n        navigateToNewsDetails(setSelectedArticleId(article.id));\n    // To do : navigation to new page\n    };\n    _s1(handleArticleClick, \"0y1JNqmXOV0hPe8JHUX23omHcKU=\", false, function() {\n        return [\n            _hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__.useStoreNewsDetails\n        ];\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // After a delay, authorize the observation if component mounted to prevent prematurated observation\n        const timeoutId = setTimeout(()=>{\n            if (isComponentMounted.current) {\n                setInitializeObserver(true);\n            }\n        }, 1000);\n        return ()=>clearTimeout(timeoutId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadMore) {\n            setLoadMore(false);\n        }\n    }, [\n        news.length\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isComponentMounted.current = true;\n        return ()=>{\n            isComponentMounted.current = false;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initializeObserver && loader.current) {\n            const observer = new IntersectionObserver((entries)=>{\n                const first = entries[0];\n                if (first.isIntersecting) {\n                    setLoadMore(true);\n                }\n            }, {\n                threshold: 1\n            });\n            observer.observe(loader.current);\n            return ()=>observer.disconnect();\n        }\n    }, [\n        initializeObserver\n    ]);\n    if (!news) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 74,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        container: true,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            item: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                dense: true,\n                children: [\n                    news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            sx: {\n                                \"&:hover\": {\n                                    \"& .MuiAvatar-root\": {\n                                        borderColor: \"black\",\n                                        borderWidth: 2,\n                                        borderStyle: \"solid\"\n                                    }\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        alt: item.title,\n                                        src: item.urlToImage\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    primary: // Utilisez Link de Next.js pour la navigation\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                        href: \"/news/\".concat(article.id),\n                                        passHref: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: ()=>handleArticleClick(article),\n                                            style: {\n                                                textDecoration: \"none\",\n                                                color: \"inherit\"\n                                            },\n                                            children: article.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 21\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 19\n                                    }, void 0),\n                                    secondary: item.source.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, item.title, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: loader,\n                        style: {\n                            height: \"1px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(News, \"MmiQkMrVhXLyril02Nhy0FZAMJE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews,\n        _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkIsS0FBSzs7Ozs7Ozs7Ozs7b0NBSXBCWSxXQUFXcEIsS0FBS3FCLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7OzsyQkExQnhCdEIsS0FBS1EsS0FBSzs7Ozs7a0NBOEJuQiw4REFBQ1o7d0JBQUkyQixLQUFLbkQ7d0JBQVE2QyxPQUFPOzRCQUFFTyxRQUFRO3dCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25ELEVBQUU7R0F4R1d0RDs7UUFDRUwsb0RBQVdBO1FBT3hCRSw2REFBWUE7UUFDWkMscUVBQWdCQTs7O0tBVExFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05ld3MudHN4PzA5ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3ROZXdzIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9uZXdzU2xpY2VzXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoTmV3cyB9IGZyb20gXCIuLi9ob29rcy91c2VGZXRjaE5ld3NcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hNb3JlRGF0YSB9IGZyb20gXCIuLi9ob29rcy91c2VGZXRjaE1vcmVEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlTmV3c0RldGFpbHMgfSBmcm9tIFwiLi4vaG9va3MvdXNlU3RvcmVOZXdzRGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5ld3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3cyA9IHVzZVNlbGVjdG9yKHNlbGVjdE5ld3MpO1xyXG4gIGNvbnN0IGxvYWRlciA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpc0NvbXBvbmVudE1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkTW9yZSwgc2V0TG9hZE1vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIFN0YXRlIHRvIGNvbnRyb2wgaW5pdGlhbGl6YXRpb24gYW5kIG9ic2VydmF0aW9uXHJcbiAgY29uc3QgW2luaXRpYWxpemVPYnNlcnZlciwgc2V0SW5pdGlhbGl6ZU9ic2VydmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRmV0Y2hOZXdzKCk7XHJcbiAgdXNlRmV0Y2hNb3JlRGF0YShsb2FkTW9yZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFydGljbGVDbGljayA9ICgpID0+IHtcclxuICAgIHVzZVN0b3JlTmV3c0RldGFpbHMoYXJ0aWNsZSk7XHJcbiAgICBuYXZpZ2F0ZVRvTmV3c0RldGFpbHMoc2V0U2VsZWN0ZWRBcnRpY2xlSWQoYXJ0aWNsZS5pZCkpO1xyXG4gICAgLy8gVG8gZG8gOiBuYXZpZ2F0aW9uIHRvIG5ldyBwYWdlXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEFmdGVyIGEgZGVsYXksIGF1dGhvcml6ZSB0aGUgb2JzZXJ2YXRpb24gaWYgY29tcG9uZW50IG1vdW50ZWQgdG8gcHJldmVudCBwcmVtYXR1cmF0ZWQgb2JzZXJ2YXRpb25cclxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQpIHtcclxuICAgICAgICBzZXRJbml0aWFsaXplT2JzZXJ2ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZE1vcmUpIHtcclxuICAgICAgc2V0TG9hZE1vcmUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtuZXdzLmxlbmd0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluaXRpYWxpemVPYnNlcnZlciAmJiBsb2FkZXIuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3QgPSBlbnRyaWVzWzBdO1xyXG4gICAgICAgICAgaWYgKGZpcnN0LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRNb3JlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0aHJlc2hvbGQ6IDEgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShsb2FkZXIuY3VycmVudCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIFtpbml0aWFsaXplT2JzZXJ2ZXJdKTtcclxuXHJcbiAgaWYgKCFuZXdzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8TGlzdCBkZW5zZT5cclxuICAgICAgICAgIHtuZXdzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiJiAuTXVpQXZhdGFyLXJvb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtpdGVtLnRpdGxlfSBzcmM9e2l0ZW0udXJsVG9JbWFnZX0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgIHByaW1hcnk9e1xyXG4gICAgICAgICAgICAgICAgICAvLyBVdGlsaXNleiBMaW5rIGRlIE5leHQuanMgcG91ciBsYSBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2FydGljbGUuaWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFydGljbGVDbGljayhhcnRpY2xlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiaW5oZXJpdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2l0ZW0uc291cmNlLm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiByZWY9e2xvYWRlcn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjFweFwiIH19PjwvZGl2PlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1BdmF0YXIiLCJBdmF0YXIiLCJMaXN0SXRlbVRleHQiLCJHcmlkIiwidXNlU2VsZWN0b3IiLCJzZWxlY3ROZXdzIiwidXNlRmV0Y2hOZXdzIiwidXNlRmV0Y2hNb3JlRGF0YSIsInVzZVN0b3JlTmV3c0RldGFpbHMiLCJOZXdzIiwibmV3cyIsImxvYWRlciIsImlzQ29tcG9uZW50TW91bnRlZCIsImxvYWRNb3JlIiwic2V0TG9hZE1vcmUiLCJpbml0aWFsaXplT2JzZXJ2ZXIiLCJzZXRJbml0aWFsaXplT2JzZXJ2ZXIiLCJoYW5kbGVBcnRpY2xlQ2xpY2siLCJhcnRpY2xlIiwibmF2aWdhdGVUb05ld3NEZXRhaWxzIiwic2V0U2VsZWN0ZWRBcnRpY2xlSWQiLCJpZCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwiY2xlYXJUaW1lb3V0IiwibGVuZ3RoIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmaXJzdCIsImlzSW50ZXJzZWN0aW5nIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkaXYiLCJjb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpdGVtIiwiZGVuc2UiLCJtYXAiLCJzeCIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImFsdCIsInRpdGxlIiwic3JjIiwidXJsVG9JbWFnZSIsInByaW1hcnkiLCJMaW5rIiwiaHJlZiIsInBhc3NIcmVmIiwiYSIsIm9uQ2xpY2siLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJzZWNvbmRhcnkiLCJzb3VyY2UiLCJuYW1lIiwicmVmIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/News.tsx\n"));

/***/ })

});