<template>
  <div id="app" class="d-flex flex-column">
    <NavSite class="col-12 custom-h"></NavSite>

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

.custom-h {
  background-image: linear-gradient(90deg, #000428, #004e92);
  filter: drop-shadow(2px 4px 6px #000);
}
</style>
