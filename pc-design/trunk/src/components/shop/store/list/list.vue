<style lang="scss">
.el-select .el-input {
  width: 130px;
}
.editShow {
  cursor: pointer;
  &:hover {
    .el-icon-edit-outline {
      display: inline-block;
    }
  }
  .el-icon-edit-outline {
    display: none;
  }
}
</style>

<template>
  <div>
    <h6 class="app-title">门店列表</h6>
    <div class="app-block-lv2">
      <div class="df">
        <div class="fx1">
          <router-link to="add">
            <el-button
              class="mr20"
              type="primary"
            >新建门店</el-button>
          </router-link>

          <el-button @click="setTags">打标签</el-button>
        </div>
        <address-choose
          class="w230 mr20"
          clearable
          v-bind.sync="locationData"
        ></address-choose>
        <div class="mr20">门店标签：
          <el-select
            @change="search()"
            placeholder="请选择"
            v-model="tagId"
          >
            <el-option value>全部</el-option>
            <el-option
              :key="item.id"
              :label="item.tag_name"
              :value="item.id"
              v-for="item in tagList"
            ></el-option>
          </el-select>
        </div>
        <div>
          <el-input
            @blur="search"
            class="input-with-select"
            placeholder="请输入关键字"
            suffix-icon="el-icon-search"
            v-model="inputValue"
          >
            <el-select
              placeholder="请选择"
              slot="prepend"
              v-model="searchType"
            >
              <el-option
                :value="0"
                label="门店名称"
              ></el-option>
              <el-option
                :value="1"
                label="门店具体地址"
              ></el-option>
              <el-option
                :value="2"
                label="门店编号"
              ></el-option>
            </el-select>
            <!-- <el-button
              icon="el-icon-search"
              slot="append"
            ></el-button>-->
          </el-input>
        </div>
      </div>
    </div>
    <div v-if="listItems.length > 0">
      <el-table
        :data="listItems"
        @selection-change="handleSelectionChange"
        ref="multipleTable"
        style="width: 100%"
        tooltip-effect="dark"
      >
        <el-table-column
          type="selection"
          width="55"
        ></el-table-column>
        <el-table-column
          label="门店编号"
          prop="code"
          width="120"
        ></el-table-column>
        <el-table-column
          label="门店名称"
          prop="name"
        ></el-table-column>
        <el-table-column label="门店地址">
          <template
            slot-scope="scope"
          >{{scope.row.province_name+scope.row.city_name+scope.row.area_name+scope.row.address}}</template>
        </el-table-column>
        <el-table-column
          label="门店标签"
          prop="tags"
        ></el-table-column>
        <el-table-column
          label="门店排序"
          prop="order_index"
          sortable
        >
          <template slot-scope="scope">
            <div class="editShow">
              {{scope.row.order_index}}
              <i
                @click="putOrder(scope.row)"
                class="el-icon-edit-outline text-primary-com"
              ></i>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="门店状态">
          <template slot-scope="scope">
            <el-switch
              @change="setStatus(scope.row.id)"
              active-color="#34cd96"
              inactive-color="#ddd"
              v-model="scope.row.open_status"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="300"
        >
          <template slot-scope="scope">
            <el-button
              @click="edit('edit',scope.row)"
              class="fz12"
              type="text"
            >基础信息</el-button>

            <el-button
              @click="edit('delivery',scope.row)"
              class="fz12"
              type="text"
            >配送设置</el-button>
            <el-button
              @click="edit('set',scope.row)"
              class="fz12"
              type="text"
              v-if="!scope.row.default_store"
            >门店设置</el-button>
            <el-button
              @click="edit('notice',scope.row)"
              class="fz12"
              type="text"
            >消息通知</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="pageSize"
        :total="total"
        @current-change="currentChange"
        background
        class="mt40"
        layout="prev, pager, next"
      ></el-pagination>
    </div>

    <div
      class="text-center pt100"
      v-if="listItems.length == 0"
    >
      <img src="./../../../../assets/nodata.png">
    </div>
    <!--打标签-->
    <el-dialog
      :visible.sync="dialogSetLabel"
      title="选择标签"
    >
      <div class="clearfix fz12">
        <div style="min-height: 100px">
          <el-checkbox-group
            :max="5"
            v-model="mytags"
          >
            <el-checkbox
              :key="tag.id"
              :label="tag.id"
              v-for="tag in tagList"
            >{{tag.tag_name}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div
        class="dialog-footer"
        slot="footer"
      >
        <el-button @click="handleClose()">取 消</el-button>
        <el-button
          @click="comfirmSetTags()"
          type="primary"
        >确 定</el-button>
      </div>
    </el-dialog>
    <!--打标签-->
  </div>
</template>
<script>
import API from './API'

function getList () {
  this.$httpGet(API.page, {
    query: {
      page_num: this.pageIndex,
      page_size: this.pageSize,
      tag_id: this.tagId, // 搜索
      name: this.name,
      code: this.code,
      address: this.address,
      province_code: this.locationData.province,
      city_code: this.locationData.city,
      area_code: this.locationData.area
    }
  }).then((res) => {
    this.listItems = res.collection
    this.total = res.meta.total
    for (let p in this.listItems) {
      let temp = []
      for (let i of this.listItems[p].store_relation_tags) {
        temp.push(i.store_tag_name)
      }
      this.listItems[p] = { ...this.listItems[p], ...{ 'tags': temp.join('/') } }
    }
  })
}
function getTags () {
  this.$httpGet(API.tagsAll).then((res) => {
    this.tagList = res.collection
  })
}
export default {

  data () {
    return {
      total: null,
      pageSize: 10,
      pageIndex: 1,
      tagList: [],
      value: '',
      input5: '',
      tagId: null,
      listItems: [],
      multipleSelection: [],
      dialogSetLabel: false,
      mytags: [],
      selectIds: [],
      searchType: 0,
      inputValue: '',
      code: '',
      address: '',
      name: '',
      locationData: {
        'province': '',
        'city': '',
        'area': '',
        'address': '',
        'lng': '',
        'lat': ''
      }
    }
  },
  watch: {
    locationData: {
      handler (newVal) {
        Reflect.apply(getList, this, [])
      },
      deep: true
    }
  },
  created () {
    Reflect.apply(getList, this, [])
    Reflect.apply(getTags, this, [])
  },
  methods: {
    search () {
      switch (this.searchType) {
        case 0:
          this.name = this.inputValue
          this.code = ''
          this.address = ''
          break
        case 1:
          this.name = ''
          this.code = ''
          this.address = this.inputValue
          break
        case 2:
          this.name = ''
          this.code = this.inputValue
          this.address = ''
          break
      }
      this.pageIndex = 1
      Reflect.apply(getList, this, [])
    },
    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    },
    putOrder (row) {
      this.$prompt('数字越小，排序越靠前', '排序', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // inputPattern: /^\d{n}$/,
        inputErrorMessage: '格式不正确',
        inputType: 'number',
        inputValue: row.order_index
      }).then(({ value }) => {
        this.$httpPut(API.orderIndex, {
          resource: {
            id: row.id
          },
          data: {
            order_index: value
          }
        }).then(() => {
          Reflect.apply(getList, this, [])
        })
      })
    },
    setStatus (id) {
      this.$httpPut(API.setStatus, {
        resource: {
          id: id
        }
      }).then(() => {
        Reflect.apply(getList, this, [])
      })
    },
    setTags () {
      this.selectIds = []
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选择至少选择一个门店!',
          type: 'warning'
        })
      } else {
        this.dialogSetLabel = true
        for (let p of this.multipleSelection) {
          this.selectIds.push(p.id)
        }
      }
    },
    comfirmSetTags () {
      this.$httpPut(API.setTags, {

        query: {
          ids: this.selectIds.join(',')
        },
        data: {
          tag_ids: this.mytags
        }
      }).then(() => {
        this.dialogSetLabel = false
        this.mytags = []
        this.selectIds = []
        Reflect.apply(getList, this, [])
      })
    },
    handleClose (done) {
      this.dialogSetLabel = false
      this.mytags = null
      this.selectIds = null
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    edit (type, item) {
      window.localStorage.setItem('storeName', item.name)
      this.$router.push({ name: `store.${type}`, params: { id: item.id } })
    }

  },

  components: {

  }

}

</script>
