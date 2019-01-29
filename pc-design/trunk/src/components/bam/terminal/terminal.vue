<template>
  <div class="terminal">
    <div class="create">
      <el-button
        @click="createType"
        type="primary"
      >新建</el-button>
    </div>

    <!--v-if="list.hide!==true"-->
    <!--:class="{active: curLink.indexOf(list.link)!==-1}"-->
    <ul class="d-flex bb-gray pt16">
      <li
        :class="{active: currLink.indexOf(list.path) > -1}"
        :key="index"
        class="link-li pl14 pr14 h30 lh30"
        v-for="(list, index) in routeMenu"
      >
        <router-link :to="list.path ">{{list.cName}}</router-link>
      </li>
    </ul>

    <!--新建-->
    <div class="create-type">
      <el-dialog
        :visible.sync="createDialogVisible"
        append-to-body
        title="新建 ADD"
        width="904px"
      >
        <div class="create-type-inner">
          <p class="title">请选择终端类型：</p>
          <div class="type d-flex flex-wrap">
            <div
              :class="{on: item.on}"
              :key="index"
              @click="chooseType(index)"
              class="w210 mr40 mt25 icon"
              v-for="(item, index) in routeMenu"
            >
              <div class="h108 d-flex justify-center align-center bd-gray">
                <div class="el-wrap w80 h80 bsr text-center">
                  <span
                    :class="[item.iconName]"
                    class="iconfont fz44 terminal-color lh80"
                  ></span>
                </div>
              </div>
              <p class="h26 lh26 text-center create-name">{{item.cName}}</p>
            </div>
          </div>
          <div class="btn mt46 text-center">
            <el-button
              @click="toAuthorize"
              class="w80"
              type="primary"
            >确定</el-button>
            <el-button
              @click="cancelCreate"
              class="w80"
              type="info"
            >取消</el-button>
          </div>
        </div>
      </el-dialog>
    </div>

    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import API from './API'

export default {
  name: 'terminal',
  data () {
    return {
      routeMenu: [{
        cName: '微信小程序',
        path: 'wx',
        iconName: 'iconfont-wx',
        on: false
      },
      {
        cName: '百度小程序',
        path: 'bd',
        iconName: 'iconfont-bd',
        on: false
      },
      // {
      //   cName: "公众号",
      //   path: "gzh",
      //   iconName: 'iconfont-gzh',
      //   on: false
      // },
      {
        cName: 'pc端',
        path: 'pc',
        iconName: 'iconfont-pc',
        on: false
      }
        // {
        //   cName: "手机端",
        //   path: "mobile",
        //   iconName: 'iconfont-phone',
        //   on: false
        // }
      ],
      createDialogVisible: false,
      chooseTypeIndex: 0
    }
  },
  mounted () {
    console.log('this.menu', this.menu)
  },
  computed: {
    // 当前路由path
    currLink () {
      return this.$route.path
    }
  },
  methods: {
    // 创建终端类型弹窗
    createType () {
      this.createDialogVisible = true
    },
    // 取消创建终端类型弹窗
    cancelCreate () {
      this.createDialogVisible = false
    },
    // 选择终端类型后跳转自动授权页面
    toAuthorize () {
      let index = this.chooseTypeIndex
      let path = this.routeMenu[index].path
      if (path.indexOf('bd') > -1) {
        this.http4Get(API.getCid).then(res => {
          console.log('res', res)
          this.$router.push({
            path: '../toAuthorize/bd',
            query: {
              encodeCid: res.encode_cid
            }
          })
          //                this.$router.push("../toAuthorize");
        }).catch(error => {
          console.log('error', error)
        })
      } else if (path.indexOf('pc') > -1) {
        this.$router.push({
          path: '../toAuthorize/pc'
        })
      } else if (path.indexOf('wx') > -1) {
        this.http7Get(API.wxGetCid).then(res => {
          console.log('res', res)
          this.$router.push({
            path: '../toAuthorize/wx',
            query: {
              encodeCid: res.encode_cid
            }
          })
          //                this.$router.push("../toAuthorize");
        }).catch(error => {
          console.log('error', error)
        })
        this.$router.push({
          path: '../toAuthorize/wx'
        })
      } else {
        alert('kkkk')
      }
    },
    // 选择终端类型
    chooseType (index) {
      this.chooseTypeIndex = index
      console.log('this.chooseTypeIndex', this.chooseTypeIndex)
      this.routeMenu.forEach((item, i) => {
        if (index === i) {
          item.on = true
        } else {
          item.on = false
        }
      })
    }
  },
  components: {
    //            terminalView
  }
}
</script>

<style lang="scss">
@import "../../../styles/variables";

.terminal {
  .link-li {
    border: 1px solid $white;
    /*transform: translate3d(0, 1px, 0);*/
  }

  .active {
    border-top: 1px solid lighten($gray, 50%);
    border-right: 1px solid lighten($gray, 50%);
    border-bottom: 1px solid $white;
    border-left: 1px solid lighten($gray, 50%);
    transform: translate3d(0, 1px, 0);
    color: $primary;
    font-weight: bold;
  }
}

.create-type-inner {
  .create-name {
    background-color: $blue-wd4;
    color: $primary;
  }

  .icon {
    .el-wrap {
      display: inline-block;
      background-color: $blue-wd6;

      .terminal-color {
        color: $white;
      }
    }

    &:hover,
    &.on {
      box-shadow: 4px 4px 0 2px $blue-wd4;

      .create-name {
        background-color: $primary;
        color: $white;
      }

      .bd-gray {
        border: 1px solid $primary;
      }
    }
  }
}
</style>
