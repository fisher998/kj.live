import md5 from 'js-md5'

// export function buildSign(params, appSecurity) {
//   let str = ''
//   str += appSecurity
//   for (var i in params) {
//     str += i + '&'
//   }
//   //去掉最后一位"&"符
//   str = str.slice(0,str.length-1)
//   str += appSecurity
//   let sign = md5(str);
//   return sign;
// }
// // 对象转数组
// export function objToArray(obj, key) {
//   var arr = []
//   for (var i in key) {
//     arr[key[i]] = obj[key[i]] //  属性
//   }
//   return arr
// }

export function paramsFormat(params) {
  var keysArr = Object.keys(params).sort();
  var signStr = '';
  keysArr.forEach((item, index) => {
    signStr += `${item}=${encodeURIComponent(params[item])}`
  })
  // console.log(signStr)
  signStr = md5(signStr + '123456789')
  // console.log(signStr)
  return signStr;
}