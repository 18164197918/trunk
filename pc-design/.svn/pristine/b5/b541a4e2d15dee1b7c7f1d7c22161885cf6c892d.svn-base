const data = []

/* 获取所有数据 */
function all () {
  return data
}

let assist

/* 清除状态 */
function clearStatus (index, obj) {
  if (index !== undefined) {
    assist = data[index].info.assist
    assist.p = 0
    assist.a = 0
    assist.edit !== undefined && (assist.edit = 0)
    assist.m !== undefined && (assist.m = 0)
  } else {
    data.forEach(item => {
      assist = item.info.assist
      assist.p = 0
      assist.a = 0
      assist.edit !== undefined && (assist.edit = 0)
      assist.m !== undefined && (assist.m = 0)

      if (item.mode.indexOf('children-') !== -1) {
        item.parents[0].info.assist.m = 0
      }
    })
  }
}

/* 删除元素 */
function remove (index) {
  clearStatus(index)
  return data.splice(index, 1)
}

/* 清空数组 */
function removeAll () {
  clearStatus()
  data.splice(0, data.length)
}

/* 插入一个元素 */
function push (obj) {
  obj.info.assist.p = 1
  data.push(obj)
}

/* 选择某一个 */
function eq (index) {
  return data[index]
}

/* 获取第一个 */
function first () {
  return data[0]
}

/* 获取总长度 */
function getLength () {
  return data.length
}

export default {
  data,
  all,
  removeAll,
  push,
  getLength,
  eq,
  first,
  remove
}
