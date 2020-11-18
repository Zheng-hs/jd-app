<template>
  <div class="container">
<<<<<<< HEAD
    <div class="comm" v-for="(item, index) in listAssess" :key="index">
      <div class="pic-info">
        <img :src="item.goodsPhoto" alt="">

        <div class="star">
          <el-rate v-model="item.star"></el-rate>
        </div>
      </div>
=======
    <div class="comm" v-for="(item, index) in evaluateList" :key="index">
      <div class="pic-info">
        <img :src="item.goodsImagePath" alt="">

        <div class="star">
          <el-rate v-model="item.evaluateScore"></el-rate>
        </div>
      </div>

      <div class="eva-box">
        <div class="title">分享你的使用体验吧</div>

        <el-input v-model="item.evaluateContent" style="display: block;width:95%;margin: 0 auto;" type="textarea" :rows="5"></el-input>
      </div>
    </div>
    <!-- <div class="comm" v-for="(item, index) in evaluateList" :key="index">
      <div class="pic-info">
        <img :src="item.goodsImagePath" alt="">

        <div class="star" :style="{backgroundPosition: `${180 - 5 * 36}px 0`}"></div>
      </div>
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317

      <div class="eva-box">
        <div class="title">分享你的使用体验吧</div>

<<<<<<< HEAD
        <el-input v-model="item.content" style="display: block;width:95%;margin: 0 auto;" type="textarea" :rows="5"></el-input>
      </div>
    </div>
=======
        <el-input style="display: block;width:95%;margin: 0 auto;" type="textarea" :rows="5"></el-input>
      </div>
    </div> -->

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    <el-button class="submit-btn" type="primary" @click="addEvaluate">提交</el-button>
  </div>
</template>

<script>
import req from '@/api/order-evaluate.js'
import axios from 'axios'
// const qs = require('qs')

export default {
  name: 'order-evaluate',
  data () {
    return {
<<<<<<< HEAD
      listAssess: []
    }
  },
  mounted () {
    this.getEvaluate()
  },
  computed: {
    order () {
      return JSON.parse(sessionStorage.getItem('orderInfo'))
    },
    role () {
      return JSON.parse(sessionStorage.getItem('roleInfo'))
    }
  },
  methods: {
    getEvaluate () {
      req('assessGoods', {orderCode: this.order.orderCode}).then(data => {
        this.listAssess = data.data
=======
      evaluateList: []
    }
  },
  mounted () {
    console.log(this.$route.query)
    this.getEvaluate()
  },
  methods: {
    getEvaluate () {
      req('getEvaluate', {orderId: this.$route.query.orderId}).then(data => {
        this.evaluateList = data.data.goodsList
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
      })
    },
    addEvaluate () {
      axios({
        method: 'post',
<<<<<<< HEAD
        url: 'http://3t059459r5.wicp.vip/app/clientOrder/assessOrder',
        data: JSON.stringify({
          orderCode: this.order.orderCode,
          listAssess: this.listAssess.map(item => {
            return Object.assign({}, {goodsCode: item.goodsCode, content: item.content, star: item.star})
=======
        url: process.env.BASE_API + '/app/clientOrder/addGoodsEvaluate',
        data: JSON.stringify({
          orderId: this.$route.query.orderId,
          evaluateList: this.evaluateList.map(item => {
            return Object.assign({}, {goodsId: item.goodsId, evaluateContent: item.evaluateContent, evaluateScore: item.evaluateScore})
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
          })
        }),
        headers: {
          'Content-Type': 'application/json;',
<<<<<<< HEAD
          Authorization: 'bearer ' + JSON.parse(sessionStorage.getItem('userInfo')).access_token
=======
          Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('userInfo')).access_token
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
        }
      }).then(data => {
        if (data.data.code === 0) {
          this.$message.success(data.data.msg)

          this.$router.push({path: '/order-list'})
        } else {
          this.$message.error(data.data.msg)
        }
      })
<<<<<<< HEAD
=======
      // req('addEvaluate', {
      //   orderId: this.$route.query.orderId,
      //   evaluateList: this.evaluateList.map(item => {
      //     return Object.assign({}, {goodsId: item.goodsId, evaluateContent: item.evaluateContent, evaluateScore: '5'})
      //   })
      // }).then(data => {

      // })
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #fff;

  .comm {
    width: 100%;
    // height: 200px;
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    padding: 10px 10px 0;
    box-sizing: border-box;
    background: #fff;

    .pic-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 150px;
        height: 150px;
      }

      .star {
        width: 180px;
        height: 36px;
        position: relative;
        left: -20px;
        // background: url('../../assets/stars.png');
        // background-repeat: no-repeat;
        // background-size: 100% 100%;

        /deep/ .el-rate__item {
          .el-rate__icon {
            font-size: 25px;
          }
        }
      }
    }

    .eva-box {
      width: 100%;
      .title {
        padding-left: 10px;
        line-height: 40px;
      }
    }
  }

  .submit-btn {
    display: block;
    width: 95%;
    margin: 10px auto 0;
    height: 40px;
    line-height: 40px;
  }
}
</style>
