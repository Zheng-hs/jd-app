<template>
  <div class="container">
    <div class="leader">
        <ul>
<<<<<<< HEAD
            <li :class="{active:isActive === 0 ? 1 : 0}" @click="allOrder">全部订单</li>
            <li :class="{active:isActive === 1 ? 1 : 0}" @click="ordered">已下单</li>
            <li :class="{active:isActive === 2 ? 1 : 0}" @click="waitPickUpOrder">待取货</li>
            <li :class="{active:isActive === 3 ? 1 : 0}" @click="finishOrder">已完成</li>
=======
            <li :class="{active: this.orderType === 'all'}" @click="getOrderList('', 'all')">全部订单</li>
            <li :class="{active: this.orderType === 'payed'}" @click="getOrderList('0', 'payed')">已付款</li>
            <li :class="{active: this.orderType === 'pickup'}" @click="getOrderList('2', 'pickup')">待取货</li>
            <li :class="{active: this.orderType === 'confirm'}" @click="getOrderList('4', 'confirm')">已完成</li>
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
        </ul>
    </div>
    <div class="order-item" v-for="(item, index) of list" :key="index" @click="toPage(item)">
        <div class="item-top">
<<<<<<< HEAD
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
=======
            <img src="../../assets/订单.png" alt="">
            <span>{{item.orderId}}</span>
            <span>
                {{
                    item.orderStateId === '0' ? '已下单' :
                    item.orderStateId === '1' ? '已取消' :
                    item.orderStateId === '2' ? '已到货' :
                    item.orderStateId === '3' ? '已取货' :
                    item.orderStateId === '4' ? '已完成未评价' :
                    '已完成已评价'
                }}
            </span>
        </div>
        <div class="item-center" v-for="(childItem, index) in item.goodsList" :key="index">
            <div class="img-con">
                <img :src="childItem.goodsImagePath" alt="">
            </div>
            <div class="text">
                <div class="text-con">
                    {{childItem.goodsName}}
                </div>
                <div class="props-con">
                    {{childItem.goodsDescribe}}
                </div>
                <div class="price-con">
                    <span>￥</span>
                    <span>{{childItem.goodsPrice}} &nbsp;</span>
                    <span>x{{childItem.cartGoodsCount}}</span>
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
                </div>
            </div>
        </div>
        <div class="shop-user-info" v-show="userType === 'shop'">
            <img src="../../assets/u1056.png" alt="">
            张三
            <img src="../../assets/u1060.png" alt="">
            13511111111
        </div>
        <div class="item-bottom">
<<<<<<< HEAD
            <span>共{{item.orderGoodsCount}}件商品，合计￥</span>
            <span>{{item.orderTotal}}</span>
        </div>
        <div class="item-more" v-show="item.orderState == '0'">
            <div class="btn" @click.stop="evaluate(item)">
                <span>取消订单</span>
            </div>
        </div>
        <div class="item-more" v-show="item.orderState == '3'">
            <div class="btn" @click.stop="evaluate(item)">
                <span>确认收货</span>
            </div>
        </div>
        <div class="item-more" v-show="item.orderState == '4'">
            <div class="btn" @click.stop="evaluate(item)">
=======
            <span>共{{item.orderAllGoodsCount}}件商品，合计￥</span>
            <span>{{item.orderAllCost}}</span>
        </div>
        <!-- 客户 -->
        <div class="item-more" v-show="userType === '4'">
            <div
              class="btn"
              @click.stop="changeOrderStatus(item, '1')"
              v-show="item.orderStateId === '0' || item.orderStateId === '2' || item.orderStateId === '3'">
                <span>取消订单</span>
            </div>
            <div class="btn" @click.stop="evaluate(item)" v-show="item.orderStateId === '4'">
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
                <span>评价</span>
            </div>
            <div class="btn" @click.stop="changeOrderStatus(item, '4')" v-show="item.orderStateId === '3'">
                <span>确认收货</span>
            </div>
        </div>
        <!-- 店长 -->
        <div class="item-more" v-show="userType === '2'">
            <div
              class="btn"
              @click.stop="changeOrderStatus(item, '1')"
              v-show="item.orderStateId === '0' || item.orderStateId === '2'">
                <span>取消订单</span>
            </div>
            <div class="btn" @click.stop="changeOrderStatus(item, '2')" v-show="item.orderStateId === '0'">
                <span>确认到货</span>
            </div>
            <div class="btn" @click.stop="changeOrderStatus(item, '0')" v-show="item.orderStateId === '2'">
                <span>取消到货</span>
            </div>
            <div class="btn" @click.stop="changeOrderStatus(item, '3')" v-show="item.orderStateId === '2'">
                <span>确认取货</span>
            </div>
            <div class="btn" @click.stop="changeOrderStatus(item, '2')" v-show="item.orderStateId === '3'">
                <span>取消取货</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import req from '@/api/order-list.js'
<<<<<<< HEAD
=======

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
export default {
  name: 'order-list',
  data () {
    return {
<<<<<<< HEAD
      list: [
      ],
      listGoods: [],
      isActive: 0,
      statePass: '',
      orderIdPass: ''
    }
  },
  computed: {
    order () {
      return JSON.parse(sessionStorage.getItem('orderInfo'))
    },
    role () {
      return JSON.parse(sessionStorage.getItem('roleInfo'))
=======
      list: [],
      // all payed pickup confirm
      orderType: 'all'
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    }
  },
  computed: {
    userType () {
      return JSON.parse(sessionStorage.getItem('roleInfo')).role
    }
    // orderType () {
    //   if (this.orderDetail.orderStateId === '0') {
    //     return '已下单'
    //   } else if (this.orderDetail.orderStateId === '1') {
    //     return '已取消'
    //   } else if (this.orderDetail.orderStateId === '2') {
    //     return '已到货'
    //   } else if (this.orderDetail.orderStateId === '3') {
    //     return '已取货'
    //   } else if (this.orderDetail.orderStateId === '4') {
    //     return '已完成未评价'
    //   } else {
    //     return '已完成已评价'
    //   }
    // }
  },
  mounted () {
    this.getOrderList('', 'all')
  },
  methods: {
<<<<<<< HEAD
    toPage (data) {
      sessionStorage.setItem('orderInfo', JSON.stringify(data))
      this.$router.push({path: '/order-detail'})
    },
    evaluate (data) {
      console.log(data)
      if (data.orderState === '0') {
        req('updateOrderState', {
          orderCode: data.orderCode,
          orderState: 1,
          version: data.version
        }).then(data => {
          this.listManagerOrders()
          if (data.code !== 0) this.$message.error(data.msg)
          else this.$message.success(data.msg)
        })
      }
      if (data.orderState === '3') {
        req('updateOrderState', {
          orderCode: data.orderCode,
          orderState: 4,
          version: data.version
        }).then(data => {
          this.listManagerOrders()
          if (data.code !== 0) this.$message.error(data.msg)
          else this.$message.success(data.msg)
        })
      }
      if (data.orderState === '4') {
        this.$router.push({path: '/order-evaluate'})
      }
    },
    listManagerOrders (value) {
      req('listOrder', {
        orderState: value,
        pageSize: 100,
        pageNum: 1
      }).then(data => {
        this.list = data.data.list
        // for (let i = 0; i < this.list.length; i++) {
        //   this.orderlist.push(this.list[i].listGoods[0])
        // }
        // console.log(this.orderlist)
        // console.log(this.list.version)
      })
    },
    // 全部订单
    allOrder () {
      this.listManagerOrders()
      this.isActive = 0
      // console.log(this.list.orderId)
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
  },
  mounted () {
    this.listManagerOrders()
=======
    //   用户获取订单
    getOrderList (orderStateId = '', type) {
      let data = {
        orderStateId: orderStateId,
        pageSize: 100,
        pageNum: 1
      }

      if (!orderStateId) {
        delete data.orderStateId
      }

      this.orderType = type
      if (JSON.parse(sessionStorage.getItem('roleInfo')).role === '4') {
        req('getOrderList', {
          ...data
        }).then(data => {
          if (data.code === 0) {
            this.list = data.data.list
          } else {
            this.$message.info(data.msg)
          }
        })
      } else {
        req('getShopOrderList', {
          ...data
        }).then(data => {
          console.log(data)
          if (data.code === 0) {
            this.list = data.data.list
          } else {
            this.$message.info(data.msg)
          }
        })
      }
    },
    toPage (data) {
      this.$router.push({path: '/order-detail', query: data})
    },
    evaluate (data) {
      console.log(data)
      this.$router.push({path: '/order-evaluate', query: data})
    },
    changeOrderStatus (item, changeStatus) {
      // let orderType = ''

      // if (item.orderStateId === '0') {
      //   orderType = '已下单'
      // } else if (item.orderStateId === '1') {
      //   orderType = '已取消'
      // } else if (item.orderStateId === '2') {
      //   orderType = '已到货'
      // } else if (item.orderStateId === '3') {
      //   orderType = '已取货'
      // } else if (item.orderStateId === '4') {
      //   orderType = '已完成未评价'
      // } else {
      //   orderType = '已完成已评价'
      // }

      this.$confirm('确定进行该操作吗?').then(() => {
        req('changeOrderStatus', {orderId: item.orderId, orderStateId: changeStatus, version: item.version}).then(data => {
          if (data.code === 0) {
            this.$message.success(data.msg)

            this.getOrderList('', this.orderType)
          } else {
            this.$message.error(data.msg)
          }
        })
      })
    }
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
  }
}
</script>

<style lang="scss" scoped>
.container {
    padding-bottom: 50px;
}
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
  .order-item {
      width: 95%;
      margin: 0 auto;
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
                  font-size: 13.5px;
                  line-height: 26px;
                  color: rgb(168,168,168);
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
          justify-content: flex-end;

          .btn {
              width: 92px;
              height: 28px;
              border-radius: 20px;
              position: relative;
              border: 1.5px solid rgb(195,152,98);
              margin-left: 5px;
              margin-top: 10px;
              margin-bottom: 6px;
              span {
<<<<<<< HEAD
                      font-size: 15px;
                      position: absolute;
                      top: 50%;
                      left: 38%;
                      margin-top: -10.4px;
                      margin-left: -34px;
                      color: #c39862;
                      width: 92px;
                      text-align: center;
=======
                  font-size: 15px;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                //   margin-top: -10.4px;
                //   margin-left: -16px;
                    width: 100%;
                    text-align:center;
                  color: rgb(195,152,98);
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
              }
          }
      }
  }
</style>
