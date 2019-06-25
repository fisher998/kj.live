<template>
  <div class="kjhistory" v-if="batchnoDetails">
    <!-- 标题 -->
    <div class="title f16 w_white" style="background: #f32b1b;padding:5px 0px;">
      {{ name }}
    </div>
    <div class="cjdlt" v-for="(batchnoDetail, idx) in batchnoDetails" :key="idx" @click="jumpDetail(id, name, code, batchnoDetail.batch_no)">
      <div class="top flex-start">
        <div class="f13 w_black pd-r">{{ batchnoDetail.batch_no + '期' }}</div>
        <div class="f12 little-word">{{ batchnoDetail.kaijiang_time }}</div>
      </div>
    
      <!-- 福彩3D -->
      <div class="center f15 flex-start w_white" v-if="id === '3'">
        <div class="f16 w_black" style="margin-right:0.1rem;">开奖号</div>
        <template v-for="(item, index) in detailsArr[idx].kj">
          <div v-if="item" :key="'a' + index" class="bg_red bg_mg circle">{{ item }}</div>
        </template>
        <div class="f16 w_black" style="margin-right:0.1rem;">试机号</div>
        <template v-for="(item, index) in detailsArr[idx].sj">
          <div v-if="item" :key="'b' + index" class="bg_blue bg_mg circle">{{ item }}</div>
        </template>
      </div>

      <!-- 常规彩种 -->
      <div class="center f15 flex-start w_white" v-else>
        <template v-for="(item, index) in detailsArr[idx].r">
          <div v-if="item" :key="'c' + index" class="bg_red bg_mg circle">{{ item }}</div>
        </template>
        <template v-for="(item, index) in detailsArr[idx].b">
          <div v-if="item" :key="'d' + index" class="bg_blue bg_mg circle">{{ id === '11' ? animalFormat(item) : item }}</div>
        </template>


        <template v-for="(item, index) in detailsArr[idx].kj">
          <div v-if="item" :key="'e' + index" class="bg_red bg_mg circle">{{ item }}</div>
        </template>
        <template v-for="(item, index) in detailsArr[idx].sj">
          <div v-if="item" :key="'f' + index" class="bg_blue bg_mg circle">{{ id === '11' ? animalFormat(item) : item }}</div>
        </template>
      </div>
      
      <!-- <div class="bottom w_black f12" style="text-align:left;">
        {{ batchnoDetail.lotteryinfo.cycle }}
      </div> -->
    </div>
  </div>
</template>

<script>
import { A00004 } from '@/api/interface.js'
export default {
  name: 'kjhistory',
  props:  {
    
  },
  data() {
    return {
      id: this.$route.query.id,
      code: this.$route.query.code,
      batchnoDetails: false,
      detailsArr: false,
      name: this.$route.query.name,
    }
  },
  created() {
    this.firstLoad()
  },
  methods: {
    firstLoad() {
      A00004({code: this.code}).then(res => {
        
        this.batchnoDetails = res.data.data
        var details = []
        this.batchnoDetails.forEach((element, index) => {
          var {
            r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,
            b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,
            kj1,kj2,kj3,kj4,kj5,kj6,kj7,kj8,kj9,kj10,kj11,kj12,kj13,kj14,
            sj1,sj2,sj3,sj4,sj5,sj6,sj7,sj8,sj9,sj10,sj11,sj12,sj13,sj14
          } = element;
          var r = new Array(r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14)
          var b = new Array(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14)
          var kj = new Array(kj1,kj2,kj3,kj4,kj5,kj6,kj7,kj8,kj9,kj10,kj11,kj12,kj13,kj14)
          var sj = new Array(sj1,sj2,sj3,sj4,sj5,sj6,sj7,sj8,sj9,sj10,sj11,sj12,sj13,sj14)
          details.push({
            r,
            b,
            kj,
            sj
          })
        })
        this.detailsArr = details;
      })
    },
    // 跳转彩票详情
    jumpDetail(id, name, code, batchno) {
      let that = this
      this.$router.push({
        name: 'period',
        query: {
          id: id, // 彩种id
          name: name, // 彩种名字
          code: code, // 彩种简写 ssq 3d ···
          batchno: batchno, // 彩种期数
          isGP: that.$route.query.isGP + '', // 是否是高频彩种
        }
      })
    },
    // 生肖format
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
      return animalObj[code-0]
    },
  }
}
</script>

<style lang="scss" scoped>
.kjhistory {
  // padding: 0 0.3rem;
  background-color: #f5f5f5;
  &>div,&>table {
    background: #ffffff;
    padding: 0.08rem 0.3rem;
  }
}
.bg_mg {
  margin: 0.1rem 0.12rem 0.1rem 0rem;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}
.bg_red {
  
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
.center {
  margin: 0.1rem 0rem;
}
.pd_r7 {
  padding-right: 0.14rem;
}
.d1 {
  &>p {
    padding: 0rem 0.4rem 0.2rem 0.4rem;
  }
}
.p-kjxq {
  padding-bottom: 0.16rem!important;
  border-bottom: 2px solid red;
}
.period-detail {
  margin-top: 2px;
  background: #ffffff;
}
.cny {
  padding: 0!important;
  height: 1.32rem;
  .left,.right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    border-top: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
  .right {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
}
.table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  th,td {
    font-weight: normal;
    border: 1px solid #dddddd;
    border-left: none;
    border-right: none;
    padding: 8px;
  }
}
</style>
