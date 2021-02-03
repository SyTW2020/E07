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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: \"Rankings\",\n  data: function data() {\n    return {\n      gamesName: [],\n      gamesRankings: [],\n      userGamesRankings: [],\n      headerUser: [\"position\", \"score\", \"time\"],\n      headerGames: [\"position\", \"nickname\", \"score\", \"time\"],\n      userRankingRows: null,\n      gameRankingRows: null\n    };\n  },\n  created: function () {\n    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var x, _x;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return this.getGames();\n\n            case 2:\n              _context.next = 4;\n              return this.getRankingsByGame();\n\n            case 4:\n              for (x in this.gamesRankings) {\n                this.ranking(this.gamesName[x], x, false);\n              } // RANKINGS POR USUARIO\n\n\n              if (!(this.$store.getters.user != null)) {\n                _context.next = 9;\n                break;\n              }\n\n              _context.next = 8;\n              return this.getRankingsByUser();\n\n            case 8:\n              for (_x in this.userGamesRankings) {\n                this.ranking(this.gamesName[_x], _x, true);\n              }\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function created() {\n      return _created.apply(this, arguments);\n    }\n\n    return created;\n  }(),\n  methods: {\n    getGames: function getGames() {\n      var _this = this;\n\n      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return fetch(\"/games/\").then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  var _iterator = _createForOfIteratorHelper(data.response[0].allGames),\n                      _step;\n\n                  try {\n                    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                      var x = _step.value;\n\n                      _this.gamesName.push(x.name);\n                    }\n                  } catch (err) {\n                    _iterator.e(err);\n                  } finally {\n                    _iterator.f();\n                  }\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    getRankingsByGame: function getRankingsByGame() {\n      var _this2 = this;\n\n      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        var _loop, y;\n\n        return regeneratorRuntime.wrap(function _callee3$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(y) {\n                  return regeneratorRuntime.wrap(function _loop$(_context3) {\n                    while (1) {\n                      switch (_context3.prev = _context3.next) {\n                        case 0:\n                          _this2.gamesRankings.push([]);\n\n                          _context3.next = 3;\n                          return fetch(\"/rankings/\".concat(_this2.gamesName[y])).then(function (res) {\n                            if (res.status != 200) // Si recibe 404 es que no hay datos de ese ranking\n                              return res.status;\n                            return res.json();\n                          }).then(function (data) {\n                            if (data == 404) console.log(\"No hay ranking de este juego\");else {\n                              var _iterator2 = _createForOfIteratorHelper(data.response[0].ranking),\n                                  _step2;\n\n                              try {\n                                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n                                  var x = _step2.value;\n\n                                  _this2.gamesRankings[y].push(x);\n                                }\n                              } catch (err) {\n                                _iterator2.e(err);\n                              } finally {\n                                _iterator2.f();\n                              }\n                            }\n                          })[\"catch\"](function (err) {\n                            return console.log(err);\n                          });\n\n                        case 3:\n                        case \"end\":\n                          return _context3.stop();\n                      }\n                    }\n                  }, _loop);\n                });\n                _context4.t0 = regeneratorRuntime.keys(_this2.gamesName);\n\n              case 2:\n                if ((_context4.t1 = _context4.t0()).done) {\n                  _context4.next = 7;\n                  break;\n                }\n\n                y = _context4.t1.value;\n                return _context4.delegateYield(_loop(y), \"t2\", 5);\n\n              case 5:\n                _context4.next = 2;\n                break;\n\n              case 7:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    getRankingsByUser: function getRankingsByUser() {\n      var _this3 = this;\n\n      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n        var _loop2, y;\n\n        return regeneratorRuntime.wrap(function _callee4$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(y) {\n                  return regeneratorRuntime.wrap(function _loop2$(_context5) {\n                    while (1) {\n                      switch (_context5.prev = _context5.next) {\n                        case 0:\n                          _this3.userGamesRankings.push([]);\n\n                          _context5.next = 3;\n                          return fetch(\"/rankings/\".concat(_this3.$store.getters.user.nickname, \"&\").concat(_this3.gamesName[y])).then(function (res) {\n                            if (res.status != 200) // Si recibe 404 es que no hay datos de ese ranking\n                              return res.status;\n                            return res.json();\n                          }).then(function (data) {\n                            if (data == 404) console.log(\"No hay ranking de este juego\");else {\n                              var _iterator3 = _createForOfIteratorHelper(data.response[0].ranking),\n                                  _step3;\n\n                              try {\n                                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n                                  var x = _step3.value;\n\n                                  _this3.userGamesRankings[y].push(x);\n                                }\n                              } catch (err) {\n                                _iterator3.e(err);\n                              } finally {\n                                _iterator3.f();\n                              }\n                            }\n                          })[\"catch\"](function (err) {\n                            return console.log(err);\n                          });\n\n                        case 3:\n                        case \"end\":\n                          return _context5.stop();\n                      }\n                    }\n                  }, _loop2);\n                });\n                _context6.t0 = regeneratorRuntime.keys(_this3.gamesName);\n\n              case 2:\n                if ((_context6.t1 = _context6.t0()).done) {\n                  _context6.next = 7;\n                  break;\n                }\n\n                y = _context6.t1.value;\n                return _context6.delegateYield(_loop2(y), \"t2\", 5);\n\n              case 5:\n                _context6.next = 2;\n                break;\n\n              case 7:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee4);\n      }))();\n    },\n    ranking: function ranking(name, index) {\n      var user = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      if (user) document.querySelector(\".userRankingContainer\").style.display = \"block\";\n\n      if (user && this.userGamesRankings[index].length == 0) {\n        document.getElementById(\"userRankings\" + index).style.display = \"none\";\n      } else {\n        var tableBody = !user ? document.getElementById(\"tbodyGame\" + index) : document.getElementById(\"tbodyUser\" + index);\n        var numberOfRows = !user ? this.numberOfGameRankingRows(index) : this.numberOfUserRankingRows(index);\n        var head = !user ? this.headerGames : this.headerUser;\n\n        for (var i = 0; i < numberOfRows; i++) {\n          var row = document.createElement(\"tr\");\n          row.style = \"\\n            display:flex;\\n            flex-direction:row;\\n            width: 100%;\\n            align-content: center;\\n          \";\n\n          var _iterator4 = _createForOfIteratorHelper(head),\n              _step4;\n\n          try {\n            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n              var j = _step4.value;\n              var cell = document.createElement(\"td\");\n              cell.style = \"\\n              background: #097694;\\n              border: outset #097694 3px;\\n              align-content: center;\\n              width: 100%;\\n              font-family: 'Bungee Inline', cursive;\\n              font-size: 13px;\\n              text-align: center;\\n            \";\n              var content = void 0;\n\n              if (!user) {\n                if (j === \"position\") content = i + 1;else if (j === \"time\") content = this.getTime(this.gamesRankings[index][i][j]);else content = this.gamesRankings[index][i][j];\n              } else {\n                if (j === \"position\") content = i + 1;else if (j === \"time\") content = this.getTime(this.userGamesRankings[index][i][j]);else content = this.userGamesRankings[index][i][j];\n              }\n\n              var text = document.createTextNode(content);\n              cell.appendChild(text);\n              row.appendChild(cell);\n            }\n          } catch (err) {\n            _iterator4.e(err);\n          } finally {\n            _iterator4.f();\n          }\n\n          tableBody.appendChild(row);\n        }\n      }\n    },\n    numberOfGameRankingRows: function numberOfGameRankingRows(index) {\n      return this.gamesRankings[index].length < 10 ? this.gamesRankings[index].length : 10;\n    },\n    numberOfUserRankingRows: function numberOfUserRankingRows(index) {\n      return this.userGamesRankings[index].length < 5 ? this.userGamesRankings[index].length : 5;\n    },\n    getTime: function getTime(time) {\n      return time.slice(11, 23);\n    }\n  }\n});\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Ranking.vue?vue&type=style&index=0&id=0804f336&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.flex[data-v-0804f336] {\\n  display: flex;\\n  justify-content: center;\\n}\\n.container[data-v-0804f336] {\\n  width: 100%;\\n  padding-bottom:5%;\\n  background-image: url(https://wallpapercave.com/wp/wp4809783.jpg);\\n  background-size: cover;\\n  background-position: right right;\\n}\\n.title[data-v-0804f336] {\\n  font-family: 'Bungee Inline', cursive;\\n  text-align: center;\\n  color: white;\\n  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);\\n}\\n.boxRankings[data-v-0804f336] {\\n  width: 85%;\\n  background-color: rgb(0, 0, 0, 0.8);\\n  height: 90%;\\n  display: flex;\\n  align-content: center;\\n  flex-direction:row;\\n}\\n.userRankingContainer[data-v-0804f336] {\\n  margin:1%;\\n  width: 50%;\\n  min-height: 200px;\\n  display: none;\\n}\\n.gamesRankingContainer[data-v-0804f336] {\\n  width: 50%;\\n  min-height: 200px;\\n  margin: 1%;\\n}\\n.table[data-v-0804f336] {\\n  display:flex;\\n  width: 100%;\\n  flex-direction: column;\\n}\\n.gameTitle[data-v-0804f336] {\\n  font-family: 'Bungee Inline', cursive;\\n  color: white;\\n  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);\\n}\\n.rowContainer[data-v-0804f336], .row[data-v-0804f336] {\\n  display: flex;\\n  flex-direction:row;\\n  width: 100%;\\n}\\n.cell[data-v-0804f336] {\\n  background: #04354e;\\n  border: outset #097694 3px;\\n  align-content: center;\\n  width:100%;\\n  font-family: 'Bungee Inline', cursive;\\n  font-size: 15px;\\n  text-align: center;\\n  color: white;\\n}\\n@media screen and (max-width: 1000px) {\\n.container[data-v-0804f336] {\\n    background-size: cover;\\n}\\n.boxRankings[data-v-0804f336]{\\n    flex-direction: column;\\n}\\n.userRankingContainer[data-v-0804f336], .gamesRankingContainer[data-v-0804f336] {\\n    width: 98%;\\n    margin-bottom: 7%;\\n}\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render,\n/* harmony export */   \"staticRenderFns\": () => /* binding */ staticRenderFns\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container flex\" }, [\n    _c(\"h1\", { staticClass: \"title\" }, [_vm._v(\" RANKINGS \")]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"boxRankings flex\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"userRankingContainer\" },\n        [\n          _vm.$store.getters.user != null\n            ? [\n                _c(\"h2\", { staticClass: \"title\" }, [\n                  _vm._v(\n                    \" Tus rankings \" +\n                      _vm._s(_vm.$store.getters.user.name) +\n                      \" \"\n                  )\n                ]),\n                _vm._v(\" \"),\n                _vm._l(_vm.gamesName, function(n, i) {\n                  return _c(\n                    \"div\",\n                    {\n                      key: i,\n                      staticClass: \"Tcontainer\",\n                      attrs: { id: \"userRankings\" + i }\n                    },\n                    [\n                      _c(\"h3\", { staticClass: \"gameTitle\" }, [\n                        _vm._v(_vm._s(_vm.gamesName[i]) + \" \")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\n                        \"table\",\n                        {\n                          staticClass: \"table\",\n                          attrs: { id: \"tableUserGame\" + i }\n                        },\n                        [\n                          _c(\"thead\", { staticClass: \"thead\" }, [\n                            _c(\n                              \"tr\",\n                              { staticClass: \"row\" },\n                              _vm._l(_vm.headerUser.length, function(x) {\n                                return _c(\n                                  \"div\",\n                                  { key: x, staticClass: \"rowContainer\" },\n                                  [\n                                    _c(\"td\", { staticClass: \"cell\" }, [\n                                      _vm._v(\n                                        \" \" +\n                                          _vm._s(_vm.headerUser[x - 1]) +\n                                          \" \"\n                                      )\n                                    ])\n                                  ]\n                                )\n                              }),\n                              0\n                            )\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"tbody\", {\n                            staticClass: \"tbody\",\n                            attrs: { id: \"tbodyUser\" + i }\n                          })\n                        ]\n                      )\n                    ]\n                  )\n                })\n              ]\n            : _vm._e()\n        ],\n        2\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"gamesRankingContainer\" },\n        [\n          _c(\"h2\", { staticClass: \"title\" }, [_vm._v(\" Rankings por juego \")]),\n          _vm._v(\" \"),\n          _vm._l(_vm.gamesName, function(n, i) {\n            return _c(\n              \"div\",\n              {\n                key: i,\n                staticClass: \"Tcontainer\",\n                attrs: { id: \"gamesRankings\" }\n              },\n              [\n                _c(\"h3\", { staticClass: \"gameTitle\" }, [\n                  _vm._v(\" \" + _vm._s(_vm.gamesName[i]) + \" \")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"table\",\n                  { staticClass: \"table\", attrs: { id: \"tableGame\" + i } },\n                  [\n                    _c(\"thead\", { staticClass: \"thead\" }, [\n                      _c(\n                        \"tr\",\n                        { staticClass: \"row\" },\n                        _vm._l(_vm.headerGames.length, function(x) {\n                          return _c(\n                            \"div\",\n                            { key: x, staticClass: \"rowContainer\" },\n                            [\n                              _c(\"td\", { staticClass: \"cell\" }, [\n                                _vm._v(_vm._s(_vm.headerGames[x - 1]) + \" \")\n                              ])\n                            ]\n                          )\n                        }),\n                        0\n                      )\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"tbody\", {\n                      staticClass: \"tbody\",\n                      attrs: { id: \"tbodyGame\" + i }\n                    })\n                  ]\n                )\n              ]\n            )\n          })\n        ],\n        2\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://gamingit/./src/components/Ranking.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);