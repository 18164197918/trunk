<template>
    <div @mousedown="mouseDownAssist($event)"
         @mouseup="mouseUpAssist"
         @dblclick="dblClickAssist"
         :class="{'selected': isSelected, 'edit': info.editable, 'allow-drag': allowDrag}"
         class="module-assist">

        <div v-if="dataTools.isShowModuleTip" class="class-name">
            <em>{{info.cName}}</em><i>{{info.className}}</i>
        </div>

        <div v-if="mode==='module-group'"
             @mousedown.stop="toggleGroupHover"
             :class="{'on': assist.a===0}"
             class="group-handle">{{assist.a === 0 ? '常规' : 'hover'}}
        </div>

        <span v-if="allowDrag && !notFirstLock" class="drag-handle"></span>

        <div v-if="!info.sysLock && !lock.r && assist.n && !notFirstLock" class="resizable-handle resize-n"></div>
        <div v-if="!info.sysLock && !lock.r && assist.e && !notFirstLock" class="resizable-handle resize-e"></div>
        <div v-if="!info.sysLock && !lock.r && assist.w && !notFirstLock" class="resizable-handle resize-w"></div>
        <div v-if="!info.sysLock && !lock.r && assist.s && !notFirstLock" class="resizable-handle resize-s"></div>
        <div v-if="!info.sysLock && !lock.r && assist.se && !notFirstLock" class="resizable-handle resize-se"></div>

        <styles v-if="!notFirstLock" :info="info" :fatherObj="fatherObj" :isTpl="isTpl"></styles>
    </div>
</template>

<script>
  import styles from './styles.vue'
  import {dataEdit, dataCache, dataTools, dataMethods, constant} from '../common'
  const { getFirstElByClass } = constant
  const { findObjIndex } = dataMethods
  import createWbEditor from '../common/utils/createWbEditor'


  let currentData, firstData, i, len, ctrlKey

  export default {
    props     : ['mode', 'parents', 'self', 'info', 'indexKey', 'dataItem', 'isTpl', 'notFirstLock'],
    data() {
      return {
        dataCache,
        dataTools,
      }
    },
    computed  : {
      lock() {
        return this.info.lock || {}
      },
      assist() {
        return this.info.assist || {}
      },
      isSelected() {
        if (this.mode === 'children-list' || this.mode === 'children-menu') {
          return this.assist.p && this.indexKey === dataEdit.first().indexKey
        }
        else {
          return this.assist.p
        }
      },
      fatherObj() {
        if (this.mode === 'children-group' || this.mode === 'children-list') {
          return {
            mode     : this.mode,
            className: this.parents[0].info.className,
          }
        }
        else {
          return undefined
        }
      },
      allowDrag() {
        return !this.info.sysLock && !this.lock.d && this.assist.d
      },
    },
    mounted() {
      if (!this.isTpl) {
        //this.assist.el      = getFirstElByClass(this.info.className) || getFirstElByClass(this.parents[0].info.className)
        this.assist.el      = getFirstElByClass(this.info.className)
        this.assist.elStyle = window.getComputedStyle(this.assist.el)

        this.assist.dAssist = this.mouseDownAssist

        this.assist.pEl      = this.assist.el.parentNode
        this.assist.pElStyle = window.getComputedStyle(this.assist.pEl)
      }
    },
    methods   : {
      toggleGroupHover() {
        let temp

        if (this.assist.a === 0) {
          this.assist.a = 1
          temp          = 0
        }
        else {
          this.assist.a = 0
          temp          = 2
        }
        this.self.children.forEach(item => {
          item.info.assist.a = temp
        })
      },
      mouseDownAssist(e) {
        dataCache.isShowContextMenu = false
        dataCache.colorPickerStatus = false

        /**
         * currentData
         * info, mode, parents, children, indexKey
         */
        currentData = {info: this.info, mode: this.mode, parents: this.parents}
        this.self.children && (currentData.children = this.self.children)
        this.indexKey !== undefined && (currentData.indexKey = this.indexKey)

        /* 针对trigger模式 或者临时模块 */
        if (e === undefined || this.isTpl) {
          return currentData
        }

        dataCache.draggingModuleIsMoved = false

        firstData = dataEdit.first()
        len       = dataEdit.getLength()


        /**
         * 按住ctrl键时：
         * 1.如果editData为空，则新增
         * 2.如果第一个元素为容器模块，则没有任何反应
         * 3.与第一个模块对比
         *   1.如果与第一个模块不在同一个sequence则不操作
         *   2.如果在dataEdit中已经存在则删除
         *   3.如果与第一模块处于平级则新增
         *
         * 没有按住ctrl键：
         * 如果editData为空或只有一个元素或选中的当前元素不在editData内则清除之前的选中项，并重新新增
         */
        if (ctrlKey = e.ctrlKey) {
          if (len === 0) {
            dataEdit.push(currentData)
          }
          else if (firstData.mode === 'module-container') {
            /*--none--*/
          }
          else {
            if (firstData.info.sequence !== this.info.sequence) {
              return
            }

            for (let i = 0; i < len; i++) {
              if (dataEdit.eq(i).info === currentData.info) {
                dataEdit.remove(i)
                return
              }
            }

            let children = firstData.parents[0].children

            for (i = 0, len = children.length; i < len; ++i) {
              if (children[i].info === currentData.info) {
                dataEdit.push(currentData)
              }
            }
          }
        }
        else {
          if (len <= 1 || findObjIndex(this.info, dataEdit.all()) === -1) {
            dataEdit.removeAll()
            dataEdit.push(currentData)
          }
        }

        if (currentData.mode.indexOf('children-') !== -1) {
          let parent = this.parents[0]

          parent.info.assist.m = 1
        }

        /**
         * 如果鼠标改变大小未锁定并且目标对象为拖拽handle 则允许改变大小
         * 如果禁止拖拽且非列表的第一个元素则停止冒泡
         */
        if (!this.info.lock.r && e.target.className.indexOf('resizable-handle') !== -1) {}
        else if (!this.allowDrag || this.indexKey) {
          e.stopPropagation()
        }
      },
      mouseUpAssist() {
        if (!dataCache.draggingModuleIsMoved) {
          if (!ctrlKey && dataEdit.getLength() > 1) {
            dataEdit.removeAll()
            dataEdit.push(currentData)
          }

          if (this.assist.m !== undefined) {
            this.assist.m = 1
          }
        }
      },
      dblClickAssist() {
        let name = this.info.name
        if (name === 'module-tp') {
          this.$filemanager.open({
            limit  : 1,
            type   : 'image',
            success: file => {
              if (this.dataItem === undefined) {
                this.info.static.src = file.ref_url
              }
              else {
                this.dataItem['src__' + this.info.className] = file.ref_url
              }
            },
          })
        }
        else if (name === 'module-wb') {
          this.dataCache.editModuleName = this.info.className
        }
        else if (name === 'module-xz' && this.info.static.witch === 1) {
          this.$filemanager.open({
            limit  : 1,
            type   : 'image',
            success: file => this.info.static.svg_src = file.ref_url,
          })
        }

        if (
          name === 'module-an'
          || name === 'module-tp'
          || name === 'module-map'
          || name === 'module-video'
          || name === 'module-page'
          || name === 'module-list'
        ) {
          this.dataCache.baseModuleName = 'base-module-data'
        }
      },
    },
    watch     : {
      'dataCache.editModuleName': function (newVal, oldVal) {

        if (!this.isTpl && this.info.name === 'module-wb') {
          let info   = this.info,
              assist = info.assist
          if (info.className === newVal) {
            info.editable = true
            if (!assist.editor) {
              this.$set(assist, 'editor', createWbEditor({editDom: assist.el.childNodes[1], toolbarDom: assist.el.childNodes[0], str: info.static.shtml}))
            }
            else {
              assist.editor.$textElem.attr('contenteditable', true)
            }
          }
          else {
            info.editable = false
            if (assist && assist.editor) {
              assist.editor.$textElem.attr('contenteditable', false)
              info.static.shtml = assist.editor.txt.html()
            }
          }
        }
      },
    },
    components: {
      styles,
    },
  }
</script>
