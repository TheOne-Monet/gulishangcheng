import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)//声明使用vue-router这个扩展库

//创建路由器

const  router = new VueRouter({
  routes,
  mode:'history'
})

//暴露路由

export default  router