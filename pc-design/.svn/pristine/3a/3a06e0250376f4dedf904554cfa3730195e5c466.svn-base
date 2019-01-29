<style lang="scss">
.m-goods-classify {
  .sort-list-ul {
    margin-bottom: 0;
  }
  .add {
    position: relative;
    height: 700px;
    border-radius: 5px;
    .classify-content {
      max-height: 650px;
      .showBtn {
        border: 1px solid transparent;
        width: 100%;
        word-break: break-all;
        padding: 5px 10px;
        position: relative;
        &.on {
          background: $grayLight;
        }
        em {
          display: none;
          position: absolute;
          right: 5px;
          top: 5px;
          z-index: 666;
        }
        &:hover {
          em {
            display: inline-block;
          }
        }
      }
      .editTitle {
        position: relative;
        .closeEditTitle {
          position: absolute;
          right: 5px;
          top: 0;
        }
      }
    }
    .btn {
      position: absolute;
      left: 10%;
      bottom: 10px;
    }
  }
}
</style>

<template>
  <div class="m-goods-classify">
    <h6 class="app-title">单品库分类
      <el-tooltip
        class="item"
        content="1、单品库分类为方便商家管理商品而建立,商家根据情况创建最多五级分类。
                 2、分类与商品库中的分类不同，分组用于消费者在客户端的展示和筛选。"
        effect="light"
        placement="right"
      >
        <i class="el-icon-question"></i>
      </el-tooltip>
    </h6>
    <p class="text-gray">
      <i class="text-danger el-icon-warning mr5"></i>同级分类可拖拽调整排序
    </p>
    <div class="row">
      <!--  -->
      <div
        :key="indexOut"
        class="col-md-2 add mt20 bd-gray mr10"
        v-for="(item,indexOut) in allClassifyData"
      >
        <div class="classify-content">
          <sortList
            :options="{data:item.data, axis:'y', stop: levelStop, indexOut: indexOut}"
          >
            <div
              :key="indexIn"
              class="w100p"
              v-for="(list,indexIn) in item.data"
            >
              <div
                :class="list.active ? 'on' : ''"
                @click.stop="showNextLevel(list)"
                class="lh25 dib showBtn"
                v-if="!list.showInput"
              >
                {{list.title}}
                <em class="lh25 dib">
                  <i
                    @click.stop="editClassify(list,$event)"
                    class="el-input__icon el-icon-edit lh25 dib cup"
                  ></i>
                  <i
                    @click.stop="reomveClassify(list,indexIn,$event)"
                    class="el-input__icon el-icon-delete lh25 dib cup"
                  ></i>
                </em>
              </div>

              <div
                @click="clearTitle(list)"
                class="editTitle"
                v-if="list.showInput"
              >
                <el-input
                  @blur="addClassify(list,indexIn)"
                  placeholder="请输入分类名称"
                  ref="oneClassify"
                  size="middle"
                  v-model="list.title"
                ></el-input>
                <i
                  @click.stop="clearClassify(list)"
                  @mousedown.prevent
                  class="el-input__icon el-icon-close lh25 dib closeEditTitle cup"
                  slot="suffix"
                ></i>
              </div>
            </div>
          </sortList>
        </div>
        <el-input
          @blur="addClassify(item,indexOut)"
          placeholder="请输入分类名称"
          ref="classifyRemark"
          size="middle"
          v-if="item.showInput"
          v-model="classifyInfo.title"
        >
          <i
            @click.stop="clearClassify"
            @mousedown.prevent
            class="el-input__icon el-icon-close cup dib lh25 text-gray"
            slot="suffix"
          ></i>
        </el-input>
        <el-button
          @click="showAddClassify('classifyRemark',item,indexOut)"
          class="btn w80p"
          type="primary"
        >新增分类</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import sortList from '../../../common/sortList.vue'
export default {
  data () {
    return {
      allClassifyData: [],
      classifyInfo: {
        title: '',
        parent_id: 0,
        order_index: 1
      },
      obj: {
        startIndex: null,
        stopIndex: null
      }
    }
  },
  created () {
    this.getTopClassify()
  },
  methods: {
    levelStop (e, u, i) {
      let indexOut = i.indexOut
      let indexIn = u.stopIndex
      let list = this.allClassifyData[indexOut].data[indexIn]
      let Indexlist = this.allClassifyData[indexOut].data
      if (u.startIndex === u.stopIndex) {
        this.showNextLevel(list, indexOut)
      } else {
        let indexData = []
        Indexlist.forEach((item, i) => {
          indexData.push({
            category_id: item.id,
            order_index: i + 1
          })
        })
        let dataInfo = { data: indexData }
        this.$httpPut('product/single-goods/classify/batch-update-sort', { data: dataInfo }).then(res => {
          console.log(res)
        })
      }
    },
    // 获取一级分类
    getTopClassify () {
      this.$httpGet('product/single-goods/classify/top').then(({ collection }) => {
        collection.forEach(temp => {
          temp.oldTitle = temp.title
          temp.showInput = false
          temp.active = false
        })
        this.allClassifyData.push({ data: collection, showInput: false, parent_id: 0 })
      })
    },

    // 展示新建输入框
    showAddClassify (refName, item, index) {
      item.showInput = true
      if (this.allClassifyData.length <= 1) {
        this.classifyInfo.parent_id = 0
      } else {
        this.classifyInfo.parent_id = this.allClassifyData[index - 1].data.parent_id
      }
      this.$nextTick(() => {
        this.$refs[refName][0].focus()
        this.classifyInfo.title = ''
      })
    },

    // 新建及修改类别
    addClassify (list, index) {
      if (list.id) {
        if (list.title === '' || list.title === list.oldTitle) {
          list.title = list.oldTitle
        } else {
          this.$httpPut(`product/single-goods/classify/${list.id}`, { data: list }).then(({ data }) => {
            list.title = data.title
            list.oldTitle = data.title
          })
        }
      } else {
        if (this.classifyInfo.title !== '') {
          this.classifyInfo.parent_id = list.parent_id
          this.$httpPost('product/single-goods/classify', {
            data: this.classifyInfo
          }).then(({ data }) => {
            data.odlTitle = data.title
            data.showInput = false
            this.allClassifyData[index].data.push(data)
          })
        }
      }
      list.showInput = false
    },

    // 清除类别
    clearClassify (list) {
      if (list.id) {
        list.title = ''
      } else {
        this.classifyInfo.title = ''
      }
    },

    // 单级编辑
    editClassify (list, $event) {
      $event.stopPropagation()
      console.log(list)
      list.showInput = true
      this.$nextTick(() => {
        this.$refs.oneClassify[0].focus()
      })
    },

    // 单级删除
    reomveClassify (list, index, $event) {
      $event.stopPropagation()
      let oldIndex = index
      this.$httpDelete(`product/single-goods/classify/${list.id}`).then(res => {
        let level = list.level - 1
        if (level > 0) {
          this.allClassifyData = this.allClassifyData.slice(0, level)
        }
        this.allClassifyData[level].data.splice(oldIndex, 1)
      })
    },

    // 显示下一级
    showNextLevel (list, index) {
      if (this.allClassifyData[index].data.length > 0) {
        this.allClassifyData[index].data.forEach(list => {
          list.active = false
        })
        list.active = true
      }
      if (list.level <= 4) {
        if (list.level + 1 <= this.allClassifyData.length) {
          if (list.level + 1 < this.allClassifyData.length) {
            this.allClassifyData = this.allClassifyData.slice(0, list.level)
          }
          if (list.is_child === false) {
            this.$set(this.allClassifyData, list.level, {
              data: [],
              showInput: false,
              parent_id: list.id
            })
          } else {
            this.$httpGet(`product/single-goods/classify/child/${list.id}`).then(({ collection }) => {
              collection.forEach(temp => {
                temp.oldTitle = temp.title
                temp.showInput = false
                temp.active = false
              })

              this.$set(this.allClassifyData, list.level, {
                data: collection,
                showInput: false,
                parent_id: list.id
              })
            })
          }
        } else if (list.level - 0 >= this.allClassifyData.length) {
          if (list.is_child === false) {
            this.allClassifyData.push({ data: [], showInput: false, parent_id: list.id })
          } else {
            this.$httpGet(`product/single-goods/classify/child/${list.id}`).then(({ collection }) => {
              collection.forEach(temp => {
                temp.oldTitle = temp.title
                temp.showInput = false
                temp.active = false
              })
              this.allClassifyData.push({
                data: collection,
                showInput: false,
                parent_id: list.id
              })
            })
          }
        }
      }
    }

  },
  components: {
    sortList
  }
}

</script>
