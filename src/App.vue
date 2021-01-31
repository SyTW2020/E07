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
import { InputText } from './utils';

export default {
  name: "App",
  components: {
    Menu: Menu,
    Footer: Footer,
    InputText
  }
};
</script>

<style>
body {
  margin: 0;
}

</style>
