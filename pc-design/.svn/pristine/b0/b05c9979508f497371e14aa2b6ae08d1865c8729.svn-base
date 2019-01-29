import getMapData from '../a-map-data'

export default {
  data () {
    return {
      closed: false,
      mapData: [],

      leftInput: '',
      rightInput: '',

      leftSelected: [],
      rightSelected: [],

      leftOpens: [],
      rightOpens: [],

      leftIndeterminate: [],
      rightIndeterminate: []
    }
  },

  created () {
    getMapData.then((res) => {
      res.map((x) => {
        x.open = false
      })

      this.mapData = res
    })
  },

  mounted () {
    document.addEventListener('keydown', this.keydown)
  },

  computed: {
    leftData: {
      get () {
        let temp = JSON.parse(JSON.stringify(this.mapData))

        if (this.leftInput !== '') {
          temp = temp.filter((item) => {
            if (item.name.includes(this.leftInput)) return true
            if (item.hasOwnProperty('districts')) {
              item.districts = item.districts.filter((child) => {
                return child.name.includes(this.leftInput)
              })
              if (item.districts.length > 0) {
                return true
              }
            }
          })
        }

        return temp
      },

      set (newValue) {
        newValue.map((x) => {
          this.mapData.find((m) => {
            return x.adcode === m.adcode
          }).open = x.open
        })
      }
    }

  },

  watch: {
    closed (newVal) {
      if (newVal) {
        this.destroyElement()
      }
    }
  },

  methods: {
    /**
     * 获取数据
     *
     * @param {String} type
     * @returns {Object}
     */
    getData (type) {
      let selected, indeterminate, opens

      if (type === 'left') {
        selected = new Set(this.leftSelected)
        indeterminate = new Set(this.leftIndeterminate)
        opens = new Set(this.leftOpens)
      } else if (type === 'right') {
        selected = new Set(this.rightSelected)
        indeterminate = new Set(this.rightIndeterminate)
        opens = new Set(this.rightOpens)
      }

      return {
        selected,
        indeterminate,
        opens
      }
    },
    /**
     * 设置数据
     *
     * @param {Object} options
     * @param {Object} options.selected
     * @param {Object} options.indeterminate
     * @param {Object} options.opens
     * @param {String} options.type
     */
    setData ({
      selected,
      indeterminate,
      opens,
      type
    }) {
      if (type === 'left') {
        selected && (this.leftSelected = Array.from(selected))
        indeterminate && (this.leftIndeterminate = Array.from(indeterminate))
        opens && (this.leftOpens = Array.from(opens))
      } else if (type === 'right') {
        selected && (this.rightSelected = Array.from(selected))
        indeterminate && (this.rightIndeterminate = Array.from(indeterminate))
        opens && (this.rightOpens = Array.from(opens))
      }
    },
    /**
     * 判断当前是否选中
     *
     * @param {String} adcode
     * @param {String} type
     * @returns {Boolean} Boolean
     */
    isSelected (adcode, type) {
      if (type === 'left') {
        return this.leftSelected.includes(adcode)
      }

      if (type === 'right') {
        return this.rightSelected.includes(adcode)
      }
    },
    /**
     * 判断当前是否不确定
     *
     * @param {String} adcode
     * @param {String} type
     * @returns {Boolean} Boolean
     */
    isIndeterminate (adcode, type) {
      if (type === 'left') {
        return this.leftIndeterminate.includes(adcode)
      }

      if (type === 'right') {
        return this.rightIndeterminate.includes(adcode)
      }
    },
    /**
     * 判断是否展开子级
     *
     * @param {String} adcode
     * @param {String} type
     * @returns {Boolean} Boolean
     */
    isOpen (adcode, type) {
      if (type === 'left') {
        return this.leftOpens.includes(adcode)
      }

      if (type === 'right') {
        return this.rightOpens.includes(adcode)
      }
    },
    /**
     * 切换展开子级
     *
     * @param {String} adcode
     * @param {String} type
     */
    toggle (adcode, type) {
      let { opens } = this.getData(type)

      if (this.isOpen(adcode, type)) {
        opens.delete(adcode)
      } else {
        opens.add(adcode)
      }

      this.setData({
        opens,
        type
      })
    },
    /**
     * 处理记录选中的数组
     *
     * @param {String} adcode
     * @param {String} type
     * @returns true 新增 false 删除
     */
    handleSelected (adcode, type) {
      let { selected } = this.getData(type)

      if (this.isSelected(adcode, type)) {
        selected.delete(adcode)
      } else {
        selected.add(adcode)
      }

      this.setData({ selected, type })
    },
    /**
     * 处理省级变化
     *
     * @param {Object} province
     * @param {String} type
     */
    handleProvinceChange (province, type) {
      let { selected, indeterminate } = this.getData(type)
      let { adcode, districts } = province

      indeterminate.delete(adcode)

      if (this.isSelected(adcode, type)) {
        selected.delete(adcode)

        if (province.hasOwnProperty('districts')) {
          districts.forEach((item) => {
            selected.delete(item.adcode)
          })
        }
      } else {
        selected.add(adcode)
        if (province.hasOwnProperty('districts')) {
          districts.forEach((item) => {
            selected.add(item.adcode)
          })
        }
      }

      if (type === 'left') {
        this.leftSelected = Array.from(selected)
        this.leftIndeterminate = Array.from(indeterminate)
      } else if (type === 'right') {
        this.rightSelected = Array.from(selected)
        this.rightIndeterminate = Array.from(indeterminate)
      }
      this.setData({
        selected,
        indeterminate,
        type
      })
    },
    /**
     * 处理市级变化
     *
     * @param {Object} province
     * @param {Object} city
     * @param {String} type
     */
    handleCityChange (province, city, type) {
      this.handleSelected(city.adcode, type)
      if (!province.hasOwnProperty('districts')) {
        return
      }

      let con = 0 // 用来记录子级有多少选中
      let { adcode, districts } = province
      let { selected, indeterminate } = this.getData(type)

      districts.forEach((item) => {
        if (selected.has(item.adcode)) {
          con++
        }
      })

      if (con === 0) {
        // 子级一个都没选中，那么自身要取消选中，并取消不确定状态
        selected.delete(adcode)
        indeterminate.delete(adcode)
      } else if (con === districts.length) {
        // 子级全部选中，那么自身要选中，并取消不确定状态
        selected.add(adcode)
        indeterminate.delete(adcode)
      } else {
        // 子级选中部分，那么自身需要取消选中，并加入不确定状态
        selected.delete(adcode)
        indeterminate.add(adcode)
      }

      this.setData({
        selected,
        indeterminate,
        type
      })
    },

    // #region other
    destroyElement () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close () {
      this.closed = true
      this.P.reject('cancel')
    },
    keydown (e) {
      if (e.keyCode === 27) {
        this.close()
      }
    }
    // #endregion
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  }
}
