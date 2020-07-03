require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(295);
/** Created by guangqiang on 2018-09-18 20:01:30 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_65e7cb10_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(299);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(296)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_65e7cb10_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/searchPage/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65e7cb10", Component.options)
  } else {
    hotAPI.reload("data-v-65e7cb10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(298);



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
      searchValue: "",
      page: 1,
      list: [],

      switchTitle1: "包邮",
      switchTitle2: "团购",
      itemTitle: "筛选",
      option1: [{ text: "全部商品", value: 0 }, { text: "新款商品", value: 1 }, { text: "活动商品", value: 2 }],
      value1: 0,
      filter1List: [{
        text: "综合排序",
        value: "all"
      }, {
        text: "速度最快",
        value: "ptime"
      }, {
        text: "商家星级最高",
        value: "score"
      }, {
        text: "起送价最低",
        value: "price"
      }, {
        text: "配送价最低",
        value: "freight"
      }],
      filter1Id: "all",
      filter1Title: "综合排序",
      filter2Id: true,
      filter3Id: false
    };
  },

  methods: {
    onConfirm: function onConfirm() {
      this.selectComponent("#item").toggle();
    },
    onSwitch1Change: function onSwitch1Change(_ref) {
      var detail = _ref.detail;

      this.setData({ switch1: detail });
    },
    onSwitch2Change: function onSwitch2Change(_ref2) {
      var detail = _ref2.detail;

      this.setData({ switch2: detail });
    },
    getSearch: function getSearch(title) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var location, httpObj, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({
                  title: "加载中"
                });
                _context.next = 3;
                return _this.getLocation();

              case 3:
                location = _context.sent;

                location.title = title;
                location.page = _this.page;
                httpObj = {
                  data: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(location)
                };
                _context.next = 9;
                return _this.post("client/waimai/shop/search", httpObj);

              case 9:
                result = _context.sent;

                console.log(result);
                _this.list = result.data.data.items.map(function (i) {
                  i.min_amount = Number(i.min_amount).toFixed(0);
                  i.freight = Number(i.freight).toFixed(0);
                  return i;
                });
                wx.hideLoading();

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    clickFilter1: function clickFilter1(item) {
      this.filter1Id = item.value;
      this.$mp.page.selectComponent("#filter-1").toggle();
      this.filter1Title = item.text;
    }
  },
  mounted: function mounted() {
    this.searchValue = this.$root.$mp.query.value;

    this.getSearch(this.$root.$mp.query.value);
  },
  onShow: function onShow() {
    this.list = [];
  }
});

/***/ }),

/***/ 298:
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('van-search', {
    attrs: {
      "value": _vm.searchValue,
      "shape": 'round',
      "input-class": "input-class",
      "background": "#F4F5F6",
      "placeholder": "请输入搜索关键词",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "filter-box"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('div', [_c('span', {
    staticClass: "custom-filter"
  }, [_c('van-dropdown-menu', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('van-dropdown-item', {
    attrs: {
      "id": "filter-1",
      "title": _vm.filter1Title,
      "title-class": _vm.filter1Id == 'all' ? '' : 'custom-filter-1-item-actived',
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "custom-filter-content"
  }, _vm._l((_vm.filter1List), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "custom-filter-1-item",
      class: {
        'custom-filter-1-item-actived': _vm.filter1Id === item.value
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.clickFilter1(item)
        }
      }
    }, [_vm._v("\n                  " + _vm._s(item.text) + "\n                ")])
  }))])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "60rpx",
      "padding-bottom": "20rpx"
    },
    style: ({
      'color': _vm.filter2Id ? '#ffbc02' : '#999999'
    }),
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.filter2Id = !_vm.filter2Id
      }
    }
  }, [_c('span', [_vm._v("销量")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "60rpx",
      "padding-bottom": "20rpx"
    },
    style: ({
      'color': _vm.filter3Id ? '#ffbc02' : '#999999'
    }),
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.filter3Id = !_vm.filter3Id
      }
    }
  }, [_c('span', [_vm._v("距离")])])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('span', {
    staticClass: "custom-filter"
  }, [_c('van-dropdown-menu', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('van-dropdown-item', {
    attrs: {
      "id": "item",
      "title": '全部筛选',
      "title-class": _vm.titleClass,
      "mpcomid": '3'
    }
  }, [_c('div', {
    staticClass: "custom-filter-content"
  })])], 1)], 1)])]), _vm._v(" "), _c('div', _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "shop"
    }, [_c('div', {
      staticClass: "left"
    }, [_c('img', {
      attrs: {
        "src": item.logo,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "right"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "title-2"
    }, [_c('div', {
      staticClass: "star"
    }, [_c('img', {
      attrs: {
        "src": "/static/img/star.png",
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.avg_score))])]), _vm._v(" "), _c('div', {
      staticClass: "orders"
    }, [_vm._v("月售 " + _vm._s(item.orders))])]), _vm._v(" "), _c('div', {
      staticClass: "title-3"
    }, [_c('span', {
      staticClass: "title-3-left"
    }, [_c('span', [_vm._v("起送￥" + _vm._s(item.min_amount))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "margin-left": "20rpx"
      }
    }, [_vm._v("配送￥" + _vm._s(item.freight))])]), _vm._v(" "), _c('span', {
      staticClass: "title-3-right"
    }, [_c('span', [_vm._v(_vm._s(item.pei_time) + "分钟")]), _vm._v(" "), _c('span', {
      staticStyle: {
        "margin-left": "20rpx"
      }
    }, [_vm._v(_vm._s(item.juli) + "m")])])]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.products.length),
        expression: "item.products.length"
      }],
      staticClass: "title-5"
    }, [_vm._l((item.products), function(product, index2) {
      return _c('div', {
        key: index2,
        staticClass: "title-5-product"
      }, [_c('div', {
        staticClass: "title-5-product-img"
      }, [_c('img', {
        attrs: {
          "src": product.photo,
          "alt": ""
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-title"
      }, [_vm._v(_vm._s(product.title))]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-price"
      }, [_vm._v("￥" + _vm._s(product.price))])])
    }), _vm._v(" "), _vm._l((item.products), function(product, index2) {
      return _c('div', {
        key: index2,
        staticClass: "title-5-product"
      }, [_c('div', {
        staticClass: "title-5-product-img"
      }, [_c('img', {
        attrs: {
          "src": product.photo,
          "alt": ""
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-title"
      }, [_vm._v(_vm._s(product.title))]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-price"
      }, [_vm._v("￥" + _vm._s(product.price))])])
    }), _vm._v(" "), _vm._l((item.products), function(product, index2) {
      return _c('div', {
        key: index2,
        staticClass: "title-5-product"
      }, [_c('div', {
        staticClass: "title-5-product-img"
      }, [_c('img', {
        attrs: {
          "src": product.photo,
          "alt": ""
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-title"
      }, [_vm._v(_vm._s(product.title))]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-price"
      }, [_vm._v("￥" + _vm._s(product.price))])])
    }), _vm._v(" "), _vm._l((item.products), function(product, index2) {
      return _c('div', {
        key: index2,
        staticClass: "title-5-product"
      }, [_c('div', {
        staticClass: "title-5-product-img"
      }, [_c('img', {
        attrs: {
          "src": product.photo,
          "alt": ""
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-title"
      }, [_vm._v(_vm._s(product.title))]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-price"
      }, [_vm._v("￥" + _vm._s(product.price))])])
    }), _vm._v(" "), _vm._l((item.products), function(product, index2) {
      return _c('div', {
        key: index2,
        staticClass: "title-5-product"
      }, [_c('div', {
        staticClass: "title-5-product-img"
      }, [_c('img', {
        attrs: {
          "src": product.photo,
          "alt": ""
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-title"
      }, [_vm._v(_vm._s(product.title))]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-price"
      }, [_vm._v("￥" + _vm._s(product.price))])])
    }), _vm._v(" "), _vm._l((item.products), function(product, index2) {
      return _c('div', {
        key: index2,
        staticClass: "title-5-product"
      }, [_c('div', {
        staticClass: "title-5-product-img"
      }, [_c('img', {
        attrs: {
          "src": product.photo,
          "alt": ""
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-title"
      }, [_vm._v(_vm._s(product.title))]), _vm._v(" "), _c('div', {
        staticClass: "title-5-product-price"
      }, [_vm._v("￥" + _vm._s(product.price))])])
    })], 2)])])
  }))], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-4"
  }, [_c('span', [_vm._v("“很好喝，而且不腻人”")]), _vm._v(" "), _c('span', [_vm._v("好喝")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-65e7cb10", esExports)
  }
}

/***/ })

},[294]);
//# sourceMappingURL=main.js.map