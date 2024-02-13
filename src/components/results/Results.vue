<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import { Vue3Lottie } from "vue3-lottie";
import DogJSON from "./Animation.json";
export default {
  name: "Results",
  props: {
    score: Number,
  },
  components: {
    LottieAnimation,
    Vue3Lottie,
  },
  setup() {
    console.log(DogJSON);
    return {
      DogJSON,
    };
  },
};
</script>

<template>
  <div class="scoreCon">
    <div class="scoreTexts">
      <h1>Player Mayowa, your Score is {{ score }} / 10</h1>
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
  background-color: #0c1526;
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
.animation {
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 1;
}
</style>
