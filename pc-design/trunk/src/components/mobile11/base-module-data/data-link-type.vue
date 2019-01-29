<template>
  <div class="w100p">
    <select @input="modifyInput($event, 0)" :value="_value[0]" class="mb5">
      <option v-for="item in pc_link_type" :value="item.type">{{item.name}}</option>
    </select>

    <select v-if="_value[0]==='SINGLE_PAGE'" @input="modifyInput($event, 1)" :value="_value[1]">
      <option v-for="item in _pageList" :value="item.index">{{item.title}}</option>
    </select>

    <div v-if="_value[0]==='SYS'">
      <select @input="modifyInput($event, 1)" :value="_value[1]" class="w50p">
        <option v-for="item in _sys_type" :value="item.type">{{item.name}}</option>
      </select>

      <select v-if="_value[1]==='COM_PID'" @input="modifyInput($event, 3)" :value="_value[2]" class="w50p">
        <option value="" disabled>--空--</option>
        <option v-for="item in dataCache.allContentList" :value="item.index">{{item.title}}</option>
      </select>
      <select v-if="_value[1]==='COM_CID'" @input="modifyInput($event, 2)" :value="_value[2]" class="w50p">
        <option value="" disabled>--空--</option>
        <option v-for="item in _categoryListEqual" :value="item.index">{{item.title}}</option>
      </select>
    </div>

    <input v-if="_value[0]==='WEB'" @input="modifyInput($event, 1)" :value="_value[1]" type="text" placeholder="网页链接">

    <input v-if="_value[0]==='TEL'" @input="modifyInput($event, 1)" :value="_value[1]" type="text" placeholder="拨打电话">
  </div>
</template>

<script>
  import dataCache from '../common/data-cache'
  import { LINK_TYPE, LINK_TYPE_SPLIT, LINK_NAME_SPLIT } from '../common/constant'

  export default {
    name    : 'data-link-type',
    props   : {
      value   : {},
      linkObj : {},
      propName: {},
    },
    data() {
      return {
        dataCache,
        temp: '',
      }
    },
    computed: {
      //static属性中的 link 值分解
      _value() {
        let temp  = [],
            split = this.value.split(LINK_TYPE_SPLIT) || []

        split.forEach(item => {
          temp = temp.concat(item.split(LINK_NAME_SPLIT))
        })

        return temp
      },
      //PC端大模块分类
      pc_link_type() {
        return LINK_TYPE.filter(item => item.isPc)
      },
      //系统模块列表
      _sys_type() {
        return LINK_TYPE.filter(item => item.type === 'SYS')[0].children
      },
      //单页列表
      _pageList() {
        return this.dataCache.pageList.filter(item => item.page_type === 'SINGLE_PAGE')
      },
      //栏目列表[不含子栏目的栏目]
      _categoryListEqual() {
        return [{title: '首页', index: '0'}].concat(this.dataCache.categoryListEqual.filter(item => !item.hasChildren))
      },

    },
    methods : {
      modifyInput(e, index) {
        /**
         * index
         * 0 : 大类型 [NONE, SYS, SINGLE_PAGE, TEL, WEB]
         * 1 : 针对 SINGLE_PAGE, TEL, WEB 直接跟属性值使用
         * 2 : 针对含有子键值对属性使用  [cid=2]
         * 3 : 针对含有子键值对属性值使用
         */
        if (index === 0) {
          this.$emit('input', e.target.value)
        }
        else if (index === 1) {
          this.$emit('input', [this._value[0], e.target.value].join(LINK_TYPE_SPLIT))
        }
        else if (index === 2) {
          this.$emit('input', [this._value[0], this._value[1] + LINK_NAME_SPLIT + e.target.value].join(LINK_TYPE_SPLIT))
        }else if (index === 3) {
          let i, len, temp,
              val = e.target.value,
              allContentList = this.dataCache.allContentList

          for(i = 0, len = allContentList.length; i < len; ++i){
            if(allContentList[i].index === val){
              temp = allContentList[i].category_index
              break
            }
          }
          this.$emit('input', [this._value[0], this._value[1] + LINK_NAME_SPLIT + val, 'COM_CID' + LINK_NAME_SPLIT + temp].join(LINK_TYPE_SPLIT))
        }
      },
    },
  }
</script>
