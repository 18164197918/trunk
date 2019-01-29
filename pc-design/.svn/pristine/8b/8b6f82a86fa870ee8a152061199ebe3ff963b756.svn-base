<style lang="scss">
.el-select .el-input {
  width: 130px;
}
</style>
<template>
  <div>
    <h6 class="app-title">门店标签</h6>
    <div class="bg-gray-l62 p20 mt20">
      <el-button
        @click="add()"
        type="primary"
      >新建</el-button>
      <el-button @click="deleteItems()">删除</el-button>
    </div>
    <div v-if="listItems.length > 0">
      <el-table
        :data="listItems"
        @selection-change="handleSelectionChange"
        class="mt20"
        ref="multipleTable"
        tooltip-effect="dark"
      >
        <el-table-column
          type="selection"
          width="55"
        ></el-table-column>
        <el-table-column
          label="门店标签"
          prop="tag_name"
        ></el-table-column>
        <el-table-column
          label="使用门店数量"
          prop="count"
        ></el-table-column>
        <el-table-column
          label="操作"
          width="150"
        >
          <template slot-scope="scope">
            <el-button
              @click="edit(scope.row)"
              class="fz12"
              type="text"
            >编辑</el-button>
            <el-button
              @click="deleteItem(scope.row.id)"
              class="fz12"
              type="text"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="pageSize"
        :total="total"
        @current-change="currentChange"
        background
        class="mt40"
        layout="prev, pager, next"
      ></el-pagination>
    </div>

    <div
      class="text-center pt20"
      v-if="listItems.length == 0"
    >
      <img src="./../../../assets/nodata.png">
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      title="新建标签"
      width="30%"
    >
      <el-form
        :model="myForm"
        label-position="left"
        label-width="100px"
        ref="myForm"
      >
        <el-form-item
          :rules="[
     { required: true, message: '请输入标签名称', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符' }
    ]"
          label="标签名称："
          prop="tag_name"
        >
          <el-input
            placeholder="请输入标签名称"
            v-model="myForm.tag_name"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        class="dialog-footer"
        slot="footer"
      >
        <el-button
          @click="onSubmit('myForm')"
          type="primary"
        >确 定</el-button>
        <el-button @click="cancel()">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

import API from './API'
function getList () {
  this.$httpGet(API.tagsPage, {
    query: {
      page_num: this.pageIndex,
      page_size: this.pageSize
    }
  }).then((res) => {
    this.listItems = res.collection
    this.total = res.meta.total
  })
}
function myDelete () {
  this.$confirm('此操作将删除此标签，是否继续？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    this.$httpDelete(API.tagsDelete, {
      query: {
        ids: this.ids.join(',')
      }

    }).then(() => {
      Reflect.apply(getList, this, [])
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    })
  }).catch(() => {
    this.$message({
      type: 'info',
      message: '已取消删除'
    })
  })
}
export default {

  data () {
    return {
      total: null,
      pageSize: 10,
      pageIndex: 1,
      listItems: [],
      multipleSelection: [],
      dialogVisible: false,
      myForm: {
        tag_name: ''
      },
      id: null,
      ids: []

    }
  },
  created () {
    Reflect.apply(getList, this, [])
  },
  methods: {
    add () {
      this.dialogVisible = true
      this.id = null
    },

    cancel () {
      this.dialogVisible = false
      this.myForm.tag_name = ''
    },
    edit (item) {
      this.dialogVisible = true
      this.myForm.tag_name = item.tag_name
      this.id = item.id
    },

    deleteItem (id) {
      this.ids = []
      this.ids.push(id)
      Reflect.apply(myDelete, this, [])
    },
    deleteItems () {
      this.ids = []
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选择要删除的项目!',
          type: 'warning'
        })
      } else {
        for (let p of this.multipleSelection) {
          this.ids.push(p.id)
        }
      }
      Reflect.apply(myDelete, this, [])
    },

    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.id === null) {
            this.$httpPost(API.tagsAdd, {
              data: {
                'tag_name': this.myForm.tag_name
              }

            }).then(() => {
              this.cancel()
              Reflect.apply(getList, this, [])
            })
          } else {
            this.$httpPut(API.tagsPut, {
              resource: {
                ids: this.id
              },
              data: {
                'tag_name': this.myForm.tag_name
              }

            }).then(() => {
              this.cancel()
              Reflect.apply(getList, this, [])
            })
          }
        } else {
          return false
        }
      })
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },

    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    }
  }

}

</script>
