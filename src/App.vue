<template>
  <div id="app" class="flex">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet">
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
.flex{
  display:flex;
  flex-direction: column;
  margin:auto;
}

</style>
