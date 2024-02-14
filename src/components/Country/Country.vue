<template>
  <div :id="darkmode" class="countryCon">
    <div class="flag">
      <img :src="country[countryIndex]?.flag" alt="img" />
    </div>
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
  name: "Country",
  props: {
    country: Object,
    countryIndex: Number,
    disableBtn: Boolean,
    score: Number,
    attempts: Number,
    answer: String,
    darkmode: String,
  },
  setup(props, { emit }) {
    const splitted = ref(props.country[props.countryIndex]?.name); //Name of the country
    const localAnswer = ref(""); //Gets the answer in the input locally

    let randomNum1;
    let randomNum2;
    let random1;
    let random2;

    const getAnswer = () => {
      //Check if the answer is correct
      if (
        props.answer.toLowerCase() ==
        props.country[props.countryIndex]?.name.toLowerCase()
      ) {
        //If you want to emit, emit what you passed as a prop, then pass how you want to update the value of what you want to emit
        emit("correct", props.score + 1);
        // answer.value = "";
      } else {
        emit("wrong", props.attempts + 1);
        // answer.value = "";
      }
    };

    //Watch the answer prop and update the local answer value when it changes
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

    //Using Computed property to run a function that chooses a random number from a string based on the length of the string it receives
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

      //This function receives a random number from the randomNumbers function then slices from 0 to the randomNumber then add _ then slices again from the second random number then concatenates and like that
      const slicedText =
        splitted.value?.slice(0, random1) +
        "_" +
        splitted.value?.slice(random1 + 1, random2) +
        "_" +
        splitted.value?.slice(random2 + 1);
      return slicedText;
    });

    //Watch function from vue here watches the props.countryIndex for changes and if it changes it sets the splitted value to the name of the current country
    watch(
      () => props.countryIndex,
      (newVal) => {
        splitted.value = props.country[newVal]?.name;
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
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Alata&family=Archivo&family=Barlow:wght@600&family=Cabin:wght@500&family=Cinzel:wght@500;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Gilda+Display&family=Inclusive+Sans&family=Inter:wght@400;600&family=Josefin+Sans:wght@300;400;600&family=Lato:wght@400;700&family=League+Spartan:wght@400;500;700&family=Manrope:wght@300&family=Maven+Pro&family=Merriweather:wght@700&family=Montserrat:ital,wght@0,400;0,600;0,700;1,500&family=Nanum+Gothic&family=Nunito&family=Nunito+Sans:opsz@6..12&family=Open+Sans:ital,wght@0,400;0,500;0,700;1,600&family=Patrick+Hand&family=Playfair+Display:wght@500&family=Poppins&family=Rajdhani:wght@500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:wght@300;400&family=Saira&family=Ubuntu:wght@300;500;700&family=Unica+One&family=Varela&family=Varela+Round&display=swap");

.countryCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: "Alata";
}

.flag {
  width: 95%;
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p {
  font-size: 24px;
  /* color: #40e9f1; */
}
#dark p {
  color: #40e9f1;
}
#light p {
  color: #000;
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
  border-radius: 8px;
}
input::placeholder {
  font-family: "Inter";
}
input:focus {
  outline: none;
}
button {
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: "Inter";
}
#dark button {
  background-color: #0c233d;
  color: #40e9f1;
}
#light button {
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  transition: 0.4s ease-in-out;
}
#light button:hover {
  color: #000;
  background-color: #adadad;
  border: 1px solid #000;
  transition: 0.4s ease-in-out;
}

@media (max-width: 650px) {
  .flag {
    width: 90%;
    height: 150px;
  }
  p {
    font-size: 16px;
  }
  input {
    width: 95% !important;
    font-size: 16px;
  }
  button {
    padding: 5px 10px;
    font-size: calc(17px +0.25vw);
  }
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
