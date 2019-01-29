<template>
  <div class="product">
    <div class="product-title">
      <span class="iconfont iconfont-warning text-danger"></span>
      <em
        class="pl6 text-gray-d30"
        v-if="textShow"
      >选择您当前需要开通的版本</em>
      <em
        class="pl6 text-gray-d30"
        v-else
      >当前所有版本已开通</em>
    </div>

    <!--产品列表-->
    <div class="product-classify d-flex flex-wrap pt26">
      <div
        :key="item.customer_product_id"
        class="type w420 shrink-0 mr76 mb56"
        v-for="(item, index) in productList"
      >
        <div
          class="not-yet d-flex h210 bd-gray"
          v-if=" item.customer_product_status.indexOf('ENABLE') < 0 "
        >
          <div
            class="logo-left w180 d-flex justify-center align-center shrink-0 bg-cover"
          >
            <!-- <bg-img-box class="w140 h140"
            :path="[item, 'icon']"></bg-img-box>-->
            <img
              :src=" 'http://file.bj/upload/' + item.icon"
              alt
              class="w140 h140 img-cover bsr"
            >
          </div>
          <div
            class="right d-flex justify-center align-center flex-column grow-1"
          >
            <h4
              class="fz16 w190 text-gray-d40 text-ellipsis text-center"
            >{{item.title}}</h4>
            <div
              @click="setUpProduct($event, item.product_id)"
              class="pt22 text-center c-pointer"
            >
              <span class="iconfont iconfont-bianji fz30 lh35"></span>
              <p class="fz14 pt4 text-gray-l30">点击开通</p>
            </div>
          </div>
        </div>
        <div
          class="done d-flex h210 bd-gray"
          v-else
        >
          <p
            class="product-name w100 h100 d-flex align-end justify-center text-nowrap b-triangle0"
          >
            <i class="pb3">{{item.title}}</i>
          </p>
          <div
            class="logo-left w180 d-flex justify-center align-center shrink-0 bg-cover"
          >
            <!-- <bg-img-box class="w140 h140"
            :path="[item, 'icon']"></bg-img-box>-->
            <div class="w140 h140 img-cover bsr c-pointer">
              <bg-img-box
                :path="[item, 'icon']"
                class="w140 h140 img-cover bsr"
              ></bg-img-box>
              <!-- <img class="w140 h140 img-cover bsr"
                   :src=" 'http://file.bj/upload/' + item.icon"
              alt="">-->
              <!-- <p class="w140 h30 text-center lh30 fz14"
              @click="changeImgBoxIcon(item)">修改图片</p>-->
            </div>
          </div>
          <div class="right pt20 pl20 w200">
            <div class="describle po-re">
              <h5 class="fz14 text-gray-d40">
                产品描述：
                <span
                  @click="changeDes(item, index)"
                  class="iconfont iconfont-bianji text-primary fz14 des-editor"
                ></span>
              </h5>
              <p
                class="text-ellipsis fz12 text-gray-d30"
                v-show="item.descriptionText"
              >{{item.description}}</p>
              <el-input
                :ref="'list-' + index"
                :rows="4"
                @blur="descriptionDone(item, index)"
                class="po-ab"
                maxlength="80"
                placeholder="请输入内容"
                style="max-height: 90px !important;"
                type="textarea"
                v-model="item.description"
                v-show="!item.descriptionText"
              >
                <!-- @change="descriptionDone(item, index)" -->
              </el-input>
            </div>
            <div class="bind-teiminal pt14">
              <div class="manage">
                <h5 class="dib fz14 pr6 text-gray-d40">可支持终端:</h5>
                <div
                  class="terminal-icon d-flex mt10"
                  v-show="item.available_channels && (item.available_channels.length > 0)"
                >
                  <!-- v-show="info.channel_type_info.name.indexOf('WECHAT') > -1" -->
                  <div
                    :key="index"
                    class="w24 mr10"
                    v-for="(info,index) in item.available_channels"
                  >
                    <el-popover
                      :content="info.channel_type_info.description"
                      :title="info.channel_type_info.name"
                      class="el-wrap w24 h24 bsr text-center"
                      placement="top-start"
                      trigger="hover"
                      width="200"
                    >
                      <span
                        class="iconfont iconfont-wx fz14 text-center terminal-color lh25"
                        slot="reference"
                        v-if="info.channel_type_info.name.indexOf('微信') > -1"
                      ></span>
                      <span
                        class="iconfont iconfont-bd fz14 text-center terminal-color lh25"
                        slot="reference"
                        v-if="info.channel_type_info.name.indexOf('百度') > -1"
                      ></span>
                      <span
                        class="iconfont iconfont-pc fz14 text-center terminal-color lh25"
                        slot="reference"
                        v-if="info.channel_type_info.name.indexOf('PC') > -1"
                      ></span>
                    </el-popover>
                    <!-- <el-tooltip class="el-wrap w24 h24 bsr"
                                effect="light"
                                :content="info.channel_type_info.description"
                                placement="top">
                      <span v-if="info.channel_type_info.name.indexOf('WECHAT') > -1"
                            class="iconfont iconfont-wx fz14 text-center terminal-color lh25"></span>
                      <span v-if="info.channel_type_info.name.indexOf('BAIDU') > -1"
                            class="iconfont iconfont-bd fz14 text-center terminal-color lh25"></span>
                      <span v-if="info.channel_type_info.name.indexOf('PC') > -1"
                            class="iconfont iconfont-pc fz14 text-center terminal-color lh25"></span>
                    </el-tooltip>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom h30 d-flex fz12 bt-gray">
            <div
              @click="enterToContent(item)"
              class="left-name w180 text-center lh30 c-pointer"
            >进入产品管理中心</div>
            <div
              class="grow-1 d-flex justify-between align-center pl20 pr10 right-time"
            >
              <!-- v-show="item.count_time.indexOf('过期') < 0" -->
              <div>
                剩余时间：
                <span class="text-primary">{{item.count_time + +1}}</span>
                <i v-show="String(item.count_time).indexOf('过期') < 0">天</i>
              </div>
              <div>
                <span>{{String(item.showRealDeadline).split(' ')[0]}}</span>到期
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--开通弹窗-->
    <div class="set-up">
      <el-dialog
        :visible.sync="setUpDialogVisible"
        append-to-body
        title="开通 OPEN UP"
        width="604px"
      >
        <div class="set-up-inner">
          <div class="alert-popup">
            <el-form
              :model="userInfo"
              :rules="userInfoRules"
              label-width="100px"
              ref="ruleForm"
            >
              <el-form-item
                label="店铺LOGO"
                prop="path"
              >
                <bg-img-box
                  :path="[userInfo, 'path']"
                  class="mr20 w120 h120"
                ></bg-img-box>
                <!-- <el-button type="primary"
                class="w80">确定</el-button>-->
                <span class="fz12 text-gray-l30">（建议尺寸：90*90像素 ）</span>
              </el-form-item>
              <el-form-item
                label="产品描述"
                prop="desc"
              >
                <el-input
                  maxlength="80"
                  type="textarea"
                  v-model="userInfo.desc"
                ></el-input>
              </el-form-item>
              <el-form-item class="mt25">
                <el-button
                  @click="setUpSure('ruleForm')"
                  class="w80"
                  type="primary"
                >确定</el-button>
                <el-button
                  @click="cancelSetUp"
                  class="w80"
                  type="info"
                >取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// 图片管理器
import bgImgBox from '../../common/bg-img-box.vue'
import API from './API'
export default {
  name: 'product',
  data () {
    return {
      productList: null,
      textShow: true,
      productId: '',
      setUpDialogVisible: false,
      manageDialogVisible: false,
      path: 'usr/g5O46p2bRB/5bc45046360d8.jpg',
      userInfo: {
        path: '111',
        desc: ''
      },
      userInfoRules: {
        path: [{
          required: true,
          message: '图片不能为空'
        }],
        desc: [{
          required: true,
          message: '请填写产品描述',
          trigger: 'blur'
        }]
      },
      terminal: [{
        value: 'all',
        label: '全部'
      },
      {
        value: 'wx',
        label: '微信小程序'
      },
      {
        value: 'bd',
        label: '百度小程序'
      },
      {
        value: 'zgh',
        label: '公众号'
      },
      {
        value: 'pc',
        label: 'pc端'
      },
      {
        value: 'mobile',
        label: '手机端'
      }
      ],
      tableData: [{
        type: '微信小程序',
        name: '百度小程序名称',
        products: '商城',
        todo: ''

      },
      {
        type: '百度小程序',
        name: '微信小程序名称',
        products: '微信',
        todo: ''

      },
      {
        type: '公众号',
        name: '公众号名称',
        products: '微信',
        todo: ''

      },
      {
        type: 'PC端',
        name: 'PC端名称',
        products: '微信',
        todo: ''

      },
      {
        type: '手机端',
        name: '手机端名称',
        products: '微信',
        todo: ''

      }
      ],
      originSelected: '',
      sexSelected: '',
      nickName: '',
      terminalSelected: '',
      changeDescription: ''
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    // 获取产品列表
    getProductList () {
      this.httpGet(API.productList).then(res => {
        let statusArr = []
        if (res.state === 0) {
          let collection = res.collection
          collection.forEach((item, index) => {
            if (item.customer_product_status.indexOf('ENABLE') > -1) {
              statusArr.push(item.customer_product_status)
            }
            item.descriptionText = true
            item.showRealDeadline = this.showRealDeadline(item.experience_deadline, item.deadline)

            item.count_time = this.countDown(this.showRealDeadline(item.experience_deadline, item.deadline))
          })
          if (statusArr.length === collection.length) {
            this.textShow = false
          }
          this.productList = collection
        } else {
          alert('请求失败')
        }
      }).catch(error => {
        console.log('error', error)
      })
    },
    // 显示真正的截止日期
    showRealDeadline (experienceDeadline, deadline) {
      // let experience_date = new Date(experience_deadline).getTime()
      // let deadline_date = new Date(deadline).getTime()
      let realDate = ''
      if (experienceDeadline) {
        if (deadline) {
          realDate = this.compareDate(experienceDeadline, deadline)
        } else {
          realDate = experienceDeadline
        }
      } else {
        realDate = deadline
      }

      if (deadline) {
        if (experienceDeadline) {
          realDate = this.compareDate(experienceDeadline, deadline)
        } else {
          realDate = deadline
        }
      } else {
        realDate = experienceDeadline
      }
      return realDate
    },
    // 日期大小比较
    compareDate (experienceDeadline, deadline) {
      let experienceDate = new Date(experienceDeadline).getTime()
      let deadlineDate = new Date(deadline).getTime()
      let dateBigger = ''
      if (experienceDate > deadlineDate) {
        dateBigger = experienceDeadline
      } else {
        dateBigger = deadline
      }
      return dateBigger
    },
    // 修改产品图标
    changeImgBoxIcon (item) {
      this.changeInfo({
        product_id: item.product_id,
        icon: 'http://file.bj/upload/usr/6QN4pQxWbP/5c24a822ec7e1.png'
      }).then(res => {
        console.log(res)
      })
    },
    // 产品描述修改
    changeDes (item, index) {
      console.log(index, 'index')
      this.changeDescription = item.description
      this.productList[index].descriptionText = false
      for (let i = 0; i < this.productList.length; i++) {
        console.log(this.productList[i].descriptionText, 'forfor')
      }

      // console.log(this.productList[index].descriptionText, 11111111111, index)
      this.$nextTick(function () {
        this.$refs['list-' + index][0].focus()
        // this.$refs['list-' + index][0].resizeTextarea();
      })

      // setTimeout(() => {
      //   this.$refs['list-' + index][0].focus()
      // })
    },
    // 修改完成
    descriptionDone (item, index) {
      this.productList[index].descriptionText = true
      console.log(this.productList[index].descriptionText, 3333333333333333, index)
      if (this.changeDescription !== item.description) {
        this.changeInfo({
          product_id: item.product_id,
          icon: 'http://file.bj/upload/usr/6QN4pQxWbP/5c24a822ec7e1.png',
          description: item.description,
          index
        })
      }
    },
    changeInfo ({
      description = '',
      icon = '',
      product_id: productId = '',
      index = 0
    } = {}) {
      this.httpPut(API.changeIconDes, {
        product_id: productId,
        icon,
        description
      }).then(res => {
        console.log(res)
        if (res.data) {
          this.productList[index].description = res.data.description
        }
      })
    },
    // 开通产品弹窗
    setUpProduct (e, productId) {
      console.log('productId', productId)
      this.productId = productId
      this.setUpDialogVisible = true
    },
    // 提交开通请求
    setUpSure (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.productId !== '0' && this.productId !== undefined && this.productId !== null) {
            console.log('this.productId', this.productId)
            console.log('this.userInfo.path', this.userInfo.path)
            console.log('this.userInfo.desc', this.userInfo.desc)
            this.httpPost(API.productSetUp, {
              product_id: this.productId,
              icon: this.userInfo.path,
              description: this.userInfo.desc
            }).then(res => {
              console.log('res', res)
              this.getProductList()
              this.setUpDialogVisible = false
            }).catch(error => {
              console.log('error', error)
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancelSetUp () {
      this.setUpDialogVisible = false
    },
    // 进入产品管理中心
    enterToContent (item) {
      if (item.title === '商城版') this.$router.push({ path: '../shop/information' })
      else this.$router.push({ path: '../category/column/manager' })
    },
    // 倒计时方法
    countDown (time) {
      let nowTime = new Date().getTime()
      let countTime = new Date(time).getTime()

      let timeDiff = countTime - nowTime
      let day
      if (timeDiff > 0) {
        day = Math.floor(timeDiff / 1000 / 60 / 60 / 24)
      } else {
        day = '已过期'
      }
      return day
    }
  },
  components: {
    bgImgBox
  }
}

</script>

<style lang="scss">
@import "../../../styles/init";

.product {
  .product-classify {
    textarea {
      max-height: 90px !important;
    }

    .type {
      /* overflow: hidden; */
      background-color: $white;
    }

    .logo-left {
      background-image: url(../assets/product_bg.jpg);
    }

    .not-yet {
      .right {
        span {
          color: $green-gray;
        }

        p {
          border-bottom: 1px solid lighten($gray, 30%);
        }
      }

      &:hover,
      &.on {
        border: 1px solid $primary;
        box-shadow: 4px 4px 0 2px $blue-wd4;

        .right {
          span,
          p {
            color: $primary;
            border-bottom: 1px solid $primary;
          }
        }
      }
    }

    .done {
      overflow: hidden;
      position: relative;

      .des-editor {
        font-weight: normal;
        visibility: hidden;
      }

      .logo-left {
        > div {
          position: relative;
          transform: translate3d(0, -14px, 0);
          overflow: hidden;

          .pic-box {
            .img-obj {
              background-size: cover;
            }

            .add-img-btn {
              z-index: 10;
              visibility: hidden;
            }
          }

          p {
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            color: $white;
            display: none;
          }

          &:hover,
          &.on {
            p {
              display: block;
            }
          }
        }
      }

      .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        color: $gray-wd4;

        .left-name {
          background-color: $blue-wd5;
          color: $primary;
        }
      }

      .manage {
        .terminal-icon {
          .el-wrap {
            display: inline-block;
            background-color: $blue-wd6;
          }

          .terminal-color {
            color: $white;
          }
        }
      }

      .product-name {
        position: absolute;
        right: 0;
        top: 0;
        color: $white;
        background-color: #f87f3f;
        transform: translate3d(50px, -50px, 0) rotateZ(45deg);
      }

      .b-triangle0 {
        background-color: #f87f3f;
      }

      .b-triangle1 {
        background-color: #34cd96;
      }

      .b-triangle2 {
        background-color: #67b8f9;
      }

      .b-triangle3 {
        background-color: #e1727f;
      }

      .b-triangle4 {
        background-color: #7c7af3;
      }

      &:hover,
      &.on {
        border: 1px solid $primary;
        box-shadow: 4px 4px 0 2px $blue-wd4;

        .des-editor {
          visibility: visible;
        }

        .bottom {
          .left-name {
            background-color: $primary;
            color: $white;
          }
        }
      }
    }
  }

  .hide {
    display: none;
  }
}

.bind-manage-inner {
  overflow: auto;
}
</style>
