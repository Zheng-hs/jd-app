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
  getOrder: {
    url: '/app/clientOrder/getOrder',
    method: 'post'
  },
  saveCart: {
    url: '/app/cart/saveCart',
    method: 'post'
  },
  saveOrder: {
    url: '/app/clientOrder/saveOrder',
    method: 'post'
  },
  getOrders: {
    url: '/app/bossOrder/getOrder',
    method: 'post'
  },
  updateBossOrder: {
    url: '/app/bossOrder/updateBossOrder',
    method: 'post'
  }

=======
  getClientDetail: {
    url: '/app/clientOrder/listOrderDeepen',
    method: 'post'
  },
  getShopDetail: {
    url: '/app/managerOrder/listManagerOrderDeepen',
    method: 'post'
  }
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
}

const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
