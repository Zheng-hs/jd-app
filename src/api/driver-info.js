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
  listDriver: {
    url: '/app/driver/listDriver',
=======
  getDriverInfo: {
    url: '/app/managerInformation/listManagerDrivers',
>>>>>>> ccbc751fca169edec7169baf32e03b002d50c317
    method: 'post'
  }
}

const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
