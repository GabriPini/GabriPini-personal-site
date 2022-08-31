import Game from "./components/GameElement.vue";
import Home from "./components/HomeElement.vue";

const routes = [
  { path: "/game", component: Game },
  { path: "/", component: Home },
];

export default routes;
