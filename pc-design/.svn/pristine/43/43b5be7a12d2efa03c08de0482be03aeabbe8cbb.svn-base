<template>
  <div class="member">
    <div
      class="d-flex justify-between bg-gray-l64 pt20 pb20 mb30 pr20 pl20 align-center"
    >
      <el-button
        @click="goAdd"
        size="small"
        type="primary"
      >新建</el-button>
      <div>
        <span class="text-nowrap">电话：</span>
        <el-input
          @change="searchNumber"
          class="w200 mr20"
          placeholder="请输入手机号码"
          prefix-icon="el-icon-search"
          size="small"
          v-model="phone"
        ></el-input>
        <span class="text-nowrap">昵称：</span>
        <el-input
          @change="searchNickName"
          class="w200"
          placeholder="请输入昵称"
          prefix-icon="el-icon-search"
          size="small"
          v-model="nickName"
        ></el-input>
      </div>
    </div>
    <div v-if="adminInfo.length > 0">
      <el-table
        :data="adminInfo"
        stripe
      >
        <el-table-column
          header-align="center"
          label="管理员信息"
        >
          <template slot-scope="scope">
            <div class="d-flex align-center">
              <img
                :src="scope.row.avatar | filterImg"
                alt
                class="shrink-0 img-contain w70 h70 mr10 bg-img-admin"
                v-if="scope.row.avatar"
              >
              <img
                :src="defaultImg"
                alt
                class="shrink-0 img-contain w70 h70 mr10 bg-img-admin"
                v-if="!scope.row.avatar"
              >
              <div
                class="superMan"
                v-if="scope.row.grade === '超级管理员' "
              >
                <span>超管</span>
              </div>
              <div>
                <p class="text-primary">{{scope.row.nickname}}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          header-align="center"
          label="登录账号"
          prop="phone"
        ></el-table-column>
        <el-table-column
          align="center"
          header-align="center"
          label="权限"
          prop="grade"
        ></el-table-column>
        <el-table-column
          align="center"
          header-align="center"
          label="操作"
        >
          <template slot-scope="scope">
            <div class="d-flex justify-center">
              <el-tooltip
                class="item w20 h20 mr15 c-pointer"
                content="编辑"
                effect="light"
                placement="top"
              >
                <el-button
                  :disabled="scope.row.grade ==='超级管理员'"
                  @click="goAdd(scope.row)"
                  class="iconfont iconfont-edit1"
                  type="text"
                ></el-button>
              </el-tooltip>
              <el-tooltip
                class="item w20 h20 mr15 c-pointer"
                content="设为超管"
                effect="light"
                placement="top"
              >
                <el-button
                  :disabled="scope.row.grade ==='超级管理员'"
                  @click="setSuperMan(scope.row)"
                  class="iconfont iconfont-admin"
                  type="text"
                ></el-button>
              </el-tooltip>
              <el-tooltip
                class="item w20 h20 mr15 c-pointer"
                content="解除绑定"
                effect="light"
                placement="top"
              >
                <el-button
                  :disabled="scope.row.grade ==='超级管理员'"
                  @click="remove(scope.row)"
                  class="iconfont iconfont-close"
                  type="text"
                ></el-button>
              </el-tooltip>
              <el-tooltip
                class="item w20 h20 mr15 c-pointer"
                content="重置密码"
                effect="light"
                placement="top"
              >
                <el-button
                  :disabled="scope.row.grade ==='超级管理员'"
                  @click="resetCodeBtn(scope.row)"
                  class="iconfont iconfont-lock"
                  type="text"
                ></el-button>
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div class="page mt60">
        <pagination
          :meta="meta"
          :refresh-list="getAdminList"
        ></pagination>
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

    <!--解除绑定-->
    <div>
      <el-dialog
        :visible.sync="dialogRemove"
        append-to-body
        lock-scroll
        title="提示 TIPS"
        width="354px"
      >
        <span>确定要解除此管理员的绑定吗？</span>
        <span
          class="dialog-footer"
          slot="footer"
        >
          <el-button @click="dialogRemove = false">取 消</el-button>
          <el-button
            @click="saveRemove()"
            type="primary"
          >确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <!--设为超管-->
    <div>
      <el-dialog
        :visible.sync="dialogSuperMan"
        append-to-body
        lock-scroll
        title="提示 TIPS"
        width="354px"
      >
        <span>超级管理员只有一个名额，更改后需重新登录，确定要更改吗？</span>
        <span
          class="dialog-footer"
          slot="footer"
        >
          <el-button @click="dialogSuperMan = false">取 消</el-button>
          <el-button
            @click="saveSuperMan()"
            type="primary"
          >确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <!-- 重置密码 -->
    <div>
      <el-dialog
        :visible.sync="resetCode"
        append-to-body
        class="pl40 pr40"
        lock-scroll
        title="重置密码 RESET PASSWORD"
        width="630px"
      >
        <div class="inner center">
          <div class="alert-popup">
            <el-form
              :model="codeInfo"
              :rules="codeRules"
              label-width="90px"
              ref="ruleTestCode"
              size="small"
            >
              <el-form-item
                label="新密码:"
                prop="new_password"
              >
                <el-input
                  class="w270"
                  maxlength="20"
                  minlength="6"
                  placeholder="请输入新密码"
                  type="password"
                  v-model="codeInfo.new_password"
                ></el-input>
                <span class="text-gray-l20 fz12">（必须包含数字、字母，6-20个字符）</span>
              </el-form-item>
              <el-form-item
                label="确认密码:"
                prop="sureCode"
              >
                <el-input
                  class="w270"
                  maxlength="20"
                  minlength="6"
                  placeholder="请再次输入新密码"
                  type="password"
                  v-model="codeInfo.sureCode"
                ></el-input>
              </el-form-item>
              <el-form-item class="mt25">
                <el-button
                  @click="resetCode = false"
                  class="w80"
                  type="info"
                >取消</el-button>
                <el-button
                  @click="codeSave('ruleTestCode')"
                  class="w80"
                  type="primary"
                >确认</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import pagination from '../../common/pagination.vue'
import API from './API'
export default {
  data () {
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.codeInfo.new_password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      defaultImg: require('../assets/head-img1.png'),
      dialogSuperMan: false,
      dialogRemove: false,
      adminInfo: [],
      adminEditInfo: '',
      meta: {
        page_num: 1,
        page_size: 10,
        total: -1
      },
      nodataShow: '',
      phone: '',
      nickName: '',
      resetCode: false,
      codeInfo: {
        new_password: '',
        sureCode: ''
      },
      codeRules: {
        new_password: [{
          required: true,
          message: '请输入新密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 20,
          pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
          message: '格式错误，必须包含数字、字母，6-20个字符',
          trigger: 'blur'
        }
        ],
        sureCode: [{
          required: true,
          message: '请再次输入新密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 20,
          validator: validatePass3,
          message: '两次输入密码不一致',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  created () {
    this.getAdminList()
  },
  methods: {
    getAdminList () {
      this.adminInfo = []
      this.http({
        url: API.customer,
        params: {
          ...this.meta,
          phone: this.phone,
          name: this.nickName
        }
      }).then(res => {
        this.meta = res.meta
        res.collection.forEach(list => {
          this.adminInfo.push({
            nickname: list.user.nickname,
            avatar: list.user.avatar,
            phone: list.user.phone,
            id: list.id,
            grade: list.grade === 'SUPERMAN' ? '超级管理员' : '普通管理员'
          })
        })
        if (this.adminInfo.length > 0) {
          this.nodataShow = false
        } else {
          this.nodataShow = true
        }
      })
    },

    // 新建
    goAdd (data) {
      if (data.id) {
        this.$router.push('adminAdd/' + data.id)
      } else {
        this.$router.push('adminAdd/1')
      }
    },

    // 解除绑定
    remove (data) {
      this.adminEditInfo = data
      this.dialogRemove = true
    },

    // 设置为超管
    setSuperMan (data) {
      this.adminEditInfo = data
      this.dialogSuperMan = true
    },

    // 解除管理员
    saveRemove () {
      this.httpDelete(`${API.removeAdmin}${this.adminEditInfo.id}`).then((res) => {
        this.currentPage = 1
        this.getAdminList()
      })
    },

    // 保存超管
    saveSuperMan () {
      this.httpPut(`${API.setSuperMan}${this.adminEditInfo.id}`).then((res) => {
        this.$router.push('/account/login')
      })
    },

    // 电话搜索
    searchNumber (e) {
      this.phone = e
      this.meta.page_num = 1
      this.getAdminList()
    },

    // 昵称搜索
    searchNickName (e) {
      this.nickName = e
      this.meta.page_num = 1
      this.getAdminList()
    },

    // 重置密码
    resetCodeBtn (data) {
      this.resetCode = true
      this.adminEditInfo = data
    },
    codeSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPut(`${API.removeAdmin}${this.adminEditInfo.id}/reset-password`, this.codeInfo).then((res) => {
            this.resetCode = false
            this.codeInfo = {
              new_password: '',
              sureCode: ''
            }
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    }

  },
  components: {
    pagination
  }

}

</script>
<style lang="scss">
@import "../../../styles/variables";

.superMan {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #333;
  width: 70px;

  span {
    position: absolute;
    left: 9px;
    top: 9px;
    width: 30px;
    transform: rotate(-45deg);
    z-index: 2;
    color: $white;
  }

  &:after {
    content: "";
    position: absolute;
    left: 10px;
    top: 8px;
    width: 0;
    height: 0;
    border: 20px solid;
    border-color: $m-red1 transparent transparent $m-red1;
    z-index: 1;
  }
}
</style>
