<style scoped
       lang="scss">
@import "../../../../styles/variables";

.wx-terminal-view {
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
                  top: -2px;
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
  <div class="wx-terminal-view">
    <div
      class="product-classify d-flex flex-wrap pt26 container"
      v-if="wxTerminalList.length > 0"
    >
      <div class="row">
        <div
          :key="item.applet_id"
          class="type col-xxl-4 col-lg-6 mb56"
          v-for="(item, index) in wxTerminalList"
        >
          <div
            class="done h350 bd-gray"
            style="margin-right: 6%;"
          >
            <div class="d-flex align-center p10 bg-gray-l64 text-black-d20">
              <b class="ml10 shrink-0">小程序名称：</b>
              <i class="text-ellipsis">{{item.applet.principal_name}}</i>
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
                  :style="item.applet.head_img | filterImgObj"
                  class="w70 h70 bg-contain bsr"
                  v-if="item.applet.head_img"
                ></div>
                <div
                  class="w70 h70 bg-contain bsr"
                  style="background-image: url(../../assets/0.jpg);"
                  v-else
                ></div>
              </div>
              <div
                class="version-type text-black-d20"
                v-if="item.applet.bound_mode.indexOf('AUTOMATIC') > -1"
              >
                <b>版本类型：</b>
                <ul class="list">
                  <li class="d-flex h50 justify-between align-center">
                    <div class="left-status d-flex">
                      <b class="status w54 text-center mr20 lh23 shrink-0">待发布</b>
                      <div
                        class="version mr25"
                        v-if="item.wait_publish_record.version"
                      >{{item.wait_publish_record.version}}</div>
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
                        v-show=" item.wait_publish_record.applet_review_status === 'DEVELOPING' "
                      >
                        <span
                          class="bg-color-status p4 lh-1 text-white"
                          style="background-color: #f8c438;"
                        >开发中</span>
                        <!-- <i class="pl6">(获取包信息中)</i>
                        <i class="pl6">(已获取包信息)</i>-->
                      </div>

                      <div
                        class="reason fz12 text-gray"
                        v-show=" item.wait_publish_record.applet_review_status === 'UNDER_REVIEW' "
                      >
                        <span
                          class="bg-color-status p4 lh-1 text-white"
                          style="background-color: #f4585d;"
                        >审核中</span>
                        <i class="pl6"></i>
                      </div>

                      <div
                        class="reason fz12 text-gray"
                        v-show=" item.wait_publish_record.applet_review_status === 'REVIEW_FAIL' "
                      >
                        <span class="bg-color-status p4 lh-1 text-white">审核失败</span>
                        <i class="pl6">
                          (原因
                          <span class="iconfont iconfont-yiwen fz12"></span>)
                        </i>
                      </div>

                      <div
                        class="reason fz12 text-gray"
                        v-show=" item.wait_publish_record.applet_review_status === 'REVIEW_PASS' "
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
                        v-show="(item.wait_publish_record.id === '0' || item.wait_publish_record.id === null || item.wait_publish_record.applet_review_status === 'DEVELOPING' || item.wait_publish_record.applet_review_status === 'REVIEW_FAIL') && !item.current_record.review_status && !item.last_time_record.review_status"
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
                        v-show="item.wait_publish_record.applet_review_status === 'DEVELOPING' || item.wait_publish_record.applet_review_status === 'REVIEW_FAIL'"
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
                        v-show="item.wait_publish_record.applet_review_status === 'REVIEW_PASS'"
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
                        v-if="(item.wait_publish_record.applet_review_status === 'DEVELOPING' || item.wait_publish_record.applet_review_status === 'REVIEW_FAIL') && item.wait_publish_record.bdUpdateOrNot"
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
                        v-else
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
                        v-show="item.wait_publish_record.applet_review_status === 'REVIEW_PASS' && item.wait_publish_record.bdUpdateOrNot"
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
                        v-show="item.wait_publish_record.applet_review_status === 'REVIEW_PASS' && !item.wait_publish_record.bdUpdateOrNot"
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
                        v-show="item.wait_publish_record.applet_review_status === 'UNDER_REVIEW'"
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
                        v-show="item.wait_publish_record.applet_review_status === 'UNDER_REVIEW'"
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
                        v-show="item.wait_publish_record.applet_review_status === 'UNDER_REVIEW'"
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
                        v-if="item.current_record.version"
                      >{{item.current_record.version}}</div>
                      <div
                        class="version mr25 text-gray-l30"
                        v-else
                      >暂无</div>
                      <div
                        class="reason fz12 text-gray"
                        v-show="item.last_time_record.applet_review_status === 'ROLL_BACK'"
                      >
                        <span
                          class="bg-color-status text-white p4 lh-1"
                          style="background-color: #f87738;"
                        >回滚中</span>
                        <i></i>
                      </div>
                    </div>
                    <div class="to-do d-flex">
                      <div
                        @click="rollBack(item)"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        v-show="item.last_time_record.version"
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
                        v-show="item.current_record.applet_review_status === 'ON_LINE'"
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
                        v-show="item.current_record.applet_review_status === 'ON_LINE' && item.current_record.bdUpdateOrNot"
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
                        v-show="item.current_record.applet_review_status === 'ON_LINE' && !item.current_record.bdUpdateOrNot"
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
                        v-if="item.last_time_record.version"
                      >{{item.last_time_record.version}}</div>
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
                    <div class="to-do d-flex">
                      <!-- :href="'http://172.16.11.227:8106/api/manager/customer/applet/download/'+ item.id" download="" target="_blank"  -->
                      <a
                        :href=" baseURL.http7 + '/api/manager/customer/applet/download/'+ item.cid + '/' + item.id"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        download
                        target="_blank"
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
                      </a>
                      <a
                        :href="item.download_link"
                        class="ml10 icon w28 h28 d-flex justify-center align-center bsr bd-gray"
                        download
                        target="_blank"
                      >
                        <el-tooltip
                          class="item"
                          content="下载代码"
                          effect="light"
                          placement="top"
                        >
                          <span
                            class="iconfont iconfont-codeDownload text-gray-l30 fz14 lh1 c-pointer"
                          ></span>
                        </el-tooltip>
                      </a>
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
            <div class="bottom d-flex justify-between fz12">
              <div class="pl20">
                <div v-show="item.applet.bound_mode.indexOf('AUTOMATIC') > -1">
                  <b class="text-black-d20 fz14">类目说明：</b>
                  <span class="iconfont iconfont-yiwen"></span>
                </div>
              </div>
              <div class="right d-flex justify-end">
                <div
                  @click="checkWhiteList(item)"
                  class="d-flex align-center text-gray-l30 c-pointer pr10"
                >
                  <span class="iconfont iconfont-chakanmingdan"></span>
                  <em class="dib ml5">白名单</em>
                </div>
                <div
                  @click="checkAuthor(item)"
                  class="d-flex align-center text-gray-l30 c-pointer pr10"
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

    <!-- 白名单弹窗 -->
    <div class="template-alert">
      <el-dialog
        :visible.sync="whiteListDialogVisible"
        append-to-body
        title="白名单 WHITE LIST"
        width="906px"
      >
        <div class="list-inner">
          <ul class="list-content">
            <p class="d-flex align-center">
              <span class="iconfont iconfont-warning text-danger pr6"></span>
              <i>添加微信账号至白名单绑定者必须在微信端确认后即可扫描小程序二维码进行相关小程序模板的体验使用。</i>
            </p>
            <div class="wx-name mt20 d-flex align-center">
              <i>微信号名称：</i>
              <el-input
                class="w210 pr10 ml10"
                placeholder="请输入微信号名称"
                size="small"
                v-model="WxNicknameInput"
              ></el-input>
              <el-button
                @click="addWxNickname"
                type="primary"
              >添加</el-button>
            </div>
            <div
              class="list-table mt20"
              style="max-height: 530px"
            >
              <el-table
                :data="wxNicknameData"
                stripe
              >
                <el-table-column
                  align="center"
                  label="微信号名称"
                  prop="wechatid"
                ></el-table-column>
                <el-table-column
                  align="center"
                  label="操作"
                  prop="id"
                >
                  <template slot-scope="scope">
                    <el-tooltip
                      class="item fz12"
                      content="删除"
                      effect="light"
                      placement="top"
                    >
                      <span
                        @click="toDeleteNickname(scope.row.id)"
                        class="iconfont iconfont-close"
                        style="color: #a9b7b7;"
                      ></span>
                    </el-tooltip>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </ul>
        </div>
      </el-dialog>
    </div>

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
  name: 'wx-terminal-view',
  data () {
    return {
      type: {
        wx: '微信小程序',
        bd: '百度小程序',
        gzh: '公众号',
        pc: 'pc端',
        mobile: '手机端'
      },
      publishDialogVisible: false,
      makeSureUpdateDialogVisible: false,
      templateDialogVisible: false,
      whiteListDialogVisible: false,
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
      wxTerminalList: [],
      template_id: '',
      available_channels: '',
      tempObj: [],
      curRouterPath: '',
      WxNicknameInput: '',
      wxNicknameData: [],
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
      // this.getWxTerminalList()
    })

    console.log('baseURL', this.baseURL)
  },
  methods: {
    // 请求微信列表
    getWxTerminalList () {
      // this.tempObj = []
      return new Promise((resolve, reject) => {
        this.http7Get(API.wxGetAppletList).then(res => {
          if (res.state === 0 || res.state === '0') {
            let data = res.collection
            // (data || []).forEach((item, index) => {
            //   item.wait_publish_record.bdUpdateOrNot = false
            //   item.current_record.bdUpdateOrNot = false
            //   item.template_name = '暂无'
            //   item.codeSrc = ''

            //   if (this.getUpdateBoolean(this.template_id, 'wait_publish_record', item)) {
            //     item.wait_publish_record.bdUpdateOrNot = true
            //   } else if (this.getUpdateBoolean(this.template_id, 'current_record', item)) {
            //     item.current_record.bdUpdateOrNot = true
            //   }
            // })
            this.getManualInfo().then(collection => {
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

                // 手动绑定
                if (item.applet.bound_mode.indexOf('MANUAL') > -1) {
                  item.wait_publish_record.version = collection[0].version || '暂无'
                  item.download_link = collection[0].download_link || ''
                  item.current_record.version = (collection[1] && collection[1].version) || '暂无'
                  item.last_time_record.version = (collection[2] && collection[2].version) || '暂无'
                }
              })
              this.wxTerminalList = data
              resolve(this.wxTerminalList)
            })
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取手动绑定信息
    getManualInfo () {
      return new Promise((resolve, reject) => {
        this.http7({
          url: API.wxGetManualInfo
        }).then(({ collection, state }) => {
          if (state === 0) {
            resolve(collection)
          }
        })
      })
    },
    toDeleteNickname (id) {
      console.log('id', id)
      console.log('this.updateCustomerAppletId', this.updateCustomerAppletId)
      this.http7Delete(API.wxDeleteWhite + id).then(res => {
        console.log('删除白名单')
        this.getWxWhiteList(this.updateCustomerAppletId)
      })
    },
    addWxNickname (e) {
      // this.WxNicknameInput
      this.http7Post(API.addWhiteList, {
        wechatid: this.WxNicknameInput,
        applet_id: this.updateCustomerAppletId
      }).then(res => {
        this.WxNicknameInput = ''
        this.getWxWhiteList(this.updateCustomerAppletId)
      })
    },
    // 获取小程序模板最新版本
    getNewestTemplate () {
      console.log('API.wxNewestTemplate', API.wxNewestTemplate)
      return new Promise((resolve, reject) => {
        this.http7Get(API.wxNewestTemplate).then(res => {
          this.template_id = res.data.template_id
          console.log('this.template_id', this.template_id)
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

    // 下载配置
    getDownloadSetting (id) {
      // window.open('http://172.16.11.227:8106/api/manager/customer/applet/download/'+ id)
    },

    // 提交代码
    getNewType (appletId) {
      // 提交代码
      this.http7Post(`${API.wxNewTypeCode}${appletId}/upload-code`).then(res => {
        this.baseTemplateTitle()
      }).catch(error => {
        console.log('error', error)
      })
    },
    // 查看授权页面信息
    checkAuthor (item) {
      this.$router.push({
        path: '../authorize/wx',
        query: {
          id: item.id
        }
      })
    },

    // 点击刷新包信息状态
    refreshTerminal (id, index) {
      this.http7Post(`${API.wxRefresh}${id}/audit-result`).then(res => {
        this.baseTemplateTitle()
        // this.wxTerminalList[index].wait_publish_record.package_id = res.data.package_id
      }).catch(error => {
        console.log(error)
      })
    },
    // 提交审核
    checkTerminal (item, index) {
      // bdSubmit  参数待定
      this.http7Post(`${API.wxSubmit}${item.applet_id}/submit`, {
        address: 'pages/index/index',
        tag: '商城',
        first_class: '工具',
        second_class: '计算类',
        third_class: null,
        first_id: 287,
        second_id: 608,
        third_id: 0,
        title: '商城首页'
      }).then(res => {
        console.log('res---submit---', res)
        this.baseTemplateTitle()
      }).catch(error => {
        console.log('error', error)
      })
    },
    // 发布弹窗显示
    publishTerminal (item) {
      this.publishDialogVisible = true
      this.updateCustomerAppletId = item.applet_id
    },
    // 取消审核
    cancelCheck (appletId) {
      // wxCancel
      this.http7Post(API.wxCancel + appletId).then(res => {
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
      this.http7Post(API.wxPublish, {
        customer_applet_id: this.updateCustomerAppletId
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
      this.http7Post(API.wxRollBack + item.applet_id).then(res => {
        console.log('res', res)
        this.baseTemplateTitle()
      }).catch(error => {
        console.log('error', error)
      })
    },
    // 获取白名单数据列表
    getWxWhiteList (appletId) {
      this.http7({
        url: API.wxWhiteList,
        params: {
          appletId: appletId
        }
      }).then(({
        collection
      }) => {
        console.log(collection, 11111111)
        let wxNicknameData = []
        collection.forEach(element => {
          wxNicknameData.push(element)
        })

        this.wxNicknameData = wxNicknameData
      })
    },
    // 白名单
    checkWhiteList (item) {
      this.whiteListDialogVisible = true
      this.updateCustomerAppletId = item.applet_id
      this.getWxWhiteList(item.applet_id)
    },
    // 绑定模板弹窗出现
    toBindTemplate (item) {
      console.log('item---channel_id', item)
      this.channel_id = item.channel_id
      this.templateDialogVisible = true
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
      this.getWxTerminalList().then(res => {
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
          this.wxTerminalList.forEach(ele => {
            data.forEach(element => {
              if (element.id === ele.decoration_template_id) {
                ele.template_name = element.title
              }
            })
          })

          console.log('this.wxTerminalList', this.wxTerminalList)
        })
      })
    },
    checkCode (item, index) {
      this.wxTerminalList[index].codeSrc =
          `${this.baseURL.http7}${API.wxCodeImg}${item.applet_id}`
      console.log('item.codeSrc', this.wxTerminalList[index])
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
