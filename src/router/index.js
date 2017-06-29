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
         path:'/mhylist',component:require('../views/mhylist')
        },
               {
                 path:'/mhylist/info/:id',component:require('../views/mhylist_info')
                },
                        {
                                 path:'/mhysinger',component:require('../views/mhysinger')
                                },

    {
       path:'/mhysinger/list/:id',component:require('../views/mhysinger_list')
      },
       {
             path:'/mhysinger/info/:id',component:require('../views/mhysinger_info')
            },
  {
    path:"/mhyringt_one",component:require("../views/mhyringt_one")
  }
  ]
});


export default router
