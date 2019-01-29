<template>
  <div class="wrapper design-module-wrapper pc-category-box">
    <div class="right">
      <div class="category-tree-box">
        <div class="d-flex">
          <h3>拓扑图</h3>
          <router-link target="_blank" to="/category" class="text-primary c-pointer ml15">
            <i class="iconfont iconfont-edit1 fz12 mr3"></i>栏目编辑
          </router-link>
        </div>
        <div v-for="grade1 in categoryList" class="level1">
          <!-- 一级 -->
          <p @click="chooseBindCategory(grade1)">
            <i v-if="isShowGradeIco(grade1)" :class="[gradeIcoStatus(grade1)]"></i>
            <span :class="gradeSpanStatus(grade1)">{{grade1.title}}</span>
          </p>
          <div v-if="grade1.children" v-for="grade2 in grade1.children" class="level2">
            <!-- 二级 -->
            <p @click="chooseBindCategory(grade2)">
              <i v-if="isShowGradeIco(grade2)" :class="[gradeIcoStatus(grade2)]"></i>
              <span :class="gradeSpanStatus(grade2)">{{grade2.title}}</span>
            </p>
            <div v-if="grade2.children" v-for="grade3 in grade2.children" class="level3">
              <!-- 三级 -->
              <p @click="chooseBindCategory(grade3)">
                <i v-if="isShowGradeIco(grade3)" :class="[gradeIcoStatus(grade3)]"></i>
                <span :class="gradeSpanStatus(grade3)">{{grade3.title}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="module-box">
        <div class="module-tit d-flex align-center justify-between mb20">
          <h3>{{isEditing ? '模板绑定' : '模板列表'}}</h3>
          <span v-if="!isEditing" @click="editCategory(true)" title="模板与栏目绑定" class="iconfont iconfont-bangding"></span>
          <el-button v-else @click="editCategory(false)" type="primary" size="mini">确定</el-button>
        </div>

        <sortList :options="{data:pageList, axis:'y', handle: 'l', beforeStart: sortBeforeStart, stop:sortStop}">
          <div
            v-for="(item, key) in pageList"
            @click="selectPage(item)"
            :class="{
                              'on': bindingModulePage.index===item.index || !isEditing && curModulePage===item,
                              'disabled': isEditing && item.page_type==='HOME_PAGE'
                            }"
            class="module-list">
            <i :class="typeMap[item.page_type].icon" :title="typeMap[item.page_type].label" class="iconfont l"></i>
            <input @keydown.enter="modifyModuleName($event, item)" v-model="item.title" :disabled="isEditing" type="text">
            <div v-if="!isEditing && curModulePage!==item" class="r">
              <em @click="goToPage(item)" class="iconfont iconfont-edit1"></em>
              <!--<em v-if="item.page_type!=='HOME_PAGE'" class="iconfont iconfont-copy"></em>-->
              <em @click="deletePage(item)" v-if="item.page_type!=='HOME_PAGE'" class="iconfont iconfont-delete"></em>
            </div>
          </div>
        </sortList>


        <div v-if="!isEditing && pageList.length <= 20" class="add-page">
          <p>新建</p>
          <ul>
            <li v-for="(item, key) in typeMap" v-if="item.allowCreate" @click="createPageName(key)"><i :class="item.icon" class="iconfont"></i>{{item.label}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import API from '../../pc&mobile/API'
  import { dataSite, dataPage, dataCache, dataMethods } from '../../pc&mobile/common'
  import sortList from '../../common/sortList.vue'
  import { createEmptySiteData, createEmptyPageData, createColumnPageData, createContentPageData } from './create-module-data'

  const {createModule, clearConfigAssist} = dataMethods

  export default {
    mounted() {
      this.getPageList()
      this.getAllContentList()
    },
    data() {
      return {
        pageList            : [],
        dataCache,
        categoryList        : dataCache.categoryList,
        categoryListEqual   : dataCache.categoryListEqual,
        categoryListEqualObj: dataCache.categoryListEqualObj,
        isEditing           : false,
        bindingModulePage   : {}, //绑定操作时所选定的模板页
        dataPage            : dataPage.get(),
        bindColumn          : dataSite.get('bindColumn'),
        bindContent         : dataSite.get('bindContent'),
        bindSingle          : dataSite.get('bindSingle'),
        typeMap             : {
          'HOME_PAGE'   : {icon: 'iconfont-home', label: '首页'},
          'COLUMN_PAGE' : {icon: 'iconfont-list', label: '栏目页', bindName: 'bindColumn', allowCreate: true, create: createColumnPageData},
          'CONTENT_PAGE': {icon: 'iconfont-page', label: '内容页', bindName: 'bindContent', allowCreate: true, create: createContentPageData},
          'SINGLE_PAGE' : {icon: 'iconfont-page2', label: '单页', bindName: 'bindSingle', allowCreate: true, create: createEmptyPageData},
        },
      }
    },
    computed  : {
      // 选取 [bindColumn / bindContent / bindSingle] 中的一个
      bindWhich() {
        return this[this.typeMap[this.bindingModulePage.page_type].bindName]
      },
      // 当前装修页面
      curModulePage() {
        let item = this.pageList.filter(item => item.index === this.$route.params.pageId)[0] || {}

        if (item.page_type === 'COLUMN_PAGE' || item.page_type === 'CONTENT_PAGE') {
          //针对非绑定操作中栏目页和内容页模板需要展示左侧栏目选中状态
          item.needShowBind = true
        }
        return item
      },
      // 当前装修页面锁绑定的栏目
      curModulePageBind() {
        if (this.curModulePage) {
          return this[this.typeMap[this.curModulePage.page_type].bindName][this.curModulePage.index]
        }
        else {
          return []
        }
      },
      // 把 [bindColumn / bindContent / bindSingle] 中的二维数组扁平化为一维数组
      selectedTypeBindArr() {
        return Object.keys(this.bindWhich).reduce((sum, item) => sum.concat(this.bindWhich[item]), [])
      },
      // 获取绑定操作时所选定的模板页对应的绑定 index
      selectedModuleBindArr() {
        return this.bindWhich[this.bindingModulePage.index] || []
      },
    },
    methods   : {
      /* 是否显示栏目列表前的复选框 */
      isShowGradeIco(grade) {
        let page = this.bindingModulePage,
            type = page.page_type
        /**
         * 1.模板页被选中 && 栏目有子节点
         *    1.栏目下有文章 且 将绑定栏目或内容模板页
         */
        if (page.index && !grade.hasChildren) {
          if (grade.archive_num !== 0 && (type === 'COLUMN_PAGE' || type === 'CONTENT_PAGE')) {
            return true
          }
          else if (type === 'SINGLE_PAGE') {
            return true
          }
        }
        return false
      },
      /* 栏目列表前的复选框状态 */
      gradeIcoStatus(grade) {
        return this.selectedModuleBindArr.indexOf(grade.index) !== -1 ? 'on2' : this.selectedTypeBindArr.indexOf(grade.index) !== -1 ? 'on1' : ''
      },
      /* 栏目列表中span标签状态 */
      gradeSpanStatus(grade) {
        return {'on': !this.isEditing && this.curModulePage.needShowBind && this.curModulePageBind.indexOf(grade.index) !== -1, 'no-data': grade.archive_num === 0}
      },
      sortBeforeStart() {
        return !this.isEditing
      },
      sortStop(e, u) {
        if (u.startIndex !== u.stopIndex) {
          this.httpPut(API.moduleListSort, {
            indexes: this.pageList.map(item => item.index),
          }).then(() => {
            this.getPageList()
          })
        }
      },
      /* 获取所有新闻内容 */
      getAllContentList() {
        this.http5Get(API.allContentList).then(res => {
          this.dataCache.allContentList = res.collection
        })
      },
      /* 获取页面列表 */
      getPageList() {
        this.httpGet(API.moduleListByIndex(this.$route.params.siteId)).then(res => {
          this.pageList = res.data.decoration_template_pages
          this.clearSiteBind(this.bindColumn, 'COLUMN_PAGE')
          this.clearSiteBind(this.bindContent, 'CONTENT_PAGE')
          this.clearSiteBind(this.bindSingle, 'SINGLE_PAGE')
          this.mountPageIndex2Category()
          this.dataCache.pageList = this.pageList
        })
      },
      /* 整理栏目与模板的绑定状态 */
      clearSiteBind(bindList, page_type) {
        /**
         *  ====模板与栏目绑定数据整理====
         * 1.同步站点对象内 bindWhich 与 pageList 数量
         * 2.去重
         * 3.同步站点对象内 bindWhich 与 categoryList 数量
         */
        let temp                = [],
            //bindListKeys    = Object.keys(bindList).map(item => +item),
            bindListKeys        = Object.keys(bindList),
            pageListIndexes     = this.pageList.map(item => item.index),
            pageListTypes       = this.pageList.map(item => item.page_type),
            categoryListIndexes = this.categoryListEqual.map(item => item.index)


        //新增的模板页需要在 bind** 中挂载
        this.pageList.forEach(item => {
          if (item.page_type === page_type && bindListKeys.indexOf(item.index) === -1) {
            this.$set(bindList, item.index, [])
          }
        })


        //不存在的模板页需要在 bind** 中移除
        //Object.keys(bindList).map(item => +item).forEach(item => {
        Object.keys(bindList).forEach(item => {
          let index = pageListIndexes.indexOf(item)

          if (index === -1) {
            this.$delete(bindList, item)
          }
          else if (pageListTypes[index] !== page_type) {
            this.$delete(bindList, item)
          }
        })


        //去重
        //Object.keys(bindList).map(item => +item).forEach(item => {
        Object.keys(bindList).forEach(item => {
          let tempArr  = [],
              tempItem = bindList[item] || []

          for (let i = tempItem.length - 1; i >= 0; --i) {
            if (temp.indexOf(tempItem[i]) === -1) {
              temp.push(tempItem[i])
              tempArr.push(tempItem[i])
            }
          }
          bindList[item] = tempArr
        })

        //不存在的栏目 或 SINGLE_PAGE存在 / COLUMN_PAGE、CONTENT_PAGE不存在 子集 需要在 bind** 子项中移除
        Object.keys(bindList).forEach(item => {
          let tempItem = bindList[item]
          for (let j = tempItem.length - 1; j >= 0; --j) {
            if (categoryListIndexes.indexOf(tempItem[j]) === -1) {
              tempItem.splice(j, 1)
            }
            else if (this.categoryListEqualObj[tempItem[j]].hasChildren) {
              tempItem.splice(j, 1)
            }
            /*else if ((page_type === 'COLUMN_PAGE' || page_type === 'CONTENT_PAGE') && this.categoryListEqualObj[tempItem[j]].hasChildren) {
              tempItem.splice(j, 1)
            }
            else if (page_type === 'SINGLE_PAGE' && !this.categoryListEqualObj[tempItem[j]].hasChildren) {
              tempItem.splice(j, 1)
            }*/
          }

          //console.log(bindList)
        })
      },
      /* 临时挂载装修页面到栏目上，以方便预览时点击跳转 */
      mountPageIndex2Category() {
        this.categoryListEqual.forEach(item => {
          for (let i in this.bindColumn) {
            if (this.bindColumn[i].join().indexOf(item.index) !== -1) {
              this.$set(item, 'bindColumnId', i)
              break
            }
          }
          for (let i in this.bindContent) {
            if (this.bindContent[i].join().indexOf(item.index) !== -1) {
              this.$set(item, 'bindContentId', i)
              break
            }
          }
          for (let i in this.bindSingle) {
            if (this.bindSingle[i].join().indexOf(item.index) !== -1) {
              this.$set(item, 'bindSingleId', i)
              break
            }
          }
        })
      },
      /* 创建站点 临时 */
      createSite() {
        this.httpPost(API.createSite, {
          title               : '测试站点',
          decoration_type     : 'PC_SITE',
          available_channel   : ['BAIDU_APPLET', 'WECHAT_APPLET'],
          template_belong_type: 'CUSTOMER',
          structure           : createEmptySiteData,
        }).then(res => {
          //console.log(res)
        })
      },
      /* 创建模板页面前起名 */
      createPageName(page_type) {
        this.$prompt(`请给"${this.typeMap[page_type].label}"起一个名称`, '提示', {
          inputPattern     : /.{2,}/,
          inputErrorMessage: '至少2个字符长度',
        }).then(({value}) => {
          let structure = this.typeMap[page_type].create()

          structure.config = structure.config.map(item => createModule(item))
          clearConfigAssist(structure.config)

          this.createPage({
            page_type,
            title: value,
            structure,
          })
        })
      },
      /* 创建模板页面 */
      createPage(obj) {
        this.httpPost(API.createPageByIndex(this.$route.params.siteId), obj).then(res => {
          this.$set(this[this.typeMap[obj.page_type].bindName], res.data.id, [])
          dataSite.saveServerData(this.$route.params.siteId)
          this.getPageList()
        })
      },
      /* 删除模板页面 */
      deletePage(obj) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {type: 'warning',}).then(() => {
          this.httpDelete(API.getPageInfoByIndex(obj.index)).then(() => {
            this.$delete(this[this.typeMap[obj.page_type].bindName], obj.index)
            dataSite.saveServerData(this.$route.params.siteId)
            this.getPageList()
          })
        })
      },
      /* 获取模板页面数据 */
      goToPage(obj) {
        if (this.dataCache.isLoadingData) {
          return
        }

        let query       = {},
            page_type   = obj.page_type,
            typeMapItem = this.typeMap[page_type]

        //栏目与内容模板至少需要绑定一个栏目
        if ((page_type === 'COLUMN_PAGE' || page_type === 'CONTENT_PAGE') && !this[typeMapItem.bindName][obj.index].length) {
          this.$confirm('该模板还未绑定栏目数据，请先进行数据绑定', '提示', {
            type: 'warning',
          }).then(() => {
            this.editCategory(true)
            this.selectPage(obj)
          })
        }
        else {
          if (page_type === 'COLUMN_PAGE' || page_type === 'CONTENT_PAGE') {
            let ids = this[typeMapItem.bindName][obj.index]

            //绑定的cid需要有数据才能进入
            for (let i = 0, len = ids.length; i < len; ++i) {
              if (this.categoryListEqualObj[ids[i]].archive_num) {
                query.cid = ids[i]

                if (page_type === 'CONTENT_PAGE') {
                  let allContentList = this.dataCache.allContentList

                  for (let i = 0, len = allContentList.length; i < len; ++i) {
                    if (allContentList[i].category_index === query.cid) {
                      query.pid = allContentList[i].index
                      break
                    }
                  }
                }
                this.reloadData(obj.index, query)
                return
              }
            }
            this.$message.error('没有找到含有数据的栏目，请先添加数据！')
            return
          }
          this.reloadData(obj.index)
        }
      },
      reloadData(id, query) {
        this.dataCache.isLoadingData = true
        dataPage.getServerData(id).then(() => this.$router.push({name: 'mobileEdit', params: {pageId: id}, query})).finally(() => this.dataCache.isLoadingData = false)
        /*Promise.all([
          dataSite.saveServerData(this.$route.params.siteId),
          dataPage.saveServerData(this.$route.params.pageId),
        ]).finally(() => {
          dataPage.getServerData(id).then(() => this.$router.push({name: 'pcEdit', params: {pageId: id}, query})).finally(() => this.dataCache.isLoadingData = false)
        })*/
      },
      /* 修改模板页面名称 */
      modifyModuleName(e, item) {
        this.httpPut(API.modifyPageTitleByIndex(item.index, item.title)).then(() => this.getPageList())
        $(e.target).blur()
      },
      /* 编辑与退出模板页面关联 */
      editCategory(bool) {
        if (bool) {

        }
        else {
          this.bindingModulePage = {}
          dataSite.saveServerData(this.$route.params.siteId)
        }

        this.isEditing = bool
      },
      /* 选择模板页面准备去绑定 */
      selectPage(item) {
        if (!this.isEditing || item.page_type === 'HOME_PAGE') {
          return
        }

        this.bindingModulePage = item
      },
      /* 选择模板页面绑定到对应栏目 */
      chooseBindCategory(grade) {

        // 如果是非绑定状态下选中，则为切换模板数据
        if (!this.bindingModulePage.index) {
          if (this.curModulePage.needShowBind && this.curModulePageBind.indexOf(grade.index) !== -1) {
            if (grade.archive_num === 0) {
              this.$message.error('该栏目下没有数据！')
              return
            }

            let query     = {},
                page_type = this.dataPage.page_type

            if (page_type === 'COLUMN_PAGE') {
              query.cid = grade.index
            }
            else if (page_type === 'CONTENT_PAGE') {
              let allContentList = this.dataCache.allContentList

              query.cid = grade.index

              for (let i = 0, len = allContentList.length; i < len; ++i) {
                if (allContentList[i].category_index === grade.index) {
                  query.pid = allContentList[i].index
                  break
                }
              }
            }
            this.$router.push({params: {siteId: this.$route.params.siteId, pageId: this.$route.params.pageId}, query})
          }
          return
        }

        // 不显示ICO图标意为不能栏目绑定
        if (!this.isShowGradeIco(grade)) {
          return
        }

        let index1 = this.selectedTypeBindArr.indexOf(grade.index),
            index2 = this.selectedModuleBindArr.indexOf(grade.index)


        /**
         * 以栏目页 [bindColumn] 为例
         *
         * 1.如果整个bindColumn中没有该栏目
         *    1.如果选定模板页中已有绑定但绑定模型与现有添加的不一致 但并不是单页模板页
         *        提示用户模型数据不一致
         *    2.如果是单页
         *        添加栏目
         * 2.如果选定模板页中有该栏目
         *    删除该栏目
         * 3.如果其它模板页中有该栏目 等价于整个bindColumn中有 但 选定的模板页中没有
         *    提示用户已绑定其它栏目，是否替换
         */
        if (index1 === -1) {
          if (
            this.selectedModuleBindArr.length
            && this.categoryListEqualObj[this.selectedModuleBindArr[0]].archive_model_id !== grade.archive_model_id
            && (this.bindingModulePage.page_type === 'COLUMN_PAGE' || this.bindingModulePage.page_type === 'CONTENT_PAGE')
          ) {
            this.$confirm(`该栏目模型与之前栏目模型不一致,绑定后可能会导致数据渲染不完整， 是否继续?`, '提示', {type: 'warning',}).then(() => {
              this.selectedModuleBindArr.push(grade.index)
              this.mountPageIndex2Category()
            })
          }
          else {
            this.selectedModuleBindArr.push(grade.index)
            this.mountPageIndex2Category()
          }
        }
        else if (index2 !== -1) {
          this.selectedModuleBindArr.splice(index2, 1)
        }
        else {
          this.$confirm(`该栏目已绑有 ${this.typeMap[this.bindingModulePage.page_type].label} 模板, 是否替换?`, '提示', {type: 'warning',}).then(() => {
            let state = false, temp, i, j

            for (i in this.bindWhich) {
              temp = this.bindWhich[i]
              for (j = temp.length; j >= 0; j--) {
                if (temp[j] === grade.index) {
                  state = true
                  temp.splice(j, 1)
                  break
                }
              }
              if (state) {
                break
              }
            }
            this.selectedModuleBindArr.push(grade.index)
            this.mountPageIndex2Category()
          })
        }
      },
    },
    components: {
      sortList,
    },
  }
</script>

<style lang="scss">
  @import "../../../styles/variables";

  .pc-category-box {
    position: relative;
    height: calc(100% - #{$design-pc-top-height});
    width: $design-module-wrapper-width + $design-module-left-width*2 - 10;

    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 5px;
      height: 100%;
      background-color: $primary;
      //content:"";
    }

    .right {
      display: flex;
      height: 100%;

      h3 {
        //margin-bottom: 10px;
      }

      .module-tit {
        .iconfont {
          cursor: pointer;
          &:hover {
            color: $primary;
          }
        }
      }
    }

    .module-box {
      position: relative;
      width: 65%;
      flex-shrink: 1;
      background-color: #f3f3f3;
      padding: 10px;

      .module-list {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 6px 10px 6px 15px;
        background-color: $white;
        border-radius: 5px;
        border: 1px $white solid;
        cursor: pointer;

        &.disabled {
          cursor: default;

          .radio {
            display: none !important;
          }
          i, input {
            color: #ccc;
            cursor: default;
          }
        }

        .radio {
          display: none;
          position: absolute;
          left: -6px;
          top: 12px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px #ccc solid;
          background-color: $white;

          &.on {
            border: 2px $primary solid;
          }
        }

        i {
          margin-right: 5px;
          font-weight: 800;
          color: #555;
        }

        input {
          flex-grow: 1;
          border: 1px transparent solid;
          background-color: transparent;
          cursor: pointer;

          &:focus {
            border-bottom: 1px $primary solid;
            background-color: $white;
            cursor: text;
          }
        }

        .r {
          margin-left: 5px;
          opacity: 0;
          em {
            margin-left: 5px;
            font-size: 13px;
            cursor: pointer;

            &:hover {
              color: $primary;
            }
          }
        }

        &:not(.disabled):hover {
          border: 1px lighten($primary, 15%) solid;
          background-color: lighten($primary, 30%);

        }
        &:hover {
          .radio {
            display: block;
          }

          .r {
            opacity: 1;
          }
        }
        &.on {
          border: 1px lighten($primary, 15%) solid;
          background-color: lighten($primary, 25%);
        }

      }

      .add-page {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;

        ul {
          height: 0;
          opacity: 0;
          overfloe: hidden;
          box-shadow: 0 0 10px #dcdcdc;
          border-radius: 2px;
          li {
            opacity: 0;
            background-color: $white;
            transform: perspective(100px) translateZ(-24px);
          }
        }
        &:hover {
          ul {
            animation: flipInX 0.4s forwards ease-out;
            transition-delay: 1s;
            animation-duration: 0.4s;
            /*display:block;*/
            li {
              opacity: 1;
              transition: all .3s;
              transform: perspective(100px) translateZ(0);
              &:nth-child(4) {
                transition-delay: .08s;
              }
              &:nth-child(3) {
                transition-delay: .18s;
              }
              &:nth-child(2) {
                transition-delay: .24s;
              }
              &:nth-child(1) {
                transition-delay: .3s;
              }
            }
          }
        }
        @keyframes flipInX {
          100% {
            opacity: 1;
            height: auto;
          }
        }

        p {
          text-align: center;
          background-color: $primary;
          border-radius: 3px;
          height: 30px;
          line-height: 30px;
          color: $white;
          cursor: default;
        }

        ul {
          position: absolute;
          left: 0;
          bottom: 30px;
          width: 100%;
          background-color: $white;
          padding-bottom: 2px;

          li {
            padding: 8px;
            border-bottom: 1px #eee solid;
            cursor: pointer;
            text-align: center;

            i {
              margin-right: 10px;
              font-weight: 800;
              color: #888;
            }

            &:hover {
              border-color: $primary;
              color: $primary;

              i {
                color: $primary;
              }
            }
          }
        }
      }
    }
  }

  .category-tree-box {
    padding-left: 20px;
    line-height: 2.2;
    width: 45%;
    flex-shrink: 1;
    background: $white;

    .level1, .level2, .level3 {
      position: relative;
      padding-left: 20px;
      margin-bottom: 1px;

      &:before {
        position: absolute;
        left: 3px;
        width: 1px;
        height: 100%;
        top: 0;
        border-left: 1px #aaa dotted;
        content: "";
      }
      p {
        position: relative;
        display: flex;
        align-items: center;

        &:before {
          position: absolute;
          left: -16px;
          width: 12px;
          height: 1px;
          top: 50%;
          border-bottom: 1px #aaa dotted;
          content: "";
        }

        i {
          position: relative;
          display: inline-block;
          margin-right: 5px;
          width: 15px;
          height: 15px;
          border: 1px $gray-line solid;
          vertical-align: middle;
          transition: all .2s;
          cursor: pointer;

          &:after {
            position: absolute;
            content: "";
          }

          &.on1 {
            &:after {
              left: 3px;
              top: 3px;
              right: 3px;
              bottom: 3px;
              background-color: $gray-line;
              transition: all .15s ease-out;
            }
          }

          &.on2 {
            border-color: $primary;
            &:after {
              left: 2px;
              top: 2px;
              right: 2px;
              bottom: 2px;
              background-color: $primary;
            }
          }
        }

        input {
          margin-right: 5px;
        }

        span {
          /*overflow: hidden;
          display: block;*/
          white-space: nowrap;
          text-overflow: ellipsis;
          cursor: pointer;

          &.on {
            color: darken($primary, 15%);
            //font-weight: 600;

            &.no-data {
              color: lighten($primary, 20%);
            }
          }
        }
      }

      &:nth-last-child(1) {
        &:before {
          height: 0;
        }

        > p {
          &:after {
            position: absolute;
            top: 0;
            left: -17px;
            width: 1px;
            height: 50%;
            border-left: 1px #aaa dotted;
            content: "";
          }
        }
      }
    }
  }
</style>
