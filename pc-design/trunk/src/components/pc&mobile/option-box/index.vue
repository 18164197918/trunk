<template>
    <div class="option-box" @mousedown.stop>
        <div :class="{'disabled1': !isLg1, 'disabled2': !isLg2}" class="align-box">
            <span
                    v-for="list in ALIGN_MODULE"
                    @click="alignModule(list.param)"
                    :class="list.param"
                    :title="list.name">
                <i :class="list.icon" class="iconfont"></i>
            </span>
        </div>
        <div :class="{'disabled-add-group': !isShowAdd, 'disabled-cancel-group': !isShowCancel, 'disabled-switch-group': !isShowSwitch}" class="align-box">
            <span
                    v-for="list in GROUP_MODULE"
                    @click="groupModule(list.param)"
                    :class="list.param"
                    :title="list.name">
                <i :class="list.icon" class="iconfont"></i>
            </span>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import dataEdit from '../common/data-edit'
  import moduleBaseGroup from '../common/baseTpl/moduleGroupBase'
  import positionRelationParent from '../common/utils/positionRelationParent'
  import { addModule, removeModule, createModule, groupToList, listToGroup } from '../common/data-methods'
  import { ALIGN_MODULE, GROUP_MODULE, convertUnit, parseFloor } from '../common/constant'

  function modifyEleCss(info, group_assist, group_p_width) {
    let elStyle = info.assist.elStyle,
        selfCss = info.cssObj.self.css,
        left    = parseFloat(elStyle.left),
        top     = parseFloat(elStyle.top),
        width   = parseFloat(elStyle.width),
        height  = parseFloat(elStyle.height)

    left += parseFloat(group_assist.elStyle.left)
    top += parseFloat(group_assist.elStyle.top)

    selfCss.left   = parseFloor(left / group_p_width * 100) + '%'
    selfCss.top    = top + 'px'
    selfCss.width  = parseFloor(width / group_p_width * 100) + '%'
    selfCss.height = height + 'px'
  }

  export default {
    data() {
      return {
        ALIGN_MODULE,
        GROUP_MODULE,
        dataEdit: dataEdit.all(),
      }
    },
    computed: {
      isLg1() {
        return this.dataEdit.length > 1
      },
      isLg2() {
        return this.dataEdit.length > 2
      },
      isShowAdd() {
        let groupNum    = 0,
            childrenNum = 0

        this.dataEdit.forEach(item => {
          if (item.mode === 'module-group') {
            ++groupNum
          }
          else if (
            item.mode.indexOf('children-') === -1
            && item.mode !== 'module-list'
            && item.mode !== 'module-menu'
            && item.mode !== 'module-page'
          ) {
            ++childrenNum
          }
        })

        if ((groupNum === 1 && childrenNum > 0) || groupNum === 0 && childrenNum > 1) {
          return true
        }
        return false
      },
      isShowCancel() {
        let groupNum       = 0,
            childrenNum    = 0,
            otherModuleNum = 0

        this.dataEdit.forEach(item => {
          if (item.mode === 'module-group') {
            ++groupNum
          }
          else if (item.mode === 'children-group') {
            ++childrenNum
          }
          else {
            ++otherModuleNum
          }
        })

        if ((groupNum === 1 || childrenNum === 1) && otherModuleNum === 0) {
          return true
        }
        return false
      },
      isShowSwitch() {
        if (this.dataEdit.length === 1 && (this.dataEdit[0].mode === 'module-list' || this.dataEdit[0].mode === 'module-group')) {
          return true
        }
        return false
      },
    },
    methods : {
      alignModule(mode) {

        if (this.dataEdit.length < 2) {
          return
        }
        else if (this.dataEdit.length < 3 && (mode === ALIGN_MODULE[6].param || mode === ALIGN_MODULE[7].param)) {
          return
        }

        let i, len1, css, temp, className, elStyle, pElStyle, first2, param1, param2, dataEditClone = []

        this.dataEdit.forEach((item, index) => {
          temp = item.info.assist

          dataEditClone[index] = convertUnit({
            css     : item.info.cssObj.self.css,
            props   : {left: 'px', top: 'px', width: 'px', height: 'px'},
            elStyle : temp.elStyle,
            pElStyle: temp.pElStyle,
          })
        })

        if (mode === ALIGN_MODULE[6].param || mode === ALIGN_MODULE[7].param) {

          if (mode === ALIGN_MODULE[6].param) {
            param1 = 'top'
            param2 = 'height'
          }
          else {
            param1 = 'left'
            param2 = 'width'
          }

          dataEditClone.forEach((item, index) => {
            item.center = item[param1] + item[param2] / 2
            item.index  = index
          })

          dataEditClone.sort((a, b) => a.center > b.center)

          let minPos = dataEditClone[0].center,
              maxPos = dataEditClone[dataEditClone.length - 1].center

          for (i = 1, len1 = dataEditClone.length - 1; i < len1; i++) {
            dataEditClone[i].center = parseFloat(minPos + (maxPos - minPos) / len1 * i)
          }

          dataEditClone.forEach(item => {
            this.dataEdit[item.index].info.cssObj.self.css[param1] = convertUnit({
              css     : {[param1]: item.center - item[param2] / 2 + 'px'},
              props   : {[param1]: item[param1 + 'UnitBefore']},
              pElStyle: this.dataEdit[item.index].info.assist.pElStyle,
            })[param1 + 'After']
          })
        }
        else {
          temp     = this.dataEdit[0]
          elStyle  = temp.info.assist.elStyle
          pElStyle = temp.info.assist.pElStyle

          first2 = dataEditClone[0]

          for (i = 1, len1 = this.dataEdit.length; i < len1; i++) {
            css       = this.dataEdit[i].info.cssObj.self.css
            className = this.dataEdit[i].info.className

            if (
              mode === ALIGN_MODULE[0].param
              || mode === ALIGN_MODULE[3].param
              || mode === ALIGN_MODULE[8].param
              || mode === ALIGN_MODULE[9].param) {//top & left & width & height
              css[mode] = convertUnit({
                props: {[mode]: dataEditClone[i][mode + 'UnitBefore']},
                elStyle,
                pElStyle,
              })[mode + 'After']
            }
            else if (mode === ALIGN_MODULE[2].param) {//bottom
              css.top = convertUnit({
                css  : {top: first2.top + first2.height - dataEditClone[i].height + 'px'},
                props: {top: dataEditClone[i].topUnitBefore},
                pElStyle,
              }).topAfter
            }
            else if (mode === ALIGN_MODULE[5].param) {//right
              css.left = convertUnit({
                css  : {left: first2.left + first2.width - dataEditClone[i].width + 'px'},
                props: {left: dataEditClone[i].leftUnitBefore},
                pElStyle,
              }).leftAfter
            }
            else if (mode === ALIGN_MODULE[1].param) {//vCenter
              css.top = convertUnit({
                css  : {top: first2.top + (first2.height - dataEditClone[i].height) / 2 + 'px'},
                props: {top: dataEditClone[i].topUnitBefore},
                pElStyle,
              }).topAfter
            }
            else if (mode === ALIGN_MODULE[4].param) {//hCenter
              css.left = convertUnit({
                css  : {left: first2.left + (first2.width - dataEditClone[i].width) / 2 + 'px'},
                props: {left: dataEditClone[i].leftUnitBefore},
                pElStyle,
              }).leftAfter
            }
          }
        }
      },
      groupModule(mode) {
        if (mode === GROUP_MODULE[0].param && this.isShowAdd) {
          /**
           * 1.如果是新建组
           * 2.如果是增加元素到组
           */
          let group,
              childs        = [],
              _childrenEdit = [],
              first         = dataEdit.first()

          this.dataEdit.forEach(item => {
            if (item.mode === 'module-group') {
              group = item
            }
            else if (
              item.mode.indexOf('children-') === -1
              && item.mode !== 'module-list'
              && item.mode !== 'module-menu'
              && item.mode !== 'module-page'
            ) {
              _childrenEdit.push(item)
            }
          })

          if (!group) {
            let {children, range} = positionRelationParent(_childrenEdit, null, null, first.info.assist.pElStyle)

            _childrenEdit.forEach((item, index) => {
              item.info.cssObj.self.css = children.normal[index]
              childs.push({info: item.info})
              removeModule(item)
            })

            dataEdit.removeAll()
            let data = createModule(moduleBaseGroup, {info: {sequence: first.info.sequence, cssObj: {self: {css: range.normal}}}, children: childs})
            addModule({data, parent: first.parents[0]})
            setTimeout(() => dataEdit.push(data.info.assist.dAssist()))
          }
          else {
            let group_children         = group.children,
                {children, add, range} = positionRelationParent(group_children, _childrenEdit, group.info.assist.elStyle, group.info.assist.pElStyle)

            group_children.forEach((item, index) => {
              item.info.cssObj.self.css = children.normal[index]
            })
            _childrenEdit.forEach((item, index) => {
              item.info.cssObj.self.css = add.normal[index]
              addModule({
                data  : removeModule(item),
                parent: group,
              })
            })

            group.info.cssObj.self.css = range.normal
            dataEdit.removeAll()
            setTimeout(() => dataEdit.push(group.info.assist.dAssist()))
          }
        }
        else if (mode === GROUP_MODULE[1].param && this.isShowCancel) {
          let first         = dataEdit.first(),
              group         = first.mode === 'module-group' ? {info: first.info, children: first.children} : first.parents[0],
              group_assist  = group.info.assist,
              group_p_width = parseFloat(group_assist.pElStyle.width)


          if (first.mode === 'module-group' || group.children.length <= 1) {
            for (let i = 0, len = group.children.length - 1; len >= i; len--) {
              modifyEleCss(group.children[len].info, group_assist, group_p_width)
              addModule({
                data  : group.children.splice(len, 1)[0],
                parent: first.parents[0],
              })
            }

            removeModule(first)


          }
          else {
            modifyEleCss(first.info, group_assist, group_p_width)

            let data                   = removeModule(first),
                {children, range}      = positionRelationParent(group.children, null, group.info.assist.elStyle, group.info.assist.pElStyle)
            group.info.cssObj.self.css = range.normal
            group.children.forEach((item, index) => {
              item.info.cssObj.self.css = children.normal[index]
            })

            setTimeout(() => {
              addModule({data, parent: first.parents[1]})
              dataEdit.removeAll()
              setTimeout(() => dataEdit.push(data.info.assist.dAssist()))
            })
          }
        }
        else if (mode === GROUP_MODULE[2].param && this.isShowSwitch) {
          if (this.dataEdit[0].mode === 'module-group') {
            groupToList()
          }
          else if (this.dataEdit[0].mode === 'module-list') {
            listToGroup()
          }
        }
      },
    },
  }
</script>

<style lang="scss">
    @import "../../../styles/variables";

    .option-box {
        display: flex;
        justify-content: center;

        .align-box {
            &.disabled1 {
                span {
                    color: #ccc;
                    cursor: default;

                    &:hover {
                        color: #ccc;
                    }
                }
            }

            &.disabled2 {
                span.vDis, span.hDis {
                    color: #ccc;
                    cursor: default;

                    &:hover {
                        color: #ccc;
                    }
                }
            }

            &.disabled-add-group > span.add,
            &.disabled-cancel-group > span.cancel,
            &.disabled-switch-group > span.switch {
                color: #ccc;
                cursor: default;

                &:hover {
                    color: #ccc;
                }
            }

            span {
                margin: 0 2px;
                padding: 0 6px;
                color: #777;
                cursor: pointer;

                i {
                    font-size: 18px;
                }

                &:hover {
                    color: $primary;
                }
            }

        }
    }
</style>
