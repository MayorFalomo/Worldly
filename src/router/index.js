import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Score from "../views/Score.vue";
import Flags from "../views/Flags.vue";
import Capital from "../views/Capitals.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/flags",
      name: "Flag",
      component: Flags,
    },
    {
      path: "/capitals",
      name: "Capital",
      component: Capital,
    },
    {
      path: "/scores",
      name: "Score",
      component: Score,
      props: true, // Passes the `score` prop to the component
    },
  ],
});

export default router;

//<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"</script>
// <lottie-player href="https://assets8.lottiefiles.com/packages/1f20_ftjfyyep.json" background="transparent" speed="1" style="width:100%;height:100%" autoplay loop></lottie-player>
