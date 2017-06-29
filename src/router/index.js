import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const router=new VueRouter({
  routes:[
  {
    path:"/index",component:require("../views/index")
  },{
    path:"/search",component:require("../views/mhysearch")
  },
  {
    path:"/mhyrank",component:require("../views/mhyrank")
  },
   {
     path:'/mhyrank/info/:id',component:require('../views/mhyrank_info')
    },
  {
    path:"/mhyringt_one",component:require("../views/mhyringt_one")
  }
  ]
});


export default router
