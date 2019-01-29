<style lang="scss">
</style>

<template>
  <div>
    <div class="app-block-lv2">
      <h6 class="app-title">
        自提点管理- 新建自提点
        <span
          @click="$router.back(-1)"
          class="text-primary cup"
        >返回</span>
      </h6>
      <el-form
        :model="form"
        :rules="rules"
        :status-icon="true"
        class="store-information"
        label-width="140px"
        ref="form"
      >
        <el-form-item
          label="自提点名称"
          prop="title"
        >
          <el-input
            class="w300"
            placeholder="请输入自提点名称，最多18个字"
            v-model="form.title"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="自提点联系人"
          prop="name"
        >
          <el-input
            class="w300"
            placeholder="请输入联系人姓名"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="联系电话"
          prop="contact_phone"
        >
          <el-input
            class="w300"
            placeholder="请输入联系电话"
            v-model="form.contact_phone"
          ></el-input>
        </el-form-item>
        <business-hours
          :hoursList.sync="form.business_hours"
          :labelWidth="labelWidth"
          label="营业时间"
        ></business-hours>
        <a-map
          :labelWidth="labelWidth"
          :required="isRequired"
          label="门店地址"
          v-bind.sync="locationData"
        ></a-map>
      </el-form>
    </div>
    <el-button
      @click="submit()"
      class="w80"
      type="primary"
    >保存</el-button>
    <el-button
      @click="$router.back(-1)"
      class="w80"
    >取消</el-button>
  </div>
</template>
<script>
import API from './API'
import businessHours from '../../common/business-hours.vue'

export default {
  data () {
    return {
      title: '新增',
      labelWidth: 140,
      isRequired: true,
      form: {
        title: '',
        name: '',
        contact_phone: '',
        admin_account: '15210082008',
        address: '',
        province_code: '',
        city_code: '',
        area_code: '',
        wx_longitude: '',
        wx_latitude: '',
        business_hours: []
      },
      locationData: {
        'province': '',
        'city': '',
        'area': '',
        'address': '',
        'lng': '',
        'lat': ''
      },
      rules: {
        title: [
          { required: true, message: '自提点名称不能为空', trigger: 'blur' },
          { max: 18, message: '字数不能超过18个', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '自提点联系人不能为空', trigger: 'blur' }
        ],
        contact_phone: [
          { required: true, message: '联系人电话不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  components: { businessHours },
  created () {
    if (this.$route.params.id) {
      this.title = '编辑'
      this.$httpGet(API.pickupStation, {
        resource: {
          id: this.$route.params.id
        }
      }).then((res) => {
        this.form = res.data
        this.locationData.province = this.form.province_code
        this.locationData.city = this.form.city_code
        this.locationData.area = this.form.area_code
        this.locationData.address = this.form.address
        this.locationData.lng = this.form.wx_longitude
        this.locationData.lat = this.form.wx_latitude
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
      this.form.address = this.locationData.address
      this.form.wx_longitude = this.locationData.lng
      this.form.wx_latitude = this.locationData.lat

      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.$route.params.id) this.$httpPut(API.pickupStation, { resource: { id: this.$route.params.id }, data: this.form })
          else this.$httpPost(API.pickupStation, { data: this.form })
        }
      })
    }

  }

}

</script>
