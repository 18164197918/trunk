<style lang="scss">
</style>

<template>
  <div>
    <h6 class="app-title">
      供应商管理 - {{title}}供应商
      <span
        @click="$router.back(-1)"
        class="text-primary cup"
      >返回</span>
    </h6>
    <div class="app-block-lv2">
      <h6>基本信息</h6>
      <el-form
        :model="form"
        :rules="rules"
        :status-icon="true"
        class="store-information"
        label-width="100px"
        ref="form"
      >
        <el-form-item
          label="编号"
          prop="supplier_code"
        >
          <el-input
            class="w300"
            placeholder="请输入编号，最多10个字"
            v-model="form.supplier_code"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="供应商名称"
          prop="supplier_name"
        >
          <el-input
            class="w300"
            placeholder="请输入供应商名称，最多30个字"
            v-model="form.supplier_name"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="单位电话"
          prop="work_telephone"
        >
          <el-input
            class="w300"
            placeholder="请输入电话号码"
            v-model="form.work_telephone"
          ></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <address-choose v-bind.sync="locationData"></address-choose>
        </el-form-item>
        <el-form-item
          label="详细地址"
          prop="address"
        >
          <el-input
            class="w300"
            placeholder="请输入详细地址，最多30个字"
            v-model="form.address"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="联系人"
          prop="contacts"
        >
          <el-input
            class="w300"
            placeholder="请输入联系人，最多10个字"
            v-model="form.contacts"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="联系电话"
          prop="telephone"
        >
          <el-input
            class="w300"
            placeholder="请输入联系电话"
            v-model="form.telephone"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="app-block-lv2">
      <h6>拓展信息</h6>
      <el-form
        :model="form"
        :rules="rules"
        :status-icon="true"
        class="store-information"
        label-width="100px"
        ref="form1"
      >
        <el-form-item label="QQ号">
          <el-input
            class="w300"
            placeholder="请输入QQ号"
            v-model="form.qq"
          ></el-input>
        </el-form-item>
        <el-form-item label="微信号">
          <el-input
            class="w300"
            placeholder="请输入微信号"
            v-model="form.wechart"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="email"
        >
          <el-input
            class="w300"
            placeholder="请输入邮箱"
            v-model="form.email"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="传真"
          prop="fax"
        >
          <el-input
            class="w300"
            placeholder="请输入传真"
            v-model="form.fax"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button
      @click="submit()"
      class="w150"
      type="primary"
    >确认</el-button>
  </div>
</template>
<script>
import API from './API'

export default {
  data () {
    return {
      title: '新增',
      form: {
        supplier_code: '',
        supplier_name: '',
        work_telephone: '',
        contacts: '',
        telephone: '',
        address: '',
        qq: '',
        wechart: '',
        email: '',
        fax: '',
        province_code: '',
        city_code: '',
        area_code: ''
      },
      locationData: {
        'province': '',
        'city': '',
        'area': ''
      },
      rules: {
        supplier_name: [
          { required: true, message: '供应商名称不能为空', trigger: 'blur' },
          { max: 30, message: '字数不能超过30个', trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  created () {
    if (this.$route.params.id) {
      this.title = '编辑'
      this.$httpGet(API.supplier, {
        resource: {
          id: this.$route.params.id
        }
      }).then((res) => {
        this.form = res.data
        this.locationData.province = this.form.province_code
        this.locationData.city = this.form.city_code
        this.locationData.area = this.form.area_code
      })
    } else {
      this.title = '新增'
    }
  },
  methods: {
    submit () {
      this.form.province_code = this.locationData.province
      this.form.city_code = this.locationData.city
      this.form.area_code = this.locationData.area

      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.$route.params.id) this.$httpPut(API.supplier, { resource: { id: this.$route.params.id }, data: this.form }).then(() => { this.$router.back(-1) })
          else this.$httpPost(API.supplier, { data: this.form }).then(() => { this.$router.back(-1) })
        }
      })
    }
  }

}

</script>
