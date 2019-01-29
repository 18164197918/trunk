<style scoped lang="scss">
</style>

<template>
  <div>
    <h6 class="app-title">
      {{title}}
      <span
        @click="$router.back(-1)"
        class="text-primary cup"
      >返回</span>
    </h6>
    <el-form
      :model="form"
      :rules="rules"
      :status-icon="true"
      class="w600"
      label-position="top"
      ref="form"
      size="small"
    >
      <el-form-item
        label="选择商品分组类别"
        prop="isParent"
      >
        <span class="text-gray-l20">（默认为商品一级分组，可选择成为其他分组的商品子分组）</span>
        <div>
          <el-radio-group v-model="form.isParent">
            <el-radio
              :disabled="form.id>0"
              :label="0"
            >商品一级分组</el-radio>
            <el-radio
              :disabled="form.id>0"
              :label="1"
            >商品子分组</el-radio>
          </el-radio-group>
        </div>
        <el-select
          class="w300"
          placeholder="请选择归属的一级分组"
          v-if="form.isParent===1"
          v-model="parent_id"
        >
          <el-option
            :key="item.id"
            :label="item.name"
            :value="item.id"
            v-for="item in groupList"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="分组名称"
        prop="name"
      >
        <div class="w300">
          <el-input
            placeholder="请输入分组名称，最多20个字"
            v-model="form.name"
          ></el-input>
        </div>
        <el-checkbox
          :false-label="0"
          :true-label="1"
          v-model="form.show_home"
        >首页上显示商品分组名称</el-checkbox>
      </el-form-item>
      <el-form-item
        label="分组顺序"
        prop="order_index"
      >
        <el-input-number
          :max="9999"
          :min="1"
          class="w170"
          controls-position="right"
          v-model.number="form.order_index"
        ></el-input-number>
      </el-form-item>
      <el-form-item
        label="商品排序"
        prop="priority"
      >
        <el-select
          class="w300"
          placeholder="请选择"
          v-model="form.priority"
        >
          <el-option
            :key="item.value"
            :label="item.name"
            :value="item.value"
            v-for="item in priorityList"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品分组简介">
        <el-input
          :rows="4"
          maxlength="200"
          placeholder="请输入商品分组简介，最多200个字"
          type="textarea"
          v-model="form.introduction"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="submit"
          class="w200 mt50"
          size="small"
          type="primary"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import API from './API'
export default {
  name: 'addGroup',
  data () {
    return {
      form: {
        name: '', // 分组名称
        cover_image: '',
        show_home: 0, // 首页上显示商品分组名称
        priority: 'ORDER_INDEX',
        introduction: '',
        isParent: 0,
        order_index: 1,
        config: '',
        parent_id: ''
      },
      parent_id: null,
      rules: {
        name: [
          { required: true, message: '请输入分组名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度为1到20个字', trigger: 'blur' }
        ],
        isParent: [
          { required: true }
        ],
        order_index: [
          { required: true, message: '', trigger: 'change' },
          { type: 'number', min: 1, max: 9999, trigger: 'blur' }
        ]
      },
      priorityList: [
        { name: '创建时间最早排序', value: 'CREATED_AT_DESC' },
        { name: '最热排在最前面', value: 'HOTTEST' },
        { name: '创建时间最晚排序', value: 'CREATED_AT_DESC' },
        { name: '手动排序', value: 'ORDER_INDEX' }
      ],
      groupList: null,
      title: '新建商品分组'

    }
  },
  created () {
    this.$httpGet(API.groupTop).then((res) => {
      this.groupList = res.collection
    })
    if (this.$route.params.id) {
      this.title = '编辑商品分组'
      this.$httpGet(API.group, {
        resource: {
          id: this.$route.params.id
        }
      }).then((res) => {
        this.form = res.data
        this.parent_id = this.form.parent_id

        if (+res.data.parent_id === 0) {
          this.$set(this.form, 'isParent', 0)
        } else {
          this.$set(this.form, 'isParent', 1)
        }
      })
    }
  },
  methods: {

    submit () {
      if (this.form.isParent === 0) {
        this.form.parent_id = 0
      } else {
        this.form.parent_id = this.parent_id
      }

      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.$route.params.id) {
            this.$httpPut(API.group, {
              resource: {
                id: this.$route.params.id
              },
              data: this.form
            })
          } else {
            this.$httpPost(API.group, { data: this.form }).then(res => {
              this.$router.back(-1)
            })
          }
        }
      })
    }
  }
}
</script>
