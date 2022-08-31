<template>
  <div>
    <nav
      class="navbar d-flex justify-content-center align-items-center navbar-dark bg-darker"
    >
      <div class="container d-flex flex-column text-center">
        <div class="logo">
          <router-link to="/"
            ><img class="img-fluid" src="@/assets/img/avatar.png" alt=""
          /></router-link>
        </div>
        <div>
          <ul class="navbar-nav d-flex flex-column mt-2 me-2 text-center">
            <li class="nav-item pt-2">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item pt-2">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item pt-2">
              <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item pt-2">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item pt-2">
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
}

.decoration-none {
  text-decoration: none;
  color: #9c9c9c;
}
</style>
