<template>
  <div id="app" class="container">
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu: Menu
  }
};
</script>

<style>
body {
  margin: 0;
}

.container {
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
}
</style>
