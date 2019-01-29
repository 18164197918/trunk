<template>
  <div class="form-edit">
    <div>
      <h6 class="app-title">自定义表单-新建表单</h6>
    </div>
    <div>
      <el-form :model="form" label-width="120px">
        <el-form-item label="表单名称：">
          <el-input placeholder="请输入表单名称，最多18个字" v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="提交权限：">
          <el-radio :label="false" v-model="form.power">所有人</el-radio>
        </el-form-item>
        <el-form-item label="开启验证码：">
          <el-radio :label="true" v-model="form.verify">是</el-radio>
          <el-radio :label="false" v-model="form.verify">否</el-radio>
        </el-form-item>
        <el-form-item label="留言公开方式：">
          <el-radio :label="true" v-model="form.verify">管理员审核</el-radio>
          <el-radio :label="false" v-model="form.verify">自动公开</el-radio>
        </el-form-item>
        <el-form-item label="表单内容：">
          <el-table :data="formContent">
            <el-table-column label="字段名称" prop></el-table-column>
            <el-table-column label="排序" prop></el-table-column>
            <el-table-column label="字段格式" prop></el-table-column>
            <el-table-column label="前台表单显示" prop></el-table-column>
            <el-table-column label="后台列表显示" prop></el-table-column>
            <el-table-column label="必填" prop></el-table-column>
            <el-table-column label="操作" prop></el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item>
          <el-button @click.native="selfDialog=true">添加自定义字段</el-button>
        </el-form-item>
      </el-form>
      <div class="text-center">
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </div>

      <!-- 自定义弹窗 -->
      <el-dialog :modal-append-to-body="false" :visible.sync="selfDialog" title="添加自定义字段" width="500px">
        <el-form :model="selfForm" label-width="90px">
          <el-form-item label="表单名称：">
            <el-input v-model="selfForm.name"></el-input>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
        power: false,
        verify: true,
        open: false
      },
      formContent: [],
      selfDialog: false,
      selfForm: {
        name: ''
      }
    }
  },
  methods: {
  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
.form-edit {
}
</style>
