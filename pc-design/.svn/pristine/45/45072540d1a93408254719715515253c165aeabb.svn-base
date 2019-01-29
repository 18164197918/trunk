<template>
    <div class="transition-box">
        <div v-if="transitionArr.length" class="tit f mb10">
            <span>名称</span>
            <span>持续</span>
            <span>延迟</span>
            <span></span>
        </div>
        <div class="con">
            <div v-for="(item, key) in transitionArr" class="list f">
                <select @input="modifyValue($event, key, 0)" :value="item[0]">
                    <option value="all">全部</option>
                    <option v-for="item in transitionProperty" :value="item.value">{{item.label}}</option>
                </select>
                <input @input="modifyValue($event, key, 1)" :value="item[1]" type="number" step="0.01">
                <input @input="modifyValue($event, key, 2)" :value="item[2]" type="number" step="0.01">
                <span @click="removeOne(key)" class="iconfont iconfont-close1 remove-one"></span>
            </div>
            <div v-if="transitionArr.length <= transitionProperty.length" @click="addOne" class="add-one">新增</div>
        </div>
    </div>
</template>

<script>
  import mixinBseModule from '../common/mixin-base-module'

  export default {
    mixins    : [mixinBseModule],
    data() {
      return {
        transitionPropertyOriginal: [
          {label: '字号', value: 'font-size'},
          {label: '字间距', value: 'letter-spacing'},
          {label: '缩进', value: 'text-indent'},
          {label: '宽度', value: 'width'},
          {label: '高度', value: 'height'},
          {label: '透明度', value: 'opacity'},
          {label: '阴影', value: 'box-shadow'},
          {label: '颜色', value: 'color'},
        ],
        transitionFunction        : [
          {label: '线性', value: 'linear'},
          {label: '缓动', value: 'ease'},
          {label: '加快', value: 'ease-in'},
          {label: '减速', value: 'ease-out'},
          {label: '先加速后减速', value: 'ease-in-out'},
        ],
      }
    },
    methods : {
      addOne() {
        let transition = this.defaultCss.transition

        if (transition) {
          this.defaultCss.transition += ',all 0.2s 0s ease'
        }
        else {
          this.$set(this.defaultCss, 'transition', 'all 0.2s 0s ease')
        }
      },
      removeOne(key) {
        let arr = this.defaultCss.transition.split(',')
        arr.splice(key, 1)

        if(arr.length){
          this.defaultCss.transition = arr.join(',')
        }else{
          this.$delete(this.defaultCss, 'transition')
        }
      },
      modifyValue(e, key1, key2) {
        this.transitionArr[key1][key2] = e.target.value
        this.defaultCss.transition = this.transitionArr.map(item => item[0] + ' ' + item[1] + 's ' + item[2] + 's ' + item[3]).join(',')
      }
    },
    computed: {
      defaultCss () {
        return this.css.css
      },
      hoverCss () {
        return this.css.hoverCss
      },
      transitionArr() {
        let transition = this.defaultCss.transition
        if (transition) {
          return transition.split(',').map(item => {
            return item.match(/[\w-]{3,}|[.\d]+/g)
          })
        }
        else {
          return []
        }
      },
      cssKeys() {
        return Object.keys(this.hoverCss).map(item => item.replace(/([A-Z])/g, '-$1').toLowerCase())
      },
      transitionProperty() {
        return this.transitionPropertyOriginal.filter(item => {
          return this.cssKeys.indexOf(item.value) !== -1
        })
      },
    },
  }
</script>

<style lang="scss">
    @import "../../../styles/variables";

    .transition-box {
        margin-top: -3px;
        font-size: 14px;
        padding:0 12px;

        .f {
            display: flex;

            > * {
                margin-right: 4px;
                flex-grow: 1;
                width: 100%;

                &:nth-child(1) {
                    width: 160%;
                }

                &:nth-last-child(1) {
                    background: none;
                    width: 13px;
                    flex-shrink: 0;
                    margin-right: 0;
                }
            }

        }

        .tit {
            span {
                font-size: 13px;
                padding: 4px 0;
                text-align: center;
                font-weight: 400;
                background-color: #eee;
            }
        }

        .con {
            .list {
                margin-bottom: 5px;
                align-items: center;
            }
        }
    }
</style>