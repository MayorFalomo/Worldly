<template>
  <div :id="darkmode" class="capitalCon">
    <p>
      {{ numbered }}. What is the capital of {{ country[countryIndex]?.name }} ?
    </p>
    <p>{{ compute }}</p>
    <form @submit.prevent="getAnswer">
      <input
        type="text"
        placeholder="Enter the country name"
        v-model.trim="localAnswer"
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
  name: "Capital",
  props: {
    country: Object,
    countryIndex: Number,
    disableBtn: Boolean,
    score: Number,
    attempts: Number,
    answer: String,
    numbered: Number,
    darkmode: String,
  },
  setup(props, { emit }) {
    //First Split a string into an array
    const splitted = ref(props.country[props.countryIndex]?.capital);
    const localAnswer = ref("");

    let randomNum1;
    let randomNum2;
    let random1;
    let random2;

    const getAnswer = () => {
      if (
        props.answer.toLowerCase() ==
        props.country[props.countryIndex]?.capital.toLowerCase()
      ) {
        //If you want to emit, emit what you passed as a prop, then pass how you want to update the value of what you want to emit
        emit("correct", props.score + 1);
        // answer.value = "";
      } else {
        emit("wrong", props.attempts + 1);
        // answer.value = "";
      }
    };

    // Emit event to update answer in parent component
    const emitUpdateAnswer = () => {
      emit("update-answer", localAnswer.value);
    };

    //Using Computed property
    const compute = computed(() => {
      // return arr.sort(() => Math.random() - 0.5);
      function randomNumbers(string) {
        randomNum1 = Math.floor(Math.random() * string?.length);
        randomNum2 = Math.floor(Math.random() * string?.length);
        while (randomNum2 == randomNum1) {
          randomNum2 = Math.floor(Math.random() * string?.length);
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

      const slicedText =
        splitted.value?.slice(0, random1) +
        "_" +
        splitted.value?.slice(random1 + 1, random2) +
        "_" +
        splitted.value?.slice(random2 + 1);
      return slicedText;
    });

    watch(
      () => props.countryIndex,
      (newVal) => {
        splitted.value = props.country[newVal]?.capital;
      }
      // () => props.answer,
      // (newValue) => {
      //   localAnswer.value = newValue;
      // }
    );
    watch(
      () => props.answer,
      (newValue) => {
        localAnswer.value = newValue;
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
.capitalCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
/* .flag {
  width: 100%;
  height: 200px;
} */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p {
  font-size: 24px;
  color: #40e9f1;
  text-align: center;
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
