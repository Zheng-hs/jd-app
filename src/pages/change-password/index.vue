<template>
  <div>
    <div class="pwd-con">
        <div class="pwd-item">
<<<<<<< HEAD
            <el-form :model="formData" inline label-width="100px" ref="form" :rules="formRules">
               <el-form-item label="原密码" prop="oldPassword">
                <el-input type="password" v-model="formData.oldPassword" placeholder="请输入原密码"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newPassword">
                <el-input type="password" v-model="formData.newPassword" placeholder="请输入新密码"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="check">
                <el-input type="password" v-model="formData.check" placeholder="请再次输入新密码"></el-input>
              </el-form-item>
            </el-form>
=======
            <div class="item-left">原密码</div>
            <input type="password" v-model="userPassword" placeholder="请输入原密码">
        </div>
        <div class="pwd-item">
            <div class="item-left">新密码</div>
            <input type="password" v-model="userNewPassword" placeholder="请输入新密码">
        </div>
        <div class="pwd-item">
            <div class="item-left">确认新密码</div>
            <input type="password" v-model="userNewConfirmPassword" placeholder="请再次输入新密码">
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
        </div>
    </div>
    <div class="btn" @click="confirm('ruleForm')">
        <img src="../../assets/按钮.png" >
        <span @click="submit">确认</span>
    </div>
  </div>
</template>

<script>
import req from '@/api/change-password.js'
<<<<<<< HEAD
export default {
  name: 'change-password',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.formData.check !== '') {
          this.$refs.form.validateField('check')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      formData: {},
      formRules: {
        oldPassword: [{ required: true, message: '请填写旧密码', trigger: 'change' }],
        newPassword: [{ required: true, message: '请填写新密码', trigger: 'change' },
          {validator: validatePass, trigger: 'change'}],
        check: [{ required: true, message: '请再次输入密码', trigger: 'change' },
          {validator: validatePass2, trigger: 'change'}]
      }
    }
  },
  computed: {
    userType () {
      return JSON.parse(sessionStorage.getItem('roleInfo')).role
    }
  },
  methods: {
    confirm () {
      if (JSON.parse(sessionStorage.getItem('roleInfo')).role === '3') {
        req('updatePassword', {
          oldPassword: this.formData.oldPassword,
          newPassword: this.formData.newPassword
        }).then(data => {
          console.log(data)
          if (data.code === 0) {
            this.$message({
              type: 'success',
              message: data.msg
            })
            this.$router.push({path: '/login'})
          } else {
            this.$message({
              type: 'error',
              message: data.msg
            })
          }
        })
      } else {
        req('updatePassword', {
          ...this.formData,
          version: JSON.parse(sessionStorage.getItem('roleInfo')).version
        }).then(data => {
          if (data.code === 0) {
            this.$message({
              type: 'success',
              message: data.msg
            })
            this.$router.push({path: '/login'})
          } else {
            this.$message({
              type: 'error',
              message: data.msg
            })
          }
        })
      }
=======

export default {
  name: 'change-password',
  data () {
    return {
      userPassword: '',
      userNewPassword: '',
      userNewConfirmPassword: ''
    }
  },
  methods: {
    submit () {
      if (!this.userPassword) {
        this.$message.info('请输入原密码')

        return
      }
      if (!this.userNewPassword) {
        this.$message.info('请输入新密码')

        return
      }
      if (!this.userNewConfirmPassword) {
        this.$message.info('请确认新密码')

        return
      }
      if (this.userNewPassword !== this.userNewConfirmPassword) {
        this.$message.info('两次输入的密码不一致')

        return
      }
      req('changePassword', {
        userPassword: this.userPassword,
        userNewPassword: this.userNewPassword
      }).then(data => {
        if (data.code === 0) {
          this.$message.success(data.msg)

          sessionStorage.clear('userInfo')
          sessionStorage.clear('roleInfo')
          sessionStorage.clear('currentComm')

          this.$router.push('/login')
        } else {
          this.$message.error(data.msg)
        }
        console.log(data)
      })
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    }
  }
}
</script>

<style lang="scss" scoped>
  .pwd-con {
      width: 95%;
      height: 160px;
      margin: 12px auto;
      background-color: white;
      padding: 12px 12px;
      box-sizing: border-box;
      border-radius: 8px;
      .pwd-item {
        .el-form {
          .el-form-item {
            .el-form-item__label {
              padding-left: 18px;
            }
          }
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
