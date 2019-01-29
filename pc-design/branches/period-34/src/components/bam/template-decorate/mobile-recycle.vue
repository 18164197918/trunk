<template>
  <div class="template-view">
    <!-- 头部开始 -->
    <div class="top mt20 d-flex justify-between align-center">
      <div class="mr15 d-flex align-center">
        <el-checkbox
          :indeterminate="notFully"
          @change="handleCheckAllChange"
          v-model="checkAll"
        ></el-checkbox>
        <el-button
          @click="removeTemplate(1)"
          class="ml15"
          plain
          size="small"
        >删除</el-button>
      </div>
      <div class="d-flex justify-end align-center">
        <el-select
          @change="chooseChannle"
          multiple
          placeholder="请选择可支持终端"
          style="width: 640px"
          v-model="selectedTerminals"
        >
          <el-option
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-for="item in channleOptions"
          ></el-option>
        </el-select>
        <div class="searchDiv">
          <el-input
            @change="changeName"
            class="w210 pr10 ml10"
            placeholder="请输入模板名称"
            size="small"
            v-model="titleName"
          ></el-input>
          <span
            @click="changeName"
            class="iconfont iconfont-sou-suo fz12 dib searchIcon pr5 pl5 text-gray-l40 c-pointer"
          ></span>
        </div>
      </div>
    </div>

    <div v-if="pcListData.length>0">
      <div class="content mt20 flex-wrap">
        <div
          :key="index"
          class="type po-re mb30 w260 h350 bd-gray dib"
          v-for="(list,index) in pcListData"
        >
          <div
            class="support po-ab d-flex flex-column"
            v-if="list.available_channels.length>0"
          >
            <div
              class="item el-wrap mt6 w24 h24 bsr text-center c-pointer"
              v-if="list.available_channels.indexOf('WECHAT_APPLET') > -1"
            >
              <el-tooltip
                content="可支持微信小程序"
                effect="light"
                placement="top"
              >
                <span class="iconfont iconfont-wx fz14 terminal-color lh25"></span>
              </el-tooltip>
            </div>
            <div
              class="item el-wrap mt6 w24 h24 bsr text-center c-pointer"
              v-if="list.available_channels.indexOf('BAIDU_APPLET') > -1"
            >
              <el-tooltip
                content="可支持百度小程序"
                effect="light"
                placement="top"
              >
                <span class="iconfont iconfont-bd fz14 terminal-color lh25"></span>
              </el-tooltip>
            </div>
            <div
              class="item el-wrap mt6 w24 h24 bsr text-center c-pointer"
              v-if="list.available_channels.indexOf('PC_SITE') > -1"
            >
              <el-tooltip
                content="可支持pc端"
                effect="light"
                placement="top"
              >
                <span class="iconfont iconfont-pc fz14 terminal-color lh25"></span>
              </el-tooltip>
            </div>
          </div>
          <div
            class="template-icon h260 bb-gray"
            style="overflow: hidden"
          >
            <img
              :src="list.cover | filterImg"
              alt
              class="img-percent img-cover w260 h260"
              v-if="list.cover"
            >
            <img
              :src="defaultImg"
              alt
              class="img-percent img-cover w260 h260"
              v-if="!list.cover"
            >
            <span
              :class="[list.checked?'changeImg-primary iconfont-xuanze iconfont':'changeImg-gray']"
              @click="checkOne(list)"
              class="changeImg dib w24 h24 fz14 lh24"
            ></span>
          </div>
          <div class="name text-center fz12">
            <p
              class="lh30"
              v-if="!list.inputRemark"
            >{{list.title}}</p>
            <p>{{list.created_at}}</p>
          </div>
          <div
            class="bottom-info po-ab h38 pl14 pr14 d-flex justify-center align-center"
          >
            <div class="icon-all">
              <el-tooltip
                class="item"
                content="还原"
                effect="light"
                placement="top"
              >
                <span
                  @click="reset(list.id)"
                  class="iconfont iconfont-undo pr5 pl5 c-pointer"
                ></span>
              </el-tooltip>

              <el-tooltip
                class="item"
                content="永久删除"
                effect="light"
                placement="top"
              >
                <span
                  @click="removeTemplate(list.id)"
                  class="iconfont iconfont-close pr5 pl5 c-pointer t-gray"
                ></span>
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>

      <div class="page mt60">
        <pagination
          :meta="meta"
          :refresh-list="getPcList"
        ></pagination>
      </div>

      <!-- 永久删除确认弹窗 -->
      <div>
        <el-dialog
          :visible.sync="dialogRemove"
          append-to-body
          lock-scroll
          title="提示 TIPS"
          width="354px"
        >
          <span>{{removeTitle}}</span>
          <span
            class="dialog-footer"
            slot="footer"
          >
            <el-button @click="dialogRemove = false">取 消</el-button>
            <el-button
              @click="sureRemove()"
              type="primary"
            >确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
    <div
      class="d-flex align-center justify-center"
      style="min-height: 700px"
      v-if="nodataShow"
    >
      <img
        alt
        class="dib"
        src="../assets/no-data.jpg"
      >
    </div>
  </div>
</template>

<script>
import pagination from '../../common/pagination.vue'
import API from './API'
export default {
  name: 'template-view',
  data () {
    return {
      defaultImg: require('../assets/template-img1.jpg'),
      channleOptions: [{
        value: '',
        label: '全部'
      }],
      channleList: [],
      selectedTerminals: [],
      statusList: [{
        value: '',
        label: '全部'
      },
      {
        value: 1,
        label: '已绑定'
      },
      {
        value: 0,
        label: '未绑定'
      }
      ],
      templateInfo: {
        cover: '', // 封面
        title: '',
        decoration_type: 'MOBILE',
        available_channel: []
      },
      templateInfoRules: {
        title: [{
          required: true,
          message: '模板名称不能为空',
          trigger: 'blur'
        },
        {
          max: 20,
          message: '最大值不能超过20个',
          trigger: 'blur'
        }
        ]
      },
      addTemplate: false, // 新建弹窗控制
      dialogRemove: false, // 删除弹窗控制
      inputRemark: false,
      removeID: '',
      titleName: '', // 模板名称
      status: '', // 绑定状态
      available_channels: '', // 选择终端
      meta: {
        page_num: 1,
        page_size: 10,
        total: -1
      },
      pcListData: [],
      path: {},
      notFully: false,
      checkAll: false,
      removeTitle: '',
      nodataShow: ''
    }
  },
  created () {
    this.getINfo()
    this.getPcList()
  },
  methods: {

    // 全选
    handleCheckAllChange (val) {
      if (val) {
        this.notFully = false
        this.pcListData.forEach(item => {
          item.checked = true
        })
      } else {
        this.pcListData.forEach(item => {
          item.checked = false
        })
      }
    },
    checkOne (data) {
      data.checked = !data.checked
      this.notFully = this.checkList.length > 0 && this.checkList.length < this.pcListData.length
      this.checkAll = this.checkList.length === this.pcListData.length
    },

    // 新建模板保存
    templateInfoSave () {
      this.httpPost(API.addTemplate, this.templateInfo).then(res => {
        this.addTemplate = false
        this.getPcList()
      })
    },

    getINfo () {
      this.httpGet(API.getChannle).then(({
        collection
      }) => {
        collection.forEach(item => {
          if (item.decoration_type_name === 'MOBILE') {
            this.channleOptions.push({
              value: item.name,
              label: item.title
            })
          }
        })
      })
    },
    // 获取列表
    getPcList () {
      this.pcListData = []
      this.http({
        url: API.pcList,
        params: {
          ...this.meta,
          available_channels: [],
          title: this.titleName,
          status: this.status,
          type: 'MOBILE',
          state: 'DISABLE'
        }
      }).then(res => {
        this.meta = res.meta
        res.collection.forEach(item => {
          item.checked = false
        })
        this.pcListData = res.collection
        if (this.pcListData.length > 0) {
          this.nodataShow = false
        } else {
          this.nodataShow = true
        }
      })
    },

    // 删除模板
    removeTemplate (id) {
      if (id === 1) {
        if (this.checkList.length <= 0) {
          this.$alert('请选择模板', {
            confirmButtonText: '确定',
            type: 'warning',
            center: true
          })
        } else {
          this.removeID = this.checkList.join(',')
          this.removeTitle = '此操作将永久删除所有选中模板，是否继续？'
          this.dialogRemove = true
        }
      } else {
        this.removeID = id
        this.removeTitle = '此操作将永久删除该模板，是否继续？'
        this.dialogRemove = true
      }
    },
    sureRemove () {
      this.httpDelete(`${API.removeTemplate}${this.removeID}`).then(res => {
        this.dialogRemove = false
        this.getPcList()
        this.checkAll = false
        this.notFully = false
      })
    },

    // 恢复模板
    reset (id) {
      this.httpDelete(`${API.removeTemplate}${id}/change-status`).then(res => {
        this.dialogRemove = false
        this.getPcList()
      })
    },

    // 更改昵称搜索
    changeName (e) {
      this.meta.page_num = 1
      this.getPcList()
    },

    // 选择终端
    chooseChannle (e) {
      this.available_channels = e.join(',')
      this.meta.page_num = 1
      this.getPcList()
    }
  },
  computed: {
    checkList () {
      let arr = []
      this.pcListData.forEach(item => {
        if (item.checked) {
          arr.push(item.id)
        }
      })
      return arr
    }
  },
  components: {
    pagination
  }
}
</script>

<style scoped
       lang="scss">
@import "../../../styles/variables";

.template-view {
  .content {
    min-width: 800px;
  }

  .searchDiv {
    position: relative;

    .searchIcon {
      position: absolute;
      right: 15px;
      top: 7px;
    }
  }

  .type {
    overflow: hidden;
    border: 1px solid #d8e5e6;
    transition: all 0.3s;
    margin: 0 35px;

    &:hover,
    &.on {
      border: 1px solid $primary;
      box-shadow: 4px 4px 0 2px $blue-wd4;

      .name {
        .editTitle {
          display: inline-block;
        }
      }
    }

    &.create {
      background-color: #f3f3f3;
      transition: all 0.3s;

      .add {
        width: 100%;
        height: 100%;

        .p {
          color: $black-wd1;
          border-bottom: 1px solid transparent;
          transition: all 0.3s;
          line-height: 1;
        }

        span {
          color: #e0e0e0;
          transition: all 0.3s;
        }
      }

      &:hover,
      &.on {
        background-color: #eff4f7;

        .add {
          span {
            color: lighten($primary, 20%);
          }

          .p {
            color: $primary;
            border-bottom: 1px solid $primary;
          }
        }
      }
    }

    .iconfont {
      line-height: 1;
    }

    .name {
      .editTitle {
        display: none;
        transition: all 0.3s;
      }
    }

    .template-icon {
      position: relative;

      .changeImg {
        position: absolute;
        right: 0;
        top: 0;
        text-align: center;
        border: 1px solid #d8e5e6;
        transition: all 0.3s;

        &.changeImg-primary {
          border: 1px solid transparent;
          background-color: $primary;
          color: $white;
        }

        &.changeImg-gray {
          background-color: #fff;
          color: $gray;
        }
      }
    }

    .bottom-info {
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: #eff4f7;

      .iconfont {
        color: $ching;

        &.t-gray {
          color: lighten($ching, 15%);
        }
      }
    }

    .product-name {
      position: absolute;
      right: 0;
      top: 0;
      color: $white;
      background-color: $m-red1;
      transform: translate3d(50px, -50px, 0) rotateZ(45deg);
      z-index: 6;
    }

    .support {
      top: 0;
      left: 6px;
      z-index: 6;

      .el-wrap {
        display: inline-block;
        background-color: $white;

        .terminal-color {
          color: #a9b7b7;
        }

        &:hover,
        &.on {
          .terminal-color {
            color: $blue-wd6;
          }
        }
      }
    }
  }
}
</style>
