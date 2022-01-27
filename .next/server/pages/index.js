"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\n\n\nfunction Title(props) {\n    //console.log(props);\n    const Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"37ea659f08ae8803\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"37ea659f08ae8803\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// Component React\n// function HomePage() {\n//     // JSX\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Title tag=\"h2\">Boas vindas de volta!</Title>\n//             <h2>Discord - Alura Matrix</h2>\n//         </div>\n//     )\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    // const username = 'gmti87';\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('gmti87');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function(infosDoEvento) {\n                            infosDoEvento.preventDefault();\n                            console.log(\"Alguem submeteu o form\");\n                            //console.log(roteamento);\n                            roteamento.push('/chat');\n                        // window.location.href = '/chat';\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                tag: \"h2\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: function handler(event) {\n                                    console.log('Usario digittou', event.target.value);\n                                    // onde esta o valor\n                                    const valor = event.target.value;\n                                    // trocar o valor da variavel\n                                    // Atraves do react e avise quem precisa\n                                    setUsername(valor);\n                                },\n                                fllWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                                lineNumber: 121,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                src: `https://github.com/${username}.png`\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                                lineNumber: 152,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                                lineNumber: 159,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                        lineNumber: 137,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/gabriel/\\xc1rea de Trabalho/Minhas Coisas Linux/ESTUDO/Cursos WEB/ALURA/ALURACORD/aluracord/pages/index.js\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFLENBQU87NEJBQ2pCRSxPQUFPLEVBQUUsQ0FBTTs0QkFDZlosZUFBZSxFQUFFbEIsb0VBQW9DOzRCQUNyRGdFLE1BQU0sRUFBRSxDQUFXOzRCQUNuQkMsV0FBVyxFQUFFakUsb0VBQW9DOzRCQUNqRDZCLFlBQVksRUFBRSxDQUFNOzRCQUNwQnFDLElBQUksRUFBRSxDQUFDOzRCQUNQQyxTQUFTLEVBQUUsQ0FBTzt3QkFDcEIsQ0FBQzs7d0dBRUF0RSx1REFBSztnQ0FDSmlCLFVBQVUsRUFBRSxDQUFDO29DQUNYZSxZQUFZLEVBQUUsQ0FBSztvQ0FDbkJZLFlBQVksRUFBRSxDQUFNO2dDQUN0QixDQUFDO2dDQUNEMkIsR0FBRyxHQUFHLG1CQUFtQixFQUFFMUQsUUFBUSxDQUFDLElBQUk7Ozs7Ozt3R0FFekNmLHNEQUFJO2dDQUNIK0MsT0FBTyxFQUFDLENBQU87Z0NBQ2Y1QixVQUFVLEVBQUUsQ0FBQztvQ0FDWDZCLEtBQUssRUFBRTNDLG9FQUFvQztvQ0FDM0NrQixlQUFlLEVBQUVsQixvRUFBb0M7b0NBQ3JEOEIsT0FBTyxFQUFFLENBQVU7b0NBQ25CRCxZQUFZLEVBQUUsQ0FBUTtnQ0FDeEIsQ0FBQzswQ0FFQW5CLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx1cmFjb3JkLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJ1xuXG5mdW5jdGlvbiBUaXRsZSggcHJvcHMgKSB7XG4gICAgLy9jb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSc7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICR7VGFnfSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddfTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuLy8gQ29tcG9uZW50IFJlYWN0XG4vLyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbi8vICAgICAvLyBKU1hcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4vLyAgICAgICAgICAgICA8VGl0bGUgdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdGxlPlxuLy8gICAgICAgICAgICAgPGgyPkRpc2NvcmQgLSBBbHVyYSBNYXRyaXg8L2gyPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xuICAgIC8vIGNvbnN0IHVzZXJuYW1lID0gJ2dtdGk4Nyc7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnZ210aTg3Jyk7XG4gICAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlcigpOyBcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgIHNtOiAncm93JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2Z1bmN0aW9uIChpbmZvc0RvRXZlbnRvKSB7XG4gICAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxndWVtIHN1Ym1ldGV1IG8gZm9ybVwiKVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocm90ZWFtZW50byk7XG4gICAgICAgICAgICAgICAgcm90ZWFtZW50by5wdXNoKCcvY2hhdCcpO1xuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jaGF0JztcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206ICc1MCUnIH0sIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGl0bGUgdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdGxlPlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxuICAgICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNhcmlvIGRpZ2l0dG91JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIC8vIG9uZGUgZXN0YSBvIHZhbG9yXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIC8vIHRyb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXG4gICAgICAgICAgICAgICAgICAvLyBBdHJhdmVzIGRvIHJlYWN0IGUgYXZpc2UgcXVlbSBwcmVjaXNhXG4gICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNhcmlvIGRpZ2l0dG91JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIC8vIG9uZGUgZXN0YSBvIHZhbG9yXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIC8vIHRyb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXG4gICAgICAgICAgICAgICAgICAvLyBBdHJhdmVzIGRvIHJlYWN0IGUgYXZpc2UgcXVlbSBwcmVjaXNhXG4gICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBmbGxXaWR0aFxuICAgICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xuICAgICAgICAgICAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxuICBcbiAgXG4gICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAwcHgnXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt1c2VybmFtZX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8Lz5cbiAgICApO1xuICB9Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIlJlYWN0IiwidXNlUm91dGVyIiwiYXBwQ29uZmlnIiwiVGl0bGUiLCJwcm9wcyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJyb3RlYW1lbnRvIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJhcyIsIm9uU3VibWl0IiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3IiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsInZhbG9yIiwiZmxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwidHlwZSIsImxhYmVsIiwiZnVsbFdpZHRoIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Aluracord - Matrix","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();