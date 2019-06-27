<template>
  <div class="home">
    <div class="kaijiangnav bg_red flex f16">
      <router-link to="/home/quanguo">全国<p></p></router-link>
      <router-link to="/home/difang">地方<p></p></router-link>
      <router-link to="/home/gaopin">高频<p></p></router-link>
    </div>
    <van-swipe :autoplay="3000" class="hf_swipe">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <a :href="item.url">
          <img v-lazy="item.img" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <router-view />
    <hf-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HfFooter from '@/components/hf_footer/hf_footer.vue'

export default {
  name: 'home',
  components: {
    HfFooter
  },
  data() {
    return {
      images: [
        {
          img: 'http://static.caishencai.com/caipiao-m-html-source/public-style/images/jjc_shouyelunbo.png',
          url: 'http://m.live.caishencai.com'
        },
        {
          img: 'http://static.caishencai.com/caipiao-m-html-source/public-style/images/xinrenfudai_shouyelunbo.png',
          url: 'http://adv.chengyouhudong.com/c/cpc/19'
        }
        
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.kaijiangnav {
  width: 100%;
  height: 0.7rem;
  padding-top: 0.1rem;
  a {
    // font-weight: bold;
    display: inline-block;
    height: 100%;
    width: 100%;
    text-align: center;
    padding-top: 5px;
    color: #ffffff;
    &.router-link-exact-active {
      // color: #13f58f;
      &>p {
        width: 30px;
        height: 2px;
        background: #fff;
        margin: 0 auto;
        margin-top: 5px;
      }
    }
  }
}
.hf_swipe {
  height: 2.8rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
