<template>
  <div class="bodyMenu">
    <div class="headerMenu">
      <router-link to="/contact" class="logo"></router-link>
      <router-link to="/"> Gaming It </router-link>
      
      <div class="items">
        <router-link to="/games" class="active"> Juegos </router-link>
        <router-link to="/rankings"> Rankings </router-link>
        <router-link to="/myuser"> Perfil </router-link>
        <router-link to="/signup"> Regístrate </router-link>
        <router-link to="/signin"> Iniciar sesión </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
.bodyMenu {
  font-family: Arial, Helvetica, sans-serif;
}

.headerMenu {
  overflow: hidden;
  background-color: #1c221f ;
  padding: 10px 10px;
}

.headerMenu a {
  float: left;
  color: #dedede;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

 .headerMenu a:hover {
  background-color: #ddd;
  color: black;
}

.headerMenu a.active {
  background-color: dodgerblue;
  color: white;
}

.items {
  float: right;
}

.logo {
  content: url("https://cdn.glitch.com/db77d28a-8547-4c40-8473-0852380d676e%2Fmando1.ico?v=1607165029366");
}

@media screen and (max-width: 500px) {
  .headerMenu a {
    float: none;
    display: block;
    text-align: left;
  }

  .items {
    float: none;
  }
}
</style>