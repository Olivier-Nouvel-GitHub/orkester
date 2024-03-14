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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectDetailedNews: function() { return /* binding */ selectDetailedNews; },\n/* harmony export */   selectNews: function() { return /* binding */ selectNews; },\n/* harmony export */   selectPage: function() { return /* binding */ selectPage; },\n/* harmony export */   setSelectedArticle: function() { return /* binding */ setSelectedArticle; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _actions_newsAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/newsAction */ \"./src/store/actions/newsAction.tsx\");\n\n\nconst initialState = {\n    articles: [],\n    selectedArticle: null,\n    loading: false,\n    error: null,\n    page: 1,\n    query: \"\"\n};\nconst newsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"news\",\n    initialState,\n    reducers: {\n        setSelectedArticle (state, action) {\n            state.selectedArticle = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsRequest, (state, action)=>{\n            state.loading = true;\n            state.error = null;\n            state.page = action.payload.page;\n            state.query = action.payload.query;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsSuccess, (state, action)=>{\n            state.articles = [\n                ...state.articles,\n                ...action.payload.articles\n            ];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchNewsFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreData, (state, action)=>{\n            state.page = action.payload.page;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataSuccess, (state, action)=>{\n            state.articles = [\n                ...state.articles,\n                ...action.payload.articles\n            ];\n            state.loading = false;\n            state.error = null;\n        }).addCase(_actions_newsAction__WEBPACK_IMPORTED_MODULE_0__.fetchMoreDataFailure, (state, action)=>{\n            state.error = action.payload.error;\n            state.loading = false;\n        });\n    }\n});\nconst { setSelectedArticle } = newsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsSlice.reducer);\nconst selectNews = (state)=>state.news.articles;\nconst selectPage = (state)=>state.news.page;\nconst selectDetailedNews = (state)=>state.news.selectedArticle;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL25ld3NTbGljZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4RDtBQVUvQjtBQVcvQixNQUFNTyxlQUEwQjtJQUM5QkMsVUFBVSxFQUFFO0lBQ1pDLGlCQUFpQjtJQUNqQkMsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsWUFBWWQsNkRBQVdBLENBQUM7SUFDNUJlLE1BQU07SUFDTlI7SUFDQVMsVUFBVTtRQUNSQyxvQkFBbUJDLEtBQUssRUFBRUMsTUFBbUM7WUFDM0RELE1BQU1ULGVBQWUsR0FBR1UsT0FBT0MsT0FBTztRQUN4QztJQUNGO0lBQ0FDLGVBQWUsQ0FBQ0M7UUFDZEEsUUFDR0MsT0FBTyxDQUNOdEIsaUVBQWdCQSxFQUNoQixDQUFDaUIsT0FBT0M7WUFDTkQsTUFBTVIsT0FBTyxHQUFHO1lBQ2hCUSxNQUFNUCxLQUFLLEdBQUc7WUFDZE8sTUFBTU4sSUFBSSxHQUFHTyxPQUFPQyxPQUFPLENBQUNSLElBQUk7WUFDaENNLE1BQU1MLEtBQUssR0FBR00sT0FBT0MsT0FBTyxDQUFDUCxLQUFLO1FBQ3BDLEdBRURVLE9BQU8sQ0FDTnJCLGlFQUFnQkEsRUFDaEIsQ0FBQ2dCLE9BQU9DO1lBQ05ELE1BQU1WLFFBQVEsR0FBRzttQkFBSVUsTUFBTVYsUUFBUTttQkFBS1csT0FBT0MsT0FBTyxDQUFDWixRQUFRO2FBQUM7WUFDaEVVLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1FBQ2hCLEdBRURZLE9BQU8sQ0FDTnBCLGlFQUFnQkEsRUFDaEIsQ0FBQ2UsT0FBT0M7WUFDTkQsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDbENPLE1BQU1SLE9BQU8sR0FBRztRQUNsQixHQUVEYSxPQUFPLENBQ05uQiw4REFBYUEsRUFDYixDQUFDYyxPQUFPQztZQUNORCxNQUFNTixJQUFJLEdBQUdPLE9BQU9DLE9BQU8sQ0FBQ1IsSUFBSTtRQUNsQyxHQUVEVyxPQUFPLENBQ05qQixxRUFBb0JBLEVBQ3BCLENBQUNZLE9BQU9DO1lBQ05ELE1BQU1WLFFBQVEsR0FBRzttQkFBSVUsTUFBTVYsUUFBUTttQkFBS1csT0FBT0MsT0FBTyxDQUFDWixRQUFRO2FBQUM7WUFDaEVVLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1FBQ2hCLEdBRURZLE9BQU8sQ0FDTmxCLHFFQUFvQkEsRUFDcEIsQ0FBQ2EsT0FBT0M7WUFDTkQsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDbENPLE1BQU1SLE9BQU8sR0FBRztRQUNsQjtJQUVOO0FBQ0Y7QUFFTyxNQUFNLEVBQUVPLGtCQUFrQixFQUFFLEdBQUdILFVBQVVVLE9BQU8sQ0FBQztBQUN4RCwrREFBZVYsVUFBVVcsT0FBTyxFQUFDO0FBRTFCLE1BQU1DLGFBQWEsQ0FBQ1IsUUFBcUJBLE1BQU1TLElBQUksQ0FBQ25CLFFBQVEsQ0FBQztBQUM3RCxNQUFNb0IsYUFBYSxDQUFDVixRQUFxQkEsTUFBTVMsSUFBSSxDQUFDZixJQUFJLENBQUM7QUFDekQsTUFBTWlCLHFCQUFxQixDQUFDWCxRQUNqQ0EsTUFBTVMsSUFBSSxDQUFDbEIsZUFBZSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9zbGljZXMvbmV3c1NsaWNlcy50c3g/NDcyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBOZXdzSXRlbVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGF0YVR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hOZXdzUmVxdWVzdCxcclxuICBmZXRjaE5ld3NTdWNjZXNzLFxyXG4gIGZldGNoTmV3c0ZhaWx1cmUsXHJcbiAgZmV0Y2hNb3JlRGF0YSxcclxuICBmZXRjaE1vcmVEYXRhRmFpbHVyZSxcclxuICBmZXRjaE1vcmVEYXRhU3VjY2VzcyxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9uZXdzQWN0aW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgTmV3c1N0YXRlIHtcclxuICBhcnRpY2xlczogTmV3c0l0ZW1UeXBlW107IC8vIFN0b3JlIHByZXNzIGFydGljbGVzXHJcbiAgc2VsZWN0ZWRBcnRpY2xlOiBOZXdzSXRlbVR5cGUgfCBudWxsOyAvLyBTdG9yZSB0aGUgYXJ0aWNsZSB3ZSB3YW50IHRvIGRpc3BsYXkgZGV0YWlscyBhYm91dFxyXG4gIGxvYWRpbmc6IGJvb2xlYW47IC8vIERhdGEgbG9hZGluZyBvciBub3RcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDsgLy8gU3RvcmUgZXJyb3JzXHJcbiAgcGFnZTogbnVtYmVyOyAvLyBhY3R1YWwgcGFnZVxyXG4gIHF1ZXJ5OiBzdHJpbmc7IC8vIHJlcXVlc3QgZ2l2ZW4gYnkgdXNlclxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IE5ld3NTdGF0ZSA9IHtcclxuICBhcnRpY2xlczogW10sXHJcbiAgc2VsZWN0ZWRBcnRpY2xlOiBudWxsLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHBhZ2U6IDEsXHJcbiAgcXVlcnk6IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCBuZXdzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJuZXdzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZWxlY3RlZEFydGljbGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxOZXdzSXRlbVR5cGU+KSB7XHJcbiAgICAgIHN0YXRlLnNlbGVjdGVkQXJ0aWNsZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTmV3c1JlcXVlc3QsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBwYWdlOiBudW1iZXI7IHF1ZXJ5OiBzdHJpbmcgfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgc3RhdGUucGFnZSA9IGFjdGlvbi5wYXlsb2FkLnBhZ2U7XHJcbiAgICAgICAgICBzdGF0ZS5xdWVyeSA9IGFjdGlvbi5wYXlsb2FkLnF1ZXJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuYWRkQ2FzZShcclxuICAgICAgICBmZXRjaE5ld3NTdWNjZXNzLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgYXJ0aWNsZXM6IE5ld3NJdGVtVHlwZVtdIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5hcnRpY2xlcyA9IFsuLi5zdGF0ZS5hcnRpY2xlcywgLi4uYWN0aW9uLnBheWxvYWQuYXJ0aWNsZXNdO1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuYWRkQ2FzZShcclxuICAgICAgICBmZXRjaE5ld3NGYWlsdXJlLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgZXJyb3I6IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvcjtcclxuICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgZmV0Y2hNb3JlRGF0YSxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHBhZ2U6IG51bWJlciB9PikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUucGFnZSA9IGFjdGlvbi5wYXlsb2FkLnBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIGZldGNoTW9yZURhdGFTdWNjZXNzLFxyXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgYXJ0aWNsZXM6IE5ld3NJdGVtVHlwZVtdIH0+KSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5hcnRpY2xlcyA9IFsuLi5zdGF0ZS5hcnRpY2xlcywgLi4uYWN0aW9uLnBheWxvYWQuYXJ0aWNsZXNdO1xyXG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuYWRkQ2FzZShcclxuICAgICAgICBmZXRjaE1vcmVEYXRhRmFpbHVyZSxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGVycm9yOiBzdHJpbmcgfT4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3I7XHJcbiAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0U2VsZWN0ZWRBcnRpY2xlIH0gPSBuZXdzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgbmV3c1NsaWNlLnJlZHVjZXI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TmV3cyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzLmFydGljbGVzO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzLnBhZ2U7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3REZXRhaWxlZE5ld3MgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT5cclxuICBzdGF0ZS5uZXdzLnNlbGVjdGVkQXJ0aWNsZTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hOZXdzUmVxdWVzdCIsImZldGNoTmV3c1N1Y2Nlc3MiLCJmZXRjaE5ld3NGYWlsdXJlIiwiZmV0Y2hNb3JlRGF0YSIsImZldGNoTW9yZURhdGFGYWlsdXJlIiwiZmV0Y2hNb3JlRGF0YVN1Y2Nlc3MiLCJpbml0aWFsU3RhdGUiLCJhcnRpY2xlcyIsInNlbGVjdGVkQXJ0aWNsZSIsImxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJxdWVyeSIsIm5ld3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFNlbGVjdGVkQXJ0aWNsZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImFjdGlvbnMiLCJyZWR1Y2VyIiwic2VsZWN0TmV3cyIsIm5ld3MiLCJzZWxlY3RQYWdlIiwic2VsZWN0RGV0YWlsZWROZXdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/slices/newsSlices.tsx\n"));

/***/ })

});