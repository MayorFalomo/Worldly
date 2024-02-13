<template>
  <div class="footerContainer">
    <button>Show</button>
    <p>Player</p>
    <button @click="next">Skip</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "Footer",
  props: {
    countryData: Array,
    countryIndex: Number,
    storedIndex: Number,
    numbered: Number,
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
  background-color: #0d2f5f;
  /* background-color: #2c3e50; */
  color: white;
  padding: 10px;
  /* position: fixed;
  bottom: 0;
  left: 0; */
  /* border-top: 1px solid #42b983; */
}
button {
  padding: 8px 15px;
  font-size: 20px;
  cursor: pointer;
  background-color: #0e3f6f;
  color: #3bf1fe;
  border: #52a5be;
}
p {
  font-size: 24px;
  color: #3bf1fe;
}
</style>
