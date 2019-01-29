<template>
  <div class="member">
    <div
      class="d-flex justify-end bg-gray-l64 pt20 pb20 mb30 pr20 align-center"
    >
      <div class="d-flex align-center justify-between">
        <span class="text-nowrap">来源：</span>
        <el-select
          @change="searchChannel"
          class="mr20"
          size="small"
          v-model="channel_type_id"
        >
          <el-option
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-for="item in origin"
          ></el-option>
        </el-select>
        <span class="text-nowrap">性别：</span>
        <el-select
          @change="searchGender"
          class="mr20"
          size="small"
          v-model="gender"
        >
          <el-option
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-for="item in sex"
          ></el-option>
        </el-select>
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
    <div v-if="memberList.length > 0">
      <el-table
        :data="memberList"
        stripe
      >
        <el-table-column
          label="会员信息"
          width="300px"
        >
          <template slot-scope="scope">
            <div
              class="d-flex align-center"
              style="min-width: 400px"
            >
              <img
                :src="scope.row.avatar | filterImg"
                alt
                class="shrink-0 img-contain w70 h70 mr10 bg-img-admin"
                style
                v-if="scope.row.avatar"
              >
              <img
                :src="defaultImg"
                alt
                class="shrink-0 img-contain w70 h70 mr10 bg-img-admin"
                style
                v-if="!scope.row.avatar"
              >
              <div>
                <p class="text-primary fz14">
                  <!-- MAN -->
                  <span
                    class="iconfont iconfont-nanshengmoren text-blue-m"
                    v-if="scope.row.gender === 'MAN'"
                  ></span>
                  <!-- WOMAN -->
                  <span
                    class="iconfont iconfont-nvshengxuanzhong text-pink-m"
                    v-if="scope.row.gender === 'WOMAN'"
                  ></span>
                  {{scope.row.nickname}}
                </p>
                <p class="d-flex flex-nowrap text-gray-l30 fz12 focusInput">
                  <em
                    class="dib text-ellipsis mr5"
                    v-if="!scope.row.inputRemark"
                  >
                    {{scope.row.remark}}
                    <el-tooltip
                      class="item w20 h20 mr15 c-pointer"
                      content="编辑备注"
                      effect="light"
                      placement="top"
                    >
                      <el-button
                        @click="getRemarkShow(scope.row)"
                        class="iconfont iconfont-edit1 ml5"
                        type="text"
                      ></el-button>
                    </el-tooltip>
                  </em>
                  <el-input
                    @blur="changeRemark(scope.row)"
                    @change="changeRemark(scope.row)"
                    class="w200"
                    maxlength="10"
                    placeholder="会员备注不超过10个字"
                    ref="remark"
                    v-if="scope.row.inputRemark"
                    v-model="scope.row.remark"
                  ></el-input>
                </p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="手机号"
          prop="phone"
        ></el-table-column>
        <el-table-column
          label="渠道来源"
          prop="channel"
        ></el-table-column>
        <el-table-column
          label="注册时间"
          prop="created_at"
        ></el-table-column>
      </el-table>

      <div class="page mt60">
        <pagination
          :meta="meta"
          :refresh-list="getMenberList"
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
  </div>
</template>

<script>
import pagination from '../../common/pagination.vue'
import API from './API'
export default {
  name: 'member',
  data () {
    return {
      defaultImg: require('../assets/head-img1.png'),
      origin: [{
        value: '',
        label: '全部'
      }],
      sex: [{
        value: '',
        label: '全部'
      },
      {
        value: 'MAN',
        label: '男'
      },
      {
        value: 'WOMAN',
        label: '女'
      }
      ],
      originSelected: '',
      sexSelected: '',
      memberList: [],
      meta: {
        page_num: 1,
        page_size: 10,
        total: -1
      },
      nodataShow: '',
      phone: '',
      nickName: '',
      channel_type_id: '',
      gender: ''

    }
  },
  created () {
    this.getOrigin()
    this.getMenberList()
  },
  methods: {

    getMenberList () {
      this.memberList = []
      this.http({
        url: API.memberList,
        params: {
          ...this.meta,
          phone: this.phone,
          name: this.nickName,
          channel_type_id: this.channel_type_id,
          gender: this.gender
        }
      }).then(res => {
        this.meta = res.meta
        res.collection.forEach(list => {
          this.memberList.push({
            id: list.id,
            gender: list.gender,
            nickname: list.nickname,
            phone: list.phone,
            avatar: list.avatar,
            created_at: list.created_at, // 注册时间
            channel: list.channel_type_title, // 渠道名称
            remark: list.remark || '会员信息备注', // 备注
            inputRemark: false,
            oldRemark: list.remark
          })
        })
        if (this.memberList.length > 0) {
          this.nodataShow = false
        } else {
          this.nodataShow = true
        }
      })
    },
    // 更改备注状态样式
    getRemarkShow (data) {
      data.inputRemark = true
      this.$nextTick(() => {
        this.$refs.remark.focus()
      })
      if (data.remark === '会员信息备注') {
        data.remark = ''
      }
    },
    // 获取来源
    getOrigin () {
      this.httpGet(API.getOrigin).then(({
        collection
      }) => {
        collection.forEach(list => {
          this.origin.push({
            value: list.id,
            label: list.title
          })
        })
      })
    },

    // 更改备注内容
    changeRemark (data, index) {
      if (data.remark === data.oldRemark) {
        data.inputRemark = false
      } else {
        this.httpPut(API.changeRemark, {
          id: data.id,
          remark: data.remark
        }).then(res => {
          data.oldRemark = data.remark
          data.inputRemark = false
        })
      }
    },

    // 电话搜索
    searchNumber (e) {
      this.meta.page_num = 1
      this.getMenberList()
    },

    // 昵称搜索
    searchNickName (e) {
      this.meta.page_num = 1
      this.getMenberList()
    },

    // 性别搜索
    searchGender (e) {
      this.meta.page_num = 1
      this.getMenberList()
    },

    // 来源搜索
    searchChannel (e) {
      this.meta.page_num = 1
      this.getMenberList()
    }
  },
  components: {
    pagination
  }
}

</script>

<style lang="scss">
@import "../../../styles/variables";
</style>
