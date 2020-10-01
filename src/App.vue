<template>
  <div id="app">
    <router-view/>
    <FooterBar v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterBar from './components/footerBar/FooterBar';
export default {
  methods:{
  },
  components:{ FooterBar }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ececec;
}
</style>
