<template>
  <div>
    <nav
      class="navbar d-flex justify-content-center align-items-center navbar-dark bg-darker container"
    >
      <div class="logo">
        <router-link to="/"
          ><img class="img-fluid" src="@/assets/img/avatar.png" alt=""
        /></router-link>
      </div>
      <div class="container d-flex justify-content-center">
        <div>
          <ul
            class="navbar-nav d-flex flex-row mt-2 flex-wrap justify-content-center align-items-center"
          >
            <li class="nav-item p-2" v-if="isHome">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item p-2" v-if="isHome">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item p-2" v-if="isHome">
              <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item p-2" v-if="isHome">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item p-3">
              <router-link to="/Game" class="decoration-none">Game</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
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
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
}

.navbar {
  position: sticky;
  top: 3%;
  a {
    font-weight: bold;
    &:hover {
      color: #2bff00;
    }
  }

  router-link {
    font-weight: bold;
    &:hover {
      color: #2bff00;
    }
  }
}

.decoration-none {
  text-decoration: none;
  color: #9c9c9c;
}
</style>
