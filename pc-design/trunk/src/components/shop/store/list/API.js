export default {
  add: 'store', // 创建门店
  get: 'store', // 查看门店
  put: 'store', // 修改门店
  page: 'store/paginator', // 门店分页
  orderIndex: 'store/orderIndex', // 设置门店排序
  setStatus: 'store/status', // 设置门店状态
  tagsAll: 'store-tag/all', // 所有标签
  setTags: 'store/tag', // 打标签
  storeConfig: 'store/config', // 门店设置
  smsScene: 'store/sms-scene', // 门店短信通知
  pickup: 'store/pickup', // 自提设置
  deliverySet: 'store/delivery', // 配送设置
  deliveryStatus: 'store/delivery/status', // 商家配送总开启
  plazaWarehouse: 'plaza/warehouse/paginator', // 地址库列表
  warehouse: 'plaza/warehouse', // 地址库添加
  defaultDeliver: 'plaza/warehouse/default-deliver', // 设置默认发货地址
  defaultReturn: 'plaza/warehouse/default-return', // 设置默认退货地址
  singleTemplate: 'store/freight-template/single' // 运费模板列表

}
