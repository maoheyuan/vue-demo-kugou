<template>
  <div class="header">
    <mhyheadLogo></mhyheadLogo>
    <mhyrank-head v-if="head.toggle" :title="head.title" :style="head.style"></mhyrank-head>
    <mhyhead-nav v-else></mhyhead-nav>
  </div>

</template>
<script type="es6">
  import mhyheadLogo from "./mhyhead_logo"
  import mhyheadNav from "./mhyhead-nav"
  import mhyrankHead from "./mhyrank-head"
  import {mapGetter} from "vuex"
  export default{
      computed:{
        ...mapGetters(["head"])
      },
    name:"mhyhead",
    components:{mhyheadLogo,mhyheadNav,mhyrankHead}
  }
</script>
