<template>
  <div class="msglist">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :offset="0"
      @load="onLoad"
    >
      <!-- <div >{{ item }}</div> -->

      <a v-for="(item, index) in list" :key="index" class="msg-item" :href="item.url">
        <p class="f16">{{ item.title }}</p>
        <p class="news-list-ft little-word"><span class="pul-time">{{ item.time }}</span><span class="zan"><em></em>{{ item.pl }}</span></p>
      </a>
    </van-list>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'msglist',
  props: {
    code: {
      type: [String, Object, Array]
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 0,
    }
  },
  created() {
    // console.log(this.$props.code)
  },
  methods: {
    onLoad() {
      // // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 100) {
      //     this.finished = true;
      //   }
      // }, 500);
      this.clickTrMatchMore()
      this.page++;
    },
    in_object(key) {
      var obj = {
        'ssq': 692,
        'qlc': 768,
        'qxc': 765,
        'dlt': 690,
        '3d': 812,
        'sfc': 673,
        'rx9': 673
      }
      return obj[key] || 0;
    },
    clickTrMatchMore() {
      let that = this
      var typeId = that.in_object(this.$props.code)
      if(typeId==0){
          var url="http://m.news.caishencai.com/sj_ajax.js?page="+that.page+"&type=1";
      }else{
          var url="http://m.news.caishencai.com/sj_ajax.js?id="+typeId+"&page="+that.page;
      }
      $.ajax({
        type:"GET",
        url: url,
        dataType: "jsonp",
        jsonp:'callback',
        success:function (data) {
          that.loading = false;
          if (data.data.length < 10) {
            that.finished = true;
            that.list = [...that.list, ...data.data]
          } else {
            that.list = [...that.list, ...data.data]
          }
          // console.log(that.list)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.msg-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  padding: 5px 0px;
  &>p {
    width: 100%;
    padding: 5px 0px;
  }
}
.pul-time {
  padding-right: 0.2rem;
}
</style>

