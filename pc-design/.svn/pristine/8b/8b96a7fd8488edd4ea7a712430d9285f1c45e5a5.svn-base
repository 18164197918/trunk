<template>
  <div class="template-alert">
    <el-dialog
      :visible.sync="p_templateDialogVisible"
      append-to-body
      title="模板绑定 BINDING"
      width="906px"
    >
      <div class="list-inner">
        <ul class="list-content">
          <div class="wx-name mt20 d-flex">
            <!--<span class="pr10" >终端名称：</span>-->
            <el-select
              @change="changeTerminal"
              multiple
              placeholder="请选择终端"
              style="flex:1"
              v-model="selectedTerminals"
            >
              <el-option
                :key="item.value"
                :label="item.label"
                :value="item.value"
                v-for="item in options"
              ></el-option>
            </el-select>
            <el-input
              @change="searchTemplateName"
              class="w210 pr10 ml10"
              placeholder="请输入模板名称"
              size="small"
              v-model="templateName"
            ></el-input>
          </div>
          <div class="list-table mt20">
            <el-table
              :data="templateTable"
              stripe
            >
              <el-table-column
                align="center"
                label="模板名称"
                prop="name"
              ></el-table-column>
              <el-table-column
                align="center"
                label="可支持终端"
                prop="canSupport"
              ></el-table-column>
              <el-table-column
                align="center"
                label="操作"
                prop="todo"
              >
                <template slot-scope="scope">
                  <el-tooltip
                    class="item"
                    content="绑定"
                    effect="light"
                    placement="top"
                  >
                    <span
                      @click="toChangeTemplate(scope.row.todo)"
                      class="iconfont iconfont-bangding"
                      style="color: #a9b7b7;"
                    ></span>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </ul>

        <pagination
          :pagination="templateMeta"
          :refresh-list="handleCurrentChange"
        ></pagination>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from '../API'
import pagination from '../../common/pagination.vue'

export default {
  name: 'template-pop-window',
  props: {
    channelId: {
      type: String
    },
    templateDialogVisible: {
      type: Boolean
    }
  },
  data () {
    return {
      selectedTerminals: [],
      options: [],
      templateName: '',
      templateTable: [],
      currentPage: 1,
      templateMeta: {},
      templateTitle: '',
      available_channels: '',
      currentUrlName: '',
      p_templateDialogVisible: this.templateDialogVisible
    }
  },

  watch: {
    templateDialogVisible () {
      this.p_templateDialogVisible = this.templateDialogVisible
    },
    p_templateDialogVisible (val) {
      this.$emit('update:templateDialogVisible', val)
    }
  },

  computed: {
    channelIdNew () {
      return this.channelId
    }
  },

  mounted () {
    let href = window.location.href
    this.currentUrlName = href.split('chooseList/')[1]
    // 当前处于哪个路由
    if (href.indexOf('bd') > -1) {
      this.available_channels = 'BAIDU_APPLET'
    } else if (href.indexOf('wx') > -1) {
      this.available_channels = 'WECHAT_APPLET'
    } else if (href.indexOf('pc') > -1) {
      this.available_channels = 'PC_SITE'
    } else {
      this.available_channels = ''
    }
    // 获取终端列表
    this.httpGet(API.channelType).then(res => {
      let options = []
      res.collection.forEach(ele => {
        options.push({
          value: ele.name,
          label: ele.title
        })
      })

      // 屏蔽当前多选终端
      for (let j = 0; j < options.length; j++) {
        if (options[j].value.indexOf(this.available_channels) > -1) {
          options.splice(j, 1)
          break
        }
      }
      this.options = options
    })
    // 获取模板列表
    this.templateList({
      available_channels: this.available_channels
    })
  },
  methods: {
    // 模板列表数据更新公用函数
    templateDataUpdate (collection, state, meta) {
      let templateTable = []
      if (state === 0 || state === '0') {
        collection.forEach(ele => {
          templateTable.push({
            name: ele.title,
            canSupport: ele.available_channels_name,
            todo: ele.id
          })
        })
        this.templateTable = templateTable
        meta.current_page = meta.page_num
        this.templateMeta = meta
      }
    },
    // 请求模板列表数据
    templateList ({
      available_channels: availableChannels = '',
      title = '',
      page_num: pageNum = 1,
      page_size: pageSize = 10,
      state = 'ENABLE'
    } = {}) {
      this.http({
        url: API.pcTemplateList,
        params: {
          available_channels: availableChannels,
          title,
          page_num: pageNum,
          page_size: pageSize,
          state
        }
      }).then(({
        collection,
        meta,
        state
      }) => {
        this.templateDataUpdate(collection, state, meta)
      })
    },
    // 改变模板
    toChangeTemplate (id) {
      this.httpPut(`manager/channel/${this.channelIdNew}/decoration/template/${id}`).then(res => {
        this.$emit('change-list', res.data.decoration_template_id)
        this.p_templateDialogVisible = false
        // this.baseTemplateTitle()
      })
    },
    handleCurrentChange (obj = {}) {
      // console.log(`当前页: ${val}`)
      this.templateList({
        available_channels: this.available_channels,
        title: this.templateTitle,
        page_num: obj.page
      })
    },
    // 选择终端
    changeTerminal (e) {
      console.log(e)
      let available = this.available_channels
      this.available_channels = available.split(',')[0]
      this.available_channels += ',' + e.join(',')
      this.templateList({
        available_channels: this.available_channels
      })
    },
    // 搜索模板
    searchTemplateName (value) {
      this.templateTitle = value
      this.templateList({
        available_channels: this.available_channels,
        title: value
      })
    }
  },
  components: {
    pagination
  }
}

</script>
