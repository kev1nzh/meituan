<template>
  <div class="container">
    <div class="top">
      <van-search
        :value="value"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @focus="showSearchResult"
        :focus="focus"
      />
      <div class="result">
        <div class="result-item" v-for="item in resultList" :key="item.id">
          {{ item.value }}
        </div>
      </div>
    </div>
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
    };
  },
  computed: {},
  mounted() {
    this.focus =  true
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
    showSearchResult() {
      this.showResult = true;
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
</style>
