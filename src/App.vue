<template>
  <div id="app" class="container">
    <Menu></Menu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Menu: Menu,
    Footer: Footer
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
