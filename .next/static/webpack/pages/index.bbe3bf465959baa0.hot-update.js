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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchNews */ \"./src/hooks/useFetchNews.tsx\");\n/* harmony import */ var _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetchMoreData */ \"./src/hooks/useFetchMoreData.tsx\");\n/* harmony import */ var _hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useStoreNewsDetails */ \"./src/hooks/useStoreNewsDetails.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst News = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const news = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectNews);\n    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isComponentMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State to control initialization and observation\n    const [initializeObserver, setInitializeObserver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews)();\n    (0,_hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData)(loadMore);\n    const handleArticleClick = ()=>{\n        _s1();\n        (0,_hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__.useStoreNewsDetails)(article);\n        navigateToNewsDetails(setSelectedArticleId(article.id));\n    // To do : navigation to new page\n    };\n    _s1(handleArticleClick, \"0y1JNqmXOV0hPe8JHUX23omHcKU=\", false, function() {\n        return [\n            _hooks_useStoreNewsDetails__WEBPACK_IMPORTED_MODULE_5__.useStoreNewsDetails\n        ];\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // After a delay, authorize the observation if component mounted to prevent prematurated observation\n        const timeoutId = setTimeout(()=>{\n            if (isComponentMounted.current) {\n                setInitializeObserver(true);\n            }\n        }, 1000);\n        return ()=>clearTimeout(timeoutId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadMore) {\n            setLoadMore(false);\n        }\n    }, [\n        news.length\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isComponentMounted.current = true;\n        return ()=>{\n            isComponentMounted.current = false;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initializeObserver && loader.current) {\n            const observer = new IntersectionObserver((entries)=>{\n                const first = entries[0];\n                if (first.isIntersecting) {\n                    setLoadMore(true);\n                }\n            }, {\n                threshold: 1\n            });\n            observer.observe(loader.current);\n            return ()=>observer.disconnect();\n        }\n    }, [\n        initializeObserver\n    ]);\n    if (!news) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 75,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        container: true,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            item: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                dense: true,\n                children: [\n                    news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            sx: {\n                                \"&:hover\": {\n                                    \"& .MuiAvatar-root\": {\n                                        borderColor: \"black\",\n                                        borderWidth: 2,\n                                        borderStyle: \"solid\"\n                                    }\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        alt: item.title,\n                                        src: item.urlToImage\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    primary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: \"/newsDetails\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: ()=>handleArticleClick(article),\n                                            style: {\n                                                textDecoration: \"none\",\n                                                color: \"inherit\"\n                                            },\n                                            children: article.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 21\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 19\n                                    }, void 0),\n                                    secondary: item.source.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, item.title, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: loader,\n                        style: {\n                            height: \"1px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(News, \"MmiQkMrVhXLyril02Nhy0FZAMJE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews,\n        _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUttQixNQUFNLENBQUNDLElBQUk7Ozs7Ozs7MkJBekJ4QnBCLEtBQUtRLEtBQUs7Ozs7O2tDQTZCbkIsOERBQUNaO3dCQUFJeUIsS0FBS2pEO3dCQUFRMkMsT0FBTzs0QkFBRU8sUUFBUTt3QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRCxFQUFFO0dBdkdXcEQ7O1FBQ0VOLG9EQUFXQTtRQU94QkUsNkRBQVlBO1FBQ1pDLHFFQUFnQkE7OztLQVRMRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OZXdzLnRzeD8wOWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtQXZhdGFyXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0TmV3cyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvbmV3c1NsaWNlc1wiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaE5ld3MgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmV0Y2hOZXdzXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoTW9yZURhdGEgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmV0Y2hNb3JlRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZU5ld3NEZXRhaWxzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVN0b3JlTmV3c0RldGFpbHNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5ld3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3cyA9IHVzZVNlbGVjdG9yKHNlbGVjdE5ld3MpO1xyXG4gIGNvbnN0IGxvYWRlciA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpc0NvbXBvbmVudE1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkTW9yZSwgc2V0TG9hZE1vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIFN0YXRlIHRvIGNvbnRyb2wgaW5pdGlhbGl6YXRpb24gYW5kIG9ic2VydmF0aW9uXHJcbiAgY29uc3QgW2luaXRpYWxpemVPYnNlcnZlciwgc2V0SW5pdGlhbGl6ZU9ic2VydmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRmV0Y2hOZXdzKCk7XHJcbiAgdXNlRmV0Y2hNb3JlRGF0YShsb2FkTW9yZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFydGljbGVDbGljayA9ICgpID0+IHtcclxuICAgIHVzZVN0b3JlTmV3c0RldGFpbHMoYXJ0aWNsZSk7XHJcbiAgICBuYXZpZ2F0ZVRvTmV3c0RldGFpbHMoc2V0U2VsZWN0ZWRBcnRpY2xlSWQoYXJ0aWNsZS5pZCkpO1xyXG4gICAgLy8gVG8gZG8gOiBuYXZpZ2F0aW9uIHRvIG5ldyBwYWdlXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEFmdGVyIGEgZGVsYXksIGF1dGhvcml6ZSB0aGUgb2JzZXJ2YXRpb24gaWYgY29tcG9uZW50IG1vdW50ZWQgdG8gcHJldmVudCBwcmVtYXR1cmF0ZWQgb2JzZXJ2YXRpb25cclxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQpIHtcclxuICAgICAgICBzZXRJbml0aWFsaXplT2JzZXJ2ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZE1vcmUpIHtcclxuICAgICAgc2V0TG9hZE1vcmUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtuZXdzLmxlbmd0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluaXRpYWxpemVPYnNlcnZlciAmJiBsb2FkZXIuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3QgPSBlbnRyaWVzWzBdO1xyXG4gICAgICAgICAgaWYgKGZpcnN0LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRNb3JlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0aHJlc2hvbGQ6IDEgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShsb2FkZXIuY3VycmVudCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIFtpbml0aWFsaXplT2JzZXJ2ZXJdKTtcclxuXHJcbiAgaWYgKCFuZXdzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8TGlzdCBkZW5zZT5cclxuICAgICAgICAgIHtuZXdzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiJiAuTXVpQXZhdGFyLXJvb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtpdGVtLnRpdGxlfSBzcmM9e2l0ZW0udXJsVG9JbWFnZX0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgIHByaW1hcnk9e1xyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3NEZXRhaWxzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFydGljbGVDbGljayhhcnRpY2xlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiaW5oZXJpdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2l0ZW0uc291cmNlLm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiByZWY9e2xvYWRlcn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjFweFwiIH19PjwvZGl2PlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1BdmF0YXIiLCJBdmF0YXIiLCJMaXN0SXRlbVRleHQiLCJHcmlkIiwidXNlU2VsZWN0b3IiLCJzZWxlY3ROZXdzIiwidXNlRmV0Y2hOZXdzIiwidXNlRmV0Y2hNb3JlRGF0YSIsInVzZVN0b3JlTmV3c0RldGFpbHMiLCJMaW5rIiwiTmV3cyIsIm5ld3MiLCJsb2FkZXIiLCJpc0NvbXBvbmVudE1vdW50ZWQiLCJsb2FkTW9yZSIsInNldExvYWRNb3JlIiwiaW5pdGlhbGl6ZU9ic2VydmVyIiwic2V0SW5pdGlhbGl6ZU9ic2VydmVyIiwiaGFuZGxlQXJ0aWNsZUNsaWNrIiwiYXJ0aWNsZSIsIm5hdmlnYXRlVG9OZXdzRGV0YWlscyIsInNldFNlbGVjdGVkQXJ0aWNsZUlkIiwiaWQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsImxlbmd0aCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZmlyc3QiLCJpc0ludGVyc2VjdGluZyIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGl2IiwiY29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaXRlbSIsImRlbnNlIiwibWFwIiwic3giLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJhbHQiLCJ0aXRsZSIsInNyYyIsInVybFRvSW1hZ2UiLCJwcmltYXJ5IiwiaHJlZiIsImEiLCJvbkNsaWNrIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwic2Vjb25kYXJ5Iiwic291cmNlIiwibmFtZSIsInJlZiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News.tsx\n"));

/***/ })

});