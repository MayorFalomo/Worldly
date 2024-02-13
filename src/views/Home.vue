<template>
  <div class="homeCon">
    <div class="choiceCon">
      <h1>Choose</h1>
      <div class="choiceBtn">
        <router-link to="/flags"><button>Flags</button></router-link>
        <router-link to="/capitals"><button>Capital</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.homeCon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  widows: 100vw;
  background-color: #0c1526;
  /* border: 2px red solid; */
}
.choiceCon {
  /* border: 2px red solid; */
}
.choiceBtn {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 20px auto;
  /* border: 2px red solid; */
}
.choiceBtn button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;
}
</style>
