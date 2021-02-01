/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgamingit"] = self["webpackChunkgamingit"] || []).push([["src_components_Ranking_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: \"Rankings\",\n  data: function data() {\n    return {\n      games: [],\n      tictactoe: [] //Paula te va a cambiar el nombre en el futuro :)\n\n    };\n  },\n  // updated: function () {\n  //     console.log(\"activated\")\n  //     allGamesRankings();\n  // },\n  created: function created() {\n    var _this = this;\n\n    fetch(\"/games/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var _iterator = _createForOfIteratorHelper(data.response[0].allGames),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var x = _step.value;\n\n          _this.games.push(x.name);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    }); // Bucle aquí para hacer un get de cada juego\n\n    fetch(\"/rankings/TicTacToe\").then(function (res) {\n      if (res.status != 200) // Si recibe 404 es que no hay datos de ese ranking\n        return res.status;\n      return res.json();\n    }).then(function (data) {\n      if (data == 404) console.log(\"No hay ranking de este juego\");else {\n        console.log(data);\n\n        var _iterator2 = _createForOfIteratorHelper(data.response[0].ranking),\n            _step2;\n\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var x = _step2.value;\n\n            _this.tictactoe.push(x);\n\n            console.log(x.score + x.nickname);\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  },\n  methods: {\n    allGamesRankings: function allGamesRankings() {\n      // Para cada juego llamar a crear tabla:\n      // this.getAllGames();\n      this.gameRanking(\"TicTacToe\"); // Hay que rellenar en algún momento mongo con los datos de cada juego\n    },\n    gameRanking: function gameRanking(game) {\n      var gamesRankings = document.getElementById(\"gamesRankings\");\n      var table = document.createElement(\"table\");\n      var tableHead = document.createElement(\"thead\");\n      var tableBody = document.createElement(\"tbody\");\n      var head = [\"position\", \"nickname\", \"score\", \"time\"];\n      var row = document.createElement(\"tr\");\n\n      for (var _i = 0, _head = head; _i < _head.length; _i++) {\n        var x = _head[_i];\n        var cell = document.createElement(\"td\");\n        var text = document.createTextNode(x.toUpperCase());\n        cell.appendChild(text);\n        row.appendChild(cell);\n      }\n\n      tableHead.appendChild(row);\n      console.log(this.tictactoe[0][\"nickname\"]);\n\n      for (var i = 0; i < this.numberOfRows(game); i++) {\n        row = document.createElement(\"tr\");\n\n        var _iterator3 = _createForOfIteratorHelper(head),\n            _step3;\n\n        try {\n          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n            var j = _step3.value;\n\n            var _cell = document.createElement(\"td\");\n\n            var content = void 0;\n\n            switch (j) {\n              case \"position\":\n                content = i + 1;\n                break;\n\n              case \"nickname\":\n                content = this.tictactoe[i][\"nickname\"];\n                break;\n\n              case \"score\":\n                content = this.tictactoe[i][\"score\"];\n                break;\n\n              case \"time\":\n                content = this.tictactoe[i][\"time\"];\n            }\n\n            var _text = document.createTextNode(content);\n\n            _cell.appendChild(_text);\n\n            row.appendChild(_cell);\n          }\n        } catch (err) {\n          _iterator3.e(err);\n        } finally {\n          _iterator3.f();\n        }\n\n        tableBody.appendChild(row);\n      }\n\n      table.appendChild(tableHead);\n      table.appendChild(tableBody);\n      gamesRankings.appendChild(table);\n    },\n    numberOfRows: function numberOfRows(game) {\n      if (this.tictactoe.length < 10) return this.tictactoe.length;else return 10;\n    }\n  }\n});\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.container[data-v-0804f336] {\\n  height: 1000px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_id_0804f336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css&\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_id_0804f336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_id_0804f336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/Ranking.vue":
/*!************************************!*
  !*** ./src/components/Ranking.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Ranking_vue_vue_type_template_id_0804f336_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ranking.vue?vue&type=template&id=0804f336&scoped=true& */ \"./src/components/Ranking.vue?vue&type=template&id=0804f336&scoped=true&\");\n/* harmony import */ var _Ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ranking.vue?vue&type=script&lang=js& */ \"./src/components/Ranking.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _Ranking_vue_vue_type_style_index_0_id_0804f336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css& */ \"./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(\n  _Ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _Ranking_vue_vue_type_template_id_0804f336_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Ranking_vue_vue_type_template_id_0804f336_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"0804f336\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Ranking.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?");

/***/ }),

/***/ "./src/components/Ranking.vue?vue&type=script&lang=js&":
/*!*************************************************************!*
  !*** ./src/components/Ranking.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ranking.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?");

/***/ }),

/***/ "./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css&":
/*!*********************************************************************************************!*
  !*** ./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_id_0804f336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css&\");\n\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?");

/***/ }),

/***/ "./src/components/Ranking.vue?vue&type=template&id=0804f336&scoped=true&":
/*!*******************************************************************************!*
  !*** ./src/components/Ranking.vue?vue&type=template&id=0804f336&scoped=true& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_template_id_0804f336_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n/* harmony export */   \"staticRenderFns\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_template_id_0804f336_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_template_id_0804f336_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ranking.vue?vue&type=template&id=0804f336&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=template&id=0804f336&scoped=true&\");\n\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=template&id=0804f336&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=template&id=0804f336&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render,\n/* harmony export */   \"staticRenderFns\": () => /* binding */ staticRenderFns\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"container\" },\n    [\n      _vm.$store.getters.user != null\n        ? [\n            _c(\"h1\", [_vm._v(\" Rankings por usuario \")]),\n            _vm._v(\" \"),\n            _c(\"h3\", [\n              _vm._v(\" Holi \" + _vm._s(_vm.$store.getters.user.name) + \" \")\n            ])\n          ]\n        : _vm._e(),\n      _vm._v(\" \"),\n      _c(\"hr\"),\n      _vm._v(\" \"),\n      _c(\"h1\", [_vm._v(\" Rankings por juego \")]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"gamesRankings\" } }),\n      _vm._v(\" \"),\n      _c(\"button\", { on: { click: _vm.allGamesRankings } }, [\n        _vm._v(\" Mostrar rankings \")\n      ])\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);