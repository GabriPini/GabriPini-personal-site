<template>
  <div id="app" class="d-flex flex-row">
    <NavSite class="col-3 col-sm-2 custom-h"></NavSite>
    <HelloWorld class="col-11 col-sm-10" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import NavSite from "./components/NavSite.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    NavSite,
  },
};
</script>

<style lang="scss">
@import "bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.custom-h {
  min-height: 100vh;

  background-image: linear-gradient(to right, #434343 0%, black 100%);
  filter: drop-shadow(2px 4px 6px black);
}
</style>
