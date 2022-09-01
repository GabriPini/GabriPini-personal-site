<template>
  <div id="portfolio" class="p-5 bg-custom2">
    <div class="container text-center">
      <h2 class="display-3 fw-bold text-white pb-3">Portfolio</h2>
      <div class="container bg-custom">
        <div class="row" v-if="portfolios">
          <div
            class="col-12 col-md-6 mt-2 mb-2 zoom-effect"
            v-for="image in portfolios"
            :key="image.index"
          >
            <img
              :src="image.src"
              class="custom-img shadow lazy"
              :alt="image.alt"
            />
          </div>
        </div>

        <div class="row" v-else>
          <h4 class="mt-2 fw-bold">Content Loading</h4>
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

  data() {
    return {
      portfolios: [
        {
          src: require("@/assets/img/netflix.png"),
          alt: "neflix-copy",
        },
        {
          src: require("@/assets/img/discord.png"),
          alt: "discord-copy",
        },
        {
          src: require("@/assets/img/dropbox.png"),
          alt: "dropbox-copy",
        },
        {
          src: require("@/assets/img/ps.png"),
          alt: "ps-copy",
        },
        {
          src: require("@/assets/img/spotify.png"),
          alt: "spotify-copy",
        },
        {
          src: require("@/assets/img/zalando.png"),
          alt: "zalando-copy",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/portfolio.scss";
@import "@/assets/scss/style.scss";
</style>
