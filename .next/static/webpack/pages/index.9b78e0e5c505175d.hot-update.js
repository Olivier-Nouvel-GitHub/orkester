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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/newsSlices */ \"./src/store/slices/newsSlices.tsx\");\n/* harmony import */ var _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchNews */ \"./src/hooks/useFetchNews.tsx\");\n/* harmony import */ var _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetchMoreData */ \"./src/hooks/useFetchMoreData.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/FormControl/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,InputLabel,MenuItem,Select,TextField!=!@mui/material */ \"./node_modules/@mui/material/TextField/TextField.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst News = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const news = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.selectNews);\n    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isComponentMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const [loadMore, setLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State to control initialization and observation\n    const [initializeObserver, setInitializeObserver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [filterValue, setFilterValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,_hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews)();\n    (0,_hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData)(loadMore);\n    const handleChange = (event)=>{\n        setValue(event.target.value); // Assurez-vous de convertir la valeur en chaîne de caractères\n    };\n    const handleArticleClick = (item)=>{\n        dispatch((0,_store_slices_newsSlices__WEBPACK_IMPORTED_MODULE_2__.setSelectedArticle)(item));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // After a delay, authorize the observation if component mounted to prevent prematurated observation\n        const timeoutId = setTimeout(()=>{\n            if (isComponentMounted.current) {\n                setInitializeObserver(true);\n            }\n        }, 1000);\n        return ()=>clearTimeout(timeoutId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadMore) {\n            setLoadMore(false);\n        }\n    }, [\n        news.length\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isComponentMounted.current = true;\n        return ()=>{\n            isComponentMounted.current = false;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initializeObserver && loader.current) {\n            const observer = new IntersectionObserver((entries)=>{\n                const first = entries[0];\n                if (first.isIntersecting) {\n                    setLoadMore(true);\n                }\n            }, {\n                threshold: 1\n            });\n            observer.observe(loader.current);\n            return ()=>observer.disconnect();\n        }\n    }, [\n        initializeObserver\n    ]);\n    if (!news) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n            lineNumber: 87,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                spacing: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            fullWidth: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    id: \"select-filter\",\n                                    children: \"Filter\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    labelId: \"select-filter\",\n                                    id: \"select-filter-component\",\n                                    value: value,\n                                    label: \"Parameter\",\n                                    onChange: handleChange,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: \"title\",\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: \"source\",\n                                            children: \"Source\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            value: \"language\",\n                                            children: \"Language\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_InputLabel_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            id: \"standard-basic\",\n                            label: \"Research\",\n                            variant: \"standard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    item: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        dense: true,\n                        children: [\n                            news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                    sx: {\n                                        \"&:hover\": {\n                                            \"& .MuiAvatar-root\": {\n                                                borderColor: \"black\",\n                                                borderWidth: 2,\n                                                borderStyle: \"solid\"\n                                            }\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                                alt: item.title,\n                                                src: item.urlToImage\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                                lineNumber: 131,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                            primary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                href: \"/newsDetailsPage\",\n                                                onClick: ()=>handleArticleClick(item),\n                                                style: {\n                                                    textDecoration: \"none\",\n                                                    color: \"inherit\"\n                                                },\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 21\n                                            }, void 0),\n                                            secondary: item.source.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, item.title, true, {\n                                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: loader,\n                                style: {\n                                    height: \"1px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\olivi\\\\OneDrive\\\\Bureau\\\\work-project\\\\orkester-test\\\\src\\\\components\\\\News.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(News, \"0QRhaSmOk03KovJUlDlhiTkdJQY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        _hooks_useFetchNews__WEBPACK_IMPORTED_MODULE_3__.useFetchNews,\n        _hooks_useFetchMoreData__WEBPACK_IMPORTED_MODULE_4__.useFetchMoreData\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3cy50c3g/MDlkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUF2YXRhclwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3ROZXdzIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9uZXdzU2xpY2VzXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoTmV3cyB9IGZyb20gXCIuLi9ob29rcy91c2VGZXRjaE5ld3NcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hNb3JlRGF0YSB9IGZyb20gXCIuLi9ob29rcy91c2VGZXRjaE1vcmVEYXRhXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTmV3c0l0ZW1UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2RhdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBzZXRTZWxlY3RlZEFydGljbGUgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL25ld3NTbGljZXNcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBJbnB1dExhYmVsLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBuZXdzID0gdXNlU2VsZWN0b3Ioc2VsZWN0TmV3cyk7XHJcbiAgY29uc3QgbG9hZGVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlzQ29tcG9uZW50TW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRNb3JlLCBzZXRMb2FkTW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gU3RhdGUgdG8gY29udHJvbCBpbml0aWFsaXphdGlvbiBhbmQgb2JzZXJ2YXRpb25cclxuICBjb25zdCBbaW5pdGlhbGl6ZU9ic2VydmVyLCBzZXRJbml0aWFsaXplT2JzZXJ2ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgdXNlRmV0Y2hOZXdzKCk7XHJcbiAgdXNlRmV0Y2hNb3JlRGF0YShsb2FkTW9yZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PikgPT4ge1xyXG4gICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZyk7IC8vIEFzc3VyZXotdm91cyBkZSBjb252ZXJ0aXIgbGEgdmFsZXVyIGVuIGNoYcOubmUgZGUgY2FyYWN0w6hyZXNcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBcnRpY2xlQ2xpY2sgPSAoaXRlbTogTmV3c0l0ZW1UeXBlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRTZWxlY3RlZEFydGljbGUoaXRlbSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBBZnRlciBhIGRlbGF5LCBhdXRob3JpemUgdGhlIG9ic2VydmF0aW9uIGlmIGNvbXBvbmVudCBtb3VudGVkIHRvIHByZXZlbnQgcHJlbWF0dXJhdGVkIG9ic2VydmF0aW9uXHJcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzQ29tcG9uZW50TW91bnRlZC5jdXJyZW50KSB7XHJcbiAgICAgICAgc2V0SW5pdGlhbGl6ZU9ic2VydmVyKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRNb3JlKSB7XHJcbiAgICAgIHNldExvYWRNb3JlKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbbmV3cy5sZW5ndGhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzQ29tcG9uZW50TW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzQ29tcG9uZW50TW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbml0aWFsaXplT2JzZXJ2ZXIgJiYgbG9hZGVyLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0ID0gZW50cmllc1swXTtcclxuICAgICAgICAgIGlmIChmaXJzdC5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBzZXRMb2FkTW9yZSh0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGhyZXNob2xkOiAxIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobG9hZGVyLmN1cnJlbnQpO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9LCBbaW5pdGlhbGl6ZU9ic2VydmVyXSk7XHJcblxyXG4gIGlmICghbmV3cykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInNlbGVjdC1maWx0ZXJcIj5GaWx0ZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbElkPVwic2VsZWN0LWZpbHRlclwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWxlY3QtZmlsdGVyLWNvbXBvbmVudFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFyYW1ldGVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwidGl0bGVcIj5UaXRsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwic291cmNlXCI+U291cmNlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJsYW5ndWFnZVwiPkxhbmd1YWdlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiIGxhYmVsPVwiUmVzZWFyY2hcIiB2YXJpYW50PVwic3RhbmRhcmRcIiAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8TGlzdCBkZW5zZT5cclxuICAgICAgICAgICAge25ld3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJiAuTXVpQXZhdGFyLXJvb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtpdGVtLnRpdGxlfSBzcmM9e2l0ZW0udXJsVG9JbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL25ld3NEZXRhaWxzUGFnZWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBcnRpY2xlQ2xpY2soaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcImluaGVyaXRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2l0ZW0uc291cmNlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17bG9hZGVyfSBzdHlsZT17eyBoZWlnaHQ6IFwiMXB4XCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQXZhdGFyIiwiQXZhdGFyIiwiTGlzdEl0ZW1UZXh0IiwiR3JpZCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZWxlY3ROZXdzIiwidXNlRmV0Y2hOZXdzIiwidXNlRmV0Y2hNb3JlRGF0YSIsIkxpbmsiLCJzZXRTZWxlY3RlZEFydGljbGUiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJNZW51SXRlbSIsIlNlbGVjdCIsIlRleHRGaWVsZCIsIk5ld3MiLCJkaXNwYXRjaCIsIm5ld3MiLCJsb2FkZXIiLCJpc0NvbXBvbmVudE1vdW50ZWQiLCJsb2FkTW9yZSIsInNldExvYWRNb3JlIiwiaW5pdGlhbGl6ZU9ic2VydmVyIiwic2V0SW5pdGlhbGl6ZU9ic2VydmVyIiwiZmlsdGVyVmFsdWUiLCJzZXRGaWx0ZXJWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic2V0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFydGljbGVDbGljayIsIml0ZW0iLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsImxlbmd0aCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZmlyc3QiLCJpc0ludGVyc2VjdGluZyIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGl2IiwiY29udGFpbmVyIiwic3BhY2luZyIsInhzIiwiZnVsbFdpZHRoIiwiaWQiLCJsYWJlbElkIiwibGFiZWwiLCJvbkNoYW5nZSIsInZhcmlhbnQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkZW5zZSIsIm1hcCIsInN4IiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYWx0IiwidGl0bGUiLCJzcmMiLCJ1cmxUb0ltYWdlIiwicHJpbWFyeSIsImhyZWYiLCJvbkNsaWNrIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwic2Vjb25kYXJ5Iiwic291cmNlIiwibmFtZSIsInJlZiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News.tsx\n"));

/***/ })

});