<template >
  <div class="container plist">

    <mt-cell v-for="(item,index) in songList" :title="item.title" is-link :label="item.countPlay" :to="item.location">
      <img slot="icon" :src="item.imgUrl" width="60" height="60">

    </mt-cell>
  </div>

</template>

<script>

  import {Cell,Indicator} from "mint-ui"
  import list_plist from "../jsons/mhylist_plist"
  import {INIT} from "../mixins";
  export default{
      mixins:[INIT],
    methods:{
        getList(){
          Indicator.open({
            text: "加载中...",
            spinnerType: "snake"
          });
          this.paseList(list_plist);
        },
        paseList(data){
            setTimeout(()=>{
                Indicator.close();
                this.songList=data;
            },1000);
        }
    }
  }
</script>
<style scoped>

  .mint-cell-title img {
    margin-right: 5px !important;
  }
</style>
