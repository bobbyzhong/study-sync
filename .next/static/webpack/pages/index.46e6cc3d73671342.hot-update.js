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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Inputs */ \"./pages/components/Inputs.tsx\");\n/* harmony import */ var _lib_chatgpt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/chatgpt */ \"./pages/lib/chatgpt.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setContent((prevState)=>({\n                ...prevState,\n                [e.target.name]: e.target.value\n            }));\n    };\n    async function getSummary() {\n        const response = await new _lib_chatgpt__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getCompletion(content);\n        setResult(response);\n    // call getCompletion(prompt) from the text state and set the summary state to the result\n    }\n    const resultList = result.split(\"•\");\n    console.log(content);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App w-[30rem] p-6 h-72  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 font-bold \",\n                children: \"StudySync\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b-3 py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-start gap-2 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs__WEBPACK_IMPORTED_MODULE_2__.LargeInputBox, {\n                        label: \"Enter content here\",\n                        name: \"content\",\n                        placeholder: \"Hey! My name is Kamari Johnson and I'm a soccer coach near Long Beach. I've lived in Long Beach for about 5 years now and so I'd say I'm pretty familiar with the area. Some of my favorite things to do is go to the beach, yoga, and try new foods. I love meeting new people and learning about different backgrounds and cultures. As your guide I'd be sure to take your to some of my favorite local restaurants and show you the Long Beach culture\",\n                        type: \"textarea\",\n                        value: content,\n                        statusCompleted: content ? true : false,\n                        handleChange: (e)=>setContent(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"Paste in any text to be summarized!\",\n                        value: text,\n                        onChange: (e)=>setText(e.target.value),\n                        className: \"rounded-sm  outline outline-neutral-300 focus:outline-double p-2 text-xs w-full max-w-md h-22\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn text-xs w-full  rounded-sm bg-neutral-800 p-2 text-neutral-50\",\n                        onClick: getSummary,\n                        children: \"Get Summary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            summary ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summarySection\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl mb-3\",\n                        children: \"Summary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: resultList.map((result)=>result.length != 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: result\n                            }, void 0, false, {\n                                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 50\n                            }, this) : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"y4ytu7GVrsmCzgxp7chYl+jMgZI=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ1E7QUFFaEI7QUFDcEMsU0FBU0csTUFBTTs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFFckMsTUFBTVksZUFBZSxDQUFDQyxJQUFXO1FBQzdCSixXQUFXLENBQUNLLFlBQW9CO2dCQUM1QixHQUFHQSxTQUFTO2dCQUNaLENBQUNELEVBQUVFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSztZQUNuQztJQUNKO0lBRUEsZUFBZUMsYUFBYTtRQUN4QixNQUFNQyxXQUFXLE1BQU0sSUFBSWpCLG9EQUFPQSxHQUFHa0IsYUFBYSxDQUFDWjtRQUNuREcsVUFBVVE7SUFDVix5RkFBeUY7SUFDN0Y7SUFFQSxNQUFNRSxhQUFhWCxPQUFPWSxLQUFLLENBQUM7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ2hCO0lBRVoscUJBQ0ksOERBQUNpQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQWtCOzs7Ozs7MEJBQ2pDLDhEQUFDQztnQkFBR0QsV0FBVTs7Ozs7OzBCQUNkLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUN6Qiw2REFBYUE7d0JBQ1YyQixPQUFNO3dCQUNOWixNQUFLO3dCQUNMYSxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMYixPQUFPVDt3QkFDUHVCLGlCQUFpQnZCLFVBQVUsSUFBSSxHQUFHLEtBQUs7d0JBQ3ZDSSxjQUFjLENBQUNDLElBQVdKLFdBQVdJLEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSzs7Ozs7O2tDQUV2RCw4REFBQ2U7d0JBQ0dILGFBQVk7d0JBQ1paLE9BQU9iO3dCQUNQNkIsVUFBVSxDQUFDcEIsSUFBTVIsUUFBUVEsRUFBRUUsTUFBTSxDQUFDRSxLQUFLO3dCQUN2Q1MsV0FBVTs7Ozs7O2tDQUVkLDhEQUFDUTt3QkFDR1IsV0FBVTt3QkFDVlMsU0FBU2pCO2tDQUNaOzs7Ozs7Ozs7Ozs7WUFLSlosd0JBQ0csOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNVO3dCQUFHVixXQUFVO2tDQUFlOzs7Ozs7a0NBQzdCLDhEQUFDVztrQ0FDSWhCLFdBQVdpQixHQUFHLENBQUMsQ0FBQzVCLFNBQ2JBLE9BQU82QixNQUFNLElBQUksa0JBQUksOERBQUNDOzBDQUFJOUI7Ozs7O3VDQUFlLEVBQUU7Ozs7Ozs7Ozs7O3VCQU92RCxFQUNIOzs7Ozs7O0FBR2I7R0FuRVNQO0tBQUFBO0FBcUVULCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhcmdlSW5wdXRCb3ggfSBmcm9tIFwiLi9jb21wb25lbnRzL0lucHV0c1wiO1xuXG5pbXBvcnQgQ2hhdEdQVCBmcm9tIFwiLi9saWIvY2hhdGdwdFwiO1xuZnVuY3Rpb24gQXBwKCkge1xuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBzZXRDb250ZW50KChwcmV2U3RhdGU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeSgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgQ2hhdEdQVCgpLmdldENvbXBsZXRpb24oY29udGVudCk7XG4gICAgICAgIHNldFJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgIC8vIGNhbGwgZ2V0Q29tcGxldGlvbihwcm9tcHQpIGZyb20gdGhlIHRleHQgc3RhdGUgYW5kIHNldCB0aGUgc3VtbWFyeSBzdGF0ZSB0byB0aGUgcmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0TGlzdCA9IHJlc3VsdC5zcGxpdChcIuKAolwiKTtcbiAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIHctWzMwcmVtXSBwLTYgaC03MiAgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1ib2xkIFwiPlN0dWR5U3luYzwvZGl2PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci1iLTMgcHktMlwiPjwvaHI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTIgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxMYXJnZUlucHV0Qm94XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50ZXIgY29udGVudCBoZXJlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhleSEgTXkgbmFtZSBpcyBLYW1hcmkgSm9obnNvbiBhbmQgSSdtIGEgc29jY2VyIGNvYWNoIG5lYXIgTG9uZyBCZWFjaC4gSSd2ZSBsaXZlZCBpbiBMb25nIEJlYWNoIGZvciBhYm91dCA1IHllYXJzIG5vdyBhbmQgc28gSSdkIHNheSBJJ20gcHJldHR5IGZhbWlsaWFyIHdpdGggdGhlIGFyZWEuIFNvbWUgb2YgbXkgZmF2b3JpdGUgdGhpbmdzIHRvIGRvIGlzIGdvIHRvIHRoZSBiZWFjaCwgeW9nYSwgYW5kIHRyeSBuZXcgZm9vZHMuIEkgbG92ZSBtZWV0aW5nIG5ldyBwZW9wbGUgYW5kIGxlYXJuaW5nIGFib3V0IGRpZmZlcmVudCBiYWNrZ3JvdW5kcyBhbmQgY3VsdHVyZXMuIEFzIHlvdXIgZ3VpZGUgSSdkIGJlIHN1cmUgdG8gdGFrZSB5b3VyIHRvIHNvbWUgb2YgbXkgZmF2b3JpdGUgbG9jYWwgcmVzdGF1cmFudHMgYW5kIHNob3cgeW91IHRoZSBMb25nIEJlYWNoIGN1bHR1cmVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29tcGxldGVkPXtjb250ZW50ID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9eyhlOiBhbnkpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgaW4gYW55IHRleHQgdG8gYmUgc3VtbWFyaXplZCFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1zbSAgb3V0bGluZSBvdXRsaW5lLW5ldXRyYWwtMzAwIGZvY3VzOm91dGxpbmUtZG91YmxlIHAtMiB0ZXh0LXhzIHctZnVsbCBtYXgtdy1tZCBoLTIyXCJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXhzIHctZnVsbCAgcm91bmRlZC1zbSBiZy1uZXV0cmFsLTgwMCBwLTIgdGV4dC1uZXV0cmFsLTUwXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Z2V0U3VtbWFyeX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEdldCBTdW1tYXJ5XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3N1bW1hcnkgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5U2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0zXCI+U3VtbWFyeTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHRMaXN0Lm1hcCgocmVzdWx0KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sZW5ndGggIT0gMCA/IDxsaT57cmVzdWx0fTwvbGk+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdW1tYXJ5IH19PjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGFyZ2VJbnB1dEJveCIsIkNoYXRHUFQiLCJBcHAiLCJ0ZXh0Iiwic2V0VGV4dCIsInN1bW1hcnkiLCJzZXRTdW1tYXJ5IiwiY29udGVudCIsInNldENvbnRlbnQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldlN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZ2V0U3VtbWFyeSIsInJlc3BvbnNlIiwiZ2V0Q29tcGxldGlvbiIsInJlc3VsdExpc3QiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJociIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwic3RhdHVzQ29tcGxldGVkIiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsInVsIiwibWFwIiwibGVuZ3RoIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});