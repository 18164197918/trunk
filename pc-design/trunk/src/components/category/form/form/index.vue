
<template>
  <div class="self-form">
    <div class="title">
      <h6 class="app-title">自定义表单</h6>
    </div>

    <div class="app-block-lv2 df justify-between">
      <div class="align-center">
        <el-button @click.native="addFormDialog=true" type="success">新建</el-button>
        <el-button>删除</el-button>
      </div>
      <div class="align-center">
        <span class="dib">表单名称：</span>
        <div class="dib">
          <el-input @click.native="search($event)" placeholder="请输入标题" v-model="formName">
            <i class="el-input__icon el-icon-search" slot="suffix"></i>
          </el-input>
        </div>
      </div>
    </div>
    <div>
      <el-table :data="formList" border>
        <el-table-column label="表单名称" prop="name"></el-table-column>
        <el-table-column label="时间" prop="time"></el-table-column>
        <el-table-column label="留言" prop="message"></el-table-column>
        <el-table-column align="center" label="操作" prop>
          <template slot-scope="scope">
            <el-tooltip class="item-tooltip" content="编辑" effect="light" placement="top">
              <span @click="editForm(scope.row)" class="iconfont iconfont-edit1 c-pointer"></span>
            </el-tooltip>
            <el-tooltip class="item-tooltip" content="留言管理" effect="light" placement="top">
              <span @click="messageManage(scope.row)" class="iconfont iconfont-edit1 c-pointer"></span>
            </el-tooltip>
            <el-tooltip class="item-tooltip" content="复制" effect="light" placement="top">
              <span @click="copyForm(scope.row)" class="iconfont iconfont-edit1 c-pointer"></span>
            </el-tooltip>
            <el-tooltip class="item-tooltip" content="删除" effect="light" placement="top">
              <span @click="delForm(scope.row)" class="iconfont iconfont-edit1 c-pointer"></span>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :modal-append-to-body="false" :visible.sync="addFormDialog" title="新增表单" width="500px">
      <el-form :model="form" label-width="90px">
        <el-form-item label="表单名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="text-right">
            <el-button @click.native="addForm" type="primary">提交</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formName: '',
      formList: [],
      addFormDialog: false,
      form: {
        name: ''
      }
    }
  },
  methods: {
    search (e) {
      if (e.target.nodeName === 'I') {
        console.log(111)
      }
    },
    addForm () {
      this.addFormDialog = false
      this.formList.push({
        id: 123,
        name: this.form.name,
        time: 123,
        message: 123
      })
    },
    editForm (data) {
      this.$router.push({
        path: `edit/${data.id}`,
        query: { data: data }
      })
    },
    messageManage (data) {

    },
    copyForm (data) {

    },
    delForm (data) {

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.self-form {
  .el-input__suffix {
    cursor: pointer;
  }
  .item-tooltip + .item-tooltip {
    margin-left: 10px;
  }
}
</style>
