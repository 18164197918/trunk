<template>
    <div class="content-tag contmodel"  style="border-top-left-radius: 4px;">
        <h6 class="app-title">标签管理
          <el-tooltip
            class="item"
            content="最多可添加24条标签"
            effect="light"
            placement="right">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </h6>

        <div class="app-block-lv2 df justify-between tb-upper">
          <div id="btns">
            <el-button type="primary-com" class="btn-primary" @click="addSwitch = true">新建</el-button>
            <el-button class="ml15" @click="delTags()">删除</el-button>
          </div>
          <div class="search-input">
            <span>标签:</span>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" clearable v-model="searchFilter" @blur="search()" @keyup.enter.native="search()" @clear="clearSearch">
            </el-input>
          </div>
        </div>
        <el-table
                stripe
                :data="tableData"
                style="width: 100%"
                @select="selectOne"
                class="table-com"
                @select-all="selectAll"
                :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column
                    prop="title"
                    label="标签名称"
                    class-name="tag-col-width">
            </el-table-column>
            <el-table-column
                    prop="usage_num"
                    label="标签绑定的内容数"
                    class-name="count-col-width"
                    align="center">
            </el-table-column>
            <el-table-column label="操作" class-name="operation-col-width" align="center">
                <template slot-scope="scope">
                    <el-tooltip class="item" effect="light" content="编辑" placement="top">
              <span class="iconfont iconfont-edit1 c-pointer" @click="editTag(scope.$index, scope.row)">
              </span>
                    </el-tooltip>
                    <el-tooltip class="item" effect="light" content="删除" placement="top">
              <span class="pl14 iconfont iconfont-close c-pointer" @click="delTag(scope.$index, scope.row)">
              </span>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>

        <!--新建标签-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="新建标签"
                    append-to-body
                    lock-scroll
                    :visible.sync="addSwitch"
                     :before-close="beforeClose"
                    width="460px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form :rules="codeRules" :model="tagInfo" ref="tagInfo" size="small" label-width="90px">
                            <el-form-item prop="title" label="标签名称:">
                                <el-input v-model="tagInfo.title" class="w320" placeholder="请输入模型名称，最多12字" maxlength="12" clearable @input="checkTitle"></el-input>
                            </el-form-item>
                            <el-form-item class="operate-box">
                                <el-button type="primary" class="w60" @click="addTag()" :disabled="!isPassed">确认</el-button>
                                <el-button class="w60" @click="addCancle()">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-dialog>
        </div>

        <!--编辑标签-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="编辑标签"
                    append-to-body
                    lock-scroll
                    :visible.sync="editSwitch"
                    :before-close="beforeClose"
                    width="460px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form :rules="codeRules" :model="tagInfo" ref="tagInfo" size="small" label-width="90px">
                            <el-form-item prop="title" label="标签名称:">
                                <el-input v-model="tagInfo.title" class="w320" placeholder="请输入标签名称，最多12字" maxlength="12" clearable @input="checkTitle"></el-input>
                            </el-form-item>
                            <el-form-item class="operate-box">
                                <el-button type="primary" class="w60" @click="editConfirm()" :disabled="!isPassed">确认</el-button>
                                <el-button class="w60" @click="editCancle()">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-dialog>
        </div>

        <!--删除标签-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="提示"
                    append-to-body
                    lock-scroll
                    :visible.sync="delSwitch"
                    width="400px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form size="small">
                            <p class="dialog-warn-icon fz14"><span class="iconfont iconfont-warning fz24"></span>{{this.delFun === this.delCurrent ? '此操作将删除该标签，是否继续？' : selected.length ? '此操作将删除选中的标签，是否继续？' : '请先选中再执行此操作！'}}</p>
                            <el-form-item class="mt25 operate-box">
                                <el-button type="primary" class="w60" @click="delFun()">确认</el-button>
                                <el-button class="w60" @click="delCancle()">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import API from './API'

export default {
  data () {
    return {
      isPassed: false,
      addSwitch: false,
      titlevalue: '',
      tagInfo: {
        title: '',
        id: null
      },
      delSwitch: false,
      delFun: this.delCurrent,
      // currentEditTag: null,
      editSwitch: false,
      searchFilter: '',
      selected: [],
      tableData: [],
      codeRules: {
        title: [
          { required: true, message: '请输入标签名称', trigger: 'input' },
          { max: 12, pattern: /^.{0,12}$/, message: '标签名称最多12字,请重新输入', trigger: 'input' }
        ]
      }
    }
  },
  methods: {
    async listTags () {
      let res = await this.http5Get(API.tagList).catch(error => console.log(error))
      this.tableData = res.collection
    },

    editTag (index, row) {
      this.tagInfo = row
      this.titlevalue = row.title
      this.isPassed = true
      this.editSwitch = true
    },

    delTag (index, row) {
      this.delFun = this.delCurrent
      this.tagInfo = row
      this.delSwitch = true
    },

    delTags () {
      this.delFun = this.delSelected
      this.delSwitch = true
    },

    async addTag () {
      let tag = { title: this.tagInfo.title }
      let res = await this.http5Post(API.addOrModifyTag, tag).catch(error => console.log(error))
      this.tagInfo.title = ''
      this.addSwitch = false
      await this.listTags()
    },

    async editConfirm () {
      let tag = { flag_id: this.tagInfo.id, title: this.tagInfo.title }
      let res = await this.http5Put(API.addOrModifyTag, tag).catch(error => console.log(error))
      this.editSwitch = false
      this.isPassed = false
      this.tagInfo.title = ''
      await this.listTags()
    },

    async delCurrent () {
      let id = this.tagInfo.id
      this.tagInfo.title = ''
      await this.http5Delete(API.rmTag(id)).catch(error => console.log(error))
      this.delSwitch = false
      await this.listTags()
    },

    async search () {
      let res = await this.http5Get(API.tagList).catch(error => console.log(error))
      this.tableData = res.collection.filter(item => item.title.includes(this.searchFilter))
    },

    async clearSearch () {
      this.$refs.tagInfo.resetFields()
      this.tagInfo.title = this.titlevalue
      await this.listTags()
    },

    selectOne (selection, row) {
      this.selected = selection
    },

    selectAll (selection) {
      this.selected = selection
    },

    async delSelected () {
      if (this.selected.length) {
        let promiseArr = this.selected.map(item => this.http5Delete(API.rmTag(item.id)))
        let res = await Promise.all(promiseArr).catch(error => console.log(error))
        await this.listTags()
      }
      this.delSwitch = false
    },
    addCancle () {
      this.$refs.tagInfo.resetFields()
      this.tagInfo.title = this.titlevalue
      this.addSwitch = false
    },

    editCancle () {
      // 校验重置的影响
      this.$refs.tagInfo.resetFields()
      this.tagInfo.title = this.titlevalue
      this.editSwitch = false
    },

    delCancle () {
      this.delSwitch = false
    },

    checkTitle () {
      this.$refs.tagInfo.validate((valid) => {
        this.isPassed = valid
      })
    },

    beforeClose (done) {
      this.$refs.tagInfo.resetFields()
      this.tagInfo.title = this.titlevalue
      done()
    }
  },

  async mounted () {
    await this.listTags()
  }
}
</script>

<style lang="scss">
    @import "../../../../styles/variables";

    .content-tag {
        background: $white;
        min-height: 100%;
        height: auto;
        .tb-upper {
            justify-content: space-between;
            .el-button.btn-primary {
                background: $green-ct;
                color: $white;
                border-color: $green-ct;
                transition: all 0.4s;
                &:hover {
                    background: lighten($green-ct, 10%);
                    border-color: lighten($green-ct, 10%);
                }
            }
            div.search-input {
                width: 300px;
                display: inline-block;
                .el-input {
                    width: 80%;
                    margin-left: 8px;
                }
            }
        }
        .el-table {
            .el-checkbox__inner:hover {
                border-color: $green-ct;
            }
            .el-checkbox__input.is-checked,
            .el-checkbox__input.is-indeterminate {
                .el-checkbox__inner {
                    background: $green-ct;
                    border-color: $green-ct;
                }
                .el-checkbox__input.is-focus {
                    .el-checkbox__inner {
                        border-color: $green-ct;
                    }
                }
            }
            th {
                color: #000;
                font-weight: bold;
                background: $gray-zl;
            }
            .tag-col-width {
                width: 55%;
            }
            .count-col-width {
                width: 45%;
            }
            .operations-col-width {
                width: 5%;
            }
        }
    }
</style>
