/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_components_SignIn_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar User = function User(nickname, password) {\n  _classCallCheck(this, User);\n\n  this.nickname = nickname;\n  this.password = password;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: \"SignIn\",\n  data: function data() {\n    return {\n      user: new User()\n    };\n  },\n  methods: {\n    // Pruebas\n    userSignIn: function userSignIn() {\n      var _this = this;\n\n      // Accedemos a la API\n      fetch(\"/users/\".concat(this.user.nickname, \"&\").concat(this.user.password)).then(function (res) {\n        if (res.status == 400) return 400;else return res.json();\n      }).then(function (data) {\n        if (data == 400) window.alert('Usuario o contraseña incorrectos');else {\n          _this.$store.dispatch('signInAction', {\n            token: data.response[0].token\n          });\n\n          _this.$router.push('/games');\n        }\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    } // fetch(`/users/${this.user.nickname}&${this.user.password}`)\n    //     .then(res => { \n    //       return res.json()\n    //     })\n    //     .then(data => console.log(data.response[0].token));\n\n  }\n});\n\n//# sourceURL=webpack://frontend/./src/components/SignIn.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.bodySignIn[data-v-fb473e1c] {\\n  height: 100%;\\n  color: #dedede;\\n\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-align: left;\\n\\n  /*  Image  */\\n  background-image: url(\\\"https://www.xtrafondos.com/wallpapers/paisaje-retro-de-atardecer-5436.jpg\\\");\\n  background-position: center;\\n  background-size: cover;\\n}\\n.formSignIn[data-v-fb473e1c] {\\n  display: flex;\\n  flex-direction: column;\\n\\n  max-width: 330px;\\n  padding: 20px;\\n  margin: auto;\\n\\n  border: 4px outset #f61067;\\n  background-color: #1c221f;\\n}\\n.formSignIn .form-control[data-v-fb473e1c] {\\n  padding: 10px;\\n  font-size: 16px;\\n}\\n.btn-funky-moon[data-v-fb473e1c] {\\n  background: #a770ef;\\n  background: -webkit-linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);\\n  background: linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);\\n  color: #dedede;\\n  border: 3px solid #eee;\\n  border-radius: 35px;\\n  padding: 10px; /* Cambiar por responsive */\\n  margin: auto;\\n}\\n.btn-link[data-v-fb473e1c], #signinimg[data-v-fb473e1c], #copyright[data-v-fb473e1c] {\\n  color: #dedede; \\n  padding: 10px; /* Cambiar por responsive */\\n  margin: auto;\\n}\\n.copyright[data-v-fb473e1c] {\\n  color: #e8e8e8;\\n  font-size: 12px;\\n}\\n.form-control[data-v-fb473e1c]::-webkit-input-placeholder {\\n  font-family: serif;\\n  color: #dedede; \\n  padding: 10px; /* Cambiar por responsive */\\n  margin: auto;\\n}\\n.copyright[data-v-fb473e1c] {\\n  color: #e8e8e8;\\n  font-size: 12px;\\n}\\n.form-control[data-v-fb473e1c]::-webkit-input-placeholder {\\n  font-family: serif;\\n  color: #dedede; \\n  padding: 10px; /* Cambiar por responsive */\\n  margin: auto;\\n}\\n.copyright[data-v-fb473e1c] {\\n  color: #e8e8e8;\\n  font-size: 12px;\\n}\\n.form-control[data-v-fb473e1c]::-webkit-input-placeholder {\\n  font-family: serif;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend/./src/components/SignIn.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_style_index_0_id_fb473e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css&\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_style_index_0_id_fb473e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_style_index_0_id_fb473e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://frontend/./src/components/SignIn.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/SignIn.vue":
/*!***********************************!*
  !*** ./src/components/SignIn.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _SignIn_vue_vue_type_template_id_fb473e1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn.vue?vue&type=template&id=fb473e1c&scoped=true& */ \"./src/components/SignIn.vue?vue&type=template&id=fb473e1c&scoped=true&\");\n/* harmony import */ var _SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn.vue?vue&type=script&lang=js& */ \"./src/components/SignIn.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _SignIn_vue_vue_type_style_index_0_id_fb473e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css& */ \"./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(\n  _SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _SignIn_vue_vue_type_template_id_fb473e1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _SignIn_vue_vue_type_template_id_fb473e1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"fb473e1c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/SignIn.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://frontend/./src/components/SignIn.vue?");

/***/ }),

/***/ "./src/components/SignIn.vue?vue&type=script&lang=js&":
/*!************************************************************!*
  !*** ./src/components/SignIn.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignIn.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://frontend/./src/components/SignIn.vue?");

/***/ }),

/***/ "./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css&":
/*!********************************************************************************************!*
  !*** ./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_style_index_0_id_fb473e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=style&index=0&id=fb473e1c&scoped=true&lang=css&\");\n\n\n//# sourceURL=webpack://frontend/./src/components/SignIn.vue?");

/***/ }),

/***/ "./src/components/SignIn.vue?vue&type=template&id=fb473e1c&scoped=true&":
/*!******************************************************************************!*
  !*** ./src/components/SignIn.vue?vue&type=template&id=fb473e1c&scoped=true& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_fb473e1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n/* harmony export */   \"staticRenderFns\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_fb473e1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_fb473e1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignIn.vue?vue&type=template&id=fb473e1c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=template&id=fb473e1c&scoped=true&\");\n\n\n//# sourceURL=webpack://frontend/./src/components/SignIn.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=template&id=fb473e1c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SignIn.vue?vue&type=template&id=fb473e1c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render,\n/* harmony export */   \"staticRenderFns\": () => /* binding */ staticRenderFns\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"bodySignIn\" }, [\n    _c(\n      \"form\",\n      {\n        staticClass: \"formSignIn\",\n        on: {\n          submit: function($event) {\n            $event.preventDefault()\n            return _vm.userSignIn($event)\n          }\n        }\n      },\n      [\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"img\", {\n          attrs: {\n            id: \"signinimg\",\n            src:\n              \"https://cdn.pixabay.com/photo/2020/07/14/15/12/controller-5404616_960_720.png\",\n            width: \"96\",\n            height: \"72\"\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\"h1\", [_vm._v(\" ¡Inicia sesión Gamer! \")]),\n        _vm._v(\" \"),\n        _c(\"label\", [_vm._v(\" Introduce tu usuario: \")]),\n        _vm._v(\" \"),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.user.nickname,\n              expression: \"user.nickname\"\n            }\n          ],\n          staticClass: \"form-control\",\n          attrs: {\n            id: \"inputNickname\",\n            placeholder: \"Usuario\",\n            required: \"\",\n            autofocus: \"\"\n          },\n          domProps: { value: _vm.user.nickname },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.$set(_vm.user, \"nickname\", $event.target.value)\n            }\n          }\n        }),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"label\", [_vm._v(\" Introduce tu contraseña \")]),\n        _vm._v(\" \"),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.user.password,\n              expression: \"user.password\"\n            }\n          ],\n          staticClass: \"form-control\",\n          attrs: {\n            type: \"password\",\n            id: \"inputPassword\",\n            placeholder: \"Contraseña\",\n            required: \"\"\n          },\n          domProps: { value: _vm.user.password },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.$set(_vm.user, \"password\", $event.target.value)\n            }\n          }\n        }),\n        _c(\"br\"),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          {\n            staticClass: \"btn-funky-moon\",\n            attrs: { type: \"submit\", id: \"submitButton\" }\n          },\n          [_vm._v(\" Inicia sesión \")]\n        ),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\n          \"router-link\",\n          { staticClass: \"btn-link\", attrs: { to: \"/signup\", type: \"button\" } },\n          [_vm._v(\" ¿Olvidaste tu contraseña? \")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"router-link\",\n          { staticClass: \"btn-link\", attrs: { to: \"/signup\", type: \"button\" } },\n          [_vm._v(\" Regístrate \")]\n        ),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"copyright\", attrs: { id: \"copyright\" } }, [\n          _vm._v(\" © Gaming It 2020 \")\n        ])\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://frontend/./src/components/SignIn.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);