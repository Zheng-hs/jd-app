<template>
  <div>
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>

    <el-form :model="formData" ref="form" :rules="formRules" inline label-width="65px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
      </el-form-item>
    </el-form>
    <div class="register-btn">
      <el-button type="text" @click="$router.push({path: '/register'})">我要注册</el-button>
    </div>

    <el-button @click="login" class="login-btn" type="primary">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
  </div>
</template>

<script>
<<<<<<< HEAD
import axios from 'axios'
const qs = require('qs')
=======
import req from '@/api/global.js'
import axios from 'axios'
const qs = require('qs')

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
export default {
  name: 'login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'change'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    login () {
<<<<<<< HEAD
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;'
      axios({
        method: 'post',
        url: 'http://3t059459r5.wicp.vip/uaa/auth/form',
        data: qs.stringify(this.formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;'
        }

      }).then(data => {
        if (data.data.code === 0) {
          this.$message({
            type: 'success',
            message: data.data.msg
          })
          sessionStorage.setItem('userInfo', JSON.stringify(data.data.data))
          this.getUser(data.data.data.access_token)
        } else {
          this.$message({
            type: 'error',
            message: data.data.msg
          })
        }
      })
    },
    getUser (token) {
      axios({
        method: 'post',
        url: 'http://3t059459r5.wicp.vip/app/user/getUser',
        data: qs.stringify({ access_token: token }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;'
        }
      }).then(data => {
        if (data.data.code === 0) {
          sessionStorage.setItem('roleInfo', JSON.stringify(data.data.data))
          console.log('data.data.data', data.data.data)
          if (data.data.data.role === '1') {
            this.$router.push({ path: '/driver-info' })
          } else if (data.data.data.role === '2') {
            this.$router.push({ path: '/driver-page' })
          } else {
            this.$router.push({ path: '/home' })
          }
        } else {
          this.$message({
            type: 'error',
            message: data.data.msg
          })
        }
=======
      this.$refs.form.validate(valid => {
        if (valid) {
          axios({
            method: 'post',
            url: process.env.BASE_API + '/uaa/auth/form',
            data: qs.stringify(this.formData),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;'
            }
          }).then(data => {
            if (data.data.code === 0) {
              this.$message({
                type: 'success',
                message: data.data.msg
              })

              // this.getHeader(data.data.data.access_token)

              sessionStorage.setItem('userInfo', JSON.stringify(data.data.data))

              this.getUserInfo()
            } else {
              this.$message({
                type: 'error',
                message: data.data.msg
              })
            }
          })
        } else {
          return false
        }
      })
    },
    getUserInfo () {
      req('getUserInfo', {...this.formData}).then(data => {
        sessionStorage.setItem('roleInfo', JSON.stringify(data.data))

        if (data.data.role === '4') {
          this.$router.push({path: '/home'})
        } else if (data.data.role === '2') {
          this.$router.push({path: '/order-list'})
        } else {
          this.$router.push({path: '/driver-shop-info'})
        }
        console.log('data', data)
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 80%;
  margin: 0 auto;

  img {
    width: 100%;
  }
}

.el-form {
  margin-top: 100px;

  .el-form-item {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;

    /deep/ .el-form-item__error {
      padding-top: 0;
    }
  }
}

.register-btn {
  font-size: 14px;
  text-align: right;
  margin-right: 50px;
}

.login-btn {
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  background-color: rgb(192,146,96);
  border-color: #c09260;
  margin-top: 50px;
}
</style>
