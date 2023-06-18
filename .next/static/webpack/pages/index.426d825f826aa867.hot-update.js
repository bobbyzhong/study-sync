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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Inputs */ \"./pages/components/Inputs.tsx\");\n/* harmony import */ var _lib_chatgpt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/chatgpt */ \"./pages/lib/chatgpt.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setContent((prevState)=>({\n                ...prevState,\n                [e.target.name]: e.target.value\n            }));\n    };\n    async function getSummary() {\n        const response = await new _lib_chatgpt__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getCompletion(content);\n        setResult(response);\n    // call getCompletion(prompt) from the text state and set the summary state to the result\n    }\n    const resultList = result.split(\"•\");\n    console.log(content);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App w-[30rem] p-6 h-72  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 font-bold \",\n                children: \"StudySync\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b-3 py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-start gap-2 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs__WEBPACK_IMPORTED_MODULE_2__.LargeInputBox, {\n                        label: \"Enter content here\",\n                        name: \"content\",\n                        placeholder: \"Hey! My name is Kamari Johnson and I'm a soccer coach near Long Beach. I've lived in Long Beach for about 5 years now and so I'd say I'm pretty familiar with the area. Some of my favorite things to do is go to the beach, yoga, and try new foods. I love meeting new people and learning about different backgrounds and cultures. As your guide I'd be sure to take your to some of my favorite local restaurants and show you the Long Beach culture\",\n                        type: \"textarea\",\n                        value: content,\n                        statusCompleted: content ? true : false,\n                        handleChange: (e)=>setContent(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"Paste in any text to be summarized!\",\n                        value: text,\n                        onChange: (e)=>setText(e.target.value),\n                        className: \"rounded-sm  outline outline-neutral-300 focus:outline-double p-2 text-xs w-full max-w-md h-22\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn text-xs w-full  rounded-sm bg-neutral-800 p-2 text-neutral-50\",\n                        onClick: getSummary,\n                        children: \"Get Summary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            summary ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summarySection\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl mb-3\",\n                        children: \"Summary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: resultList.map((summary)=>summary.length != 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: summary\n                            }, void 0, false, {\n                                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 51\n                            }, this) : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"y4ytu7GVrsmCzgxp7chYl+jMgZI=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ1E7QUFFaEI7QUFDcEMsU0FBU0csTUFBTTs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFFckMsTUFBTVksZUFBZSxDQUFDQyxJQUFXO1FBQzdCSixXQUFXLENBQUNLLFlBQW9CO2dCQUM1QixHQUFHQSxTQUFTO2dCQUNaLENBQUNELEVBQUVFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSztZQUNuQztJQUNKO0lBRUEsZUFBZUMsYUFBYTtRQUN4QixNQUFNQyxXQUFXLE1BQU0sSUFBSWpCLG9EQUFPQSxHQUFHa0IsYUFBYSxDQUFDWjtRQUNuREcsVUFBVVE7SUFDVix5RkFBeUY7SUFDN0Y7SUFFQSxNQUFNRSxhQUFhWCxPQUFPWSxLQUFLLENBQUM7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ2hCO0lBRVoscUJBQ0ksOERBQUNpQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQWtCOzs7Ozs7MEJBQ2pDLDhEQUFDQztnQkFBR0QsV0FBVTs7Ozs7OzBCQUNkLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUN6Qiw2REFBYUE7d0JBQ1YyQixPQUFNO3dCQUNOWixNQUFLO3dCQUNMYSxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMYixPQUFPVDt3QkFDUHVCLGlCQUFpQnZCLFVBQVUsSUFBSSxHQUFHLEtBQUs7d0JBQ3ZDSSxjQUFjLENBQUNDLElBQVdKLFdBQVdJLEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSzs7Ozs7O2tDQUV2RCw4REFBQ2U7d0JBQ0dILGFBQVk7d0JBQ1paLE9BQU9iO3dCQUNQNkIsVUFBVSxDQUFDcEIsSUFBTVIsUUFBUVEsRUFBRUUsTUFBTSxDQUFDRSxLQUFLO3dCQUN2Q1MsV0FBVTs7Ozs7O2tDQUVkLDhEQUFDUTt3QkFDR1IsV0FBVTt3QkFDVlMsU0FBU2pCO2tDQUNaOzs7Ozs7Ozs7Ozs7WUFLSlosd0JBQ0csOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNVO3dCQUFHVixXQUFVO2tDQUFlOzs7Ozs7a0NBQzdCLDhEQUFDVztrQ0FDSWhCLFdBQVdpQixHQUFHLENBQUMsQ0FBQ2hDLFVBQ2JBLFFBQVFpQyxNQUFNLElBQUksa0JBQUksOERBQUNDOzBDQUFJbEM7Ozs7O3VDQUFnQixFQUFFOzs7Ozs7Ozs7Ozt1QkFPekQsRUFDSDs7Ozs7OztBQUdiO0dBbkVTSDtLQUFBQTtBQXFFVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXJnZUlucHV0Qm94IH0gZnJvbSBcIi4vY29tcG9uZW50cy9JbnB1dHNcIjtcblxuaW1wb3J0IENoYXRHUFQgZnJvbSBcIi4vbGliL2NoYXRncHRcIjtcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgc2V0Q29udGVudCgocHJldlN0YXRlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFN1bW1hcnkoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IENoYXRHUFQoKS5nZXRDb21wbGV0aW9uKGNvbnRlbnQpO1xuICAgICAgICBzZXRSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAvLyBjYWxsIGdldENvbXBsZXRpb24ocHJvbXB0KSBmcm9tIHRoZSB0ZXh0IHN0YXRlIGFuZCBzZXQgdGhlIHN1bW1hcnkgc3RhdGUgdG8gdGhlIHJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdExpc3QgPSByZXN1bHQuc3BsaXQoXCLigKJcIik7XG4gICAgY29uc29sZS5sb2coY29udGVudCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCB3LVszMHJlbV0gcC02IGgtNzIgIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtYm9sZCBcIj5TdHVkeVN5bmM8L2Rpdj5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItYi0zIHB5LTJcIj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC0yIG1iLTVcIj5cbiAgICAgICAgICAgICAgICA8TGFyZ2VJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVudGVyIGNvbnRlbnQgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZXkhIE15IG5hbWUgaXMgS2FtYXJpIEpvaG5zb24gYW5kIEknbSBhIHNvY2NlciBjb2FjaCBuZWFyIExvbmcgQmVhY2guIEkndmUgbGl2ZWQgaW4gTG9uZyBCZWFjaCBmb3IgYWJvdXQgNSB5ZWFycyBub3cgYW5kIHNvIEknZCBzYXkgSSdtIHByZXR0eSBmYW1pbGlhciB3aXRoIHRoZSBhcmVhLiBTb21lIG9mIG15IGZhdm9yaXRlIHRoaW5ncyB0byBkbyBpcyBnbyB0byB0aGUgYmVhY2gsIHlvZ2EsIGFuZCB0cnkgbmV3IGZvb2RzLiBJIGxvdmUgbWVldGluZyBuZXcgcGVvcGxlIGFuZCBsZWFybmluZyBhYm91dCBkaWZmZXJlbnQgYmFja2dyb3VuZHMgYW5kIGN1bHR1cmVzLiBBcyB5b3VyIGd1aWRlIEknZCBiZSBzdXJlIHRvIHRha2UgeW91ciB0byBzb21lIG9mIG15IGZhdm9yaXRlIGxvY2FsIHJlc3RhdXJhbnRzIGFuZCBzaG93IHlvdSB0aGUgTG9uZyBCZWFjaCBjdWx0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbXBsZXRlZD17Y29udGVudCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXsoZTogYW55KSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIGluIGFueSB0ZXh0IHRvIGJlIHN1bW1hcml6ZWQhXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtc20gIG91dGxpbmUgb3V0bGluZS1uZXV0cmFsLTMwMCBmb2N1czpvdXRsaW5lLWRvdWJsZSBwLTIgdGV4dC14cyB3LWZ1bGwgbWF4LXctbWQgaC0yMlwiXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gdGV4dC14cyB3LWZ1bGwgIHJvdW5kZWQtc20gYmctbmV1dHJhbC04MDAgcC0yIHRleHQtbmV1dHJhbC01MFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2dldFN1bW1hcnl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHZXQgU3VtbWFyeVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtzdW1tYXJ5ID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgbWItM1wiPlN1bW1hcnk8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0TGlzdC5tYXAoKHN1bW1hcnkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeS5sZW5ndGggIT0gMCA/IDxsaT57c3VtbWFyeX08L2xpPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14c1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3VtbWFyeSB9fT48L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxhcmdlSW5wdXRCb3giLCJDaGF0R1BUIiwiQXBwIiwidGV4dCIsInNldFRleHQiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImdldFN1bW1hcnkiLCJyZXNwb25zZSIsImdldENvbXBsZXRpb24iLCJyZXN1bHRMaXN0Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHIiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInN0YXR1c0NvbXBsZXRlZCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJ1bCIsIm1hcCIsImxlbmd0aCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});