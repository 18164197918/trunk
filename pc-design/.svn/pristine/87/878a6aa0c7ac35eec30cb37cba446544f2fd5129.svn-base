import getMapData from '../a-map-data'

const A_MAP_KEY = '1d18ed7d56668c33a3e40f785d09fcc5'
const DEFAULT = {
  lng: 114.423358,
  lat: 30.434256,
  label: '地址：',
  labelWidth: 100,
  mapHeight: 450,
  mapWidth: 680,
  showInput: false,
  disabledInput: true,
  required: false
}

function getCityAdcodeBy (pcode, citycode) {
  let temp = this.gdMapData.find((x) => {
    return x.adcode === pcode
  })

  temp = (temp && temp.districts.length > 0) ? temp.districts.find((x) => {
    return x.citycode === citycode
  }) : temp

  return temp.adcode
}

function getCascaderData (arr, data) {
  let temp = []

  for (const code of arr) {
    if (typeof data.districts === 'undefined') {
      break
    }

    data = data.districts.find((x) => {
      return x.adcode === code
    })

    if (data) {
      temp.push(data.adcode)
    }
  }

  return temp
}

function getLocation () {
  let { adcode, center } = this.getCascaderObj(this.location, this.gdMapData, 'adcode', 'districts').pop()
  center = center.split(',')
  this.p_lng = center[0]
  this.p_lat = center[1]
  this.placeSearch.setCity(adcode)
  this.marker.setPosition(new AMap.LngLat(this.p_lng, this.p_lat))
  this.map.panTo([this.p_lng, this.p_lat])
}

const init = new Promise(function (resolve, reject) {
  window.init = resolve
  if (document.getElementById('aMap') === null) {
    let el = document.createElement('script')
    el.id = 'aMap'
    el.onerror = reject
    el.type = 'text/javascript'
    el.src = `https://webapi.amap.com/maps?v=1.4.12&key=${A_MAP_KEY}&callback=init`
    document.head.appendChild(el)
  }
})

export default {
  name: 'AMap',
  props: {
    province: null,
    city: null,
    area: null,
    address: null,
    lng: {
      type: null,
      default: DEFAULT.lng
    },
    lat: {
      type: null,
      default: DEFAULT.lat
    },
    label: {
      type: String,
      default: DEFAULT.label
    },
    labelWidth: {
      type: Number,
      default: DEFAULT.labelWidth
    },
    mapHeight: {
      type: Number,
      default: DEFAULT.mapHeight
    },
    mapWidth: {
      type: Number,
      default: DEFAULT.mapWidth
    },
    showInput: {
      type: Boolean,
      default: DEFAULT.showInput
    },
    disabledInput: {
      type: Boolean,
      default: DEFAULT.disabledInput
    },
    required: {
      type: Boolean,
      default: DEFAULT.required
    }
  },
  data () {
    let location = []
    this.province && (location[0] = this.province)
    this.city && (location[1] = this.city)
    this.area && (location[2] = this.area)
    let pageId = new Date().getTime().toString(32)

    return {
      mapId: 'a-map-' + pageId,
      panelId: 'a-map-panel-' + pageId,
      location,
      gdMapData: [],
      p_province: this.province,
      p_city: this.city,
      p_area: this.area,
      p_address: this.address,
      p_lng: this.lng,
      p_lat: this.lat,

      placeSearch: null,
      map: null,
      marker: null
    }
  },
  watch: {
    p_address (val) {
      this.$emit('update:address', val)
    },
    province (val) {
      this.p_province = val
      this.location[0] = val
      this.location.splice(0, 1, val)
      Reflect.apply(getLocation, this, [])
    },
    city (val) {
      this.p_city = val || ''
      if (val) {
        this.location.splice(1, 1, val)
      } else {
        this.location.splice(1, 1)
      }
      Reflect.apply(getLocation, this, [])
    },
    area (val) {
      this.p_area = val || ''
      if (val) {
        this.location.splice(2, 1, val)
      } else {
        this.location.splice(2, 1)
      }
      Reflect.apply(getLocation, this, [])
    },
    address (val) {
      this.p_address = val
    },
    lng (val) {
      this.p_lng = val
    },
    lat (val) {
      this.p_lat = val
    }
  },
  mounted () {
    Promise.all([
      getMapData,
      init
    ]).then((
      [mapData]
    ) => {
      this.gdMapData = mapData
      this.map = new AMap.Map(this.mapId, {
        resizeEnable: true,
        zoom: 18,
        center: [DEFAULT.lng, DEFAULT.lat]
      })

      this.marker = new AMap.Marker({
        title: '您的地址',
        draggable: true
      })

      this.marker.setMap(this.map)

      this.marker.on('dragend', (event) => {
        this.p_lng = event.lnglat.lng
        this.p_lat = event.lnglat.lat
        this.$emit('update:lng', event.lnglat.lng)
        this.$emit('update:lat', event.lnglat.lat)
      })

      AMap.plugin(['AMap.ToolBar', 'AMap.PlaceSearch'], () => {
        this.map.addControl(new AMap.ToolBar())

        this.placeSearch = new AMap.PlaceSearch({ // 构造地点查询类
          pageSize: 5,
          pageIndex: 1,
          citylimit: true,
          city: '010', // 城市
          panel: this.panelId,
          renderStyle: 'newpc'
        })

        this.map.addControl(this.placeSearch)
      })
    })
  },
  methods: {
    // 地理位置修改
    locationChange (value) {
      this.p_province = value[0] || ''
      this.p_city = value[1] || ''
      this.p_area = value[2] || ''
      this.$emit('update:province', value[0] || '')
      this.$emit('update:city', value[1] || '')
      this.$emit('update:area', value[2] || '')
      this.placeSearch.setCity(this.getCascaderObj(value, this.gdMapData, 'adcode', 'districts').pop().adcode)
    },
    // 搜索
    searchByAddressName () {
      this.placeSearch.search(this.address, (status, result) => {
        if (status === 'no_data') {
          return
        }
        let name = result.poiList.pois[0].name
        let poi = result.poiList.pois[0].location
        this.marker.setPosition(new AMap.LngLat(poi.lng, poi.lat))
        this.map.panTo([poi.lng, poi.lat])
        this.p_lng = poi.lng
        this.p_lat = poi.lat
        this.p_address = this.p_address || name
        this.$emit('update:lng', poi.lng)
        this.$emit('update:lat', poi.lat)
      })

      this.placeSearch.on('selectChanged', (event) => {
        let data = event.selected.data
        let { pcode, adcode, citycode, location } = data
        pcode = pcode === '' ? adcode : pcode
        let tempLocation = getCascaderData(Array.from(new Set([pcode, Reflect.apply(getCityAdcodeBy, this, [pcode, citycode]), adcode])), { districts: this.gdMapData })
        this.locationChange(tempLocation)
        this.marker.setPosition(new AMap.LngLat(location.lng, location.lat))
        this.map.panTo([location.lng, location.lat])
        this.p_lng = location.lng
        this.p_lat = location.lat
        this.p_address = data.name
        this.$emit('update:lng', location.lng)
        this.$emit('update:lat', location.lat)
      })
    },
    // 直接输入经纬度
    inputHandle () {
      this.marker.setPosition(new AMap.LngLat(this.p_lng, this.p_lat))
      this.map.panTo([this.p_lng, this.p_lat])
    }
  }
}
