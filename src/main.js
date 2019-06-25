import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/base.scss'
import '@/utils/rem.js'
import '@/assets/css/jsdeliver.css'
import '@/assets/css/news.css'
import { 
  Swipe, 
  SwipeItem, 
  Lazyload,
  Collapse,
  CollapseItem,
  NoticeBar,
  List
} from 'vant';

/* 注入全局filter函数 */
import filters from '@/tools/filters.js'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))


Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Collapse)
  .use(CollapseItem)
  .use(NoticeBar)
  .use(List);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
