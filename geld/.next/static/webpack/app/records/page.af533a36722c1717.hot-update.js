"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/records/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d877677d15d6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZGM2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImQ4Nzc2NzdkMTVkNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/records/right_records/records_main.js":
/*!**************************************************************!*\
  !*** ./src/components/records/right_records/records_main.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordsMain; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_records_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/records/page */ \"(app-pages-browser)/./src/app/records/page.js\");\n/* harmony import */ var _components_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/provider/AuthProvider */ \"(app-pages-browser)/./src/components/provider/AuthProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gr */ \"(app-pages-browser)/./node_modules/react-icons/gr/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction RecordsMain() {\n    _s();\n    const { selectedType, search, selectedCategory, amountPrice } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_records_page__WEBPACK_IMPORTED_MODULE_1__.Context_);\n    const { recordData, isReadyRecord } = (0,_components_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full h-fit flex flex-col gap-[12px]\",\n        children: isReadyRecord && recordData.filter((record)=>{\n            return selectedCategory.toLowerCase() === \"\" ? record : record.selectedCategory.toLowerCase.includes(search);\n        }).filter((record)=>{\n            if (selectedType === \"All\") return true;\n            if (selectedType === \"Expense\") return record.isExpense === true;\n            if (selectedType === \"Income\") return record.isExpense === false;\n        }).filter((record)=>{\n            return selectedCategory === \"\" ? record : record.selectedCategory === selectedCategory;\n        }).filter((record)=>{\n            return Number(amountPrice) < Number(record.amount);\n        }).map((record, index)=>{\n            const Icon = react_icons_gr__WEBPACK_IMPORTED_MODULE_4__[record.selectedIcon];\n            const Color = record.IconColor;\n            const number = new Intl.NumberFormat(\"de-DE\", {\n                style: \"currency\",\n                currency: \"EUR\"\n            }).format(record.amount);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[48px] bg-white rounded-[12px] flex justify-between  flex-row items-center px-[24px] bg-white-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-fit justify-between items-center gap-[8px] flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                                lineNumber: 45,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"w-10 h-10 rounded-full flex items-center justify-center\",\n                                style: {\n                                    backgroundColor: Color\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                    color: \"#fff\",\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                                lineNumber: 46,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col h-full w-fit justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: record.selectedCategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: record.date\n                                    }, void 0, false, {\n                                        fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                                lineNumber: 52,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: record.isExpense ? \"#23E01F\" : \"#F54949\"\n                        },\n                        children: number\n                    }, void 0, false, {\n                        fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n                lineNumber: 40,\n                columnNumber: 15\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/records/right_records/records_main.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(RecordsMain, \"8GE6/0sL/jah0bQoxQXZWanO9b8=\", false, function() {\n    return [\n        _components_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = RecordsMain;\nvar _c;\n$RefreshReg$(_c, \"RecordsMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3JlY29yZHMvcmlnaHRfcmVjb3Jkcy9yZWNvcmRzX21haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2U7QUFDMUI7QUFDSztBQUV6QixTQUFTSTs7SUFDdEIsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUVDLFdBQVcsRUFBRSxHQUMzRE4saURBQVVBLENBQUNGLHVEQUFRQTtJQUNyQixNQUFNLEVBQUVTLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQUdULDBFQUFPQTtJQUM3QyxxQkFDRSw4REFBQ1U7UUFBS0MsV0FBVTtrQkFDYkYsaUJBQ0NELFdBQ0dJLE1BQU0sQ0FBQyxDQUFDQztZQUNQLE9BQU9QLGlCQUFpQlEsV0FBVyxPQUFPLEtBQ3RDRCxTQUNBQSxPQUFPUCxnQkFBZ0IsQ0FBQ1EsV0FBVyxDQUFDQyxRQUFRLENBQUNWO1FBQ25ELEdBQ0NPLE1BQU0sQ0FBQyxDQUFDQztZQUNQLElBQUlULGlCQUFpQixPQUFPLE9BQU87WUFDbkMsSUFBSUEsaUJBQWlCLFdBQVcsT0FBT1MsT0FBT0csU0FBUyxLQUFLO1lBQzVELElBQUlaLGlCQUFpQixVQUFVLE9BQU9TLE9BQU9HLFNBQVMsS0FBSztRQUM3RCxHQUNDSixNQUFNLENBQUMsQ0FBQ0M7WUFDUCxPQUFPUCxxQkFBcUIsS0FDeEJPLFNBQ0FBLE9BQU9QLGdCQUFnQixLQUFLQTtRQUNsQyxHQUNDTSxNQUFNLENBQUMsQ0FBQ0M7WUFDUCxPQUFPSSxPQUFPVixlQUFlVSxPQUFPSixPQUFPSyxNQUFNO1FBQ25ELEdBQ0NDLEdBQUcsQ0FBQyxDQUFDTixRQUFRTztZQUNaLE1BQU1DLE9BQU9uQiwyQ0FBSyxDQUFDVyxPQUFPUyxZQUFZLENBQUM7WUFDdkMsTUFBTUMsUUFBUVYsT0FBT1csU0FBUztZQUM5QixNQUFNQyxTQUFTLElBQUlDLEtBQUtDLFlBQVksQ0FBQyxTQUFTO2dCQUM1Q0MsT0FBTztnQkFDUEMsVUFBVTtZQUNaLEdBQUdDLE1BQU0sQ0FBQ2pCLE9BQU9LLE1BQU07WUFDdkIscUJBQ0UsOERBQUNhO2dCQUVDcEIsV0FBVTs7a0NBRVYsOERBQUNxQjt3QkFBS3JCLFdBQVU7OzBDQUNkLDhEQUFDc0I7Z0NBQU1DLE1BQUs7Ozs7OzswQ0FDWiw4REFBQ0Y7Z0NBQ0NyQixXQUFVO2dDQUNWaUIsT0FBTztvQ0FBRU8saUJBQWlCWjtnQ0FBTTswQ0FFaEMsNEVBQUNGO29DQUFLZSxPQUFPO29DQUFRQyxNQUFNOzs7Ozs7Ozs7OzswQ0FFN0IsOERBQUNOO2dDQUFJcEIsV0FBVTs7a0RBQ2IsOERBQUMyQjtrREFBT3pCLE9BQU9QLGdCQUFnQjs7Ozs7O2tEQUMvQiw4REFBQ2dDO2tEQUFPekIsT0FBTzBCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHdkIsOERBQUNDO3dCQUFFWixPQUFPOzRCQUFFUSxPQUFPdkIsT0FBT0csU0FBUyxHQUFHLFlBQVk7d0JBQVU7a0NBQ3pEUzs7Ozs7OztlQWpCRUw7Ozs7O1FBcUJYOzs7Ozs7QUFHVjtHQTNEd0JqQjs7UUFHZ0JILHNFQUFPQTs7O0tBSHZCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yZWNvcmRzL3JpZ2h0X3JlY29yZHMvcmVjb3Jkc19tYWluLmpzPzhhNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dF8gfSBmcm9tIFwiQC9hcHAvcmVjb3Jkcy9wYWdlXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvY29tcG9uZW50cy9wcm92aWRlci9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGljb25zIGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRzTWFpbigpIHtcbiAgY29uc3QgeyBzZWxlY3RlZFR5cGUsIHNlYXJjaCwgc2VsZWN0ZWRDYXRlZ29yeSwgYW1vdW50UHJpY2UgfSA9XG4gICAgdXNlQ29udGV4dChDb250ZXh0Xyk7XG4gIGNvbnN0IHsgcmVjb3JkRGF0YSwgaXNSZWFkeVJlY29yZCB9ID0gdXNlQXV0aCgpO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBoLWZpdCBmbGV4IGZsZXgtY29sIGdhcC1bMTJweF1cIj5cbiAgICAgIHtpc1JlYWR5UmVjb3JkICYmXG4gICAgICAgIHJlY29yZERhdGFcbiAgICAgICAgICAuZmlsdGVyKChyZWNvcmQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiXCJcbiAgICAgICAgICAgICAgPyByZWNvcmRcbiAgICAgICAgICAgICAgOiByZWNvcmQuc2VsZWN0ZWRDYXRlZ29yeS50b0xvd2VyQ2FzZS5pbmNsdWRlcyhzZWFyY2gpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcigocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSBcIkFsbFwiKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFR5cGUgPT09IFwiRXhwZW5zZVwiKSByZXR1cm4gcmVjb3JkLmlzRXhwZW5zZSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFR5cGUgPT09IFwiSW5jb21lXCIpIHJldHVybiByZWNvcmQuaXNFeHBlbnNlID09PSBmYWxzZTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoKHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQ2F0ZWdvcnkgPT09IFwiXCJcbiAgICAgICAgICAgICAgPyByZWNvcmRcbiAgICAgICAgICAgICAgOiByZWNvcmQuc2VsZWN0ZWRDYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoKHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihhbW91bnRQcmljZSkgPCBOdW1iZXIocmVjb3JkLmFtb3VudCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKChyZWNvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBJY29uID0gaWNvbnNbcmVjb3JkLnNlbGVjdGVkSWNvbl07XG4gICAgICAgICAgICBjb25zdCBDb2xvciA9IHJlY29yZC5JY29uQ29sb3I7XG4gICAgICAgICAgICBjb25zdCBudW1iZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJkZS1ERVwiLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiBcIkVVUlwiLFxuICAgICAgICAgICAgfSkuZm9ybWF0KHJlY29yZC5hbW91bnQpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzQ4cHhdIGJnLXdoaXRlIHJvdW5kZWQtWzEycHhdIGZsZXgganVzdGlmeS1iZXR3ZWVuICBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcHgtWzI0cHhdIGJnLXdoaXRlLTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLWZpdCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC1bOHB4XSBmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNvbG9yPXtcIiNmZmZcIn0gc2l6ZT17MjB9PjwvSWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWZ1bGwgdy1maXQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57cmVjb3JkLnNlbGVjdGVkQ2F0ZWdvcnl9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntyZWNvcmQuZGF0ZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiByZWNvcmQuaXNFeHBlbnNlID8gXCIjMjNFMDFGXCIgOiBcIiNGNTQ5NDlcIiB9fT5cbiAgICAgICAgICAgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRleHRfIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJpY29ucyIsIlJlY29yZHNNYWluIiwic2VsZWN0ZWRUeXBlIiwic2VhcmNoIiwic2VsZWN0ZWRDYXRlZ29yeSIsImFtb3VudFByaWNlIiwicmVjb3JkRGF0YSIsImlzUmVhZHlSZWNvcmQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZmlsdGVyIiwicmVjb3JkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImlzRXhwZW5zZSIsIk51bWJlciIsImFtb3VudCIsIm1hcCIsImluZGV4IiwiSWNvbiIsInNlbGVjdGVkSWNvbiIsIkNvbG9yIiwiSWNvbkNvbG9yIiwibnVtYmVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJkaXYiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJzaXplIiwibGFiZWwiLCJkYXRlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/records/right_records/records_main.js\n"));

/***/ })

});