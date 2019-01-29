<template>
    <div class="creatmodel">
        <div>
            <div class="common-tit2">
                <h4>内容管理<b> - 新建内容</b></h4>
            </div>
        </div>
        <!--新建内容-->
        <el-form ref="contForm" :model="contForm" label-width="100px" size="small">
            <el-form-item label="栏目" prop="category_id" class="columnChooseBox">
                <el-select v-model="contForm.category_id" placeholder="请选择" @change="columnChoose(contForm.category_id)">
                    <el-option
                            v-for="item in equalColumn"
                            :key="item.id"
                            :label="item.title"
                            :data-contentId="item.archive_model_id"
                            :value="item.id"
                            :disabled="!item.disabled || item.parent">
                        <span :class="item.level">
                            {{ item.title }}
                        </span>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-tabs v-model="tabName" class="checkbox-com" type="border-card">
                <el-tab-pane name="routine" :key="contForm.category_id" label="常规">
                    <el-form ref="model_fields" :model="model_fields" label-width="120px" size="small">
                        <div v-for="item in contModel">
                            <el-form-item
                                    :prop="item.required == true ? item.name : ''"
                                    :rules="[
                                        {required: item.required, message: '请填写'+item.label, trigger: 'blur'},
                                        { min: item.type.min, max: item.type.max , message: '长度在 '+item.type.min+'到'+item.type.max +'个字符', trigger: 'blur' }
                                    ]"
                                    :label="item.label"

                                    v-if="item.type.name === 'text'">
                                <el-input type="text" v-model="model_fields[item.name]" :maxlength="item.type.max" :minlength="item.type.min" class="w380" :placeholder="'请输入' + item.label"></el-input>
                            </el-form-item>
                            <el-form-item
                                    :prop="item.required == true ? item.name : ''"
                                    :rules="[
                                        {required: item.required, message: '请填写'+item.label, trigger: 'blur'},
                                    ]"
                                    :label="item.label"
                                    v-if="item.type.name === 'src'">
                                <bg-img-box class="mr20 w120 h120" :path="[model_fields, item.name]"></bg-img-box>
                            </el-form-item>
                            <el-form-item
                                    :prop="item.required == true ? item.name : ''"
                                    :rules="[
                                        {required: item.required, message: '请选择'+item.label, trigger: 'blur'},
                                         { min: item.type.min, message: '请填写至少'+item.type.min+'个字符', trigger: 'blur' }
                                    ]"
                                    :label="item.label"
                                    v-if="item.type.name === 'textarea'">
                                <el-input type="textarea"
                                          :autosize="{ minRows: 6, maxRows: 8}"
                                          :placeholder="'请输入' + item.label"
                                          v-model="model_fields[item.name]"
                                          :minlength="item.type.min"
                                          class="w380">
                                </el-input>
                            </el-form-item>
                            <!--简单文本编辑器-->
                            <!--<el-form-item-->
                            <!--:prop="item.required == true ?  : ''"-->
                            <!--:label="item.label"-->
                            <!--v-if="item.type.name === 'shtml'">-->
                            <!--<el-input  type="textarea"-->
                            <!--:autosize="{ minRows: 6, maxRows: 8}"-->
                            <!--placeholder="我是简单文本编辑器"-->
                            <!--v-model="model_fields[item.name]"-->
                            <!--class="w380">-->
                            <!--</el-input>-->
                            <!--</el-form-item>-->
                            <!--{{model_fields[item.name]}}-->
                            <el-form-item :prop="item.required==true ? item.name : ''" :label="item.label" v-if="item.type.name === 'html'"
                                          :rules="[
                                                {required: item.required, message: '请填写'+item.label ,trigger: 'change' },
                                            ]">
                                <ueditor-wrap v-model="model_fields[item.name]" :placeholder="'请输入' + item.label"></ueditor-wrap>
                            </el-form-item>
                        </div>
                    </el-form>
                </el-tab-pane>

                <el-tab-pane name="photo" label="相册" v-if="contForm.imageable">
                    <div class="d-flex justify-between">
                        <div class="d-flex align-center">
                            <el-checkbox v-model="checkedAll" class="lh34" :indeterminate="isIndeterminate" @change="selectAllFunc">全选</el-checkbox>
                            <el-button class="text-primary-com bd-none" @click="alertConfirm(0)">删除</el-button>
                            <el-button type="primary-com" class="bdr0" @click="uploadSelfImage()">上传图片</el-button>
                            <span class="text-gray-l40">（最多上传200张图片）</span>
                        </div>
                        <div>
                            <span class="mr10">排序：</span>
                            <el-select v-model="value" placeholder="请选择" @change="sortRank()">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>

                    <div class="photoListBox d-flex flex-wrap">
                        <div v-if="photoInfoList.length === 0" class="w100p lh50 text-center">
                            <p> 暂无数据</p>
                            <!--<p v-if="contForm.id"> 暂无数据</p>-->
                            <!--<p v-else> 请先保存文章，再上传图片</p>-->
                        </div>
                        <div v-else class="w230 mr20 ml20 mt30 po-re bd-gray" v-for="item in photoInfoList">
                            <!--{{photoInfoList}}-->
                            <el-checkbox v-model="item.chooseOneState" :key="item.id" class="lh34" style="right:0;top:0;" @change="selectOneFunc">
                                <div class="h130 bg-cover" :style="item.path | filterImgObj"></div>
                            </el-checkbox>
                            <div class="d-flex justify-between h38 pl10 pr10" style="border-bottom:1px solid #e7e7e7;">
                                <div>
                                    <p class="lh32">
                                        {{item.description}}
                                        <el-tooltip effect="light" content="修改描述" placement="top">
                                            <span class="iconfont iconfont-edit1 ml10 c-pointer text-gray-l40" @click="modifyRank($event,item.id)"></span>
                                        </el-tooltip>
                                    </p>
                                    <el-input style="display: none" maxlength="12" v-model="item.description" @blur="modelNameEdit($event)"></el-input>
                                </div>
                                <div>
                                    <p class="lh32">
                                        <el-tooltip effect="light" content="修改排序" placement="top">
                                            <span class="iconfont iconfont-clear c-pointer text-gray-l40" @click="modifyRank($event,item.id)"></span>
                                        </el-tooltip>
                                        {{item.sort_rank}}
                                    </p>
                                    <el-input class="sort-rank" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="3" type="text" v-model="item.sort_rank" @blur="modelNameEdit($event)" style="display:none"></el-input>
                                </div>

                            </div>
                            <div class="d-flex justify-between h32 pl10 pr10 lh32 bg-gray-l64">
                                <p class="text-gray-l30 fz12">{{item.upload_at}}</p>
                                <p>
                                    <el-tooltip effect="light" content="更换图片" placement="top">
                                        <span class="iconfont iconfont-edit1 c-pointer text-gray-l40 fz14 text-weight" @click="changeImage(item)"></span>
                                    </el-tooltip>
                                    <el-tooltip effect="light" content="删除相册" placement="top">
                                        <span class="iconfont iconfont-close c-pointer text-gray-l40 ml10 fz14" @click="alertConfirm(1,item.id)""></span>
                                        <!--@click="delPhoto(item.id)"-->
                                    </el-tooltip>

                                </p>
                            </div>
                        </div>
                    </div>
                    <pagination v-if="photoInfoList.length !== 0" :meta="meta" :refresh-list="getphotoList"></pagination>
                </el-tab-pane>
                <el-tab-pane name="senior" label="高级">
                    <div class="bb-gray mb30 lh36 text-black-d20"><b>其他</b></div>

                    <el-form label-width="120px" size="small">

                        <el-form-item
                                label="伪点击量："
                                :rules="[
                              { type: 'number', message: '伪点击量必须为数值', trigger: 'blur'}
                         ]">
                            <el-input v-model.number="contForm.fake_click" class="w380"></el-input>
                        </el-form-item>

                        <el-form-item label="标签：">
                            <div class="manage-cont dib">
                                <el-badge class="item flag-item po-re mr10" v-for="item in labelTitleList" :key="item.id" @mouseover.native="item.lable = true" @mouseout.native="item.lable = false">
                                    <el-button class="fz12 pt6 pb6 pr12 pl12 bdr20">{{item.title}}</el-button>
                                    <span style="top:-2px;right:-4px;" class="icon w14 h14 bsr po-ab text-weight text-center lh11 c-pointer bg-danger text-white" @click="delLabelItem($event,item.name)">×</span>
                                </el-badge>
                            </div>
                            <el-button v-if="addLabelBtnShow" style="top:4px;" type="primary-com pt6 pb6 pr12 pl12 bdr20 po-re" @click="addLabelBtn($event)">点击添加标签</el-button>
                            <el-select
                                    v-if="addSelectShow"
                                    v-model="chooseLabelId"
                                    filterable
                                    allow-create
                                    @change="addLabel"
                                    default-first-option
                                    ref="selectFocus"
                                    placeholder="请选择"
                                    class="el-select-com w120 bdr20">
                                <el-option
                                        v-for="item in labelList"
                                        :key="item.id"
                                        :label="item.title"
                                        :value="item.name"
                                        :disabled="item.disabled"
                                        class="el-select-dropdown__item-com">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <div class="bb-gray mb30 lh36 text-black-d20"><b>SEO优化</b></div>
                        <el-form-item label="SEO页面标题：">
                            <el-input type="text" v-model="contForm.seo_title" class="w380"></el-input>
                        </el-form-item>
                        <el-form-item label="SEO关键词：">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 6, maxRows: 8}"
                                    placeholder="请输入关键词"
                                    v-model="contForm.seo_keywords"
                                    class="w380">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="SEO描述：">
                            <el-input type="textarea"
                                      :autosize="{ minRows: 6, maxRows: 8}"
                                      placeholder="请输入描述内容"
                                      v-model="contForm.seo_description"
                                      class="w380">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
            <el-button class="ml100 w380 mt46 mb56" type="primary-com" @click="addArt('model_fields')">保存</el-button>
        </el-form>

    </div>

</template>

<script>
// 图片管理器
import $ from 'jquery'
import API from './API'
import bgImgBox from '../../../common/bg-img-box.vue'
import config from '../../../../config'
import createWbEditor from '../../../pc/common/utils/createWbEditor'
import pagination from '../../../common/pagination.vue'

export default {
  data () {
    return {
      model_fields: {
        domains: [{
          value: ''
        }],
        email: ''
      },

      dialogSetMap: [
        { title: '批量删除相册', label: '<span class="iconfont iconfont-warning fz24"></span>此操作将删除选中的相册，是否继续？' },
        { title: '删除相册', label: '<span class="iconfont iconfont-warning fz24"></span>此操作将删除此相册，是否继续？' }
      ],

      isIndeterminate: false,
      simpleFrameVisible: false,
      imgObj: {
        path: ''
      },
      meta: null,
      delPhotoId: '',
      changePhotoId: '',
      batchDelVisible: false, // 批量删除相册弹框
      addLabelBtnShow: true,
      addSelectShow: false,
      modelList: [], // 内容模型列表
      equalColumn: null, // 栏目信息
      contModel: {},
      contForm: {
        flags: [],
        model_fields: {},
        imageable: ''
      },
      model_fields: {},
      labelList: [], // 标签列表
      chooseLabelId: '',
      labelTitleList: null,
      tabName: 'routine',
      // 相册相关
      checkedAll: false, // 全选
      options: [{
        value: 'TIME_ASC',
        label: '时间顺序'
      }, {
        value: 'TIME_DESC',
        label: '时间倒序'
      }, {
        value: 'SORT_RANK_ASC',
        label: '权重正序'
      }, {
        value: 'SORT_RANK_DESC',
        label: '权重倒序'
      }],
      value: 'SORT_RANK_ASC',
      photoUrlList: [],
      photoInfoList: [],
      photobatchIdList: [],
      archiveModelId: '', // 选中的栏目绑定的内容模型id
      createPhotoInfo: []// 创建内容相册信息
    }
  },
  created () {
    this.getColumnList()// 获取栏目列表
    this.getLabelList()// 获取标签列表
  },
  methods: {
    // 获取标签列表
    getLabelList () {
      this.http5Get(API.getLabel).then(res => this.labelList = res.collection)
    },

    // 获取栏目列表
    getColumnList () {
      this.http5Get(API.columnList
      ).then(res => {
        let arr = res.collection
        arr.sort((a, b) => {
          if (a.parent_id > b.parent_id) {
            return 1
          } else if (a.parent_id < b.parent_id) {
            return -1
          } else {
            if (a.sort_rank > b.sort_rank) {
              return 1
            } else {
              return -1
            }
          }
        })
        for (let i = arr.length; i--;) {
          if (arr[i].parent_id > 0) {
            let obj = arr.pop()
            arr.forEach(item => {
              if (item.id === obj.parent_id) {
                item.children = item.children || []
                item.children.unshift(obj)
              }
            })
          }
        }
        let arr2 = []
        arr.forEach(list => {
          list.level = ''
          if (list.children) {
            list.parent = true
          } else {
            list.parent = false
          }
          arr2.push(list)
          if (list.children) {
            list.children.forEach(item => {
              item.level = 'pl20'
              if (item.children) {
                item.parent = true
              } else {
                item.parent = false
              }
              arr2.push(item)
              if (item.children) {
                item.children.forEach(pro => {
                  pro.level = 'pl40'
                  if (pro.children) {
                    pro.parent = true
                  } else {
                    pro.parent = false
                  }
                  arr2.push(pro)
                })
              }
            })
          }
        })
        this.equalColumn = arr2
        if (this.$route.params.id && this.$route.params.id !== '1') { // 修改
          this.getphotoList()// 获取相册列表
          this.getContetById()
        } else { // 新建
          if (this.equalColumn[0].children === undefined) {
            this.contForm.category_id = this.equalColumn[0].id
          } else {
            this.contForm.category_id = this.equalColumn[0].children[0].id
          }

          this.equalColumn.forEach(item => {
            item.disabled = true
            if (item.id === this.contForm.category_id) {
              this.http5Get(API.archiveItem + item.archive_model_id).then(res => {
                this.contModel = res.data.fields_structure.fields
                this.contForm.imageable = res.data.imageable
              })
            }
          })
          this.contForm.images = []
        }
      })
    },

    // 选择栏目，通过栏目获取内容模型id
    columnChoose (columnId) {
      this.equalColumn.forEach(item => {
        (item.id === columnId) && (this.archiveModelId = item.archive_model_id)
      })

      // 根据ID获取文章模型
      this.http5Get(API.archiveItem + this.archiveModelId).then(res => {
        this.contModel = res.data.fields_structure.fields
        this.contForm.imageable = res.data.imageable
      })
    },
    selectOneFunc (value, obj) { // 单选
      let i = 0
      this.photoInfoList.forEach(item => item.chooseOneState ? i++ : i)
      if (i === (obj.page_size || this.photoInfoList.length || 10)) {
        this.checkedAll = true
        this.isIndeterminate = false
      } else if (i > 0 && i < (obj.page_size || 10)) {
        this.isIndeterminate = true
      } else {
        this.checkedAll = false
        this.isIndeterminate = false
      }
    },
    selectAllFunc (val) { // 全选
      this.isIndeterminate = false
      if (val) {
        this.photoInfoList.forEach(item => item.chooseOneState = true)
      } else {
        this.photoInfoList.forEach(item => item.chooseOneState = false)
      }
    },

    getphotoList (obj) { // 获取初始相册列表
      obj = obj || {}
      let tempPage = { page_size: obj.page_size || 10, page_num: obj.page_num || 1 }
      this.http5Get(API.getphotoList + this.$route.params.id + '/image?sort_type=' + this.value, { params: tempPage }).then(res => {
        this.photoInfoList = []
        res.collection.forEach(item => item.chooseOneState = false)
        this.photoInfoList = res.collection
        this.meta = res.meta
      })
    },

    // 简单弹框--批量删除相册/删除单个相册
    alertConfirm (index, val, name) {
      if (index === 0) {
        this.photobatchIdList = []
        this.photoInfoList.forEach(item => item.chooseOneState ? this.photobatchIdList.push(item.id) : '')
        if (this.photobatchIdList.length === 0) {
          this.$message({
            message: '请至少选择一条相册内容，然后进行删除',
            type: 'warning'
          })
          return
        }
      }
      this.$confirm(this.dialogSetMap[index].label, this.dialogSetMap[index].title, {
        dangerouslyUseHTMLString: true
      }).then(() => {
        if (index === 0) {
          this.isIndeterminate = false
          this.batchDelVisible = false
          this.photobatchIdList = []
          this.photoInfoList.forEach(item => item.chooseOneState ? this.photobatchIdList.push(item.id) : '')
          this.http5Delete(API.addPhoto + '?ids=' + this.photobatchIdList.toString()).then(res => this.getphotoList())
        } else if (index === 1) {
          this.simpleFrameVisible = false
          this.http5Delete(API.addPhoto + '?ids=' + val).then(res => this.getphotoList())
        }
      })
    },

    // 修改排序按钮
    modifyRank (e, id) {
      e.target.parentNode.style.cssText = 'display:none'
      e.target.parentNode.nextSibling.style.cssText = 'display:block'
      e.target.parentNode.nextSibling.childNodes[1].focus()
      this.changePhotoId = id
    },

    // 确认修改排序/确认修改相册描述
    modelNameEdit (e) {
      this.photoInfoList.forEach(item => {
        if (this.changePhotoId === item.id) {
          if (item.description[0] === undefined) {
            this.$message.error('相册名称不能为空')
            e.target.parentNode.childNodes[1].focus()
          } else {
            e.target.parentNode.style.cssText = 'display:none'
            e.target.parentNode.previousSibling.style.cssText = 'display:block'

            if (this.$route.params.id && this.$route.params.id !== '1') { // 修改
              this.http5Put(API.addPhoto + '/' + this.changePhotoId, {
                'path': item.path,
                'description': item.description,
                'sort_rank': item.sort_rank
              }).then(res => {
                this.getphotoList()
              })
            } else { // 新建
              console.log(this.createPhotoInfo)
            }
          }
        }
      })

      //        this.photoInfoList.forEach(item => {
      //          if (this.changePhotoId === item.id) {
      //            if (item.description[0] === undefined) {
      //              this.$message.error('相册名称不能为空');
      //              e.target.parentNode.childNodes[1].focus()
      //              return
      //            }
      //            else {
      //              e.target.parentNode.style.cssText = 'display:none'
      //              e.target.parentNode.previousSibling.style.cssText = 'display:block'
      //
      //              this.http5Put(API.addPhoto + '/' + this.changePhotoId, {
      //                "path"       : item.path,
      //                "description": item.description,
      //                'sort_rank'  : item.sort_rank,
      //              }).then(res => {
      //                this.getphotoList()
      //              })
      //            }
      //          }
      //        })
    },

    // 修改相册图片
    changeImage (a) {
      this.$filemanager.open({
        limit: 1,
        type: 'image',
        success: obj => {
          this.http5Put(API.addPhoto + '/' + a.id, {
            'path': obj.ref_url,
            'description': a.description,
            'sort_rank': a.sort_rank
          }).then(res => {
            this.getphotoList()
          })
        }
      })
    },

    // 排序筛选
    sortRank () {
      this.getphotoList()
    },

    // 修改内容，通过ID获取模型字段及内容
    getContetById () {
      this.http5Get(API.addArticle + this.$route.params.id).then(res => {
        this.model_fields = res.data.model_fields
        this.contModel = this.contForm.archive_Model
        this.modelList.forEach(item => item.id === res.data.archive_model_id ? this.contModel = item.fields_structure.fields : '')
        this.http5Get(API.contModelList).then(result => {
          result.collection.forEach(item => {
            if (res.data.archive_model_id === item.id) {
              res.data.imageable = item.imageable
              this.contModel = item.fields_structure.fields
              this.contForm = res.data
              this.equalColumn.forEach(item => {
                this.contForm.archive_model_id === item.archive_model_id ? item.disabled = true : item.disabled = false
              })
            }
          })
        })
      })
    },

    // 点击添加标签
    addLabelBtn (e) {
      this.addLabelBtnShow = false
      this.addSelectShow = true
      this.$nextTick(() => this.$refs.selectFocus.focus())
    },

    // 上传图片
    uploadSelfImage () {
      this.$filemanager.open({
        limit: 0,
        type: 'image',
        success: obj => {
          if (this.$route.params.id && this.$route.params.id !== '1') { // 修改
            this.photoUrlList = []
            obj.forEach(item => this.photoUrlList.push(item.ref_url))
            this.http5Post(API.addPhoto, {
              'path': this.photoUrlList,
              'archive_id': this.$route.params.id
            }).then(res => {
              res.collection.forEach(item => {
                console.log(item)
                this.photoInfoList.push(item)
                this.getphotoList()
              })

              console.log(res)
            })
          } else { // 新建
            console.log('新建')
            delete this.contForm.category_name
            this.contForm.model_fields = $.extend(true, this.contForm.model_fields, this.model_fields)
            this.contForm.images = []
            obj.forEach(item => this.contForm.images.push(item.ref_url))

            var i = 0

            console.log(this.contForm.images)
            this.photoInfoList = []
            this.createPhotoInfo = []
            this.contForm.images.forEach(item => {
              item = { path: item, description: '内容图片', sort_rank: '0' }
              this.createPhotoInfo.push(item)
            })
            this.photoInfoList = this.createPhotoInfo
          }
        }
      })
    },

    // 确认添加文章
    addArt (formName) {
      delete this.contForm.category_name
      this.contForm.model_fields = $.extend(true, this.contForm.model_fields, this.model_fields)

      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$route.params.id && this.$route.params.id !== '1') { // 修改
            this.http5Put(API.addArticle + this.$route.params.id, this.contForm
            ).then(res => {
              // 添加成功跳转至列表页
              this.$router.push({
                path: `/category/content/manager/index`
              })
            })
          } else { // 新建内容
            this.http5Post(API.addArticle, this.contForm).then(res => {
              // 添加成功跳转至列表页
              this.$router.push({
                path: `/category/content/manager/index`
              })
            })
          }
        } else {
          this.tabName = 'routine'
          console.log('error submit!!')
          return false
        }
      })
    },

    // 添加标签
    addLabel () {
      let btn = false

      this.addLabelBtnShow = true
      this.addSelectShow = false

      for (let i = 0; i < this.contForm.flags.length; i++) {
        this.contForm.flags[i] === this.chooseLabelId ? 'return' : ''
      }
      this.labelList.forEach(item => {
        if (item.name === this.chooseLabelId) {
          item['disabled'] = true
          btn = true
        }
      })
      if (!btn) { // 没有则添加到数据库
        this.http5Post(API.delLable, { title: this.chooseLabelId }).then(res => {
          this.contForm.flags.push(res.data.name)
          this.getLabelList()// 获取标签列表
        })
      } else {
        this.contForm.flags.push(this.chooseLabelId)
      }
    },

    // 点击删除标签
    delLabelItem (e, name) {
      this.labelList.forEach(item => {
        if (item.name === name) {
          item['disabled'] = false
        }
      })
      this.contForm.flags.forEach(item => {
        name === item ? this.contForm.flags = this.contForm.flags.filter(x => x !== item) : this.contForm.flags
      })
    }
  },
  watch: {
    'contForm.flags': function (data) {
      this.labelTitleList = []
      if (this.labelList) {
        this.labelList.forEach(item => {
          data.forEach(list => item.name === list ? this.labelTitleList.push(item) : '')
        })
        this.labelList.forEach(item => {
          this.contForm.flags.forEach(list => {
            if (item.name === list) {
              item['disabled'] = true
            }
          })
        })
      }
    },
    labelList: function (data) {
      this.labelTitleList = []
      if (this.labelList) {
        this.labelList.forEach(item => {
          this.contForm.flags.forEach(list => item.name === list ? this.labelTitleList.push(item) : '')
        })
      }
    }
  },
  components: {
    bgImgBox,
    pagination
  }
}
</script>

<style lang="scss">
    @import '../../../../styles/variables';

    .manage-cont {
        .flag-item {
            &:hover {
                span.icon {
                    display: block;
                }
            }
        }

    }

    .el-select-dropdown__item-com.selected {
        color: #c0c4cc!important;
        font-weight: normal!important;
    }
    .creatmodel {
        .el-tabs--border-card {
            box-shadow: none !important;
        }
    }

    .photoListBox {
        .el-checkbox {
            width: 100%;
            height: 130px;
        }
        .el-checkbox__input {
            position: absolute;
            top: 0;
            right: 0;
        }
        .el-checkbox__label {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .el-checkbox__inner {
            width: 25px;
            border: 1px solid #e7e7e7 !important;
            height: 25px;
            border-top: 0 !important;
            border-right: 0 !important;
            border-radius: 0;
            &::after {
                top: 3px;
                left: 9px;
                width: 6px;
                height: 12px;
            }
        }
    }
</style>
