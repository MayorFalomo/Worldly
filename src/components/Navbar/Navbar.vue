<template>
  <nav>
    <h1>Worldly</h1>
    <ul>
      <li>Score {{ score }}</li>
      <li>attempts {{ attempts }}</li>
    </ul>
    <div class="userPrefs">
      <router-link to="/"><span> Home</span></router-link>
      <span> moon </span>
      <div class="userDp">
        <img src="./personOne.jpg" alt="img" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    score: Number,
    attempts: Number,
  },
  components: {},
  setup() {
    return {};
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #16386e;
  color: white;
  width: 100%;
  /* position: fixed;
  top: 0;
  left: 0; */
  z-index: 100;
}
h1 {
  font-size: 35px;
  color: #f9af5a;
}
ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

li {
  list-style: none;
  font-size: 20px;
}

.userPrefs {
  display: flex;
  align-items: center;
  gap: 25px;
}

img {
  /* width: 100%; */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
