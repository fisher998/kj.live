<template>
  <div class="gaopin">
    <div style="padding:9px;background:#f5f5f5;text-align:left;text-indent:5px;line-height:16px;"><span style="float:left;width:2px;height:15px;background-color:#F32B1B"></span>高频彩种</div>
    
    <van-collapse v-model="activeNames">
      <template v-for="(GP, key, index) in GPArr">
        <van-collapse-item :key="index" class="collapse-item" :title="GP.name" :name="index + 1">
          <!-- 高频彩种组件 -->
          <coltombola :lotterys="GP.lotteryData" :type="'GP'" />
        </van-collapse-item>
      </template>
      

      <!-- <van-collapse-item class="collapse-item" :title="'浙江'" name="2">
        高频彩种组件
        <coltombola />
      </van-collapse-item>
      <van-collapse-item class="collapse-item" :title="'河北'" name="3">
        高频彩种组件
        <coltombola />
      </van-collapse-item> -->
    </van-collapse>
  </div>
</template>

<script>
import { A00003 } from '@/api/interface.js'
import Coltombola from '@/components/tombola/coltombola.vue'
export default {
  name: 'gaopin',
  props: {

  },
  components: {
    Coltombola,
  },
  data() {
    return {
      activeNames:['1'], // 关联van-collapse-item中的name
      GPArr: false
    }
  },
  created() {
    this.firstLoad();
  },
  methods: {
    firstLoad() {
      A00003().then(res => {
        this.GPArr = res.data.data
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
