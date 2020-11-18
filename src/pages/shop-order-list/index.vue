<template>
  <div>
    <div class="leader">
        <ul>
            <li :class="{active:isActive === 0 ? 1 : 0}" @click="allOrder">全部订单</li>
            <li :class="{active:isActive === 1 ? 1 : 0}" @click="ordered">已下单</li>
            <li :class="{active:isActive === 2 ? 1 : 0}" @click="waitPickUpOrder">待取货</li>
            <li :class="{active:isActive === 3 ? 1 : 0}" @click="finishOrder">已完成</li>
        </ul>
    </div>
    <div class="order-item" v-for="(item, index) of list" :key="index" @click="toPage(item)">
        <div class="item-top">
            <img src="../../assets/我的订单.png" alt="">
            <span>{{item.orderCode}}</span>
            <span>{{item.orderState === '0' ? '已下单' : item.orderState === '1' ? '已取消' :
              item.orderState === '2' ? '已到货' : item.orderState === '3' ? '已取货' :
              item.orderState === '4' ? '已完成未评价' : '已完成已评价'}}</span>
        </div>
        <div class="item-center" v-for="(item, index) of item.listGoods" :key="index">
            <div class="img-con">
                <img :src="item.goodsPhoto" alt="">
            </div>
            <div class="text">
                <div class="text-con">
                    {{item.goodsName}}
                </div>
                <div class="props-con">
                    {{item.synopsis}}
                </div>
                <div class="price-con">
                    <span>￥</span>
                    <span>{{item.sellPrice}} &nbsp;</span>
                    <span>x{{item.goodsCount}}</span>
                </div>
            </div>
        </div>
        <div class="item-more">
          <div>
            <img src="../../assets/u1056.png" alt="">
            <span>{{item.customerName}}</span>
          </div>
          <div>
            <img src="../../assets/u1060.png" alt="">
            <span>{{item.customerPhone}}</span>
          </div>
        </div>
        <div class="item-bottom">
            <span>共{{item.orderGoodsCount}}件商品，合计￥</span>
            <span>{{item.orderTotal}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import req from '@/api/order-list.js'
export default {
  name: 'shop-order-list',
  data () {
    return {
      list: [],
      listGoods: [],
      isActive: 0,
      statePass: '',
      orderIdPass: ''
    }
  },
  mounted () {
    this.allOrder()
  },
  computed: {
    role () {
      return JSON.parse(sessionStorage.getItem('roleInfo'))
    }
  },
  methods: {
    toPage (data) {
      sessionStorage.setItem('orderInfo', JSON.stringify(data))
      this.$router.push({path: '/shop-order-detail'})
    },
    listManagerOrders (value) {
      req('listOrders', {
        orderState: value,
        shopCode: this.role.shopCode,
        pageSize: 100,
        pageNum: 1
      }).then(data => {
        if (data.code === 0) {
          this.list = data.data.list
        } else {
          this.$message.error(data.msg)
        }
      })
    },
    // 全部订单
    allOrder () {
      this.listManagerOrders()
      this.isActive = 0
      console.log(this.list.orderId)
    },
    // 已付款
    ordered () {
      this.statePass = '0'
      this.listManagerOrders(this.statePass)
      this.isActive = 1
    },
    // 待取货
    waitPickUpOrder () {
      this.statePass = '2'
      this.listManagerOrders(this.statePass)
      this.isActive = 2
    },
    // 已完成
    finishOrder () {
      this.statePass = '5'
      this.listManagerOrders(this.statePass)
      this.isActive = 3
    }
  }
}
</script>

<style lang="scss" scoped>
  .leader {
      height: 64px;
      width: 100%;
      ul {
          height: 100%;
          padding: 0 0 0 2.5%;
          margin: 0;
          display: flex;
          li {
              line-height: 64px;
              padding: 0;
              margin: 0;
              list-style: none;
              padding: 0 13px;
              font-size: 15px;
          }
          .active {
              font-size: 17px;
              color: rgb(195,152,98);
          }
      }
  }
  .order-item:last-child  {
    margin-bottom: 70px;
  }
  .order-item {
      width: 95%;
      margin: 0 auto 12px;
      background-color: white;
      border-radius: 8px;
      padding: 10px 15px;
      box-sizing: border-box;
      .item-top {
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;
          img {
              width: 13px;
              height: 16px;
          }
          span:nth-child(2) {
              font-size: 16px;
              flex: 1;
              line-height: 38px;
              position: relative;
              left: 8px;
          }
          span:nth-child(3) {
              position: absolute;
              right: 0;
              font-size: 13px;
              color: rgb(195,152,98);
          }
      }
      .item-center {
          width: 100%;
          display: flex;
          box-sizing: border-box;
          padding-top: 5px;
          .img-con {
              flex: 1;
              text-align: center;
              img {
                  width: 84px;
              }
          }
          .text {
              flex: 2.2;
              .text-con {
                  font-size: 15px;
                  line-height: 22px;
                  overflow : hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
              }
              .props-con {
                width: 250px;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: keep-all;
                overflow: hidden;
                height: 50px;
                font-size: 13.5px;
                line-height: 26px;
                color: #a8a8a8;
              }
              .price-con {
                  text-align: right;
                  line-height: 26px;
                  span:nth-child(1) {
                      font-size: 11px;
                      color: rgb(242,0,0);
                  }
                  span:nth-child(2) {
                      font-size: 16px;
                      color: rgb(242,0,0);
                  }
                  span:nth-child(3) {
                      font-size: 11px;
                      color: rgb(168,168,168);
                  }
              }
          }
      }
      .item-bottom {
          width: 100%;
          line-height: 40px;
          text-align: right;
          padding-top: 5px;
          span:nth-child(1) {
              font-size: 15px;
          }
          span:nth-child(2) {
              font-size: 20px;
          }
      }
      .item-more {
          width: 100%;
          display: flex;
          div {
            display: flex;
            align-items: center;
          }
          div:nth-child(2) {
            margin-left: 15px;
          }
          .btn {
              width: 92px;
              height: 28px;
              border-radius: 20px;
              position: relative;
              border: 1.5px solid rgb(195,152,98);
              margin-left: auto;
              margin-top: 10px;
              margin-bottom: 6px;
              span {
                  font-size: 15px;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  margin-top: -10.4px;
                  margin-left: -16px;
                  color: rgb(195,152,98);
              }
          }
      }
  }
</style>
