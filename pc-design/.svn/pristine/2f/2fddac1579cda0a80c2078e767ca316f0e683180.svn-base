<style lang="scss">
.addresss-form {
  .el-checkbox + .el-checkbox {
    margin-left: 0 !important;
  }
}
</style>

<template>
  <div class="addresss-form">
    <div class="app-block-lv2">
      <h6 class="app-title">
        地址库- 新建地址
        <span
          @click="p_show = true"
          class="text-primary fz12 cup"
        >返回</span>
      </h6>
      <el-form
        :model="form"
        :rules="rules"
        :status-icon="true"
        class="store-information"
        label-width="100px"
        ref="form"
      >
        <el-form-item
          label="联系人"
          prop="receiver"
        >
          <el-input
            class="w300"
            placeholder="请输入联系人"
            v-model="form.receiver"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="联系电话"
          prop="phone"
        >
          <el-input
            class="w300"
            placeholder="请输入联系电话"
            v-model="form.phone"
          ></el-input>
        </el-form-item>
        <a-map v-bind.sync="locationData"></a-map>
        <el-form-item
          label="邮政编码"
          prop="postal_code"
        >
          <el-input
            class="w300"
            placeholder="邮政编码"
            v-model="form.postal_code"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址类型">
          <p class="h30">
            <el-checkbox v-model="form.deliver_default">设为默认发货地址</el-checkbox>
          </p>
          <p class="h30">
            <el-checkbox v-model="form.return_default">设为默认退货地址</el-checkbox>
          </p>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="submit"
            type="primary"
          >保存</el-button>
          <el-button @click="p_show = true">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import API from '../API'
export default {
  name: 'addressForm',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    storeId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      title: '地址库',
      p_id: this.storeId,
      p_show: this.show,
      form: {
        receiver: '',
        phone: '',
        deliver_default: false,
        return_default: false,
        postal_code: '',
        wx_latitude: '',
        wx_longitude: '',
        province_code: '',
        city_code: '',
        area_code: '',
        address: ''
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
        receiver: [
          { required: true, message: '请输入联系人', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'change' }
        ],
        postal_code: [
          { required: true, message: '请输入邮政编码', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    show (val) {
      this.p_show = val
    },
    p_show (val) {
      this.$emit('update:show', val)
    }
  },
  created () {
    if (this.p_id) {
      this.$httpGet(API.warehouse, {
        resource: {
          id: this.p_id
        }
      }).then((res) => {
        this.form = res.data
        this.locationData = {
          province: this.form.province_code,
          city: this.form.city_code,
          area: this.form.area_code,
          address: this.form.address,
          lng: this.form.wx_longitude,
          lat: this.form.wx_latitude
        }
      })
    } else {
      this.form = {
        receiver: '',
        phone: '',
        deliver_default: false,
        return_default: false,
        postal_code: '',
        wx_latitude: '',
        wx_longitude: '',
        province_code: '',
        city_code: '',
        area_code: '',
        address: ''
      }
    }
  },
  methods: {
    submit () {
      this.form.wx_longitude = this.locationData.lng
      this.form.wx_latitude = this.locationData.lat
      this.form.province_code = this.locationData.province
      this.form.city_code = this.locationData.city
      this.form.area_code = this.locationData.area
      this.form.address = this.locationData.address
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.p_id) {
            this.$httpPut(API.warehouse, { resource: { id: this.p_id }, data: this.form }).then(() => { this.p_show = true })
          } else {
            this.$httpPost(API.warehouse, { resource: { id: this.$route.params.id }, data: this.form }).then(() => { this.p_show = true })
          }
        }
      })
    }
  }
}
</script>
