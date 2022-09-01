import Game from "./components/GameElement.vue";
import Home from "./components/HomeElement.vue";

const routes = [
  { path: "/game", component: Game },
  { path: "/", component: Home },
  { path: "/about", component: Home },
  { path: "/skills", component: Home },
  { path: "/portfolio", component: Home },
  { path: "/contact", component: Home },
];

export default routes;
