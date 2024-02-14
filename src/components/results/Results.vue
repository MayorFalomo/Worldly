<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import { Vue3Lottie } from "vue3-lottie";
import DogJSON from "./Animation.json";
export default {
  name: "Results",
  props: {
    score: Number,
    darkmode: String,
  },
  components: {
    LottieAnimation,
    Vue3Lottie,
  },
  setup() {
    return {
      DogJSON,
    };
  },
};
</script>

<template>
  <div :id="darkmode" class="scoreCon">
    <div class="scoreTexts">
      <h1 v-if="score > 7">Congrats! Player, your Score is {{ score }} / 10</h1>
      <h1 v-else-if="score == 5 || score == 6">
        Not bad! Player, your Score is {{ score }} / 10
      </h1>
      <h1 v-else>Terrible Player!, your Score is {{ score }} / 10</h1>
      <router-link to="/">Play Again</router-link>
      <div v-if="score >= 7" class="animation">
        <Vue3Lottie :animationData="DogJSON" :height="200" :width="200" />
      </div>
    </div>
  </div>
</template>

<style>
.scoreCon {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
#dark {
  background-color: #0c1526;
}
#light {
  background-color: #fff;
}
.scoreTexts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
h1 {
  text-align: center;
  color: #f9af5a;
}
#light h1 {
  color: #0c1526;
  background-color: #fff;
  text-align: center;
}
.animation {
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 1;
}
#dark a {
  color: #fff;
  position: relative;
  z-index: 3;
}
#light a {
  color: #000;
  position: relative;
  z-index: 3;
}
</style>
