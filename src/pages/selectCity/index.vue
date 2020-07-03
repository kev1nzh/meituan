<template>
  <div class="container">
    <div class="top" @click="showSearchResult">
      <van-search :value="value" placeholder="请输入搜索关键词" disabled />
    </div>
    <div class="local">
      <img src="/static/img/location.png" class="location" alt="" />
      <span>当前定位城市 杭州</span>
    </div>
    <div class="city-title">热门城市</div>
    <div class="city">
      <div v-for="(item, index) in cityList" :key="index" @click="test">
        {{ item }}
      </div>
    </div>
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showResult: false,
      resultList: [
        {
          value: "杭州",
          id: 1,
        },
        {
          value: "杭州12321312312",
          id: 2,
        },
        {
          value: "杭州dsadasdsaddsadsadasdadasdasdasdasdasdsadasdasdasdas",
          id: 3,
        },
      ],
      cityList: [
        "北京",
        "北京",
        "北京",
        "北京",
        "北京",
        "北京",
        "北京",
        "北京",
        "北京",
        "北京",
        "北京",
        "北京",
      ],
    };
  },
  computed: {},
  methods: {
    test(){
      console.log(1)
    },
    onSearch() {
      console.log(this.value);
    },
    showSearchResult() {
      wx.navigateTo({ url: "/pages/selectCitySearch/main" });
    },
    goDetail() {
      wx.navigateTo({ url: "/pages/meMessage/main" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background: #fff;
}
.result {
  position: fixed;
  top: 108rpx;
  width: 100%;
  height: calc(100% - 108rpx);
  background: white;
  z-index: 1000;
  .result-item {
    border-bottom: 2rpx solid rgba(241, 242, 243, 1);
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 20rpx;
    width: 100%;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
  }
}
.location {
  width: 30rpx;
  height: 30rpx;
}
.local {
  height: 100rpx;
  border-bottom: 2rpx solid rgba(241, 242, 243, 1);
  padding-left: 20rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(34, 34, 34, 1);
    margin-left: 8rpx;
  }
}
.city {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-left:  20rpx;
  margin-right: 40rpx;
  div {
    height: 60rpx;
    justify-content: space-around;
    background: rgba(243, 243, 243, 1);
    border-radius: 10rpx;
    width: 23%;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    text-align: center;
    line-height: 60rpx;
    margin-bottom: 10rpx;
  }
}
.city-title {
  margin-top: 32rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  margin-left: 20rpx;
  margin-bottom: 16rpx;
}
</style>
