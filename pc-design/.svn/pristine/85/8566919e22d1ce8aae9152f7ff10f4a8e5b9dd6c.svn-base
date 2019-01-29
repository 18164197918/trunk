<style lang="scss">
.edit-price {
  i {
    display: none;
  }

  &:hover {
    i {
      display: inline-block;
    }
  }
}
</style>

<template>
  <div>
    <h6 class="app-title">单品库列表</h6>
    <div class="app-block-lv2">
      <div class="df justify-between">
        <div>
          <el-button
            @click="goAdd"
            type="primary"
          >新增单品</el-button>
          <el-button @click="putClassify()">修改分类</el-button>
          <el-button @click="delGoods()">删除</el-button>
        </div>
        <div>
          <div class="dib mr20">
            <span class="mr5">单品分类 :</span>
            <el-cascader
              :options="classify"
              :props="{value:'id',label:'title',children:'childs'}"
              :show-all-levels="false"
              @change="changeClassify"
              v-model="classifyInfo"
            ></el-cascader>
          </div>
          <div class="dib">
            <span class="mr5">单品名称 :</span>
            <el-input
              @change="search"
              class="w200"
              placeholder="请输入标题"
              size="small"
              suffix-icon="el-icon-search"
              v-model="title"
            ></el-input>
          </div>
        </div>
      </div>
    </div>
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
        align="left"
        class-name="ml50"
        label="单品名称"
        width="300"
      >
        <template slot-scope="scope">
          <div class="df">
            <bg-img-box
              :src.sync="scope.row.cover_image"
              class="w55 h55 mr10"
            ></bg-img-box>
            <div class="dffdc justify-around">
              <p>{{scope.row.title}}</p>
              <p>{{scope.row.code}}</p>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="单品规格">
        <template slot-scope="scope">{{ scope.row.sku || '--' }}</template>
      </el-table-column>
      <el-table-column
        label="单品单位"
        prop="unit"
      ></el-table-column>
      <el-table-column
        label="单品分类"
        prop="category_title"
      ></el-table-column>
      <el-table-column label="单品成本">
        <template slot-scope="scope">
          <div class="edit-price">
            {{ scope.row.cost_price || '--' }}
            <i
              @click="editPrice(scope.row)"
              class="el-icon-edit cup"
            ></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span
            @click="edit(scope.row)"
            class="text-primary cup"
          >编辑</span>
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
      v-if="total!==0"
    ></el-pagination>
  </div>
</template>
<script>
import API from './API'

function getList () {
  this.$httpGet(API.singleGoodsList, {
    query: {
      page_num: this.pageIndex,
      page_size: this.pageSize,
      title: this.title,
      categoryId: this.categoryId
    }
  }).then((res) => {
    this.listItems = res.collection
    this.total = res.meta.total
  })
}

export default {
  data () {
    return {
      categoryId: '',
      title: '',
      listItems: [],
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      classify: [{ id: '', title: '全部', childs: [] }],
      classifyInfo: [],
      multipleSelection: []
    }
  },
  created () {
    Reflect.apply(getList, this, [])
    this.$httpGet(API.singleGoodsClassify).then((res) => {
      this.classify = this.classify.concat(res.collection)
      this.delCascaderEmptyChilds(this.classify, 'childs')
    })
  },
  methods: {
    // 新增单品
    goAdd () {
      this.$router.push('add')
    },

    changeClassify () {
      this.categoryId = this.classifyInfo[this.classifyInfo.length - 1]
      Reflect.apply(getList, this, [])
    },

    search () {
      Reflect.apply(getList, this, [])
    },

    // 编辑
    edit (item) {
      this.$router.push({ name: `singleGoods.edit`, params: { id: item.id } })
    },

    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    },

    // 删除单品
    delGoods () {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选择单品',
          type: 'warning'
        })
      } else {
        let singleIds = []
        this.multipleSelection.forEach(val => {
          singleIds.push(val.id)
        })
        this.$httpDelete(API.singleGoods, {
          data: { single_ids: singleIds }
        }).then(() => {
          this.multipleSelection = []
          Reflect.apply(getList, this, [])
        })
      }
    },

    // 编辑成本
    editPrice (item) {
      this.$prompt('单品成本', '修改单品成本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputType: 'number',
        inputValue: item.cost_price
      }).then(({ value }) => {
        this.$httpPut(API.orderIndex, {
          resource: {
            id: item.id
          },
          data: {
            cost_price: value
          }
        }).then(() => {
          Reflect.apply(getList, this, [])
        })
      })
    },

    // 修改分类
    putClassify () {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选择单品',
          type: 'warning'
        })
      } else {
        let singleIds = []
        this.multipleSelection.forEach(val => {
          singleIds.push(val.id)
        })
      }
    }
  }
}

</script>
