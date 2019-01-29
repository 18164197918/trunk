<template>
  <div class="pc-terminal-view">
    <div
      class="product-classify d-flex flex-wrap pt26 container"
      v-if="pcList.length > 0"
    >
      <div class="row">
        <div
          :key="item.id"
          class="type col-xxl-4 col-lg-6 mb56"
          v-for="(item, index) in pcList"
        >
          <div
            class="done h350 bd-gray"
            style="margin-right: 6%;"
          >
            <div
              class="d-flex align-center h38 mini-program-name pl20 pr20 text-black-d20"
            >
              <span class="text-weight">PC站名称：</span>
              <i class="pl6 dib w210 text-ellipsis">{{item.name}}</i>
            </div>
            <div class="middle-content pl20 pr20">
              <div class="bind-template mt20 d-flex justify-between">
                <div class="left">
                  <span class="text-weight text-black-d20">模板绑定：</span>
                  <!-- v-on:dialog-visible="toBindTemplate(item)" -->
                  <em
                    @click="toBindTemplate(item)"
                    class="c-pointer"
                  >
                    <span
                      class="pl6 pr2 iconfont iconfont-bangding text-weight text-primary-d20"
                    ></span>
                    <i class="text-primary">去绑定</i>
                  </em>
                  <p class="pt10">{{item.template_name}}</p>
                </div>
                <img
                  :src="item.image | filterImg"
                  alt
                  class="w70 h70 img-cover bsr"
                  v-if="item.image"
                >
                <img
                  alt
                  class="w70 h70 img-cover bsr"
                  src="../../assets/0.jpg"
                  v-else
                >
              </div>
              <div class="version-type text-black-d20">
                <p class="text-weight">站点信息：</p>
                <ul class="list">
                  <li
                    class="readyYoPublish d-flex h50 justify-between align-center"
                  >
                    <div class="left-status d-flex">
                      <div class="status h25 mr3 lh23">临时域名：</div>
                      <div
                        class="version mr25 text-gray-l30 w170 text-ellipsis"
                      >{{item.domain_name}}</div>
                    </div>
                    <div class="to-do d-flex">
                      <div
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.template_id !== '0'"
                      >
                        <el-tooltip
                          class="item"
                          content="发布"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-fabu text-gray-l30 c-pointer fz14 lh1"
                          ></span>
                        </el-tooltip>
                      </div>

                      <div
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.template_id !== '0'"
                      >
                        <el-tooltip
                          class="item"
                          content="刷新"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-shuaxin text-gray-l30 fz14 lh1 c-pointer"
                          ></span>
                        </el-tooltip>
                      </div>
                    </div>
                  </li>
                  <li class="online d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <div class="status h25 mr3 lh23">FTP地址：</div>
                      <div
                        class="version mr25 text-gray-l30 w105 text-ellipsis"
                      >{{item.host}}</div>
                    </div>
                    <div class="to-do mr60 d-flex">
                      <div class="gray3">端口：</div>
                      <div
                        class="text-gray-l30 w50 text-ellipsis text-ellipsis"
                      >{{item.port}}</div>
                    </div>
                  </li>
                  <li class="history d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <div class="status h25 mr3 lh23">FTP账号：</div>
                      <div
                        class="version mr25 text-gray-l30 w105 text-ellipsis"
                      >{{item.user}}</div>
                    </div>
                    <div class="to-do mr60 d-flex">
                      <div class="d-flex mr40">
                        <div class="gray3">FTP密码：</div>
                        <div
                          class="text-gray-l30 w80 text-ellipsis"
                          v-if="!item.passwordShow"
                        >{{item.password}}</div>
                        <div
                          class="text-gray-l30 w80 text-ellipsis"
                          v-else
                        >{{item.passwordHide}}</div>
                      </div>
                      <div
                        @click="hideOrShow(item, index)"
                        class="fz12 text-gray-l30 show-hide h18 c-pointer"
                      >
                        <span v-if="item.passwordShow">显示</span>
                        <span
                          class="text-primary"
                          v-else
                        >隐藏</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bottom h30 d-flex justify-between">
              <div class="left-name fz14 ml20"></div>
              <div class="d-flex justify-end align-center fz12">
                <div
                  class="grow-1 d-flex justify-center align-center text-center look c-pointer pl10 pr10"
                >
                  <i>域名：</i>
                  <em
                    @click="toNewWeb(item)"
                    class="h14 text-ellipsis"
                    target="_blank"
                  >{{item.prefix}}{{item.web}}</em>
                </div>
                <div
                  @click="toSiteInfo(item)"
                  class="w130 h30 lh30 text-center enter c-pointer"
                >进入平台</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class
      v-else
    >
      <img
        alt
        class="po-ab no-data"
        src="../../assets/no-data.jpg"
      >
    </div>

    <!--模板绑定弹窗-->
    <template-pop-window
      :channel-id="channel_id"
      :template-dialog-visible.sync="templateDialogVisible"
      v-on:change-list="changeListTemplateName"
    ></template-pop-window>
    <!-- <div class="template-alert">
      <el-dialog
        :visible.sync="templateDialogVisible"
        append-to-body
        title="模板绑定 BINDING"
        width="906px"
      >
        <div class="list-inner">
          <ul class="list-content">
            <div class="wx-name mt20 d-flex">
              <el-select
                @change="changeTerminal"
                multiple
                placeholder="请选择终端"
                style="flex:1"
                v-model="selectedTerminals"
              >
                <el-option
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  v-for="item in options"
                ></el-option>
              </el-select>
              <el-input
                @change="searchTemplateName"
                class="w210 pr10 ml10"
                placeholder="请输入模板名称"
                size="small"
                v-model="templateName"
              ></el-input>
            </div>
            <div class="list-table mt20">
              <el-table
                :data="templateTable"
                stripe
              >
                <el-table-column
                  align="center"
                  label="模板名称"
                  prop="name"
                ></el-table-column>
                <el-table-column
                  align="center"
                  label="可支持终端"
                  prop="canSupport"
                ></el-table-column>
                <el-table-column
                  align="center"
                  label="操作"
                  prop="todo"
                >
                  <template slot-scope="scope">
                    <el-tooltip
                      class="item"
                      content="绑定"
                      effect="light"
                      placement="top"
                    >
                      <span
                        @click="toChangeTemplate(scope.row.todo)"
                        class="iconfont iconfont-bangding"
                        style="color: #a9b7b7;"
                      ></span>
                    </el-tooltip>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </ul>

          <pagination
            :pagination="templateMeta"
            :refresh-list="handleCurrentChange"
          ></pagination>
        </div>
      </el-dialog>
    </div>-->
  </div>
</template>

<script>
import API from '../API'
import templatePopWindow from '../common/template-pop-window'
// import pagination from '../../common/pagination.vue'

export default {
  name: 'pc-terminal-view',
  data () {
    return {
      templateDialogVisible: false,
      // selectedTerminals: [],
      // options: [],
      // templateName: '',
      // templateTable: [],
      // currentPage: 1,
      pcList: [],
      channel_id: '',
      // templateMeta: {},
      // templateTitle: '',
      available_channels: ''
      // currentUrlName: ''
    }
  },
  mounted () {
    this.baseTemplateTitle()
    // this.pcDataList()

    let href = window.location.href
    this.currentUrlName = href.split('chooseList/')[1]
    // 当前处于哪个路由
    if (href.indexOf('bd') > -1) {
      this.available_channels = 'BAIDU_APPLET'
    } else if (href.indexOf('wx') > -1) {
      this.available_channels = 'WECHAT_APPLET'
    } else if (href.indexOf('pc') > -1) {
      this.available_channels = 'PC_SITE'
    } else {
      this.available_channels = ''
    }
  },
  methods: {
    // pc终端数据列表
    pcDataList () {
      return new Promise((resolve, reject) => {
        this.httpGet(API.pcSiteList).then(({
          collection,
          state
        }) => {
          if (state === 0 || state === '0') {
            collection.forEach(ele => {
              ele.passwordShow = true
              ele.template_name = '暂无'
              ele.passwordHide = this.getPassWordLength(ele.password.length)
            })
            this.pcList = collection
            this.channel_id = collection[0].channel_id
            resolve(collection)
          } else {
            reject(new Error('数据有误'))
          }
        })
      })
    },
    // 绑定模板
    toBindTemplate (item) {
      this.channel_id = item.channel_id
      this.templateDialogVisible = true

      // this.httpGet(API.channelType).then(res => {
      //   console.log('res.collection', res.collection)
      //   let options = []
      //   res.collection.forEach(ele => {
      //     options.push({
      //       value: ele.name,
      //       label: ele.title
      //     })
      //   })

      //   // 屏蔽当前多选终端
      //   for (let j = 0; j < options.length; j++) {
      //     if (options[j].value.indexOf(this.available_channels) > -1) {
      //       options.splice(j, 1)
      //       break
      //     }
      //   }
      //   this.options = options
      // })

      // this.templateList({
      //   available_channels: this.available_channels
      // })
    },
    // 模板列表数据更新公用函数
    // templateDataUpdate (collection, state, meta) {
    //   let templateTable = []
    //   if (state === 0 || state === '0') {
    //     collection.forEach(ele => {
    //       templateTable.push({
    //         name: ele.title,
    //         canSupport: ele.available_channels_name,
    //         todo: ele.id
    //       })
    //     })
    //     this.templateTable = templateTable
    //     meta.current_page = meta.page_num
    //     this.templateMeta = meta
    //   }
    // },
    // 请求模板列表数据
    // templateList ({
    //   available_channels = '',
    //   title = '',
    //   page_num = 1,
    //   page_size = 10,
    //   state = 'ENABLE'
    // } = {}) {
    //   this.http({
    //     url: API.pcTemplateList,
    //     params: {
    //       available_channels,
    //       title,
    //       page_num,
    //       page_size,
    //       state
    //     }
    //   }).then(({
    //     collection,
    //     meta,
    //     state
    //   }) => {
    //     console.log(collection)
    //     this.templateDataUpdate(collection, state, meta)
    //   })
    // },
    // 改变模板
    // toChangeTemplate (id) {
    //   console.log('this.channel_id ', this.channel_id)
    //   console.log('id ', id)
    //   this.httpPut(`manager/channel/${this.channel_id}/decoration/template/${id}`).then(res => {
    //     console.log('res', res)
    //     this.templateDialogVisible = false
    //     this.baseTemplateTitle()
    //   })
    // },
    // 请求所有绑定模板的小程序列表数据
    getBindAppletList (ids) {
      let availableChannels = this.available_channels.split(',')[0]
      console.log('available_channels', availableChannels)
      return new Promise((resolve, reject) => {
        // `${API.baseTemplateName}?ids=${ids}&terminal_type=${availableChannels}`
        this.http({
          url: API.baseTemplateName,
          params: {
            ids,
            terminal_type: availableChannels
          }
        }).then(baseData => {
          console.log(baseData)
          if (baseData.state === 0 || baseData.state === '0') {
            resolve(baseData.collection)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 将列表数据和模板匹配显示模板名称
    baseTemplateTitle () {
      this.pcDataList().then(res => {
        console.log('res------------', res)
        let ids = []
        res.forEach(item => {
          if (item.decoration_template_id !== '0' && item.decoration_template_id !== null) {
            ids.push(item.decoration_template_id)
          }
        })
        ids = ids.join(',')
        console.log('ids', ids)
        this.getBindAppletList(ids).then(data => {
          this.pcList.forEach(ele => {
            data.forEach(element => {
              if (element.id === ele.decoration_template_id) {
                ele.template_name = element.title
              }
            })
          })

          console.log('this.pcList', this.pcList)
        })
      })
    },
    // handleCurrentChange (obj = {}) {
    //   // console.log(`当前页: ${val}`)
    //   this.templateList({
    //     available_channels: this.available_channels,
    //     title: this.templateTitle,
    //     page_num: obj.page
    //   })
    // },
    // 密码显示和隐藏
    hideOrShow (item, index) {
      this.pcList[index].passwordShow = !this.pcList[index].passwordShow
    },
    // 初始化获取密码长度
    getPassWordLength (len) {
      let strPassword = ''
      for (let i = 0; i < len; i++) {
        strPassword += '*'
      }
      return strPassword
    },
    // 选择终端
    // changeTerminal (e) {
    //   console.log(e)
    //   let available = this.available_channels
    //   this.available_channels = available.split(',')[0]
    //   this.available_channels += ',' + e.join(',')
    //   console.log('this.available_channels', this.available_channels)
    //   this.templateList({
    //     available_channels: this.available_channels
    //   })
    // },
    // 搜索模板
    // searchTemplateName (value) {
    //   console.log(value)
    //   this.templateTitle = value
    //   this.templateList({
    //     available_channels: this.available_channels,
    //     title: value
    //   })
    // },
    // 进入站点信息平台
    toSiteInfo (item) {
      this.$router.push({
        path: '../../../setting/siteInfo',
        query: {
          id: item.id
        }
      })
    },
    toNewWeb (item) {
      window.open(`${item.prefix}${item.web}`)
    },
    changeListTemplateName (val) {
      console.log(val, 333)
      this.baseTemplateTitle()
    }
  },
  components: {
    // pagination
    templatePopWindow
  }
}

</script>

<style scoped
       lang="scss">
@import "../../../../styles/variables";

.pc-terminal-view {
  .product-classify {
    .type {
      background-color: $white;

      &:hover,
      &.on {
        .done {
          border: 1px solid $primary;
          box-shadow: 4px 4px 0 2px $blue-wd4;

          .prod-name {
            color: $primary;
          }

          .bottom {
            .enter {
              background-color: $primary;
              color: $white;
            }
          }
        }
      }
    }

    .logo-left {
      background-image: url(../../assets/product_bg.jpg);
    }

    .done {
      position: relative;
      overflow: hidden;

      .mini-program-name {
        width: 100%;
        background-color: $gray-wd3;
        color: #000;
      }

      .middle-content {
        .left {
          p {
            color: $gray-wd4;
          }

          i {
            border-bottom: 1px solid $primary;
          }
        }

        .version-type {
          li {
            border-bottom: 1px dashed #c8c8c8;

            .left-status {
              .status {
                color: $black-wd1;
              }

              .reason {
                .bg-color-status {
                  background-color: $ching;
                  border-radius: 6px;
                }
              }
            }

            .to-do {
              .red-icon {
                position: relative;

                .red-circle {
                  position: absolute;
                  top: 3px;
                  right: 0px;
                  background-color: red;
                }
              }
            }

            /* &.online {
               .left-status {
                .status {}
              }
            } */

            &.history {
              /* .left-status {
                .status {}
              } */

              .show-hide {
                border-bottom: 1px solid $gray-wd5;
              }
            }
          }
        }
      }

      .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;

        .enter {
          background-color: $blue-wd4;
          color: $primary;
        }

        .look {
          color: $black-wd1;

          span {
            vertical-align: middle;
          }

          em {
            max-width: 180px;
            line-height: 1;
            color: $blue-wd1;
            border-bottom: 1px $primary solid;
            /* vertical-align: middle; */
          }
        }
      }

      .iconfont {
        color: $ching;
      }

      .todo-status {
        position: absolute;
        bottom: 40px;
        right: 12px;
      }

      .product-name {
        position: absolute;
        left: 0;
        top: 0;

        .text-name {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate3d(-72%, -100%, 0) rotate(-45deg);
          color: $white;
        }
      }
    }
  }

  .gray3 {
    color: $black-wd1;
  }

  .no-data {
    width: 32%;
    top: 34%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
