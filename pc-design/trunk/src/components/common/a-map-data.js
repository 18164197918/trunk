import { delCascaderEmptyChilds } from '@/js/vue-extend'

export default new Promise(function (resolve, reject) {
  let gdMapData = JSON.parse(localStorage.getItem('gdMapData'))

  if (gdMapData === null || gdMapData.time < new Date().getTime()) {
    fetch('http://package.jjiehao.com/json/gdMap.json').then(res => res.json()).then(({ districts: data }) => {
      delCascaderEmptyChilds(data, 'districts')
      localStorage.setItem('gdMapData', JSON.stringify({
        time: new Date().getTime() + 3600000,
        data
      }))
      resolve(data)
    })
  } else {
    resolve(gdMapData.data)
  }
})
