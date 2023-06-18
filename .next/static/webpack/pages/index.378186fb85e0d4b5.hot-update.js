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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Inputs */ \"./pages/components/Inputs.tsx\");\n/* harmony import */ var _lib_chatgpt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/chatgpt */ \"./pages/lib/chatgpt.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setContent((prevState)=>({\n                ...prevState,\n                [e.target.name]: e.target.value\n            }));\n    };\n    async function getSummary() {\n        const response = await new _lib_chatgpt__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getCompletion(content);\n        setContent(response);\n    // call getCompletion(prompt) from the text state and set the summary state to the result\n    }\n    const summaryList = summary.split(\"•\");\n    console.log(content);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App w-[30rem] p-6 h-72  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 font-bold \",\n                children: \"StudySync\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b-3 py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-start gap-2 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs__WEBPACK_IMPORTED_MODULE_2__.LargeInputBox, {\n                        label: \"Enter content here\",\n                        name: \"content\",\n                        placeholder: \"Hey! My name is Kamari Johnson and I'm a soccer coach near Long Beach. I've lived in Long Beach for about 5 years now and so I'd say I'm pretty familiar with the area. Some of my favorite things to do is go to the beach, yoga, and try new foods. I love meeting new people and learning about different backgrounds and cultures. As your guide I'd be sure to take your to some of my favorite local restaurants and show you the Long Beach culture\",\n                        type: \"textarea\",\n                        value: content[0],\n                        statusCompleted: content ? true : false,\n                        handleChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"Paste in any text to be summarized!\",\n                        value: text,\n                        onChange: (e)=>setText(e.target.value),\n                        className: \"rounded-sm  outline outline-neutral-300 focus:outline-double p-2 text-xs w-full max-w-md h-22\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn text-xs w-full  rounded-sm bg-neutral-800 p-2 text-neutral-50\",\n                        onClick: getSummary,\n                        children: \"Get Summary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            summary ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summarySection\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl mb-3\",\n                        children: \"Summary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: summaryList.map((summary)=>summary.length != 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: summary\n                            }, void 0, false, {\n                                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 51\n                            }, this) : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"ya1ePabNgpGtUrhyX+AyeMAsZug=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ1E7QUFFaEI7QUFDcEMsU0FBU0csTUFBTTs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxlQUFlLENBQUNDLElBQVc7UUFDN0JGLFdBQVcsQ0FBQ0csWUFBb0I7Z0JBQzVCLEdBQUdBLFNBQVM7Z0JBQ1osQ0FBQ0QsRUFBRUUsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUgsRUFBRUUsTUFBTSxDQUFDRSxLQUFLO1lBQ25DO0lBQ0o7SUFFQSxlQUFlQyxhQUFhO1FBQ3hCLE1BQU1DLFdBQVcsTUFBTSxJQUFJZixvREFBT0EsR0FBR2dCLGFBQWEsQ0FBQ1Y7UUFDbkRDLFdBQVdRO0lBQ1gseUZBQXlGO0lBQzdGO0lBRUEsTUFBTUUsY0FBY2IsUUFBUWMsS0FBSyxDQUFDO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUNkO0lBRVoscUJBQ0ksOERBQUNlO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBa0I7Ozs7OzswQkFDakMsOERBQUNDO2dCQUFHRCxXQUFVOzs7Ozs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ3ZCLDZEQUFhQTt3QkFDVnlCLE9BQU07d0JBQ05aLE1BQUs7d0JBQ0xhLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xiLE9BQU9QLE9BQU8sQ0FBQyxFQUFFO3dCQUNqQnFCLGlCQUFpQnJCLFVBQVUsSUFBSSxHQUFHLEtBQUs7d0JBQ3ZDRSxjQUFjQTs7Ozs7O2tDQUVsQiw4REFBQ29CO3dCQUNHSCxhQUFZO3dCQUNaWixPQUFPWDt3QkFDUDJCLFVBQVUsQ0FBQ3BCLElBQU1OLFFBQVFNLEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSzt3QkFDdkNTLFdBQVU7Ozs7OztrQ0FFZCw4REFBQ1E7d0JBQ0dSLFdBQVU7d0JBQ1ZTLFNBQVNqQjtrQ0FDWjs7Ozs7Ozs7Ozs7O1lBS0pWLHdCQUNHLDhEQUFDaUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVTt3QkFBR1YsV0FBVTtrQ0FBZTs7Ozs7O2tDQUM3Qiw4REFBQ1c7a0NBQ0loQixZQUFZaUIsR0FBRyxDQUFDLENBQUM5QixVQUNkQSxRQUFRK0IsTUFBTSxJQUFJLGtCQUFJLDhEQUFDQzswQ0FBSWhDOzs7Ozt1Q0FBZ0IsRUFBRTs7Ozs7Ozs7Ozs7dUJBT3pELEVBQ0g7Ozs7Ozs7QUFHYjtHQWxFU0g7S0FBQUE7QUFvRVQsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGFyZ2VJbnB1dEJveCB9IGZyb20gXCIuL2NvbXBvbmVudHMvSW5wdXRzXCI7XG5cbmltcG9ydCBDaGF0R1BUIGZyb20gXCIuL2xpYi9jaGF0Z3B0XCI7XG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgc2V0Q29udGVudCgocHJldlN0YXRlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFN1bW1hcnkoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IENoYXRHUFQoKS5nZXRDb21wbGV0aW9uKGNvbnRlbnQpO1xuICAgICAgICBzZXRDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgLy8gY2FsbCBnZXRDb21wbGV0aW9uKHByb21wdCkgZnJvbSB0aGUgdGV4dCBzdGF0ZSBhbmQgc2V0IHRoZSBzdW1tYXJ5IHN0YXRlIHRvIHRoZSByZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCBzdW1tYXJ5TGlzdCA9IHN1bW1hcnkuc3BsaXQoXCLigKJcIik7XG4gICAgY29uc29sZS5sb2coY29udGVudCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCB3LVszMHJlbV0gcC02IGgtNzIgIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtYm9sZCBcIj5TdHVkeVN5bmM8L2Rpdj5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItYi0zIHB5LTJcIj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC0yIG1iLTVcIj5cbiAgICAgICAgICAgICAgICA8TGFyZ2VJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVudGVyIGNvbnRlbnQgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZXkhIE15IG5hbWUgaXMgS2FtYXJpIEpvaG5zb24gYW5kIEknbSBhIHNvY2NlciBjb2FjaCBuZWFyIExvbmcgQmVhY2guIEkndmUgbGl2ZWQgaW4gTG9uZyBCZWFjaCBmb3IgYWJvdXQgNSB5ZWFycyBub3cgYW5kIHNvIEknZCBzYXkgSSdtIHByZXR0eSBmYW1pbGlhciB3aXRoIHRoZSBhcmVhLiBTb21lIG9mIG15IGZhdm9yaXRlIHRoaW5ncyB0byBkbyBpcyBnbyB0byB0aGUgYmVhY2gsIHlvZ2EsIGFuZCB0cnkgbmV3IGZvb2RzLiBJIGxvdmUgbWVldGluZyBuZXcgcGVvcGxlIGFuZCBsZWFybmluZyBhYm91dCBkaWZmZXJlbnQgYmFja2dyb3VuZHMgYW5kIGN1bHR1cmVzLiBBcyB5b3VyIGd1aWRlIEknZCBiZSBzdXJlIHRvIHRha2UgeW91ciB0byBzb21lIG9mIG15IGZhdm9yaXRlIGxvY2FsIHJlc3RhdXJhbnRzIGFuZCBzaG93IHlvdSB0aGUgTG9uZyBCZWFjaCBjdWx0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnRbMF19XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbXBsZXRlZD17Y29udGVudCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSBpbiBhbnkgdGV4dCB0byBiZSBzdW1tYXJpemVkIVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXNtICBvdXRsaW5lIG91dGxpbmUtbmV1dHJhbC0zMDAgZm9jdXM6b3V0bGluZS1kb3VibGUgcC0yIHRleHQteHMgdy1mdWxsIG1heC13LW1kIGgtMjJcIlxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHRleHQteHMgdy1mdWxsICByb3VuZGVkLXNtIGJnLW5ldXRyYWwtODAwIHAtMiB0ZXh0LW5ldXRyYWwtNTBcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRTdW1tYXJ5fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgR2V0IFN1bW1hcnlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7c3VtbWFyeSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTNcIj5TdW1tYXJ5PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N1bW1hcnlMaXN0Lm1hcCgoc3VtbWFyeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5Lmxlbmd0aCAhPSAwID8gPGxpPntzdW1tYXJ5fTwvbGk+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdW1tYXJ5IH19PjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGFyZ2VJbnB1dEJveCIsIkNoYXRHUFQiLCJBcHAiLCJ0ZXh0Iiwic2V0VGV4dCIsInN1bW1hcnkiLCJzZXRTdW1tYXJ5IiwiY29udGVudCIsInNldENvbnRlbnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldlN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZ2V0U3VtbWFyeSIsInJlc3BvbnNlIiwiZ2V0Q29tcGxldGlvbiIsInN1bW1hcnlMaXN0Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHIiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInN0YXR1c0NvbXBsZXRlZCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJ1bCIsIm1hcCIsImxlbmd0aCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});