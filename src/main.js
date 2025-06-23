import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({ routes });

import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faLinkedin, faGithub);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
AOS.init();

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    const loader = document.getElementById("loading-screen");
    if (loader) loader.style.display = "none";
  },
}).$mount("#app");
