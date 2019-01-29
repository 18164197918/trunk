<template>
  <div>
    <div class="d-flex align-center justify-between mb20">
      <span class="text-nowrap">来源：</span>
      <el-select
        class="mr10"
        size="small"
        v-model="originSelected"
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
        class="mr10"
        size="small"
        v-model="sexSelected"
      >
        <el-option
          :key="item.value"
          :label="item.label"
          :value="item.value"
          v-for="item in sex"
        ></el-option>
      </el-select>
      <el-input
        class="w200 mr5"
        placeholder="请输入手机号码"
        prefix-icon="el-icon-search"
        size="small"
        v-model="phoneNumber"
      ></el-input>
      <el-input
        class="w200"
        placeholder="请输入昵称"
        prefix-icon="el-icon-search"
        size="small"
        v-model="nickName"
      ></el-input>
    </div>

    <el-table
      :data="tableData"
      stripe
    >
      <el-table-column label="会员信息">
        <template slot-scope="scope">
          <div class="d-flex">
            <img
              :src="scope.row.path | filterImg"
              alt
              class="img-contain w70 h70 mr10"
            >
            <div>
              <p class="text-primary">{{scope.row.name}}</p>
              <p class="text-gray-l30 fz12 text-ellipsis w120">{{scope.row.tip}}</p>
              <span class="iconfont iconfont-edit1 text-gray-l30 c-pointer"></span>
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
        prop="time"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'member',
  data () {
    return {
      origin: [
        {
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
      sex: [
        {
          value: 'all',
          label: '全部'
        },
        {
          value: 'man',
          label: '男'
        },
        {
          value: 'women',
          label: '女'
        }
      ],
      tableData: [
        {
          name: '楼兰雨阁',
          path: 'usr/g5O46p2bRB/5bc45046360d8.jpg',
          sex: 1,
          tip: '这里是会员的备注信息这里是会员的备注信息这里是会员的备注信息',
          phone: '13554567890',
          channel: '微信',
          time: '2018-10-10 10:00'

        },
        {
          name: '楼兰雨阁',
          path: 'usr/g5O46p2bRB/5bc450646da69.png',
          sex: 1,
          tip: '这里是会员的备注信息',
          phone: '13554567890',
          channel: '微信',
          time: '2018-10-10 10:00'

        }
      ],
      originSelected: '',
      sexSelected: '',
      selectedOrigin: [],
      selectedSex: [],
      phoneNumber: '',
      nickName: '',
      currentPage: 4
    }
  },
  mounted () {
    // this.httpPut({})
    // this.httpPut({})
  },
  methods: {
    handleOrigin (value) {
      console.log(value)
    },
    handleSex (value) {
      console.log(value)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
