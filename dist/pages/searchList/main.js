require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(289);
/** Created by guangqiang on 2018-09-18 20:01:30 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61313c72_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(293);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61313c72"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61313c72_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/searchList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61313c72", Component.options)
  } else {
    hotAPI.reload("data-v-61313c72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 290:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(292);



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
      hotList: [],
      historyList: ["麻辣烫", "麦当劳", "小炒肉", "奶茶"]
    };
  },

  methods: {
    getHot: function getHot() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.post("client/waimai/shop/hotsearch");

              case 2:
                result = _context.sent;

                console.log(result);
                _this.hotList = result.data.data.hots;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getHistory: function getHistory() {
      var list = wx.getStorageSync("homeSearchHistory");
      console.log(list);
      this.historyList = list ? JSON.parse(list) : [];
    },
    saveHistory: function saveHistory(item) {
      var list = null;
      if (wx.getStorageSync("homeSearchHistory")) {
        list = JSON.parse(wx.getStorageSync("homeSearchHistory"));
      } else {
        list = [];
      }
      if (!list.includes(item)) {
        list.push(item);
      }

      wx.setStorageSync("homeSearchHistory", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(list));
    },
    search: function search() {
      this.saveHistory(this.searchValue);
      wx.navigateTo({
        url: "/pages/searchPage/main?value=" + this.searchValue
      });
    },
    clickItem: function clickItem(item) {
      this.saveHistory(item);
      wx.navigateTo({
        url: "/pages/searchPage/main?value=" + item
      });
    },
    clearHistory: function clearHistory() {
      this.historyList = [];
      wx.clearStorage("homeSearchHistory");
    }
  },
  onShow: function onShow() {
    this.getHistory();
  },
  mounted: function mounted() {
    this.getHot();
    this.getHistory();
  }
});

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchData */
var searchData = {
  data: {
    "data": {
      "labels": [{
        "click_url": "",
        "label_id": 0,
        "label_name": "麻辣烫",
        "label_pic_url": "",
        "label_type": 12002,
        "search_keyword": "麻辣烫",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "瘦肉粥",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "瘦肉粥",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "卤肉饭",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "卤肉饭",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "土豆丝",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "土豆丝",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "小炒肉",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "小炒肉",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "冷面",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "冷面",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "粉丝汤",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "粉丝汤",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "空心菜",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "空心菜",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "烤翅",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "烤翅",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "鸡排",
        "label_pic_url": "",
        "label_type": 12002,
        "search_keyword": "鸡排",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "薯条",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "薯条",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "茄子饭",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "茄子饭",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "四季豆",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "四季豆",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "金针菇",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "金针菇",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }, {
        "click_url": "",
        "label_id": 0,
        "label_name": "小丸子",
        "label_pic_url": "",
        "label_type": 12001,
        "search_keyword": "小丸子",
        "show_time_range": "",
        "wm_poi_id": 0,
        "wm_poi_view_id": ""
      }],
      "labels_tgt_stids": "",
      "recommend_poi": {
        "is_show_change_button": false,
        "next_page": 0,
        "recommend_poi_list": [],
        "tgt_stids": ""
      },
      "scene_type": "NORMAL",
      "searchHotLabelWithTgtStid": {
        "sceneType": "NORMAL",
        "searchHotLabelList": [{
          "click_url": "",
          "label_id": 0,
          "label_name": "麻辣烫",
          "label_pic_url": "",
          "label_type": 12002,
          "search_keyword": "麻辣烫",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "瘦肉粥",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "瘦肉粥",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "卤肉饭",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "卤肉饭",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "土豆丝",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "土豆丝",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "小炒肉",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "小炒肉",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "冷面",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "冷面",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "粉丝汤",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "粉丝汤",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "空心菜",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "空心菜",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "烤翅",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "烤翅",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "鸡排",
          "label_pic_url": "",
          "label_type": 12002,
          "search_keyword": "鸡排",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "薯条",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "薯条",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "茄子饭",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "茄子饭",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "四季豆",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "四季豆",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "金针菇",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "金针菇",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }, {
          "click_url": "",
          "label_id": 0,
          "label_name": "小丸子",
          "label_pic_url": "",
          "label_type": 12001,
          "search_keyword": "小丸子",
          "show_time_range": "",
          "wm_poi_id": 0,
          "wm_poi_view_id": ""
        }],
        "tgtStidMap": {}
      },
      "search_history_type": []
    },
    "code": 0,
    "msg": "成功"
  }
};



/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "search-c"
  }, [_c('div', {
    staticClass: "search-bar"
  }, [_c('i', {
    staticClass: "icon mt-search-o"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchValue),
      expression: "searchValue"
    }],
    attrs: {
      "placeholder": "请输入搜索信息",
      "placeholder-style": "font-size: 24rpx",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.searchValue)
    },
    on: {
      "confirm": _vm.search,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchValue = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.keyword) ? _c('div', {
    staticClass: "cancle",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.cancle
    }
  }, [_c('i', {
    staticClass: "icon qb-icon-cancle-o"
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('span', {
    staticClass: "search-btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")])]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("热门搜索")]), _vm._v(" "), _c('div', {
    staticClass: "line-t"
  }), _vm._v(" "), (_vm.hotList.length) ? _c('div', {
    staticClass: "tag-list"
  }, _vm._l((_vm.hotList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "tag",
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.clickItem(item)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item))])])
  })) : _vm._e(), _vm._v(" "), (!_vm.hotList.length) ? _c('van-skeleton', {
    staticStyle: {
      "margin": "40rpx 0"
    },
    attrs: {
      "title": "",
      "row": "1",
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "line-m"
  }), _vm._v(" "), _c('div', {
    staticClass: "history-c"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('span', [_vm._v("历史搜索")]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-trash-o",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.clearHistory
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line-b"
  }), _vm._v(" "), _c('div', {
    staticClass: "history-list"
  }, _vm._l((_vm.historyList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '5-' + index
      },
      on: {
        "click": function($event) {
          _vm.clickItem(item)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item))])])
  }))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61313c72", esExports)
  }
}

/***/ })

},[288]);
//# sourceMappingURL=main.js.map