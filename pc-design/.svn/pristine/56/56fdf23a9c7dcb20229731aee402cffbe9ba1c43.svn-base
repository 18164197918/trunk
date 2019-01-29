<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">

    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-database"></span>
      <div class="dot"></div>
    </div>

    <div class="base-set-box">
      <div class="tit">数据源</div>
      <div class="d-flex flex-wrap mb20">
        <label v-for="item in dataListOriginArr" class="w50p mb10">
          <input v-model="_static.dataOrigin" @change="modifyDataType" :value="item.value" type="radio" class="mr3">{{item.name}}
        </label>
        <label v-if="dataPage.page_type==='COLUMN_PAGE'" class="w50p mb10">
          <input v-model="_static.dataOrigin" :value="2" type="radio" class="mr3">绑定栏目模板
        </label>
        <label v-if="dataPage.page_type==='CONTENT_PAGE' && hasAlbum" class="w50p mb10">
          <input v-model="_static.dataOrigin" :value="3" type="radio" class="mr3">绑定内容模板
        </label>
      </div>

      <div>
        <sortList v-if="_static.dataOrigin===0" :options="{data: _static.dataList,cancel:'.iconfont-delete,.iconfont-copy', axis: 'y', placeholder: 'static-data-place-holder'}" class="list-static-data-box">
          <div v-for="(item, key) in _static.dataList" class="item">
            <i>第{{key + 1}}条</i>
            <em>
              <span v-if="_static.dataList.length > 1" @click="deleteOne(key)" title="删除" class="iconfont iconfont-delete"></span>
              <span v-if="_static.dataList.length < 12" @click="copyOne(key)" title="复制" class="iconfont iconfont-copy"></span>
            </em>
          </div>
        </sortList>
        <div v-else class="list-dynamic-data-box">
          <div v-if="_static.dataOrigin===1">
            <dl class="el-block mb20">
              <dt class="w80">选择栏目源</dt>
              <dd>
                <el-select :popper-append-to-body="false" v-model="_static.categoryId" placeholder="请选择" size="mini">

                  <el-option
                    v-for="item in dataCache.categoryListEqual"
                    :key="item.index"
                    :label="item.title"
                    :disabled="item.hasChildren || item.archive_num===0"
                    :value="item.index">
                    <span :class="item.level">{{ item.title }}</span>
                  </el-option>
                </el-select>
              </dd>
            </dl>
            <dl class="el-block mb20">
              <dt class="w80">显示数据量</dt>
              <dd>
                <select v-model="_static.showDataNum">
                  <option v-for="item in dataNumList" :value="item">{{item}}</option>
                </select>
              </dd>
            </dl>
          </div>
          <!--<dl v-if="_static.dataOrigin === 2" class="el-block mb20">
              <dt class="w80">选择自定义</dt>
              <dd>
                  <select v-model="_static.dataId">
                      <option :value="undefined">空</option>
                      <option v-for="item in siteDatabase" :value="item.id">{{item.title}}</option>
                  </select>
              </dd>
          </dl>

          <div v-if="_static.dataOrigin===2">
              <span @click="dataCache.isShowDatabase=true" class="text-primary c-pointer">
                  <i class="iconfont iconfont-edit1 fz12 mr5"></i>去编辑数据项
              </span>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import dataSite from '../common/data-site'
  import dataPage from '../common/data-page'
  import dataCache from '../common/data-cache'
  import sortList from '../../common/sortList.vue'
  import mixinBseModule from '../common/mixin-base-module'
  import { ALBUM_PREFIX, BASE_MODULE_DATA_MAP } from '../common/constant'

  export default {
    name      : 'base-module-data',
    mixins    : [mixinBseModule],
    data() {
      return {
        dataPage         : dataPage.get(),
        dataCache,
        dataNumList      : [2, 3, 4, 5, 6, 8, 9, 10],
        dataListOriginArr: [
          {name: '静态数据', value: 0},
          {name: '内容数据', value: 1},
          //{name: '自定义数据', value: 2},
        ],
        //siteDatabase     : dataSite.get('database'),
        typeMap          : BASE_MODULE_DATA_MAP.filter(item => item.d_value !== undefined),
      }
    },
    computed  : {
      _static () {
        return this.info.static
      },
      hasAlbum() {
        return !!this.dataCache.contentList[ALBUM_PREFIX + this.$route.query.pid]
      },
    },
    methods   : {
      copyOne(key) {
        let dataList = this._static.dataList
        dataList.splice(key, 0, $.extend(true, {}, dataList[key]))
      },
      deleteOne(key) {
        this._static.dataList.splice(key, 1)
      },
      modifyDataType() {
        if (this._static.dataOrigin === 0) {
          this.children.forEach(item => {
            let _static = item.info.static
            BASE_MODULE_DATA_MAP.forEach(item2 => {
              if (item2.d_value && item2.d_value in _static) {
                _static[item2.d_value] = item2.value + '__' + item.info.className
              }
            })
          })
        }
      },
    },
    components: {
      sortList,
    },
  }
</script>

<style lang="scss">
  @import "../../../styles/variables";

  .list-static-data-box {
    .item {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 8px 10px 8px 20px;
      background-color: lighten($primary, 23%);
      border-radius: 4px;
      color: darken($primary, 5%);
      cursor: move;
      &.move-static-data-item {
        pointer-events: none;
        position: absolute !important;
        z-index: 1000;
      }
      &:before {
        position: absolute;
        left: 8px;
        top: 15px;
        width: 2px;
        height: 2px;
        background-color: darken($primary, 15%);
        box-shadow: 3px 0 0 darken($primary, 15%),
        0 3px 0 darken($primary, 15%),
        3px 3px 0 darken($primary, 15%),
        0 6px 0 darken($primary, 15%),
        3px 6px 0 darken($primary, 15%),
        0 9px 0 darken($primary, 15%),
        3px 9px 0 darken($primary, 15%);
        content: "";
      }

      i {
        flex-grow: 1;
        pointer-events: none;
      }

      &:hover {
        em {
          opacity: 1;
        }
      }

      em {
        opacity: 0;

        span {
          margin-left: 5px;
          cursor: pointer;
        }
      }
    }
  }

  /*  拖拽静态数据虚拟框 */
  .static-data-place-holder {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    background-color: #cccccc;
    border-radius: 4px;
  }

</style>
