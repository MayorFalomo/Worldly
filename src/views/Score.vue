<template>
  <div :id="darkmode" class="scoreCon">
    <div class="scoreTexts">
      <h1>Player Mayowa, your Score is {{ score }}</h1>
      <router-link to="/">Play Again</router-link>
    </div>
    <lottie-animation
      path="../assets/Animation.json"
      :loop="false"
      :autoPlay="true"
      :loopDelayMin="2.5"
      :loopDelayMax="5"
      :speed="1"
      :width="256"
      :height="256"
      @AnimControl="setAnimController"
    />
  </div>
</template>

<script>
import lottie from "lottie-web";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  name: "Score",
  props: {
    score: Number,
    darkmode: String,
  },
  components: {
    LottieAnimation,
  },
  setup() {
    const animation = lottie.loadAnimation({
      container: document.getElementById("my-animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "../assets/Animation.",
    });
    return {};
  },
};
</script>

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
  color: white;
}
#light {
  background-color: white;
  color: black;
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
}
#dark h1 {
  color: #f9af5a;
}
#light h1 {
  color: #fff;
}

#dark a {
  color: #fff;
}
#light a {
  color: #0c1526;
}
</style>
