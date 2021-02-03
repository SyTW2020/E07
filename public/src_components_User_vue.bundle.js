/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgamingit"] = self["webpackChunkgamingit"] || []).push([["src_components_User_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_avatares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/avatares */ \"./src/assets/avatares.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: \"User\",\n  components: {\n    InputText: _utils__WEBPACK_IMPORTED_MODULE_0__.InputText,\n    InlineMessage: _utils__WEBPACK_IMPORTED_MODULE_0__.InlineMessage,\n    InputMask: _utils__WEBPACK_IMPORTED_MODULE_0__.InputMask,\n    Dropdown: _utils__WEBPACK_IMPORTED_MODULE_0__.Dropdown,\n    Textarea: _utils__WEBPACK_IMPORTED_MODULE_0__.Textarea,\n    Button: _utils__WEBPACK_IMPORTED_MODULE_0__.Button,\n    OverlayPanel: _utils__WEBPACK_IMPORTED_MODULE_0__.OverlayPanel\n  },\n  data: function data() {\n    return {\n      user: this.$store.getters.user,\n      prevNickname: null,\n      avatars: _assets_avatares__WEBPACK_IMPORTED_MODULE_2__\n    };\n  },\n  created: function created() {\n    this.prevNickname = this.$store.getters.user.nickname;\n  },\n  methods: {\n    getUrl: function getUrl(index) {\n      return this.avatars[index];\n    },\n    modifyUser: function modifyUser() {\n      var _this = this;\n\n      fetch(\"/users/\".concat(this.prevNickname), {\n        method: \"PUT\",\n        body: JSON.stringify(this.user),\n        headers: {\n          \"Accept\": \"application/json\",\n          \"Content-type\": \"application/json\",\n          \"x-access-token\": this.$store.getters.token\n        }\n      }).then(function (res) {\n        if (res.status == 404) return res.status;\n        return res.json();\n      }).then(function (data) {\n        if (data == 404) window.alert(\"Operación no válida\");else {\n          _this.$store.dispatch('signInAction', {\n            token: _this.$store.getters.token,\n            user: data.response[0].userInformation\n          });\n\n          _this.user = _this.$store.getters.user;\n          window.alert(\"Usuario modificado\");\n        }\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    },\n    deleteUser: function deleteUser() {\n      var _this2 = this;\n\n      fetch(\"/users/\".concat(this.$store.getters.user.nickname), {\n        method: \"DELETE\",\n        headers: {\n          \"Content-type\": \"application/json\",\n          \"x-access-token\": this.$store.getters.token\n        }\n      }).then(function (res) {\n        if (res.status == 404) return res.status;\n        return res.json();\n      }).then(function (data) {\n        if (data == 404) window.alert(\"Operación no válida\");else {\n          window.alert(\"Usuario eliminado\");\n\n          _this2.$store.dispatch('logOutAction');\n\n          _this2.$router.push(\"/\");\n        }\n      });\n    },\n    deleteConfirm: function deleteConfirm() {\n      if (confirm(\"¿Estás seguro de eliminar tu cuenta?\")) this.deleteUser();\n    },\n    chooseImage: function chooseImage(event) {\n      this.$refs.op.toggle(event);\n    },\n    changeAvatar: function changeAvatar(name) {\n      this.user.photo = this.avatars[name];\n      this.modifyUser();\n      var image = document.querySelector('#userPhoto');\n      image.url = this.user.photo;\n      this.$refs.op.hide();\n    }\n  }\n});\n\n//# sourceURL=webpack://gamingit/./src/components/User.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/assets/avatares.js":
/*!********************************!*
  !*** ./src/assets/avatares.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatar1\": () => /* reexport safe */ _assets_asco_jpg__WEBPACK_IMPORTED_MODULE_0__.default,\n/* harmony export */   \"avatar2\": () => /* reexport safe */ _assets_geralt_jpg__WEBPACK_IMPORTED_MODULE_1__.default,\n/* harmony export */   \"avatar3\": () => /* reexport safe */ _assets_grinch_jpg__WEBPACK_IMPORTED_MODULE_2__.default,\n/* harmony export */   \"avatar4\": () => /* reexport safe */ _assets_stitch_jpg__WEBPACK_IMPORTED_MODULE_3__.default,\n/* harmony export */   \"avatar5\": () => /* reexport safe */ _assets_supergirl_jpg__WEBPACK_IMPORTED_MODULE_4__.default,\n/* harmony export */   \"avatar6\": () => /* reexport safe */ _assets_tarzan_jpg__WEBPACK_IMPORTED_MODULE_5__.default\n/* harmony export */ });\n/* harmony import */ var _assets_asco_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/asco.jpg */ \"./src/assets/asco.jpg\");\n/* harmony import */ var _assets_geralt_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/geralt.jpg */ \"./src/assets/geralt.jpg\");\n/* harmony import */ var _assets_grinch_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/grinch.jpg */ \"./src/assets/grinch.jpg\");\n/* harmony import */ var _assets_stitch_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/stitch.jpg */ \"./src/assets/stitch.jpg\");\n/* harmony import */ var _assets_supergirl_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/supergirl.jpg */ \"./src/assets/supergirl.jpg\");\n/* harmony import */ var _assets_tarzan_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/tarzan.jpg */ \"./src/assets/tarzan.jpg\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://gamingit/./src/assets/avatares.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.bodyUser[data-v-73968b0a] {\\n  height: 100%;\\n  color: #dedede;\\n  background-color: #111111;\\n  display: flex; \\n  font-family: 'Bungee Inline', cursive;\\n}\\n.boxUser[data-v-73968b0a] {\\n  width: 96%;\\n  height: 96%;\\n  background-image: url(\\\"https://i.pinimg.com/originals/6c/b7/10/6cb71054aa563bf9d4d56098405c40e6.jpg\\\");\\n  background-size: cover;\\n  margin: auto;\\n  margin-top: 2%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.userProfile[data-v-73968b0a] {\\n  background-color: #4F5D75;\\n  display: flex;\\n  flex-direction: column;\\n  width: 96%;\\n  height: 100%;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 20px;\\n  margin: auto;\\n}\\n.userPhoto[data-v-73968b0a] {\\n  height: 150px;\\n  width: 150px;\\n  margin: 30px auto;\\n  border-radius: 40px;\\n  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\\n  cursor: pointer;\\n  transition: 0.4s;\\n}\\n.userPhoto[data-v-73968b0a]:hover, .avatar[data-v-73968b0a]:hover {\\n  transform: scale(0.9, 0.9);\\n  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25), -5px -5px 30px 15px rgba(0, 0, 0, 0.22);\\n}\\n.boxForm[data-v-73968b0a] {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #2D3142;\\n  padding: 20px;\\n  color: #111111;\\n  border: 4px double #FA7E27;\\n}\\n.userForm[data-v-73968b0a] {\\n  display: flex;\\n  flex-direction: column;\\n  width: 70%;\\n  height: auto;\\n  padding: 20px;\\n  margin: auto;\\n  background-color: white;\\n  border-radius: 10px 10px 10px 10px;\\n  box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.26);\\n}\\n.BSave[data-v-73968b0a] {\\n  width: 60%;\\n  margin: auto;\\n}\\nh1[data-v-73968b0a] {\\n  margin: auto;\\n}\\np[data-v-73968b0a] {\\n  display: none;\\n}\\nform label[data-v-73968b0a] {\\n  margin-top: 1%;\\n}\\n.avatar[data-v-73968b0a] {\\n  width: 100px;\\n  height: 100px;\\n  border-radius: 10px;\\n  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\\n  cursor: pointer;\\n  transition: 0.4s;\\n}\\n@media screen and (min-width: 1000px) {\\n.boxUser[data-v-73968b0a]{\\n    flex-direction: row;\\n}\\n.userProfile[data-v-73968b0a] {\\n    width: 60%;\\n    margin-left: 1%;\\n}\\n.userPhoto[data-v-73968b0a] {\\n    width: 250px;\\n    height: 250px;\\n}\\n.boxForm[data-v-73968b0a] {\\n     margin-left: 1%;\\n}\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gamingit/./src/components/User.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/assets/asco.jpg":
/*!*****************************!*
  !*** ./src/assets/asco.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"16f916580f953b097e1d774cbcce2327.jpg\");\n\n//# sourceURL=webpack://gamingit/./src/assets/asco.jpg?");

/***/ }),

/***/ "./src/assets/geralt.jpg":
/*!*******************************!*
  !*** ./src/assets/geralt.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7a3eea70081c694ded48f9549f9f9fce.jpg\");\n\n//# sourceURL=webpack://gamingit/./src/assets/geralt.jpg?");

/***/ }),

/***/ "./src/assets/grinch.jpg":
/*!*******************************!*
  !*** ./src/assets/grinch.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f60aa606aa56b50d0ef8b32132a6d958.jpg\");\n\n//# sourceURL=webpack://gamingit/./src/assets/grinch.jpg?");

/***/ }),

/***/ "./src/assets/stitch.jpg":
/*!*******************************!*
  !*** ./src/assets/stitch.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4e2b06bc5cfc1d32381182579d60b6a0.jpg\");\n\n//# sourceURL=webpack://gamingit/./src/assets/stitch.jpg?");

/***/ }),

/***/ "./src/assets/supergirl.jpg":
/*!**********************************!*
  !*** ./src/assets/supergirl.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"52063f18a57c0ee35d5868b16f3e05b0.jpg\");\n\n//# sourceURL=webpack://gamingit/./src/assets/supergirl.jpg?");

/***/ }),

/***/ "./src/assets/tarzan.jpg":
/*!*******************************!*
  !*** ./src/assets/tarzan.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6ffbe162f7847104a27cc2fc124e5f8a.jpg\");\n\n//# sourceURL=webpack://gamingit/./src/assets/tarzan.jpg?");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_id_73968b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css&\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_id_73968b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_id_73968b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://gamingit/./src/components/User.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/User.vue":
/*!*********************************!*
  !*** ./src/components/User.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _User_vue_vue_type_template_id_73968b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=73968b0a&scoped=true& */ \"./src/components/User.vue?vue&type=template&id=73968b0a&scoped=true&\");\n/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ \"./src/components/User.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _User_vue_vue_type_style_index_0_id_73968b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css& */ \"./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(\n  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _User_vue_vue_type_template_id_73968b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _User_vue_vue_type_template_id_73968b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"73968b0a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/User.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://gamingit/./src/components/User.vue?");

/***/ }),

/***/ "./src/components/User.vue?vue&type=script&lang=js&":
/*!**********************************************************!*
  !*** ./src/components/User.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://gamingit/./src/components/User.vue?");

/***/ }),

/***/ "./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css&":
/*!******************************************************************************************!*
  !*** ./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_id_73968b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=style&index=0&id=73968b0a&scoped=true&lang=css&\");\n\n\n//# sourceURL=webpack://gamingit/./src/components/User.vue?");

/***/ }),

/***/ "./src/components/User.vue?vue&type=template&id=73968b0a&scoped=true&":
/*!****************************************************************************!*
  !*** ./src/components/User.vue?vue&type=template&id=73968b0a&scoped=true& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_73968b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n/* harmony export */   \"staticRenderFns\": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_73968b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_73968b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=73968b0a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=template&id=73968b0a&scoped=true&\");\n\n\n//# sourceURL=webpack://gamingit/./src/components/User.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=template&id=73968b0a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/User.vue?vue&type=template&id=73968b0a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render,\n/* harmony export */   \"staticRenderFns\": () => /* binding */ staticRenderFns\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"bodyUser\" }, [\n    _c(\"meta\", {\n      attrs: {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }\n    }),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"boxUser\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"userProfile\" },\n        [\n          _c(\"h1\", [_vm._v(\"¡Hola \" + _vm._s(_vm.user.name) + \"!\")]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"cardPhoto\" }, [\n            _c(\"label\", { attrs: { for: \"file-input\" } }, [\n              _c(\"img\", {\n                staticClass: \"userPhoto\",\n                attrs: {\n                  id: \"userPhoto\",\n                  width: \"100\",\n                  height: \"100\",\n                  src: _vm.$store.getters.user.photo,\n                  label: \"Toggle\",\n                  title: \"Cambia tu avatar\"\n                },\n                on: { click: _vm.chooseImage }\n              })\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"OverlayPanel\",\n            { ref: \"op\" },\n            _vm._l(_vm.avatars, function(n, i) {\n              return _c(\"div\", { key: i, staticClass: \"avatarsContainer\" }, [\n                _c(\"img\", {\n                  staticClass: \"avatar\",\n                  attrs: { src: _vm.getUrl(i), alt: \"n\" },\n                  on: {\n                    click: function($event) {\n                      return _vm.changeAvatar(i)\n                    }\n                  }\n                })\n              ])\n            }),\n            0\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"Button\",\n            {\n              staticClass: \"p-button-danger\",\n              attrs: { type: \"button\" },\n              on: { click: _vm.deleteConfirm }\n            },\n            [_vm._v(\" Eliminar cuenta \")]\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"boxForm\" }, [\n        _c(\n          \"form\",\n          {\n            staticClass: \"userForm\",\n            on: {\n              submit: function($event) {\n                $event.preventDefault()\n                return _vm.modifyUser($event)\n              }\n            }\n          },\n          [\n            _c(\"h1\", { staticClass: \"h3 mb-3 font-weight-normal\" }, [\n              _vm._v(\" Editar perfil \")\n            ]),\n            _vm._v(\" \"),\n            _c(\"label\", { staticClass: \"sr-only\" }, [_vm._v(\" Nickname: \")]),\n            _vm._v(\" \"),\n            _c(\"InputText\", {\n              staticClass: \"p-inputtext-lg\",\n              attrs: {\n                type: \"text\",\n                id: \"inputNickname\",\n                placeholder: \"Nickname\",\n                required: \"\",\n                autofocus: \"\"\n              },\n              model: {\n                value: _vm.user.nickname,\n                callback: function($$v) {\n                  _vm.$set(_vm.user, \"nickname\", $$v)\n                },\n                expression: \"user.nickname\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"label\", { staticClass: \"sr-only\" }, [_vm._v(\" Email: \")]),\n            _vm._v(\" \"),\n            _c(\"InputText\", {\n              staticClass: \"p-inputtext-lg\",\n              attrs: {\n                type: \"email\",\n                id: \"inputEmail\",\n                placeholder: \"Email\",\n                required: \"\",\n                autofocus: \"\"\n              },\n              model: {\n                value: _vm.user.email,\n                callback: function($$v) {\n                  _vm.$set(_vm.user, \"email\", $$v)\n                },\n                expression: \"user.email\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"label\", { staticClass: \"sr-only\" }, [\n              _vm._v(\" Introduce tu nombre: \")\n            ]),\n            _vm._v(\" \"),\n            _c(\"InputText\", {\n              staticClass: \"p-inputtext-lg\",\n              attrs: { type: \"text\", id: \"inputName\", placeholder: \"Nombre\" },\n              model: {\n                value: _vm.user.name,\n                callback: function($$v) {\n                  _vm.$set(_vm.user, \"name\", $$v)\n                },\n                expression: \"user.name\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"label\", { staticClass: \"sr-only\" }, [\n              _vm._v(\" Introduce tu nueva contraseña: \")\n            ]),\n            _vm._v(\" \"),\n            _c(\"InputText\", {\n              staticClass: \"p-inputtext-lg\",\n              attrs: { type: \"password\", id: \"inputPass\" },\n              model: {\n                value: _vm.user.password,\n                callback: function($$v) {\n                  _vm.$set(_vm.user, \"password\", $$v)\n                },\n                expression: \"user.password\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"label\", { staticClass: \"sr-only\" }, [\n              _vm._v(\" Introduce tu fecha de nacimiento: \")\n            ]),\n            _vm._v(\" \"),\n            _c(\"InputText\", {\n              staticClass: \"p-inputtext-lg\",\n              attrs: { id: \"inputDate\", placeholder: \"DD-MM-YYYY\" },\n              model: {\n                value: _vm.user.birthday,\n                callback: function($$v) {\n                  _vm.$set(_vm.user, \"birthday\", $$v)\n                },\n                expression: \"user.birthday\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"label\", { staticClass: \"sr-only\" }, [\n              _vm._v(\" Introduce una descripción: \")\n            ]),\n            _vm._v(\" \"),\n            _c(\"Textarea\", {\n              staticClass: \"p-inputtext-lg\",\n              attrs: {\n                type: \"text\",\n                id: \"inputDescription\",\n                placeholder: \"Descripción\"\n              },\n              model: {\n                value: _vm.user.description,\n                callback: function($$v) {\n                  _vm.$set(_vm.user, \"description\", $$v)\n                },\n                expression: \"user.description\"\n              }\n            }),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\n              \"Button\",\n              { staticClass: \"BSave\", on: { click: _vm.modifyUser } },\n              [_vm._v(\" Guardar \")]\n            )\n          ],\n          1\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://gamingit/./src/components/User.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);