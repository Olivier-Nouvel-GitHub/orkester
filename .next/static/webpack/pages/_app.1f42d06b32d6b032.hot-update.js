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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectDetailedNews: function() { return /* binding */ selectDetailedNews; },\n/* harmony export */   selectFilter: function() { return /* binding */ selectFilter; },\n/* harmony export */   selectNews: function() { return /* binding */ selectNews; },\n/* harmony export */   selectPage: function() { return /* binding */ selectPage; },\n/* harmony export */   setFilter: function() { return /* binding */ setFilter; },\n/* harmony export */   setResetStore: function() { return /* binding */ setResetStore; },\n/* harmony export */   setSelectedArticle: function() { return /* binding */ setSelectedArticle; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _actions_newsAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/newsAction */ \"./src/store/actions/newsAction.tsx\");\n\n\nconst initialState = {\n    articles: [],\n    url: null,\n    selectedArticle: null,\n    loading: false,\n    error: null,\n    page: 1,\n    query: \"\",\n    author: null,\n    filter: \"*\"\n};\nconst newsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"news\",\n    initialState,\n    reducers: {\n        setSelectedArticle (state, action) {\n            state.selectedArticle = action.payload;\n        },\n        setFilter (state, action) {\n            state.filter = action.payload;\n        },\n        setResetStore (state, action) {\n            state.articles = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsRequest, (state, action)=>{\n            state.loading = true;\n            state.error = null;\n            state.page = action.payload.page;\n            state.query = action.payload.query;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsSuccess, (state, action)=>{\n            state.articles = action.payload.articles || [];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreData, (state, action)=>{\n            state.page = action.payload.page;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataSuccess, (state, action)=>{\n            state.articles = [\n                ...state.articles,\n                ...action.payload.articles\n            ];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        });\n    }\n});\nconst { setSelectedArticle, setFilter, setResetStore } = newsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsSlice.reducer);\nconst selectNews = (state)=>state.news.articles;\nconst selectPage = (state)=>state.news.page;\nconst selectDetailedNews = (state)=>state.news.selectedArticle;\nconst selectFilter = (state)=>state.news.filter;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL25ld3NTbGljZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQVUvQjtBQWMvQixNQUFNTyxlQUEwQjtJQUM5QkMsVUFBVSxFQUFFO0lBQ1pDLEtBQUs7SUFDTEMsaUJBQWlCO0lBQ2pCQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsUUFBUTtBQUNWO0FBRUEsTUFBTUMsWUFBWWpCLDZEQUFXQSxDQUFDO0lBQzVCa0IsTUFBTTtJQUNOWDtJQUNBWSxVQUFVO1FBQ1JDLG9CQUFtQkMsS0FBSyxFQUFFQyxNQUFtQztZQUMzREQsTUFBTVgsZUFBZSxHQUFHWSxPQUFPQyxPQUFPO1FBQ3hDO1FBQ0FDLFdBQVVILEtBQUssRUFBRUMsTUFBNkI7WUFDNUNELE1BQU1MLE1BQU0sR0FBR00sT0FBT0MsT0FBTztRQUMvQjtRQUNBRSxlQUFjSixLQUFLLEVBQUVDLE1BQXFDO1lBQ3hERCxNQUFNYixRQUFRLEdBQUdjLE9BQU9DLE9BQU87UUFDakM7SUFDRjtJQUNBRyxlQUFlLENBQUNDO1FBQ2RBLFFBQ0dDLE9BQU8sQ0FDTjNCLGlFQUFnQkEsRUFDaEIsQ0FBQ29CLE9BQU9DO1lBQ05ELE1BQU1WLE9BQU8sR0FBRztZQUNoQlUsTUFBTVQsS0FBSyxHQUFHO1lBQ2RTLE1BQU1SLElBQUksR0FBR1MsT0FBT0MsT0FBTyxDQUFDVixJQUFJO1lBQ2hDUSxNQUFNUCxLQUFLLEdBQUdRLE9BQU9DLE9BQU8sQ0FBQ1QsS0FBSztRQUNwQyxHQUVEYyxPQUFPLENBQ04xQixpRUFBZ0JBLEVBQ2hCLENBQUNtQixPQUFPQztZQUNORCxNQUFNYixRQUFRLEdBQUdjLE9BQU9DLE9BQU8sQ0FBQ2YsUUFBUSxJQUFJLEVBQUU7WUFDOUNhLE1BQU1WLE9BQU8sR0FBRztZQUNoQlUsTUFBTVQsS0FBSyxHQUFHO1FBQ2hCLEdBRURnQixPQUFPLENBQ056QixpRUFBZ0JBLEVBQ2hCLENBQUNrQixPQUFPQztZQUNORCxNQUFNVCxLQUFLLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ1gsS0FBSztZQUNsQ1MsTUFBTVYsT0FBTyxHQUFHO1FBQ2xCLEdBRURpQixPQUFPLENBQ054Qiw4REFBYUEsRUFDYixDQUFDaUIsT0FBT0M7WUFDTkQsTUFBTVIsSUFBSSxHQUFHUyxPQUFPQyxPQUFPLENBQUNWLElBQUk7UUFDbEMsR0FFRGUsT0FBTyxDQUNOdEIscUVBQW9CQSxFQUNwQixDQUFDZSxPQUFPQztZQUNORCxNQUFNYixRQUFRLEdBQUc7bUJBQUlhLE1BQU1iLFFBQVE7bUJBQUtjLE9BQU9DLE9BQU8sQ0FBQ2YsUUFBUTthQUFDO1lBQ2hFYSxNQUFNVixPQUFPLEdBQUc7WUFDaEJVLE1BQU1ULEtBQUssR0FBRztRQUNoQixHQUVEZ0IsT0FBTyxDQUNOdkIscUVBQW9CQSxFQUNwQixDQUFDZ0IsT0FBT0M7WUFDTkQsTUFBTVQsS0FBSyxHQUFHVSxPQUFPQyxPQUFPLENBQUNYLEtBQUs7WUFDbENTLE1BQU1WLE9BQU8sR0FBRztRQUNsQjtJQUVOO0FBQ0Y7QUFFTyxNQUFNLEVBQUVTLGtCQUFrQixFQUFFSSxTQUFTLEVBQUVDLGFBQWEsRUFBRSxHQUMzRFIsVUFBVVksT0FBTyxDQUFDO0FBQ3BCLCtEQUFlWixVQUFVYSxPQUFPLEVBQUM7QUFFMUIsTUFBTUMsYUFBYSxDQUFDVixRQUFxQkEsTUFBTVcsSUFBSSxDQUFDeEIsUUFBUSxDQUFDO0FBQzdELE1BQU15QixhQUFhLENBQUNaLFFBQXFCQSxNQUFNVyxJQUFJLENBQUNuQixJQUFJLENBQUM7QUFDekQsTUFBTXFCLHFCQUFxQixDQUFDYixRQUNqQ0EsTUFBTVcsSUFBSSxDQUFDdEIsZUFBZSxDQUFDO0FBQ3RCLE1BQU15QixlQUFlLENBQUNkLFFBQXFCQSxNQUFNVyxJQUFJLENBQUNoQixNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NsaWNlcy9uZXdzU2xpY2VzLnRzeD80NzJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7IE5ld3NJdGVtVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy9kYXRhVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICBmZXRjaE5ld3NSZXF1ZXN0LFxyXG4gIGZldGNoTmV3c1N1Y2Nlc3MsXHJcbiAgZmV0Y2hOZXdzRmFpbHVyZSxcclxuICBmZXRjaE1vcmVEYXRhLFxyXG4gIGZldGNoTW9yZURhdGFGYWlsdXJlLFxyXG4gIGZldGNoTW9yZURhdGFTdWNjZXNzLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL25ld3NBY3Rpb25cIjtcclxuXHJcbmludGVyZmFjZSBOZXdzU3RhdGUge1xyXG4gIGFydGljbGVzOiBOZXdzSXRlbVR5cGVbXTsgLy8gU3RvcmUgcHJlc3MgYXJ0aWNsZXNcclxuICB1cmw6IHN0cmluZyB8IG51bGw7IC8vIHVybCBvZiBhcnRpY2xlXHJcbiAgc2VsZWN0ZWRBcnRpY2xlOiBOZXdzSXRlbVR5cGUgfCBudWxsOyAvLyBTdG9yZSB0aGUgYXJ0aWNsZSB3ZSB3YW50IHRvIGRpc3BsYXkgZGV0YWlscyBhYm91dFxyXG4gIGxvYWRpbmc6IGJvb2xlYW47IC8vIERhdGEgbG9hZGluZyBvciBub3RcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDsgLy8gU3RvcmUgZXJyb3JzXHJcbiAgcGFnZTogbnVtYmVyOyAvLyBhY3R1YWwgcGFnZVxyXG4gIHF1ZXJ5OiBzdHJpbmc7IC8vIHJlcXVlc3QgZ2l2ZW4gYnkgdXNlclxyXG4gIGF1dGhvcjogc3RyaW5nIHwgbnVsbDtcclxuICBmaWx0ZXI6IHN0cmluZyB8IG51bGw7IC8vIFBhcmFtZXRlciB0byBmaWx0ZXIgcmVxdWVzdHNcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBOZXdzU3RhdGUgPSB7XHJcbiAgYXJ0aWNsZXM6IFtdLFxyXG4gIHVybDogbnVsbCxcclxuICBzZWxlY3RlZEFydGljbGU6IG51bGwsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgcGFnZTogMSxcclxuICBxdWVyeTogXCJcIixcclxuICBhdXRob3I6IG51bGwsXHJcbiAgZmlsdGVyOiBcIipcIixcclxufTtcclxuXHJcbmNvbnN0IG5ld3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIm5ld3NcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFNlbGVjdGVkQXJ0aWNsZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPE5ld3NJdGVtVHlwZT4pIHtcclxuICAgICAgc3RhdGUuc2VsZWN0ZWRBcnRpY2xlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0RmlsdGVyKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICBzdGF0ZS5maWx0ZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRSZXNldFN0b3JlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248TmV3c0l0ZW1UeXBlW10+KSB7XHJcbiAgICAgIHN0YXRlLmFydGljbGVzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hOZXdzUmVxdWVzdCxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHBhZ2U6IG51bWJlcjsgcXVlcnk6IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQucGFnZTtcclxuICAgICAgICAgIHN0YXRlLnF1ZXJ5ID0gYWN0aW9uLnBheWxvYWQucXVlcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTmV3c1N1Y2Nlc3MsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBhcnRpY2xlczogTmV3c0l0ZW1UeXBlW10gfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmFydGljbGVzID0gYWN0aW9uLnBheWxvYWQuYXJ0aWNsZXMgfHwgW107XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTmV3c0ZhaWx1cmUsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBlcnJvcjogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yO1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuYWRkQ2FzZShcclxuICAgICAgICBmZXRjaE1vcmVEYXRhLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcGFnZTogbnVtYmVyIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQucGFnZTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBhcnRpY2xlczogTmV3c0l0ZW1UeXBlW10gfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmFydGljbGVzID0gWy4uLnN0YXRlLmFydGljbGVzLCAuLi5hY3Rpb24ucGF5bG9hZC5hcnRpY2xlc107XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTW9yZURhdGFGYWlsdXJlLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgZXJyb3I6IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvcjtcclxuICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRTZWxlY3RlZEFydGljbGUsIHNldEZpbHRlciwgc2V0UmVzZXRTdG9yZSB9ID1cclxuICBuZXdzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgbmV3c1NsaWNlLnJlZHVjZXI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TmV3cyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzLmFydGljbGVzO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzLnBhZ2U7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3REZXRhaWxlZE5ld3MgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT5cclxuICBzdGF0ZS5uZXdzLnNlbGVjdGVkQXJ0aWNsZTtcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZpbHRlciA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzLmZpbHRlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hOZXdzUmVxdWVzdCIsImZldGNoTmV3c1N1Y2Nlc3MiLCJmZXRjaE5ld3NGYWlsdXJlIiwiZmV0Y2hNb3JlRGF0YSIsImZldGNoTW9yZURhdGFGYWlsdXJlIiwiZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MiLCJpbml0aWFsU3RhdGUiLCJhcnRpY2xlcyIsInVybCIsInNlbGVjdGVkQXJ0aWNsZSIsImxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJxdWVyeSIsImF1dGhvciIsImZpbHRlciIsIm5ld3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFNlbGVjdGVkQXJ0aWNsZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEZpbHRlciIsInNldFJlc2V0U3RvcmUiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJhY3Rpb25zIiwicmVkdWNlciIsInNlbGVjdE5ld3MiLCJuZXdzIiwic2VsZWN0UGFnZSIsInNlbGVjdERldGFpbGVkTmV3cyIsInNlbGVjdEZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/slices/newsSlices.tsx\n"));

/***/ })

});