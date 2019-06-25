<template>
  <div class="period" v-if="batchnoDetail">
    <van-notice-bar
      text="服务范围：我们仅提供数据查询服务，无投注业务。"
      left-icon=""
      :background="'#f5f5f5'"
      :color="'red'"
      :speed="70"
      :scrollable="true"
      style="font-size: 17px;font-weight: bold;padding:0;"
    />
    <div class="cjdlt">
      <div class="top flex-start">
        <div class="f15 pd-r">{{ name }}</div>
        <div class="f12 little-word pd-r">{{ batchnoDetail.batch_no + '期' }}</div>
        <div class="f12 little-word">{{ batchnoDetail.kaijiang_time }}</div>
      </div>
    
      <!-- 福彩3D -->
      <div class="center f15 flex-start w_white" v-if="id === '3'">
        <div class="f16 w_black" style="margin-right:0.1rem;">开奖号</div>
        <template v-for="(item, index) in kj">
          <div v-if="item" :key="'a' + index" class="bg_red bg_mg circle">{{ item }}</div>
        </template>
        <div class="f16 w_black" style="margin-right:0.1rem;">试机号</div>
        <template v-for="(item, index) in sj">
          <div v-if="item" :key="'b' + index" class="bg_blue bg_mg circle">{{ item }}</div>
        </template>
      </div>

      <!-- 常规彩种 -->
      <div class="center f15 flex-start w_white" v-else>
        <template v-for="(item, index) in r">
          <div v-if="item" :key="'c' + index" class="bg_red bg_mg circle">{{ item }}</div>
        </template>
        <template v-for="(item, index) in b">
          <div v-if="item" :key="'d' + index" class="bg_blue bg_mg circle">{{ id === '11' ? animalFormat(item) : item }}</div>
        </template>


        <template v-for="(item, index) in kj">
          <div v-if="item" :key="'e' + index" class="bg_red bg_mg circle">{{ item }}</div>
        </template>
        <template v-for="(item, index) in sj">
          <div v-if="item && (id !== '74')" :key="'f' + index" class="bg_blue bg_mg circle">{{ id === '11' ? animalFormat(item) : item }}</div>
        </template>
      </div>
    
      <div class="bottom w_black f12" style="text-align:left;">
        {{ batchnoDetail.lotteryinfo.cycle }}
      </div>
    </div>

    <!-- 若为高频彩种 则不显示 -->
    <template v-if="isGP !== 'true'">
      <div class="period-detail">
        <div class="flex f12 w_black d1" style="height:0.8rem;padding:0 0.5rem;">
          <p class="p-kjxq">开奖详情</p>
          <p v-if="id < 143" ><a :href="'http://m.chart.caishencai.com/' + code">彩种走势</a></p>
          <p><a :href="'http://m.caishencai.com/wanfa/' + code + '.html'"></a> 彩种玩法</p>
        </div>
      </div>
      <div class="cny flex">
        <div class="left">
          <p>
            <b class="f26">{{ (batchnoDetail.xiaoliang/100000000).toFixed(2) }}</b>亿
            <br>
            本期全国开奖
          </p>
        </div>
        <div class="right">
          <p>
            <b class="f26">{{ (batchnoDetail.jiangchi/100000000).toFixed(1) }}</b>亿
            <br>
            滚存
          </p>
        </div>
      </div>
      <!-- 中奖表格 -->
      <table class="table">
        <thead>
          <tr class="f12 w_gray">
            <th>奖项</th>
            <th>中奖注数</th>
            <th>单注奖金</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(detail, index) in JSON.parse(batchnoDetail.kaijiang_detail)['detail']" :key="index">
            <td>{{ detail[0] }}</td>
            <td>{{ detail[1] }}</td>
            <td>{{ detail[2] }}</td>
          </tr>
        </tbody>
      </table>
    </template>
    
    <!-- 热门资讯 -->
    <div style="padding:9px;background:#f5f5f5;text-align:left;text-indent:5px;line-height:16px;"><span style="float:left;width:2px;height:15px;background-color:#F32B1B"></span>热门资讯</div>
    <msglist :code="code" />
  </div>
</template>

<script>
import { A00005 } from '@/api/interface.js'
import Msglist from '@/components/msglist/msglist.vue'
export default {
  name: 'period',
  props: {
    
  },
  components: {
    Msglist
  },
  data() {
    return {
      id: this.$route.query.id,
      name: this.$route.query.name,
      code: this.$route.query.code,
      batchno: this.$route.query.batchno,
      batchnoDetail: false,
      isGP: this.$route.query.isGP,
      r: [],
      b: [],
      kj: [],
      sj: [],
    }
  },
  created() {
    this.firstLoad();
  },
  methods: {
    firstLoad() {
      A00005({code: this.code, batchno: this.batchno}).then(res => {
        const 
        {
          r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,
          b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,
          kj1,kj2,kj3,kj4,kj5,kj6,kj7,kj8,kj9,kj10,kj11,kj12,kj13,kj14,
          sj1,sj2,sj3,sj4,sj5,sj6,sj7,sj8,sj9,sj10,sj11,sj12,sj13,sj14
        } = res.data.data;
        
        this.r = new Array(r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14)
        this.b = new Array(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14)
        this.kj = new Array(kj1,kj2,kj3,kj4,kj5,kj6,kj7,kj8,kj9,kj10,kj11,kj12,kj13,kj14)
        this.sj = new Array(sj1,sj2,sj3,sj4,sj5,sj6,sj7,sj8,sj9,sj10,sj11,sj12,sj13,sj14)
        this.batchnoDetail = res.data.data;
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
.period {
  // padding: 0 0.3rem;
  background-color: #f5f5f5;
  &>div,&>table {
    background: #ffffff;
    padding: 0.08rem 0.3rem;
  }
}
.bg_mg {
  margin: 0.1rem 0.12rem 0.1rem 0rem;
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
