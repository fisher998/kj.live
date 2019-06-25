<template>
  <div class="coltombola">
    <template v-for="(lottery, index) in lotterys">
      <div class="cjdlt" :key="index" @click="jumpKjHistory(lottery.id, lottery.name, lottery.url)">
        <div class="top flex-start">
          <div class="f15 pd-r">{{ lottery.name }}</div>
          <div class="f12 little-word pd-r">{{ lottery.batch_no + '期' }}</div>
          <div class="f12 little-word">{{ lottery.opentime }}</div>
        </div>
        <div class="center f15 flex-start w_white">
          <div v-for="(code, index) in codesFormat(lottery.codes)" :key="index" class="bg_red bg_mg circle">{{ code }}</div>
          <div v-for="(code, index) in codesFormat(lottery.codes, 'blue')" class="bg_blue bg_mg circle" :key="'b' + index">{{ lottery.id === '11' ? animalFormat(code) : code }}</div>
        </div>
      </div>
    </template>
    
  </div>
</template>

<script>
export default {
  name: 'coltombola',
  props: {
    lotterys: {
      type: [Object],
    },
    type: {
      type: [String]
    }
  },
  data() {
    return {

    }
  },
  filters: {
    
  },
  methods: {
    codesFormat(codes, type = 'red') {
      var codesArr = codes.split('|')
      var codesRed = codesArr[0].split(',')
      var codesBlue = codesArr[1] ? codesArr[1].split(',') : []
      // console.log(codesBlue)
      return type === 'red' ? codesRed : codesBlue
    },
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
    // 跳转历史开奖
    jumpKjHistory(id, name, code) {
      this.$router.push({
        name: 'kjhistory',
        query: {
          id: id,
          code: code,
          name: name,
          isGP: this.$props.type === 'GP' ? 'true' : 'false',
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.coltombola {
  // padding: 0 0.3rem;
  background-color: #f5f5f5;
  &>div {
    // padding: 0.08rem 0.3rem;
  }
}
.bg_mg {
  margin: 0.1rem 0.06rem;
}
.bg_red {
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}
.bg_blue {
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}
.pd-r {
  padding-right: 0.3rem;
}
.top {
  line-height: 0.44rem;
}
.btn {
  border: none;
  outline: none;
  padding: 0.06rem 0.2rem;
  margin-right: 0.2rem;
}
.ssq,.cjdlt {
  background: #ffffff;
  

}
.pd_r7 {
  padding-right: 0.14rem;
}
</style>
