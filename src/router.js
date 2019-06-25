import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
import { 
  Swipe, 
  SwipeItem, 
  Lazyload,
} from 'vant';

Vue.use(Swipe)
  .use(SwipeItem)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      redirect: '/home/quanguo',
      name: 'home',
      component: Home,
      children: [
        {
          name: 'quanguo',
          path: '/home/quanguo',
          component: () => import('@/components/quanguo/quanguo.vue')
        },
        {
          name: 'difang',
          path: '/home/difang',
          component: () => import('@/components/difang/difang.vue')
        },
        {
          name: 'gaopin',
          path: '/home/gaopin',
          component: () => import('@/components/gaopin/gaopin.vue')
        }
      ]
    },
    {
      path: '/period',
      name: 'period',
      component: () => import('@/components/period/period.vue')
    },
    {
      path: '/kjhistory',
      name: 'kjhistory',
      component: () => import('@/components/kjhistory/kjhistory.vue')
    }
    // {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
