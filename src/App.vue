<template>
  <div id="app">
    <mhyhead></mhyhead>
    <div class="main">
      <router-view></router-view>
    </div>
    <mhyplayer></mhyplayer>

  </div>
</template>

<script type="es6">
  import mhyhead from './components/header/mhyhead'
  import mhyplayer from './components/mhyplayer'

  export default {
    name: 'app',
    components: {
      mhyhead, mhyplayer
    }
  }
</script>
<style>
  .main{
    margin-top: 94px;
  }
</style>

