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
import { Icon } from "@iconify/vue";
export default {
  name: "Home",
  components: {
    Icon,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Alata&family=Archivo&family=Barlow:wght@600&family=Cabin:wght@500&family=Cinzel:wght@500;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Gilda+Display&family=Inclusive+Sans&family=Inter:wght@400;600&family=Josefin+Sans:wght@300;400;600&family=Lato:wght@400;700&family=League+Spartan:wght@400;500;700&family=Manrope:wght@300&family=Maven+Pro&family=Merriweather:wght@700&family=Montserrat:ital,wght@0,400;0,600;0,700;1,500&family=Nanum+Gothic&family=Nunito&family=Nunito+Sans:opsz@6..12&family=Open+Sans:ital,wght@0,400;0,500;0,700;1,600&family=Patrick+Hand&family=Playfair+Display:wght@500&family=Poppins&family=Rajdhani:wght@500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:wght@300;400&family=Saira&family=Ubuntu:wght@300;500;700&family=Unica+One&family=Varela&family=Varela+Round&display=swap");

.homeCon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  widows: 100vw;
  background-color: #0c1526;
  font-family: "Alata";
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
  font-family: "Inter";
}

@media (max-width: 500px) {
  .homeCon h1 {
    font-size: 24px;
  }
  .choiceBtn button {
    font-size: calc(16px + 0.25vw);
  }
}
</style>
