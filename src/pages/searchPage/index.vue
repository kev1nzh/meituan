<template>
  <div class="container">
    <van-search
      :value="searchValue"
      :shape="'round'"
      input-class="input-class"
      background="#F4F5F6"
      placeholder="请输入搜索关键词"
    />

    <div class="filter-box">
      <div class="left">
        <div>
          <span class="custom-filter">
            <van-dropdown-menu>
              <van-dropdown-item
                id="filter-1"
                :title="filter1Title"
                :title-class="filter1Id == 'all' ? '' : 'custom-filter-1-item-actived'"
              >
                <div class="custom-filter-content">
                  <div
                    class="custom-filter-1-item"
                    v-for="(item, index) in filter1List"
                    :key="index"
                    :class="{'custom-filter-1-item-actived': filter1Id === item.value}"
                    @click="clickFilter1(item)"
                  >
                    {{ item.text }}
                  </div>
                </div>
              </van-dropdown-item>
            </van-dropdown-menu>
          </span>
        </div>
        <div style="margin-left: 60rpx; padding-bottom: 20rpx;" :style="{'color': filter2Id? '#ffbc02' : '#999999'}" @click="filter2Id = !filter2Id">
          <span >销量</span>
        </div>
        <div style="margin-left: 60rpx;padding-bottom: 20rpx;" :style="{'color': filter3Id? '#ffbc02' : '#999999'}" @click="filter3Id = !filter3Id">
          <span >距离</span>
        </div>
      </div>
      <div class="right">
        <span class="custom-filter">
          <van-dropdown-menu>
            <van-dropdown-item
              id="item"
              :title="'全部筛选'"
              :title-class="titleClass"
            >
             <div class="custom-filter-content">
               
             </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </span>
      </div>
    </div>
    <div>
      <div v-for="(item, index) in list" :key="index" class="shop">
        <div class="left">
          <img :src="item.logo" alt="" />
        </div>
        <div class="right">
          <div class="title">{{ item.title }}</div>
          <div class="title-2">
            <div class="star">
              <img src="/static/img/star.png" alt="" />
              <span>{{ item.avg_score }}</span>
            </div>
            <div class="orders">月售 {{ item.orders }}</div>
          </div>
          <div class="title-3">
            <span class="title-3-left">
              <span>起送￥{{ item.min_amount }}</span>
              <span style="margin-left: 20rpx;">配送￥{{ item.freight }}</span>
            </span>
            <span class="title-3-right">
              <span>{{ item.pei_time }}分钟</span>
              <span style="margin-left: 20rpx;">{{ item.juli }}m</span>
              <!-- <span style="margin-left: 20rpx;">{{ item.juli }}m</span> -->
            </span>
          </div>
          <div class="title-4">
            <span>“很好喝，而且不腻人”</span>
            <span>好喝</span>
          </div>
          <div class="title-5" v-show="item.products.length">
            <div
              class="title-5-product"
              v-for="(product, index2) in item.products"
              :key="index2"
            >
              <div class="title-5-product-img">
                <img :src="product.photo" alt="" />
              </div>
              <div class="title-5-product-title">{{ product.title }}</div>
              <div class="title-5-product-price">￥{{ product.price }}</div>
            </div>
            <div
              class="title-5-product"
              v-for="(product, index2) in item.products"
              :key="index2"
            >
              <div class="title-5-product-img">
                <img :src="product.photo" alt="" />
              </div>
              <div class="title-5-product-title">{{ product.title }}</div>
              <div class="title-5-product-price">￥{{ product.price }}</div>
            </div>
            <div
              class="title-5-product"
              v-for="(product, index2) in item.products"
              :key="index2"
            >
              <div class="title-5-product-img">
                <img :src="product.photo" alt="" />
              </div>
              <div class="title-5-product-title">{{ product.title }}</div>
              <div class="title-5-product-price">￥{{ product.price }}</div>
            </div>
            <div
              class="title-5-product"
              v-for="(product, index2) in item.products"
              :key="index2"
            >
              <div class="title-5-product-img">
                <img :src="product.photo" alt="" />
              </div>
              <div class="title-5-product-title">{{ product.title }}</div>
              <div class="title-5-product-price">￥{{ product.price }}</div>
            </div>
            <div
              class="title-5-product"
              v-for="(product, index2) in item.products"
              :key="index2"
            >
              <div class="title-5-product-img">
                <img :src="product.photo" alt="" />
              </div>
              <div class="title-5-product-title">{{ product.title }}</div>
              <div class="title-5-product-price">￥{{ product.price }}</div>
            </div>
            <div
              class="title-5-product"
              v-for="(product, index2) in item.products"
              :key="index2"
            >
              <div class="title-5-product-img">
                <img :src="product.photo" alt="" />
              </div>
              <div class="title-5-product-title">{{ product.title }}</div>
              <div class="title-5-product-price">￥{{ product.price }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchData } from "./data";
export default {
  data() {
    return {
      searchValue: "",
      page: 1,
      list: [],

      switchTitle1: "包邮",
      switchTitle2: "团购",
      itemTitle: "筛选",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      value1: 0,
      filter1List: [
        {
          text: "综合排序",
          value: "all",
        },
        {
          text: "速度最快",
          value: "ptime",
        },
        {
          text: "商家星级最高",
          value: "score",
        },
        {
          text: "起送价最低",
          value: "price",
        },
        {
          text: "配送价最低",
          value: "freight",
        },
        // {
        //   text: "人均高到低",
        //   value: "all",
        // },
        // {
        //   text: "人均低到高",
        //   value: "all",
        // },
      ],
      filter1Id: "all",
      filter1Title: "综合排序",
      filter2Id: true,
      filter3Id: false
    };
  },
  methods: {
    onConfirm() {
      this.selectComponent("#item").toggle();
    },

    onSwitch1Change({ detail }) {
      this.setData({ switch1: detail });
    },

    onSwitch2Change({ detail }) {
      this.setData({ switch2: detail });
    },

    async getSearch(title) {
      wx.showLoading({
        title: "加载中",
      });
      const location = await this.getLocation();
      location.title = title;
      location.page = this.page;
      const httpObj = {
        data: JSON.stringify(location),
      };
      const result = await this.post("client/waimai/shop/search", httpObj);
      console.log(result);
      this.list = result.data.data.items.map((i) => {
        i.min_amount = Number(i.min_amount).toFixed(0);
        i.freight = Number(i.freight).toFixed(0);
        return i;
      });
      wx.hideLoading();
    },
    clickFilter1(item) {
      this.filter1Id = item.value;
      this.$mp.page.selectComponent("#filter-1").toggle();
      this.filter1Title = item.text;
    },
  },
  mounted() {
    this.searchValue = this.$root.$mp.query.value;

    this.getSearch(this.$root.$mp.query.value);
  },
  onShow() {
    this.list = [];
  },
};
</script>

<style lang="scss">
.container {
}
.custom-filter {
  .van-dropdown-menu {
    height: auto;
    background-color: initial;
    padding-bottom: 20rpx;
  }
  .van-dropdown-menu__title {
    color: rgba(153, 153, 153, 1) !important;
    font-size: 24rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
  }
}
.filter-box {
  background: #f4f5f6;
  height: 80rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 24rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  padding: 0 20rpx;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    position: relative;
    right: 14rpx;
  }
}
.filter-icon {
  margin-left: 8rpx;
  width: 16rpx;
  height: 16rpx;
}
.shop {
  // height: 540rpx;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  width: calc(100% - 80rpx);
  margin: 0 20rpx 20rpx 20rpx;
  padding: 20rpx;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .left {
    margin-right: 20rpx;
    img {
      width: 156rpx;
      height: 156rpx;
    }
  }
  .right {
    width: calc(100% - 186rpx);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .title {
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      margin-bottom: 8rpx;
    }
    .title-2 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      .star {
        color: rgba(255, 148, 57, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 24rpx;
          height: 24rpx;
          position: relative;
          bottom: 2rpx;
        }
      }
      .orders {
        color: #999999;
        margin-left: 20rpx;
      }
    }
    .title-3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      width: 100%;
      margin-top: 8rpx;
    }
    .title-4 {
      margin-top: 10rpx;
      span {
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 149, 58, 1);
        padding: 4rpx 20rpx;
        background: rgba(252, 241, 226, 1);
        border-radius: 4px;
        margin-right: 10rpx;
      }
    }
    .title-5 {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      margin-top: 20rpx;
      .title-5-product {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-right: 20rpx;
        .title-5-product-img {
          width: 200rpx;
          height: 200rpx;
          border: 2rpx solid rgba(236, 236, 236, 1);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title-5-product-title {
          margin-top: 10rpx;
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(34, 34, 34, 1);
        }
        .title-5-product-price {
          font-size: 32rpx;
          font-family: SFUIDisplay-Bold, SFUIDisplay;
          font-weight: bold;
          color: rgba(253, 76, 48, 1);
        }
      }
    }
  }
}
.title-5::-webkit-scrollbar {
  display: none;
}

.custom-filter-1-item {
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  height: 80rpx;
  background: white;
  padding-left: 20rpx;
  border-bottom: 2rpx solid #f1f2f3;
  line-height: 80rpx;
}
.custom-filter-1-item-actived {
  color: #ffbc02;
}
</style>
