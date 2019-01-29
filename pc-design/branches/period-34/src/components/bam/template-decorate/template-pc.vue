<template>
  <div class="template-view">
    <!-- 头部开始 -->
    <div class="top d-flex mt20 justify-end align-center">
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
      <span class="ml10 text-nowrap">状态：</span>
      <el-select
        @change="changStatus"
        class="w150"
        v-model="status"
      >
        <el-option
          :key="item.value"
          :label="item.label"
          :value="item.value"
          v-for="item in statusList"
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

    <div class="content mt20 flex-wrap">
      <!-- 模板新建 -->
      <div class="type create dib create mb30 w260 h350">
        <div
          @click="addTemplate = true"
          class="add bd-gray d-flex flex-column justify-center align-center c-pointer"
        >
          <span class="iconfont iconfont-ZK-PC-xinjiankongbai fz80 dib"></span>
          <div class="p mt20 dib">新建PC端模板</div>
        </div>
      </div>

      <div
        :key="index"
        class="type po-re mb30 w260 h350 bd-gray dib"
        v-for="(list,index) in pcListData"
      >
        <p
          class="product-name w90 h90 d-flex align-end justify-center text-nowrap"
          v-if="list.bind_num > 0"
        >
          <i class="pb3 fz12">已绑定</i>
        </p>
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
          <!-- <div class="item el-wrap mt6 w24 h24 bsr text-center c-pointer">
                      <el-tooltip effect="light"
                                  content="可支持公众号"
                                  placement="top">
                        <span class="iconfont iconfont-gzh fz14 terminal-color lh25"></span>
                      </el-tooltip>
          </div>-->
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
          <!-- <div class="item el-wrap mt6 w24 h24 bsr text-center c-pointer">
                      <el-tooltip effect="light"
                                  content="可支持手机端"
                                  placement="top">
                        <span class="iconfont iconfont-phone fz14 terminal-color lh25"></span>
                      </el-tooltip>
          </div>-->
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
          <p
            @click="changeImg(list)"
            class="changeImg text-white c-pointer"
          >修改封面</p>
        </div>
        <div class="name text-center fz12">
          <p
            class="lh30"
            v-if="!list.inputRemark"
          >
            {{list.title}}
            <span
              @click="getRemarkShow(list)"
              class="iconfont iconfont-bianji text-primary ml10 editTitle c-pointer"
            ></span>
          </p>

          <el-input
            @blur="changeRemark(list)"
            @change="changeRemark(list)"
            class="w258"
            maxlength="20"
            placeholder="模板名称最长20字"
            ref="tempRemark"
            v-if="list.inputRemark"
            v-model="list.title"
          ></el-input>
          <p>{{list.created_at}}</p>
        </div>
        <div
          class="bottom-info po-ab h38 pl14 pr14 d-flex justify-center align-center"
        >
          <div class="icon-all">
            <el-tooltip
              class="item"
              content="复制"
              effect="light"
              placement="top"
            >
              <el-button
                @click="copyTemplate(list)"
                class="iconfont iconfont-fuzhi pr5 pl5 c-pointer"
                type="text"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              class="item c-pointer"
              content="编辑"
              effect="light"
              placement="top"
            >
              <router-link
                :to="list.goPage"
                class="iconfont iconfont-edit1 pr5 pl5 c-pointer"
              ></router-link>
            </el-tooltip>
            <el-tooltip
              class="item"
              content="加入回收站"
              effect="light"
              placement="top"
            >
              <el-button
                :disabled="list.bind_num > 0"
                @click="removeTemplate(list.id)"
                class="iconfont iconfont-delete pr5 pl5 c-pointer"
                type="text"
              ></el-button>
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

    <!-- 新建弹窗 -->
    <div>
      <el-dialog
        :visible.sync="addTemplate"
        append-to-body
        class="pl40 pr40"
        lock-scroll
        title="新建 NEWLY BUILD"
        width="630px"
      >
        <div class="inner center">
          <div class="alert-popup">
            <el-form
              :model="templateInfo"
              :rules="templateInfoRules"
              label-width="120px"
              ref="ruleTestForm"
              size="small"
            >
              <el-form-item
                label="模板展示封面 :"
                prop="cover"
              >
                <bg-img-box
                  :path="[templateInfo, 'cover']"
                  class="mr10"
                ></bg-img-box>
                <span class="fz12 text-gray-l30">（建议尺寸：300*300像素 ）</span>
              </el-form-item>
              <el-form-item
                label="模板名称 :"
                prop="title"
              >
                <el-input
                  class="w400"
                  maxlength="20"
                  placeholder="请输入模板名称"
                  v-model="templateInfo.title"
                ></el-input>
              </el-form-item>

              <el-form-item class="mt25">
                <el-button
                  @click="addTemplate = false"
                  class="w120"
                  type="info"
                >取消</el-button>
                <el-button
                  @click="templateInfoSave('ruleTestForm')"
                  class="w120"
                  type="primary"
                >保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-dialog>
    </div>

    <!-- 加入回收站确认弹窗 -->
    <div>
      <el-dialog
        :visible.sync="dialogRemove"
        append-to-body
        lock-scroll
        title="提示 TIPS"
        width="354px"
      >
        <span>此操作将把该模板加入回收站，是否继续？</span>
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
</template>

<script>
import bgImgBox from '../../common/bg-img-box.vue'
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
        decoration_type: 'PC',
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
      pcListData: [],
      meta: {
        page_num: 1,
        page_size: 9,
        total: -1
      },
      path: {}
    }
  },
  created () {
    this.getINfo()
    this.getPcList()
  },
  methods: {

    // 新建模板保存
    templateInfoSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPost(API.addTemplate, this.templateInfo).then(res => {
            this.addTemplate = false
            this.templateInfo = {
              cover: '',
              title: '',
              decoration_type: 'PC',
              available_channel: []
            }
            this.getPcList()
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    },

    getINfo () {
      this.httpGet(API.getChannle).then(({
        collection
      }) => {
        collection.forEach(item => {
          if (item.decoration_type_name === 'PC') {
            this.channleOptions.push({
              value: item.name,
              label: item.title
            })
          }
        })
      })
    },

    getPcList () {
      this.http({
        url: API.pcList,
        params: {
          ...this.meta,
          available_channels: [],
          title: this.titleName,
          status: this.status,
          type: 'PC',
          state: 'ENABLE'
        }
      }).then(res => {
        this.meta = res.meta
        res.collection.forEach(item => {
          item.inputRemark = false
          item.oldTitle = item.title
          item.goPage = `/pc/edit/${item.index}/${item.home_page_index}`
        })
        this.pcListData = res.collection
      })
    },

    // 复制
    copyTemplate (data) {
      this.httpPost(`${API.removeTemplate}${data.id}/copy`).then(res => {
        this.getPcList()
      })
    },

    // 修改封面
    changeImg (data) {
      this.$filemanager.open({
        limit: 1,
        type: 'image',
        success: obj => {
          data.cover = obj.ref_url
          this.httpPut(`${API.removeTemplate}${data.id}/base-info`, data).then(res => {
            data.cover = obj.ref_url
          })
        }
      })
    },

    // 显示编辑
    getRemarkShow (data) {
      data.inputRemark = true
      this.$nextTick(() => {
        this.$refs.tempRemark[0].focus()
      })
    },
    // 更改模板名称
    changeRemark (data) {
      let id = data.id
      if (data.title === data.oldTitle) {
        data.inputRemark = false
      } else {
        this.httpPut(`${API.removeTemplate}${id}/base-info`, data).then(res => {
          data.oldTitle = data.title
          data.inputRemark = false
        })
      }
    },
    // 删除模板
    removeTemplate (id) {
      this.dialogRemove = true
      this.removeID = id
    },
    sureRemove () {
      this.httpDelete(`${API.removeTemplate}${this.removeID}/change-status`).then(res => {
        this.dialogRemove = false
        this.getPcList()
      })
    },

    // 选择状态
    changStatus (e) {
      this.meta.page_num = 1
      this.getPcList()
    },

    // 更改昵称搜索
    changeName (e) {
      this.meta.page_num = 1
      this.getPcList({})
    },

    // 选择终端
    chooseChannle (e) {
      this.available_channels = e.join(',')
      this.meta.page_num = 1
      this.getPcList()
    }
  },
  components: {
    bgImgBox,
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

      &:hover {
        .changeImg {
          display: block;
        }
      }

      .changeImg {
        display: none;
        position: absolute;
        left: 0;
        bottom: 0;
        line-height: 30px;
        width: 100%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 0.3s;
      }
    }

    .bottom-info {
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: #eff4f7;

      .iconfont {
        color: $ching;
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
