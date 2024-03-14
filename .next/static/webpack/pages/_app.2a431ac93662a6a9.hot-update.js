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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectDetailedNews: function() { return /* binding */ selectDetailedNews; },\n/* harmony export */   selectFilter: function() { return /* binding */ selectFilter; },\n/* harmony export */   selectNews: function() { return /* binding */ selectNews; },\n/* harmony export */   selectPage: function() { return /* binding */ selectPage; },\n/* harmony export */   setFilter: function() { return /* binding */ setFilter; },\n/* harmony export */   setSelectedArticle: function() { return /* binding */ setSelectedArticle; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _actions_newsAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/newsAction */ \"./src/store/actions/newsAction.tsx\");\n\n\nconst initialState = {\n    articles: [],\n    url: null,\n    selectedArticle: null,\n    loading: false,\n    error: null,\n    page: 1,\n    query: \"\",\n    author: null,\n    filter: null\n};\nconst newsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"news\",\n    initialState,\n    reducers: {\n        setSelectedArticle (state, action) {\n            state.selectedArticle = action.payload;\n        },\n        setFilter (state, action) {\n            state.filter = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsRequest, (state, action)=>{\n            state.loading = true;\n            state.error = null;\n            state.page = action.payload.page;\n            state.query = action.payload.query;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsSuccess, (state, action)=>{\n            state.articles = [\n                ...state.articles,\n                ...action.payload.articles\n            ];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreData, (state, action)=>{\n            state.page = action.payload.page;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataSuccess, (state, action)=>{\n            state.articles = [\n                ...state.articles,\n                ...action.payload.articles\n            ];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        });\n    }\n});\nconst { setSelectedArticle, setFilter } = newsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsSlice.reducer);\nconst selectNews = (state)=>state.news.articles;\nconst selectPage = (state)=>state.news.page;\nconst selectDetailedNews = (state)=>state.news.selectedArticle;\nconst selectFilter = (state)=>state.news.filter;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL25ld3NTbGljZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBVS9CO0FBYy9CLE1BQU1PLGVBQTBCO0lBQzlCQyxVQUFVLEVBQUU7SUFDWkMsS0FBSztJQUNMQyxpQkFBaUI7SUFDakJDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxRQUFRO0FBQ1Y7QUFFQSxNQUFNQyxZQUFZakIsNkRBQVdBLENBQUM7SUFDNUJrQixNQUFNO0lBQ05YO0lBQ0FZLFVBQVU7UUFDUkMsb0JBQW1CQyxLQUFLLEVBQUVDLE1BQW1DO1lBQzNERCxNQUFNWCxlQUFlLEdBQUdZLE9BQU9DLE9BQU87UUFDeEM7UUFDQUMsV0FBVUgsS0FBSyxFQUFFQyxNQUE2QjtZQUM1Q0QsTUFBTUwsTUFBTSxHQUFHTSxPQUFPQyxPQUFPO1FBQy9CO0lBQ0Y7SUFDQUUsZUFBZSxDQUFDQztRQUNkQSxRQUNHQyxPQUFPLENBQ04xQixpRUFBZ0JBLEVBQ2hCLENBQUNvQixPQUFPQztZQUNORCxNQUFNVixPQUFPLEdBQUc7WUFDaEJVLE1BQU1ULEtBQUssR0FBRztZQUNkUyxNQUFNUixJQUFJLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsSUFBSTtZQUNoQ1EsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULEtBQUs7UUFDcEMsR0FFRGEsT0FBTyxDQUNOekIsaUVBQWdCQSxFQUNoQixDQUFDbUIsT0FBT0M7WUFDTkQsTUFBTWIsUUFBUSxHQUFHO21CQUFJYSxNQUFNYixRQUFRO21CQUFLYyxPQUFPQyxPQUFPLENBQUNmLFFBQVE7YUFBQztZQUNoRWEsTUFBTVYsT0FBTyxHQUFHO1lBQ2hCVSxNQUFNVCxLQUFLLEdBQUc7UUFDaEIsR0FFRGUsT0FBTyxDQUNOeEIsaUVBQWdCQSxFQUNoQixDQUFDa0IsT0FBT0M7WUFDTkQsTUFBTVQsS0FBSyxHQUFHVSxPQUFPQyxPQUFPLENBQUNYLEtBQUs7WUFDbENTLE1BQU1WLE9BQU8sR0FBRztRQUNsQixHQUVEZ0IsT0FBTyxDQUNOdkIsOERBQWFBLEVBQ2IsQ0FBQ2lCLE9BQU9DO1lBQ05ELE1BQU1SLElBQUksR0FBR1MsT0FBT0MsT0FBTyxDQUFDVixJQUFJO1FBQ2xDLEdBRURjLE9BQU8sQ0FDTnJCLHFFQUFvQkEsRUFDcEIsQ0FBQ2UsT0FBT0M7WUFDTkQsTUFBTWIsUUFBUSxHQUFHO21CQUFJYSxNQUFNYixRQUFRO21CQUFLYyxPQUFPQyxPQUFPLENBQUNmLFFBQVE7YUFBQztZQUNoRWEsTUFBTVYsT0FBTyxHQUFHO1lBQ2hCVSxNQUFNVCxLQUFLLEdBQUc7UUFDaEIsR0FFRGUsT0FBTyxDQUNOdEIscUVBQW9CQSxFQUNwQixDQUFDZ0IsT0FBT0M7WUFDTkQsTUFBTVQsS0FBSyxHQUFHVSxPQUFPQyxPQUFPLENBQUNYLEtBQUs7WUFDbENTLE1BQU1WLE9BQU8sR0FBRztRQUNsQjtJQUVOO0FBQ0Y7QUFFTyxNQUFNLEVBQUVTLGtCQUFrQixFQUFFSSxTQUFTLEVBQUUsR0FBR1AsVUFBVVcsT0FBTyxDQUFDO0FBQ25FLCtEQUFlWCxVQUFVWSxPQUFPLEVBQUM7QUFFMUIsTUFBTUMsYUFBYSxDQUFDVCxRQUFxQkEsTUFBTVUsSUFBSSxDQUFDdkIsUUFBUSxDQUFDO0FBQzdELE1BQU13QixhQUFhLENBQUNYLFFBQXFCQSxNQUFNVSxJQUFJLENBQUNsQixJQUFJLENBQUM7QUFDekQsTUFBTW9CLHFCQUFxQixDQUFDWixRQUNqQ0EsTUFBTVUsSUFBSSxDQUFDckIsZUFBZSxDQUFDO0FBQ3RCLE1BQU13QixlQUFlLENBQUNiLFFBQXFCQSxNQUFNVSxJQUFJLENBQUNmLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc2xpY2VzL25ld3NTbGljZXMudHN4PzQ3MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgTmV3c0l0ZW1UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2RhdGFUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoTmV3c1JlcXVlc3QsXHJcbiAgZmV0Y2hOZXdzU3VjY2VzcyxcclxuICBmZXRjaE5ld3NGYWlsdXJlLFxyXG4gIGZldGNoTW9yZURhdGEsXHJcbiAgZmV0Y2hNb3JlRGF0YUZhaWx1cmUsXHJcbiAgZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvbmV3c0FjdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIE5ld3NTdGF0ZSB7XHJcbiAgYXJ0aWNsZXM6IE5ld3NJdGVtVHlwZVtdOyAvLyBTdG9yZSBwcmVzcyBhcnRpY2xlc1xyXG4gIHVybDogc3RyaW5nIHwgbnVsbDsgLy8gdXJsIG9mIGFydGljbGVcclxuICBzZWxlY3RlZEFydGljbGU6IE5ld3NJdGVtVHlwZSB8IG51bGw7IC8vIFN0b3JlIHRoZSBhcnRpY2xlIHdlIHdhbnQgdG8gZGlzcGxheSBkZXRhaWxzIGFib3V0XHJcbiAgbG9hZGluZzogYm9vbGVhbjsgLy8gRGF0YSBsb2FkaW5nIG9yIG5vdFxyXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsOyAvLyBTdG9yZSBlcnJvcnNcclxuICBwYWdlOiBudW1iZXI7IC8vIGFjdHVhbCBwYWdlXHJcbiAgcXVlcnk6IHN0cmluZzsgLy8gcmVxdWVzdCBnaXZlbiBieSB1c2VyXHJcbiAgYXV0aG9yOiBzdHJpbmcgfCBudWxsO1xyXG4gIGZpbHRlcjogc3RyaW5nIHwgbnVsbDsgLy8gUGFyYW1ldGVyIHRvIGZpbHRlciByZXF1ZXN0c1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IE5ld3NTdGF0ZSA9IHtcclxuICBhcnRpY2xlczogW10sXHJcbiAgdXJsOiBudWxsLFxyXG4gIHNlbGVjdGVkQXJ0aWNsZTogbnVsbCxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBwYWdlOiAxLFxyXG4gIHF1ZXJ5OiBcIlwiLFxyXG4gIGF1dGhvcjogbnVsbCxcclxuICBmaWx0ZXI6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBuZXdzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJuZXdzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZWxlY3RlZEFydGljbGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxOZXdzSXRlbVR5cGU+KSB7XHJcbiAgICAgIHN0YXRlLnNlbGVjdGVkQXJ0aWNsZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldEZpbHRlcihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgc3RhdGUuZmlsdGVyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hOZXdzUmVxdWVzdCxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHBhZ2U6IG51bWJlcjsgcXVlcnk6IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQucGFnZTtcclxuICAgICAgICAgIHN0YXRlLnF1ZXJ5ID0gYWN0aW9uLnBheWxvYWQucXVlcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTmV3c1N1Y2Nlc3MsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBhcnRpY2xlczogTmV3c0l0ZW1UeXBlW10gfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmFydGljbGVzID0gWy4uLnN0YXRlLmFydGljbGVzLCAuLi5hY3Rpb24ucGF5bG9hZC5hcnRpY2xlc107XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTmV3c0ZhaWx1cmUsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBlcnJvcjogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yO1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuYWRkQ2FzZShcclxuICAgICAgICBmZXRjaE1vcmVEYXRhLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcGFnZTogbnVtYmVyIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQucGFnZTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBhcnRpY2xlczogTmV3c0l0ZW1UeXBlW10gfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmFydGljbGVzID0gWy4uLnN0YXRlLmFydGljbGVzLCAuLi5hY3Rpb24ucGF5bG9hZC5hcnRpY2xlc107XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTW9yZURhdGFGYWlsdXJlLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgZXJyb3I6IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvcjtcclxuICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRTZWxlY3RlZEFydGljbGUsIHNldEZpbHRlciB9ID0gbmV3c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IG5ld3NTbGljZS5yZWR1Y2VyO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdE5ld3MgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3cy5hcnRpY2xlcztcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2UgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3cy5wYWdlO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0RGV0YWlsZWROZXdzID0gKHN0YXRlOiBSb290U3RhdGUpID0+XHJcbiAgc3RhdGUubmV3cy5zZWxlY3RlZEFydGljbGU7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXIgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3cy5maWx0ZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoTmV3c1JlcXVlc3QiLCJmZXRjaE5ld3NTdWNjZXNzIiwiZmV0Y2hOZXdzRmFpbHVyZSIsImZldGNoTW9yZURhdGEiLCJmZXRjaE1vcmVEYXRhRmFpbHVyZSIsImZldGNoTW9yZURhdGFTdWNjZXNzIiwiaW5pdGlhbFN0YXRlIiwiYXJ0aWNsZXMiLCJ1cmwiLCJzZWxlY3RlZEFydGljbGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwicXVlcnkiLCJhdXRob3IiLCJmaWx0ZXIiLCJuZXdzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRTZWxlY3RlZEFydGljbGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRGaWx0ZXIiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJhY3Rpb25zIiwicmVkdWNlciIsInNlbGVjdE5ld3MiLCJuZXdzIiwic2VsZWN0UGFnZSIsInNlbGVjdERldGFpbGVkTmV3cyIsInNlbGVjdEZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/slices/newsSlices.tsx\n"));

/***/ })

});