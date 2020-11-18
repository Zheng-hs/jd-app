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
  listCart: {
    url: '/app/cart/listCart',
    method: 'post'
  },
  updateCart: {
    url: '/app/cart/updateCart',
    method: 'post'
  },
  deleteCart: {
    url: '/app/cart/deleteCart',
    method: 'post'
  },
  saveOrder: {
    url: '/app/clientOrder/saveOrder',
=======
  getShopData: {
    url: '/app/clientShopCart/listShoppingCarts',
    method: 'post'
  },
  addOrder: {
    url: '/app/clientOrder/addOrder',
    method: 'post'
  },
  deleteShopCar: {
    url: '/app/clientShopCart/deleteShoppingCart',
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    method: 'post'
  }
}

const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
