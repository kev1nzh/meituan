/** Created by guangqiang on 2018-08-30 14:28:14 */

import Vue from 'vue'
import App from './App'
import store from './store'
import * as util from './utils'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.util = util

const globalUrl = 'http://www.ortmg.com/api.php?API='

Vue.prototype.get = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: globalUrl + url, //仅为示例，并非真实的接口地址
      method: 'GET',
      data,
      header: {
        "content-type": "application/x-www-form-urlencoded", //修改此处即可
      },
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    });
  })
}

Vue.prototype.post = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: globalUrl + url, //仅为示例，并非真实的接口地址
      method: 'POST',
      data,
      header: {
        "content-type": "application/x-www-form-urlencoded", //修改此处即可
      },
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    });
  })
}

Vue.prototype.getLogin = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        if (res.code) {
          resolve(res)
        } else {
          console.log(res)
          reject(res)
        }
      },
      fail(res) {
        console.log(res)
      }
    })
  })
}
Vue.prototype.getLocation = () => {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: "wgs84",
      success(res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        resolve({
          lat: latitude,
          lng: longitude
        })
      },
      fail(res) {
        reject(res)
        console.log(res)
      }
    });
  })
}

const app = new Vue({
  store,
  ...App
})

app.$mount()