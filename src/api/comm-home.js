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
  listHomeSlideshow: {
    url: '/app/clientHome/listHomeSlideshow',
    method: 'post'
  },
  listHomeHotGoods: {
    url: '/app/clientHome/listHomeHotGoods',
=======
  getSliderPicList: {
    url: '/app/clientHome/listRotationCharHome',
    method: 'post'
  },
  getHotComm: {
    url: '/app/clientHome/listHotGoods',
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    method: 'post'
  }
}

const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
