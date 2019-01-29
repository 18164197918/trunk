import { parseFloor } from '../constant'

/**
 *
 * @param children        分组的所有children
 * @param add             新增的子模块
 * @param groupElStyle    分组样式
 * @param groupPElStyle   分组父级样式
 *
 * @returns
 * children [normal,px,percent]
 * add [normal,px,percent]
 * range [normal,px,percent]
 */
export default function (children, add, groupElStyle, groupPElStyle) {
  let temp

  let _elStyle

  let pWidth

  let pHeight

  let childrenNormal = []

  let childrenPx = []

  let childrenPercent = []

  let addNormal = []

  let addPx = []

  let addPercent = []

  let rangePx = {
    left: Number.MAX_VALUE,
    top: Number.MAX_VALUE,
    right: Number.MIN_VALUE,
    bottom: Number.MIN_VALUE
  }

  let rangePercent = null

  let rangeNormal = null

  let groupLeft = 0

  let groupTop = 0

  if (groupElStyle) {
    groupLeft = parseFloat(groupElStyle.left)
    groupTop = parseFloat(groupElStyle.top)
  }

  children.forEach(item => {
    _elStyle = item.info.assist.elStyle
    temp = {
      left: parseFloat(_elStyle.left),
      top: parseFloat(_elStyle.top),
      width: parseFloat(_elStyle.width),
      height: parseFloat(_elStyle.height)
    }

    temp.left += groupLeft
    temp.top += groupTop

    rangePx.left > temp.left && (rangePx.left = temp.left)
    rangePx.top > temp.top && (rangePx.top = temp.top)
    rangePx.right < temp.left + temp.width && (rangePx.right = temp.left + temp.width)
    rangePx.bottom < temp.top + temp.height && (rangePx.bottom = temp.top + temp.height)

    childrenPx.push(temp)
  })

  if (add) {
    add.forEach(item => {
      _elStyle = item.info.assist.elStyle
      temp = {
        left: parseFloat(_elStyle.left),
        top: parseFloat(_elStyle.top),
        width: parseFloat(_elStyle.width),
        height: parseFloat(_elStyle.height)
      }

      rangePx.left > temp.left && (rangePx.left = temp.left)
      rangePx.top > temp.top && (rangePx.top = temp.top)
      rangePx.right < temp.left + temp.width && (rangePx.right = temp.left + temp.width)
      rangePx.bottom < temp.top + temp.height && (rangePx.bottom = temp.top + temp.height)

      addPx.push(temp)
    })
  }

  rangePx.width = rangePx.right - rangePx.left
  rangePx.height = rangePx.bottom - rangePx.top

  childrenPx.forEach((item) => {
    item.left = item.left - rangePx.left
    item.top = item.top - rangePx.top

    temp = {
      left: parseFloor(item.left / rangePx.width * 100) + '%',
      top: parseFloor(item.top / rangePx.height * 100) + '%',
      width: parseFloor(item.width / rangePx.width * 100) + '%',
      height: parseFloor(item.height / rangePx.height * 100) + '%'
    }

    childrenPercent.push(temp)

    item.left += 'px'
    item.top += 'px'
    item.width += 'px'
    item.height += 'px'

    childrenNormal.push({
      left: temp.left,
      top: item.top,
      width: temp.width,
      height: item.height
    })
  })

  if (add) {
    addPx.forEach((item) => {
      item.left = item.left - rangePx.left
      item.top = item.top - rangePx.top

      temp = {
        left: parseFloor(item.left / rangePx.width * 100) + '%',
        top: parseFloor(item.top / rangePx.height * 100) + '%',
        width: parseFloor(item.width / rangePx.width * 100) + '%',
        height: parseFloor(item.height / rangePx.height * 100) + '%'
      }

      addPercent.push(temp)

      item.left += 'px'
      item.top += 'px'
      item.width += 'px'
      item.height += 'px'

      addNormal.push({
        left: temp.left,
        top: item.top,
        width: temp.width,
        height: item.height
      })
    })
  }

  if (groupPElStyle) {
    pWidth = parseFloat(groupPElStyle.width)
    pHeight = parseFloat(groupPElStyle.height)
    rangePercent = {
      left: parseFloor(rangePx.left / pWidth * 100) + '%',
      top: parseFloor(rangePx.top / pHeight * 100) + '%',
      width: parseFloor(rangePx.width / pWidth * 100) + '%',
      height: parseFloor(rangePx.height / pHeight * 100) + '%'
    }
    rangeNormal = {
      left: rangePercent.left,
      top: rangePx.top + 'px',
      width: rangePercent.width,
      height: rangePx.height + 'px'
    }
  }

  rangePx.left += 'px'
  rangePx.top += 'px'
  rangePx.width += 'px'
  rangePx.height += 'px'

  return {
    children: {
      normal: childrenNormal,
      px: childrenPx,
      percent: childrenPercent
    },
    add: {
      normal: addNormal,
      px: addPx,
      percent: addPercent
    },
    range: {
      normal: rangeNormal,
      px: rangePx,
      percent: rangePercent
    }
  }
}
