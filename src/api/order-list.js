import req from '../fetch/index.js'

const config = {
<<<<<<< HEAD
  // portExport: {
  //   url: '/api/media/stimulate/exportExcel',
  //   method: 'post',
  //   fileConfig: {
  //     type: 'file',
  //     fileName: '销售激励报表'
  //   }
  // },
  listOrder: {
    url: '/app/clientOrder/listOrder',
    method: 'post'
  },
  updateOrderState: {
    url: '/app/clientOrder/updateOrderState',
    method: 'post'
  },
  listOrders: {
    url: '/app/bossOrder/listOrder',
=======
  getOrderList: {
    url: '/app/clientOrder/listOrder',
    method: 'post'
  },
  getShopOrderList: {
    url: '/app/managerOrder/listManagerOrders',
    method: 'post'
  },
  changeOrderStatus: {
    url: '/app/clientOrder/updateOrderState',
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    method: 'post'
  }
}

const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
