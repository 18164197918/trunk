|                                                                                                                               |z-index| note                     |
|:------------------------------------------------------------------------------------------------------------------------------|:-----:|:-------------------------|
| right-box                                                                                                                     | 10100 | 右侧编辑栏
| module-cloned                                                                                                                 | 10000 | 从左侧add-box中克隆虚拟节点样式
| select-range-mask                                                                                                             | 10000 | 鼠标范围选择时遮罩
| option-box                                                                                                                    | 10000 | 选项工具栏
| content-box  user-module & container-wrapper & dragging                                                                       | 10000 | 编辑区内,容器拖拽中状态
| content-box  user-module & container-wrapper &> .container &:before,&:after                                                   | 1000  | 容器内模块超出 container两侧边界时提示
| content-box  user-module & common-module-dragging                                                                             | 1000  | 针对编辑区内,模块拖拽时 fixed 定位
| content-box  user-module  tool-bar                                                                                            | 1000  | 针对编辑区内,简单文本编辑器
| content-box-head,content-box-foot &:after                                                                                     | 1000  | 头部和底部提示信息
| module-assist  group-handle                                                                                                   | 100   | 组合切换提示
| swiper-container-3d  swiper-slide-shadow-bottom,swiper-slide-shadow-left,swiper-slide-shadow-right,swiper-slide-shadow-top    | 10    | 轮播3d效果投影 
| pannel-btn > ico                                                                                                              | 4     | 左侧边栏盒子侧导航按钮
| left-box                                                                                                                      | 3     | 左侧边栏盒子
| content-box-head                                                                                                              | 3     | 模板头部
| content-box-foot                                                                                                              | 3     | 模板底部
| module-assist                                                                                                                 | 3     | 容器工具箱
| class^="pc-module-"                                                                                                           | 2     | 除了容器模块的其它模块

| swiper-container-flip  inner-gap                                                                                              | 1     | 轮播flip效果
| swiper-container-cube  inner-gap                                                                                              | 1     | 轮播cube效果
| content-box  user-module & container-wrapper &> module-assist                                                                 | 1     | 针对编辑区内,针对容器
| swiper-cube-shadow                                                                                                            | 0     | 轮播cube效果底部投影
| pc-module-group,pc-module-list,pc-module-menu,pc-module-page & edit-sub-module &:after                                        | -1    | 高级组件内普通模块,需要在选中后才能编辑                                           | 0     |







