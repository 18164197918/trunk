export default {
  columnList        : 'manager/customer/category/list',//获取栏目列表
  contentList       : id => `manager/customer/archive/paginator/category/${id}`,//获取栏目下的内容列表
  contentListByIndex: id => `manager/customer/archive/paginator/category/${id}/index`,//获取栏目下的内容列表
  content           : id => `manager/customer/archive/${id}`,//获取某篇内容详情
  contentByIndex    : id => `manager/customer/archive/${id}/index`,//获取某篇内容详情
  moduleList        : id => `manager/decoration/template/${id}/pages`,//获取装修模板列表
  moduleListByIndex : id => `manager/decoration/template/${id}/index/pages`,//获取装修模板列表
  moduleListSort    : `manager/decoration/template/page/sort`,//装修模板列表排序保存
  allContentList    : `manager/customer/archive/detail/list`,

  createSite            : 'manager/decoration/template',
  createPage            : id => `manager/decoration/template/${id}/page`,
  createPageByIndex     : id => `manager/decoration/template/${id}/index/page`,
  getPageInfo           : id => `manager/decoration/template/page/${id}`,
  getPageInfoByIndex    : id => `manager/decoration/template/page/${id}/index`,
  getSiteInfo           : id => `manager/decoration/template/${id}`,
  getSiteInfoByIndex    : id => `manager/decoration/template/${id}/index`,
  modifyPageTitle       : (id, title) => `manager/decoration/template/page/${id}/title?title=${title}`,
  modifyPageTitleByIndex: (id, title) => `manager/decoration/template/page/${id}/index/title?title=${title}`,
}
