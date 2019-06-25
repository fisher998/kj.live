<template>
  <div class="difang">
    <div style="padding:9px;background:#f5f5f5;text-align:left;text-indent:5px;line-height:16px;"><span style="float:left;width:2px;height:15px;background-color:#F32B1B"></span>地方彩种</div>
    
    <van-collapse v-model="activeNames">
      <template v-for="(DF, key, index) in DFArr">
        <van-collapse-item :key="index" class="collapse-item" :title="DF.name" :name="index + 1">
          <!-- 地方彩种组件 -->
          <coltombola :lotterys="DF.lotteryData" :type="'DF'" />
        </van-collapse-item>
      </template>
      

      <!-- <van-collapse-item class="collapse-item" :title="'浙江'" name="2">
        地方彩种组件
        <coltombola />
      </van-collapse-item>
      <van-collapse-item class="collapse-item" :title="'河北'" name="3">
        地方彩种组件
        <coltombola />
      </van-collapse-item> -->
    </van-collapse>
  </div>
</template>

<script>
import { A00002 } from '@/api/interface.js'
import Coltombola from '@/components/tombola/coltombola.vue'
export default {
  name: 'difang',
  props: {

  },
  components: {
    Coltombola,
  },
  data() {
    return {
      activeNames:['1'], // 关联van-collapse-item中的name
      DFArr: false,
    }
  },
  created() {
    this.firstLoad()
  },
  methods: {
    firstLoad() {
      A00002().then(res => {
        this.DFArr = res.data.data
        // console.log(res.data.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse-item {
  text-align: left;
}
</style>
