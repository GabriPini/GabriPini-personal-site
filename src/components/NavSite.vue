<template>
  <nav class="cyber-nav d-flex align-items-center" data-aos="fade-down">
    <div class="logo me-4">
      <router-link to="/"
        ><img class="img-fluid" src="@/assets/img/avatar.png" alt=""
      /></router-link>
    </div>
    <ul class="list-unstyled d-flex flex-row m-0 ms-auto">
      <li class="p-2" v-if="isHome">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="p-2" v-if="isHome">
        <a class="nav-link" href="#skills">Skills</a>
      </li>
      <li class="p-2" v-if="isHome">
        <a class="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li class="p-2" v-if="isHome">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
      <li class="p-2">
        <router-link to="/Game" class="decoration-none">Game</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavSite",
  computed: {
    isHome() {
      return (
        this.$route.path == "/" ||
        this.$route.path == "/about" ||
        this.$route.path == "/skills" ||
        this.$route.path == "/portfolio" ||
        this.$route.path == "/contact"
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  width: 50px;
  border-radius: 50%;
  background-image: linear-gradient(-60deg, #ff0066 0%, #7f00ff 100%);
}

.nav-link {
  text-decoration: none;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #40ff00;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
}

.decoration-none {
  text-decoration: none;
  color: #9c9c9c;
}
</style>
