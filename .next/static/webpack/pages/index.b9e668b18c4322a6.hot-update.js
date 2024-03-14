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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchNews */ \"./src/hooks/useFetchNews.tsx\");\n/* harmony import */ var _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetchMoreData */ \"./src/hooks/useFetchMoreData.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/FormControl/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/TextField/TextField.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst News = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const news = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectNews);\n    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isComponentMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State to control initialization and observation\n    const [initializeObserver, setInitializeObserver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [filterValue, setFilterValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,_hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews)();\n    (0,_hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData)(loadMore);\n    const handleChange = (event)=>{\n        setFilterValue(event.target.value);\n    };\n    const handleArticleClick = (item)=>{\n        dispatch((0,_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.setSelectedArticle)(item));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // After a delay, authorize the observation if component mounted to prevent prematurated observation\n        const timeoutId = setTimeout(()=>{\n            if (isComponentMounted.current) {\n                setInitializeObserver(true);\n            }\n        }, 1000);\n        return ()=>clearTimeout(timeoutId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadMore) {\n            setLoadMore(false);\n        }\n    }, [\n        news.length\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isComponentMounted.current = true;\n        return ()=>{\n            isComponentMounted.current = false;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initializeObserver && loader.current) {\n            const observer = new IntersectionObserver((entries)=>{\n                const first = entries[0];\n                if (first.isIntersecting) {\n                    setLoadMore(true);\n                }\n            }, {\n                threshold: 1\n            });\n            observer.observe(loader.current);\n            return ()=>observer.disconnect();\n        }\n    }, [\n        initializeObserver\n    ]);\n    if (!news) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 88,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                spacing: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            fullWidth: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    id: \"select-filter\",\n                                    children: \"Filter\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    labelId: \"select-filter\",\n                                    id: \"select-filter-component\",\n                                    value: filterValue,\n                                    label: \"Parameter\",\n                                    onChange: handleChange,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: \"title\",\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: \"source\",\n                                            children: \"Source\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: \"language\",\n                                            children: \"Language\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            id: \"standard-basic\",\n                            label: \"Research\",\n                            variant: \"standard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    item: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        dense: true,\n                        children: [\n                            news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                    sx: {\n                                        \"&:hover\": {\n                                            \"& .MuiAvatar-root\": {\n                                                borderColor: \"black\",\n                                                borderWidth: 2,\n                                                borderStyle: \"solid\"\n                                            }\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                                alt: item.title,\n                                                src: item.urlToImage\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                                lineNumber: 132,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                            primary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                href: \"/newsDetailsPage\",\n                                                onClick: ()=>handleArticleClick(item),\n                                                style: {\n                                                    textDecoration: \"none\",\n                                                    color: \"inherit\"\n                                                },\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 21\n                                            }, void 0),\n                                            secondary: item.source.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, item.title, true, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: loader,\n                                style: {\n                                    height: \"1px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(News, \"0QRhaSmOk03KovJUlDlhiTkdJQY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews,\n        _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL05ld3MudHN4PzA5ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0TmV3cyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvbmV3c1NsaWNlc1wiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaE5ld3MgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmV0Y2hOZXdzXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoTW9yZURhdGEgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmV0Y2hNb3JlRGF0YVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IE5ld3NJdGVtVHlwZSB9IGZyb20gXCIuLi90eXBlcy9kYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgc2V0U2VsZWN0ZWRBcnRpY2xlIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9uZXdzU2xpY2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgU2VsZWN0Q2hhbmdlRXZlbnQsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3cyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbmV3cyA9IHVzZVNlbGVjdG9yKHNlbGVjdE5ld3MpO1xyXG4gIGNvbnN0IGxvYWRlciA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpc0NvbXBvbmVudE1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkTW9yZSwgc2V0TG9hZE1vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIFN0YXRlIHRvIGNvbnRyb2wgaW5pdGlhbGl6YXRpb24gYW5kIG9ic2VydmF0aW9uXHJcbiAgY29uc3QgW2luaXRpYWxpemVPYnNlcnZlciwgc2V0SW5pdGlhbGl6ZU9ic2VydmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsdGVyVmFsdWUsIHNldEZpbHRlclZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIHVzZUZldGNoTmV3cygpO1xyXG4gIHVzZUZldGNoTW9yZURhdGEobG9hZE1vcmUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFNlbGVjdENoYW5nZUV2ZW50PHN0cmluZz4pID0+IHtcclxuICAgIHNldEZpbHRlclZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFydGljbGVDbGljayA9IChpdGVtOiBOZXdzSXRlbVR5cGUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkQXJ0aWNsZShpdGVtKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEFmdGVyIGEgZGVsYXksIGF1dGhvcml6ZSB0aGUgb2JzZXJ2YXRpb24gaWYgY29tcG9uZW50IG1vdW50ZWQgdG8gcHJldmVudCBwcmVtYXR1cmF0ZWQgb2JzZXJ2YXRpb25cclxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQpIHtcclxuICAgICAgICBzZXRJbml0aWFsaXplT2JzZXJ2ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZE1vcmUpIHtcclxuICAgICAgc2V0TG9hZE1vcmUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtuZXdzLmxlbmd0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluaXRpYWxpemVPYnNlcnZlciAmJiBsb2FkZXIuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3QgPSBlbnRyaWVzWzBdO1xyXG4gICAgICAgICAgaWYgKGZpcnN0LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRNb3JlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0aHJlc2hvbGQ6IDEgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShsb2FkZXIuY3VycmVudCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIFtpbml0aWFsaXplT2JzZXJ2ZXJdKTtcclxuXHJcbiAgaWYgKCFuZXdzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2VsZWN0LWZpbHRlclwiPkZpbHRlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJzZWxlY3QtZmlsdGVyXCJcclxuICAgICAgICAgICAgICBpZD1cInNlbGVjdC1maWx0ZXItY29tcG9uZW50XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXJhbWV0ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJ0aXRsZVwiPlRpdGxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJzb3VyY2VcIj5Tb3VyY2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImxhbmd1YWdlXCI+TGFuZ3VhZ2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgbGFiZWw9XCJSZXNlYXJjaFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxMaXN0IGRlbnNlPlxyXG4gICAgICAgICAgICB7bmV3cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCImIC5NdWlBdmF0YXItcm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e2l0ZW0udGl0bGV9IHNyYz17aXRlbS51cmxUb0ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvbmV3c0RldGFpbHNQYWdlYH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFydGljbGVDbGljayhpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiaW5oZXJpdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17aXRlbS5zb3VyY2UubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtsb2FkZXJ9IHN0eWxlPXt7IGhlaWdodDogXCIxcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1BdmF0YXIiLCJBdmF0YXIiLCJMaXN0SXRlbVRleHQiLCJHcmlkIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNlbGVjdE5ld3MiLCJ1c2VGZXRjaE5ld3MiLCJ1c2VGZXRjaE1vcmVEYXRhIiwiTGluayIsInNldFNlbGVjdGVkQXJ0aWNsZSIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiU2VsZWN0IiwiVGV4dEZpZWxkIiwiTmV3cyIsImRpc3BhdGNoIiwibmV3cyIsImxvYWRlciIsImlzQ29tcG9uZW50TW91bnRlZCIsImxvYWRNb3JlIiwic2V0TG9hZE1vcmUiLCJpbml0aWFsaXplT2JzZXJ2ZXIiLCJzZXRJbml0aWFsaXplT2JzZXJ2ZXIiLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlclZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFydGljbGVDbGljayIsIml0ZW0iLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsImxlbmd0aCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZmlyc3QiLCJpc0ludGVyc2VjdGluZyIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGl2IiwiY29udGFpbmVyIiwic3BhY2luZyIsInhzIiwiZnVsbFdpZHRoIiwiaWQiLCJsYWJlbElkIiwibGFiZWwiLCJvbkNoYW5nZSIsInZhcmlhbnQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkZW5zZSIsIm1hcCIsInN4IiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYWx0IiwidGl0bGUiLCJzcmMiLCJ1cmxUb0ltYWdlIiwicHJpbWFyeSIsImhyZWYiLCJvbkNsaWNrIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwic2Vjb25kYXJ5Iiwic291cmNlIiwibmFtZSIsInJlZiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News.tsx\n"));

/***/ })

});