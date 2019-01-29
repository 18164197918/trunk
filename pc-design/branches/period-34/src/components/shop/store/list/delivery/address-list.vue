<style lang="scss" scope>
.isOn {
  background: $primary;
  color: $white;
  border: 1px solid $primary;
}
</style>

<template>
  <div>
    <div class="app-block-lv2">
      <div class="dfc">
        <el-button
          :disabled="tableData.length===20"
          @click="add()"
          type="primary"
        >新增地址</el-button>
        <p class="fz12 ml20">
          <i class="el-icon-warning text-danger mr5"></i>
          已添加{{tableData.length}}个，最多可创建20个地址
        </p>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        class-name="pl30"
        label="联系人"
        prop="receiver"
      ></el-table-column>
      <el-table-column
        label="联系电话"
        prop="phone"
      ></el-table-column>
      <el-table-column
        label="地址"
        prop="addr"
      ></el-table-column>
      <el-table-column
        class-name="pl30"
        label="邮编"
        prop="postal_code"
      ></el-table-column>
      <el-table-column label="地址类型">
        <template slot-scope="scope">
          <p class="mb5">
            <span
              :class="scope.row.deliver_default ? 'isOn' : '' "
              @click="defaultDeliver(scope.row)"
              class="cup w70 h24 lh24 text-center db bd-gray fz12 bdr3"
            >发货地址</span>
          </p>
          <p>
            <span
              :class="scope.row.return_default ? 'isOn' : '' "
              @click="defaultReturn(scope.row)"
              class="cup w70 h24 lh24 text-center db bd-gray fz12 bdr3"
            >退货地址</span>
          </p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i
            @click="edit(scope.row)"
            class="text-primary cup mr10"
          >编辑</i>
          <i
            @click="del(scope.row)"
            class="text-primary cup"
          >删除</i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

import API from '../API'

function getList () {
  this.$httpGet(API.plazaWarehouse, {
    resource: { id: this.$route.params.id },
    query: {
      page_size: 20
    }
  }).then((res) => {
    this.tableData = res.collection
    for (let obj of this.tableData) {
      this.$set(obj, 'addr', `${obj.province_name}${obj.city_name}${obj.area_name}${obj.address}`)
    }
  })
}

export default {
  name: 'addressList',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    storeId: {
      type: String,
      default: ''
    }

  },
  data () {
    return {
      title: '地址库',
      tableData: [],
      p_show: this.show,
      p_id: this.storeId
    }
  },
  watch: {
    show (val) {
      this.p_show = val
    },
    p_show (val) {
      this.$emit('update:show', val)
    }
  },
  created () {
    Reflect.apply(getList, this, [])
  },
  methods: {
    add () {
      this.$emit('update:storeId', '')
      this.p_show = false
    },
    edit (item) {
      this.p_id = item.id
      this.$emit('update:show', false)
      this.$emit('update:storeId', item.id)
    },

    del (item) {
      this.$httpDelete(API.warehouse, {
        resource: {
          id: item.id
        }
      }).then((res) => {
        Reflect.apply(getList, this, [])
      })
    },

    // 设置默认发货地址
    defaultDeliver (item) {
      this.$httpPut(API.defaultDeliver, {
        resource: {
          id: item.id
        }
      }).then(() => { Reflect.apply(getList, this, []) })
    },

    // 设置默认退货地址
    defaultReturn (item) {
      this.$httpPut(API.defaultReturn, {
        resource: {
          id: item.id
        }
      }).then(() => { Reflect.apply(getList, this, []) })
    }
  }
}
</script>
