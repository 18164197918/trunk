import Vue from 'vue'
import config from '@/config'

Vue.filter('filterImg', function (url) {
  return filterImg(url)
})
Vue.filter('filterImgObj', function (url) {
  let u = filterImg(url)
  return u ? { 'background-image': 'url(' + u + ')' } : {}
})

export const filterImg = function (url) {
  let temp
  if (!url) {
    return ''
  } else if (/^https?:\/\//.test(url) || url.indexOf('data:image') === 0) {
    temp = url
  } else {
    temp = config.fileManagerPrefix + url
  }
  return temp
}
