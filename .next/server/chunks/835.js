"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LargeInputBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function LargeInputBox({ label , placeholder ="" , className , type , name , value , handleChange , statusCompleted  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " flex flex-col ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-[250] text-sm ",
                    children: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                className: `mt-3
               border py-2 px-4 rounded-xl shadow-md  }
                ${statusCompleted ? "" : ""}  `,
                name: name,
                placeholder: placeholder,
                onChange: handleChange,
                required: true,
                rows: 12,
                value: value
            })
        ]
    });
}


/***/ })

};
;