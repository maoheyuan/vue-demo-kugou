<template>
  <div class="rank-head container" :style="style" id="transparent-header">
    <a class="rank-head-back" @click="routerBack">
      {{title}}
    </a>
  </div>

</template>
<script type="es6">
  export default{
      props:["title","to","style"],
      name:"mhyrank-head",
      methods:{
          routerBack(){
              this.$router.go(-1);
          }
      }
  }

</script>
<style>

  .rank-head{
    width: 100%;
    height: 43px;
    position: fixed;
    background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
    top: 51px;
    z-index: 999;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height:43px ;
  }
  .rank-head-wrap{
    width: 100%;
    height: 200px;
    margin-top: -43px;
    position: relative;

  }
  .rank-head-back{
    display: block;
    float: left;
    width: 24px;
    height: 100%;
    background: url("../../assets/images/goback_icon.png") no-repeat center;
    background-size: 60% 60%;
    position: absolute;
    left: 5px;
    top:0
  }
  .rank-status{

    height: 43px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left:0;
    background:-webkit-linear-gradient(bottom,rgba(0,0,0,.6),rgba(0,0,0,0));
    line-height:43px;
    font-size: 15px;
    color: #fff
  }

</style>
