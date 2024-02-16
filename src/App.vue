<script>
export default {
  name: "App",
};
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style scoped>
.app {
  height: 100vh !important;
  max-height: 100vh !important;
  width: 100vw;
  overflow-y: auto;
}
</style>
