<template>
  <div>
    <div class="content" :model="formData" prop="shopInvite">
        <div class="con-left">新邀请码</div>
<<<<<<< HEAD
        <input type="text" placeholder="请输入邀请码" v-model="formData.shopInvite">
    </div>
    <div class="btn" @click="confirm">
=======
        <input type="text" v-model="storeCode" placeholder="请输入邀请码">
    </div>
    <div class="btn" @click="changeStoreCode">
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
        <img src="../../assets/按钮.png" >
        <span>确认</span>
    </div>
  </div>
</template>

<script>
import req from '@/api/change-store-code.js'
<<<<<<< HEAD
=======

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
export default {
  name: 'change-store-code',
  data () {
    return {
<<<<<<< HEAD
      formData: {}
    }
  },
  methods: {
    confirm () {
      req('updateShopInvite', {
        ...this.formData
      }).then(data => {
        if (data.code !== 0) this.$message.error(data.msg)
        else this.$message.success(data.msg)
        // this.$router.push({path: '/login'})
=======
      storeCode: ''
    }
  },
  methods: {
    changeStoreCode () {
      if (!this.storeCode) {
        this.$message.info('请先输入邀请码')

        return
      }

      req('changeStoreCode', {inviteCode: this.storeCode}).then(data => {
        if (data.code === 0) {
          this.$message.success(data.msg + ', 请重新登陆')

          setTimeout(() => {
            sessionStorage.clear('userInfo')
            sessionStorage.clear('roleInfo')
            sessionStorage.clear('currentComm')
            this.$router.push({path: '/login'})
          })
        } else {
          this.$message.error(data.msg)
        }
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
      width: 95%;
      margin: 12px auto;
      background-color: white;
      display: flex;
      border-radius: 8px;
      font-size: 17px;
      .con-left {
          flex: 1;
          line-height: 90px;
          text-align: center;
      }
      input {
          flex: 2;
          line-height: 90px;
          border: none;
          outline: none;
          padding-left: 20px;
          box-sizing: border-box;
          font-size: 17px;
          color: rgb(168,168,168);
          &::placeholder {
              color: rgb(168,168,168)
          }
      }
  }
  .btn {
      width: 300px;
      height: 65px;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      bottom: 80px;
      img {
          width: 100%;
      }
      span {
          font-size: 22px;
          color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -14.4px;
          margin-left: -22px;
      }
  }
</style>
