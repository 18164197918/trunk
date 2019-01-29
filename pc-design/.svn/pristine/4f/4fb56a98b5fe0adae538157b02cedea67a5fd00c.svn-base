<style lang="scss">
.checked {
  display: none;
}
.is-selected {
  border: 1px solid $primary;
  .checked {
    display: block;
    color: white;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
  }
}
.list-inner.single-goods .el-select .el-input {
  width: 110px;
}
</style>
<template>
  <el-dialog
    :visible.sync="p_open"
    title="选择单品"
    width="900px"
  >
    <div class="list-inner single-goods">
      <div class="d-flex justify-between">
        <div class="left">
          <span class="mr5">单品分类 :</span>
          <el-cascader
            :options="classify"
            :props="{value:'id',label:'title',children:'childs'}"
            :show-all-levels="false"
            @change="changeClassify"
            clearable
            v-model="classifyInfo"
          ></el-cascader>
        </div>
        <div class="right">
          <el-input
            @blur="search"
            class="input-with-select"
            placeholder="请输入关键字"
            v-model="inputValue"
          >
            <el-select
              placeholder="请选择"
              slot="prepend"
              v-model="inputType"
            >
              <el-option
                :value="0"
                label="单品名称"
              ></el-option>
              <el-option
                :value="1"
                label="单品条码"
              ></el-option>
            </el-select>
            <el-button
              @click="search"
              icon="el-icon-search"
              slot="append"
            ></el-button>
          </el-input>
        </div>
      </div>
      <div class="content df bg-white pt20 pl5 pr5 flex-wrap">
        <div
          :class="{'is-selected':isLicit(item) || item.isChecked}"
          :key="index"
          @click="select(index)"
          class="df w195 h80 bd-gray align-center p10 mb10 ml5 mr5 c-pointer bdr4"
          v-for="(item, index) in listItems"
        >
          <div
            :style="item.cover_image | filterImgObj"
            class="w50 h50 mr5 bg-cover bdr4"
          >
            <div class="checked w50 h50 bdr4">
              <i class="el-icon-check fz50"></i>
            </div>
          </div>

          <div class="h60 df flex-column justify-between">
            <p>{{item.title}}</p>
            <p>{{item.code}}</p>
          </div>
        </div>
      </div>
      <el-pagination
        :page-size="pageSize"
        :total="total"
        @current-change="currentChange"
        background
        class="mt40"
        layout="prev, pager, next"
      ></el-pagination>
    </div>
    <div class="btn df justify-end">
      <el-button
        @click="multipleSelected"
        type="primary"
      >确认</el-button>
      <el-button @click="p_open=false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import API from './API'
import _ from 'lodash'
function getList () {
  this.$httpGet(API.singleGoodsPaginator, {
    query: {
      page_num: this.pageIndex,
      page_size: this.pageSize,
      categoryId: this.categoryId,
      title: this.title,
      code: this.code
    }
  }).then(res => {
    this.listItems = res.collection
    this.total = res.meta.total
    for (let i in this.listItems) {
      this.$set(this.listItems[i], 'isChecked', false)
    }
  })
}

export default {
  name: 'single-goods-choose',
  props: {
    mode: {
      type: String, // multiple多个 single单个
      default: 'multiple'
    },
    open: {
      type: Boolean,
      default: false
    },
    data: {
      type: [Array, Object],
      default: null
    },
    selected: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      p_open: this.open,
      p_selected: this.selected,
      listItems: [],
      inputType: 0,
      inputValue: '',
      searchGroup: null,
      categoryId: null,
      total: null,
      pageSize: 16,
      pageIndex: 1,
      multipleChoose: [],
      classify: [],
      classifyInfo: []
    }
  },
  watch: {
    open (val) {
      this.p_open = val
      Reflect.apply(getList, this, [])
    },
    p_open (val) {
      this.$emit('update:open', val)
      // if (val === false && this.mode === 'multiple') {
      //   this.$refs.table.clearSelection()
      // }
    },
    selected (val) {
      this.p_selected = val
    }
  },
  created () {
    this.$httpGet(API.groupAll).then(res => {
      this.classify = res.collection
      this.delCascaderEmptyChilds(this.classify, 'childs')
    })
    // Reflect.apply(getList, this, [])
  },
  methods: {
    isLicit (obj) {
      let aa = _.findIndex(this.p_selected, { 'id': obj.id })
      if (aa >= 0) { return true } else {
        return false
      }
    },
    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    },
    search () {
      switch (this.inputType) {
        case 0:
          this.title = this.inputValue
          this.code = ''
          break
        case 1:
          this.title = ''
          this.code = this.inputValue
          break
      }
      this.pageIndex = 1
      Reflect.apply(getList, this, [])
    },
    select (index) {
      // if (!this.listItems[index].isChecked) {
      //   this.multipleChoose.push(this.listItems[index])
      // } else {
      //   this.multipleChoose.splice(_.findIndex(this.multipleChoose, ['id', this.listItems[index].id]), 1)
      // }
      if (!this.listItems[index].isChecked) {
        this.multipleChoose.push(this.listItems[index])
        this.listItems[index].isChecked = true
      }
    },
    singleSelected (item) {
      this.$emit('update:data', item)
      this.$emit('response', item)
      this.p_open = false
    },
    multipleSelected () {
      if (this.multipleChoose.length === 0) return

      this.$emit('update:data', this.multipleChoose)
      this.$emit('response', this.multipleChoose)
      this.p_open = false
    },

    changeClassify () {
      this.categoryId = this.classifyInfo[this.classifyInfo.length - 1]
      this.pageIndex = 1
      Reflect.apply(getList, this, [])
    }

  }
}
</script>
