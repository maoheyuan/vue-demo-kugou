import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const router=new VueRouter({
  routes:[
  {
    path:"/index",component:require("../views/index")
  },{
    path:"/search",component:require("../views/mhysearch")
  }
  ]
});


export default router
