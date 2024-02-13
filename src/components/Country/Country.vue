<template>
  <div class="countryCon">
    <div class="flag">
      <img :src="country[countryIndex].flag" alt="img" />
    </div>
    <p>{{ compute }}</p>
    <form @submit.prevent="getAnswer">
      <input
        type="text"
        placeholder="Enter country"
        v-model="localAnswer"
        @input="emitUpdateAnswer"
      />
      <button
        :style="{ cursor: disableBtn ? 'not-allowed' : 'pointer' }"
        :disabled="disableBtn == true ? true : false"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
export default {
  name: "Country",
  props: {
    country: Object,
    countryIndex: Number,
    disableBtn: Boolean,
    score: Number,
    attempts: Number,
    answer: String,
  },
  setup(props, { emit }) {
    //First Split a string into an array
    const splitted = ref(props.country[props.countryIndex].name);
    const localAnswer = ref("");

    let randomNum1;
    let randomNum2;
    let random1;
    let random2;
    console.log(props.country[props.countryIndex].name, "name index");
    console.log(props.disableBtn, "disabled");

    const getAnswer = () => {
      console.log(props.answer.toLowerCase(), "answer");
      console.log(
        props.country[props.countryIndex].name.toLowerCase(),
        "name index"
      );

      if (
        props.answer.toLowerCase() ==
        props.country[props.countryIndex].name.toLowerCase()
      ) {
        //If you want to emit, emit what you passed as a prop, then pass how you want to update the value of what you want to emit
        emit("correct", props.score + 1);
        // answer.value = "";
      } else {
        emit("wrong", props.attempts + 1);
        // answer.value = "";
      }
    };

    watch(
      () => props.answer,
      (newValue) => {
        localAnswer.value = newValue;
      }
    );

    // Emit event to update answer in parent component
    const emitUpdateAnswer = () => {
      emit("update-answer", localAnswer.value);
    };

    //Using Computed property
    const compute = computed(() => {
      // return arr.sort(() => Math.random() - 0.5);
      console.log(props.countryIndex, "indexes");
      function randomNumbers(string) {
        randomNum1 = Math.floor(Math.random() * string.length);
        randomNum2 = Math.floor(Math.random() * string.length);
        while (randomNum2 == randomNum1) {
          randomNum2 = Math.floor(Math.random() * string.length);
        }
        if (randomNum1 > randomNum2) {
          let temp = randomNum1;
          randomNum1 = randomNum2;
          randomNum2 = temp;
        }
        return {
          random1: randomNum1,
          random2: randomNum2,
        };
      }

      const { random1, random2 } = randomNumbers(splitted.value);

      // console.log(random1, random2, "random");

      const slicedText =
        splitted.value.slice(0, random1) +
        "_" +
        splitted.value.slice(random1 + 1, random2) +
        "_" +
        splitted.value.slice(random2 + 1);
      return slicedText;
    });

    watch(
      () => props.countryIndex,
      (newVal) => {
        splitted.value = props.country[newVal].name;
      }
    );
    return {
      compute,
      localAnswer,
      getAnswer,
      emitUpdateAnswer,
    };
  },
};
</script>

<style scoped>
.countryCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.flag {
  width: 100%;
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p {
  font-size: 24px;
  color: #40e9f1;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}
input {
  padding: 10px;
  font-size: 18px;
  /* border: none; */
  cursor: pointer;
}
input:focus {
  outline: none;
}
button {
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background-color: #0c233d;
  color: #40e9f1;
  cursor: pointer;
}
</style>

//* So first, use a javascript method to convert the word to an array //? Next
You need to find the index of each word in the array //! Then a function that
picks out 2 numbers from the array depending on the length from the length of
the word //* The input box would show depending on the missing letters //? The
input box would be a variable that would be used to store the user input //!The
variable would then now compare if the full answer matches what the users wrote
// If they match a score is added for the user // If they don't match the
attempt is increased by 1 //
