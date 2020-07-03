<template>
  <div class="container">
    <web-view :src="src" v-if="isReady"></web-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src:  'http://192.168.3.20:5000/error',
      isReady: false
    };
  },
  computed: {},
  mounted(){
    let _this =this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude

        console.log(latitude,longitude, 33)
        _this.src= _this.src + `?a=${latitude}&b=${longitude}`
        _this.isReady= true
        console.log(_this.src)
      }
    })
  },
  methods: {
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

</style>
