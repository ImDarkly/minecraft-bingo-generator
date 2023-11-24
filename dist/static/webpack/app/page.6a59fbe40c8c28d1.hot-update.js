"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_bingo_card_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/bingo-card-grid */ \"(app-pages-browser)/./components/ui/bingo-card-grid.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _api_items_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/items.json */ \"(app-pages-browser)/./api/items.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ui_mode_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/mode-toggle */ \"(app-pages-browser)/./components/ui/mode-toggle.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [textToCopy, setTextToCopy] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const rand = (min, max)=>Math.floor(Math.random() * (max - min + 1)) + min;\n    const cards = [];\n    const copyLinkToClipboard = ()=>{\n        const bingoCardLink = \"https://imdarkly.github.io/minecraft-bingo-generator/card?\".concat(Array.from({\n            length: 25\n        }, (_, index)=>\"b\".concat(index + 1, \"=\").concat(cards[index].id)).join(\"&\"));\n        navigator.clipboard.writeText(bingoCardLink).then(()=>{\n            console.log(\"Bingo card link copied to clipboard!\");\n        }).catch((error)=>{\n            console.error(\"Failed to copy link to clipboard:\", error);\n        });\n    };\n    for(let i = 0; i < 25; i++){\n        const randomNum = rand(0, 394);\n        cards.push(_api_items_json__WEBPACK_IMPORTED_MODULE_3__[randomNum]);\n    }\n    function generateCards() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center py-4 h-full w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_mode_toggle__WEBPACK_IMPORTED_MODULE_6__.ModeToggle, {}, void 0, false, {\n                    fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center h-full w-full gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        src: \"/minecraft-bingo-generator/textures/logo.png\",\n                        alt: \"Bingo Logo\",\n                        width: 320,\n                        height: 80\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_bingo_card_grid__WEBPACK_IMPORTED_MODULE_1__.BingoCardGrid, {\n                        cards: cards\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: generateCards,\n                                children: \"Generate\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"https://imdarkly.github.io/minecraft-bingo-generator/card?\".concat(Array.from({\n                                    length: 25\n                                }, (_, index)=>\"b\".concat(index + 1, \"=\").concat(cards[index].id)).join(\"&\")),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: copyLinkToClipboard,\n                                    variant: \"outline\",\n                                    children: \"Open Bingo card\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Documents\\\\React\\\\Test\\\\minecraft-bingo-generator\\\\app\\\\page.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"w7t2jYjNHNpTi6KW6u+JuWmo5v4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNnRTtBQUNoQjtBQUNYO0FBQ0o7QUFDSjtBQUM0QjtBQUMxQjtBQUVoQixTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1PLE9BQU8sQ0FBQ0MsS0FBYUMsTUFDdkJDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFNSCxDQUFBQSxNQUFNRCxNQUFNLE1BQU1BO0lBRWxELE1BQU1LLFFBQXVELEVBQUU7SUFFL0QsTUFBTUMsc0JBQXNCO1FBQ3hCLE1BQU1DLGdCQUFnQiw2REFHVixPQUh1RUMsTUFBTUMsSUFBSSxDQUN6RjtZQUFFQyxRQUFRO1FBQUcsR0FDYixDQUFDQyxHQUFHQyxRQUFVLElBQWlCUCxPQUFiTyxRQUFRLEdBQUUsS0FBbUIsT0FBaEJQLEtBQUssQ0FBQ08sTUFBTSxDQUFDQyxFQUFFLEdBQ2hEQyxJQUFJLENBQUM7UUFFUEMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNWLGVBQWVXLElBQUksQ0FBQztZQUM5Q0MsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCLEdBQUdDLEtBQUssQ0FBQyxDQUFDQztZQUNOSCxRQUFRRyxLQUFLLENBQUMscUNBQXFDQTtRQUN2RDtJQUNKO0lBRUEsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksSUFBSUEsSUFBSztRQUN6QixNQUFNQyxZQUFZekIsS0FBSyxHQUFHO1FBQzFCTSxNQUFNb0IsSUFBSSxDQUFDbEMsNENBQUssQ0FBQ2lDLFVBQVU7SUFDL0I7SUFFQSxTQUFTRSxpQkFDVDtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNsQyxrRUFBVUE7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNpQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNqQyxtREFBS0E7d0JBQUNrQyxLQUFLO3dCQUFnREMsS0FBSTt3QkFBYUMsT0FBTzt3QkFBS0MsUUFBUTs7Ozs7O2tDQUNqRyw4REFBQzNDLHlFQUFhQTt3QkFBQ2dCLE9BQU9BOzs7Ozs7a0NBQ3RCLDhEQUFDc0I7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDdEMseURBQU1BO2dDQUFDMkMsU0FBU1A7MENBQWU7Ozs7OzswQ0FDaEMsOERBQUNqQyxrREFBSUE7Z0NBQ0R5QyxNQUFNLDZEQUdNLE9BSHVEMUIsTUFBTUMsSUFBSSxDQUN6RTtvQ0FBRUMsUUFBUTtnQ0FBRyxHQUNiLENBQUNDLEdBQUdDLFFBQVUsSUFBaUJQLE9BQWJPLFFBQVEsR0FBRSxLQUFtQixPQUFoQlAsS0FBSyxDQUFDTyxNQUFNLENBQUNDLEVBQUUsR0FDaERDLElBQUksQ0FBQzswQ0FFUCw0RUFBQ3hCLHlEQUFNQTtvQ0FBQzJDLFNBQVMzQjtvQ0FBcUI2QixTQUFTOzhDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRjtHQWxEd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgQmluZ29DYXJkR3JpZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmluZ28tY2FyZC1ncmlkXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCBpdGVtcyBmcm9tIFwiQC9hcGkvaXRlbXMuanNvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IE1vZGVUb2dnbGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL21vZGUtdG9nZ2xlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFt0ZXh0VG9Db3B5LCBzZXRUZXh0VG9Db3B5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgcmFuZCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT5cclxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cclxuICAgIGNvbnN0IGNhcmRzOiB7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9W10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBjb3B5TGlua1RvQ2xpcGJvYXJkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJpbmdvQ2FyZExpbmsgPSBgaHR0cHM6Ly9pbWRhcmtseS5naXRodWIuaW8vbWluZWNyYWZ0LWJpbmdvLWdlbmVyYXRvci9jYXJkPyR7QXJyYXkuZnJvbShcclxuICAgICAgICAgICAgeyBsZW5ndGg6IDI1IH0sXHJcbiAgICAgICAgICAgIChfLCBpbmRleCkgPT4gYGIke2luZGV4ICsgMX09JHtjYXJkc1tpbmRleF0uaWR9YFxyXG4gICAgICAgICkuam9pbihcIiZcIil9YDtcclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYmluZ29DYXJkTGluaykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmluZ28gY2FyZCBsaW5rIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvcHkgbGluayB0byBjbGlwYm9hcmQ6XCIsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gcmFuZCgwLCAzOTQpO1xyXG4gICAgICAgIGNhcmRzLnB1c2goaXRlbXNbcmFuZG9tTnVtXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXJkcygpIHtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHktNCBoLWZ1bGwgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgICAgICAgICAgPE1vZGVUb2dnbGUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHctZnVsbCBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvbWluZWNyYWZ0LWJpbmdvLWdlbmVyYXRvci90ZXh0dXJlcy9sb2dvLnBuZ1wifSBhbHQ9XCJCaW5nbyBMb2dvXCIgd2lkdGg9ezMyMH0gaGVpZ2h0PXs4MH0gLz5cclxuICAgICAgICAgICAgICAgIDxCaW5nb0NhcmRHcmlkIGNhcmRzPXtjYXJkc30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Z2VuZXJhdGVDYXJkc30+R2VuZXJhdGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9pbWRhcmtseS5naXRodWIuaW8vbWluZWNyYWZ0LWJpbmdvLWdlbmVyYXRvci9jYXJkPyR7QXJyYXkuZnJvbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGVuZ3RoOiAyNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBgYiR7aW5kZXggKyAxfT0ke2NhcmRzW2luZGV4XS5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkuam9pbihcIiZcIil9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y29weUxpbmtUb0NsaXBib2FyZH0gdmFyaWFudD17XCJvdXRsaW5lXCJ9Pk9wZW4gQmluZ28gY2FyZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJpbmdvQ2FyZEdyaWQiLCJCdXR0b24iLCJpdGVtcyIsInVzZVN0YXRlIiwiTGluayIsIk1vZGVUb2dnbGUiLCJJbWFnZSIsIkhvbWUiLCJ0ZXh0VG9Db3B5Iiwic2V0VGV4dFRvQ29weSIsInJhbmQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjYXJkcyIsImNvcHlMaW5rVG9DbGlwYm9hcmQiLCJiaW5nb0NhcmRMaW5rIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwiaWQiLCJqb2luIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiaSIsInJhbmRvbU51bSIsInB1c2giLCJnZW5lcmF0ZUNhcmRzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwiaHJlZiIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});