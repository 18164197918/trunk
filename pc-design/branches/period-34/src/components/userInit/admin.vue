<template>
  <div>
    <div>
      <div class="common-tit1 mt50">
        <h4 class="mb10">管理员信息</h4>
        <div></div>
      </div>
    </div>
    <div class="w680 pl40 pr40">
      <el-form
        :model="adminInfo"
        :rules="adminInfoRules"
        label-width="80px"
        ref="ruleTestForm"
        size="small"
      >
        <el-form-item
          label="昵称 :"
          prop="nickname"
        >
          <el-input
            maxlength="20"
            placeholder="请输入昵称"
            v-model="adminInfo.nickname"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="登录账号 :"
          prop="phone"
        >
          <p>{{adminInfo.phone}}</p>
        </el-form-item>
        <el-form-item
          label="头像 :"
          prop="avatar"
        >
          <bg-img-box
            :path="[adminInfo, 'avatar']"
            class="mr20"
          ></bg-img-box>
          <span class="fz12 text-gray-l30">（建议尺寸：90*90像素）</span>
        </el-form-item>
        <el-form-item class="mt30">
          <el-button
            @click="adminSave('ruleTestForm')"
            class="w120"
            type="primary"
          >完成</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import bgImgBox from '../common/bg-img-box.vue'
import API from './API'
export default {
  data () {
    return {
      adminInfo: {
        avatar: '',
        nickname: '',
        phone: ''
      },
      adminInfoRules: {
        nickname: [{
          required: true,
          message: '昵称不能为空',
          trigger: 'blur'
        },
        {
          max: 20,
          message: '最大值不能超过20个',
          trigger: 'blur'
        }]
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.httpGet(API.info).then((res) => {
        this.adminInfo.phone = res.data.phone
      })
    },

    adminSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPut(API.adminInfo, this.adminInfo, {
            setTip: '注册成功'
          }).then((res) => {
            this.$router.push('/bam')
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    }
  },
  components: {
    bgImgBox
  }
}

</script>
<style lang="scss">
@import "../../styles/variables";
</style>
