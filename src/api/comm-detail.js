<<<<<<< HEAD
=======

>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
import req from '../fetch/index.js'

const config = {
  // portExport: {
  //   url: '/api/media/stimulate/exportExcel',
  //   method: 'post',
  //   fileConfig: {
  //     type: 'file',
  //     fileName: '销售激励报表'
  //   }
  // },
<<<<<<< HEAD
  getGoods: {
    url: '/app/homeGoods/getGoods',
    method: 'post'
  },
  saveCart: {
    url: '/app/cart/saveCart',
    method: 'post'
  },
  saveOrder: {
    url: '/app/clientOrder/saveOrder',
    method: 'post'
  }

=======
  getDetail: {
    url: '/app/clientGoods/getGoods',
    method: 'post'
  },
  payNow: {
    url: '/app/clientOrder/addOrder',
    method: 'post'
  },
  addShopCar: {
    url: '/app/clientShopCart/addShoppingCart',
    method: 'post'
  },
  // 查询商品评价接口
  getCommEvaluates: {
    url: '/app/clientGoods/listGoodsEvaluates',
    method: 'post'
  }
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
}

const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
