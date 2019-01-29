<template>
  <div>
    <div>
      <div class="common-tit1 mt50">
        <h4 class="mb10">公司信息</h4>
        <div></div>
      </div>
    </div>
    <div class="w680 pl40 pr40">
      <el-form
        :model="userInfo"
        :rules="userInfoRules"
        label-width="120px"
        ref="ruleTestForm"
        size="small"
      >
        <el-form-item
          label="公司名称 :"
          prop="customer_name"
        >
          <el-input
            maxlength="20"
            placeholder="请输入公司名称"
            v-model="userInfo.customer_name"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="联系电话 :"
          prop="phone"
        >
          <el-input
            maxlength="11"
            placeholder="请输入联系电话"
            v-model="userInfo.phone"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="客户行业 :"
          placeholder="请选择"
          prop="industry"
          v-model="userInfo.industry"
        >
          <el-cascader
            :options="tradesList"
            :show-all-levels="true"
            @change="tradesChange"
            class="w430"
            expand-trigger="hover"
          ></el-cascader>
        </el-form-item>
        <el-form-item
          label="LOGO :"
          prop="avatar"
        >
          <bg-img-box
            :path="[userInfo, 'avatar']"
            class="mr20"
          ></bg-img-box>
          <span class="fz12 text-gray-l30">（请上传公司LOGO，建议尺寸：90*90像素）</span>
        </el-form-item>
        <el-form-item class="mt30">
          <el-button
            @click="userSave('ruleTestForm')"
            class="w120"
            type="primary"
          >下一步</el-button>
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
      tradesList: [],
      userInfo: {
        avatar: '',
        customer_name: '',
        phone: '',
        industry: ''
      },
      userInfoRules: {
        customer_name: [{
          required: true,
          message: '公司名称不能为空',
          trigger: 'blur'
        },
        {
          max: 20,
          message: '最大值不能超过20个',
          trigger: 'blur'
        }
        ],
        phone: [{
          required: true,
          message: '联系电话不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/g,
          message: '联系电话格式错误,请重新输入',
          trigger: 'blur'
        }
        ],
        industry: [{
          required: true,
          message: '行业不能为空',
          trigger: 'blur'
        }]
      }
    }
  },
  created () {
    this.getTradesList()
  },
  methods: {

    // 获取行业信息
    getTradesList () {
      this.httpGet(API.trades).then((res) => {
        res.collection.forEach((item, i) => {
          if (item.son_industry instanceof Array) {
            this.tradesList.push({
              value: item.code,
              label: item.name,
              children: []
            })
            res.collection[i].son_industry.forEach(li => {
              this.tradesList[i].children.push({
                value: li.code,
                label: li.name
              })
            })
          } else {
            this.tradesList.push({
              value: item.code,
              label: item.name
            })
          }
        })
      })
    },

    // 行业选择
    tradesChange (e) {
      this.userInfo.industry = e[e.length - 1]
    },

    // 保存用户信息
    userSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPost(API.userInfo, this.userInfo, {
            setTip: false
          }).then((res) => {
            this.$router.push('/userInit/admin')
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
