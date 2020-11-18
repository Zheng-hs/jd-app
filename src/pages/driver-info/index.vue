<template>
<<<<<<< HEAD
  <div>
      <div class="driver-info" v-for="(item,index) in list" :key="index">
          <div>
              <img src="../../assets/u1210.png" alt="">
              <div>{{item.driverName}}</div>
          </div>
          <div>
              <img src="../../assets/u1151.png" alt="">
              <div>{{item.driverPhone}}</div>
          </div>
      </div>
=======
  <div class="container">
    <div class='box' v-for="(item, index) in driverList" :key="index">
      <div>
        <img src="../../assets/u1210.png" alt="">
        {{item.userName}}
      </div>
      <div>
        <img src="../../assets/u1151.png" alt="">
        {{item.phone}}
      </div>
    </div>
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
  </div>
</template>

<script>
import req from '@/api/driver-info.js'
<<<<<<< HEAD
=======

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
export default {
  name: 'driver-info',
  data () {
    return {
<<<<<<< HEAD
      list: []
    }
  },
  methods: {
    driver () {
      req('listDriver', {
        shopCode: this.role.shopCode
      }).then(data => {
        this.list = data.data
      })
    }
  },
  computed: {
    role () {
      return JSON.parse(sessionStorage.getItem('roleInfo'))
    }
  },
  mounted () {
    this.driver()
=======
      driverList: []
    }
  },
  mounted () {
    this.getDriver()
  },
  methods: {
    getDriver () {
      req('getDriverInfo', {}).then(data => {
        console.log(data)
        this.driverList = data.data.list
      })
    }
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
    .driver-info {
        border-bottom:1px solid #ddd;
        div:first-child {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 10px;
        }
        div:nth-child(2) {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 10px;
        }
    }
=======
.container {
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;

  .box {
    border-bottom: 1px solid #ddd;

    >div {
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }
    }
  }
}
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
</style>
