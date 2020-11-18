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
  getGoodsClassify: {
    url: '/app/homeGoods/getGoodsClassify',
    method: 'post'
  },
  listClassifyGoods: {
    url: '/app/homeGoods/listClassifyGoods',
    method: 'post'
  },
  getGoods: {
    url: '/app/homeGoods/getGoods',
=======
  getClassify: {
    url: '/app/clientGoods/listOneGoodsClassify',
    method: 'post'
  },
  getTwoClassify: {
    url: '/app/clientGoods/listGetClassGoods',
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    method: 'post'
  }
}

const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
