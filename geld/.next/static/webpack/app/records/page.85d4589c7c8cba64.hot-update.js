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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"7c85146dfee4\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZGM2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjdjODUxNDZkZmVlNFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/provider/AuthProvider.js":
/*!*************************************************!*\
  !*** ./src/components/provider/AuthProvider.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _common_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/axios */ \"(app-pages-browser)/./src/common/axios/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [isReady, setIsReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isReadyCategory, setIsReadyCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isReadyRecord, setIsReadyRecord] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [categoryData, setCategoryData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [recordData, setRecordData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [refresh, useRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(7);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const signIn = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _common_axios__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/sign-in\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            console.log(token);\n            setIsLoggedIn(true);\n            useRefresh(refresh + 1);\n            router.push(\"/dashboard\");\n        // showOn();\n        } catch (error) {\n            // toast.error(error.response.data.message);\n            console.log(error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const signUp = async (name, email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _common_axios__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/sign-up\", {\n                name,\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            useRefresh(refresh + 1);\n            router.push(\"/dashboard\");\n        // showOn();\n        } catch (error) {\n            // toast.error(error.response.data.message);\n            console.log(error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const signOut = ()=>{\n        localStorage.removeItem(\"token\");\n        setIsLoggedIn(false);\n        router.push(\"/\");\n    };\n    const addCategory = async (categoryName, IconColor, selectedIcon)=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            const { data } = await _common_axios__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/category\", {\n                categoryName,\n                IconColor,\n                selectedIcon\n            }, {\n                headers: {\n                    Authorization: token\n                }\n            });\n            useRefresh(refresh + 1);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const addRecord_ = async (amount, date, isExpense, selectedCategory, time, IconColor, selectedIcon)=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            const { data } = await _common_axios__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/records\", {\n                amount,\n                date,\n                isExpense,\n                selectedCategory,\n                time,\n                IconColor,\n                selectedIcon\n            }, {\n                headers: {\n                    Authorization: token\n                }\n            });\n            useRefresh(refresh + 1);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const showCategory = async ()=>{\n        setIsReadyCategory(false);\n        try {\n            const token = localStorage.getItem(\"token\");\n            const { data } = await _common_axios__WEBPACK_IMPORTED_MODULE_1__.api.get(\"/category\", {\n                headers: {\n                    Authorization: token\n                }\n            });\n            const { userCategory } = data;\n            setCategoryData(userCategory.reverse());\n            setIsReadyCategory(true);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const showRecords = async ()=>{\n        setIsReadyRecord(false);\n        try {\n            const token = localStorage.getItem(\"token\");\n            const { data } = await _common_axios__WEBPACK_IMPORTED_MODULE_1__.api.get(\"/records\", {\n                headers: {\n                    Authorization: token\n                },\n                params: {\n                    days: days\n                }\n            });\n            const { records } = data;\n            console.log(records);\n            setRecordData(records.reverse());\n            setIsReadyRecord(true);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const addDays = ()=>{\n        if (days == 7) {\n            setDays(14);\n        }\n        if (days == 14) {\n            setDays(30);\n        }\n        if (days == 30) {\n            setDays(60);\n        }\n        if (days == 60) {\n            setDays(7);\n        }\n        showRecords();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setIsReady(false);\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n        setIsReady(true);\n    // showOn();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        showCategory();\n        showRecords();\n    }, [\n        refresh\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn,\n            signUp,\n            signOut,\n            showRecords,\n            addCategory,\n            addRecord_,\n            addDays,\n            days,\n            recordData,\n            isReadyRecord,\n            isReadyCategory,\n            categoryData,\n            isLoggedIn,\n            isLoading\n        },\n        children: isReady && children\n    }, void 0, false, {\n        fileName: \"/Users/23LP2903/Desktop/geld_/geld/src/components/provider/AuthProvider.js\",\n        lineNumber: 211,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"ZdWD6LqERU4V56zkxI8Ctb6Mbf8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL0F1dGhQcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXFDO0FBQ087QUFDMkI7QUFFdkUsTUFBTU0sNEJBQWNKLG9EQUFhQTtBQUUxQixNQUFNSyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTSxpQkFBaUJDLG1CQUFtQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQTtJQUNoRCxNQUFNLENBQUNnQixZQUFZQyxjQUFjLEdBQUdqQiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDb0IsTUFBTUMsUUFBUSxHQUFHckIsK0NBQVFBLENBQUM7SUFFakMsTUFBTXNCLFNBQVMxQiwwREFBU0E7SUFFeEIsTUFBTTJCLFNBQVMsT0FBT0MsT0FBT0M7UUFDM0JaLGFBQWE7UUFFYixJQUFJO1lBQ0YsTUFBTSxFQUFFYSxJQUFJLEVBQUUsR0FBRyxNQUFNL0IsOENBQUdBLENBQUNnQyxJQUFJLENBQUMsWUFBWTtnQkFDMUNIO2dCQUNBQztZQUNGO1lBRUEsTUFBTSxFQUFFRyxLQUFLLEVBQUUsR0FBR0Y7WUFFbEJHLGFBQWFDLE9BQU8sQ0FBQyxTQUFTRjtZQUU5QkcsUUFBUUMsR0FBRyxDQUFDSjtZQUVaakIsY0FBYztZQUVkUSxXQUFXRCxVQUFVO1lBRXJCSSxPQUFP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T0FBTztZQUM3Qi9DLGlCQUFpQjtRQUNuQixFQUFFLE9BQU9xQyxLQUFLO1lBQ1pmLFFBQVFDLEdBQUcsQ0FBQ2M7UUFDZDtJQUNGO0lBQ0EsTUFBTWMsVUFBVTtRQUNkLElBQUl4QyxRQUFRLEdBQUc7WUFDYkMsUUFBUTtRQUNWO1FBQ0EsSUFBSUQsUUFBUSxJQUFJO1lBQ2RDLFFBQVE7UUFDVjtRQUNBLElBQUlELFFBQVEsSUFBSTtZQUNkQyxRQUFRO1FBQ1Y7UUFDQSxJQUFJRCxRQUFRLElBQUk7WUFDZEMsUUFBUTtRQUNWO1FBQ0FvQztJQUNGO0lBRUExRCxnREFBU0EsQ0FBQztRQUNSTSxXQUFXO1FBRVgsTUFBTXVCLFFBQVFDLGFBQWFjLE9BQU8sQ0FBQztRQUVuQyxJQUFJZixPQUFPO1lBQ1RqQixjQUFjO1FBQ2hCO1FBRUFOLFdBQVc7SUFFWCxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBQ0xOLGdEQUFTQSxDQUFDO1FBQ1JzRDtRQUNBSTtJQUNGLEdBQUc7UUFBQ3ZDO0tBQVE7SUFDWixxQkFDRSw4REFBQ2pCLFlBQVk0RCxRQUFRO1FBQ25CQyxPQUFPO1lBQ0x2QztZQUNBWTtZQUNBRTtZQUNBb0I7WUFDQWxCO1lBQ0FRO1lBQ0FhO1lBQ0F4QztZQUNBSjtZQUNBUjtZQUNBRjtZQUNBUTtZQUNBSjtZQUNBRTtRQUNGO2tCQUVDUixXQUFXRDs7Ozs7O0FBR2xCLEVBQUU7R0EvTldEOztRQVdJTixzREFBU0E7OztLQVhiTTtBQWlPTixNQUFNNkQsVUFBVTs7SUFBTWpFLE9BQUFBLGlEQUFVQSxDQUFDRztBQUFXLEVBQUU7SUFBeEM4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm92aWRlci9BdXRoUHJvdmlkZXIuanM/OTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIkAvY29tbW9uL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNSZWFkeSwgc2V0SXNSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1JlYWR5Q2F0ZWdvcnksIHNldElzUmVhZHlDYXRlZ29yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1JlYWR5UmVjb3JkLCBzZXRJc1JlYWR5UmVjb3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2F0ZWdvcnlEYXRhLCBzZXRDYXRlZ29yeURhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3JlY29yZERhdGEsIHNldFJlY29yZERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3JlZnJlc2gsIHVzZVJlZnJlc2hdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKDcpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNpZ25JbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcIi9zaWduLWluXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG5cbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG5cbiAgICAgIHVzZVJlZnJlc2gocmVmcmVzaCArIDEpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgICAvLyBzaG93T24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKG5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiL3NpZ24tdXBcIiwge1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gZGF0YTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XG5cbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG5cbiAgICAgIHVzZVJlZnJlc2gocmVmcmVzaCArIDEpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgICAvLyBzaG93T24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcblxuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuICBjb25zdCBhZGRDYXRlZ29yeSA9IGFzeW5jIChjYXRlZ29yeU5hbWUsIEljb25Db2xvciwgc2VsZWN0ZWRJY29uKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXG4gICAgICAgIFwiL2NhdGVnb3J5XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjYXRlZ29yeU5hbWUsXG4gICAgICAgICAgSWNvbkNvbG9yLFxuICAgICAgICAgIHNlbGVjdGVkSWNvbixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1c2VSZWZyZXNoKHJlZnJlc2ggKyAxKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRSZWNvcmRfID0gYXN5bmMgKFxuICAgIGFtb3VudCxcbiAgICBkYXRlLFxuICAgIGlzRXhwZW5zZSxcbiAgICBzZWxlY3RlZENhdGVnb3J5LFxuICAgIHRpbWUsXG4gICAgSWNvbkNvbG9yLFxuICAgIHNlbGVjdGVkSWNvblxuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcbiAgICAgICAgXCIvcmVjb3Jkc1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYW1vdW50LFxuICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgaXNFeHBlbnNlLFxuICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnksXG4gICAgICAgICAgdGltZSxcbiAgICAgICAgICBJY29uQ29sb3IsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHVzZVJlZnJlc2gocmVmcmVzaCArIDEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNob3dDYXRlZ29yeSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc1JlYWR5Q2F0ZWdvcnkoZmFsc2UpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoXCIvY2F0ZWdvcnlcIiwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgdXNlckNhdGVnb3J5IH0gPSBkYXRhO1xuXG4gICAgICBzZXRDYXRlZ29yeURhdGEodXNlckNhdGVnb3J5LnJldmVyc2UoKSk7XG4gICAgICBzZXRJc1JlYWR5Q2F0ZWdvcnkodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2hvd1JlY29yZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNSZWFkeVJlY29yZChmYWxzZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcIi9yZWNvcmRzXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBkYXlzOiBkYXlzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCB7IHJlY29yZHMgfSA9IGRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZWNvcmRzKTtcblxuICAgICAgc2V0UmVjb3JkRGF0YShyZWNvcmRzLnJldmVyc2UoKSk7XG4gICAgICBzZXRJc1JlYWR5UmVjb3JkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZERheXMgPSAoKSA9PiB7XG4gICAgaWYgKGRheXMgPT0gNykge1xuICAgICAgc2V0RGF5cygxNCk7XG4gICAgfVxuICAgIGlmIChkYXlzID09IDE0KSB7XG4gICAgICBzZXREYXlzKDMwKTtcbiAgICB9XG4gICAgaWYgKGRheXMgPT0gMzApIHtcbiAgICAgIHNldERheXMoNjApO1xuICAgIH1cbiAgICBpZiAoZGF5cyA9PSA2MCkge1xuICAgICAgc2V0RGF5cyg3KTtcbiAgICB9XG4gICAgc2hvd1JlY29yZHMoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzUmVhZHkoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgIH1cblxuICAgIHNldElzUmVhZHkodHJ1ZSk7XG5cbiAgICAvLyBzaG93T24oKTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNob3dDYXRlZ29yeSgpO1xuICAgIHNob3dSZWNvcmRzKCk7XG4gIH0sIFtyZWZyZXNoXSk7XG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzaWduSW4sXG4gICAgICAgIHNpZ25VcCxcbiAgICAgICAgc2lnbk91dCxcbiAgICAgICAgc2hvd1JlY29yZHMsXG4gICAgICAgIGFkZENhdGVnb3J5LFxuICAgICAgICBhZGRSZWNvcmRfLFxuICAgICAgICBhZGREYXlzLFxuICAgICAgICBkYXlzLFxuICAgICAgICByZWNvcmREYXRhLFxuICAgICAgICBpc1JlYWR5UmVjb3JkLFxuICAgICAgICBpc1JlYWR5Q2F0ZWdvcnksXG4gICAgICAgIGNhdGVnb3J5RGF0YSxcbiAgICAgICAgaXNMb2dnZWRJbixcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNSZWFkeSAmJiBjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJhcGkiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwiaXNSZWFkeUNhdGVnb3J5Iiwic2V0SXNSZWFkeUNhdGVnb3J5IiwiaXNSZWFkeVJlY29yZCIsInNldElzUmVhZHlSZWNvcmQiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNhdGVnb3J5RGF0YSIsInNldENhdGVnb3J5RGF0YSIsInJlY29yZERhdGEiLCJzZXRSZWNvcmREYXRhIiwicmVmcmVzaCIsInVzZVJlZnJlc2giLCJkYXlzIiwic2V0RGF5cyIsInJvdXRlciIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXRhIiwicG9zdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZXJyb3IiLCJzaWduVXAiLCJuYW1lIiwic2lnbk91dCIsInJlbW92ZUl0ZW0iLCJhZGRDYXRlZ29yeSIsImNhdGVnb3J5TmFtZSIsIkljb25Db2xvciIsInNlbGVjdGVkSWNvbiIsImdldEl0ZW0iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVyciIsImFkZFJlY29yZF8iLCJhbW91bnQiLCJkYXRlIiwiaXNFeHBlbnNlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInRpbWUiLCJzaG93Q2F0ZWdvcnkiLCJnZXQiLCJ1c2VyQ2F0ZWdvcnkiLCJyZXZlcnNlIiwic2hvd1JlY29yZHMiLCJwYXJhbXMiLCJyZWNvcmRzIiwiYWRkRGF5cyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/provider/AuthProvider.js\n"));

/***/ })

});