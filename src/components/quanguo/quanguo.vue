<template>
  <div class="quanguo">
    <tombola v-if="lotterys" :type="1" :lotterys="lotterys" />
  </div>
</template>

<script>
import { A00001, A00004, A00005 } from '@/api/interface.js'
import Tombola from '@/components/tombola/tombola.vue'
export default {
  name: 'quanguo',
  components: {
    Tombola
  },
  data() {
    return {
      lotterys: false,
    }
  },
  created() {
    this.firstLoad();

    // A00002().then(res => {
    //   console.log('--------------------res--------------------')
    //   console.log(res)
    // })
    // A00003().then(res => {
    //   console.log('--------------------res--------------------')
    //   console.log(res)
    // })
  },
  methods: {
    firstLoad() {
      A00001().then(res => {
        var tempArr = []
        tempArr = res.data.data ? [...res.data.data.f.lotteryData, ...res.data.data.t.lotteryData] : false;
        this.lotterys = tempArr.sort((a, b) => (b.sale - a.sale))
      })
      // A00004({code: 'ssq'}).then(res => {
        // var tempArr = []
        // tempArr = res.data.data ? [...res.data.data.f.lotteryData, ...res.data.data.t.lotteryData] : false;
        // this.lotterys = tempArr.sort((a, b) => (b.sale - a.sale))
      // })
      // A00005({code: 'ssq', batchno: '2019071'}).then(res => {
        // var tempArr = []
        // tempArr = res.data.data ? [...res.data.data.f.lotteryData, ...res.data.data.t.lotteryData] : false;
        // this.lotterys = tempArr.sort((a, b) => (b.sale - a.sale))
      // })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
