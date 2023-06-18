"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/summary",{

/***/ "./pages/summary/index.tsx":
/*!*********************************!*\
  !*** ./pages/summary/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Inputs */ \"./pages/components/Inputs.tsx\");\n/* harmony import */ var _lib_chatgptsum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/chatgptsum */ \"./pages/lib/chatgptsum.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/.pnpm/next@13.2.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App() {\n    _s();\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function getSummary() {\n        const response = await new _lib_chatgptsum__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getCompletion(content);\n        // const response =\n        //     \"Penguins live in areas free from land predators and near nutrient-rich, cold-water currents. They are adapted to living at sea and some species spend months at a time there. Different species thrive in varying climates, ranging from tropical islands to the pack ice and waters of Antarctica. / The seasons of the Southern Hemisphere are opposite those of the Northern Hemisphere. / The most southerly penguin colony in the world are a group of Adélies that regularly nest near Camp Royds, Antarctica.\";\n        setSummary(response);\n        console.log(response);\n    }\n    const summaryList = summary.split(\"/\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App p-6 h-72\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 font-bold \",\n                children: \"StudySync\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b-3 py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs__WEBPACK_IMPORTED_MODULE_2__.LargeInputBox, {\n                                label: \"Summarize content with AI!\",\n                                name: \"content\",\n                                placeholder: \"Type or Paste (Ctrl + V) Your Text Here\",\n                                type: \"textarea\",\n                                value: content,\n                                statusCompleted: content ? true : false,\n                                handleChange: (e)=>setContent(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn text-sm w-full mt-3  mb-8 rounded-lg bg-neutral-800 p-2 text-neutral-50\",\n                                onClick: getSummary,\n                                children: \"Generate Summary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: process.env.OPENAI_API_KEY\n                            }, void 0, false, {\n                                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summarySection\",\n                        children: summaryList.map((summary)=>summary.length != 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: summary\n                            }, void 0, false, {\n                                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 47\n                            }, this) : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bobbyzhong/Developer/bionic/pages/summary/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"DKYrWtmJayZhzURSIMeZPvFFRns=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdW1tYXJ5L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ1M7QUFHYjtBQUN4QyxTQUFTRyxNQUFNOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBTTtJQUM5QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBRXZDLGVBQWVVLGFBQWE7UUFDeEIsTUFBTU4sV0FBVyxNQUFNLElBQUlGLHVEQUFPQSxHQUFHUyxhQUFhLENBQUNIO1FBRW5ELG1CQUFtQjtRQUNuQiw4ZkFBOGY7UUFFOWZELFdBQVdIO1FBQ1hRLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDaEI7SUFFQSxNQUFNVSxjQUFjUixRQUFRUyxLQUFLLENBQUM7SUFFbEMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBa0I7Ozs7OzswQkFDakMsOERBQUNDO2dCQUFHRCxXQUFVOzs7Ozs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDaEIsNkRBQWFBO2dDQUNWa0IsT0FBTTtnQ0FDTkMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTEMsT0FBT2Y7Z0NBQ1BnQixpQkFBaUJoQixVQUFVLElBQUksR0FBRyxLQUFLO2dDQUN2Q2lCLGNBQWMsQ0FBQ0MsSUFBV2pCLFdBQVdpQixFQUFFQyxNQUFNLENBQUNKLEtBQUs7Ozs7OzswQ0FHdkQsOERBQUNLO2dDQUNHWCxXQUFVO2dDQUNWWSxTQUFTbkI7MENBQ1o7Ozs7OzswQ0FHRCw4REFBQ007MENBQUtjLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYzs7Ozs7Ozs7Ozs7O2tDQUdwQyw4REFBQ2hCO3dCQUFJQyxXQUFVO2tDQUNWSCxZQUFZbUIsR0FBRyxDQUFDLENBQUMzQixVQUNkQSxRQUFRNEIsTUFBTSxJQUFJLGtCQUFJLDhEQUFDQzswQ0FBSTdCOzs7Ozt1Q0FBZ0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJFO0dBbERTSDtLQUFBQTtBQW9EVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdW1tYXJ5L2luZGV4LnRzeD9hMThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhcmdlSW5wdXRCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dHNcIjtcbmltcG9ydCBDbGlja2FibGUgZnJvbSBcIkAvY29tcG9uZW50cy9DbGlja2FibGVcIjtcblxuaW1wb3J0IENoYXRHUFQgZnJvbSBcIi4uL2xpYi9jaGF0Z3B0c3VtXCI7XG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZTxhbnk+KFwiXCIpO1xuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeSgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgQ2hhdEdQVCgpLmdldENvbXBsZXRpb24oY29udGVudCk7XG5cbiAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPVxuICAgICAgICAvLyAgICAgXCJQZW5ndWlucyBsaXZlIGluIGFyZWFzIGZyZWUgZnJvbSBsYW5kIHByZWRhdG9ycyBhbmQgbmVhciBudXRyaWVudC1yaWNoLCBjb2xkLXdhdGVyIGN1cnJlbnRzLiBUaGV5IGFyZSBhZGFwdGVkIHRvIGxpdmluZyBhdCBzZWEgYW5kIHNvbWUgc3BlY2llcyBzcGVuZCBtb250aHMgYXQgYSB0aW1lIHRoZXJlLiBEaWZmZXJlbnQgc3BlY2llcyB0aHJpdmUgaW4gdmFyeWluZyBjbGltYXRlcywgcmFuZ2luZyBmcm9tIHRyb3BpY2FsIGlzbGFuZHMgdG8gdGhlIHBhY2sgaWNlIGFuZCB3YXRlcnMgb2YgQW50YXJjdGljYS4gLyBUaGUgc2Vhc29ucyBvZiB0aGUgU291dGhlcm4gSGVtaXNwaGVyZSBhcmUgb3Bwb3NpdGUgdGhvc2Ugb2YgdGhlIE5vcnRoZXJuIEhlbWlzcGhlcmUuIC8gVGhlIG1vc3Qgc291dGhlcmx5IHBlbmd1aW4gY29sb255IGluIHRoZSB3b3JsZCBhcmUgYSBncm91cCBvZiBBZMOpbGllcyB0aGF0IHJlZ3VsYXJseSBuZXN0IG5lYXIgQ2FtcCBSb3lkcywgQW50YXJjdGljYS5cIjtcblxuICAgICAgICBzZXRTdW1tYXJ5KHJlc3BvbnNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bW1hcnlMaXN0ID0gc3VtbWFyeS5zcGxpdChcIi9cIik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBwLTYgaC03MlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtYm9sZCBcIj5TdHVkeVN5bmM8L2Rpdj5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItYi0zIHB5LTJcIj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFyZ2VJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdW1tYXJpemUgY29udGVudCB3aXRoIEFJIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgb3IgUGFzdGUgKEN0cmwgKyBWKSBZb3VyIFRleHQgSGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb21wbGV0ZWQ9e2NvbnRlbnQgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9eyhlOiBhbnkpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXNtIHctZnVsbCBtdC0zICBtYi04IHJvdW5kZWQtbGcgYmctbmV1dHJhbC04MDAgcC0yIHRleHQtbmV1dHJhbC01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRTdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0ZSBTdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge3N1bW1hcnlMaXN0Lm1hcCgoc3VtbWFyeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnkubGVuZ3RoICE9IDAgPyA8bGk+e3N1bW1hcnl9PC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGFyZ2VJbnB1dEJveCIsIkNoYXRHUFQiLCJBcHAiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImdldFN1bW1hcnkiLCJnZXRDb21wbGV0aW9uIiwiY29uc29sZSIsImxvZyIsInN1bW1hcnlMaXN0Iiwic3BsaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJociIsImxhYmVsIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwic3RhdHVzQ29tcGxldGVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJtYXAiLCJsZW5ndGgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/summary/index.tsx\n"));

/***/ })

});