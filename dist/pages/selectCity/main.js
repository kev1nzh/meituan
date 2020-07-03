require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([18],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(307);
/** Created by guangqiang on 2018-09-18 10:13:17 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5eb1daa8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(310);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(308)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eb1daa8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5eb1daa8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/selectCity/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eb1daa8", Component.options)
  } else {
    hotAPI.reload("data-v-5eb1daa8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 308:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      value: "",
      showResult: false,
      resultList: [{
        value: "杭州",
        id: 1
      }, {
        value: "杭州12321312312",
        id: 2
      }, {
        value: "杭州dsadasdsaddsadsadasdadasdasdasdasdasdsadasdasdasdas",
        id: 3
      }],
      cityList: ["北京", "北京", "北京", "北京", "北京", "北京", "北京", "北京", "北京", "北京", "北京", "北京"]
    };
  },

  computed: {},
  methods: {
    test: function test() {
      console.log(1);
    },
    onSearch: function onSearch() {
      console.log(this.value);
    },
    showSearchResult: function showSearchResult() {
      wx.navigateTo({ url: "/pages/selectCitySearch/main" });
    },
    goDetail: function goDetail() {
      wx.navigateTo({ url: "/pages/meMessage/main" });
    }
  }
});

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "top",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.showSearchResult
    }
  }, [_c('van-search', {
    attrs: {
      "value": _vm.value,
      "placeholder": "请输入搜索关键词",
      "disabled": "",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "city-title"
  }, [_vm._v("热门城市")]), _vm._v(" "), _c('div', {
    staticClass: "city"
  }, _vm._l((_vm.cityList), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": _vm.test
      }
    }, [_vm._v("\n      " + _vm._s(item) + "\n    ")])
  })), _vm._v(" "), _c('van-index-bar', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('van-index-anchor', {
    attrs: {
      "index": "A",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "文本",
      "mpcomid": '2'
    }
  })], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "local"
  }, [_c('img', {
    staticClass: "location",
    attrs: {
      "src": "/static/img/location.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("当前定位城市 杭州")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5eb1daa8", esExports)
  }
}

/***/ })

},[306]);
//# sourceMappingURL=main.js.map