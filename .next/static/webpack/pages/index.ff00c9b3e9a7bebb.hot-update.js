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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Inputs */ \"./pages/components/Inputs.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction App() {\n    _s();\n    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setContent((prevState)=>({\n                ...prevState,\n                [e.target.name]: e.target.value\n            }));\n    };\n    async function getSummary() {\n        // const response = await new ChatGPT().getCompletion(content);\n        const response = {\n            questions: [\n                \"What is the primary habitat of penguins?\",\n                \"What is the unique characteristic of penguin wings?\",\n                \"What is the comical challenge that penguins face on land?\",\n                \"What is the reason for penguins' popularity?\",\n                \"What is the symbolic representation of penguins?\"\n            ],\n            answer_choices: [\n                [\n                    \"A. Arctic region\",\n                    \"B. Antarctic region\",\n                    \"C. Tundra\"\n                ],\n                [\n                    \"A. They are colorful\",\n                    \"B. They have evolved into flippers\",\n                    \"C. They are featherless\"\n                ],\n                [\n                    \"A. They can't swim\",\n                    \"B. They can't fly\",\n                    \"C. They can't waddle\"\n                ],\n                [\n                    \"A. Their short legs\",\n                    \"B. Their upright posture\",\n                    \"C. Their resilience and determination\"\n                ],\n                [\n                    \"A. Resilience and determination\",\n                    \"B. Intelligence\",\n                    \"C. Speed and agility\"\n                ]\n            ],\n            correct_answers: [\n                \"B\",\n                \"B\",\n                \"C\",\n                \"C\",\n                \"A\"\n            ]\n        };\n        setSummary(response);\n        console.log(response);\n    // call getCompletion(prompt) from the text state and set the summary state to the result\n    }\n    // const summaryList = summary.split(\"•\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App w-[30rem] p-6 h-72  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 font-bold \",\n                children: \"StudySync\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b-3 py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-start gap-2 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs__WEBPACK_IMPORTED_MODULE_2__.LargeInputBox, {\n                        label: \"Enter content here\",\n                        name: \"content\",\n                        placeholder: \"Text to summarize\",\n                        type: \"textarea\",\n                        value: content,\n                        statusCompleted: content ? true : false,\n                        handleChange: (e)=>setContent(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn text-xs w-full  rounded-sm bg-neutral-800 p-2 text-neutral-50\",\n                        onClick: getSummary,\n                        children: \"Get Quiz\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            summary ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summarySection\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl mb-3\",\n                        children: \"Summary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: summary\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 17\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"BkoTXbwQAWArOw+xZxG6anSG4Bw=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDUTtBQUdwRCxTQUFTRSxNQUFNOztJQUNYLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBTTtJQUU1QyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFFdkMsTUFBTU8sZUFBZSxDQUFDQyxJQUFXO1FBQzdCRixXQUFXLENBQUNHLFlBQW9CO2dCQUM1QixHQUFHQSxTQUFTO2dCQUNaLENBQUNELEVBQUVFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSztZQUNuQztJQUNKO0lBRUEsZUFBZUMsYUFBYTtRQUN4QiwrREFBK0Q7UUFDL0QsTUFBTUMsV0FBVztZQUNiQyxXQUFXO2dCQUNQO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2FBQ0g7WUFDREMsZ0JBQWdCO2dCQUNaO29CQUFDO29CQUFvQjtvQkFBdUI7aUJBQVk7Z0JBQ3hEO29CQUNJO29CQUNBO29CQUNBO2lCQUNIO2dCQUNEO29CQUNJO29CQUNBO29CQUNBO2lCQUNIO2dCQUNEO29CQUNJO29CQUNBO29CQUNBO2lCQUNIO2dCQUNEO29CQUNJO29CQUNBO29CQUNBO2lCQUNIO2FBQ0o7WUFDREMsaUJBQWlCO2dCQUFDO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2FBQUk7UUFDOUM7UUFDQWIsV0FBV1U7UUFDWEksUUFBUUMsR0FBRyxDQUFDTDtJQUNaLHlGQUF5RjtJQUM3RjtJQUVBLDBDQUEwQztJQUUxQyxxQkFDSSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFrQjs7Ozs7OzBCQUNqQyw4REFBQ0M7Z0JBQUdELFdBQVU7Ozs7OzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDcEIsNkRBQWFBO3dCQUNWc0IsT0FBTTt3QkFDTlosTUFBSzt3QkFDTGEsYUFBWTt3QkFDWkMsTUFBSzt3QkFDTGIsT0FBT1A7d0JBQ1BxQixpQkFBaUJyQixVQUFVLElBQUksR0FBRyxLQUFLO3dCQUN2Q0UsY0FBYyxDQUFDQyxJQUFXRixXQUFXRSxFQUFFRSxNQUFNLENBQUNFLEtBQUs7Ozs7OztrQ0FHdkQsOERBQUNlO3dCQUNHTixXQUFVO3dCQUNWTyxTQUFTZjtrQ0FDWjs7Ozs7Ozs7Ozs7O1lBS0pWLHdCQUNHLDhEQUFDaUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDUTt3QkFBR1IsV0FBVTtrQ0FBZTs7Ozs7O2tDQUM3Qiw4REFBQ1M7a0NBQUkzQjs7Ozs7Ozs7Ozs7dUJBS1QsRUFDSDs7Ozs7OztBQUdiO0dBekZTRDtLQUFBQTtBQTJGVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXJnZUlucHV0Qm94IH0gZnJvbSBcIi4vY29tcG9uZW50cy9JbnB1dHNcIjtcblxuaW1wb3J0IENoYXRHUFQgZnJvbSBcIi4vbGliL2NoYXRncHRcIjtcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeV0gPSB1c2VTdGF0ZTxhbnk+KFwiXCIpO1xuXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIHNldENvbnRlbnQoKHByZXZTdGF0ZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5KCkge1xuICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ldyBDaGF0R1BUKCkuZ2V0Q29tcGxldGlvbihjb250ZW50KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBxdWVzdGlvbnM6IFtcbiAgICAgICAgICAgICAgICBcIldoYXQgaXMgdGhlIHByaW1hcnkgaGFiaXRhdCBvZiBwZW5ndWlucz9cIixcbiAgICAgICAgICAgICAgICBcIldoYXQgaXMgdGhlIHVuaXF1ZSBjaGFyYWN0ZXJpc3RpYyBvZiBwZW5ndWluIHdpbmdzP1wiLFxuICAgICAgICAgICAgICAgIFwiV2hhdCBpcyB0aGUgY29taWNhbCBjaGFsbGVuZ2UgdGhhdCBwZW5ndWlucyBmYWNlIG9uIGxhbmQ/XCIsXG4gICAgICAgICAgICAgICAgXCJXaGF0IGlzIHRoZSByZWFzb24gZm9yIHBlbmd1aW5zJyBwb3B1bGFyaXR5P1wiLFxuICAgICAgICAgICAgICAgIFwiV2hhdCBpcyB0aGUgc3ltYm9saWMgcmVwcmVzZW50YXRpb24gb2YgcGVuZ3VpbnM/XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYW5zd2VyX2Nob2ljZXM6IFtcbiAgICAgICAgICAgICAgICBbXCJBLiBBcmN0aWMgcmVnaW9uXCIsIFwiQi4gQW50YXJjdGljIHJlZ2lvblwiLCBcIkMuIFR1bmRyYVwiXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFwiQS4gVGhleSBhcmUgY29sb3JmdWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJCLiBUaGV5IGhhdmUgZXZvbHZlZCBpbnRvIGZsaXBwZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQy4gVGhleSBhcmUgZmVhdGhlcmxlc3NcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgXCJBLiBUaGV5IGNhbid0IHN3aW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJCLiBUaGV5IGNhbid0IGZseVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkMuIFRoZXkgY2FuJ3Qgd2FkZGxlXCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFwiQS4gVGhlaXIgc2hvcnQgbGVnc1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkIuIFRoZWlyIHVwcmlnaHQgcG9zdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkMuIFRoZWlyIHJlc2lsaWVuY2UgYW5kIGRldGVybWluYXRpb25cIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgXCJBLiBSZXNpbGllbmNlIGFuZCBkZXRlcm1pbmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQi4gSW50ZWxsaWdlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQy4gU3BlZWQgYW5kIGFnaWxpdHlcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvcnJlY3RfYW5zd2VyczogW1wiQlwiLCBcIkJcIiwgXCJDXCIsIFwiQ1wiLCBcIkFcIl0sXG4gICAgICAgIH07XG4gICAgICAgIHNldFN1bW1hcnkocmVzcG9uc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIC8vIGNhbGwgZ2V0Q29tcGxldGlvbihwcm9tcHQpIGZyb20gdGhlIHRleHQgc3RhdGUgYW5kIHNldCB0aGUgc3VtbWFyeSBzdGF0ZSB0byB0aGUgcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gY29uc3Qgc3VtbWFyeUxpc3QgPSBzdW1tYXJ5LnNwbGl0KFwi4oCiXCIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgdy1bMzByZW1dIHAtNiBoLTcyICBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBmb250LWJvbGQgXCI+U3R1ZHlTeW5jPC9kaXY+XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLWItMyBweS0yXCI+PC9ocj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBnYXAtMiBtYi01XCI+XG4gICAgICAgICAgICAgICAgPExhcmdlSW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbnRlciBjb250ZW50IGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGV4dCB0byBzdW1tYXJpemVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29tcGxldGVkPXtjb250ZW50ID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9eyhlOiBhbnkpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXhzIHctZnVsbCAgcm91bmRlZC1zbSBiZy1uZXV0cmFsLTgwMCBwLTIgdGV4dC1uZXV0cmFsLTUwXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Z2V0U3VtbWFyeX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEdldCBRdWl6XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3N1bW1hcnkgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5U2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0zXCI+U3VtbWFyeTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bD57c3VtbWFyeX08L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN1bW1hcnkgfX0+PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXJnZUlucHV0Qm94IiwiQXBwIiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJnZXRTdW1tYXJ5IiwicmVzcG9uc2UiLCJxdWVzdGlvbnMiLCJhbnN3ZXJfY2hvaWNlcyIsImNvcnJlY3RfYW5zd2VycyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJociIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwic3RhdHVzQ29tcGxldGVkIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});