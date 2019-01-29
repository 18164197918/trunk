import dataEdit from './common/data-edit'
import dataCache from './common/data-cache'
import { removeModule } from './common/data-methods'
import { UNIT_REG, parseFloor } from './common/constant'
import { $DOC } from './common/constant-dom'

function moveBasicUnit(match, basic) {
  let unit = match[2]
  if (unit === '%') {
    return parseFloor(+match[1] + .1 * basic) + unit
  }
  else if (unit === 'px') {
    return parseFloor(+match[1] + 1 * basic) + unit
  }
  else {
    throw new Error('单位有误')
  }
}


export default function () {
  /**
   * f      70
   * r      82
   * tab    9
   * del    46
   * Esc    27
   * left   37
   * top    38
   * right  39
   * bottom 40
   *
   */
  $DOC.off('keydown.outer')
  $DOC.on('keydown.outer', e => {
    if (!e.ctrlKey && !e.shiftKey && !e.altKey) {
      let keyCode = e.keyCode

      //console.log(e.keyCode)
      /*if (e.keyCode === 70) {
        // 0 普通   1 全屏
        this.keyF = this.keyF >= 2 ? 0 : ++this.keyF
        if (this.keyF === 1) {
          document.documentElement.webkitRequestFullScreen()
        }else if(this.keyF === 2){
          dataEdit.removeAll()
        }
        else {
          document.webkitCancelFullScreen()
        }
      }*/
      if (keyCode === 9) {
        this.keyTab = !this.keyTab
        return false
      }
      else if (keyCode === 27) {
        dataCache.isPreview = false
      }
      else if (dataEdit.getLength()) {
        let firstSelfCss,
            info = dataEdit.first().info

        if (info.sysLock) {
          return false
        }

        firstSelfCss = info.cssObj.self.css


        if (keyCode === 37) {
          firstSelfCss.left = moveBasicUnit(firstSelfCss.left.match(UNIT_REG), -1)
          return false
        }
        else if (keyCode === 38) {
          if(firstSelfCss.top){
            firstSelfCss.top = moveBasicUnit(firstSelfCss.top.match(UNIT_REG), -1)
          }else if(firstSelfCss.marginTop){
            firstSelfCss.marginTop = moveBasicUnit(firstSelfCss.marginTop.match(UNIT_REG), -1)
          }

          return false
        }
        else if (keyCode === 39) {
          firstSelfCss.left = moveBasicUnit(firstSelfCss.left.match(UNIT_REG), 1)
          return false
        }
        else if (keyCode === 40) {
          firstSelfCss.top = moveBasicUnit(firstSelfCss.top.match(UNIT_REG), 1)

          if(firstSelfCss.position && firstSelfCss.position.indexOf('relative') !== -1){
            firstSelfCss.marginBottom = firstSelfCss.top
          }

          return false
        }
        else if (keyCode === 46) {
          dataEdit.all().forEach(item => {
            removeModule(item)
          })
          dataEdit.removeAll()
          return false
        }
      }
    }
  })
}
