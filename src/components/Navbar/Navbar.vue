<template>
  <nav :id="darkmode">
    <h1>Worldly</h1>
    <ul>
      <li>
        Score: <span>{{ score }}</span>
      </li>
      <li>
        Attempts: <span> {{ attempts }} </span>
      </li>
    </ul>
    <div class="userPrefs">
      <router-link to="/">Home</router-link>
      <span @click="switchBgMode('light')" v-if="!switchMode">
        <Icon icon="noto:sun" />
      </span>
      <span @click="switchBgMode('dark')" v-else>
        <Icon icon="entypo:moon" />
      </span>
      <div class="userDp">
        <img src="./personOne.jpg" alt="img" />
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "Navbar",
  props: {
    score: Number,
    attempts: Number,
    darkmode: String,
    switchMode: true,
  },
  components: {
    Icon,
  },
  setup(props, { emit }) {
    const switchBgMode = (bgMode) => {
      emit("switchBg", `${bgMode}`);
    };

    // console.log(props.darkmode, "darkmode");
    return {
      switchBgMode,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Alata&family=Archivo&family=Barlow:wght@600&family=Cabin:wght@500&family=Cinzel:wght@500;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Gilda+Display&family=Inclusive+Sans&family=Inter:wght@400;600&family=Josefin+Sans:wght@300;400;600&family=Lato:wght@400;700&family=League+Spartan:wght@400;500;700&family=Manrope:wght@300&family=Maven+Pro&family=Merriweather:wght@700&family=Montserrat:ital,wght@0,400;0,600;0,700;1,500&family=Nanum+Gothic&family=Nunito&family=Nunito+Sans:opsz@6..12&family=Open+Sans:ital,wght@0,400;0,500;0,700;1,600&family=Patrick+Hand&family=Playfair+Display:wght@500&family=Poppins&family=Rajdhani:wght@500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:wght@300;400&family=Saira&family=Ubuntu:wght@300;500;700&family=Unica+One&family=Varela&family=Varela+Round&display=swap");

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  /* background-color: #16386e; */
  color: #000;
  font-size: 18px;
  width: 100%;
  font-family: "Alata";
}

#dark {
  background-color: #16386e;
}
#light {
  background-color: #adadad;
}
#light h1 {
  font-size: 35px;
  color: #16386e;
}
#dark h1 {
  font-size: 35px;
  color: #f9af5a;
  font-family: "Open Sans";
}
#light a {
  color: black;
  font-family: "Open Sans";
}
#dark a {
  color: white;
  font-family: "Open Sans";
}
ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

#light li {
  list-style: none;
  font-size: 20px;
  /* color: #000; */
}
#dark li {
  list-style: none;
  font-size: 20px;
  color: #fff;
  font-family: "Alata";
}

.userPrefs {
  display: flex;
  align-items: center;
  gap: 25px;
}

img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.userPrefs span {
  cursor: pointer;
  font-family: "Alata";
  font-size: 22px;
}

@media (max-width: 550px) {
  nav {
    gap: 20px !important;
    overflow: auto !important;
  }
  nav::-webkit-scrollbar {
    width: 0;
  }
  nav h1 {
    font-size: 25px !important;
  }
  ul {
    display: flex !important;
    align-items: center;
    gap: 10px !important;
  }
  ul li {
    list-style: none;
    display: flex !important;
    align-items: center !important;
    gap: 5px !important;
    font-size: 16px !important;
    width: fit-content;
  }
  a {
    font-size: 16px !important;
  }
  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  .userPrefs {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
  }
  .userPrefs span {
    font-size: 20px !important;
  }
}
</style>
