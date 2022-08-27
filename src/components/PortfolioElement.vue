<template>
  <div id="portfolio" class="p-5 bg-custom2">
    <div class="container text-center">
      <h2 class="display-3 fw-bold text-white pb-3">Portfolio</h2>
      <div class="container bg-custom">
        <div v-if="loading">
          <h1>loading</h1>
        </div>

        <div class="row" v-if="!loading">
          <div class="col-12 col-md-6 mt-2 mb-2 zoom-effect">
            <img
              src="@/assets/img/netflix.png"
              class="custom-img shadow"
              alt=""
            />
          </div>

          <div class="col-12 col-md-6 mt-2 mb-2 zoom-effect">
            <img
              src="@/assets/img/discord.png"
              class="custom-img shadow"
              alt=""
            />
          </div>
          <div class="col-12 col-md-6 mt-2 mb-2 zoom-effect">
            <img
              src="@/assets/img/dropbox.png"
              class="custom-img shadow"
              alt=""
            />
          </div>
          <div class="col-12 col-md-6 mt-2 mb-2 zoom-effect">
            <img src="@/assets/img/ps.png" class="custom-img shadow" alt="" />
          </div>
          <div class="col-12 col-md-6 mt-2 mb-2 zoom-effect">
            <img
              src="@/assets/img/spotify.png"
              class="custom-img shadow"
              alt=""
            />
          </div>
          <div class="col-12 col-md-6 mt-2 mb-2 zoom-effect">
            <img
              src="@/assets/img/zalando.png"
              class="custom-img shadow"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <a class="fa-2xl mt-5 style-none" href="https://github.com/GabriPini"
      >See more <font-awesome-icon icon="fa-brands fa-github " class="mt-5"
    /></a>
  </div>
</template>

<script>
export default {
  name: "PortfolioElement",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
@import "@/assets/scss/portfolio.scss";
</style>
