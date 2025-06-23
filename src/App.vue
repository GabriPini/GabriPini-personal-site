<template>
  <div id="app" class="d-flex flex-column">
    <NavSite class="col-12"></NavSite>

    <router-view class="col-12" />
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
@import "@/assets/scss/style.scss";
@import "bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
