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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Inputs */ \"./pages/components/Inputs.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction App() {\n    _s();\n    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currQuest, setCurrQuest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function getSummary() {\n        // const response = await new ChatGPT().getCompletion(content);\n        const response = {\n            questions: [\n                \"What is the primary habitat of penguins?\",\n                \"What is the unique characteristic of penguin wings?\",\n                \"What is the comical challenge that penguins face on land?\",\n                \"What is the reason for penguins' popularity?\",\n                \"What is the symbolic representation of penguins?\"\n            ],\n            answer_choices: [\n                [\n                    \"A. Arctic region\",\n                    \"B. Antarctic region\",\n                    \"C. Tundra\"\n                ],\n                [\n                    \"A. They are colorful\",\n                    \"B. They have evolved into flippers\",\n                    \"C. They are featherless\"\n                ],\n                [\n                    \"A. They can't swim\",\n                    \"B. They can't fly\",\n                    \"C. They can't waddle\"\n                ],\n                [\n                    \"A. Their short legs\",\n                    \"B. Their upright posture\",\n                    \"C. Their resilience and determination\"\n                ],\n                [\n                    \"A. Resilience and determination\",\n                    \"B. Intelligence\",\n                    \"C. Speed and agility\"\n                ]\n            ],\n            correct_answers: [\n                \"B\",\n                \"B\",\n                \"C\",\n                \"C\",\n                \"A\"\n            ]\n        };\n        setQuestions(response.questions);\n        console.log(response);\n    // call getCompletion(prompt) from the text state and set the summary state to the result\n    }\n    // const summaryList = summary.split(\"•\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App w-[30rem] p-6 h-72  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 font-bold \",\n                children: \"StudySync\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b-3 py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-start gap-2 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs__WEBPACK_IMPORTED_MODULE_2__.LargeInputBox, {\n                        label: \"Enter content here\",\n                        name: \"content\",\n                        placeholder: \"Text to summarize\",\n                        type: \"textarea\",\n                        value: content,\n                        statusCompleted: content ? true : false,\n                        handleChange: (e)=>setContent(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn text-xs w-full  rounded-sm bg-neutral-800 p-2 text-neutral-50\",\n                        onClick: getSummary,\n                        children: \"Get Quiz\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summarySection\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl mb-3\",\n                        children: \"Summary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: questions\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"eIubOIa71em/e+D07vHIGl3blxE=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDUTtBQUdwRCxTQUFTRSxNQUFNOztJQUNYLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBTTtJQUM1QyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFNLEVBQUU7SUFDbEQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZDLGVBQWVXLGFBQWE7UUFDeEIsK0RBQStEO1FBQy9ELE1BQU1DLFdBQVc7WUFDYkwsV0FBVztnQkFDUDtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTthQUNIO1lBQ0RNLGdCQUFnQjtnQkFDWjtvQkFBQztvQkFBb0I7b0JBQXVCO2lCQUFZO2dCQUN4RDtvQkFDSTtvQkFDQTtvQkFDQTtpQkFDSDtnQkFDRDtvQkFDSTtvQkFDQTtvQkFDQTtpQkFDSDtnQkFDRDtvQkFDSTtvQkFDQTtvQkFDQTtpQkFDSDtnQkFDRDtvQkFDSTtvQkFDQTtvQkFDQTtpQkFDSDthQUNKO1lBQ0RDLGlCQUFpQjtnQkFBQztnQkFBSztnQkFBSztnQkFBSztnQkFBSzthQUFJO1FBQzlDO1FBRUFOLGFBQWFJLFNBQVNMLFNBQVM7UUFDL0JRLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWix5RkFBeUY7SUFDN0Y7SUFFQSwwQ0FBMEM7SUFFMUMscUJBQ0ksOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBa0I7Ozs7OzswQkFDakMsOERBQUNDO2dCQUFHRCxXQUFVOzs7Ozs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2pCLDZEQUFhQTt3QkFDVm1CLE9BQU07d0JBQ05DLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xDLE9BQU9mO3dCQUNQZ0IsaUJBQWlCaEIsVUFBVSxJQUFJLEdBQUcsS0FBSzt3QkFDdkNpQixjQUFjLENBQUNDLElBQVdqQixXQUFXaUIsRUFBRUMsTUFBTSxDQUFDSixLQUFLOzs7Ozs7a0NBR3ZELDhEQUFDSzt3QkFDR1gsV0FBVTt3QkFDVlksU0FBU25CO2tDQUNaOzs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2E7d0JBQUdiLFdBQVU7a0NBQWU7Ozs7OztrQ0FDN0IsOERBQUNjO2tDQUFJekI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtHQTlFU0w7S0FBQUE7QUFnRlQsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGFyZ2VJbnB1dEJveCB9IGZyb20gXCIuL2NvbXBvbmVudHMvSW5wdXRzXCI7XG5cbmltcG9ydCBDaGF0R1BUIGZyb20gXCIuL2xpYi9jaGF0Z3B0XCI7XG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGU8YW55PihcIlwiKTtcbiAgICBjb25zdCBbY3VyclF1ZXN0LCBzZXRDdXJyUXVlc3RdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeSgpIHtcbiAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgQ2hhdEdQVCgpLmdldENvbXBsZXRpb24oY29udGVudCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgcXVlc3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgXCJXaGF0IGlzIHRoZSBwcmltYXJ5IGhhYml0YXQgb2YgcGVuZ3VpbnM/XCIsXG4gICAgICAgICAgICAgICAgXCJXaGF0IGlzIHRoZSB1bmlxdWUgY2hhcmFjdGVyaXN0aWMgb2YgcGVuZ3VpbiB3aW5ncz9cIixcbiAgICAgICAgICAgICAgICBcIldoYXQgaXMgdGhlIGNvbWljYWwgY2hhbGxlbmdlIHRoYXQgcGVuZ3VpbnMgZmFjZSBvbiBsYW5kP1wiLFxuICAgICAgICAgICAgICAgIFwiV2hhdCBpcyB0aGUgcmVhc29uIGZvciBwZW5ndWlucycgcG9wdWxhcml0eT9cIixcbiAgICAgICAgICAgICAgICBcIldoYXQgaXMgdGhlIHN5bWJvbGljIHJlcHJlc2VudGF0aW9uIG9mIHBlbmd1aW5zP1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFuc3dlcl9jaG9pY2VzOiBbXG4gICAgICAgICAgICAgICAgW1wiQS4gQXJjdGljIHJlZ2lvblwiLCBcIkIuIEFudGFyY3RpYyByZWdpb25cIiwgXCJDLiBUdW5kcmFcIl0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBcIkEuIFRoZXkgYXJlIGNvbG9yZnVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQi4gVGhleSBoYXZlIGV2b2x2ZWQgaW50byBmbGlwcGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkMuIFRoZXkgYXJlIGZlYXRoZXJsZXNzXCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFwiQS4gVGhleSBjYW4ndCBzd2ltXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQi4gVGhleSBjYW4ndCBmbHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDLiBUaGV5IGNhbid0IHdhZGRsZVwiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBcIkEuIFRoZWlyIHNob3J0IGxlZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgXCJCLiBUaGVpciB1cHJpZ2h0IHBvc3R1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDLiBUaGVpciByZXNpbGllbmNlIGFuZCBkZXRlcm1pbmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFwiQS4gUmVzaWxpZW5jZSBhbmQgZGV0ZXJtaW5hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIkIuIEludGVsbGlnZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkMuIFNwZWVkIGFuZCBhZ2lsaXR5XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb3JyZWN0X2Fuc3dlcnM6IFtcIkJcIiwgXCJCXCIsIFwiQ1wiLCBcIkNcIiwgXCJBXCJdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHNldFF1ZXN0aW9ucyhyZXNwb25zZS5xdWVzdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIC8vIGNhbGwgZ2V0Q29tcGxldGlvbihwcm9tcHQpIGZyb20gdGhlIHRleHQgc3RhdGUgYW5kIHNldCB0aGUgc3VtbWFyeSBzdGF0ZSB0byB0aGUgcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gY29uc3Qgc3VtbWFyeUxpc3QgPSBzdW1tYXJ5LnNwbGl0KFwi4oCiXCIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgdy1bMzByZW1dIHAtNiBoLTcyICBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBmb250LWJvbGQgXCI+U3R1ZHlTeW5jPC9kaXY+XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLWItMyBweS0yXCI+PC9ocj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBnYXAtMiBtYi01XCI+XG4gICAgICAgICAgICAgICAgPExhcmdlSW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbnRlciBjb250ZW50IGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGV4dCB0byBzdW1tYXJpemVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29tcGxldGVkPXtjb250ZW50ID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9eyhlOiBhbnkpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXhzIHctZnVsbCAgcm91bmRlZC1zbSBiZy1uZXV0cmFsLTgwMCBwLTIgdGV4dC1uZXV0cmFsLTUwXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Z2V0U3VtbWFyeX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEdldCBRdWl6XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5U2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTNcIj5TdW1tYXJ5PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+e3F1ZXN0aW9uc308L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxhcmdlSW5wdXRCb3giLCJBcHAiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsImN1cnJRdWVzdCIsInNldEN1cnJRdWVzdCIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiZ2V0U3VtbWFyeSIsInJlc3BvbnNlIiwiYW5zd2VyX2Nob2ljZXMiLCJjb3JyZWN0X2Fuc3dlcnMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHIiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsInN0YXR1c0NvbXBsZXRlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});