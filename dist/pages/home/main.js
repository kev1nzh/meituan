require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(212);
/** Created by guangqiang on 2018-09-14 20:16:03 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1____["a" /* default */]);
app.$mount();

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_45f4ad00_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(226);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(213)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-45f4ad00"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_45f4ad00_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45f4ad00", Component.options)
  } else {
    hotAPI.reload("data-v-45f4ad00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 213:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__action_action__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_wxcomponents_vant_dialog_dialog__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_wxcomponents_vant_toast_toast__ = __webpack_require__(224);



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
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      categoryArr: [{ items: [] }, { items: [] }],
      topBannerData: [],
      bottomBanner: {},
      shopsList: [],
      filterList: [{
        title: "综合排序",
        icon: "mt-arrow-down-o"
      }, {
        title: "销量最高"
      }, {
        title: "速度最快"
      }, {
        title: "筛选",
        icon: "mt-filter-o"
      }],
      tags: ["满减优惠", "点评高分", "新商家", "美团专送"],
      stars: [1, 2, 3, 4, 5],
      userinfoShow: false,
      mainProductList: [],
      searchTitle: ""
    };
  },

  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;

    var _ref = this.activityInfo || {},
        content = _ref.content,
        shareImg = _ref.shareImg;

    return {
      title: "shareTest",
      imageUrl: "http://p1.meituan.net/aichequan/6dd136c9612331817f952475d749770b4238.png",
      path: "pages/citySearch/main",
      success: function success(res) {
        that.util.wxapi.toast("分享成功");
        that.shareInfoAction({ res: res, id: that.parentId });
      }
    };
  },
  methods: {
    categoryClick: function categoryClick() {
      wx.navigateTo({ url: "/pages/categoryList/main" });
    },
    addressClick: function addressClick() {
      wx.navigateTo({ url: "/pages/selectAddress/main" });
    },
    searchClick: function searchClick() {
      wx.navigateTo({ url: "/pages/searchList/main" });
    },
    shoppingCartClick: function shoppingCartClick() {
      wx.navigateTo({ url: "/pages/shoppingCart/main" });
    },
    login: function login() {
      var userDetail = wx.getStorageSync("userDetail");
      console.log(userDetail);
      if (!userDetail) {
        this.userinfoShow = true;
      } else {
        this.getToken();
      }
    },
    getUserInfo: function getUserInfo(event) {
      wx.setStorageSync("userDetail", __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(event.mp.detail));
      this.getToken();
    },
    getToken: function getToken() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, code, _JSON$parse, encryptedData, iv, userInfo, httpObj, result;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.getLogin();

              case 2:
                _ref2 = _context.sent;
                code = _ref2.code;
                _JSON$parse = JSON.parse(wx.getStorageSync("userDetail")), encryptedData = _JSON$parse.encryptedData, iv = _JSON$parse.iv, userInfo = _JSON$parse.userInfo;
                httpObj = {
                  data: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()({
                    code: code,
                    endata: encryptedData,
                    iv: iv
                  })
                };

                console.log(httpObj);
                _context.next = 9;
                return _this.post("client/wxapp/endata", httpObj);

              case 9:
                result = _context.sent;

                console.log(result);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    init: function init() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var location, httpObj, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.showLoading({
                  title: "加载中"
                });
                _context2.next = 3;
                return _this2.getLocation();

              case 3:
                location = _context2.sent;

                connsole.log(location);
                httpObj = {
                  data: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(location)
                };

                console.log("获取接口出问题了");
                _context2.next = 9;
                return _this2.post("client/index", httpObj);

              case 9:
                result = _context2.sent;


                console.log(result.data.data.config, result.data.data.waimai);
                _this2.mainProductList = result.data.data.config[2].content;
                _this2.topBannerData = result.data.data.config[3].content;
                _this2.categoryArr[0].items = result.data.data.config[4].content;
                _this2.shopsList = result.data.data.waimai.items;
                _this2.searchTitle = result.data.data.config[1].so_title;
                wx.hideLoading();

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  mounted: function mounted() {
    // this.init();
    this.login();

    // var categoryData = homeData.headData.data.primary_filter;
    // categoryData.map((item, index) => {
    //   if (index < 10) {
    //     this.categoryArr[0].items.push(item);
    //   } else {
    //     this.categoryArr[1].items.push(item);
    //   }
    // });
    // this.topBannerData = homeData.topBannerData.data.top_banner_list;
    this.bottomBanner = __WEBPACK_IMPORTED_MODULE_4__data__["a" /* homeData */].bannerData.data.rcmd_board_v9.mid_ad_banner.platinum_banner;
    // this.shopsList = homeData.homeList.data.poilist;
  }
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeData; });
var homeData = {
  headData: {
    "data": {
      "across_banner_list": [],
      "bid_banner_list": [],
      "bubble_max_num": 16,
      "card_list": [],
      "friend_feeds": {
        "feed_list": [],
        "logo": ""
      },
      "kingkong_bg_image": "",
      "kingkong_font_color": "",
      "new_user_task": {
        "bg_url": "",
        "click_url": "",
        "icon_url": "",
        "left_text": "",
        "right_text": ""
      },
      "primary_filter": [{
        "brand_type": -1,
        "code": 910,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p0.meituan.net/jungle/6539a4c1d2bb51b572e399016ee0e8cb11261.png",
        "method": 1258576,
        "name": "美食",
        "second_tag_codes": [],
        "sequence": 100,
        "skip_protocol": "channel?category_type=910&category_text=%E7%BE%8E%E9%A3%9F",
        "url": "/static/img/1.png"
      }, {
        "brand_type": -1,
        "code": 101574,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png",
        "method": 1258576,
        "name": "美团超市",
        "second_tag_codes": [],
        "sequence": 200,
        "skip_protocol": "channel?category_type=101574&category_text=%E7%BE%8E%E5%9B%A2%E8%B6%85%E5%B8%82",
        "url": "/static/img/2.png"
      }, {
        "brand_type": -1,
        "code": 101578,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png",
        "method": 1258576,
        "name": "生鲜果蔬",
        "second_tag_codes": [],
        "sequence": 300,
        "skip_protocol": "channel?category_type=101578&category_text=%E7%94%9F%E9%B2%9C%E6%9E%9C%E8%94%AC",
        "url": "/static/img/3.png"
      }, {
        "brand_type": -1,
        "code": 960,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p0.meituan.net/jungle/c6fcf3162a093903f30ebbef8acdf40610735.png",
        "method": 1258576,
        "name": "美团专送",
        "second_tag_codes": [],
        "sequence": 400,
        "skip_protocol": "channel?category_type=960&category_text=%E7%BE%8E%E5%9B%A2%E4%B8%93%E9%80%81",
        "url": "/static/img/4.png"
      }, {
        "brand_type": -1,
        "code": 101181,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p1.meituan.net/jungle/e7102c0abc83e72e84bc43ab5d9d51489995.png",
        "method": 1258576,
        "name": "跑腿代购",
        "second_tag_codes": [],
        "sequence": 500,
        "skip_protocol": "pages/index/index?channel=wx_wmjg_miniPrograms",
        "url": "/static/img/5.png"
      }, {
        "brand_type": -1,
        "code": 940,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p0.meituan.net/jungle/c6fcf3162a093903f30ebbef8acdf40610735.png",
        "method": 1258576,
        "name": "下午茶",
        "second_tag_codes": [],
        "sequence": 600,
        "skip_protocol": "channel?category_type=940&category_text=%E4%B8%8B%E5%8D%88%E8%8C%B6",
        "url": "/static/img/6.png"
      }, {
        "brand_type": -1,
        "code": 100062,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p0.meituan.net/jungle/58b60a312cf86f3a3afc4c96ff0e53438774.png",
        "method": 1258576,
        "name": "汉堡披萨",
        "second_tag_codes": [],
        "sequence": 700,
        "skip_protocol": "channel?category_type=100062&category_text=%E6%B1%89%E5%A0%A1%E6%8A%AB%E8%90%A8",
        "url": "/static/img/7.png"
      }, {
        "brand_type": -1,
        "code": 100209,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png",
        "method": 1258576,
        "name": "家常菜",
        "second_tag_codes": [],
        "sequence": 800,
        "skip_protocol": "channel?category_type=100209&category_text=%E5%AE%B6%E5%B8%B8%E8%8F%9C",
        "url": "/static/img/8.png"
      }, {
        "brand_type": -1,
        "code": 100180,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p1.meituan.net/jungle/d6f9a9f8cf9dce142e70376275e902336720.png",
        "method": 1258576,
        "name": "小吃馆",
        "second_tag_codes": [],
        "sequence": 900,
        "skip_protocol": "channel?category_type=100180&category_text=%E5%B0%8F%E5%90%83%E9%A6%86",
        "url": "/static/img/9.png"
      }, {
        "brand_type": -1,
        "code": 100325,
        "first_tag_codes": [],
        "gray_switch": 0,
        "gray_url": "http://p1.meituan.net/jungle/83bfbcf07221cb1ccbcd9114e81ec7ac9209.png",
        "method": 1258576,
        "name": "快食简餐",
        "second_tag_codes": [],
        "sequence": 1000,
        "skip_protocol": "channel?category_type=100325&category_text=%E5%BF%AB%E9%A3%9F%E7%AE%80%E9%A4%90",
        "url": "/static/img/10.png"
      }],
      "recommended_search_keyword": {
        "scene_type": "NORMAL",
        "search_keyword": "米粉",
        "tgt_stids": "",
        "type": 1,
        "view_keyword": "米粉"
      },
      "supermarket_scan": {
        "scan_support": 0,
        "scheme_url": ""
      },
      "tgtStidMap": {},
      "top_banner_list": [],
      "user_task": {
        "bg_url": "",
        "button_text": "",
        "click_url": "",
        "icon_url": "",
        "left_highlight": "",
        "left_text": "",
        "right_text": "",
        "task_id": 0,
        "task_type": 0
      }
    },
    "code": 0,
    "msg": "成功"
  },
  homeList: {
    "tgt_stids": "",
    "data": {
      "activity_id": 0,
      "activity_type": 0,
      "boldingList": [],
      "coupon_nologin_background": "",
      "footprint_entrance": {
        "icon_url": "http://p1.meituan.net/aichequan/6dd136c9612331817f952475d749770b4238.png",
        "is_show": true
      },
      "has_activity": false,
      "judas_field": {
        "rank_trace_id": "187AD74976B0B1452CF9343BDDBA2720"
      },
      "need_login": false,
      "poi_has_next_page": true,
      "poi_total_num": 3325,
      "poilist": [{
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥13",
        "charge_info": "aor_type=2&shopSecondType=17&kaPlanId=62&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=4460055&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=1&act_lng=121380753&userId=228577344&shopThirdType=154&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=25866913&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4460055&shop_id=4460055&rmp=6yfiCb8F1SLjDilQzHOx5J_ZzKolFZdY7xHWwRdZXoTt&ins=target_id%40ad%40plan_id%40account_id&isKa=true&target_id=4460055&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=4460055&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_0",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "30分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满35减23;满50减33;满70减43",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品5.93折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
          "info": "本店新用户立减1元, 新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "277m",
        "distance_display_control": 0,
        "id": 470871157360624,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "35减23",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "50减33",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "70减43",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "5.93折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "新客减1",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 30,
          "poi_type_icon_type": 2,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥18",
        "month_sales_tip": "月售3521",
        "name": "正新汉堡·炸鸡（东兰餐厅店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥3",
        "pic_url": "http://p0.meituan.net/waimaipoi/6126e47d09268a4b0bc418488d693a9038058.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/wmproduct/acef6c8f22c14ce8e04c1e24ec9de8681498229.jpg",
        "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥1",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "西式快餐",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 4.5
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥28",
        "charge_info": "aor_type=2&shopSecondType=167&kaPlanId=211&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=1032138&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=2&act_lng=121380753&userId=228577344&shopThirdType=0&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=45372977&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1032138&shop_id=1032138&rmp=OdT1vOYJ8vgEC7AbM12ig-Hz_Po2vnC1wOGDiUWkKchp&ins=target_id%40ad%40plan_id%40account_id&isKa=true&target_id=1032138&shopType=19&request_id=70612337&appVersion=3.1.0&ad=1032138&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_1",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "35分钟",
        "delivery_type": 1,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满45减6",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "3.8km",
        "distance_display_control": 0,
        "id": 316329644127890,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "45减6",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }],
        "log_field": {
          "average_delivery_time": 35,
          "poi_type_icon_type": 2,
          "recommend_type": 3,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售1328",
        "name": "鲜芋仙（南方店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥7",
        "pic_url": "http://p1.meituan.net/waimaipoi/53b235533878830279581d22ee01be914674.jpeg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/wmproductdwm/247aa1b0580f7f567039ffbba5522b8142876.jpg",
        "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
        "rank_label_info": "",
        "recommend_info": {
          "icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
          "recommend_reason": "大众点评高分店铺",
          "type": 3
        },
        "recommend_level_list": [{
          "content_color": "#FF6D27",
          "icon": "",
          "recommend_reason": "点评高分店铺",
          "type": 3
        }],
        "recommend_level_type": 1,
        "recommend_list": [{
          "icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
          "recommend_reason": "点评高分店铺",
          "type": 3
        }],
        "scheme": "",
        "self_delivery_icon": "",
        "shipping_fee_tip": "配送 ¥2",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "甜品",
        "trade_area": "南方商城",
        "wm_poi_score": 4.6
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "",
        "charge_info": "aor_type=2&shopSecondType=176&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=1095312&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=3&act_lng=121380753&userId=228577344&shopThirdType=0&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1095312&shop_id=1095312&rmp=yCLpT3Htcn39_kVDh4LFSnaVL3RQNl6-XER_itITQvbE&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=1095312&shopType=21&request_id=70612337&appVersion=3.1.0&ad=1095312&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_2",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "34分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满38减35;满68减40;满98减50;满158减58;满268减68",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品1折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
          "info": "有机会领取商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
          "info": "实际支付1元返1元商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
          "info": "满68元赠送精美水果拼盘1个",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/04d485a1b8e040bff21c02c19a9731d92048.png",
          "info": "购买指定商品有赠品",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "3.2km",
        "distance_display_control": 0,
        "id": 545985840379359,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "38减35",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "68减40",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "98减50",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "158减58",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "268减68",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "1折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "有机会领券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "返1元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "满赠",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "买赠",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "极速退款",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 1,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 34,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥38",
        "month_sales_tip": "月售2215",
        "name": "四季鲜果店（上海七宝总店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥5",
        "pic_url": "http://p1.meituan.net/waimaipoi/4a254528fffa04bd70477fef744f19df154219.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/wmproduct/854b2d4c51404a265019b058f97326cf832458.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "",
        "shipping_fee_tip": "配送 ¥2",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "",
        "trade_area": "七宝",
        "wm_poi_score": 4.5
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥21",
        "charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=780749&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=4&act_lng=121380753&userId=228577344&shopThirdType=133&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=780749&shop_id=780749&rmp=DKRShAW8bSrVEBmH2kXJ-KlSZYdGprutpS0HbgFa2isu&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=780749&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=780749&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_3",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "30分钟",
        "delivery_type": 1,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满38减23;满68减36;满98减49",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品2.05折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
          "info": "满88元赠送可口可乐一罐",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "1.8km",
        "distance_display_control": 0,
        "id": 341884699482611,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "38减23",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "68减36",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "98减49",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "2.05折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "满赠",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 30,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售2893",
        "name": "蜀香缘川菜",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p1.meituan.net/waimaipoi/fdf92009430e978c00491e2d856ce63c23907.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p0.meituan.net/xianfudwm/a65419a8eab793dc0515465cc4a7f01c211702.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥4",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "川湘菜",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 4.0
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥17",
        "charge_info": "aor_type=2&shopSecondType=17&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=974877&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=5&act_lng=121380753&userId=228577344&shopThirdType=154&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=974877&shop_id=974877&rmp=94jsS6z2kwQHT5uvywnWEXLl_plwzN6ik-S8f_x6oJ-O&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=974877&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=974877&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_4",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "30分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满35减21;满50减31;满75减41",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品4.9折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "897m",
        "distance_display_control": 0,
        "id": 296912096965757,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "35减21",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "50减31",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "75减41",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "4.9折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 30,
          "poi_type_icon_type": 2,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥15",
        "month_sales_tip": "月售4324",
        "name": "汉霸汉堡（龙茗路店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p0.meituan.net/business/a15f77adf577a2f5971069d1e3c6e19d195040.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/wmproductwm/323f6d9c20cae9d6046d0214865cda9c299487.jpg",
        "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥3",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "西式快餐",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 4.5
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥20",
        "charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=1047417&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=6&act_lng=121380753&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1047417&shop_id=1047417&rmp=CMyk1KwECYENdas9aqPhvoVGCk0Z1WUZ_S1pBXSTv2RC&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=1047417&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=1047417&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_5",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "32分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满22减20;满50减30;满80减40",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品4.71折起",
          "promotion_type": 2
        }],
        "distance": "2.6km",
        "distance_display_control": 0,
        "id": 394777221735793,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "22减20",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "50减30",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "80减40",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "4.71折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }, {
          "activity_id": 0,
          "content": "极速退款",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 1,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 32,
          "poi_type_icon_type": 2,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥15",
        "month_sales_tip": "月售7194",
        "name": "东池便当（东兰店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p0.meituan.net/waimaipoi/8d19010f37a53910c7988d92e58517b6217614.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p0.meituan.net/wmproduct/f863e002d0489e31122e5f9d7dcf2b61405235.jpg",
        "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "免配送费",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "中式简餐",
        "trade_area": "",
        "wm_poi_score": 4.5
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥25",
        "charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=1671929&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=7&act_lng=121380753&userId=228577344&shopThirdType=133&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1671929&shop_id=1671929&rmp=hqWqtMEjgf760Pgxghfvq1NqjZNla9MIuDsySE-IbGB5&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=1671929&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=1671929&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_6",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "30分钟",
        "delivery_type": 1,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满35减15;满78减25;满108减35",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减22元",
          "promotion_type": 2
        }],
        "distance": "1.2km",
        "distance_display_control": 0,
        "id": 470892632209391,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "35减15",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "78减25",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "108减35",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减22",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }, {
          "activity_id": 0,
          "content": "极速退款",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 1,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 30,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售2882",
        "name": "潇湘小厨",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥4",
        "pic_url": "http://p0.meituan.net/waimaipoi/d7e273ef0b30d8fa4ab93019555ce2df38912.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/wmproductdwm/19d8949ceefa4deb374f40ae6af960c8154221.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥3",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "川湘菜",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 4.4
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥20",
        "charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=4208203&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=8&act_lng=121380753&userId=228577344&shopThirdType=3003&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4208203&shop_id=4208203&rmp=k0nrtVTb_vLMGjTREBg1hd0_WxjVYn1iu1JEoGlIj-fi&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=4208203&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=4208203&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_7",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "38分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/50c4aa962a3b2958b343dcc7bb835b772938.jpg",
          "info": "已有1张满56减5代金券",
          "promotion_type": 1
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满25减22;满58减27;满88减30;满118减32",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
          "info": "有机会领取商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减30元",
          "promotion_type": 2
        }],
        "distance": "2.2km",
        "distance_display_control": 0,
        "id": 371425484576088,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "已领5元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 1
        }, {
          "activity_id": 0,
          "content": "25减22",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "58减27",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "88减30",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "118减32",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "有机会领券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减30",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "极速退款",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 1,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 38,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥25",
        "month_sales_tip": "月售3417",
        "name": "重庆鸡公煲（漕宝店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥3",
        "pic_url": "http://p0.meituan.net/waimaipoi/eec7c57c9497d61b02a886f0b8229ec3239616.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p0.meituan.net/xianfudwm/c176f2fd991bbbdc64388ec36cd7b678100865.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "",
        "shipping_fee_tip": "配送 ¥2",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "鸡公煲",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 4.4
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥17",
        "charge_info": "aor_type=2&shopSecondType=14&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=1602339&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=9&act_lng=121380753&userId=228577344&shopThirdType=130&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1602339&shop_id=1602339&rmp=1q9dawckm_flScK8xkUVq-Eu6EWyzhsjIc8hYPzj7QUo&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=1602339&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=1602339&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_8",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "30分钟",
        "delivery_type": 1,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/50c4aa962a3b2958b343dcc7bb835b772938.jpg",
          "info": "已有1张满45减28代金券",
          "promotion_type": 1
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满28减20;满45减28;满60减35",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品3.54折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
          "info": "实际支付68元返3元商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
          "info": "满68元赠送可乐",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
          "info": "本店新用户立减1元, 新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "2.7km",
        "distance_display_control": 0,
        "id": 401838148024129,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "已领28元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 1
        }, {
          "activity_id": 0,
          "content": "28减20",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "45减28",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "60减35",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "3.54折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "返3元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "满赠",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "新客减1",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 30,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售3767",
        "name": "席师傅特色麻辣香锅",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p1.meituan.net/waimaipoi/172eb82855c13261baf78a056db93adc304216.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/xianfudwm/02538b119576c59f94e49ef8222ec1e7131575.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥5",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "麻辣香锅",
        "trade_area": "",
        "wm_poi_score": 4.0
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥20",
        "charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=3336947&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=10&act_lng=121380753&userId=228577344&shopThirdType=132&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=3336947&shop_id=3336947&rmp=UIRWCmEdp_fGERmVJ8hQ14uBv02_tDGFnfXc4qnyn6qE&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=3336947&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=3336947&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_9",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "30分钟",
        "delivery_type": 1,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满30减17;满70减30;满100减40",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品3.73折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "1.2km",
        "distance_display_control": 0,
        "id": 392152996747860,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "30减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "70减30",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "100减40",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "3.73折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 30,
          "poi_type_icon_type": 2,
          "recommend_type": 3,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售5285",
        "name": "和记小菜（u味儿.龙茗路店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥5",
        "pic_url": "http://p0.meituan.net/waimaipoi/7dd333e9fbf004e26f749b7fcf2b477912739.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p0.meituan.net/xianfu/73ca1b0108e484ac1faa573ff011a340554964.jpg",
        "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
        "rank_label_info": "",
        "recommend_info": {
          "icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
          "recommend_reason": "大众点评高分店铺",
          "type": 3
        },
        "recommend_level_list": [{
          "content_color": "#FF6D27",
          "icon": "",
          "recommend_reason": "点评高分店铺",
          "type": 3
        }],
        "recommend_level_type": 1,
        "recommend_list": [{
          "icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
          "recommend_reason": "点评高分店铺",
          "type": 3
        }],
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥2",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "本帮江浙菜",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 4.6
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥22",
        "charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=5377238&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=11&act_lng=121380753&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5377238&shop_id=5377238&rmp=bQFknvSEPi23TfqROcEnjDq3rsSns5cJoxXdTuALmzxK&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=5377238&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=5377238&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_10",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "35分钟",
        "delivery_type": 1,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满30减17;满70减30;满180减50",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品2折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
          "info": "实际支付20元返5元商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
          "info": "满88元赠送美年达",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "4.2km",
        "distance_display_control": 0,
        "id": 352583463017055,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "30减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "70减30",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "180减50",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "2折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "返5元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "满赠",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }, {
          "activity_id": 0,
          "content": "极速退款",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 1,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 35,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售1453",
        "name": "358快炒（宵夜烤鱼）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p0.meituan.net/business/545309ffb843d94d6523491443e8f0fe118518.png@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/xianfu/8b81bf83f3c93d45a43167969783a6fb246012.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥8",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "中式简餐",
        "trade_area": "虹桥镇",
        "wm_poi_score": 4.4
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥22",
        "charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=4132210&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=12&act_lng=121380753&userId=228577344&shopThirdType=98&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4132210&shop_id=4132210&rmp=jySUJFqfdYNqcrWnm7EQRQSnmb40N5ovSGlqerUyfIKO&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=4132210&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=4132210&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_11",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "30分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满28减16;满58减21;满88减26;满108减31",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品4.97折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "424m",
        "distance_display_control": 0,
        "id": 482647957672571,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "28减16",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "58减21",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "88减26",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "108减31",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "4.97折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 30,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售1754",
        "name": "杨记黄焖鸡米饭（龙茗路店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p1.meituan.net/waimaipoi/647f739fbb870d0ffeb00d441f767137100312.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/xianfudwm/32ac39997078bd6573f6310e487d7956146726.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥3",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "黄焖鸡",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 4.6
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥20",
        "charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=2497940&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=13&act_lng=121380753&userId=228577344&shopThirdType=133&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=2497940&shop_id=2497940&rmp=OGHFCZKuqNKlzcKoRszJQblgmGKNtw_aOVdRzcDAJRe3&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=2497940&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=2497940&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_12",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "41分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满30减20;满60减25;满98减35;满148减45",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品5折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
          "info": "有机会领取商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
          "info": "实际支付1元返5元商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "3.4km",
        "distance_display_control": 0,
        "id": 419473283727251,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "30减20",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "60减25",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "98减35",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "148减45",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "5折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "有机会领券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "返5元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }, {
          "activity_id": 0,
          "content": "极速退款",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 1,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 41,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥50",
        "month_sales_tip": "月售2623",
        "name": "虹桥川湘人家（合川路店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p0.meituan.net/waimaipoi/16a97914b8d589ec204e9f302d7b369e36864.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/xianfudwm/babd092ec02f5cf7c51858f2c882e350127008.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥7",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "川湘菜",
        "trade_area": "",
        "wm_poi_score": 4.4
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "",
        "charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=5868071&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=14&act_lng=121380753&userId=228577344&shopThirdType=133&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5868071&shop_id=5868071&rmp=IPzzpNd-wFyyvGc0t8CRkeasieT9IV2NEkEp6sDPtHet&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=5868071&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=5868071&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_13",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "45分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满30减17;满40减20;满55减25;满100减35",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品4.12折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
          "info": "有机会领取商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
          "info": "实际支付38元返4元商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
          "info": "满1元赠送酸奶1瓶",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/04d485a1b8e040bff21c02c19a9731d92048.png",
          "info": "购买指定商品有赠品",
          "promotion_type": 2
        }],
        "distance": "2.9km",
        "distance_display_control": 0,
        "id": 339982028972021,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "30减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "40减20",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "55减25",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "100减35",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "4.12折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "有机会领券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "返4元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "满赠",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "买赠",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "极速退款",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 1,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 45,
          "poi_type_icon_type": 1,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥15",
        "month_sales_tip": "月售19",
        "name": "火娃川菜馆（东兰美食城店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p1.meituan.net/waimaipoi/d2b7522261df7d34cd9578bb7685ac9d260096.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "",
        "poi_type_icon": "http://p0.meituan.net/aichequan/eb83cb963e67bc0ea4db4d7aef69d62f2578.png",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "",
        "shipping_fee_tip": "配送 ¥3",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "川湘菜",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 5.0
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥16",
        "charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=1192041&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=15&act_lng=121380753&userId=228577344&shopThirdType=100&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1192041&shop_id=1192041&rmp=cQxYZPTcArIwk_2SC8PTr7gRPtfhjIKlbE0f-2buGOk_&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=1192041&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=1192041&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_14",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "30分钟",
        "delivery_type": 1,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满25减13;满50减22;满80减30;满100减37;满120减50",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "2.1km",
        "distance_display_control": 0,
        "id": 429549276983869,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "25减13",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "50减22",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "80减30",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "100减37",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "120减50",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 30,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售2324",
        "name": "正宗重庆酸辣粉",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p0.meituan.net/wmproduct/f2055eb44eb4a9866e9bfef2cbe1a447422604.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p0.meituan.net/xianfudwm/79184c5d2216244a61b4031c645fb833200341.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥5",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "米粉米线",
        "trade_area": "万源城/东兰路",
        "wm_poi_score": 4.3
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥16",
        "charge_info": "aor_type=2&shopSecondType=17&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=4088264&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=16&act_lng=121380753&userId=228577344&shopThirdType=153&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4088264&shop_id=4088264&rmp=yoZr1KnSP4IsREirUqqHFr-CPurmoL49mGP3JxIfCrIW&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=4088264&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=4088264&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_15",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "35分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满38减22;满68减32;满98减42",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品3.55折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
          "info": "有机会领取商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
          "info": "满58元赠送热那亚爆汁烤肠一根",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "2.9km",
        "distance_display_control": 0,
        "id": 368985943159573,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "38减22",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "68减32",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "98减42",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "3.55折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "有机会领券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "满赠",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 35,
          "poi_type_icon_type": 0,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥15",
        "month_sales_tip": "月售1766",
        "name": "多美芝(漕河泾店)",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥3",
        "pic_url": "http://p1.meituan.net/business/5cce1020196ea338a937d88278f214ab112653.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/xianfudwm/7f525b8d13ea5bd265de516f906e6f7c147935.jpg",
        "poi_type_icon": "",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥1",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "意面披萨",
        "trade_area": "",
        "wm_poi_score": 4.3
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥29",
        "charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=4209996&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=17&act_lng=121380753&userId=228577344&shopThirdType=100&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4209996&shop_id=4209996&rmp=5ci1jtCXqRuWmxTon97wqWnJw5leuDXPK2FiyocuwDE&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=4209996&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=4209996&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_16",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "35分钟",
        "delivery_type": 1,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满10减9;满38减15;满70减25",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品1折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
          "info": "有机会领取商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
          "info": "实际支付20元返2元商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "4.0km",
        "distance_display_control": 0,
        "id": 436339620269606,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "10减9",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "38减15",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "70减25",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "1折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "有机会领券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "返2元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }],
        "log_field": {
          "average_delivery_time": 35,
          "poi_type_icon_type": 2,
          "recommend_type": 3,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售2351",
        "name": "大鼓米线（闵行区爱琴海DM店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥7",
        "pic_url": "http://p1.meituan.net/waimaipoi/8f1dc6b3ba7d37c36a4a689cb3be6c7639336.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/wmproduct/3352242b925a601d15a9cc0610c2bc122415736.png",
        "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
        "rank_label_info": "",
        "recommend_info": {
          "icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
          "recommend_reason": "大众点评高分店铺",
          "type": 3
        },
        "recommend_level_list": [{
          "content_color": "#FF6D27",
          "icon": "",
          "recommend_reason": "点评高分店铺",
          "type": 3
        }],
        "recommend_level_type": 1,
        "recommend_list": [{
          "icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
          "recommend_reason": "点评高分店铺",
          "type": 3
        }],
        "scheme": "",
        "self_delivery_icon": "",
        "shipping_fee_tip": "配送 ¥4",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "米粉米线",
        "trade_area": "虹桥镇",
        "wm_poi_score": 4.5
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥14",
        "charge_info": "aor_type=2&shopSecondType=17&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=2527477&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=18&act_lng=121380753&userId=228577344&shopThirdType=154&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=2527477&shop_id=2527477&rmp=KKyljUjGXXQeBvtDzXdpClr6JR5fFpHJpKlSKM7rdubX&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=2527477&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=2527477&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_17",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "44分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满35减24;满50减34;满70减44",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品3.39折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "685m",
        "distance_display_control": 0,
        "id": 341558282023438,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "35减24",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "50减34",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "70减44",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "3.39折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 44,
          "poi_type_icon_type": 2,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥0",
        "month_sales_tip": "月售988",
        "name": "加乐奇汉堡（龙茗路店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥5",
        "pic_url": "http://p1.meituan.net/waimaipoi/c35db1517ec64a824cdc07ad49b1c756160403.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p0.meituan.net/wmproductwm/c65a0a5e89af4d9723fc91b04f7f798a42152.jpg",
        "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "配送 ¥4",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "西式快餐",
        "trade_area": "",
        "wm_poi_score": 4.4
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "人均 ¥17",
        "charge_info": "aor_type=2&shopSecondType=17&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=1913465&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=19&act_lng=121380753&userId=228577344&shopThirdType=153&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1913465&shop_id=1913465&rmp=hbPOQwnC0Zdz5dXLtrukV33-U6GKyo3i6YFn4EGzMwQJ&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=1913465&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=1913465&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_18",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "33分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满35减22;满60减35;满80减40",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品4.52折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
          "info": "有机会领取商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
          "info": "实际支付1元返3元商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "4.0km",
        "distance_display_control": 0,
        "id": 319121372851104,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "35减22",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "60减35",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "80减40",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "4.52折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "有机会领券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "返3元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "支持自取",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 2,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 33,
          "poi_type_icon_type": 2,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥0",
        "month_sales_tip": "月售3790",
        "name": "芝根芝底（七宝店）",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "",
        "pic_url": "http://p0.meituan.net/waimaipoi/4b9a9109318618b9ecd557082025268b16815.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p1.meituan.net/wmproductwm/e26dcbf9130398bc2e05536f8969e33e320000.jpg",
        "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
        "shipping_fee_tip": "免配送费",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "意面披萨",
        "trade_area": "七宝",
        "wm_poi_score": 4.4
      }, {
        "ad_attr": "",
        "ad_mark": false,
        "ad_type": 15,
        "average_price_tip": "",
        "charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31150623&lng=121381110&cityLevel=2&secondLevelCityId=310112&plan_id=5858544&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=20&act_lng=121380753&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty01.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31150280&aor_id=267594&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5858544&shop_id=5858544&rmp=xZBgfAwZsIO1GRnWPa3g0ZECh8rxGeBig7Yq39j66gbS&ins=target_id%40ad%40plan_id%40account_id&isKa=false&target_id=5858544&shopType=1000&request_id=70612337&appVersion=3.1.0&ad=5858544&sver=2&poiApiPageType=1&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_19",
        "closing_tips": "",
        "container_template": {
          "tag_icon": "",
          "type": 0
        },
        "delivery_time_tip": "39分钟",
        "delivery_type": 0,
        "discounts2": [{
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "info": "满25减22;满60减29;满80减39;满100减49",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "info": "折扣商品2.91折起",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
          "info": "有机会领取商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
          "info": "实际支付10元返2元商家代金券",
          "promotion_type": 2
        }, {
          "activity_id": 0,
          "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
          "info": "新用户立减17元",
          "promotion_type": 2
        }],
        "distance": "4.0km",
        "distance_display_control": 0,
        "id": 460893948326683,
        "insurance_icon": "",
        "insurance_type": 0,
        "is_favorite": 0,
        "label_info": [{
          "activity_id": 0,
          "content": "25减22",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "60减29",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "80减39",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "100减49",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "2.91折起",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "有机会领券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "返2元券",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "首单减17",
          "content_color": "#FB4E44",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#FDC9C6",
          "poi_service_type": 0,
          "priority": 0,
          "priority_sort_index": 0,
          "type": 2
        }, {
          "activity_id": 0,
          "content": "极速退款",
          "content_color": "#15B0A0",
          "icon_url": "",
          "label_background_color": "",
          "label_frame_color": "#B4ECE6",
          "poi_service_type": 1,
          "priority": 1,
          "priority_sort_index": 0,
          "type": 3
        }],
        "log_field": {
          "average_delivery_time": 39,
          "poi_type_icon_type": 1,
          "recommend_type": 0,
          "search_log_id": ""
        },
        "min_price_tip": "起送 ¥20",
        "month_sales_tip": "月售301",
        "name": "奇妙肉肉拌饭.脆皮鸡饭",
        "only_self_delivery": 0,
        "origin_shipping_fee_tip": "¥4",
        "pic_url": "http://p0.meituan.net/waimaipoi/73f2412e1fce8f74d5111c910684ccf450717.jpg@152w_114h_1e_1c",
        "poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
        "poi_recommend_pic_url": "http://p0.meituan.net/xianfudwm/43a0c38a90b25cf956a2bb5f0a017841150860.jpg",
        "poi_type_icon": "http://p0.meituan.net/aichequan/eb83cb963e67bc0ea4db4d7aef69d62f2578.png",
        "rank_label_info": "",
        "recommend_level_type": 0,
        "scheme": "",
        "self_delivery_icon": "",
        "shipping_fee_tip": "配送 ¥3",
        "status": 1,
        "status_desc": "",
        "story_icon": "",
        "third_category": "中式简餐",
        "trade_area": "七宝",
        "wm_poi_score": 4.8
      }],
      "rank_strategy_tag": "RK4000,RK6042,RK8003",
      "rank_strategy_version": "",
      "world_cup_activity": {
        "coupon_activity_img": "",
        "coupon_activity_link": ""
      }
    },
    "code": 0,
    "msg": "成功"
  },
  bannerData: {
    "data": {
      "rcmd_board_v9": {
        "mid_ad_banner": {
          "ad_type": 7,
          "platinum_banner": {
            "ad_id": 0,
            "banner_click_url": "",
            "banner_pic_url": "http://p1.meituan.net/xianfu/bizad_ka_bjcpm_204778181537499428432581.jpg",
            "banner_tag_url": "https://s0.meituan.com/bs/waimai_ad_fe_mobile/latest/bj-var-templatesign.png",
            "brand_pic_template": 2,
            "charge_info": "planBudget=0&shopSecondType=0&kaPlanId=4026&banner_area_type=0&cityLevel=0&banner_type=0&pos=1&planType=0&orderPoiProductId=0&userId=228577344&shopThirdType=0&hostName=gh-waimai-d-ad05.gh.sankuai.com&minOrderSum=0&kaAcctId=20477818&minRoi=0.0&timeslot=0&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1049874&shop_id=1049874&orderType=0&ins=slot%40target_id%40ad%40plan_id%40account_id%40mtdpid&isKa=true&couponId=0&target_id=2354705&banner_id=0&appVersion=3.1.0&planAim=0&banner_pic_url=http://p1.meituan.net/xianfu/bizad_ka_bjcpm_204778181537499428432581.jpg&dt=0&aor_type=0&act_lat=0&isWeChatPackets=0&lng=121381110&secondLevelCityId=0&plan_id=2369701&user_ip=114.94.126.62&city_id=310112&adidx=0&act_lng=0&gsp_price=4&slot=44&bid=4000&lat=31150280&aor_id=0&isNR=0&rmp=RHl5ON5-yirAzpphcZp8NkfmBvIZeaCoJnAPJhssoMM0-g&orderViewId=0&brandType=1&expids={\"PLATINUM_CHARGE_UPGRADE_FLOW\":\"2803\",\"FOOD_CTR\":\"10002\",\"PLATINUM_STYLE_EXP\":\"3102\",\"PLATINUM_ADS_REORDER\":\"9501\",\"PLATINUM_FOOD_GMV_FLOW\":\"3001\",\"PLATINUM_GMV_RS_FLOW\":\"2432\",\"CTR\":\"1223\"}&templateId=pt-style-0002&prodAcctId=4042079&shopType=0&request_id=2c8bcade-3e6e-447d-9599-ebb094489704&spuIdList=1114379329,1114379344,1114341333&ad=2354705&sver=2&gsp_price_of_platinum=4.066598224639892&channel=4&gmv_k=0.0",
            "main_slogan": "惠在中秋，只因有你",
            "poi_logo": "http://p0.meituan.net/waimaipoi/cc08c046f46b48e1483f833afc6ce98a24065.jpeg",
            "poi_name": "老盛昌汤包（吴中店）",
            "products": [{
              "charge_info": "",
              "click_url": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=1049874&spu_id=1114379329",
              "name": "苏州汤包（6只）",
              "origin_price": "",
              "picture": "http://p1.meituan.net/wmproductwm/43a34c2e77418624278aa59dbed72ca81405309.jpg",
              "price": "¥7",
              "spu_id": 1114379329,
              "tag_color": "#FF9027",
              "tag_info": "热卖推荐"
            }, {
              "charge_info": "",
              "click_url": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=1049874&spu_id=1114379344",
              "name": "苏州汤包+咖喱牛肉粉丝汤",
              "origin_price": "",
              "picture": "http://p1.meituan.net/wmproductwm/1aa226fb6d74faaf8be6ae56833bcd041733701.jpg",
              "price": "¥15",
              "spu_id": 1114379344,
              "tag_color": "#FF9027",
              "tag_info": "热卖推荐"
            }, {
              "charge_info": "",
              "click_url": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=1049874&spu_id=1114341333",
              "name": "炸猪排",
              "origin_price": "",
              "picture": "http://p0.meituan.net/wmproductwm/984db01cdd01486df53e7975b1efabf22919504.jpg",
              "price": "¥12",
              "spu_id": 1114341333,
              "tag_color": "#FF9027",
              "tag_info": "热卖推荐"
            }],
            "promotion": [],
            "sub_slogan": "传统的老味道",
            "template_type": 2,
            "wm_poi_id": 1049874
          }
        }
      }
    },
    "code": 0,
    "msg": "成功"
  },
  topBannerData: {
    "data": {
      "top_banner_list": [{
        "banner_pic_url": "http://p1.meituan.net/wmbanner/f318524efd587a16c7cfc06e49a5ada7113020.png@!style1",
        "h5_url": "https://wxapp/sub_pages/mpvue/mp-pages/page/dice/home/main?source=1&activity_id=33365&ys=2&ys_id=30969&entry_id=b_Fjxks&entry_item_id=30969",
        "banner_act_id": 30969
      }, {
        "banner_pic_url": "http://p0.meituan.net/wmbanner/242d8d1581183826e32047b725c0401c54984.png@!style1",
        "h5_url": "https://wxapp/pages/activity-invite/activity-invite?source_id=17&activity_id=30132&ys=2&ys_id=28168&entry_id=b_Fjxks&entry_item_id=28168",
        "banner_act_id": 28168
      }]
    },
    "code": 0,
    "msg": "成功"
  }
};



/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let queue = [];
function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}
const Dialog = (options) => {
  options = Object.assign(Object.assign({}, Dialog.currentOptions), options);
  return new Promise((resolve, reject) => {
    const context = options.context || getContext();
    const dialog = context.selectComponent(options.selector);
    delete options.context;
    delete options.selector;
    if (dialog) {
      dialog.setData(
        Object.assign({ onCancel: reject, onConfirm: resolve }, options)
      );
      queue.push(dialog);
    } else {
      console.warn(
        '未找到 van-dialog 节点，请确认 selector 及 context 是否正确'
      );
    }
  });
};
Dialog.defaultOptions = {
  show: true,
  title: '',
  width: null,
  message: '',
  zIndex: 100,
  overlay: true,
  selector: '#van-dialog',
  className: '',
  asyncClose: false,
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: '',
};
Dialog.alert = Dialog;
Dialog.confirm = (options) =>
  Dialog(Object.assign({ showCancelButton: true }, options));
Dialog.close = () => {
  queue.forEach((dialog) => {
    dialog.close();
  });
  queue = [];
};
Dialog.stopLoading = () => {
  queue.forEach((dialog) => {
    dialog.stopLoading();
  });
};
Dialog.setDefaultOptions = (options) => {
  Object.assign(Dialog.currentOptions, options);
};
Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = Object.assign({}, Dialog.defaultOptions);
};
Dialog.resetDefaultOptions();
/* unused harmony default export */ var _unused_webpack_default_export = (Dialog);


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utils__ = __webpack_require__(225);

const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast',
};
let queue = [];
let currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__common_utils__["a" /* isObj */])(message) ? message : { message };
}
function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}
function Toast(toastOptions) {
  const options = Object.assign(
    Object.assign({}, currentOptions),
    parseOptions(toastOptions)
  );
  const context = options.context || getContext();
  const toast = context.selectComponent(options.selector);
  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
    return;
  }
  delete options.context;
  delete options.selector;
  toast.clear = () => {
    toast.setData({ show: false });
    if (options.onClose) {
      options.onClose();
    }
  };
  queue.push(toast);
  toast.setData(options);
  clearTimeout(toast.timer);
  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
      queue = queue.filter((item) => item !== toast);
    }, options.duration);
  }
  return toast;
}
const createMethod = (type) => (options) =>
  Toast(Object.assign({ type }, parseOptions(options)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
  queue.forEach((toast) => {
    toast.clear();
  });
  queue = [];
};
Toast.setDefaultOptions = (options) => {
  Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = () => {
  currentOptions = Object.assign({}, defaultOptions);
};
/* unused harmony default export */ var _unused_webpack_default_export = (Toast);


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDef */
/* harmony export (immutable) */ __webpack_exports__["a"] = isObj;
/* unused harmony export isNumber */
/* unused harmony export range */
/* unused harmony export nextTick */
/* unused harmony export getSystemInfoSync */
/* unused harmony export addUnit */
function isDef(value) {
    return value !== undefined && value !== null;
}
function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
    return /^\d+(\.\d+)?$/.test(value);
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
    setTimeout(() => {
        fn();
    }, 1000 / 30);
}
let systemInfo = null;
function getSystemInfoSync() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}
function addUnit(value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? `${value}px` : value;
}


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header-c"
  }, [_c('div', {
    staticClass: "header-l",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.addressClick
    }
  }, [_c('i', {
    staticClass: "icon mt-location-o",
    style: ({
      color: '#434343',
      'font-size': 52 + 'rpx'
    })
  }), _vm._v(" "), _c('span', [_vm._v("杭州")])], 1), _vm._v(" "), _c('div', {
    staticClass: "header-r",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.searchClick
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.searchTitle))]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-search-o"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "main-product"
  }, _vm._l((_vm.mainProductList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "main-product-item"
    }, [_vm._v("\n        " + _vm._s(item.keyword) + "\n      ")])
  })), _vm._v(" "), _c('swiper', {
    staticClass: "ad-c",
    attrs: {
      "indicator-dots": "true",
      "indicator-color": "#999",
      "indicator-active-color": "#FFC24A",
      "autoplay": "true"
    }
  }, _vm._l((_vm.topBannerData), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('img', {
      staticClass: "ad-img",
      attrs: {
        "src": item.banner
      }
    })])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "category-c"
  }, _vm._l((_vm.categoryArr), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticClass: "grid-c"
    }, _vm._l((item.items), function(itx, idx) {
      return _c('div', {
        key: idx,
        staticClass: "item",
        attrs: {
          "eventid": '2-' + index + '-' + idx
        },
        on: {
          "click": _vm.categoryClick
        }
      }, [_c('img', {
        staticClass: "item-img",
        attrs: {
          "src": itx.banner
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "item-title"
      }, [_vm._v(_vm._s(itx.title))])])
    }))])
  })), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "category-list"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "item-list"
  }, _vm._l((_vm.shopsList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": _vm.shoppingCartClick
      }
    }, [_c('div', {
      staticClass: "item-l"
    }, [_c('img', {
      attrs: {
        "src": item.logo
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "item-r"
    }, [_c('div', {
      staticClass: "r-t"
    }, [_c('span', {
      staticClass: "shop-name"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "t-c"
    }, [_c('div', {
      staticClass: "c-l"
    }, [_vm._m(3, true), _vm._v(" "), _c('span', {
      staticClass: "l-m"
    }, [_vm._v(_vm._s(item.avg_score))]), _vm._v(" "), _c('span', {
      staticClass: "l-r"
    }, [_vm._v("已售" + _vm._s(item.orders))])]), _vm._v(" "), _c('div', {
      staticClass: "c-r"
    }, [_c('span', {
      staticClass: "r-l"
    }, [_vm._v(_vm._s(item.pei_time) + "分钟")]), _vm._v(" "), _c('span', {
      staticClass: "r-r"
    }, [_vm._v(_vm._s(item.juli) + "m")])])])]), _vm._v(" "), _c('div', {
      staticClass: "r-m"
    }, [_c('div', [_c('span', {
      staticClass: "m-l"
    }, [_vm._v("起送￥" + _vm._s(item.min_amount))]), _vm._v(" "), _c('span', {
      staticClass: "m-r"
    }, [_vm._v("配送￥" + _vm._s(item.freight))])]), _vm._v(" "), _c('div', {
      staticClass: "m-d"
    }, [_c('span', [_vm._v(_vm._s(item && item.peiType && item.peiType.label))])])]), _vm._v(" "), _vm._m(4, true), _vm._v(" "), _vm._m(5, true)])])
  }))])], 1), _vm._v(" "), _c('img', {
    staticClass: "shopcart",
    attrs: {
      "src": "/static/img/shopcart.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "use-slot": "",
      "title": "请点击确认获取小程序权限。",
      "show": _vm.userinfoShow,
      "confirm-button-open-type": "getUserInfo",
      "eventid": '4',
      "mpcomid": '1'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "b-banner"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "title-box"
  }, [_vm._v("限时特价")])]), _vm._v(" "), _c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/food.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/food.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/food.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/food.png",
      "alt": ""
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section"
  }, [_c('span', {
    staticClass: "m"
  }, [_vm._v("附近商家")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "filter-bar"
  }, [_c('div', {
    staticClass: "filter-bar-item"
  }, [_c('span', [_vm._v("全部分类")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/filter.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "filter-bar-item"
  }, [_c('span', {
    staticStyle: {
      "color": "#999999"
    }
  }, [_vm._v("排序")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/filter.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "filter-bar-item"
  }, [_c('span', {
    staticStyle: {
      "color": "#999999"
    }
  }, [_vm._v("全部筛选")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/filter.png",
      "alt": ""
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "l-l"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/star.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r-b"
  }, [_c('span', {
    staticClass: "b-l"
  }, [_vm._v("支持自取")]), _vm._v(" "), _c('span', {
    staticClass: "b-r"
  }, [_vm._v("极速配送")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pay"
  }, [_c('div', {
    staticClass: "pay-m"
  }, [_c('span', [_vm._v("26减3")]), _vm._v(" "), _c('span', [_vm._v("26减3")])]), _vm._v(" "), _c('div', {
    staticClass: "pay-l"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/filter.png",
      "alt": ""
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-45f4ad00", esExports)
  }
}

/***/ })

},[211]);
//# sourceMappingURL=main.js.map