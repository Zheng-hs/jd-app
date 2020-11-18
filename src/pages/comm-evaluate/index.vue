<template>
  <div class="container">
    <div class="evaluate-title">
<<<<<<< HEAD
      <span :class="{active:isActive === 0 ? 1 : 0}" @click="allStar">全部评价</span>
      <span :class="{active:isActive === 1 ? 1 : 0}" @click="goodStar">好评</span>
      <span :class="{active:isActive === 2 ? 1 : 0}" @click="middleStar">中评</span>
      <span :class="{active:isActive === 3 ? 1 : 0}" @click="lowStar">差评</span>
=======
      <span :class="{active: evaluateBtnType === 'all'}" @click="getEvaluate('', 'all')">全部评价</span>
      <span :class="{active: evaluateBtnType === 'perfect'}" @click="getEvaluate('5', 'perfect')">好评</span>
      <span :class="{active: evaluateBtnType === 'good'}" @click="getEvaluate('3', 'good')">中评</span>
      <span :class="{active: evaluateBtnType === 'differ'}" @click="getEvaluate('1', 'differ')">差评</span>
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    </div>

    <ul class="evaluate-list">
      <li v-for="(item, index) in list" :key="index">
        <!-- <div class="head-pic">
          <img src="../../assets/head_pic.png" alt="">
        </div> -->

        <div class="content">
          <div class="title">
            <div class="user-info">
              <div class="name">{{item.customerAccount}}</div>
              <div class="date">{{item.timeCreate}}</div>
            </div>

            <div
              class="star"
              :style="{backgroundPosition: `${90 - item.star*18}px 0`}">
            </div>
          </div>
          <div class="msg">{{item.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import req from '@/api/comm-evaluate.js'
<<<<<<< HEAD
=======

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
export default {
  name: 'comm-evaluate',
  data () {
    return {
<<<<<<< HEAD
      list: [
        // {
        //   userAcct: 'Cvita Doleschall',
        //   evaluateContent: '这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容',
        //   evaluateScore: '1',
        //   createTime: '2020-01-01 11:11:11',
        //   imageList: []
        // },
        // {
        //   userAcct: 'Cvita Doleschall',
        //   evaluateContent: '这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容',
        //   evaluateScore: '3',
        //   createTime: '2020-01-01 11:11:11',
        //   imageList: []
        // },
        // {
        //   userAcct: 'Cvita Doleschall',
        //   evaluateContent: '这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容',
        //   evaluateScore: '5',
        //   createTime: '2020-01-01 11:11:11',
        //   imageList: []
        // },
        // {
        //   userAcct: 'Cvita Doleschall',
        //   evaluateContent: '这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容',
        //   evaluateScore: '2',
        //   createTime: '2020-01-01 11:11:11',
        //   imageList: []
        // },
        // {
        //   userAcct: 'Cvita Doleschall',
        //   evaluateContent: '这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容',
        //   evaluateScore: '5',
        //   createTime: '2020-01-01 11:11:11',
        //   imageList: []
        // },
        // {
        //   userAcct: 'Cvita Doleschall',
        //   evaluateContent: '这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容这是一段评价内容',
        //   evaluateScore: '1',
        //   createTime: '2020-01-01 11:11:11',
        //   imageList: []
        // }
      ],
      isActive: 0,
      statePass: '',
      orderIdPass: ''
    }
  },
  computed: {
    goods () {
      return JSON.parse(sessionStorage.getItem('goodsInfo'))
    },
    role () {
      return JSON.parse(sessionStorage.getItem('roleInfo'))
    }
  },
  methods: {
    Star (value) {
      req('listAssessGoods', {
        goodsCode: this.goods.goodsCode,
        star: value
      }).then(data => {
        console.log(data)
        this.list = data.data.list
      })
    },
    allStar () {
      this.Star()
      this.isActive = 0
    },
    goodStar () {
      this.statePass = '5'
      this.Star(this.statePass)
      this.isActive = 1
    },
    middleStar () {
      this.statePass = '3'
      this.Star(this.statePass)
      this.isActive = 2
    },
    lowStar () {
      this.statePass = '1'
      this.Star(this.statePass)
      this.isActive = 3
=======
      list: [],
      // all perfect good differ
      evaluateBtnType: 'all'
    }
  },
  mounted () {
    this.getEvaluate('', 'all')
  },
  methods: {
    getEvaluate (score = '', type) {
      this.evaluateBtnType = type

      let commData = JSON.parse(sessionStorage.getItem('currentComm'))
      let data = {
        goodsId: commData.goodsId,
        evaluateScore: score,
        pageSize: 100,
        pageNum: 1
      }

      if (!score) {
        delete data.evaluateScore
      }

      req('getEvaluate', {
        ...data
      }).then(data => {
        console.log(data)
        if (data.code === 0) {
          this.list = data.data.list
        } else {
          this.$message.info(data.msg)
          this.list = []
        }
      })
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    }
  },
  mounted () {
    this.Star()
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ddd;
  padding-bottom: 10px;

  .evaluate-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    box-sizing: border-box;

    span {
      padding: 0 10px;
    }

    .active {
      color: #C39862;
      font-size: 20px;
    }
  }

  .evaluate-list {
    width: 95%;
    background: #fff;
    margin: 0 auto;
    border-radius: 10px;

    li {
      display: flex;

      // .head-pic {
      //   width: 50px;
      //   height: 50px;
      //   padding: 10px;

      //   img {
      //     width: 100%;
      //     height: 100%;
      //   }
      // }

      .content {
        flex: 1;
        padding: 10px;

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 60px;

          .user-info {
            .date {
              color: #ddd;
              font-size: 14px;
            }
          }

          .star {
            width: 90px;
            height: 18px;
            background-image: url('../../assets/stars.png');
            background-position: 0 0;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
}
</style>
