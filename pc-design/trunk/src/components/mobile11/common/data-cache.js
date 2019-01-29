import API from '../API'
import { ALBUM_PREFIX, toString } from './constant'
import Vue from 'vue'

export default {
  pageList             : null,
  categoryList         : null,
  categoryListEqual    : null,
  categoryListEqualObj : null,
  allContentList       : null,
  contentList          : {},
  contentDetail        : {},
  draggingModuleIsMoved: false,
  selectRangeIsMoved   : false,
  isShowContextMenu    : false,
  baseModuleName       : undefined,
  isShowDatabase       : false,
  isPreview            : false,
  colorPickerStatus    : false,
  isLoadingData        : false,
  leftBoxSelectedIndex : -1,
  editModuleName       : undefined,
  isMovedLeftBox       : false,
  //mouseDownCurrentData : null,
  //isMovedStaticData    : false,

  getColumnData() {
    return Vue.prototype.http5Get(API.columnList).then(res => {
      let col                   = sortCategory(res.collection)
      this.categoryList         = col.collection
      this.categoryListEqual    = col.collectionEqual
      this.categoryListEqualObj = {}
      col.collectionEqual.forEach(item => this.categoryListEqualObj[item.index] = item)
      return res.data
    })
  },

  getContentList(obj) {
    let id = obj.id

    if (!this.contentList[id]) {
      Vue.set(this.contentList, id, {
        id,
        meta: {},
        map : {title: {name: '标题', type: 'text',},},
        data: [{title: '数据加载中...',}, {title: '数据加载中...',},],
      })

      Vue.prototype.http5Get(API.contentListByIndex(id)).then(res => initRealData(this.contentList[id], {data: res.data.paginator.collection, map: res.data.fields_structure, meta: res.data.paginator.meta}))
      return this.contentList[id]
    }

    return this.contentList[id]
  },

  getContentDetail(obj) {
    let id = obj.id

    if (!this.contentDetail[id]) {
      Vue.set(this.contentDetail, id, {
        id,
        map : {title: {name: '标题', type: 'text',},},
        data: {title: '数据加载中...',},
      })

      Vue.prototype.http5Get(API.contentByIndex(id)).then(res => {
          let temp, curId = this.contentDetail[id]

          initRealData(curId, {map: res.data.archive_Model, data: res.data.model_fields})

          //需要针对详情页相册单独处理
          if ((temp = res.data.images) && temp.length > 0) {
            Vue.set(this.contentList, ALBUM_PREFIX + id, {
              id  : id,
              map : {
                path       : {label: '图片', name: 'path', type: {name: 'src'},},
                description: {label: '描述', name: 'description', type: {name: 'text'},},
              },
              data: temp,
            })
          }
        },
      )
    }

    return this.contentDetail[id]
  },

  findTopCategory(cid) {
    let equalObj = this.categoryListEqualObj,
        fatherId = cid

    while (equalObj[cid] && (cid = equalObj[cid].parent_index) !== '0') {
      fatherId = cid
    }
    return fatherId
  },
}

function initRealData(oldD, newD) {
  let oldMap  = oldD.map,
      oldData = oldD.data,
      oldMeta = oldD.meta,
      newMap  = newD.map,
      newData = newD.data,
      newMeta = newD.meta

  /* 映射替换 */
  for (let i in oldMap) {
    Vue.delete(oldMap, i)
  }
  for (let i in newMap) {
    Vue.set(oldMap, newMap[i].name, newMap[i])
  }

  /* 数据替换 */
  if (toString.call(oldData) === '[object Array]') {
    oldData.splice(0, oldData.length)
    oldData.splice(0, 0, ...newData)
  }
  else if (toString.call(oldData) === '[object Object]') {
    for (let i in oldData) {
      Vue.delete(oldData, i)
    }
    for (let i in newData) {
      Vue.set(oldData, i, newData[i])
    }
  }

  /*如果有翻页数据*/
  if (oldMeta) {
    for (let i in newMeta) {
      Vue.set(oldMeta, i, newMeta[i])
    }
  }
}

function sortCategory(collection) {
  collection.sort((a, b) => {
    if (a.parent_id > b.parent_id) {
      return 1
    }
    else if (a.parent_id < b.parent_id) {
      return -1
    }
    else {
      return a.sort_rank > b.sort_rank ? 1 : -1
    }
  })
  for (let i = collection.length; i--;) {
    if (collection[i].parent_id > 0) {
      let obj = collection.pop()
      collection.forEach(item => {
        if (item.id === obj.parent_id) {
          item.children = item.children || []
          item.children.unshift(obj)
        }
      })
    }
  }

  let collectionEqual = []
  collection.forEach(list => {
    list.level = ''
    collectionEqual.push(list)
    if (list.children) {
      list.hasChildren = true
      list.children.forEach(item => {
        item.level = 'pl20'
        collectionEqual.push(item)
        if (item.children) {
          item.hasChildren = true
          item.children.forEach(pro => {
            pro.level = 'pl40'
            collectionEqual.push(pro)
          })
        }
      })
    }
  })

  return {collection, collectionEqual}
}
