export default {
  animalFormat(code) {
    const animalObj = {
      1: '鼠',
      2: '牛',
      3: '虎',
      4: '兔',
      5: '龙',
      6: '蛇',
      7: '马',
      8: '羊',
      9: '猴',
      10: '鸡',
      11: '狗',
      12: '猪',
    }
    return animalObj[code]
  },
}