<template>
  <div id="app" class="d-flex flex-column flex-sm-row">
    <NavSite class="col-12 col-sm-2 custom-h"></NavSite>

    <router-view class="col-12 col-sm-10" />
  </div>
</template>

<script>
import NavSite from "./components/NavSite.vue";

export default {
  name: "App",
  components: {
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
