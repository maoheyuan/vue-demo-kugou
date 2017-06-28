<template>
  <div id="app">
    <mhyhead></mhyhead>
    <div class="main">
      <router-view></router-view>
    </div>
    <mhyplayer></mhyplayer>
    <mhydetail_player-player></mhydetail_player-player>
  </div>
</template>

<script type="es6">
  import mhyhead from './components/header/mhyhead'
  import mhyplayer from './components/mhyplayer'
  import mhydetail_player from './components/mhydetail_player'
  export default {
    name: 'app',
    components: {
      mhyhead, mhyplayer, mhydetail_player
    }
  }
</script>
<style>
  .main{
    margin-top: 94px;
  }
</style>

