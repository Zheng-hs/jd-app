<template>
  <div class="container">
    <div class="banner-pic-list">
      <el-carousel height="200px" indicator-position="none">
        <el-carousel-item v-for="(item, index) in slideshowList" :key="index">
          <img :src="item.slideshowPath" alt="" @click="toDetailPage(item)">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="module-title">热门商品</div>

    <ul class="comm-list">
      <li
        v-for="(item, index) in commList"
        :key="index"
        @click="toDetailPage(item)">
<<<<<<< HEAD
        <img :src="item.goodsPhoto" alt="">
        <div class="book-info">{{item.goodsName}}</div>
        <div>￥{{item.sellPrice}}</div>
=======
        <img :src="item.goodsImagePath" alt="">
        <div class="book-info">{{item.goodsName}}</div>
        <div>￥{{item.goodsPrice}}</div>
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
      </li>
    </ul>
  </div>
</template>

<script>
import req from '@/api/comm-home.js'
<<<<<<< HEAD
=======

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
export default {
  name: 'comm-home',
  data () {
    return {
<<<<<<< HEAD
      picList: [
        // '../../../static/assets/u159.jpg',
        // '../../../static/assets/u161.jpg',
        // '../../../static/assets/u157.jpg'
      ],
      commList: [
        // {
        //   goodsId: '1',
        //   goodsName: '迪士尼爱与梦想绘本（套装共15册）[3-6岁]',
        //   goodsImagePath: '../../assets/book1.jpg',
        //   goodsPrice: '￥154.50'
        // },
        // {
        //   goodsId: '1',
        //   goodsName: '迪士尼爱与梦想绘本（套装共15册）[3-6岁]',
        //   goodsImagePath: '../../assets/book1.jpg',
        //   goodsPrice: '￥154.50'
        // },
        // {
        //   goodsId: '1',
        //   goodsName: '迪士尼爱与梦想绘本（套装共15册）[3-6岁]',
        //   goodsImagePath: '../../assets/book1.jpg',
        //   goodsPrice: '￥154.50'
        // },
        // {
        //   goodsId: '1',
        //   goodsName: '迪士尼爱与梦想绘本（套装共15册）[3-6岁]',
        //   goodsImagePath: '../../assets/book1.jpg',
        //   goodsPrice: '￥154.50'
        // },
        // {
        //   goodsId: '1',
        //   goodsName: '迪士尼爱与梦想绘本（套装共15册）[3-6岁]',
        //   goodsImagePath: '../../assets/book1.jpg',
        //   goodsPrice: '￥154.50'
        // },
        // {
        //   goodsId: '1',
        //   goodsName: '迪士尼爱与梦想绘本（套装共15册）[3-6岁]',
        //   goodsImagePath: '../../assets/book1.jpg',
        //   goodsPrice: '￥154.50'
        // }
      ]
    }
  },
  mounted () {
    this.picphoto()
    this.hot()
=======
      slideshowList: [],
      commList: []
    }
  },
  mounted () {
    this.getSliderPicList()
    this.getHotComm()
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
  },
  methods: {
    getSliderPicList () {
      req('getSliderPicList', {}).then(data => {
        this.slideshowList = data.data.slideshowList
      })
    },
    getHotComm () {
      req('getHotComm', {}).then(data => {
        this.commList = data.data.list
        console.log(data)
      })
    },
    toDetailPage (data) {
      sessionStorage.setItem('currentComm', JSON.stringify(data))

      this.$router.push({path: '/comm-detail'})
      sessionStorage.setItem('goodsInfo', JSON.stringify(data))
    },
    picphoto () {
      req('listHomeSlideshow', {
      }).then(data => {
        for (let i = 0; i < data.data.length; i++) {
          this.picList.push(data.data[i].photoPath)
          // console.log(this.picList)
        }
      })
    },
    hot () {
      req('listHomeHotGoods', {

      }).then(data => {
        for (let i = 0; i < data.data.length; i++) {
          this.commList.push(data.data[i])
          console.log(this.commList)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ddd;
}

.el-carousel {
  .el-carousel__container {
    .el-carousel__item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.module-title {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background: #ddd;
  margin-top: 10px;
}

.comm-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  // margin-top: 10px;

  li {
    position: relative;
    width: 48%;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    margin: 5px 1%;
    border-radius: 10px;

    img {
      width: 100%;
<<<<<<< HEAD
      height: 178px;
=======
      height: 170px;
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    }

    div:nth-child(2) {
      font-size: 15px;
      padding-left: 10px;
      text-align: center;
    }

    div:nth-child(3) {
      font-size: 14px;
      text-align: right;
      padding-right: 5px;
      margin-top: 10px;
      color: red;
      font-weight: bold;
    }
  }
}
</style>
