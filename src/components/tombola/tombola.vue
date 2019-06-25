<template>
  <div class="tombola">

    <template v-for="(lottery,index) in lotterys">
      <!-- 间隔 -->
      <div style="height: 0.1rem;" :key="'d' + index"></div>
      <!-- 双色球 -->
      <div class="ssq" v-if="type == 1" :key="index" @click="jumpDetail(lottery.id, lottery.name, lottery.url, lottery.batch_no)">
        <div class="top flex-start">
          <div class="f15 pd-r">{{ lottery.name }}</div>
          <div class="f12 little-word pd-r">{{ lottery.batch_no + '期' }}</div>
          <div class="f12 little-word">{{ lottery.opentime }}</div>
        </div>

        <template v-if="lottery.id == 3">
          <div class="center f15 flex-start w_white">
            <div class="w_black" style="margin:0.1rem 0.06rem">开奖号</div>
            <div v-for="(code, index) in codesFormat(lottery.codes)" class="bg_red bg_mg circle" :key="index">{{ code }}</div>
          </div>
          <div class="center f15 flex-start w_white">
            <div class="w_black" style="margin:0.1rem 0.06rem">试机号</div>
            <div v-for="(code, index) in codesFormat(lottery.codes, 'blue')" class="bg_blue bg_mg circle" :key="'b' + index">{{ code }}</div>
          </div>
        </template>

        <template v-else-if="lottery.id >= 143">
          <div class="center f15 flex-start w_black">
            <div v-for="(code, index) in codesFormat(lottery.codes)" :key="'f' + index" class="bg_mg pd_r7">{{ code }}</div>
          </div>
        </template>

        <template v-else>
          <div class="center f15 flex-start w_white">
            <div v-for="(code, index) in codesFormat(lottery.codes)" class="bg_red bg_mg circle" :key="index">{{ code }}</div>
            <div v-for="(code, index) in codesFormat(lottery.codes, 'blue')" class="bg_blue bg_mg circle" :key="'b' + index">{{ code }}</div>
          </div>
        </template>

        <div class="bottom flex-start">
          <button class="btn  bg_gray">开奖详情</button>
          <button class="btn  bg_gray" @click.stop="jumpKjHistory(lottery.id, lottery.name, lottery.url)">历史开奖</button>
          <!-- <button class="btn  bg_gray">走势图</button> -->
          <a v-if="lottery.id < 143" class="btn  bg_gray" :href="'http://m.chart.caishencai.com/' + lottery.url + '/'">走势图</a>
          <!-- <button class="btn  bg_gray" @click="jumpWanFa(lottery.url)">玩法</button> -->
          <a class="btn  bg_gray" :href="'http://m.caishencai.com/wanfa/' + lottery.url + '.html'">玩法</a>
        </div>
      </div>
    </template>
    


    <!-- 间隔
    <div style="height: 0.1rem;"></div>
    超级大乐透
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">超级大乐透</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_white">
        <div class="bg_red bg_mg circle">{{ '09' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '07' }}</div>
        <div class="bg_red bg_mg circle">{{ '16' }}</div>
        <div class="bg_red bg_mg circle">{{ '56' }}</div>
        <div class="bg_blue bg_mg circle">{{ '49' }}</div>
        <div class="bg_blue bg_mg circle">{{ '01' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">走势图</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    福彩3D
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">福彩3D</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">走势图</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    排列3
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">排列3</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_white">
        <div class="bg_red bg_mg circle">{{ '09' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '07' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">走势图</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    排列5
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">排列5</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_white">
        <div class="bg_red bg_mg circle">{{ '09' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '07' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">走势图</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    七乐彩
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">七乐彩</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_white">
        <div class="bg_red bg_mg circle">{{ '09' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '43' }}</div>
        <div class="bg_red bg_mg circle">{{ '07' }}</div>
        <div class="bg_red bg_mg circle">{{ '12' }}</div>
        <div class="bg_red bg_mg circle">{{ '07' }}</div>
        <div class="bg_blue bg_mg circle">{{ '07' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">走势图</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    七星彩
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">七星彩</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_white">
        <div class="bg_red bg_mg circle">{{ '09' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '02' }}</div>
        <div class="bg_red bg_mg circle">{{ '43' }}</div>
        <div class="bg_red bg_mg circle">{{ '07' }}</div>
        <div class="bg_red bg_mg circle">{{ '12' }}</div>
        <div class="bg_red bg_mg circle">{{ '07' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">走势图</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    胜负彩
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">胜负彩</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_black">
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '*' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    半全场
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">半全场</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_black">
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
        <div class="bg_mg pd_r7">{{ '-' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    进球彩
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">进球彩</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_black">
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div>
    间隔
    <div style="height: 0.1rem;"></div>
    任选九
    <div class="cjdlt" v-if="type == 1">
      <div class="top flex-start">
        <div class="f15 pd-r">任选九</div>
        <div class="f12 little-word pd-r">{{ '2019069期' }}</div>
        <div class="f12 little-word">{{ '2019-06-16 21:15:00' }}</div>
      </div>
      <div class="center f15 flex-start w_black">
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '9' }}</div>
        <div class="bg_mg pd_r7">{{ '*' }}</div>
      </div>
      <div class="bottom flex-start">
        <button class="btn  bg_gray">开奖详情</button>
        <button class="btn  bg_gray">历史开奖</button>
        <button class="btn  bg_gray">玩法</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'tombola',
  props: {
    type: {
      type: [Number]
    },
    lotterys: {
      type: [Array],
      required: true
    }
  },
  data() {
    return {

    }
  },
  created() {
    console.log('-------------this.$props.lotterys-------------')
    this.$props.lotterys.forEach(element => {
      // console.log(element.codes)
    })
  },
  methods: {
    codesFormat(codes, type = 'red') {
      var codesArr = codes.split('|')
      var codesRed = codesArr[0].split(',')
      var codesBlue = codesArr[1] ? codesArr[1].split(',') : []
      // console.log(codesBlue)
      return type === 'red' ? codesRed : codesBlue
    },
    // 跳转彩票详情
    jumpDetail(id, name, code, batchno) {
      this.$router.push({
        name: 'period',
        query: {
          id: id, // 彩种id
          name: name, // 彩种名字
          code: code, // 彩种简写 ssq 3d ···
          batchno: batchno, // 彩种期数
        }
      })
    },
    // 跳转历史开奖
    jumpKjHistory(id, name, code) {
      this.$router.push({
        name: 'kjhistory',
        query: {
          id: id,
          code: code,
          name: name
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tombola {
  // padding: 0 0.3rem;
  background-color: #f5f5f5;
  &>div {
    padding: 0.08rem 0.3rem;
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
