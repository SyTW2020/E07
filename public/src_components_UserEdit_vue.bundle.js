/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgamingit"] = self["webpackChunkgamingit"] || []).push([["src_components_UserEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar User = function User(email, nickname, name, photo, birthdate, description, password) {\n  _classCallCheck(this, User);\n\n  this.email = '';\n  this.nickname = '';\n  this.name = '';\n  this.photo = '';\n  this.birthdate = null;\n  this.description = '';\n  this.password = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: \"User\",\n  data: function data() {\n    return {\n      user: new User()\n    };\n  },\n  methods: {\n    modifyUser: function modifyUser() {},\n    deleteUser: function deleteUser() {\n      var _this = this;\n\n      fetch(\"/users/\".concat(this.$store.getters.user), {\n        method: \"DELETE\",\n        headers: {\n          \"Content-type\": \"application/json\",\n          \"x-access-token\": this.$store.getters.token\n        }\n      }).then(function (res) {\n        if (res.status == 404) return res.status;\n        return res.json();\n      }).then(function (data) {\n        if (data == 404) window.alert(\"Operación no válida\");else {\n          window.alert(\"Usuario eliminado\");\n\n          _this.$store.dispatch('logOutAction');\n\n          _this.$router.push(\"/\");\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://gamingit/./src/components/UserEdit.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.bodyUser[data-v-5987ce25] {\\n  height: 100%;\\n  color: #dedede;\\n\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-align: left;\\n\\n  /*  Image  */\\n  background-image: url(\\\"https://www.xtrafondos.com/wallpapers/paisaje-retro-de-atardecer-5436.jpg\\\");\\n  background-position: center;\\n  background-size: cover;\\n}\\n.containerUser[data-v-5987ce25] {\\n    width: 700px;\\n    height: 900px;\\n    background-color: red;\\n}\\n.formModifyUser[data-v-5987ce25] {\\n  display: flex;\\n  flex-direction: column;\\n\\n  max-width: 330px;\\n  padding: 20px;\\n  margin: auto;\\n\\n  border: 4px outset #f61067;\\n  background-color: #1c221f;\\n}\\n.formModifyUser h1[data-v-5987ce25] {\\n  margin: auto;\\n}\\n.sr-only[data-v-5987ce25]{\\n  color: #dedede; \\n  padding: 10px; /* Cambiar por responsive */\\n  margin: auto;\\n}\\n.btn-funky-moon[data-v-5987ce25] {\\n  background: #a770ef;\\n  background: -webkit-linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);\\n  background: linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);\\n  color: #dedede;\\n  border: 3px solid #eee;\\n  border-radius: 35px;\\n  padding: 10px; /* Cambiar por responsive */\\n  margin: auto;\\n}\\n.btn-danger[data-v-5987ce25] {\\n  background: #a770ef;\\n  background: -webkit-linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);\\n  background: linear-gradient(145deg, #fdb99b, #fc6767, #ec008c);\\n  color: #dedede;\\n  border: 3px solid #eee;\\n  border-radius: 35px;\\n  padding: 10px; /* Cambiar por responsive */\\n  margin: auto;\\n}\\n.user-photo[data-v-5987ce25] {\\n    margin: auto;\\n}\\n.form-control[data-v-5987ce25]::-webkit-input-placeholder {\\n  font-family: serif;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gamingit/./src/components/UserEdit.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_style_index_0_id_5987ce25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css&\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_style_index_0_id_5987ce25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_style_index_0_id_5987ce25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://gamingit/./src/components/UserEdit.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/UserEdit.vue":
/*!*************************************!*
  !*** ./src/components/UserEdit.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _UserEdit_vue_vue_type_template_id_5987ce25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=template&id=5987ce25&scoped=true& */ \"./src/components/UserEdit.vue?vue&type=template&id=5987ce25&scoped=true&\");\n/* harmony import */ var _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=script&lang=js& */ \"./src/components/UserEdit.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _UserEdit_vue_vue_type_style_index_0_id_5987ce25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css& */ \"./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(\n  _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _UserEdit_vue_vue_type_template_id_5987ce25_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _UserEdit_vue_vue_type_template_id_5987ce25_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"5987ce25\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/UserEdit.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://gamingit/./src/components/UserEdit.vue?");

/***/ }),

/***/ "./src/components/UserEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************!*
  !*** ./src/components/UserEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://gamingit/./src/components/UserEdit.vue?");

/***/ }),

/***/ "./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css&":
/*!**********************************************************************************************!*
  !*** ./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_style_index_0_id_5987ce25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=style&index=0&id=5987ce25&scoped=true&lang=css&\");\n\n\n//# sourceURL=webpack://gamingit/./src/components/UserEdit.vue?");

/***/ }),

/***/ "./src/components/UserEdit.vue?vue&type=template&id=5987ce25&scoped=true&":
/*!********************************************************************************!*
  !*** ./src/components/UserEdit.vue?vue&type=template&id=5987ce25&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_5987ce25_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n/* harmony export */   \"staticRenderFns\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_5987ce25_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_5987ce25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=template&id=5987ce25&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=template&id=5987ce25&scoped=true&\");\n\n\n//# sourceURL=webpack://gamingit/./src/components/UserEdit.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=template&id=5987ce25&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UserEdit.vue?vue&type=template&id=5987ce25&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render,\n/* harmony export */   \"staticRenderFns\": () => /* binding */ staticRenderFns\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"bodyUser\" }, [\n    _c(\"form\", { staticClass: \"formModifyUser\" }, [\n      _c(\"h1\", { staticClass: \"h3 mb-3 font-weight-normal\" }, [\n        _vm._v(\" Editar perfil \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"img\", {\n        staticClass: \"mb-4 user-photo\",\n        attrs: { alt: \"\", width: \"96\", height: \"72\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"label\", { staticClass: \"sr-only\" }, [_vm._v(\" Nickname: \")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.user.nickname,\n            expression: \"user.nickname\"\n          }\n        ],\n        staticClass: \"form-control\",\n        attrs: {\n          type: \"text\",\n          id: \"inputNickname\",\n          placeholder: \"Nickname\",\n          required: \"\",\n          autofocus: \"\"\n        },\n        domProps: { value: _vm.user.nickname },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.user, \"nickname\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"label\", { staticClass: \"sr-only\" }, [_vm._v(\" Email: \")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.user.email,\n            expression: \"user.email\"\n          }\n        ],\n        staticClass: \"form-control\",\n        attrs: {\n          type: \"email\",\n          id: \"inputEmail\",\n          placeholder: \"Email\",\n          required: \"\",\n          autofocus: \"\"\n        },\n        domProps: { value: _vm.user.email },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.user, \"email\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"label\", { staticClass: \"sr-only\" }, [\n        _vm._v(\" Introduce tu nombre: \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.user.name,\n            expression: \"user.name\"\n          }\n        ],\n        staticClass: \"form-control\",\n        attrs: { type: \"text\", id: \"inputName\", placeholder: \"Nombre\" },\n        domProps: { value: _vm.user.name },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.user, \"name\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"label\", { staticClass: \"sr-only\" }, [_vm._v(\" Introduce tu foto: \")]),\n      _vm._v(\" \"),\n      _c(\"input\", { attrs: { type: \"file\" } }),\n      _vm._v(\" \"),\n      _c(\"label\", { staticClass: \"sr-only\" }, [\n        _vm._v(\" Introduce tu fecha de nacimiento: \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        staticClass: \"form-control\",\n        attrs: { type: \"date\", value: \"1993-08-19\", id: \"inputDate\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"label\", { staticClass: \"sr-only\" }, [\n        _vm._v(\" Introduce una descripción: \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"textarea\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.user.description,\n            expression: \"user.description\"\n          }\n        ],\n        staticClass: \"form-control\",\n        attrs: { type: \"text\", id: \"inputDescription\", placeholder: \"Nombre\" },\n        domProps: { value: _vm.user.description },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.user, \"description\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          staticClass: \"btn btn-funky-moon\",\n          attrs: { type: \"button\" },\n          on: { click: _vm.modifyUser }\n        },\n        [_vm._v(\" Guardar \")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          staticClass: \"btn btn-danger\",\n          attrs: { type: \"button\" },\n          on: { click: _vm.deleteUser }\n        },\n        [_vm._v(\" Eliminar cuenta \")]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://gamingit/./src/components/UserEdit.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);