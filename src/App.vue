<script>
import { ref } from "vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
import Country from "./components/Country/Country.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Navbar,
    Country,
    Footer,
  },
  setup() {
    const score = ref(0);
    const attempts = ref(0);
    const countryIndex = ref(1);
    const countryData = ref([]);
    const storedIndex = ref(0);
    const disableBtn = ref(false);
    const answer = ref("");

    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/flag/images"
        );

        // Append an id to each country object
        const countriesWithId = response.data.data.map((country, index) => ({
          id: index, // Generate a unique id using the current timestamp
          ...country,
        }));

        // Update the countryData array with the new data
        countryData.value = [...countryData.value, ...countriesWithId];
        // console.log(countryData.value.length, "length");
        countryIndex.value = Math.floor(
          Math.random() * (countryData.value.length - 1)
        );
        storedIndex.value = countryData.value.length;
        // console.log(storedIndex.value, "data");
      } catch (error) {
        console.log(error);
      }
    };

    //Function to go to the next question
    const nextCountry = (index) => {
      countryIndex.value = index;
      answer.value = "";
      disableBtn.value = false;
      if (index == 10) {
      }
    };

    const correctAnswer = (index) => {
      console.log(index, "emitted");
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
        console.log(countryIndex.value, "wrong");
      }
      // countryIndex.value = Math.floor(
      //   Math.random() * (countryData.value.length - 1)
      // );
    };
    const updateAnswer = (newAnswer) => {
      answer.value = newAnswer;
    };

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
      // getCountries,
    };
  },
  created() {
    this.fetchCountries();
  },
  mounted() {
    // this.getCountries();
    // console.log(this.countryData);
  },
};
</script>

<template>
  <div class="app">
    <router-view />
    <!-- <Navbar :country="countryData" :score="score" :attempts="attempts" />
    <div>
      <Country
        :country="countryData"
        :countryIndex="countryIndex"
        @correct="correctAnswer"
        @wrong="wrongAnswer"
        :disableBtn="disableBtn"
        :score="score"
        :attempts="attempts"
        :answer="answer"
        @update-answer="updateAnswer"
      />
    </div>
    <div></div>
    <Footer
      :countryData="countryData"
      :countryIndex="countryIndex"
      @nextCountry="nextCountry"
      :storedIndex="storedIndex"
      @correct="correctAnswer"
      :answer="answer"
    /> -->
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #0c1526; */
  /* border: 7px green solid; */
  overflow-y: auto;
}
</style>
