<template>
  <div :id="darkmode" class="footerContainer">
    <button>Show</button>
    <h2>Player</h2>
    <button @click="next">Skip</button>
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
.footerContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
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
  /* border: #fff 1px solid; */
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
</style>
