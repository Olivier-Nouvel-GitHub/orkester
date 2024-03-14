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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchNews */ \"./src/hooks/useFetchNews.tsx\");\n/* harmony import */ var _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetchMoreData */ \"./src/hooks/useFetchMoreData.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select!=!@mui/material */ \"./node_modules/@mui/material/FormControl/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select!=!@mui/material */ \"./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select!=!@mui/material */ \"./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select!=!@mui/material */ \"./node_modules/@mui/material/MenuItem/MenuItem.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst News = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const news = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectNews);\n    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isComponentMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State to control initialization and observation\n    const [initializeObserver, setInitializeObserver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews)();\n    (0,_hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData)(loadMore);\n    const handleArticleClick = (item)=>{\n        dispatch((0,_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.setSelectedArticle)(item));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // After a delay, authorize the observation if component mounted to prevent prematurated observation\n        const timeoutId = setTimeout(()=>{\n            if (isComponentMounted.current) {\n                setInitializeObserver(true);\n            }\n        }, 1000);\n        return ()=>clearTimeout(timeoutId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadMore) {\n            setLoadMore(false);\n        }\n    }, [\n        news.length\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isComponentMounted.current = true;\n        return ()=>{\n            isComponentMounted.current = false;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initializeObserver && loader.current) {\n            const observer = new IntersectionObserver((entries)=>{\n                const first = entries[0];\n                if (first.isIntersecting) {\n                    setLoadMore(true);\n                }\n            }, {\n                threshold: 1\n            });\n            observer.observe(loader.current);\n            return ()=>observer.disconnect();\n        }\n    }, [\n        initializeObserver\n    ]);\n    if (!news) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 82,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                spacing: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            fullWidth: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    id: \"demo-simple-select-label\",\n                                    children: \"Age\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    labelId: \"demo-simple-select-label\",\n                                    id: \"demo-simple-select\",\n                                    value: \"10\",\n                                    label: \"Age\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: 10,\n                                            children: \"Ten\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: 20,\n                                            children: \"Twenty\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: 30,\n                                            children: \"Thirty\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Search, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchIconWrapper, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchIcon, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledInputBase, {\n                                    placeholder: \"Search…\",\n                                    inputProps: {\n                                        \"aria-label\": \"search\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    item: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        dense: true,\n                        children: [\n                            news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    sx: {\n                                        \"&:hover\": {\n                                            \"& .MuiAvatar-root\": {\n                                                borderColor: \"black\",\n                                                borderWidth: 2,\n                                                borderStyle: \"solid\"\n                                            }\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                                alt: item.title,\n                                                src: item.urlToImage\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                                lineNumber: 133,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                            primary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                href: \"/newsDetailsPage\",\n                                                onClick: ()=>handleArticleClick(item),\n                                                style: {\n                                                    textDecoration: \"none\",\n                                                    color: \"inherit\"\n                                                },\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                                lineNumber: 137,\n                                                columnNumber: 21\n                                            }, void 0),\n                                            secondary: item.source.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 135,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, item.title, true, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: loader,\n                                style: {\n                                    height: \"1px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(News, \"L2j6xoGdT2pCBBOey15z5Fvd9Xw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews,\n        _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU03Qyw4REFBQ2xELDBEQUFJQTtnQkFBQ3FDLFNBQVM7Z0JBQUNjLGdCQUFlO2dCQUFTQyxZQUFXOzBCQUNqRCw0RUFBQ3BELDBEQUFJQTtvQkFBQ3NCLElBQUk7OEJBQ1IsNEVBQUMzQiwyREFBSUE7d0JBQUMwRCxLQUFLOzs0QkFDUnZDLEtBQUt3QyxHQUFHLENBQUMsQ0FBQ2hDLHFCQUNULDhEQUFDMUIsK0RBQVFBO29DQUVQMkQsSUFBSTt3Q0FDRixXQUFXOzRDQUNULHFCQUFxQjtnREFDbkJDLGFBQWE7Z0RBQ2JDLGFBQWE7Z0RBQ2JDLGFBQWE7NENBQ2Y7d0NBQ0Y7b0NBQ0Y7O3NEQUVBLDhEQUFDN0QscUVBQWNBO3NEQUNiLDRFQUFDQyw2REFBTUE7Z0RBQUM2RCxLQUFLckMsS0FBS3NDLEtBQUs7Z0RBQUVDLEtBQUt2QyxLQUFLd0MsVUFBVTs7Ozs7Ozs7Ozs7c0RBRS9DLDhEQUFDL0QsbUVBQVlBOzRDQUNYZ0UsdUJBQ0UsOERBQUN6RCxrREFBSUE7Z0RBQ0gwRCxNQUFPO2dEQUNQQyxTQUFTLElBQU01QyxtQkFBbUJDO2dEQUNsQzRDLE9BQU87b0RBQUVDLGdCQUFnQjtvREFBUUMsT0FBTztnREFBVTswREFFakQ5QyxLQUFLc0MsS0FBSzs7Ozs7OzRDQUdmUyxXQUFXL0MsS0FBS2dELE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7OzttQ0F4QnhCakQsS0FBS3NDLEtBQUs7Ozs7OzBDQTRCbkIsOERBQUN4QjtnQ0FBSW9DLEtBQUt6RDtnQ0FBUW1ELE9BQU87b0NBQUVPLFFBQVE7Z0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQsRUFBRTtHQXBJVzdEOztRQUNNWCxvREFBV0E7UUFDZkMsb0RBQVdBO1FBT3hCRSw2REFBWUE7UUFDWkMscUVBQWdCQTs7O0tBVkxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05ld3MudHN4PzA5ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0TmV3cyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvbmV3c1NsaWNlc1wiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaE5ld3MgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmV0Y2hOZXdzXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoTW9yZURhdGEgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmV0Y2hNb3JlRGF0YVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IE5ld3NJdGVtVHlwZSB9IGZyb20gXCIuLi90eXBlcy9kYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgc2V0U2VsZWN0ZWRBcnRpY2xlIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9uZXdzU2xpY2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3cyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbmV3cyA9IHVzZVNlbGVjdG9yKHNlbGVjdE5ld3MpO1xyXG4gIGNvbnN0IGxvYWRlciA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpc0NvbXBvbmVudE1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkTW9yZSwgc2V0TG9hZE1vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIFN0YXRlIHRvIGNvbnRyb2wgaW5pdGlhbGl6YXRpb24gYW5kIG9ic2VydmF0aW9uXHJcbiAgY29uc3QgW2luaXRpYWxpemVPYnNlcnZlciwgc2V0SW5pdGlhbGl6ZU9ic2VydmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRmV0Y2hOZXdzKCk7XHJcbiAgdXNlRmV0Y2hNb3JlRGF0YShsb2FkTW9yZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFydGljbGVDbGljayA9IChpdGVtOiBOZXdzSXRlbVR5cGUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkQXJ0aWNsZShpdGVtKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEFmdGVyIGEgZGVsYXksIGF1dGhvcml6ZSB0aGUgb2JzZXJ2YXRpb24gaWYgY29tcG9uZW50IG1vdW50ZWQgdG8gcHJldmVudCBwcmVtYXR1cmF0ZWQgb2JzZXJ2YXRpb25cclxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQpIHtcclxuICAgICAgICBzZXRJbml0aWFsaXplT2JzZXJ2ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZE1vcmUpIHtcclxuICAgICAgc2V0TG9hZE1vcmUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtuZXdzLmxlbmd0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNDb21wb25lbnRNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluaXRpYWxpemVPYnNlcnZlciAmJiBsb2FkZXIuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3QgPSBlbnRyaWVzWzBdO1xyXG4gICAgICAgICAgaWYgKGZpcnN0LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRNb3JlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0aHJlc2hvbGQ6IDEgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShsb2FkZXIuY3VycmVudCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIFtpbml0aWFsaXplT2JzZXJ2ZXJdKTtcclxuXHJcbiAgaWYgKCFuZXdzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+QWdlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMTBcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWdlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MTB9PlRlbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyMH0+VHdlbnR5PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezMwfT5UaGlydHk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgPFNlYXJjaD5cclxuICAgICAgICAgICAgPFNlYXJjaEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRJbnB1dEJhc2VcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2hcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZWFyY2g+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxMaXN0IGRlbnNlPlxyXG4gICAgICAgICAgICB7bmV3cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCImIC5NdWlBdmF0YXItcm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e2l0ZW0udGl0bGV9IHNyYz17aXRlbS51cmxUb0ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvbmV3c0RldGFpbHNQYWdlYH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFydGljbGVDbGljayhpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiaW5oZXJpdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17aXRlbS5zb3VyY2UubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtsb2FkZXJ9IHN0eWxlPXt7IGhlaWdodDogXCIxcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1BdmF0YXIiLCJBdmF0YXIiLCJMaXN0SXRlbVRleHQiLCJHcmlkIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNlbGVjdE5ld3MiLCJ1c2VGZXRjaE5ld3MiLCJ1c2VGZXRjaE1vcmVEYXRhIiwiTGluayIsInNldFNlbGVjdGVkQXJ0aWNsZSIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiU2VsZWN0IiwiTmV3cyIsImRpc3BhdGNoIiwibmV3cyIsImxvYWRlciIsImlzQ29tcG9uZW50TW91bnRlZCIsImxvYWRNb3JlIiwic2V0TG9hZE1vcmUiLCJpbml0aWFsaXplT2JzZXJ2ZXIiLCJzZXRJbml0aWFsaXplT2JzZXJ2ZXIiLCJoYW5kbGVBcnRpY2xlQ2xpY2siLCJpdGVtIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJsZW5ndGgiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZpcnN0IiwiaXNJbnRlcnNlY3RpbmciLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImRpdiIsImNvbnRhaW5lciIsInNwYWNpbmciLCJ4cyIsImZ1bGxXaWR0aCIsImlkIiwibGFiZWxJZCIsInZhbHVlIiwibGFiZWwiLCJTZWFyY2giLCJTZWFyY2hJY29uV3JhcHBlciIsIlNlYXJjaEljb24iLCJTdHlsZWRJbnB1dEJhc2UiLCJwbGFjZWhvbGRlciIsImlucHV0UHJvcHMiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkZW5zZSIsIm1hcCIsInN4IiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYWx0IiwidGl0bGUiLCJzcmMiLCJ1cmxUb0ltYWdlIiwicHJpbWFyeSIsImhyZWYiLCJvbkNsaWNrIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwic2Vjb25kYXJ5Iiwic291cmNlIiwibmFtZSIsInJlZiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News.tsx\n"));

/***/ })

});