<template>
  <transition name="fileManager-fade">
    <div
      class="filemanager"
      v-show="visible"
    >
      <div
        @click="close"
        class="mask"
      ></div>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header clearfix">
            <span
              @click="close"
              class="close"
            >×</span>
            <h4 class="modal-title">
              文件管理
              <span
                class="action"
                v-if="uploadRule"
              >{{ uploadRule.label }}</span>
            </h4>

            <div
              class="search"
              v-if="uploadRule && uploadRule.ext_list"
            >
              <el-input
                class="input-with-select"
                placeholder="文件名"
                size="small"
                v-model="searchKey"
              >
                <el-select
                  :popper-append-to-body="false"
                  placeholder="请选择"
                  slot="append"
                  v-model="searchExt"
                >
                  <el-option
                    label="全部"
                    value
                  ></el-option>
                  <el-option
                    :key="ext"
                    :label="ext"
                    :value="ext"
                    v-for="ext in uploadRule.ext_list"
                  ></el-option>
                </el-select>
              </el-input>
            </div>
          </div>

          <div class="dialog-contain clearfix">
            <div class="cate-title">
              <ul class="nav">
                <li
                  :class="{'active': 1 === menuId}"
                  @click="changeMenu(1)"
                  v-if="sysTagVisible"
                >素材库</li>
                <li
                  :class="{'active': 2 === menuId}"
                  @click="changeMenu(2)"
                >我的文件</li>
              </ul>

              <el-upload
                :accept="fileAccept"
                :action="uploadAction"
                :before-upload="handleBeforeUpload"
                :data="{'type':typeId,'tag':tagId}"
                :headers="uploadHeaders"
                :limit="0"
                :on-change="handleChange"
                :on-error="handleErrors"
                :on-exceed="handleExceed"
                :on-progress="handleProgress"
                :on-success="handleSuccess"
                :show-file-list="false"
                class="upload-box"
                drag
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                </div>
                <div class="hint-upload blue">
                  <template v-if="uploadRule">
                    <div
                      class="hint-top"
                    >大小不超过：{{uploadRule.max_size_label}}，支持格式：{{uploadRule.ext_list.join(' ')}}</div>
                  </template>
                  <div class="hint-bottom">
                    <span class="iconfont iconfont-upload"></span>
                    <em>上传</em>
                  </div>
                </div>
              </el-upload>
            </div>

            <div class="cate-list bg-rig">
              <div class="bg_contain">
                <!--右侧内容显示  1>图片列表页-->
                <div
                  :class="{'active': 1 === menuId}"
                  class="tab-head pic-group"
                >
                  <div class="category">
                    <div class="category_list clearfix">
                      <!--<div class="active c-all">最新</div>-->
                      <ul class="category_list_container clearfix">
                        <template v-for="cate in cates">
                          <li
                            :class="{'active': cate.id === cateId}"
                            :key="cate.id"
                            @click="changeCate(cate.id)"
                            v-if="cates"
                          >{{ cate.title }}</li>
                        </template>
                      </ul>
                    </div>
                    <div class="cat_two_list clearfix">
                      <ul>
                        <template v-if="sysTags">
                          <li
                            :class="{'active': tag.id === tagId}"
                            :key="tag.id"
                            @click="changeTag(tag.id)"
                            v-for="tag in sysTags[cateId]"
                          >{{ tag.title }}</li>
                        </template>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  :class="{'active': 2 === menuId && false === fileManage }"
                  class="tab-head my-pic"
                >
                  <div class="categor">
                    <div class="category_list clearfix">
                      <!--<div class="active c-all">全部</div>-->
                      <ul class="category_list_container clearfix">
                        <li
                          :class="{'active': 0 === tagId}"
                          @click="changeTag(0)"
                        >全部</li>
                        <li
                          :class="{'active': tag.id === tagId}"
                          :key="tag.id"
                          @click="changeTag(tag.id)"
                          v-for="tag in myTags"
                        >{{ tag.title }}</li>
                      </ul>
                      <span
                        @click="fileManage=true;"
                        class
                      >管理</span>
                    </div>
                  </div>
                </div>

                <!--内部为group样式 pic-manage，group-manage结构一致-->
                <div
                  :class="{'active': true === fileManage && false === tagManage }"
                  class="tab-head pic-manage"
                >
                  <div class="category_list clearfix">
                    <div class="group">
                      <el-select
                        @change="updateFileTag"
                        placeholder="移动至"
                        size="small"
                        value
                      >
                        <el-option
                          :key="tag.id"
                          :label="tag.title"
                          :value="tag.id"
                          v-for="tag in myTags"
                        ></el-option>
                      </el-select>
                      <!--
                                            <div class="move">移动至<em class="iconfont icon-more"></em></div>
                                            <ul class="scrollbar">
                                              <li class=" " v-for="tag in myTags" :key="tag.id" >{{ tag.title }}</li>
                                            </ul>
                      -->
                      <div
                        @click="tagManage=true"
                        class
                      >分组管理</div>
                      <div
                        @click="deleteFile(true)"
                        class="del-all"
                      >清空</div>
                      <div
                        @click="deleteFile(false)"
                        class
                      >删除</div>
                      <div
                        @click="fileManage=false"
                        class="del-group"
                      >取消管理</div>
                    </div>
                  </div>
                </div>

                <div
                  :class="{'active': true === tagManage}"
                  class="tab-head group-manage"
                >
                  <div class="category_list clearfix">
                    <div class="group">
                      <div
                        @click="tagManage=fileManage=false"
                        class
                      >取消分组管理</div>
                    </div>
                  </div>
                </div>

                <div
                  :class="{'active': true === tagManage}"
                  class="img_list_container photo_list group-manage-content"
                >
                  <div class="create-img-group">
                    <input
                      class="disable"
                      maxlength="8"
                      placeholder="新建分组名称"
                      ref="newTagInput"
                      type="text"
                    >
                    <div
                      @click="createTag()"
                      class="btn"
                    >
                      <em>+</em>新建
                    </div>
                  </div>
                  <div class="edit-img-group">
                    <ul>
                      <li
                        :key="tag.id"
                        v-for="(tag,index) in myTags"
                      >
                        <input
                          :value="tag.title"
                          @blur="updateTag($event, index, tag.id)"
                          class="edit-tag-input"
                          maxlength="10"
                          placeholder="新建分组名称"
                          type="text"
                          v-focus
                          v-show="true === tag.edit"
                        >
                        <div
                          class="edit-content"
                          contenteditable="false"
                          v-show="true != tag.edit"
                        >
                          {{ tag.title }}
                          <span
                            @click="focusTag(index,tag)"
                            class="iconfont iconfont-edit1 edit-btn"
                          ></span>
                          <span
                            @click="deleteTag(tag.id)"
                            class="iconfont iconfont-close"
                          ></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- 删除确认提示 遮罩显示处-->
                <div class="prompt-box">
                  <div class="prompt-content">
                    <p>确认删除此分组</p>
                    <div>
                      <span>确认</span>
                      <span>取消</span>
                    </div>
                  </div>
                </div>

                <!--内容-->
                <div
                  :class="{'active': fileListShow}"
                  class="img_list_container photo_list"
                >
                  <ul class="img_box clearfix">
                    <li
                      :key="progress.uid"
                      class="imageList"
                      v-for="progress in progresses"
                    >
                      <el-progress
                        :percentage="progress.percent"
                        :width="80"
                        class="file"
                        type="circle"
                      ></el-progress>
                    </li>

                    <li
                      :key="file.id"
                      @click="selectFile(index,file)"
                      @mouseout="filePreviewEnd(index, file)"
                      @mouseover="filePreview(index, file)"
                      class="imageList"
                      v-for="(file,index) in files"
                    >
                      <img
                        :onerror="defaultFileUrl(file)"
                        :src="fileUrl(file)"
                        class="file"
                        v-if="file.preview !== true"
                      >
                      <audio
                        :src="config.base_url + '/' + file.src"
                        autoplay
                        class="file"
                        controls
                        loop
                        v-else-if="file.preview === true && file.type == 2"
                      ></audio>
                      <video
                        :src="config.base_url + '/' + file.src"
                        autoplay
                        class="file"
                        loop
                        v-else-if="file.preview === true && file.type == 3"
                      ></video>

                      <div
                        :class="{'active': fileManage}"
                        class="img-mask"
                      >
                        <!--<a class="del-file ope-img ">
                                                  <span class="icon-font eqf-wrong2 "></span>
                        </a>-->
                        <a
                          :class="{'active': true == file.selected}"
                          class="sel-file ope-img"
                        >
                          <span class="iconfont iconfont-select"></span>
                        </a>
                      </div>

                      <div
                        :class="{'active': !fileManage && file.cate_id==0, 'use': file.use}"
                        class="title-mask"
                      >
                        <a class>{{file.name}}</a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  :class="{'active': true === loading}"
                  class="img_list_container loading_box"
                >
                  <div class="loading">
                    <img src="./loading.svg">
                    <p>加载中，请稍后</p>
                  </div>
                </div>

                <div
                  :class="{'active': guideBoxShow}"
                  class="img_list_container guide_box"
                >
                  <div class="guide">
                    <img src="./empty.svg">
                    <p class="explain">您尚未上传文件</p>
                    <template v-if="uploadRule">
                      <p class="notice">目前文件上传支持
                        <br>
                        <em>{{uploadRule.ext_list.join(' ')}}</em>
                      </p>
                      <p class="notice">
                        文件大小不超过
                        <em>{{uploadRule.max_size_label}}</em>
                      </p>
                    </template>
                  </div>
                </div>

                <div class="pagination">
                  <el-pagination
                    :current-page="pagination.current_page"
                    :page-size="18"
                    :total="pagination.total"
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next, jumper"
                    v-show="false === empty"
                  ></el-pagination>
                </div>

                <div
                  class="use-confirm"
                  v-if="useConfirmBtn"
                >
                  <el-button
                    @click="useConfirm(true)"
                    size="small"
                    type="primary"
                  >确定选择</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import _ from 'lodash'
import API from './API'

let timer = null; let rootUrl = null; let debug = false

export default {
  name: 'filemanager',
  // useConfirm:this.useConfirm,
  install (Vue, options) {
    if (options.root_url) {
      rootUrl = options.root_url
    } else {
      rootUrl = ''
      // throw new Error('Missing parameter of root_url')
    }

    debug = options.debug

    let Cc = Vue.extend(this)
    let c = new Cc({ el: document.createElement('div') })
    c.$mount()
    document.body.appendChild(c.$el)
    Vue.prototype.$filemanager = c
  },
  data () {
    return {
      config: {
        limit: 0,
        base_url: '',
        rules: [],
        callbacks: {
          success: null,
          cancel: null,
          error: null,
          complete: null
        }
      },
      menuId: 2,
      cateId: null,
      tagId: 0,
      typeId: 0,
      searchKey: '',
      searchExt: '',
      currentPage: 1,
      cates: [],
      sysTags: [],
      myTags: [],
      files: [],
      uses: [],
      selects: [],
      uploadAction: '',
      // uploadHeaders: {'Authorization': 'Bearer ' + window.localStorage.getItem('Authorization')},
      uploadHeaders: undefined,
      progresses: [],
      pagination: {},
      visible: false,
      fileManage: false,
      tagManage: false,
      loading: false,
      sysTagVisible: false
    }
  },
  mounted () {
    this.init()
    // console.log(this.$router)
    this.getConfig().then(() => {
      this.getSysCates()
      this.getMyTags()
      this.getFiles()
    })
  },
  directives: {
    focus: {
      update (el) {
        el.focus()
      }
    }
  },
  computed: {
    queryParams: {
      get () {
        return {
          cate_id: this.cateId,
          tag_id: this.tagId,
          type_id: this.typeId,
          search_key: this.searchKey,
          search_ext: this.searchExt,
          page: this.currentPage
        }
      },
      set (params) {
        // console.log(params)
      }
    },
    uploadRule () {
      let rules = this.config.rules
      let rule = this.findUploadRule(this.typeId)
      if (!rule) {
        rule = {
          id: 0,
          type: 'all',
          label: '',
          mime_type: '',
          ext_list: [],
          max_size: 0,
          max_size_label: ''
        }
        _.forEach(rules, function (r) {
          rule.label = '全部'
          rule.mime_type = rule.mime_type + ',' + r.mime_type
          rule.ext_list = _.concat(rule.ext_list, r.ext_list)
          rule.max_size = rule.max_size > r.max_size ? rule.max_size : r.max_size
          rule.max_size_label = rule.max_size > r.max_size ? rule.max_size_label : r.max_size_label
        })
      }
      return rule
    },
    fileAccept () {
      return this.uploadRule ? this.uploadRule.mime_type : ''
    },
    guideBoxShow () {
      return this.empty === true && this.tagManage === false && this.loading === false
    },
    fileListShow () {
      return this.loading === false && this.empty === false && this.tagManage === false
    },
    empty () {
      // console.log('empty:', this.files.length, this.progresses.length)
      return this.files.length <= 0 && this.progresses.length <= 0
    },
    useConfirmBtn () {
      return (this.config.limit === 0 && this.uses.length > 0) ||
          (this.config.limit > 1 && this.uses.length === this.config.limit)
    }
  },
  watch: {
    queryParams: {
      handler (queryParams, old) {
        this.getFiles()
      },
      deep: false
    }
  },
  methods: {
    init () {
      this.uploadAction = rootUrl + API.fileUpload
    },
    getConfig () {
      return new Promise((resolve, reject) => {
        this.http6Get(API.getConfig).then((res) => {
          this.config = { ...this.config, ...res }
          resolve()
        }, reject)
      })
    },
    findUploadRule (key) {
      return _.find(this.config.rules, (o) => {
        if (_.isNumber(key)) {
          return o.id === key
        } else {
          return o.type === key
        }
      })
    },
    changeCate (id) {
      if (!!this.sysTags && !!this.sysTags[id]) {
        let tags = this.sysTags[id]
        if (tags.length > 0) {
          this.tagId = tags[0]['id']
        }
      }
      this.cateId = id
    },
    changeTag (id) {
      this.tagId = id
    },
    changeMenu (id) {
      this.menuId = id
      this.fileManage = false
      this.tagManage = false
      this.loading = false
      // this.empty = true
      if (id === 1) {
        if (this.cates && this.cates.length > 0) {
          let cate = this.cates[0]
          this.cateId = cate['id'] || 0
          let tags = cate['tags'] || []
          if (tags && tags.length > 0) {
            this.tagId = tags[0]['id'] || 0
          }
        }
      } else if (id === 2) {
        this.cateId = 0
        let tags = this.myTags
        this.cateId = 0
        if (tags && tags.length > 0) {
          this.tagId = 0
        }
      }
    },
    getSysCates () {
      this.http6Get(API.getSysCates).then((data) => {
        let tags = {}; let row = data.data
        for (let i in row) {
          tags[row[i]['id']] = row[i]['tags']
        }
        this.cates = row
        this.sysTags = tags
      })
    },
    getMyTags () {
      this.http6Get(API.getMyTags).then((data) => {
        this.myTags = data.data
      })
    },
    preprocess (files) {
      let uses = []
      if (this.uses) {
        for (let use of this.uses) {
          uses.push(use.id)
        }
      }

      let selects = []
      if (this.selects) {
        for (let select of this.selects) {
          selects.push(select.id)
        }
      }

      _.forEach(files, (file) => {
        if (uses.length > 0 && _.includes(uses, file.id)) {
          file.use = true
        }

        if (selects.length > 0 && _.includes(selects, file.id)) {
          file.selected = true
        }
      })
      return files
    },
    getFiles () {
      this.loading = true
      this.http6Get(API.getFiles, {
        params: this.queryParams
      }).then((data) => {
        this.files = this.preprocess(data.data)
        this.pagination = data.meta.pagination
        this.loading = false
      })
    },
    getUseFileInfo (file) {
      return {
        id: file.id,
        name: file.name,
        width: file.width,
        height: file.height,
        url: this.config.base_url + '/' + file.src,
        thumb: this.config.base_url + '/' + file.thumb_src,
        ref_url: file.src,
        ref_thumb: file.thumb_src,
        ref: file
      }
    },
    selectFile (index, file) {
      // 文件选择
      if (this.fileManage !== true) {
        if (this.config.limit === 1) {
          this.uses.push(this.getUseFileInfo(file))
          this.useConfirm()
        } else {
          if (file.use) {
            this.$set(file, 'use', false)
            let index = _.findIndex(this.uses, function (o) {
              return o.id === file.id
            })

            if (index !== -1) {
              this.uses.splice(index, 1)
            }
          } else {
            if (this.config.limit !== 0 && this.uses.length >= this.config.limit) {
              this.$message.warning(`最多选择 ${this.config.limit} 个文件`)
            } else {
              this.$set(file, 'use', true)
              this.uses.push(this.getUseFileInfo(file))
              //                console.log(this.uses)
            }
          }
        }
      } else {
        if (file.selected) {
          this.$set(file, 'selected', false)
          let index = _.findIndex(this.selects, function (o) {
            return o.id === file.id
          })
          if (index !== -1) {
            this.selects.splice(index, 1)
          }
        } else {
          this.$set(file, 'selected', true)
          this.selects.push(this.getUseFileInfo(file))
        }
        // file = {...file, 'selected': file.selected !== true}
        // this.files.splice(index, 1, file)
      }
    },
    deleteFile (clear = false) {
      let ids = []
      for (let file of this.files) {
        if (clear === true) {
          ids.push(file.id)
        } else if (file.selected === true) {
          ids.push(file.id)
        }
      }
      if (ids.length <= 0) {
        this.$message.warning(`请先选择文件`)
      } else {
        this.http6Delete(API.deleteFiles, { data: { 'ids': ids } }).then(() => {
          this.getFiles()
        })

        /* this.$confirm(`确定要删除${ids.length}个文件?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText : '取消',
            type             : 'warning',
            customClass: 'filemanager-box-custom'
          }).then(() => {
            this.http6Delete(API.deleteFiles, {data: {'ids': ids}}).then(() => {
              this.getFiles()
            })
          }) */
      }
    },
    updateFileTag (tagId) {
      let ids = []
      for (let file of this.selects) {
        ids.push(file.id)
      }
      if (ids.length <= 0) {
        this.$message.warning(`请先选择文件`)
      }

      this.http6Put(API.updateFiles, { autoTip: false, data: { 'ids': ids, data: { 'tag_id': tagId } } }).then(() => {
        this.getFiles()
        this.$message({
          type: 'success',
          message: '更新分组成功!'
        })
      })
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    createTag () {
      let title = this.$refs['newTagInput'].value
      if (!title) {
        this.$alert('分组名称不能为空！', '提醒', {
          confirmButtonText: '确定',
          callback: action => {
            this.$refs['newTagInput'].focus()
          }
        })
      } else {
        this.http6Post(API.createTag, { title: title }).then(() => {
          /* this.filePost(API.createTag(), {data: {title: title}}).then(() => { */
          this.getMyTags()
          this.$refs['newTagInput'].value = ''
        })
      }
    },
    updateTag (event, index, id) {
      this.http6Put(API.updateTag(id), { 'title': event.target.value }).then(() => {
        this.getMyTags()
      })
    },
    deleteTag (id) {
      this.http6Delete(API.deleteTag(id)).then(() => {
        this.getMyTags()
      })
      /* this.$confirm('确定要删除此分组?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText : '取消',
          type             : 'warning',
        }).then(() => {
          this.http6Delete(API.deleteTag(id)).then(() => {
            this.getMyTags()
          })
        }) */
    },
    focusTag (index, tag) {
      this.$set(tag, 'edit', true)
      // tag = {...tag, 'edit': true};
      // this.myTags.splice(index, 1, tag)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    handleProgress (event, file, fileList) {
      // console.log(event)
      let uid = file.uid; let percent = parseInt(event.percent)
      let index = _.findIndex(this.progresses, function (o) {
        return o.uid === uid
      })
      let progress = {
        uid: file.uid,
        percent: percent
      }
      if (index !== -1) {
        this.progresses.splice(index, 1, progress)
      } else {
        this.progresses.push(progress)
      }
    },
    handleErrors (response, file, fileList) {
      let uid = file.uid
      let index = _.findIndex(this.progresses, function (o) {
        return o.uid === uid
      })
      if (index !== -1) {
        this.progresses.splice(index, 1)
      }
      // let data = file.response.data
      let msg = ''
      try {
        let err = JSON.parse(response.toString().replace('Error: ', ''))
        msg = err.message
      } catch (e) {
        msg = '文件上传异常，请重试'
      }
      this.$message.error(msg)
    },
    handleSuccess (response, file, fileList) {
      let uid = file.uid
      let index = _.findIndex(this.progresses, function (o) {
        return o.uid === uid
      })
      if (index !== -1) {
        this.progresses.splice(index, 1)
      }
      let data = response.data
      if (data) {
        this.files.unshift(data)
      }
    },
    handleBeforeUpload (file) {
      let type = file.type; let size = file.size

      // let ext = _.split(type, '/', 2)[1]
      let rule = this.uploadRule
      // 检查文件类型
      // let extCheck = _.indexOf(rule.ext_list, ext)
      // console.log(type, ext, rule.ext_list)
      /* if (extCheck === -1) {
        this.$message.error(` 不允许上传 ${type} 类型文件，请重新选择文件！`)
        return false
      } */
      // 检查文件大小
      if (size > rule.max_size) {
        this.$message.error(` 超出文件大小限制， ${type} 文件最大支持 ${rule.max_size_label}！`)
        return false
      }

      return true
    },
    handleChange (file, fileList) {
      // console.log('change')
    },
    fileUrl (file) {
      let src = (file.thumb_src ? file.thumb_src : file.src)
      return src ? this.config.base_url + '/' + src : ''
    },
    _canPreview (file) {
      let rule = this.findUploadRule(file.type)
      return rule.can_preview
    },
    filePreview (index, file) {
      if (!this._canPreview(file)) return
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.$set(file, 'preview', true)
      }, 500)
    },
    filePreviewEnd (index, file) {
      if (!this._canPreview(file)) return
      clearTimeout(timer)
      this.$set(file, 'preview', false)
    },
    defaultFileUrl (file) {
      let url = ''; let rule = this.findUploadRule(file.type)
      if (rule) {
        url = 'this.onerror=null;this.src="' + this.config.base_url + '/sys/asset/default/' + rule.type + '.png"'
      }
      return url
    },

    // 外部接口
    reset (data) {
      // 清空选中
      _.forEach(this.uses, (value, key) => {
        this.$set(value.ref, 'use', false)
      })

      let defaultData = {
        visible: false,
        searchKey: '',
        searchExt: '',
        uses: [],
        selects: [],
        sysTagVisible: false
      }
      defaultData = { ...defaultData, ...data }
      for (let k in defaultData) {
        this[k] = defaultData[k]
      }
    },
    open (options) {
      let opt = { typeId: 0, visible: true, config: this.config }
      if (options) {
        _.forEach(options, (value, key) => {
          if (key === 'type') {
            let rule = this.findUploadRule(options['type'])
            if (rule) {
              opt['typeId'] = rule.id
            }
          } else if (key === 'library') {
            opt['sysTagVisible'] = value
          } else if (_.includes(_.keys(this.config.callbacks), key)) {
            opt['config']['callbacks'][key] = value
          } else {
            opt['config'] = { ...opt['config'], [key]: value }
          }
        })
      }
      if (debug) console.log(options, opt)
      this.reset(opt)
    },
    useConfirm (multi = false) {
      let uses = null
      if (multi === true) {
        uses = [this.uses]
      } else {
        uses = [this.uses[0]]
      }
      this.visible = false
      this.actionCallback('success', uses)
      this.actionCallback('complete')
    },
    close () {
      this.visible = false
      this.actionCallback('cancel')
      this.actionCallback('complete')
    },
    actionCallback (act, params = null) {
      let callbacks = this.config.callbacks
      if (!!act && !!callbacks[act] && _.isFunction(callbacks[act])) {
        callbacks[act].apply(this, params)
      }
    }
  }
}
</script>

<style lang="scss">
@import "./filemanager";
</style>
