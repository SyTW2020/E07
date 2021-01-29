/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgamingit"] = self["webpackChunkgamingit"] || []).push([["src_components_games_Simon_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar SEQUENCE = {\n  1: \"red\",\n  2: \"blue\",\n  3: \"green\",\n  4: \"yellow\"\n};\nvar SONG = {\n  1: \"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\",\n  2: \"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3\",\n  3: \"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3\",\n  4: \"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'Simon',\n  data: function data() {\n    return {\n      path: '/simon',\n      strict: false,\n      started: false,\n      canPress: false,\n      sequence: \"\",\n      input: \"\",\n      inputTurn: 0,\n      turn: 0,\n      output: \"--\",\n      maxTurn: 20\n    };\n  },\n  methods: {\n    start: function start() {\n      this.reset();\n      this.started = true;\n\n      this._turn();\n    },\n    _turn: function _turn() {\n      if (this.turn == this.maxTurn) {\n        this.output = \"You won!\";\n        this.started = false;\n        this.canPress = false;\n        setTimeout(this.reset, 5000);\n      } else {\n        this.canPress = false;\n        this.output = \"Turn: \" + ++this.turn;\n        this.sequence += Math.floor(Math.random() * 4 + 1);\n        this.play();\n      }\n    },\n    play: function play() {\n      var delayBase = 500;\n      var baseDuration = 1000;\n\n      for (var i = 0; i < this.sequence.length; i++) {\n        var bt = document.getElementById(SEQUENCE[this.sequence.charAt(i)]);\n        var audio = new Audio(SONG[this.sequence.charAt(i)]);\n        this.flash(bt, audio, delayBase, baseDuration);\n        delayBase += baseDuration;\n      }\n\n      var self = this;\n      setInterval(this.getInput, delayBase);\n    },\n    flash: function flash(element, audio, delay, flashDuration) {\n      //set press\n      setTimeout(function () {\n        element.classList.add(\"btActive\");\n        audio.play();\n      }, delay); //set release\n\n      setTimeout(function () {\n        element.classList.remove(\"btActive\");\n      }, delay + flashDuration - 100);\n    },\n    getInput: function getInput() {\n      this.canPress = true;\n    },\n    addInput: function addInput(bt) {\n      if (this.canPress === true) {\n        this.input = this.input + bt;\n        var beep = new Audio(SONG[bt]);\n        beep.play();\n        this.check();\n      }\n    },\n    check: function check() {\n      this.canPress = false;\n      var turn = this.inputTurn;\n\n      if (this.input.charAt(turn) == this.sequence.charAt(turn)) {\n        this.inputTurn++;\n\n        if (this.inputTurn == this.sequence.length) {\n          this.input = \"\";\n          this.inputTurn = 0;\n          setTimeout(this._turn, 2000);\n        }\n      } else {\n        if (this.strict) {\n          this.output = \"You've lost!\";\n          setTimeout(this.reset, 5000);\n        } else {\n          this.input = \"\";\n          this.inputTurn = 0;\n          this.output = \"You missed. Try again!\";\n          setTimeout(this.play, 2000);\n          ;\n        }\n      }\n    },\n    reset: function reset() {\n      this.sequence = \"\";\n      this.input = \"\";\n      this.inputTurn = 0;\n      this.turn = 0;\n      this.started = false;\n      this.output = \"--\";\n      this.canPress = false;\n    },\n    turnStrict: function turnStrict() {\n      this.strict = !this.strict;\n      var bt = document.getElementById(\"strictbt\");\n\n      if (this.strict) {\n        bt.classList.remove(\"btn-danger\");\n        bt.classList.add(\"btn-success\");\n      } else {\n        bt.classList.remove(\"btn-success\");\n        bt.classList.add(\"btn-danger\");\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://gamingit/./src/components/games/Simon.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody[data-v-34486628]{\\n\\tbackground-color: black;\\n}\\n.header h1[data-v-34486628]{\\n\\tfont-family: \\\"Bungee\\\";\\n\\tcolor: teal;\\n\\tfont-size: 70px;\\n}\\n.output[data-v-34486628] {\\n\\tfont-family: \\\"Bungee\\\";\\n}\\n.mybutton[data-v-34486628] {\\n\\theight: 120px;\\n\\twidth: 120px;\\n\\tmargin: 3px;\\n}\\n.mybutton[data-v-34486628]:active{\\n\\tborder:10px;\\n\\ttransform: translateY(-4px);\\n\\tbox-shadow: 0 5px #999;\\n}\\n.mybutton[data-v-34486628]:disabled {\\n\\topacity:1;\\n}\\n.btActive[data-v-34486628] {\\n\\tborder:10px;\\n\\ttransform: translateY(-4px);\\n\\tbox-shadow: 0 5px #999;\\n}\\n#red[data-v-34486628] {\\n\\tbackground-color: #C9302C;\\n}\\n#blue[data-v-34486628] {\\n\\tbackground-color: #286090;\\n}\\n#green[data-v-34486628] {\\n\\tbackground-color: #449D44;\\n}\\n#yellow[data-v-34486628] {\\n\\tbackground-color: #EC971F;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gamingit/./src/components/games/Simon.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_style_index_0_id_34486628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css&\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_style_index_0_id_34486628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_style_index_0_id_34486628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://gamingit/./src/components/games/Simon.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/games/Simon.vue":
/*!****************************************!*
  !*** ./src/components/games/Simon.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Simon_vue_vue_type_template_id_34486628_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Simon.vue?vue&type=template&id=34486628&scoped=true& */ \"./src/components/games/Simon.vue?vue&type=template&id=34486628&scoped=true&\");\n/* harmony import */ var _Simon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Simon.vue?vue&type=script&lang=js& */ \"./src/components/games/Simon.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _Simon_vue_vue_type_style_index_0_id_34486628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css& */ \"./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(\n  _Simon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _Simon_vue_vue_type_template_id_34486628_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Simon_vue_vue_type_template_id_34486628_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"34486628\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/games/Simon.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://gamingit/./src/components/games/Simon.vue?");

/***/ }),

/***/ "./src/components/games/Simon.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*
  !*** ./src/components/games/Simon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Simon.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://gamingit/./src/components/games/Simon.vue?");

/***/ }),

/***/ "./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css&":
/*!*************************************************************************************************!*
  !*** ./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_style_index_0_id_34486628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=style&index=0&id=34486628&scoped=true&lang=css&\");\n\n\n//# sourceURL=webpack://gamingit/./src/components/games/Simon.vue?");

/***/ }),

/***/ "./src/components/games/Simon.vue?vue&type=template&id=34486628&scoped=true&":
/*!***********************************************************************************!*
  !*** ./src/components/games/Simon.vue?vue&type=template&id=34486628&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_template_id_34486628_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n/* harmony export */   \"staticRenderFns\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_template_id_34486628_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Simon_vue_vue_type_template_id_34486628_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Simon.vue?vue&type=template&id=34486628&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=template&id=34486628&scoped=true&\");\n\n\n//# sourceURL=webpack://gamingit/./src/components/games/Simon.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=template&id=34486628&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/games/Simon.vue?vue&type=template&id=34486628&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render,\n/* harmony export */   \"staticRenderFns\": () => /* binding */ staticRenderFns\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container\" }, [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\"div\", { attrs: { id: \"app\" } }, [\n      _c(\"div\", { staticClass: \"col-md-6 col-md-offset-3\" }, [\n        _c(\"div\", { staticClass: \"text-center well game\" }, [\n          _c(\"div\", [\n            _c(\"button\", {\n              staticClass: \"btn btn-danger mybutton\",\n              attrs: {\n                id: \"red\",\n                type: \"button\",\n                disabled: _vm.canPress === false\n              },\n              on: {\n                click: function($event) {\n                  return _vm.addInput(1)\n                }\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"button\", {\n              staticClass: \"btn btn-primary mybutton\",\n              attrs: {\n                id: \"blue\",\n                type: \"button\",\n                disabled: _vm.canPress === false\n              },\n              on: {\n                click: function($event) {\n                  return _vm.addInput(2)\n                }\n              }\n            })\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", [\n            _c(\"button\", {\n              staticClass: \"btn btn-success mybutton\",\n              attrs: {\n                id: \"green\",\n                type: \"button\",\n                disabled: _vm.canPress === false\n              },\n              on: {\n                click: function($event) {\n                  return _vm.addInput(3)\n                }\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"button\", {\n              staticClass: \"btn btn-warning mybutton\",\n              attrs: {\n                id: \"yellow\",\n                type: \"button\",\n                disabled: _vm.canPress === false\n              },\n              on: {\n                click: function($event) {\n                  return _vm.addInput(4)\n                }\n              }\n            })\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"well\" }, [\n            _c(\"div\", { staticClass: \"output\" }, [\n              _c(\"h3\", [_vm._v(_vm._s(_vm.output))])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"text-center\" }, [\n            _c(\"div\", { staticClass: \"btn-group\" }, [\n              _c(\n                \"button\",\n                {\n                  staticClass: \"btn\",\n                  attrs: { disabled: _vm.started == true },\n                  on: { click: _vm.start }\n                },\n                [_vm._v(\"Start\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"button\",\n                {\n                  staticClass: \"btn btn-danger\",\n                  attrs: { id: \"strictbt\" },\n                  on: { click: _vm.turnStrict }\n                },\n                [_vm._v(\"Strict\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"button\",\n                {\n                  staticClass: \"btn\",\n                  attrs: { disabled: _vm.canPress === false },\n                  on: { click: _vm.reset }\n                },\n                [_vm._v(\"Reset\")]\n              )\n            ]),\n            _vm._v(\" \"),\n            _vm._m(1)\n          ])\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"header text-center\" }, [\n      _c(\"h1\", [_vm._v(\"SIMON GAME\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"p\", { staticClass: \"author\" }, [\n      _c(\"br\"),\n      _vm._v(\"by \"),\n      _c(\"a\", { attrs: { href: \"http://robertsonlima.com\" } }, [\n        _vm._v(\"All Rights to Robertson Lima\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://gamingit/./src/components/games/Simon.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);