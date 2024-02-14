<template>
  <div v-if="!showResults" class="capitalsCon">
    <Navbar
      :country="countryData"
      :score="score"
      :attempts="attempts"
      :darkmode="darkmode"
      :switchMode="switchMode"
      @switchBg="switchBg"
    />
    <Capital
      :country="countryData"
      :countryIndex="countryIndex"
      @correct="correctAnswer"
      @wrong="wrongAnswer"
      :disableBtn="disableBtn"
      :score="score"
      :attempts="attempts"
      :answer="answer"
      @update-answer="updateAnswer"
      :numbered="numbered"
      :darkmode="darkmode"
    />
    <Footer
      :countryData="countryData"
      :countryIndex="countryIndex"
      @nextCountry="nextCountry"
      :storedIndex="storedIndex"
      @correct="correctAnswer"
      :answer="answer"
      :numbered="numbered"
      :darkmode="darkmode"
    />
  </div>
  <div v-else>
    <Results :score="score" :darkmode="darkmode" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Navbar from "../components/Navbar/Navbar.vue";
import Capital from "../components/Capital/Capital.vue";
import Footer from "../components/Footer/Footer.vue";
import Results from "../components/results/Results.vue";
import axios from "axios";

export default {
  name: "Capitals",
  components: {
    Navbar,
    Capital,
    Footer,
    Results,
  },

  setup() {
    const score = ref(0);
    const attempts = ref(0);
    const countryIndex = ref(1);
    const countryData = ref([]);
    const storedIndex = ref(0);
    const disableBtn = ref(false);
    const answer = ref("");
    const numbered = ref(1);
    const showResults = ref(false);
    const darkmode = ref("dark");
    const switchMode = ref(false);

    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/capital"
        );

        // Append an id to each country object
        const countriesWithId = response.data.data.map((country, index) => ({
          id: index, // Generate a unique id using the current timestamp
          ...country,
        }));

        // Update the countryData array with the new data
        countryData.value = [...countryData.value, ...countriesWithId];
        countryIndex.value = Math.floor(
          Math.random() * (countryData.value.length - 1)
        );
        storedIndex.value = countryData.value.length;
      } catch (error) {
        console.log(error);
      }
    };

    //Function to go to the next question
    const nextCountry = (index) => {
      countryIndex.value = index;
      answer.value = "";
      attempts.value = 0;
      disableBtn.value = false;
      numbered.value += 1;
      if (numbered.value > 10) {
        showResults.value = true;
      }
    };

    const correctAnswer = (index) => {
      // console.log(index, "emitted");
      score.value = index;
      disableBtn.value = true;
      console.log(answer, "Answer");
      if (score.value > 0) {
        console.log(disableBtn.value, "disable");
      }
      // countryIndex.value = Math.floor(
      //   Math.random() * (countryData.value.length - 1)
      // );
    };

    const wrongAnswer = (index) => {
      console.log(index, "emitted");
      attempts.value = index;
      if (attempts.value > 2) {
        disableBtn.value = true;

        countryIndex.value = Math.floor(
          Math.random() * (storedIndex.value - 1)
        );
        disableBtn.value = false;
        attempts.value = 0;
        // console.log(countryIndex.value, "wrong");
      }
    };
    const updateAnswer = (newAnswer) => {
      answer.value = newAnswer;
    };

    const switchBg = (bgMode) => {
      darkmode.value = bgMode;
      switchMode.value = !switchMode.value;
      localStorage.setItem("mode", bgMode);
    };

    onMounted(() => {
      const newMode = localStorage.getItem("mode") || "";
      darkmode.value = newMode;
    });

    return {
      score,
      attempts,
      countryData,
      fetchCountries,
      countryIndex,
      nextCountry,
      storedIndex,
      correctAnswer,
      wrongAnswer,
      disableBtn,
      answer,
      updateAnswer,
      numbered,
      showResults,
      switchMode,
      darkmode,
      switchBg,
    };
  },

  created() {
    this.fetchCountries();
  },
};
</script>

<style>
.capitalsCon {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #0c1526;
  /* border: 2px red solid; */
  overflow: hidden;
}
#dark {
  background-color: #0c1526;
}
#light {
  background-color: #fff;
}
</style>
