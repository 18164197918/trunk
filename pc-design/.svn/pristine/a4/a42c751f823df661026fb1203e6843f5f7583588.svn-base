<style lang="scss">
</style>
<template>
  <el-form :label-width="labelWidth+'px'">
    <el-form-item :label="label"  :class="{'is-required':required}">
      <el-button
        :disabled="!isNew"
        @click="openWeekBox()"
      >添加营业时间</el-button>
      <div
        class="bd-gray bg-white w630 fz12 pb10 mt10"
        v-if="showWeekBox"
      >
        <div class="df pl15 pr15 bb-gray">
          <div class="fx1">添加营业时间</div>
          <div class="text-primary">
            <span
              @click="addhoursList()"
              class="mr10 cup"
            >确定</span>
            <span
              @click="closeBox()"
              class="cup"
            >删除</span>
          </div>
        </div>
        <el-form
          class="store-information"
          label-width="70px"
        >
          <el-form-item label="营业日">
            <el-checkbox-group v-model="checkWeekList">
              <el-checkbox
                :disabled="item.isDisabled"
                :key="item.value"
                :label="item.value"
                v-for="item in weekList"
              >{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="时间段">
            <el-input
              class="w50"
              v-model="t1"
            ></el-input>
            <span class="w10 text-center dib">:</span>
            <el-input
              class="w50"
              v-model="t2"
            ></el-input>
            <span class="w10 text-center dib">-</span>
            <el-input
              class="w50"
              v-model="t3"
            ></el-input>
            <span class="w10 text-center dib">:</span>
            <el-input
              class="w50"
              v-model="t4"
            ></el-input>
            <el-button
              @click="addTimeSlot()"
              class="w50 ml20 pl0 pr0"
            >确定</el-button>
          </el-form-item>
          <el-form-item class="mt10">
            <el-button
              :key="index"
              class="pl5 pr5"
              v-for="(item,index) in hours"
            >
              {{item}}
              <i
                @click="delHoursItem(index)"
                class="el-icon-close"
              ></i>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <template v-if="p_hoursList.length!==0">
        <div
          :key="index"
          class="df pl15 pr15 bd-gray h40 mt10 w630 fz12 bg-white"
          v-for="(item,index) in p_hoursList"
        >
          <div class="fx1 df">
            <span>{{item.format}}:</span>
            <span
              :key="index"
              class="mr5"
              v-for="(i,index) in item.hours"
            >{{i}}</span>
          </div>
          <div class="text-primary">
            <span
              @click="edithoursList(index)"
              class="mr10 cup"
            >编辑</span>
            <span
              @click="delhoursList(index)"
              class="cup"
            >删除</span>
          </div>
        </div>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>

const DEFAULT = {
  labelWidth: 100,
  label: '营业时间'
}

export default {
  name: 'hoursList',
  props: {
    labelWidth: {
      type: Number,
      default: DEFAULT.labelWidth
    },
    label: {
      type: String,
      default: DEFAULT.label
    },
    required: {
      type: Boolean,
      default: DEFAULT.required
    },
    hoursList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isNew: true,
      showWeekBox: false,
      disabledList: [],
      checkWeekList: [],
      hours: [],
      format: null,
      nowIndex: 0,
      t1: null,
      t2: null,
      t3: null,
      t4: null,
      p_hoursList: this.hoursList,
      weekList: [
        { 'value': 1, 'label': '周一', isDisabled: false, isSelected: false },
        { 'value': 2, 'label': '周二', isDisabled: false, isSelected: false },
        { 'value': 3, 'label': '周三', isDisabled: false, isSelected: false },
        { 'value': 4, 'label': '周四', isDisabled: false, isSelected: false },
        { 'value': 5, 'label': '周五', isDisabled: false, isSelected: false },
        { 'value': 6, 'label': '周六', isDisabled: false, isSelected: false },
        { 'value': 0, 'label': '周日', isDisabled: false, isSelected: false }
      ]
    }
  },
  watch: {
    hoursList (val) {
      this.p_hoursList = val
    },
    p_hoursList (val) {
      this.$emit('update:hoursList', val)
    }
  },
  created () {

  },
  methods: {
    matchData (arry, item, bl) {
      for (let obj of this.weekList) {
        if (item === 'isSelected') obj[item] = false
        for (let i in arry) {
          if (obj.value === arry[i]) obj[item] = bl
        }
      }
    },

    closeBox () {
      this.isNew = true
      this.showWeekBox = false
      this.checkWeekList = []
    },

    openWeekBox () {
      this.disabledList = []
      for (let obj of this.p_hoursList) {
        this.disabledList = [...new Set(this.disabledList.concat(obj.days))]
      }
      this.matchData(this.disabledList, 'isDisabled', true)

      if (this.disabledList.length === 7) {
        this.$message({
          message: '无法继续添加营业时间',
          type: 'warning'
        })
      } else {
        this.showWeekBox = true
        this.isNew = true
      }
    },

    // 添加营业时间
    addhoursList () {
      if (this.checkWeekList.length === 0) {
        this.$message({
          message: '请勾选营业日',
          type: 'warning'
        })
      } else if (this.hours.length === 0) {
        this.$message({
          message: '请添加营业时间段',
          type: 'warning'
        })
      } else {
        let checkWeekList = this.checkWeekList.sort()
        const disabledList = new Set(checkWeekList.concat(this.disabledList))
        this.disabledList = [...disabledList]

        this.matchData(checkWeekList, 'isSelected', true)
        this.matchData(checkWeekList, 'isDisabled', true)
        let lsArry = []
        let formatList = []

        this.weekList.forEach((item, index) => {
          if (item.isSelected) {
            lsArry.push(item.label)
            if (index === 6) {
              if (lsArry.length === 7) this.format = '周一至周日'
              else {
                if (lsArry.length === 1) formatList.push(`${lsArry[0]}`)
                else if (lsArry.length > 1) formatList.push(`${lsArry[0]}至${lsArry[lsArry.length - 1]}`)
              }
            }
            if (formatList.length !== 0) this.format = formatList.join(',')
          } else {
            if (lsArry.length === 1) formatList.push(`${lsArry[0]}`)
            else if (lsArry.length > 1) formatList.push(`${lsArry[0]}至${lsArry[lsArry.length - 1]}`)
            if (index === 6) {
              if (lsArry.length === 5 && lsArry[0] === '周一' && lsArry[4] === '周五') this.format = '工作日'

              if (formatList.length !== 0) this.format = formatList.join('、')
            }
            lsArry = []
          }
        })

        if (this.isNew) {
          this.p_hoursList.push({
            days: checkWeekList,
            hours: this.hours,
            format: this.format
          })
        } else {
          this.p_hoursList[this.nowIndex] = { days: checkWeekList, hours: this.hours, format: this.format }
          this.matchData(checkWeekList, 'isDisabled', true)
        }

        this.showWeekBox = false
        this.checkWeekList = []
        this.hours = []
        this.isNew = true
      }
    },

    // 添加时间段
    addTimeSlot () {
      let time1 = this.t1
      let time2 = this.t2
      let time3 = this.t3
      let time4 = this.t4
      if (!time1 && !time2 && !time3 && !time4) {
        this.$message({
          message: '请填写正确时间段',
          type: 'warning'
        })
      } else {
        if (!time1) time1 = '00'
        if (!time2) time2 = '00'
        if (!time3) time3 = '00'
        if (!time4) time4 = '00'
        this.hours.push(`${time1}:${time2}-${time3}:${time4}`)
        this.t1 = ''
        this.t2 = ''
        this.t3 = ''
        this.t4 = ''
      }
    },

    // 删除时间段
    delHoursItem (index) {
      this.hours.splice(index, 1)
    },

    // 删除营业时间
    delhoursList (index) {
      this.matchData(this.p_hoursList[index].days, 'isDisabled', false)
      this.p_hoursList.splice(index, 1)
      this.isNew = true
    },

    // 编辑营业时间
    edithoursList (index) {
      this.nowIndex = index
      this.showWeekBox = true
      this.isNew = false
      this.disabledList = []
      for (let obj of this.p_hoursList) {
        this.disabledList = [...new Set(this.disabledList.concat(obj.days))]
      }

      this.matchData(this.disabledList, 'isDisabled', true)
      this.matchData(this.p_hoursList[index].days, 'isDisabled', false)

      this.checkWeekList = this.p_hoursList[index].days
      this.hours = this.p_hoursList[index].hours
    }
  }
}
</script>
