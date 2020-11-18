<template>
  <div class="container">
    <ul class="book-classify">
<<<<<<< HEAD
      <li :class="{active: item.isShow}"  v-for="(item, index) in firstList"
        :key="index" @click="clickTitle(item)">
        <b v-show="item.isShow"></b>
        <span>{{item.cateName}}</span>
=======
      <li :class="{active: item.classifyId === currentClassify.classifyId}" v-for="(item, index) in oneClassifyList" :key="index" @click="getTwoClassify(item)">
        <b></b>
        <span>{{item.classifyName}}</span>
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
      </li>
    </ul>
    <ul class="book-classify-conteiner">
      <li class="book-classify-item" v-for="(item, index) in secondList" :key="index">
        <div class="book-classify-item-title">{{item.cateName}}</div>
        <ul class="book-list">
<<<<<<< HEAD
          <li v-for="(childItem, childIndex) in item.listGoods" :key="childIndex" @click="getCommDetail(childItem)">
            <img :src="childItem.goodsPhoto" alt="">
=======
          <li v-for="(childItem, childIndex) in item.goodsList" :key="childIndex" @click="getCommDetail(childItem)">
            <img :src="childItem.goodsImagePath" alt="">
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
            <div>{{childItem.goodsName}}</div>
            <div>
              ￥{{childItem.sellPrice}}
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import req from '@/api/comm-classify.js'
<<<<<<< HEAD
=======

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
export default {
  name: 'comm-classify',
  data () {
    return {
      oneClassifyList: [],
      currentClassify: {},
      commList: [
<<<<<<< HEAD
        {
          classifyId: '',
          classifyName: '小说',
          goodsList: [
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            },
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            },
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            },
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            },
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            }
          ]
        },
        {
          classifyId: '',
          classifyName: '散文',
          goodsList: [
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            },
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            },
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            },
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            },
            {
              goodsId: '',
              goodsImagePath: './image/book1.jpg',
              goodsName: '迪士尼爱与梦想绘本',
              goodsPrice: '131.30'
            }
          ]
        }
      ],
      firstList: [],
      secondList: [],
      activeIndex: '1'
=======
        // {
        //   classifyId: '',
        //   classifyName: '小说',
        //   goodsList: [
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     },
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     },
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     },
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     },
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     }
        //   ]
        // },
        // {
        //   classifyId: '',
        //   classifyName: '散文',
        //   goodsList: [
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     },
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     },
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     },
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     },
        //     {
        //       goodsId: '',
        //       goodsImagePath: './image/book1.jpg',
        //       goodsName: '迪士尼爱与梦想绘本',
        //       goodsPrice: '131.30'
        //     }
        //   ]
        // }
      ]
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    }
  },
  mounted () {
    this.getClassify()
  },
  methods: {
<<<<<<< HEAD
    getCommDetail (data) {
      console.log(data)
      this.$router.push({path: '/comm-detail'})
      sessionStorage.setItem('goodsInfo', JSON.stringify(data))
    },
    first () {
      req('getGoodsClassify', {
      }).then(data => {
        console.log(data)
        this.firstList = data.data
        this.firstList.forEach(item => {
          return Object.assign(item, {isShow: false})
        })
        this.firstList[0].isShow = true
        // console.log('11', this.firstList)
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    clickTitle (item) {
      console.log('item', item)
      this.firstList.forEach(item => {
        item.isShow = false
        console.log(item.isShow)
      })
      item.isShow = true
      req('listClassifyGoods', {
        cateCode: item.cateCode
      }).then(data => {
        this.secondList = data.data
      })
=======
    getClassify () {
      req('getClassify', {}).then(data => {
        this.oneClassifyList = data.data.oneClassifyList

        this.currentClassify = this.oneClassifyList[0]

        this.getTwoClassify(this.currentClassify)
      })
    },
    getTwoClassify (item) {
      this.currentClassify = item

      req('getTwoClassify', {classifyId: item.classifyId}).then(data => {
        this.commList = data.data.twoClassifyList
      })
    },
    getCommDetail (item) {
      sessionStorage.setItem('currentComm', JSON.stringify(item))

      this.$router.push({path: '/comm-detail'})
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    }
  },
  mounted () {
    this.first()
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #ddd;

  .book-classify {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20%;
    background: #fff;

    li {
      position: relative;
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;

      >span {
        display: inline-block;
        width: 100%;
        height: 100%;
      }

    }
    li.active {
      color: rgb(197, 156, 104);
      background: #ddd;

      b {
        position: absolute;
        left: 0;
        top: 50%;
        width: 3px;
        height: 20px;
        background: rgb(197, 156, 104);
        margin-top: -10px;
      }
    }
  }
  .el-menu {
    .el-menu-item {
      width: 90px;
    }
  }

  .book-classify-conteiner {
    position: absolute;
    top: 0;
    left: 22%;
    bottom: 0;
    overflow: auto;
    width: 78%;

    .book-classify-item:last-child{
      margin-bottom: 70px;
    }
    .book-classify-item {
      .book-classify-item-title {
        width: 100%;
        height: 40px;
        padding-left: 10px;
        box-sizing: border-box;
        line-height: 40px;
      }

      .book-list {
        width: 100%;
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
        box-sizing: border-box;

        li {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 50%;
          margin-bottom: 10px;

          img {
            width: 70%;
          }

          div:nth-child(2) {
            font-size: 12px;
          }

          div:nth-child(3) {
            color: red;
            font-size: 14px;
            font-weight: bold;

            span {
              color: #ddd;
              font-weight: normal;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
