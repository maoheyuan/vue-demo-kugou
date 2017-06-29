<template>
  <div class="head-nav">

    <mt-navbar v-model="headNav" class="container">
      <mt-tab-item id="head-nav1" @click.native="goRouter(1)">新歌</mt-tab-item>
      <mt-tab-item id="head-nav2" @click.native="goRouter(2)">排行</mt-tab-item>
      <mt-tab-item id="head-nav3" @click.native="goRouter(3)">歌单</mt-tab-item>
      <mt-tab-item id="head-nav4" @click.native="goRouter(4)">歌手</mt-tab-item>
      <mt-tab-item id="head-nav5" @click.native="goRouter(5)">彩铃</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script type="es6">

  import {Navbar,TabItem} from "mint-ui"
  import { mapState } from "vuex"
  export default{

      name:"mhyhead-nav",
      components:{Navbar,TabItem},
      computed:{
        ...mapState(["headNav"])
      },
      methods:{

          goRouter(index){
              this.$store.commit("setHeadNav",index);
              switch(index){
                case 1:
                  this.$router.push({path:"index"});
                      break;
                case 2:
                    this.$router.push({path:"mhyrank"});
                      break;
                case 3:
                    this.$router.push({path:"mhylist"});
                      break;
                case 4:
                    this.$router.push({path:"mhysinger"});
                      break;
                case 5:
                    this.$router.push({path:"mhyringt_one"});
                    break;
              }

          }
      }

  }
</script>

<style>

  .container{
    padding: 0 10px;
    width: 100%;
    overflow: hidden;
  }

  .mint-tab-item{
    padding: 12px 0 !important;
  }
  .mint-tab-item-lable{
    font-size: 16px !important;
  }
  .head-nav{
    border-bottom: 3px solid #f4f4f4;
    position: fixed;
    top:51px;
    left: 0px;
    width: 100%;
    z-index: 1000;
  }

</style>
