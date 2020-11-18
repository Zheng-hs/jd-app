<template>
  <div>
      <div class="driver-page" v-for="(item,index) in list" :key="index">
          <div>
              <img src="../../assets/u919.png" alt="">
              <div>{{item.shopCode}}</div>
          </div>
          <div class="text">
              <div>门店：{{item.shopName}}</div>
              <div>地址：{{item.shopAddress}}</div>
          </div>
<div class="phone"><div>店长：{{item.userName}}</div><div>手机：{{item.phone}}</div>
      </div>
      </div>
  </div>
</template>

<script>
import req from '@/api/driver-page.js'
export default {
  name: 'driver-page',
  data () {
    return {
      list: []
    }
  },
  methods: {
    driver () {
      req('listShop', {
      }).then(data => {
        this.list = data.data
        console.log(data)
      })
    }
  },
  mounted () {
    this.driver()
  }
}
</script>

<style lang="scss" scoped>
    .driver-page {
        // border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
        div:first-child {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 10px;
            div:nth-child(2) {
                font-weight: bold;
                margin-left: 10px;
            }
        }
        .text {
            padding: 10px;
            margin-left: 10px;
            div:nth-child(2) {
                padding: 10px;
            }
        }
    }
    .phone {
        border-top:1px solid #ddd;
        div {
            padding: 10px;
            margin-left: 20px;
        }
    }
</style>
