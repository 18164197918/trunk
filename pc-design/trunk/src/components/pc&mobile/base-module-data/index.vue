<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">
    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-database"></span>
      <div class="dot"></div>
    </div>

    <div class="base-set-box">
      <div class="tit">数据</div>
      <dl v-if="aboutData.mode==='children-list' || aboutData.isRoot" class="mb20">
        <label v-for="item in aboutData.fromOriginTab" class="mr10">
          <input v-model="hasDynamicValue" :value="item.value" type="radio" class="mr3">{{item.name}}
        </label>
      </dl>

      <div v-if="aboutData.mode==='children-list' && !aboutData.isDefault || aboutData.isRoot && !aboutData.isDefault" class="el-block mb20">
        <div v-if="aboutData.isStatic">
          <div v-for="item in BASE_MODULE_DATA_MAP" v-if="_static[item.d_value]!==undefined">
            <!--单行按钮-->
            <dl v-if="item.value==='text'" class="el-block mb10">
              <dt @click="toggleTextType('textarea')" class="w60 c-pointer text-primary">{{item.name}}</dt>
              <dd>
                <input type="text" v-model="aboutData.data[_static.d__text]">
              </dd>
            </dl>
            <!--多行按钮-->
            <div v-if="item.value==='textarea'">
              <dl class="el-block mb10 align-start">
                <dt @click="toggleTextType('text')" class="w60 c-pointer text-primary pt4">{{item.name}}</dt>
                <dd>
                  <textarea v-model="aboutData.data[_static.d__textarea]" class="h120"></textarea>
                </dd>
              </dl>
              <dl class="el-block mb10">
                <dt class="w60">显示行数</dt>
                <dd>
                  <select v-model="_static.rows">
                    <option v-for="row in [2,3,4,5,6,7,8]" :value="row">{{row}}</option>
                  </select>
                </dd>
              </dl>
            </div>
            <!--图片-->
            <dl v-if="item.value==='src'" class="el-block mb10">
              <dt class="w60">{{item.name}}</dt>
              <dd>
                <bg-img-box :path="[aboutData.data, _static.d__src]" :show-close="false"></bg-img-box>
              </dd>
            </dl>
            <!--链接-->
            <dl v-if="item.value==='link'" class="el-block mb10">
              <dt class="w60">{{item.name}}111</dt>
              <dd>
                <!--<input type="text" v-model="aboutData.data[_static.d__link]">-->
                <data-link-type v-model="_static.link"></data-link-type>
              </dd>
            </dl>
            <!--图标-->
            <div v-if="item.value==='icon'">
              <dl class="el-block mb10">
                <dt class="w60">{{item.name}}</dt>
                <dd>
                  <div v-if="aboutData.data[_static.d__icon]">
                    <span class="selected-static-icon icl mr10" :class="[aboutData.data[_static.d__icon]]"></span>
                    <span class="text-primary" @click="aboutData.data[_static.d__icon]=''">删除</span>
                  </div>
                  <div v-else class="text-gray-l30">选择一个图标试试</div>
                </dd>
              </dl>
              <div>
                <div :class="isShowAllIcon ? '' : 'h50'" class="icon-list mb10">
                  <span v-for="ico in iconFontMap" @click="setIcon(aboutData.data, _static.d__icon, ico)" :class="[ico]" class="icl"></span>
                </div>
                <button @click="adjustBaseSetBoxPosition();isShowAllIcon=!isShowAllIcon;" class="icon-toggle-btn">{{isShowAllIcon ? '收起' : '展开'}}</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="aboutData.isDynamic || aboutData.isRoot">
          <dl v-for="item2 in aboutData.baseModuleDynamicList" class="el-block mb10">
            <dt class="w80 mr5">{{item2.name}}</dt>
            <dd>
              <select v-model="_static[item2.d_value]">
                <option v-for="item3 in aboutData.filterMap" :value="item3.name">
                  {{item3.label}}
                </option>
              </select>
            </dd>
          </dl>
        </div>
      </div>
      <div v-else>
        <div v-for="item in BASE_MODULE_DATA_MAP" v-if="_static[item.value]!==undefined">
          <!--单行按钮-->
          <dl v-if="item.value==='text'" class="el-block mb10">
            <dt @click="toggleTextType('textarea')" class="w60 c-pointer text-primary">{{item.name}}</dt>
            <dd>
              <input type="text" v-model="_static.text" :disabled="aboutData.mode==='children-menu' || aboutData.mode==='children-page'">
            </dd>
          </dl>
          <!--多行按钮-->
          <div v-if="item.value==='textarea'">
            <dl class="el-block mb10 align-start">
              <dt @click="toggleTextType('text')" class="w60 c-pointer text-primary pt4">{{item.name}}</dt>
              <dd>
                <textarea v-model="_static.textarea" :disabled="aboutData.mode==='children-menu' || aboutData.mode==='children-page'" class="h120"></textarea>
              </dd>
            </dl>
            <dl class="el-block mb10">
              <dt class="w60">显示行数</dt>
              <dd>
                <select v-model="_static.rows">
                  <option v-for="row in [2,3,4,5,6,7,8]" :value="row">{{row}}</option>
                </select>
              </dd>
            </dl>
          </div>
          <!--图片-->
          <dl v-if="item.value==='src'" class="el-block mb10">
            <dt class="w60">{{item.name}}</dt>
            <dd>
              <bg-img-box :path="[_static, 'src']" :show-close="false"></bg-img-box>
            </dd>
          </dl>
          <!--链接-->
          <dl v-if="item.value==='link' && aboutData.mode!=='children-menu' && aboutData.mode!=='children-page'" class="el-block mb10">
            <dt class="w60">{{item.name}}</dt>
            <dd>
              <data-link-type v-model="_static.link"></data-link-type>
            </dd>
          </dl>
          <!--图标-->
          <dl v-if="item.value==='icon'" class="el-block mb10">
            <dt class="w60">{{item.name}}</dt>
            <dd>
              <div v-if="_static.icon">
                <span class="selected-static-icon icl mr10" :class="[_static.icon]"></span>
                <span class="text-primary" @click="_static.icon=''">删除</span>
              </div>
              <div v-else class="text-gray-l30">选择一个图标试试</div>
            </dd>
          </dl>
        </div>
        <div v-if="_static.icon!==undefined">
          <div :class="isShowAllIcon ? '' : 'h50'" class="icon-list mb10">
            <span v-for="ico in iconFontMap" @click="_static.icon=ico" :class="[ico]" class="icl"></span>
          </div>
          <button @click="adjustBaseSetBoxPosition();isShowAllIcon=!isShowAllIcon;" class="icon-toggle-btn">{{isShowAllIcon ? '收起' : '展开'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import iconFontMap from './iconfontMap.js'
  import dataSite from '../common/data-site'
  import dataPage from '../common/data-page'
  import dataCache from '../common/data-cache'
  import dataLinkType from './data-link-type.vue'
  import mixinBseModule from '../common/mixin-base-module'
  import { ALBUM_PREFIX, BASE_MODULE_DATA_MAP } from '../common/constant'

  export default {
    name    : 'base-module-data',
    mixins  : [mixinBseModule],
    data() {
      return {
        dataCache,
        dataPage              : dataPage.get(),
        iconFontMap,
        isShowAllIcon         : false,
        //siteDatabase          : dataSite.get('database'),
        BASE_MODULE_DATA_MAP,
        D_BASE_MODULE_DATA_MAP: BASE_MODULE_DATA_MAP.filter(item => item.d_hide !== true),
        fromOriginTab         : [
          {name: '不绑定', value: false, isStatic: true, isDynamic: true, isRoot: true},
          {name: '绑定静态项', value: true, isStatic: true,},
          {name: '绑定动态项', value: true, isDynamic: true},
          {name: '绑定模板', value: true, isRoot: true},
        ],
      }
    },
    computed: {
      _static () {
        return this.first.info.static
      },
      hasDynamicValue: {
        get() {
          return !!this._static[this.aboutData.baseModuleDynamicList[0].d_value]
        },
        set(val) {
          let d    = this.aboutData,
              temp = d.baseModuleDynamicList[0].d_value

          if (val) {
            if (d.isRoot || d.isDynamic) {
              this._static[temp] = d.filterMap[0].name
            }
            else if (d.isStatic) {
              let match = temp.match(/d__([\w]+)/)
              if (match) {
                this._static[temp] = match[1] + '__' + this.first.info.className
              }
              else {
                throw new Error('列表项数据不匹配')
              }
            }
          }
          else {
            this._static[temp] = ''
          }
        },
      },
      aboutData() {
        /**
         * mode                                         模块展示模式
         * data                                         数据列表
         * map                                          动态数据映射
         * filterMap                                    过滤出map中可用数据类型
         * fromOriginTab                                数据源选项卡
         * baseModuleDynamicList                        static中含有的动态数据属性列表
         * hasDynamicValue                              static中的动态数据项有值[不含link]
         * isDefault / isStatic / isDynamic /isRoot     父级引用的数据类型[默认数据/静态数据/动态数据/模板数据]
         */

        let first     = this.first,
            filterMap = [],
            map, temp,
            obj       = {mode: first.mode}


        //针对基础模块直接依附于容器中，可以拿到内容模板中的数据
        if (first.mode.indexOf('children-') === -1 && this.dataPage.page_type === 'CONTENT_PAGE') {
          obj.isRoot = true
          obj.map    = map = dataCache.getContentDetail({id: this.$route.query.pid}).map
          obj.fromOriginTab         = this.fromOriginTab.filter(item => item.isRoot)
          //过滤出可用动态数据类型
          obj.baseModuleDynamicList = this.D_BASE_MODULE_DATA_MAP.filter(item => this._static[item.d_value] !== undefined)
          //如果 d_value 为空，则为静态数据
          !this._static[obj.baseModuleDynamicList[0].d_value] && (obj.isDefault = true)
          temp = obj.baseModuleDynamicList[0].value

          for (let i in map) {
            temp === map[i].type.name && filterMap.push(map[i])
          }
          obj.filterMap = filterMap

          return obj
        }
        else if (first.mode === 'children-list') {
          let parent_static = first.parents[0].info.static,
              dataOrigin    = parent_static.dataOrigin

          //过滤出可用动态数据类型
          obj.baseModuleDynamicList = this.D_BASE_MODULE_DATA_MAP.filter(item => this._static[item.d_value] !== undefined)
          //如果 d_value 为空，则为静态数据
          !this._static[obj.baseModuleDynamicList[0].d_value] && (obj.isDefault = true)

          //如果是静态数据
          if (dataOrigin !== 3 && (dataOrigin === 0 || !parent_static.categoryId)) {
            obj.fromOriginTab = this.fromOriginTab.filter(item => item.isStatic)
            obj.data          = parent_static.dataList[first.indexKey]
            obj.isStatic      = true
          }
          //如果是动态数据或模板数据
          else if (dataOrigin === 1 && parent_static.categoryId || dataOrigin === 2 || dataOrigin === 3) {
            let d             = this.dataCache.getContentList({id: dataOrigin === 1 ? parent_static.categoryId : (dataOrigin === 2 ? this.$route.query.cid : ALBUM_PREFIX + this.$route.query.pid)})
            obj.fromOriginTab = this.fromOriginTab.filter(item => item.isDynamic)
            obj.map           = map = d.map
            temp = obj.baseModuleDynamicList[0].value


            for (let i in map) {
              temp === map[i].type.name && filterMap.push(map[i])
            }
            obj.filterMap = filterMap
            obj.isDynamic = true
          }
          return obj
        }
        else {
          return obj
        }
      },
    },

    methods   : {
      setIcon(obj, prop, val) {
        this.$set(obj, prop, val)
      },
      toggleTextType(to_type) {
        let _static     = this._static,
            className   = this.first.info.className,
            textArr     = ['text', 'd__text'],
            textareaArr = ['textarea', 'd__textarea', 'rows']


        if (to_type === 'textarea') {
          this.$set(_static, 'textarea', this._static.text)
          this.$set(_static, 'd__textarea', _static.d__text ? 'textarea__' + className : '')
          this.$set(_static, 'rows', 2)
          textArr.forEach(item => this.$delete(_static, item))
        }
        else if (to_type === 'text') {
          this.$set(_static, 'text', this._static.textarea)
          this.$set(_static, 'd__text', _static.d__textarea ? 'text__' + className : '')
          textareaArr.forEach(item => this.$delete(_static, item))
        }

        if (this.aboutData.mode === 'children-list') {
          let dataList = this.first.parents[0].info.static.dataList
          if (to_type === 'textarea') {
            dataList.forEach(item => {
              if (item['text__' + className] !== undefined) {
                this.$set(item, 'textarea__' + className, item['text__' + className])
                this.$delete(item, 'text__' + className)
              }
            })
          }
          else if (to_type === 'text') {
            dataList.forEach(item => {
              if (item['textarea__' + className] !== undefined) {
                this.$set(item, 'text__' + className, item['textarea__' + className])
                this.$delete(item, 'textarea__' + className)
              }
            })
          }
        }
      },
    },
    components: {
      dataLinkType
    },
  }
</script>

<style lang="scss">
  @import "../../../styles/variables";

  .selected-static-icon {
    border: 1px #aaa solid;
    background-color: #eee;
    font-size: 22px;
    padding: 2px 6px;
  }

  .icon-list {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;

    span {
      margin: 1px 1px;
      cursor: pointer;

      &:hover {
        color: $primary;
      }
    }
  }

  .icon-toggle-btn {
    width: 100%;
    height: 30px;
    border: 1px $gray-line solid;
    background-color: lighten($gray-line, 10%);

    outline: 0;
  }
</style>
