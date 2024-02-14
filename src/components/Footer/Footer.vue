<template>
  <div :id="darkmode" class="footerContainer">
    <button>Show</button>
    <h2>Player</h2>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Footer",
  props: {
    countryData: Array,
    countryIndex: Number,
    storedIndex: Number,
    numbered: Number,
    darkmode: String,
  },
  setup(props, { emit }) {
    const index = ref(0);

    //Function to got the next country, It gets a random value between 1 and the length of the array. Then emits that value and sets it equal to the countryIndex in the parent components
    const next = () => {
      const randomIndex = Math.floor(Math.random() * (props.storedIndex - 1));
      emit("nextCountry", randomIndex);
      // console.log("emitted");
    };

    // console.log(props.countryData);
    return {
      next,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Alata&family=Archivo&family=Barlow:wght@600&family=Cabin:wght@500&family=Cinzel:wght@500;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Gilda+Display&family=Inclusive+Sans&family=Inter:wght@400;600&family=Josefin+Sans:wght@300;400;600&family=Lato:wght@400;700&family=League+Spartan:wght@400;500;700&family=Manrope:wght@300&family=Maven+Pro&family=Merriweather:wght@700&family=Montserrat:ital,wght@0,400;0,600;0,700;1,500&family=Nanum+Gothic&family=Nunito&family=Nunito+Sans:opsz@6..12&family=Open+Sans:ital,wght@0,400;0,500;0,700;1,600&family=Patrick+Hand&family=Playfair+Display:wght@500&family=Poppins&family=Rajdhani:wght@500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:wght@300;400&family=Saira&family=Ubuntu:wght@300;500;700&family=Unica+One&family=Varela&family=Varela+Round&display=swap");

.footerContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  font-family: "Alata";
  /* height: 10%; */
  /* background-color: #2c3e50; */
  /* color: white; */
  padding: 10px;
  /* position: fixed;
  bottom: 0;
  left: 0; */
  /* border-top: 1px solid #42b983; */
}
#light {
  background-color: #adadad97;
  color: #000;
}
#dark {
  background-color: #0d2f5f;
  color: #fff;
}
button {
  padding: 8px 15px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 7px;
  font-family: "Inter";
}
#dark button {
  background-color: #0e3f6f;
  color: #3bf1fe;
  border: #52a5be;
  transition: 0.4s ease-in-out;
}
#dark button:hover {
  background-color: transparent;
  color: #3bf1fe;
  border: 1px #52a5be solid;
  transition: 0.4s ease-in-out;
}
#light button {
  background-color: #000;
  color: #fff;
  transition: 0.4s ease-in-out;
}
#light button:hover {
  background-color: #fff;
  color: #000;
  border: #000 1px solid;
  transition: 0.4s ease-in-out;
}

h2 {
  font-size: 28px;
  /* color: #3bf1fe; */
}
#light h2 {
  color: #000;
}
#dark h2 {
  color: #3bf1fe;
}

@media (max-width: 550px) {
  h2 {
    font-size: 22px;
  }
  button {
    font-size: calc(17px + 0.25vw);
  }
}
</style>
