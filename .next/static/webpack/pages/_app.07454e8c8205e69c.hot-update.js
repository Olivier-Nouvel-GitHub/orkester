"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/slices/newsSlices.tsx":
/*!*****************************************!*\
  !*** ./src/store/slices/newsSlices.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectDetailedNews: function() { return /* binding */ selectDetailedNews; },\n/* harmony export */   selectFilter: function() { return /* binding */ selectFilter; },\n/* harmony export */   selectNews: function() { return /* binding */ selectNews; },\n/* harmony export */   selectPage: function() { return /* binding */ selectPage; },\n/* harmony export */   setFilter: function() { return /* binding */ setFilter; },\n/* harmony export */   setSelectedArticle: function() { return /* binding */ setSelectedArticle; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _actions_newsAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/newsAction */ \"./src/store/actions/newsAction.tsx\");\n\n\nconst initialState = {\n    articles: [],\n    url: null,\n    selectedArticle: null,\n    loading: false,\n    error: null,\n    page: 1,\n    query: \"\",\n    author: null,\n    filter: \"*\"\n};\nconst newsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"news\",\n    initialState,\n    reducers: {\n        setSelectedArticle (state, action) {\n            state.selectedArticle = action.payload;\n        },\n        setFilter (state, action) {\n            state.filter = action.payload;\n        },\n        setResetStore (state, action) {\n            state.articles = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsRequest, (state, action)=>{\n            state.loading = true;\n            state.error = null;\n            state.page = action.payload.page;\n            state.query = action.payload.query;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsSuccess, (state, action)=>{\n            state.articles = action.payload.articles || [];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreData, (state, action)=>{\n            state.page = action.payload.page;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataSuccess, (state, action)=>{\n            state.articles = [\n                ...state.articles,\n                ...action.payload.articles\n            ];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        });\n    }\n});\nconst { setSelectedArticle, setFilter } = newsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsSlice.reducer);\nconst selectNews = (state)=>state.news.articles;\nconst selectPage = (state)=>state.news.page;\nconst selectDetailedNews = (state)=>state.news.selectedArticle;\nconst selectFilter = (state)=>state.news.filter;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL25ld3NTbGljZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBVS9CO0FBYy9CLE1BQU1PLGVBQTBCO0lBQzlCQyxVQUFVLEVBQUU7SUFDWkMsS0FBSztJQUNMQyxpQkFBaUI7SUFDakJDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxRQUFRO0FBQ1Y7QUFFQSxNQUFNQyxZQUFZakIsNkRBQVdBLENBQUM7SUFDNUJrQixNQUFNO0lBQ05YO0lBQ0FZLFVBQVU7UUFDUkMsb0JBQW1CQyxLQUFLLEVBQUVDLE1BQW1DO1lBQzNERCxNQUFNWCxlQUFlLEdBQUdZLE9BQU9DLE9BQU87UUFDeEM7UUFDQUMsV0FBVUgsS0FBSyxFQUFFQyxNQUE2QjtZQUM1Q0QsTUFBTUwsTUFBTSxHQUFHTSxPQUFPQyxPQUFPO1FBQy9CO1FBQ0FFLGVBQWNKLEtBQUssRUFBRUMsTUFBcUM7WUFDeERELE1BQU1iLFFBQVEsR0FBR2MsT0FBT0MsT0FBTztRQUNqQztJQUNGO0lBQ0FHLGVBQWUsQ0FBQ0M7UUFDZEEsUUFDR0MsT0FBTyxDQUNOM0IsaUVBQWdCQSxFQUNoQixDQUFDb0IsT0FBT0M7WUFDTkQsTUFBTVYsT0FBTyxHQUFHO1lBQ2hCVSxNQUFNVCxLQUFLLEdBQUc7WUFDZFMsTUFBTVIsSUFBSSxHQUFHUyxPQUFPQyxPQUFPLENBQUNWLElBQUk7WUFDaENRLE1BQU1QLEtBQUssR0FBR1EsT0FBT0MsT0FBTyxDQUFDVCxLQUFLO1FBQ3BDLEdBRURjLE9BQU8sQ0FDTjFCLGlFQUFnQkEsRUFDaEIsQ0FBQ21CLE9BQU9DO1lBQ05ELE1BQU1iLFFBQVEsR0FBR2MsT0FBT0MsT0FBTyxDQUFDZixRQUFRLElBQUksRUFBRTtZQUM5Q2EsTUFBTVYsT0FBTyxHQUFHO1lBQ2hCVSxNQUFNVCxLQUFLLEdBQUc7UUFDaEIsR0FFRGdCLE9BQU8sQ0FDTnpCLGlFQUFnQkEsRUFDaEIsQ0FBQ2tCLE9BQU9DO1lBQ05ELE1BQU1ULEtBQUssR0FBR1UsT0FBT0MsT0FBTyxDQUFDWCxLQUFLO1lBQ2xDUyxNQUFNVixPQUFPLEdBQUc7UUFDbEIsR0FFRGlCLE9BQU8sQ0FDTnhCLDhEQUFhQSxFQUNiLENBQUNpQixPQUFPQztZQUNORCxNQUFNUixJQUFJLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsSUFBSTtRQUNsQyxHQUVEZSxPQUFPLENBQ050QixxRUFBb0JBLEVBQ3BCLENBQUNlLE9BQU9DO1lBQ05ELE1BQU1iLFFBQVEsR0FBRzttQkFBSWEsTUFBTWIsUUFBUTttQkFBS2MsT0FBT0MsT0FBTyxDQUFDZixRQUFRO2FBQUM7WUFDaEVhLE1BQU1WLE9BQU8sR0FBRztZQUNoQlUsTUFBTVQsS0FBSyxHQUFHO1FBQ2hCLEdBRURnQixPQUFPLENBQ052QixxRUFBb0JBLEVBQ3BCLENBQUNnQixPQUFPQztZQUNORCxNQUFNVCxLQUFLLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ1gsS0FBSztZQUNsQ1MsTUFBTVYsT0FBTyxHQUFHO1FBQ2xCO0lBRU47QUFDRjtBQUVPLE1BQU0sRUFBRVMsa0JBQWtCLEVBQUVJLFNBQVMsRUFBRSxHQUFHUCxVQUFVWSxPQUFPLENBQUM7QUFDbkUsK0RBQWVaLFVBQVVhLE9BQU8sRUFBQztBQUUxQixNQUFNQyxhQUFhLENBQUNWLFFBQXFCQSxNQUFNVyxJQUFJLENBQUN4QixRQUFRLENBQUM7QUFDN0QsTUFBTXlCLGFBQWEsQ0FBQ1osUUFBcUJBLE1BQU1XLElBQUksQ0FBQ25CLElBQUksQ0FBQztBQUN6RCxNQUFNcUIscUJBQXFCLENBQUNiLFFBQ2pDQSxNQUFNVyxJQUFJLENBQUN0QixlQUFlLENBQUM7QUFDdEIsTUFBTXlCLGVBQWUsQ0FBQ2QsUUFBcUJBLE1BQU1XLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc2xpY2VzL25ld3NTbGljZXMudHN4PzQ3MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgTmV3c0l0ZW1UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2RhdGFUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoTmV3c1JlcXVlc3QsXHJcbiAgZmV0Y2hOZXdzU3VjY2VzcyxcclxuICBmZXRjaE5ld3NGYWlsdXJlLFxyXG4gIGZldGNoTW9yZURhdGEsXHJcbiAgZmV0Y2hNb3JlRGF0YUZhaWx1cmUsXHJcbiAgZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvbmV3c0FjdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIE5ld3NTdGF0ZSB7XHJcbiAgYXJ0aWNsZXM6IE5ld3NJdGVtVHlwZVtdOyAvLyBTdG9yZSBwcmVzcyBhcnRpY2xlc1xyXG4gIHVybDogc3RyaW5nIHwgbnVsbDsgLy8gdXJsIG9mIGFydGljbGVcclxuICBzZWxlY3RlZEFydGljbGU6IE5ld3NJdGVtVHlwZSB8IG51bGw7IC8vIFN0b3JlIHRoZSBhcnRpY2xlIHdlIHdhbnQgdG8gZGlzcGxheSBkZXRhaWxzIGFib3V0XHJcbiAgbG9hZGluZzogYm9vbGVhbjsgLy8gRGF0YSBsb2FkaW5nIG9yIG5vdFxyXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsOyAvLyBTdG9yZSBlcnJvcnNcclxuICBwYWdlOiBudW1iZXI7IC8vIGFjdHVhbCBwYWdlXHJcbiAgcXVlcnk6IHN0cmluZzsgLy8gcmVxdWVzdCBnaXZlbiBieSB1c2VyXHJcbiAgYXV0aG9yOiBzdHJpbmcgfCBudWxsO1xyXG4gIGZpbHRlcjogc3RyaW5nIHwgbnVsbDsgLy8gUGFyYW1ldGVyIHRvIGZpbHRlciByZXF1ZXN0c1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IE5ld3NTdGF0ZSA9IHtcclxuICBhcnRpY2xlczogW10sXHJcbiAgdXJsOiBudWxsLFxyXG4gIHNlbGVjdGVkQXJ0aWNsZTogbnVsbCxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBwYWdlOiAxLFxyXG4gIHF1ZXJ5OiBcIlwiLFxyXG4gIGF1dGhvcjogbnVsbCxcclxuICBmaWx0ZXI6IFwiKlwiLFxyXG59O1xyXG5cclxuY29uc3QgbmV3c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwibmV3c1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2VsZWN0ZWRBcnRpY2xlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248TmV3c0l0ZW1UeXBlPikge1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZEFydGljbGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRGaWx0ZXIoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgIHN0YXRlLmZpbHRlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldFJlc2V0U3RvcmUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxOZXdzSXRlbVR5cGVbXT4pIHtcclxuICAgICAgc3RhdGUuYXJ0aWNsZXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShcclxuICAgICAgICBmZXRjaE5ld3NSZXF1ZXN0LFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcGFnZTogbnVtYmVyOyBxdWVyeTogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgICAgICAgIHN0YXRlLnBhZ2UgPSBhY3Rpb24ucGF5bG9hZC5wYWdlO1xyXG4gICAgICAgICAgc3RhdGUucXVlcnkgPSBhY3Rpb24ucGF5bG9hZC5xdWVyeTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hOZXdzU3VjY2VzcyxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGFydGljbGVzOiBOZXdzSXRlbVR5cGVbXSB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuYXJ0aWNsZXMgPSBhY3Rpb24ucGF5bG9hZC5hcnRpY2xlcyB8fCBbXTtcclxuICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hOZXdzRmFpbHVyZSxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGVycm9yOiBzdHJpbmcgfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3I7XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTW9yZURhdGEsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBwYWdlOiBudW1iZXIgfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLnBhZ2UgPSBhY3Rpb24ucGF5bG9hZC5wYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuYWRkQ2FzZShcclxuICAgICAgICBmZXRjaE1vcmVEYXRhU3VjY2VzcyxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGFydGljbGVzOiBOZXdzSXRlbVR5cGVbXSB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuYXJ0aWNsZXMgPSBbLi4uc3RhdGUuYXJ0aWNsZXMsIC4uLmFjdGlvbi5wYXlsb2FkLmFydGljbGVzXTtcclxuICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hNb3JlRGF0YUZhaWx1cmUsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBlcnJvcjogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yO1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFNlbGVjdGVkQXJ0aWNsZSwgc2V0RmlsdGVyIH0gPSBuZXdzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgbmV3c1NsaWNlLnJlZHVjZXI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TmV3cyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzLmFydGljbGVzO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzLnBhZ2U7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3REZXRhaWxlZE5ld3MgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT5cclxuICBzdGF0ZS5uZXdzLnNlbGVjdGVkQXJ0aWNsZTtcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZpbHRlciA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzLmZpbHRlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hOZXdzUmVxdWVzdCIsImZldGNoTmV3c1N1Y2Nlc3MiLCJmZXRjaE5ld3NGYWlsdXJlIiwiZmV0Y2hNb3JlRGF0YSIsImZldGNoTW9yZURhdGFGYWlsdXJlIiwiZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MiLCJpbml0aWFsU3RhdGUiLCJhcnRpY2xlcyIsInVybCIsInNlbGVjdGVkQXJ0aWNsZSIsImxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJxdWVyeSIsImF1dGhvciIsImZpbHRlciIsIm5ld3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFNlbGVjdGVkQXJ0aWNsZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEZpbHRlciIsInNldFJlc2V0U3RvcmUiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJhY3Rpb25zIiwicmVkdWNlciIsInNlbGVjdE5ld3MiLCJuZXdzIiwic2VsZWN0UGFnZSIsInNlbGVjdERldGFpbGVkTmV3cyIsInNlbGVjdEZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/slices/newsSlices.tsx\n"));

/***/ })

});