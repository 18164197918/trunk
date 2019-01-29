<template>
  <div>
    <h6 class="app-title">
      门店列表 - {{title}}
      <span v-if="$route.params.id">
        <i class="iconfont fz14 iconfont-pingfang mr10"></i>
        {{storeName}}
      </span>
    </h6>
    <el-form
      :model="form"
      :rules="rules"
      class="mt20"
      label-width="120px"
      ref="form"
    >
      <el-form-item
        label="门店名称："
        prop="name"
      >
        <el-input
          class="w300"
          placeholder="请输入门店名称，最多30个字"
          v-model="form.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="门店编号：">
        <el-input
          class="w300"
          placeholder="请输入门店编号，最多30个字"
          v-model="form.code"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="门店LOGO："
        required
      >
        <bg-img-box
          :src.sync="form.logo"
          upload
        ></bg-img-box>
      </el-form-item>
      <business-hours
        :hoursList.sync="form.business_hours"
        :labelWidth="labelWidth"
        label="营业时间："
      ></business-hours>
      <el-form-item
        label="联系人："
        prop="contact_name"
      >
        <el-input
          class="w300"
          placeholder="请输入联系人名字"
          v-model="form.contact_name"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="联系电话："
        prop="contact_phone"
      >
        <el-input
          class="w300"
          placeholder="请输入联系电话"
          v-model="form.contact_phone"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="门店简介："
        prop="description"
      >
        <el-input
          class="w420"
          placeholder="请输入门店简介内容，不超过255字"
          rows="6"
          type="textarea"
          v-model="form.description"
        ></el-input>
      </el-form-item>
      <a-map
        :label="'门店地址'"
        :labelWidth="120"
        v-bind.sync="locationData"
      ></a-map>
      <el-form-item
        label="门店状态："
        required
      >
        <el-radio-group v-model="form.open_status">
          <el-radio :label="true">启用</el-radio>
          <el-radio :label="false">停用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="网店状态："
        required
      >
        <el-radio-group v-model="form.open_online">
          <el-radio :label="true">启用网店</el-radio>
          <el-radio :label="false">停用网店</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="打标签：">
        <el-button
          @click="setTags"
          plain
          size="mini"
          type="info"
        >打标签</el-button>
        <div>
          <el-tag
            :key="tag.id"
            @close="tagDelete(index)"
            class="mr5"
            closable
            size="mini"
            v-for="(tag,index) in form.store_relation_tags"
          >{{tag.store_tag_name}}</el-tag>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="submitForm('form')"
          type="primary"
        >保存</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
    <!--打标签-->
    <el-dialog
      :visible.sync="dialogSetLabel"
      title="选择标签"
    >
      <div class="clearfix fz12">
        <div style="min-height: 100px">
          <el-checkbox-group
            :max="5"
            v-model="mytags"
          >
            <el-checkbox
              :key="tag.id"
              :label="tag.id"
              v-for="tag in tagList"
            >{{tag.tag_name}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div
        class="dialog-footer"
        slot="footer"
      >
        <el-button @click="handleClose()">取 消</el-button>
        <el-button
          @click="comfirmSetTags()"
          type="primary"
        >确 定</el-button>
      </div>
    </el-dialog>
    <!--打标签-->
  </div>
</template>

<script>
import API from './API'
import businessHours from '../../common/business-hours.vue'
function getTags () {
  this.$httpGet(API.tagsAll).then((res) => {
    this.tagList = res.collection
  })
}
export default {
  components: { businessHours },
  data () {
    return {
      title: '新建门店',
      storeName: '',
      dialogSetLabel: false,
      labelWidth: 120,
      mytags: [],
      tagList: [],
      locationData: {
        'province': '',
        'city': '',
        'area': '',
        'address': '',
        'lng': '',
        'lat': ''
      },
      form: {
        'wx_longitude': '',
        'wx_latitude': '',
        'contact_phone': '',
        'code': '',
        'logo': '',
        'name': '',
        'description': '',
        'contact_name': '',
        'province_code': '',
        'city_code': '',
        'area_code': '',
        'address': '',
        'open_status': true,
        'open_online': true,
        'tag_ids': [],
        'store_relation_tags': [],
        'business_hours': [
        ]
      },
      rules: {
        name: [{
          required: true,
          message: '请输入活动名称',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 30,
          message: '长度在 3 到 30 个字符',
          trigger: 'blur'
        }
        ],
        contact_name: [{
          required: true,
          message: '请输入联系人名字',
          trigger: 'blur'
        }],
        contact_phone: [{
          required: true,
          message: '请输入联系电话',
          trigger: 'blur'
        }],
        description: [{
          required: true,
          message: '请输入店铺简介',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 255,
          message: '最多255个字',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  mounted () {
    this.storeName = window.localStorage.getItem('storeName')
  },

  created () {
    Reflect.apply(getTags, this, [])
    if (this.$route.params.id) {
      this.title = '编辑门店'
      this.$httpGet(API.get, {
        resource: {
          id: this.$route.params.id
        }
      }).then((res) => {
        this.form = res.data
        this.mytags = this.form.tag_ids
        this.locationData.province = this.form.province_code
        this.locationData.city = this.form.city_code
        this.locationData.area = this.form.area_code
        this.locationData.address = this.form.address
        this.locationData.lng = this.form.wx_longitude
        this.locationData.lat = this.form.wx_latitude
      })
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.form.province_code = this.locationData.province
          this.form.city_code = this.locationData.city
          this.form.area_code = this.locationData.area
          this.form.address = this.locationData.address
          this.form.wx_longitude = this.locationData.lng
          this.form.wx_latitude = this.locationData.lat

          if (this.$route.params.id) {
            this.$httpPut(API.put, {
              resource: {
                id: this.$route.params.id
              },
              data: this.form
            }).then(() => {
              this.$router.back(-1)
            })
          } else {
            this.$httpPost(API.add, {
              data: this.form
            }).then(() => {
              this.$router.back(-1)
            })
          }
        } else {
          this.$message.error('请填写完整')
        }
      })
    },
    open () {
      let _this = this
      this.$filemanager.open({
        limit: 1,
        type: 'image',
        success: (file) => {
          _this.form.logo = file.ref_url
        }
      })
    },
    setTags () {
      this.dialogSetLabel = true
    },
    comfirmSetTags () {
      this.form.tag_ids = this.mytags
      this.dialogSetLabel = false
      this.form.store_relation_tags = []
      for (let i in this.mytags) {
        for (let p in this.tagList) {
          if (this.mytags[i] === this.tagList[p].id) {
            this.form.store_relation_tags.push({
              'id': this.tagList[p].id,
              'store_tag_name': this.tagList[p].tag_name
            })
          }
        }
      }
    },
    handleClose () {
      this.dialogSetLabel = false
      this.mytags = []
    },
    tagDelete (index) {
      this.form.store_relation_tags.splice(index, 1)
      this.mytags.splice(index, 1)
    }
  }
}
</script>
