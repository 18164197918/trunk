import $ from 'jquery'

export const DRAG_HANDLE      = '.drag-handle'
export const RESIZABLE_HANDLE = '.resizable-handle'

export const LEFT_BOX              = '.left-box'
export const PANNEL_BTN            = '.pannel-btn'
export const DESIGN_TERMINAL       = '.design-pc'
export const LEFT_MENU_ICON        = '.left-menu-icon'
export const RIGHT_BOX             = '.right-box'
export const DESIGN_MODULE_WRAPPER = 'design-module-wrapper'

export const CONTENT_BOX       = '.content-box'
export const CONTENT_BOX_HEAD  = '.content-box-head'
export const CONTENT_BOX_INNER = '.content-box-inner'
export const CONTENT_BOX_FOOT  = '.content-box-foot'
export const CONTAINER_WRAPPER = '.container-wrapper'
export const COL_MARK          = '.col-mark'
export const USER_MODULE       = '.user-module'
export const WRAPPER_BTN       = '.wrapper-btn'

export const COL_MARK_DRAGGING_ON = 'col-mark-dragging-on'
export const BODY_ADDING_MODULE   = 'dragging adding-module'

export const MODULE_CONTAINER_NAME         = 'module-container'
export const CONTAINER_WRAPPER_DRAGGING_ON = 'container-wrapper-dragging-on'
export const BODY_MOVING_MODULE            = 'dragging moving-module'
export const BODY_MOVING_MENU              = 'dragging moving-menu'
export const BODY_SORT_LIST                = 'dragging '
export const BODY_RESIZING_MODULE          = 'dragging resizing-module'
export const BODY_MOVE_RASTER              = 'dragging  move-raster'

export const BODY_SELECT_RANGE         = 'dragging selecting-range'
export const CONTAINER_DRAGGING_MODULE = 'dragging'
export const COMMON_DRAGGING_MODULE    = 'common-module-dragging'
export const COMMON_RESIZING_MODULE    = 'common-module-resizing'
export const NOT_ON_CONTAINER          = 'not-on-container'
export const TERMINAL_EDIT              = function($route){
  if($route.name === 'pcEdit'){
    return 'body-pc-edit'
  }else if($route.name === 'mobileEdit'){
    return 'body-mobile-edit'
  }else{
    throw new Error('$route name is error')
  }
}

//列表排序
export const SORT_LIST_ITEM = 'sort-list-item'                                     //当前项移动类名
export const SORT_LIST_UL   = '.sort-list-ul'                                    //拖拽盒子
export const DRAGGING       = 'dragging'

export const $BODY                  = $('body')
export const $DOC                   = $(document)
export const $HEAD                   = $('head')
export const $MODULE_CLONED         = $('<div class="module-cloned"></div>')
export const $SELECT_RANGE_MASK     = $('<div class="select-range-mask"></div>')
export const $SORTABLE_PLACE_HOLDER = $('<div class="sortable-place-holder"></div>')
export const $PLACE_HOLDER          = $('<div></div>')

export const $QQ_MAP_SCRIPT         = $('<script  id="qq-map"  src="http://map.qq.com/api/js?v=2.exp&callback=init&key=H6XBZ-HL66I-UJRGN-5YQMK-PR3S6-THFLL" type="text/javascript"></script>')

