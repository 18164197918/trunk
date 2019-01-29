<style scoped
       lang="scss">
@import "../../../../styles/variables";

.bd-terminal-view {
  .product-classify {
    .type {
      background-color: $white;

      &:hover,
      &.on {
        .done {
          border: 1px solid $primary;
          box-shadow: 4px 4px 0 2px $blue-wd4;

          .look,
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
                border: 1px solid #ff4f4f;
                color: #ff4f4f;
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

            &.online {
              .left-status {
                .status {
                  border: 1px solid #28ce6b;
                  color: #28ce6b;
                }
              }
            }

            &.history {
              .left-status {
                .status {
                  border: 1px solid $gray-wd4;
                  color: $gray-wd4;
                }
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
          color: lighten($gray, 40%);

          span {
            vertical-align: middle;
          }

          em {
            line-height: 1;
            border-bottom: 1px lighten($gray, 40%) solid;
            vertical-align: middle;
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

  .no-data {
    width: 32%;
    top: 34%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  .lh1 {
    line-height: 1;
  }
}
</style>
<template>
  <div class="bd-terminal-view">
    <div
      class="product-classify d-flex flex-wrap pt26 container"
      v-if="bdTerminalList.length > 0"
    >
      <div class="row">
        <div
          :key="item.applet_id"
          class="type col-xxl-4 col-lg-6 mb56"
          v-for="(item, index) in bdTerminalList"
        >
          <div
            class="done h350 bd-gray"
            style="margin-right: 6%;"
          >
            <div class="d-flex align-center p10 bg-gray-l64 text-black-d20">
              <b class="ml10 shrink-0">小程序名称：</b>
              <i class="text-ellipsis">{{item.applet_account.app_name}}</i>
            </div>
            <div class="middle-content m20">
              <div class="bind-template d-flex justify-between">
                <div class="left">
                  <b class="text-black-d20">模板绑定：</b>
                  <em
                    @click="toBindTemplate(item)"
                    class="c-pointer"
                  >
                    <b
                      class="pl6 pr2 iconfont iconfont-bangding text-primary-d20"
                    ></b>
                    <i class="text-primary">去绑定</i>
                  </em>
                  <p class="pt10">{{item.template_name}}</p>
                </div>
                <div
                  :style="item.applet_account.photo_addresses[0].cover | filterImgObj"
                  class="w70 h70 bg-contain bsr"
                  v-if="item.applet_account.photo_addresses"
                ></div>
                <div
                  class="w70 h70 bg-contain bsr"
                  style="background-image: url(../../assets/0.jpg);"
                  v-else
                ></div>
              </div>
              <div
                class="version-type text-black-d20"
                v-if="item.applet_account.bound_mode.indexOf('AUTOMATIC') > -1"
              >
                <b>版本类型：</b>
                <ul class="list">
                  <li class="d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <b class="status w54 text-center mr20 lh23 shrink-0">待发布</b>
                      <div
                        class="version mr25"
                        v-if="item.wait_publish_record.template_value_object.version"
                      >{{item.wait_publish_record.template_value_object.version}}</div>
                      <div
                        class="version mr25 text-gray-l30"
                        v-else
                      >暂无</div>

                      <div
                        class="reason fz12 text-gray"
                        v-show="(item.wait_publish_record.id === '0' || item.wait_publish_record.id === null) && !item.wait_publish_record.review_status && !item.current_record.review_status && !item.last_time_record.review_status"
                      >
                        <span
                          class="bg-color-status p4 lh-1 text-white"
                          style="background-color: #8cd366;"
                        >授权成功</span>
                        <i class="pl6"></i>
                      </div>

                      <div
                        class="reason fz12 text-gray"
                        v-show="item.wait_publish_record.review_status === 3"
                      >
                        <span
                          class="bg-color-status p4 lh-1 text-white"
                          style="background-color: #f8c438;"
                        >开发中</span>
                        <i
                          class="pl6"
                          v-if="item.wait_publish_record.package_id === '0' || item.wait_publish_record.package_id === null"
                        >(获取包信息中)</i>
                        <i
                          class="pl6"
                          v-else
                        >(已获取包信息)</i>
                      </div>

                      <div
                        class="reason fz12 text-gray"
                        v-show="item.wait_publish_record.review_status === 4"
                      >
                        <span
                          class="bg-color-status p4 lh-1 text-white"
                          style="background-color: #f4585d;"
                        >审核中</span>
                        <i class="pl6"></i>
                      </div>

                      <div
                        class="reason fz12 text-gray"
                        v-show="item.wait_publish_record.review_status === 5"
                      >
                        <span class="bg-color-status p4 lh-1 text-white">审核失败</span>
                        <i class="pl6">
                          (原因
                          <span class="iconfont iconfont-yiwen fz12"></span>)
                        </i>
                      </div>

                      <div
                        class="reason fz12 text-gray"
                        v-show="item.wait_publish_record.review_status === 6"
                      >
                        <span
                          class="bg-color-status p4 lh-1 text-white"
                          style="background-color: #66d3b8;"
                        >审核通过</span>
                        <i class="pl6"></i>
                      </div>
                    </div>
                    <div class="to-do d-flex">
                      <div
                        @click="getNewType(item.applet_id)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="(item.wait_publish_record.id === '0' || item.wait_publish_record.id === null || item.wait_publish_record.review_status === 3 || item.wait_publish_record.review_status === 5) && !item.current_record.review_status && !item.last_time_record.review_status"
                      >
                        <el-tooltip
                          class="item"
                          content="提交代码"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-banben text-gray-l30 fz14 lh1 c-pointer"
                          ></span>
                        </el-tooltip>
                      </div>
                      <div
                        @click="checkTerminal(item, index)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.wait_publish_record.review_status === 3 && (item.wait_publish_record.package_id !== '0' && item.wait_publish_record.package_id !== null) "
                      >
                        <el-tooltip
                          class="item"
                          content="审核"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-shenhe4 text-gray-l30 c-pointer fz14 lh1"
                          ></span>
                        </el-tooltip>
                      </div>
                      <div
                        @click="publishTerminal(item)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.wait_publish_record.review_status === 6"
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
                        @click="getNewType(item.applet_id)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.wait_publish_record.review_status === 5 && item.wait_publish_record.bdUpdateOrNot"
                      >
                        <el-tooltip
                          class="item"
                          content="升级"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-shengji text-gray-l30 c-pointer red-icon fz14 lh1"
                          >
                            <i class="w5 h5 bsr red-circle"></i>
                          </span>
                        </el-tooltip>
                      </div>
                      <div
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr"
                        style="border: 1px solid #e1e1e1;"
                        v-show="item.wait_publish_record.review_status === 5 && !item.wait_publish_record.bdUpdateOrNot"
                      >
                        <el-tooltip
                          class="item"
                          content="已是最新状态"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-shengji text-gray-l30 c-pointer fz14 lh1"
                            style="color:#e1e1e1;"
                          >
                            <i class="w5 h5 bsr"></i>
                          </span>
                        </el-tooltip>
                        <!--<span class="iconfont iconfont-shengji c-not-allowed red-icon" style="color:#e1e1e1;">-->
                        <!--<i class="w5 h5 bsr red-circle"></i>-->
                        <!--</span>-->
                      </div>
                      <div
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr"
                        style="border: 1px solid #e1e1e1;"
                        v-show="item.wait_publish_record.review_status === 6 && item.wait_publish_record.bdUpdateOrNot"
                      >
                        <span
                          class="iconfont iconfont-shengji c-not-allowed red-icon fz14 lh1"
                          style="color:#e1e1e1;"
                        >
                          <i class="w5 h5 bsr red-circle"></i>
                        </span>
                      </div>
                      <div
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr"
                        style="border: 1px solid #e1e1e1;"
                        v-show="item.wait_publish_record.review_status === 6 && !item.wait_publish_record.bdUpdateOrNot"
                      >
                        <span
                          class="iconfont iconfont-shengji c-not-allowed fz14 lh1"
                          style="color:#e1e1e1;"
                        >
                          <i class="w5 h5 bsr"></i>
                        </span>
                      </div>
                      <div
                        @mouseenter="checkCode(item, index)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.wait_publish_record.review_status === 4"
                      >
                        <el-tooltip
                          class="item"
                          effect="light"
                          placement="left"
                        >
                          <div slot="content">
                            <img
                              :src="item.codeSrc"
                              alt
                              class="w200 h200"
                            >
                          </div>
                          <span
                            class="iconfont iconfont-erweima text-gray-l30 fz14 lh1 c-pointer fz14 lh1"
                          ></span>
                        </el-tooltip>
                      </div>
                      <div
                        @click="cancelCheck(item.applet_id)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.wait_publish_record.review_status === 4"
                      >
                        <el-tooltip
                          class="item"
                          content="取消"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-jiajian1 text-gray-l30 c-pointer fz14 lh1"
                          ></span>
                        </el-tooltip>
                      </div>
                      <div
                        @click="refreshTerminal(item.applet_id, index)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.wait_publish_record.review_status === 4"
                      >
                        <el-tooltip
                          class="item"
                          content="刷新"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-shuaxin text-gray-l30 c-pointer fz14 lh1"
                          ></span>
                        </el-tooltip>
                      </div>
                    </div>
                  </li>
                  <li class="online d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <div
                        class="status w54 h25 mr20 lh23 text-center text-weight"
                      >线上</div>
                      <div
                        class="version mr25"
                        v-if="item.current_record.template_value_object.version"
                      >
                        {{item.current_record.template_value_object.template_type_title}}
                        {{item.current_record.template_value_object.version}}
                      </div>
                      <div
                        class="version mr25 text-gray-l30"
                        v-else
                      >暂无</div>
                      <div class="reason fz12 text-gray">
                        <span
                          class="bg-color-status text-white p4 lh-1"
                          style="background-color: #f87738;"
                          v-show="item.current_record.review_status === 8"
                        >回滚中</span>
                        <i></i>
                      </div>
                    </div>
                    <div class="to-do d-flex">
                      <div
                        @click="rollBack(item)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.last_time_record.template_value_object.version"
                      >
                        <el-tooltip
                          class="item"
                          content="回滚"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-fanhui2 text-gray-l30 c-pointer fz14 lh1"
                          ></span>
                        </el-tooltip>
                      </div>
                      <div
                        @click="getNewType(item.applet_id)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.current_record.review_status === 1"
                      >
                        <el-tooltip
                          class="item"
                          content="提交代码"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-banben text-gray-l30 c-pointer fz14 lh1"
                          ></span>
                        </el-tooltip>
                      </div>
                      <div
                        @click="getNewType(item.applet_id)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        style="border: 1px solid #e1e1e1;"
                        v-show="item.current_record.review_status === 1 && item.current_record.bdUpdateOrNot"
                      >
                        <el-tooltip
                          class="item"
                          content="升级"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-shengji text-gray-l30 c-pointer fz14 lh1"
                          >
                            <i class="w5 h5 bsr red-circle"></i>
                          </span>
                        </el-tooltip>
                      </div>
                      <div
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        style="border: 1px solid #e1e1e1;"
                        v-show="item.current_record.review_status === 1 && !item.current_record.bdUpdateOrNot"
                      >
                        <el-tooltip
                          class="item"
                          content="已是最新版本"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-shengji text-gray-l30 c-pointer fz14 lh1"
                            style="color:#e1e1e1;"
                          ></span>
                        </el-tooltip>
                      </div>
                    </div>
                  </li>
                  <li class="history d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <div
                        class="status w54 h25 mr20 lh23 text-center text-weight"
                      >历史</div>
                      <div
                        class="version mr25 text-gray-l30"
                        v-if="item.current_record.template_value_object.version"
                      >
                        {{item.last_time_record.template_value_object.template_type_title}}
                        {{item.last_time_record.template_value_object.version}}
                      </div>
                      <div
                        class="version mr25 text-gray-l30"
                        v-else
                      >暂无</div>
                      <div class="reason fz12 text-gray">
                        <span class="bg-color-status"></span>
                        <i></i>
                      </div>
                    </div>
                    <div class="to-do"></div>
                  </li>
                </ul>
              </div>
              <div
                class="version-type text-black-d20"
                v-else
              >
                <b>小程序版本历史：</b>
                <ul class="list">
                  <li class="d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <div
                        class="version mr25"
                        v-if="item.wait_publish_record.version"
                      >{{item.wait_publish_record.version}}</div>
                      <div
                        class="version mr25 text-gray-l30"
                        v-else
                      >暂无</div>
                    </div>
                    <div class="to-do">
                      <div
                        @click="getNewType(item.applet_id)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                      >
                        <el-tooltip
                          class="item"
                          content="下载配置"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-xiazai- text-gray-l30 fz14 lh1 c-pointer"
                          ></span>
                        </el-tooltip>
                      </div>
                    </div>
                  </li>
                  <li class="online d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <div
                        class="version mr25"
                        v-if="item.current_record.version"
                      >{{item.current_record.version}}</div>
                      <div
                        class="version mr25 text-gray-l30"
                        v-else
                      >暂无</div>
                    </div>
                  </li>
                  <li class="history d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <div
                        class="version mr25 text-gray-l30"
                        v-if="item.last_time_record.version"
                      >{{item.last_time_record.version}}</div>
                      <div
                        class="version mr25 text-gray-l30"
                        v-else
                      >暂无</div>
                    </div>
                    <div class="to-do"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bottom d-flex align-center justify-end fz12">
              <div
                @click="checkAuthor(item)"
                class="text-gray-l30 c-pointer pr10"
              >
                <span class="iconfont iconfont-fenlei"></span>
                <em class="dib ml5">查看授权</em>
              </div>
              <div
                class="w130 h30 lh30 text-center enter c-pointer"
              >进入{{type[curPath]}}平台</div>
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

    <!--发布-->
    <div class="publish">
      <el-dialog
        :visible.sync="publishDialogVisible"
        append-to-body
        title="提示 TIPS"
        width="355px"
      >
        <div class="publish-inner">
          <div class="publish-title text-center">
            <span class="iconfont iconfont-warning text-danger"></span>
            <em class="pl6 text-gray-d30">是否发布小程序</em>
          </div>
          <div class="publish-btn pt42 mb15 text-center">
            <el-button
              @click="submitPublish"
              type="primary"
            >确定</el-button>
            <el-button
              @click="cancelPublish"
              type="info"
            >取消</el-button>
          </div>
        </div>
      </el-dialog>
    </div>

    <!--是否升级-->
    <div class="make-sure-upate">
      <el-dialog
        :visible.sync="makeSureUpdateDialogVisible"
        append-to-body
        title="提示 TIPS"
        width="355px"
      >
        <div class="make-sure-upate-inner">
          <div class="make-sure-upate-title text-center">
            <span class="iconfont iconfont-warning text-danger"></span>
            <em class="pl6 text-gray-d30">是否升级小程序</em>
          </div>
          <div class="make-sure-upate-btn pt42 mb15 text-center">
            <el-button
              @click="submitUpdate"
              type="primary"
            >确定</el-button>
            <el-button
              @click="cancelMakeSureUpdate"
              type="info"
            >取消</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import config from '../../../../config'
import API from '../API'
import templatePopWindow from '../common/template-pop-window'

export default {
  name: 'bd-terminal-view',
  data () {
    return {
      type: {
        wx: '微信小程序',
        bd: '百度小程序',
        gzh: '公众号',
        pc: 'pc端',
        mobile: '手机端'
      },
      listDialogVisible: false,
      publishDialogVisible: false,
      makeSureUpdateDialogVisible: false,
      templateDialogVisible: false,
      wxNickName: '',
      tableData: [{
        name: '楼兰雨阁',
        tableTodo: ''
      },
      {
        wxTableName: '楼兰雨阁',
        tableTodo: ''
      }
      ],
      typeDialogVisible: false,
      typeData: [{
        name: '企业商城版',
        version: 'V.1.13.09',
        description: '水水水水水水水水水水水水水水水水水'
      },
      {
        name: '企业商城版',
        version: 'V.1.13.09',
        description: '水水水水水水水水水水水水水水水水水'
      }
      ],
      radio: '1',
      bdTerminalList: [],
      template_id: '',
      updateCustomerAppletId: '',
      updatePackageId: '',
      available_channels: '',
      tempObj: [],
      baseURL: config.baseURL,
      channel_id: ''
    }
  },
  computed: {
    curPath () {
      let path = this.$route.path
      let newArrPath = path.split('/')
      return newArrPath[newArrPath.length - 1]
    }
  },
  created () {},
  mounted () {
    let href = window.location.href
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
    // 请求最新模板

    this.getNewestTemplate().then(res => {
      this.baseTemplateTitle()
    })

    console.log('baseURL', this.baseURL)
  },
  methods: {
    // 请求百度列表
    getBdTerminalList () {
      this.tempObj = []
      return new Promise((resolve, reject) => {
        this.http4Get(API.bdAppletList).then(res => {
          let data = res.collection;
          (data || []).forEach((item, index) => {
            item.wait_publish_record.bdUpdateOrNot = false
            item.current_record.bdUpdateOrNot = false
            item.template_name = '暂无'
            item.codeSrc = ''

            if (this.getUpdateBoolean(this.template_id, 'wait_publish_record', item)) {
              item.wait_publish_record.bdUpdateOrNot = true
            } else if (this.getUpdateBoolean(this.template_id, 'current_record', item)) {
              item.current_record.bdUpdateOrNot = true
            }

            if (item.wait_publish_record.review_status === 3 && (item.wait_publish_record.package_id ===
                  '0' ||
                  item.wait_publish_record.package_id === null)) {
              console.log('item.wait_publish_record', item.wait_publish_record)
              this.tempObj.push({
                id: item.applet_id,
                index
              })
            }
          })
          this.bdTerminalList = data

          this.getRefreshTime()
          resolve(this.bdTerminalList)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取小程序模板最新版本
    getNewestTemplate () {
      return new Promise((resolve, reject) => {
        this.http4Get(API.bdUpdateOrNot).then(res => {
          this.template_id = res.data.template_id
          resolve(this.template_id)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 验证待发布和线上的升级状态
    getUpdateBoolean (templateId, record, data) {
      if (data[record].template_id < templateId) {
        return true
      }
      return false
    },

    // 提交代码
    getNewType (appletId) {
      // 提交代码
      this.http4Post(API.newTypeCode, {
        applet_id: appletId
      }).then(res => {
        this.baseTemplateTitle()
      }).catch(error => {
        console.log('error', error)
      })
    },
    // 查看授权页面信息
    checkAuthor (item) {
      this.$router.push({
        path: '../authorize/bd',
        query: {
          id: item.id
        }
      })
    },
    // 点击刷新包信息状态
    refreshTerminal (id, index) {
      this.http4Get(API.refresh + id).then(res => {
        this.baseTemplateTitle()
        // this.bdTerminalList[index].wait_publish_record.package_id = res.data.package_id
      }).catch(error => {
        console.log('error', error)
      })
    },
    getRefreshTime () {
      if (!this.tempObj.length) {
        return
      }
      Promise.all(this.tempObj.map(item => this.http4Get(API.refresh + item.id))).then(res => {
        res.forEach((item, index) => {
          if (item.data.package_id && item.data.package_id !== '0' && item.data.package_id !== null) {
            this.bdTerminalList[this.tempObj[index].index].wait_publish_record.package_id = item.data.package_id
            this.$delete(this.tempObj, index)
          }
        })

        setTimeout(() => {
          this.getRefreshTime()
        }, 3000)
      })
    },
    // 提交审核
    checkTerminal (item, index) {
      // bdSubmit
      this.http4Post(API.bdSubmit, {
        applet_id: item.applet_id,
        package_id: item.wait_publish_record.package_id,
        content: '',
        remark: 'baidu'
      }).then(res => {
        console.log('res---submit---', res)
        if (res.state === 0 || res.state === '0') {
          this.baseTemplateTitle()
        }
      }).catch(error => {
        console.log('error', error)
      })
    },
    // 发布弹窗显示
    publishTerminal (item) {
      this.publishDialogVisible = true
      this.updateCustomerAppletId = item.applet_id
      this.updatePackageId = item.wait_publish_record.package_id
    },
    // 取消审核
    cancelCheck (appletId) {
      // bdCancel
      this.http4Post(API.bdCancel + appletId).then(res => {
        console.log('res---cancel---', res)
        this.baseTemplateTitle()
      }).catch(error => {
        console.log('error', error)
      })
    },
    // 取消发布弹窗
    cancelPublish () {
      this.publishDialogVisible = false
    },
    // 取消审核弹窗显示
    cancelMakeSureUpdate () {
      this.makeSureUpdateDialogVisible = false
    },
    // 提交发布
    submitPublish () {
      this.http4Post(API.publish, {
        customer_applet_id: this.updateCustomerAppletId,
        package_id: this.updatePackageId
      }).then(res => {
        console.log('res', res)
        this.baseTemplateTitle()
      }).catch(error => {
        console.log('error', error)
      })
      this.publishDialogVisible = false
    },
    // 提交审核
    submitUpdate () {
      this.makeSureUpdateDialogVisible = false
    },
    // 回滚
    rollBack (item) {
      this.http4Post(API.rollback + item.applet_id).then(res => {
        console.log('res', res)
        this.baseTemplateTitle()
      }).catch(error => {
        console.log('error', error)
      })
    },
    // 绑定模板
    toBindTemplate (item) {
      console.log('item.channel_id', item)
      this.channel_id = item.channel_id
      this.templateDialogVisible = true
    },
    // 改变模板
    toChangeTemplate (id) {
      this.httpPut(`manager/channel/${this.channel_id}/decoration/template/${id}`).then(res => {
        console.log('res', res)
        this.templateDialogVisible = false
        this.baseTemplateTitle()
      })
    },
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
      this.getBdTerminalList().then(res => {
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
          this.bdTerminalList.forEach(ele => {
            data.forEach(element => {
              if (element.id === ele.decoration_template_id) {
                ele.template_name = element.title
              }
            })
          })
        })
      })
    },
    checkCode (item, index) {
      if (item.wait_publish_record.package_id !== '0' && item.wait_publish_record.package_id !== null) {
        this.bdTerminalList[index].codeSrc =
            `this.baseURL.http4${API.bdCodeImg}${item.applet_id}/${item.wait_publish_record.package_id}`
        console.log('item.codeSrc', this.bdTerminalList[index])
      }
    },
    changeListTemplateName (val) {
      console.log(val, 333)
      this.baseTemplateTitle()
    }
  },
  components: {
    templatePopWindow
  }
}

</script>
