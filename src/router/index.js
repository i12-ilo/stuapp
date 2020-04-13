import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/addStu',
    name: "addStu",
    component: function () {
      return import("../components/AddStu.vue")
    },

  },
  {
    path:"/showStu",
    name:"showStu",
    component:function(){
      return import("../components/StuListTab.vue")
    }
  },
  {
    path:"/modal",
    name:"modal",
    component:function(){
      return import ("../components/Modal.vue")
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"active"
})

export default router
