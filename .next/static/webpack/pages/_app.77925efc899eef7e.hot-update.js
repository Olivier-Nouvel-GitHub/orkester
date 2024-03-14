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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectDetailedNews: function() { return /* binding */ selectDetailedNews; },\n/* harmony export */   selectFilter: function() { return /* binding */ selectFilter; },\n/* harmony export */   selectNews: function() { return /* binding */ selectNews; },\n/* harmony export */   selectPage: function() { return /* binding */ selectPage; },\n/* harmony export */   setFilter: function() { return /* binding */ setFilter; },\n/* harmony export */   setSelectedArticle: function() { return /* binding */ setSelectedArticle; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _actions_newsAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/newsAction */ \"./src/store/actions/newsAction.tsx\");\n\n\nconst initialState = {\n    articles: [],\n    url: null,\n    selectedArticle: null,\n    loading: false,\n    error: null,\n    page: 1,\n    query: \"\",\n    author: null,\n    filter: \"*\"\n};\nconst newsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"news\",\n    initialState,\n    reducers: {\n        setSelectedArticle (state, action) {\n            state.selectedArticle = action.payload;\n        },\n        setFilter (state, action) {\n            state.filter = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsRequest, (state, action)=>{\n            state.loading = true;\n            state.error = null;\n            state.page = action.payload.page;\n            state.query = action.payload.query;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsSuccess, (state, action)=>{\n            state.articles = action.payload.articles || [];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreData, (state, action)=>{\n            state.page = action.payload.page;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataSuccess, (state, action)=>{\n            state.articles = [\n                ...state.articles,\n                ...action.payload.articles\n            ];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        });\n    }\n});\nconst { setSelectedArticle, setFilter } = newsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsSlice.reducer);\nconst selectNews = (state)=>state.news.articles;\nconst selectPage = (state)=>state.news.page;\nconst selectDetailedNews = (state)=>state.news.selectedArticle;\nconst selectFilter = (state)=>state.news.filter;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL25ld3NTbGljZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBVS9CO0FBYy9CLE1BQU1PLGVBQTBCO0lBQzlCQyxVQUFVLEVBQUU7SUFDWkMsS0FBSztJQUNMQyxpQkFBaUI7SUFDakJDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxRQUFRO0FBQ1Y7QUFFQSxNQUFNQyxZQUFZakIsNkRBQVdBLENBQUM7SUFDNUJrQixNQUFNO0lBQ05YO0lBQ0FZLFVBQVU7UUFDUkMsb0JBQW1CQyxLQUFLLEVBQUVDLE1BQW1DO1lBQzNERCxNQUFNWCxlQUFlLEdBQUdZLE9BQU9DLE9BQU87UUFDeEM7UUFDQUMsV0FBVUgsS0FBSyxFQUFFQyxNQUE2QjtZQUM1Q0QsTUFBTUwsTUFBTSxHQUFHTSxPQUFPQyxPQUFPO1FBQy9CO0lBQ0Y7SUFDQUUsZUFBZSxDQUFDQztRQUNkQSxRQUNHQyxPQUFPLENBQ04xQixpRUFBZ0JBLEVBQ2hCLENBQUNvQixPQUFPQztZQUNORCxNQUFNVixPQUFPLEdBQUc7WUFDaEJVLE1BQU1ULEtBQUssR0FBRztZQUNkUyxNQUFNUixJQUFJLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsSUFBSTtZQUNoQ1EsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULEtBQUs7UUFDcEMsR0FFRGEsT0FBTyxDQUNOekIsaUVBQWdCQSxFQUNoQixDQUFDbUIsT0FBT0M7WUFDTkQsTUFBTWIsUUFBUSxHQUFHYyxPQUFPQyxPQUFPLENBQUNmLFFBQVEsSUFBSSxFQUFFO1lBQzlDYSxNQUFNVixPQUFPLEdBQUc7WUFDaEJVLE1BQU1ULEtBQUssR0FBRztRQUNoQixHQUVEZSxPQUFPLENBQ054QixpRUFBZ0JBLEVBQ2hCLENBQUNrQixPQUFPQztZQUNORCxNQUFNVCxLQUFLLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ1gsS0FBSztZQUNsQ1MsTUFBTVYsT0FBTyxHQUFHO1FBQ2xCLEdBRURnQixPQUFPLENBQ052Qiw4REFBYUEsRUFDYixDQUFDaUIsT0FBT0M7WUFDTkQsTUFBTVIsSUFBSSxHQUFHUyxPQUFPQyxPQUFPLENBQUNWLElBQUk7UUFDbEMsR0FFRGMsT0FBTyxDQUNOckIscUVBQW9CQSxFQUNwQixDQUFDZSxPQUFPQztZQUNORCxNQUFNYixRQUFRLEdBQUc7bUJBQUlhLE1BQU1iLFFBQVE7bUJBQUtjLE9BQU9DLE9BQU8sQ0FBQ2YsUUFBUTthQUFDO1lBQ2hFYSxNQUFNVixPQUFPLEdBQUc7WUFDaEJVLE1BQU1ULEtBQUssR0FBRztRQUNoQixHQUVEZSxPQUFPLENBQ050QixxRUFBb0JBLEVBQ3BCLENBQUNnQixPQUFPQztZQUNORCxNQUFNVCxLQUFLLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ1gsS0FBSztZQUNsQ1MsTUFBTVYsT0FBTyxHQUFHO1FBQ2xCO0lBRU47QUFDRjtBQUVPLE1BQU0sRUFBRVMsa0JBQWtCLEVBQUVJLFNBQVMsRUFBRSxHQUFHUCxVQUFVVyxPQUFPLENBQUM7QUFDbkUsK0RBQWVYLFVBQVVZLE9BQU8sRUFBQztBQUUxQixNQUFNQyxhQUFhLENBQUNULFFBQXFCQSxNQUFNVSxJQUFJLENBQUN2QixRQUFRLENBQUM7QUFDN0QsTUFBTXdCLGFBQWEsQ0FBQ1gsUUFBcUJBLE1BQU1VLElBQUksQ0FBQ2xCLElBQUksQ0FBQztBQUN6RCxNQUFNb0IscUJBQXFCLENBQUNaLFFBQ2pDQSxNQUFNVSxJQUFJLENBQUNyQixlQUFlLENBQUM7QUFDdEIsTUFBTXdCLGVBQWUsQ0FBQ2IsUUFBcUJBLE1BQU1VLElBQUksQ0FBQ2YsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9zbGljZXMvbmV3c1NsaWNlcy50c3g/NDcyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBOZXdzSXRlbVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGF0YVR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hOZXdzUmVxdWVzdCxcclxuICBmZXRjaE5ld3NTdWNjZXNzLFxyXG4gIGZldGNoTmV3c0ZhaWx1cmUsXHJcbiAgZmV0Y2hNb3JlRGF0YSxcclxuICBmZXRjaE1vcmVEYXRhRmFpbHVyZSxcclxuICBmZXRjaE1vcmVEYXRhU3VjY2VzcyxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9uZXdzQWN0aW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgTmV3c1N0YXRlIHtcclxuICBhcnRpY2xlczogTmV3c0l0ZW1UeXBlW107IC8vIFN0b3JlIHByZXNzIGFydGljbGVzXHJcbiAgdXJsOiBzdHJpbmcgfCBudWxsOyAvLyB1cmwgb2YgYXJ0aWNsZVxyXG4gIHNlbGVjdGVkQXJ0aWNsZTogTmV3c0l0ZW1UeXBlIHwgbnVsbDsgLy8gU3RvcmUgdGhlIGFydGljbGUgd2Ugd2FudCB0byBkaXNwbGF5IGRldGFpbHMgYWJvdXRcclxuICBsb2FkaW5nOiBib29sZWFuOyAvLyBEYXRhIGxvYWRpbmcgb3Igbm90XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7IC8vIFN0b3JlIGVycm9yc1xyXG4gIHBhZ2U6IG51bWJlcjsgLy8gYWN0dWFsIHBhZ2VcclxuICBxdWVyeTogc3RyaW5nOyAvLyByZXF1ZXN0IGdpdmVuIGJ5IHVzZXJcclxuICBhdXRob3I6IHN0cmluZyB8IG51bGw7XHJcbiAgZmlsdGVyOiBzdHJpbmcgfCBudWxsOyAvLyBQYXJhbWV0ZXIgdG8gZmlsdGVyIHJlcXVlc3RzXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTmV3c1N0YXRlID0ge1xyXG4gIGFydGljbGVzOiBbXSxcclxuICB1cmw6IG51bGwsXHJcbiAgc2VsZWN0ZWRBcnRpY2xlOiBudWxsLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHBhZ2U6IDEsXHJcbiAgcXVlcnk6IFwiXCIsXHJcbiAgYXV0aG9yOiBudWxsLFxyXG4gIGZpbHRlcjogXCIqXCIsXHJcbn07XHJcblxyXG5jb25zdCBuZXdzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJuZXdzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZWxlY3RlZEFydGljbGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxOZXdzSXRlbVR5cGU+KSB7XHJcbiAgICAgIHN0YXRlLnNlbGVjdGVkQXJ0aWNsZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldEZpbHRlcihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgc3RhdGUuZmlsdGVyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hOZXdzUmVxdWVzdCxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHBhZ2U6IG51bWJlcjsgcXVlcnk6IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQucGFnZTtcclxuICAgICAgICAgIHN0YXRlLnF1ZXJ5ID0gYWN0aW9uLnBheWxvYWQucXVlcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTmV3c1N1Y2Nlc3MsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBhcnRpY2xlczogTmV3c0l0ZW1UeXBlW10gfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmFydGljbGVzID0gYWN0aW9uLnBheWxvYWQuYXJ0aWNsZXMgfHwgW107XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTmV3c0ZhaWx1cmUsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBlcnJvcjogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yO1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuYWRkQ2FzZShcclxuICAgICAgICBmZXRjaE1vcmVEYXRhLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcGFnZTogbnVtYmVyIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQucGFnZTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBhcnRpY2xlczogTmV3c0l0ZW1UeXBlW10gfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmFydGljbGVzID0gWy4uLnN0YXRlLmFydGljbGVzLCAuLi5hY3Rpb24ucGF5bG9hZC5hcnRpY2xlc107XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTW9yZURhdGFGYWlsdXJlLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgZXJyb3I6IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvcjtcclxuICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRTZWxlY3RlZEFydGljbGUsIHNldEZpbHRlciB9ID0gbmV3c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IG5ld3NTbGljZS5yZWR1Y2VyO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdE5ld3MgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3cy5hcnRpY2xlcztcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2UgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3cy5wYWdlO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0RGV0YWlsZWROZXdzID0gKHN0YXRlOiBSb290U3RhdGUpID0+XHJcbiAgc3RhdGUubmV3cy5zZWxlY3RlZEFydGljbGU7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXIgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3cy5maWx0ZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoTmV3c1JlcXVlc3QiLCJmZXRjaE5ld3NTdWNjZXNzIiwiZmV0Y2hOZXdzRmFpbHVyZSIsImZldGNoTW9yZURhdGEiLCJmZXRjaE1vcmVEYXRhRmFpbHVyZSIsImZldGNoTW9yZURhdGFTdWNjZXNzIiwiaW5pdGlhbFN0YXRlIiwiYXJ0aWNsZXMiLCJ1cmwiLCJzZWxlY3RlZEFydGljbGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwicXVlcnkiLCJhdXRob3IiLCJmaWx0ZXIiLCJuZXdzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRTZWxlY3RlZEFydGljbGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRGaWx0ZXIiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJhY3Rpb25zIiwicmVkdWNlciIsInNlbGVjdE5ld3MiLCJuZXdzIiwic2VsZWN0UGFnZSIsInNlbGVjdERldGFpbGVkTmV3cyIsInNlbGVjdEZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/slices/newsSlices.tsx\n"));

/***/ })

});