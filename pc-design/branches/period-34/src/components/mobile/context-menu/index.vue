<template>
    <ul v-show="dataCache.isShowContextMenu" @mousedown.stop :style="cmStyle" class="context-menu">
        <li v-if="first.info" class="name"><span>{{first.info.cName}}</span><em>{{first.info.className}}</em></li>
        <li v-for="(item, key) in Z_INDEX" @click="moveIndex(key)">{{item.label}}</li>
        <li @click="remove()">删除</li>
        <li @click="copyModule()">复制一份</li>
        <li v-if="first.mode==='module-group'" @click="groupToList">转成列表</li>
        <li v-if="first.mode==='module-list'" @click="listToGroup">转成组合</li>
    </ul>
</template>

<script>
import dataEdit from '../common/data-edit'
import dataPage from '../common/data-page'
import dataCache from '../common/data-cache'
import contextMenuEvent from './context-menu-event'
import { Z_INDEX } from '../common/constant'
import { addModule, createModule, moveLittleSelfCss, removeModule, groupToList, listToGroup } from '../common/data-methods'

export default {
  name: 'context-menu',
  data () {
    return {
      dataCache,
      Z_INDEX,
      first: {},
      cmStyle: {
        left: 0,
        top: 0
      }
    }
  },
  mounted () {
    contextMenuEvent.call(this)
  },
  methods: {
    moveIndex (key) {
      let first = this.first

      let selfCss = first.info.cssObj.self.css

      let zIndex = selfCss.zIndex

      if (key === 0) {
        zIndex ? selfCss.zIndex += 1 : this.$set(selfCss, 'zIndex', 3)
      } else if (key === 1) {
        zIndex && zIndex > 3 ? selfCss.zIndex -= 1 : this.$delete(selfCss, 'zIndex')
      } else if (key === 2) {
        let zIndex = Number.MIN_VALUE

        first.parents[0].children.forEach(item => {
          zIndex = Math.max(zIndex, item.info.assist.elStyle.zIndex)
        })

        this.$set(selfCss, 'zIndex', zIndex + 1)

        addModule({
          data: removeModule(first),
          parent: first.parents[0]
        })
      } else if (key === 3) {
        this.$delete(selfCss, 'zIndex')

        addModule({
          data: removeModule(first),
          parent: first.parents[0],
          index: 0
        })
      }

      this.dataCache.isShowContextMenu = false
    },
    remove () {
      dataEdit.all().forEach(item => removeModule(item))
      dataEdit.removeAll()
      this.dataCache.isShowContextMenu = false
    },
    copyModule () {
      dataEdit.removeAll()
      addModule({
        data: createModule(
          { info: this.first.info, children: this.first.children },
          { info: { cssObj: { self: { css: moveLittleSelfCss(this.first.info.cssObj.self.css) } } } }
        ),
        parent: this.first.parents[0]
      })
      this.dataCache.isShowContextMenu = false
    },
    groupToList () {
      groupToList()
      this.dataCache.isShowContextMenu = false
    },
    listToGroup () {
      listToGroup()
      this.dataCache.isShowContextMenu = false
    }
  }
}
</script>

<style lang="scss">
    @import "../../../styles/variables";

    .context-menu {
        position: fixed;
        z-index: 10000;
        padding-bottom: 3px;
        width: $rightMenuWidth;
        background-color: $rightMenuBg;
        box-shadow: 0 0 40px rgba(0, 0, 0, .3);

        &.on {
            display: block;
        }

        li {
            padding: 0 15px;
            height: $rightMenuLiHeight;
            line-height: $rightMenuLiHeight;
            font-size: 14px;
            cursor: pointer;

            &:hover {
                background-color: $rightMenuLiBg;
                color: $rightMenuBg;
            }

            &.name{
                height: $rightMenuLiHeight + 3;
                line-height: $rightMenuLiHeight + 3;
                background-color: darken($rightMenuBg, 70%);
                color: $white;

                em{
                    margin-left: 5px;
                    opacity: .5;
                }

                &:hover{
                    background-color: darken($rightMenuBg, 70%);
                    color: $white;
                    cursor: default;
                }
            }
        }
    }
</style>
