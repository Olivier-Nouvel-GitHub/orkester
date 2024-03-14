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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchNews */ \"./src/hooks/useFetchNews.tsx\");\n/* harmony import */ var _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetchMoreData */ \"./src/hooks/useFetchMoreData.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst News = ()=>{\n    _s();\n    const news = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectNews);\n    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isComponentMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State to control initialization and observation\n    const [initializeObserver, setInitializeObserver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews)();\n    (0,_hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData)(loadMore);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // After a delay, authorize the observation if component mounted to prevent prematurated observation\n        const timeoutId = setTimeout(()=>{\n            if (isComponentMounted.current) {\n                setInitializeObserver(true);\n            }\n        }, 1000); // Délai de 1 seconde avant d'initialiser l'observer\n        return ()=>clearTimeout(timeoutId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadMore) {\n            setLoadMore(false);\n        }\n    }, [\n        news.length\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isComponentMounted.current = true;\n        return ()=>{\n            isComponentMounted.current = false;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initializeObserver && loader.current) {\n            const observer = new IntersectionObserver((entries)=>{\n                const first = entries[0];\n                if (first.isIntersecting) {\n                    setLoadMore(true);\n                }\n            }, {\n                threshold: 1\n            });\n            observer.observe(loader.current);\n            return ()=>observer.disconnect();\n        }\n    }, [\n        initializeObserver\n    ]);\n    if (!news) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        container: true,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            item: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                dense: true,\n                children: [\n                    news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                \"&:hover\": {\n                                    \"& .MuiAvatar-root\": {\n                                        borderColor: \"black\",\n                                        borderWidth: 2,\n                                        borderStyle: \"solid\"\n                                    }\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        alt: item.title,\n                                        src: item.urlToImage\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    primary: item.title,\n                                    secondary: item.source.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, item.title, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: loader,\n                        style: {\n                            height: \"1px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(News, \"MmiQkMrVhXLyril02Nhy0FZAMJE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews,\n        _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3ROZXdzIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9uZXdzU2xpY2VzXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoTmV3cyB9IGZyb20gXCIuLi9ob29rcy91c2VGZXRjaE5ld3NcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hNb3JlRGF0YSB9IGZyb20gXCIuLi9ob29rcy91c2VGZXRjaE1vcmVEYXRhXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3cyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdzID0gdXNlU2VsZWN0b3Ioc2VsZWN0TmV3cyk7XHJcbiAgY29uc3QgbG9hZGVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlzQ29tcG9uZW50TW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRNb3JlLCBzZXRMb2FkTW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gU3RhdGUgdG8gY29udHJvbCBpbml0aWFsaXphdGlvbiBhbmQgb2JzZXJ2YXRpb25cclxuICBjb25zdCBbaW5pdGlhbGl6ZU9ic2VydmVyLCBzZXRJbml0aWFsaXplT2JzZXJ2ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VGZXRjaE5ld3MoKTtcclxuICB1c2VGZXRjaE1vcmVEYXRhKGxvYWRNb3JlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEFmdGVyIGEgZGVsYXksIGF1dGhvcml6ZSB0aGUgb2JzZXJ2YXRpb24gaWYgY29tcG9uZW50IG1vdW50ZWQgdG8gcHJldmVudCBwcmVtYXR1cmF0ZWQgb2JzZXJ2YXRpb25cclxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQpIHtcclxuICAgICAgICBzZXRJbml0aWFsaXplT2JzZXJ2ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApOyAvLyBEw6lsYWkgZGUgMSBzZWNvbmRlIGF2YW50IGQnaW5pdGlhbGlzZXIgbCdvYnNlcnZlclxyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZE1vcmUpIHtcclxuICAgICAgc2V0TG9hZE1vcmUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtuZXdzLmxlbmd0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluaXRpYWxpemVPYnNlcnZlciAmJiBsb2FkZXIuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3QgPSBlbnRyaWVzWzBdO1xyXG4gICAgICAgICAgaWYgKGZpcnN0LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRNb3JlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0aHJlc2hvbGQ6IDEgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShsb2FkZXIuY3VycmVudCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIFtpbml0aWFsaXplT2JzZXJ2ZXJdKTtcclxuXHJcbiAgaWYgKCFuZXdzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8TGlzdCBkZW5zZT5cclxuICAgICAgICAgIHtuZXdzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiJiAuTXVpQXZhdGFyLXJvb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtpdGVtLnRpdGxlfSBzcmM9e2l0ZW0udXJsVG9JbWFnZX0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbS50aXRsZX0gc2Vjb25kYXJ5PXtpdGVtLnNvdXJjZS5uYW1lfSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IHJlZj17bG9hZGVyfSBzdHlsZT17eyBoZWlnaHQ6IFwiMXB4XCIgfX0+PC9kaXY+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUF2YXRhciIsIkF2YXRhciIsIkxpc3RJdGVtVGV4dCIsIkdyaWQiLCJ1c2VTZWxlY3RvciIsInNlbGVjdE5ld3MiLCJ1c2VGZXRjaE5ld3MiLCJ1c2VGZXRjaE1vcmVEYXRhIiwiTmV3cyIsIm5ld3MiLCJsb2FkZXIiLCJpc0NvbXBvbmVudE1vdW50ZWQiLCJsb2FkTW9yZSIsInNldExvYWRNb3JlIiwiaW5pdGlhbGl6ZU9ic2VydmVyIiwic2V0SW5pdGlhbGl6ZU9ic2VydmVyIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJsZW5ndGgiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZpcnN0IiwiaXNJbnRlcnNlY3RpbmciLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImRpdiIsImNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIml0ZW0iLCJkZW5zZSIsIm1hcCIsInN4IiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYWx0IiwidGl0bGUiLCJzcmMiLCJ1cmxUb0ltYWdlIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInNvdXJjZSIsIm5hbWUiLCJyZWYiLCJzdHlsZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News.tsx\n"));

/***/ })

});